<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Service;
use App\Models\User;
use Carbon\Carbon;
use Carbon\CarbonPeriod;
use Illuminate\Http\Request;

class AnalyticsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function sales()
    {
        $to = Carbon::now();
        $from = Carbon::tomorrow()->subDays(6);
        $date_range = CarbonPeriod::create($from, $to);
        $days = array();
        $result = array();
        foreach ($date_range as $d) {
            $days[] = strToUpper($d->format('D'));
            $date = $d->toDateString();
            $result[] = Service::whereDate('created_at', $date)->count();
        }
        return response()->json(['days' => $days, 'sales' => $result], 200);
    }

    public function count(Request $request)
    {
        $result = [];
        //$couriersource = Lead::where('deleted_by',null);
        $result['Products'] = Product::where('company_id', $request->company_id)->count();
        $result['Services'] = Service::where('company_id', $request->company_id)->count();
        $result['Customers'] = User::whereHas('userCompany',function($q)use($request){
            $q->where('company_id',$request->company_id);
            $q->where(function($q2){
                $q2->where('role','LIKE','Customer')->OrWhereNull('role');
            });
        })->count();
        $result['Users'] =
        User::whereHas('userCompany', function ($q)use($request) {
            $q->where('company_id',$request->company_id);
            $q->where('role', 'NOT LIKE', 'Customer');
        })->count();
        $result['Active'] =
        User::whereHas('userCompany', function ($q)use($request) {
            $q->where('company_id',$request->company_id);
            $q->where('role', 'NOT LIKE', 'Customer');
            $q->where('status',1);
        })->count();
        $result['Inactive'] =
        User::whereHas('userCompany', function ($q)use($request) {
            $q->where('company_id',$request->company_id);
            $q->where('role', 'NOT LIKE', 'Customer');
            $q->where('status',0);
        })->count();
        return response()->json($result, 200);
    }

    public function tasks(Request $request){
        $result=[];
        $result['Validation'] = Service::where('ticket_status', 'LIKE', '%Validation%')->count();
        $result['Processing'] = Service::whereNotIn('ticket_status', ['New','Ticket Raised', 'Delivered', 'Cancelled','Closed'])->count();
        $result['Closed'] = Service::where('ticket_status', 'LIKE', '%Closed%')->count();
        $result['Unassigned'] = Service::whereNull('assigned_to')->count();
        return response()->json($result, 200);
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
