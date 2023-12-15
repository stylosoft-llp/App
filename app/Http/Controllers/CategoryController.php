<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $c = Category::where('company_id', $request->company_id)->where(
            function ($q) {
                if (!empty($_GET['keyword']) && $_GET['keyword'] !== null) {
                    $q->where('name', 'LIKE', '%' . $_GET['keyword'] . '%');
                }
            }
        )->get();
        return response()->json($c, 200);
    }
    public function list(Request $request)
    {
        $c = Category::where('company_id', $request->company_id)->where(
            function ($q) {
                if (!empty($_GET['keyword']) || $_GET['keyword'] != null || $_GET['keyword'] != 'null') {
                    $q->where('name', 'LIKE', '%' . $_GET['keyword'] . '%');
                }
            }
        )->pluck('name');
        return response()->json($c, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $c = Category::create(['name' => $request->name, 'company_id' => $request->company_id]);
        return response()->json($c, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Category::find($id)->delete();
        return response()->json('Deleted', 200);
    }
}
