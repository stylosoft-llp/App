<?php

namespace App\Http\Controllers\Super;

use App\Http\Controllers\Controller;
use App\Models\Inquiry;
use App\Models\License;
use App\Models\Package;
use App\Models\Product;
use App\Models\Query;
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
            $result[] = License::whereDate('created_at', $date)->count();
        }
        return response()->json(['days' => $days, 'sales' => $result], 200);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function packages()
    {
        $l = [];
        $starter = License::where('package_id', 1)->count();
        $plus = License::where('package_id', 2)->count();
        $pro = License::where('package_id', 3)->count();
        return response()->json(['labels' => ["Starter", "Plus", "Pro"], 'data' => [$starter, $plus, $pro]], 200);
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


    public function count()
    {
        $result = [];
        //$couriersource = Lead::where('deleted_by',null);
        $result['Products'] = Product::count();
        $result['Queries'] = Inquiry::count();
        $result['Customers'] = User::whereHas('license')->count();
        $result['Packages'] = Package::count();
        /*         $result['New'] = Service::where('status', 'LIKE', '%New%')->count();
        $result['Processing'] = Service::whereNotIn('status', ['New','Delivered','Cancelled'])->count();
        $result['Delivered'] = Service::where('status', 'LIKE', '%Delivered%')->count();
        $result['Cancelled'] = Service::where('status', 'LIKE', '%Cancelled%')->count(); */
        return response()->json($result, 200);
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
