<?php

namespace App\Http\Controllers;

use App\Models\License;
use App\Models\Package;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LicenseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $package = Package::find($request->package_id);
        $userId = Auth::user()->id;
        $l = License::create([
            'name'=> $package->name,
            'package_id'=>$package->id,
            'user_id'=>$userId,
            'expires_on'=>now()->addDays(30),
            'admins'=>$package->admins,
            'subadmins'=>$package->subadmins,
            'engineers'=>$package->engineers
        ]);
        return response()->json($l, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\License  $license
     * @return \Illuminate\Http\Response
     */
    public function show(License $license)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\License  $license
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, License $license)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\License  $license
     * @return \Illuminate\Http\Response
     */
    public function destroy(License $license)
    {
        //
    }
}
