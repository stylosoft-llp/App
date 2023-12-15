<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Validator;

class AuthController extends Controller
{
    public $success = 200;
    /** 
     * login api 
     * 
     * @return \Illuminate\Http\Response 
     */
    public function login()
    {
        if (Auth::attempt(['email' => request('email'), 'password' => request('password')])) {
            $user = Auth::user();
            $success['token'] =  $user->createToken('MyApp')->accessToken;
            return response()->json(['success' => $success], $this->success);
        } else {
            return response()->json(['error' => 'Invalid username or password'], 401);
        }
    }
    /** 
     * Register api 
     * 
     * @return \Illuminate\Http\Response 
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:20',
            'email' => 'required|email|unique:users|max:40',
            'phone' => 'required|unique:users|max:20',
            'password' => 'required|string|min:8|max:20',
            //'c_password' => 'required|same:password',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 401);
        }
        $input = $request->only('name','user_name','email','phone','password');
        $input['user_name'] = explode("@",$request->email)[0];
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] =  $user->createToken('MyApp')->accessToken;
        $success['name'] =  $user->name;
        return response()->json(['success' => $success], $this->success);
    }
    /** 
     * details api 
     * 
     * @return \Illuminate\Http\Response 
     */
    public function details()
    {
        $user = Auth::user();
        $user['role'] = $user->role()->pluck('name');
        $user['company'] = $user->company()->first();
        $user['license'] = $user->license;
        $user['present'] = Cache::get('present_'.$user->id);
        return response()->json(['success' => $user], $this->success);
    }
    /**
     * Role Check
     */
        public function role()
    {
        $role = Auth::user()->roles();
        return response()->json(['success' => $role], $this->success);
    }
    
    public function markPresent()
    {
        $user = Auth::user();
        $endOfDay = Carbon::now()->endOfDay();
        $c = Cache::put('present_'.$user->id, true, $endOfDay);
        return response()->json($c, $this->success);
    }

    public function logout(Request $request){
        $request->user()->token()->revoke();
        return response()->json('Success');
    }
}
