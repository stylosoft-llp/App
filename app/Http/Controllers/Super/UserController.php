<?php

namespace App\Http\Controllers\Super;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\License;
use App\Models\Package;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $users = User::with('company:id,license_id,name','license')->where(function ($q) {
            if (!empty($_GET['name'])) {
                $q->orWhere('name', 'LIKE', '%' . $_GET['name'] . '%');
                $q->orWhere('email', 'LIKE', '%' . $_GET['name'] . '%');
            }
            /*                 $q->whereHas('userCompany', function ($q2) {
                        $q2->where('role', null);
                        $q2->orWhere('role', 'Admin');
                }); */
            $q->whereHas('license');
            })->paginate();
        return response()->json($users, 200);
    }

    public function filter(){
       $user = User::where(function($q){
           if(!empty($_GET['name'])){
               $q->orWhere('name','LIKE','%'.$_GET['name'].'%');
               $q->orWhere('email','LIKE','%'.$_GET['name'].'%');
            }
        })->limit(10)->get();
        return response()->json($user,200);
    }

    public function show($id)
    {
        $user = User::with('company:id,license_id,name', 'license')->find($id);
        return response()->json($user, 200);
    }

    public function update(Request $request, $id){
        $input = $request->only('name','user_name','email','phone','password');
        $input['user_name'] = explode("@", $request->email)[0];
        if (!empty($request->password) || $request->password !== null) {
            $input['password'] = bcrypt($input['password']);
        }
        $user = User::updateOrCreate(
            ['id'=>$id],
            $input
        );
        if(!empty($request->license)){
            $pkg = Package::find($request->license);
            $l = License::UpdateOrCreate(
                ['user_id' => $user->id],
                [
                'name'=> $pkg->name,
                'package_id' => $pkg->id,
                'is_lifetime' => $pkg->is_lifetime ? $pkg->is_lifetime : 0,
                'expires_on' => now()->addDays(30),
                'admins' => $pkg->admins,
                'subadmins' => $pkg->subadmins,
                'engineers' => $pkg->engineers
            ]);
            if($user->hasCompany()){
                $user->company()->license_id = $l->id;
            }
        }
        return response()->json('Updated',201);
    }

    public function destroy($id)
    {
        if ($id === Auth::user()->id) {
            return response()->json('Cannot Delete Yourself', 400);
        }
        $l = License::where('user_id', $id)->pluck('id');
        Company::whereIn('license_id', $l)->delete();
        License::where('user_id', $id)->delete();
        $u = User::find($id)->delete();
        return response()->json('Deleted', 200);
    }
}
