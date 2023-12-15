<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\Service;
use App\Models\UserCompany;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;

class CompanyController extends Controller
{
    public function __construct()
    {
        $this->middleware(function ($request, $next) {
            if (!$request->user()->hasLicense()) {
                abort(402, 'Please Purchase or Renew License');
            }
            return $next($request);
        })->except(['destroy']);
    }

    public function countServices(Request $request)
    {
        /*         $result = Cache::remember('svcount' . $request->company_id, 5000, function () use ($request) { */
        $svc = Service::where('company_id', $request->company_id);
        $svcount = [];
        $svcount['installation'] = Service::where('company_id', $request->company_id)->where('type', 'LIKE', '%Installation%')->where('ticket_status','NOT LIKE','%Closed%')->count();
        $svcount['replacement'] = Service::where('company_id', $request->company_id)->where('type', 'LIKE', '%Replacement%')->where('ticket_status','NOT LIKE','%Closed%')->count();
        $svcount['repair'] = Service::where('company_id', $request->company_id)->where('type', 'LIKE', '%Repair%')->where('ticket_status','NOT LIKE','%Closed%')->count();
        $svcount['completed'] = Service::where('company_id', $request->company_id)->where('ticket_status', 'LIKE','%Validation%')->count();
        $svcount['rescheduled'] = Service::where('company_id', $request->company_id)->where('ticket_status', 'LIKE','%Rescheduled%')->count();
        $svcount['closed'] = Service::where('company_id', $request->company_id)->where('ticket_status', 'LIKE','%Closed%')->count();
        /*             return $svcount;
        }); */
        return response()->json($svcount, 200);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $u = Auth::user();
        if ($u->company()->exists()) {
            return response()->json('Company Exists', 409);
        }
        $input = $request->all();
        $input['license_id'] = $u->license->id;
        $c = Company::create($input);
        UserCompany::create([
            'user_id' => $u->id,
            'company_id' => $c->id,
            'role' => 'Admin'
        ]);
        return response()->json($c, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function show(Company $company)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $company = Auth::user()->company()->update([$request->all()]);
        return response()->json($company, 201);
    }

    public function addLogo(Request $request)
    {
        $u = Auth::user();
        if (!$u->company()->exists()) {
            return response()->json('Company Does Not Exist', 409);
        }
        $file = $request->file('file');
        $company = $u->company()->first();
        $filename = $company->id . '.' . $file->getClientOriginalExtension();
        $path = $request->file('file')->store($request->path, ['disk' => 'public'], ['filename' => $filename]);
        $company->update(['logo_url' => $path]);
        return response()->json($u->company, 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function destroy(Company $company)
    {
        //
    }
}
