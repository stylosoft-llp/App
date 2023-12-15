<?php

namespace App\Http\Controllers\Super;

use App\Models\Company;
use App\Models\Service;
use App\Models\User;
use App\Models\UserCompany;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;

class CompanyController extends Controller
{
    public function __construct()
    {
        $this->middleware(function($request,$next){
            if (!$request->user()->hasLicense()) {
                abort(402, 'Please Purchase or Renew License');
            }
            return $next($request);
        })->except(['destroy']);
    }

    public function serviceCount(Request $request)
    {
        $result = Cache::remember('svcount' . $request->company_id, 172800, function () use ($request) {
            $svc = Service::where('company_id',$request->company_id);
            $svcount = [];
            $svcount['installation'] = $svc->where('service_type','LIKE', 'Installation')->count();
            $svcount['replacement'] = $svc->where('service_type','LIKE', 'Replacement')->count();
            $svcount['repair'] = $svc->where('service_type','LIKE', 'Repair')->count();
            $svcount['completed'] = $svc->where('ticket_status', 'completed')->count();
            return $svcount;
        });
        return response()->json($result, 200);
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
        $u = User::find($request->user_id);
        if($u->company()->exists()){
            return response()->json('Company Exists', 409);
        }
        $input = $request->all();
        $input['license_id'] = $u->license->id;
        $c = Company::create($input);
        UserCompany::create([
            'user_id'=>$u->id,
            'company_id'=>$c->id,
            'role'=>'Admin'
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
    public function update(Request $request, $id)
    {
        $company = Company::find($id);
        $company->update([$request->all()]);
        return response()->json($company, 201);
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
