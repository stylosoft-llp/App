<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\User;
use App\Models\UserCompany;
use App\Models\UserDetail;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $c = Company::find($request->company_id)->customers()->with('company:id,name', 'userDetail:user_id,company_name,address_1,consent_auth_1')->where(function ($q) {
            if (!empty($_GET['search'])) {
                $q->orWhere('name', 'LIKE', '%' . $_GET['search'] . '%');
                $q->orWhere('email', 'LIKE', '%' . $_GET['search'] . '%');
            }
        })->paginate(100);
        return response()->json($c, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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
        UserDetail::updateOrCreate(['user_id' => $user->id], $request->userDetail);
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
        UserCompany::where('user_id', $id)->delete();
        User::find($id)->delete();
        return response()->json('Deleted', 200);
    }
}
