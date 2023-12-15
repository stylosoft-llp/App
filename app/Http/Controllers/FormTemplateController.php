<?php

namespace App\Http\Controllers;

use App\Models\FormTemplate;
use Illuminate\Http\Request;

class FormTemplateController extends Controller
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\FormTemplate  $formTemplate
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $type = '%'.$_GET['type'].'%';
        $formTemplate = FormTemplate::where('product_id',$id)->where('type','LIKE',$type)->first();
        return response()->json($formTemplate,200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\FormTemplate  $formTemplate
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $res = FormTemplate::updateOrCreate(['product_id'=>$id, 'type'=>$request->type],['data'=>$request->data]);
        return response()->json($res, 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\FormTemplate  $formTemplate
     * @return \Illuminate\Http\Response
     */
    public function destroy(FormTemplate $formTemplate)
    {
        //
    }
}
