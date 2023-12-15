<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\UserCompany;
use App\Models\UserDetail;
use App\Models\Service;
use Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{

    public function index(Request $request)
    {
       
        $users = User::with('company:id,license_id', 'company.license:id,expires_on','assignee')->where('company', function ($q) use ($request) {
            $q->where('company_id', $request->company_id);
        })->where(function ($q) {
            // if (!empty($_GET['search'])) {   
            //     $q->WhereHas('assignee',function($q2){
            //         $q2->where('name', 'LIKE', '%' . $_GET['search'] . '%');
            //     });
            // }
            if (!empty($_GET['search'])) {
                $q->Where('name', 'LIKE', '%' . $_GET['search'] . '%');
                $q->Where('email', 'LIKE', '%' . $_GET['search'] . '%');
            }
            if (!empty($_GET['role'])) {
                $q->whereHas('userCompany', function ($q) {
                    if ($_GET['role'] === 'customer') {
                        where('role', null);
                    } else {
                        $q->where('role', $_GET['role']);
                    };
                });
            }
        })->paginate();
        return response()->json($users, 200);
    }

    public function show(Request $request, $id)
    {
        $user = User::find($id);
        $user['role'] = $user->company[0]->role;
        return response()->json($user, 200);
    }

    public function filter(Request $request)
    {
        $user = User::with('userDetail')->select('id', 'name')
            ->whereHas('company', function ($q) use ($request) {
                $q->where('company_id', $request->company_id);
                if (!empty($_GET['is']) && $_GET['is'] == 'Customer') {
                    $q->where('role', 'LIKE', 'Customer');
                }
                if (!empty($_GET['is']) && $_GET['is'] == 'Employee') {
                    $q->whereIn('role', ['Subadmin', 'Admin', 'Engineer']);
                }
            })->where(function ($q) {
                if (!empty($_GET['name'])) {
                    $q->orWhere('name', 'LIKE', '%' . $_GET['name'] . '%');
                    $q->orWhere('email', 'LIKE', '%' . $_GET['name'] . '%');
                    if (!empty($_GET['is']) && $_GET['is'] == 'Customer') {
                        $q->orWhereHas('userDetail',function($q2){
                            $q2->where("company_name",'LIKE', '%' . $_GET['name'] . '%');
                        });
                    }
                }
            })->limit(10)->get();
        foreach ($user as $u) {
            $u['present'] = Cache::get('present_' . $u->id);
        }
        return response()->json($user, 200);
    }

    public function getZones($id)
    {
        $user = UserDetail::where('user_id', $id)->first();
        $zones = [];
        if (!empty($user) && $user != null) {
            $zones = $user->addresses;
        }
        return response()->json($zones, 200);
    }

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
        UserCompany::updateOrCreate([
            'company_id' => $request->company_id,
            'user_id' => $user->id,
        ], [
            'role' => $request->user_role
        ]);
        return response()->json('Updated', 201);
    }
}
