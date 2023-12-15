<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HasCompany
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if(!$request->user()->hasCompany()){
            abort(428,'Create Company First');
        }
        $company = DB::table('user_companies')->where('user_id', $request->user()->id)->first();
        $request->merge(['company_id' => $company->company_id, 'role'=>$company->role, 'permissions' => json_decode($company->permissions)]);
        return $next($request);
    }
}
