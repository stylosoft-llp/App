<?php

namespace App\Http\Controllers;

use App\Helpers\Helpers;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $p = Product::where('company_id', $request->company_id)->where(function ($q) {
            empty($_GET['search']) ?: $q->where('name', 'LIKE', '%' . $_GET['search'] . '%');
            empty($_GET['category']) ?: $q->where('category', 'LIKE', '%' . $_GET['category'] . '%');
        })->orderBy('name','asc')->paginate(50);
        return response()->json($p, 200);
    }

    public function filter(Request $request)
    {
        $user = Product::select('id', 'name')->where('company_id', $request->company_id)->where(function ($q) {
            if (!empty($_GET['name'])) {
                $q->where('name', 'LIKE', '%' . $_GET['name'] . '%');
            }
        })->orderBy('name', 'asc')->limit(10)->get();
        return response()->json($user, 200);
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
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return response()->json($product, 200);
    }

    public function importCsv(Request $request)
    {
        $file = $request->file('csv');
        $data = Helpers::csvToArray($file);
        $userId = Auth::user()->id;
        DB::beginTransaction();
        try {
            foreach ($data as $dt) {
                Product::create([
                    'name' => $dt['name'],
                    'slug' => $dt['code'],
                    's_desc' => !empty($dt['s_desc'])?$dt['s_desc']:"",
                    'l_desc' => $dt['l_desc']?$dt['l_desc']:"",
                    'category'=>$dt['category'],
                    'installation' => (strtolower($dt['installation']) == 'yes' ? 1 : 0),
                    'replacement' => (strtolower($dt['replacement']) == 'yes' ? 1 : 0),
                    'repair' => (strtolower($dt['repair']) == 'yes' ? 1 : 0),
                    'company_id' => $request->company_id,
                    'status' => (strtolower($dt['status']) == 'active' ? 'Active' : 'Inactive')
                ]);
            }
        } catch (Exception $e) {
            DB::rollBack();
            return response()->json($e, 406);
        }
        DB::commit();
        return response()->json('Success', 201);
    }

    public function exportCSV(Request $request){
        $headers = [
            'Content-Type' => 'text/csv',
        ];

        $columns = array('Id', 'Name', 'Short Desc', 'Long Desc', 'Category','Status');
        $p = Product::where('company_id', $request->company_id)->get();
        $callback = function () use ($p, $columns) {
            $file = fopen('php://output', 'w');
            fputcsv($file, $columns);

            foreach ($p as $task) {
                $row['Id']  = $task->id;
                $row['Name']    = $task->name;
                $row['Short Desc']    = $task->s_desc;
                $row['Long Desc']  = $task->l_desc;
                $row['Category']  = $task->category;
                $row['Status']  = $task->status;

                fputcsv($file, array($row['Id'], $row['Name'], $row['Short Desc'], $row['Long Desc'], $row['Category'],$row['Status']));
            }

            fclose($file);
        };
        return response()->stream($callback, 200, $headers);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $input = $request->all();
        /*         if(in_array('admin',$request->role)); */
        $product = Product::updateOrCreate(['id' => $id], $input);
        return response()->json($product, 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, Product $product)
    {
        $product->delete();
        return response()->json('Deleted', 200);
    }
}
