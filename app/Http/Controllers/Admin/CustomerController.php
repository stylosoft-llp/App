<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\Helpers;
use App\Http\Controllers\Controller;
use App\Jobs\bulkImport;
use App\Models\Company;
use App\Models\FormTemplate;
use App\Models\Product;
use App\Models\User;
use App\Models\UserCompany;
use App\Models\UserDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class CustomerController extends Controller
{

    public function cloneForm(Request $request)
    {
        $products = Product::where('id', '>=', $request->range1)->where('id', '<=', $request->range2)->get();
        $f = FormTemplate::find($request->formTemplateId);
        foreach ($products as $pr) {
            FormTemplate::create([
                'title' => null,
                'data' => $f->data,
                'type' => $request->type,
                'product_id' => $pr->id
            ]);
        }
        return response()->json("Success", 200);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $c = Company::find($request->company_id)->customers()->with('company:id,name', 'userDetail:user_id,address_1,consent_auth_1')->where(function ($q) {
            if (!empty($_GET['name'])) {
                $q->orWhere('name', 'LIKE', '%' . $_GET['name'] . '%');
                $q->orWhere('email', 'LIKE', '%' . $_GET['name'] . '%');
            }
        })->paginate(100);
        return response()->json($c, 200);
    }

    public function exportCSV(Request $request)
    {
        $headers = array(
            "Content-type"        => "text/csv",
            "Content-Disposition" => "attachment; filename='customer_export.csv'",
            "Pragma"              => "no-cache",
            "Cache-Control"       => "must-revalidate, post-check=0, pre-check=0",
            "Expires"             => "0"
        );

        ini_set('max_execution_time', 3600);

        $columns = array( 'name', 'phone', 'email', 'password', 'address_1', 'address_2', 'cnsnt_auth_1', 'cnsnt_auth_1_phone', 'cnsnt_auth_2', 'cnsnt_auth_2_phone', 'city', 'state', 'country', 'designation', 'status', 'pincode', 'zone', 'company','company group');
        $p = Company::find($request->company_id)->customers()->with('company:id,name', 'userDetail')->get();
        $callback = function () use ($p, $columns) {
            $file = fopen('php://output', 'w');
            fputcsv($file, $columns);
            foreach ($p as $task) {
                $row['name']    = $task->name;
                $row['phone']    = $task->phone;
                $row['email']    = $task->email;
                $row['password']    = '**********';
                $row['address_1']    = $task->userDetail->address_1;
                $row['address_2']    = $task->userDetail->address_2;
                $row['cnsnt_auth_1']  = $task->userDetail->consent_auth_1;
                $row['cnsnt_auth_1_phone']  = $task->userDetail->consent_auth_1_phone;
                $row['cnsnt_auth_2']  = $task->userDetail->consent_auth_2;
                $row['cnsnt_auth_2_phone']  = $task->userDetail->consent_auth_2_phone;
                $row['city']  = $task->userDetail->city;
                $row['state']  = $task->userDetail->state;
                $row['country']  = $task->userDetail->country;
                $row['designation']  = $task->userDetail->designation;
                $row['status']  = $task->status == 1 ? 'Active' : "Inactive";
                $row['pincode']  = $task->userDetail->pincode;
                $row['zone']  = $task->userDetail->zone;
                $row['company']  = $task->userDetail->company_name;
                $row['company group']  = $task->userDetail->team;
                fputcsv($file, array($row['name'], $row['phone'], $row['email'], $row['password'], $row['address_1'], $row['address_2'], $row['cnsnt_auth_1'], $row['cnsnt_auth_1_phone'], $row['cnsnt_auth_2'], $row['cnsnt_auth_2_phone'], $row['city'], $row['state'], $row['country'], $row['designation'], $row['status'], $row['pincode'], $row['zone'], $row['company'],$row['company group']));
            }
            fclose($file);
        };
        return response()->stream($callback, 200, $headers);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function importCsv(Request $request)
    {
        $file = $request->file('csv');
        $data = Helpers::csvToArray($file);
        $userId = Auth::user()->id;
        $j = bulkImport::dispatchAfterResponse($data, $userId, $request->company_id);
        return response()->json('Success ' . $j, 201);
    }

    public function getImportCache(Request $request)
    {
        $c = Cache::get('bulkimport-' . $request->company_id);
        return response()->json($c, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $customer = User::with('userDetail')->find($id);
        return response()->json($customer, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $input = $request->only('name', 'email', 'phone', 'password');
        $input['user_name'] = explode("@", $request->email)[0];
        if (!empty($request->password) || $request->password !== null) {
            $input['password'] = bcrypt($input['password']);
        }
        $user = User::updateOrCreate(
            ['id' => $id],
            $input
        );
        $user->userDetail()->updateOrCreate($request->userDetail);
        UserCompany::updateOrCreate([
            'company_id' => $request->company_id,
            'user_id' => $user->id
        ], ['role' => 'Customer']);
        return response()->json('Updated', 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
