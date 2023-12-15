<?php

namespace App\Http\Controllers\Super;

use App\Http\Controllers\Controller;
use App\Models\Query;
use Illuminate\Http\Request;

class QueryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $q = Query::paginate(100);
        return response()->json($q, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $q = Query::create($request->all());
        return response()->json($q, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $q = Query::find($id);
        return response()->json($q, 200);
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
        $q = Query::find($id);
        $q->update($request->all());
        return response()->json($q, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $q = Query::find($id);
        $q->delete();
        return response()->json(null, 204);
    }
}
