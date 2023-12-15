<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\Helpers;
use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\License;
use App\Models\User;
use App\Models\UserCompany;
use App\Models\UserDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Validator;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $users = User::with('company:id,license_id', 'company.license:id,expires_on')->whereHas('company', function ($q) use ($request) {
            $q->where('company_id', $request->company_id);
        })->where(function ($q) {
            if (!empty($_GET['search'])) {
                $q->orWhere('name', 'LIKE', '%' . $_GET['search'] . '%');
                $q->orWhere('email', 'LIKE', '%' . $_GET['search'] . '%');
            }
            /*             if (!empty($_GET['role'])) {
                $q->whereHas('userCompany', function ($q) {
                    if ($_GET['role'] === 'customer'|| $_GET['role'] === 'Customer') {
                        $q->where('role', null);
                        $q->orWhere('role','Customer');
                    } else {
                        $q->where('role', $_GET['role']);
                    };
                });
            } */
        })
            ->whereHas('userCompany', function ($q) {
                $q->whereNotIn('role', ['Customer','customer']);
            })->paginate();
        return response()->json($users, 200);
    }

    public function show(Request $request, $id)
    {
        $user = User::find($id);
        $user['role'] = $user->company[0]->role;
        return response()->json($user, 200);
    }

    public function list()
    {
        $user = User::with('role')->get();
        return response()->json($user, 200);
    }

    public function filter()
    {
        $user = User::where(function ($q) {
            if (!empty($_GET['name'])) {
                $q->orWhere('name', 'LIKE', '%' . $_GET['name'] . '%');
                $q->orWhere('email', 'LIKE', '%' . $_GET['name'] . '%');
            }
        })->limit(10)->get();
        return response()->json($user, 200);
    }




    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:20',
            'email' => 'required|email|max:40|unique:users,email,'.$request->id,
            'phone' => 'required|max:20|unique:users,phone,'.$request->id,
            //'c_password' => 'required|same:password',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        $input = $request->only('name', 'user_name', 'email', 'phone', 'password');
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

    public function exportCSV(Request $request)
    {
        $headers = array(
            "Content-type"        => "text/csv",
            "Content-Disposition" => "attachment; filename='employee_export.csv'",
            "Pragma"              => "no-cache",
            "Cache-Control"       => "must-revalidate, post-check=0, pre-check=0",
            "Expires"             => "0"
        );

        $columns = array('name', 'phone', 'email', 'password');
        $p = UserCompany::with('user')->where('company_id',$request->company_id)->where('role','NOT LIKE','%ustomer%')->get();
         $callback = function () use ($p, $columns) {
            $file = fopen('php://output', 'w');
            fputcsv($file, $columns);

            foreach ($p as $task) {
                $row['name']    = $task->user->name;
                $row['phone']    = $task->user->phone;
                $row['email']    = $task->user->email;
                $row['password']    = '**********';
                $row['role']    = $task->role;
                fputcsv($file, array($row['name'],$row['phone'],$row['email'],$row['password'],$row['role']));
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
        DB::beginTransaction();
        try {
            foreach ($data as $dt) {
                $u = User::create([
                    'name' => $dt['name'],
                    'email' => $dt['email'],
                    'phone' => $dt['phone'],
                    'status' => $dt['status'],
                    'password' => bcrypt($dt['password']),
                ]);
                UserCompany::create([
                    'user_id' => $u->id, 'company_id' => $request->company_id,
                    'role' => $dt['role']
                ]);
            }
        } catch (Exception $e) {
            DB::rollBack();
            return response()->json($e, 406);
        }
        DB::commit();
        return response()->json('Success', 201);
    }

    public function destroy($id)
    {
        if ($id === Auth::user()->id) {
            return response()->json('Cannot Delete Yourself', 400);
        }
        $u = User::find($id)->delete();
        return response()->json('Deleted', 200);
    }
}
