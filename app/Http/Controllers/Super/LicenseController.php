<?php

namespace App\Http\Controllers\Super;

use App\Http\Controllers\Controller;
use App\Models\License;
use Illuminate\Http\Request;

class LicenseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $licenses = License::with('package')->where(function($q){
            if(!empty($_GET['date']) && $_GET['date']!==null){
                $date = explode("-", $_GET['date']);
                $nextM = $date[1]+1;
                $q->whereBetween('created_at',[$date[0].'-'.$date[1].'-01', $date[0].'-'.$nextM.'-01']);
            }
        })->limit(1000)->get();
        $lsum = 0;
        foreach($licenses as $l){
            $lsum+=intval($l->package->sale_price);
        }
        return response()->json(['licenses'=>$licenses,'sum'=>$lsum],200);
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
