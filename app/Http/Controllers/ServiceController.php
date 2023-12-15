<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\Form;
use App\Models\FormTemplate;
use App\Models\Product;
use App\Models\Service;
use App\Models\UserDetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ServiceController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    { 
        $startDate = $request->input('date_start');
    $endDate = $request->input('date_end');
        $p = Service::with(['product', 'assignee', 'customer.userDetail', 'form:id,service_id'])->where('company_id', $request->company_id)
        ->where(function ($q) use ($startDate, $endDate) {
            // ... existing filters ...

            // Date range filtering
            if (!empty($startDate) && !empty($endDate)) {
                $q->whereBetween('created_at', [$startDate, $endDate]);
            }

            // ... existing filters ...
        })
        ->where(function ($q) {
            
            if(!empty($_GET['search'])){
                $q->whereHas('customer',function($q2){
                    $q2->where('name', 'LIKE', '%' . $_GET['search'] . '%');
                    $q2->orWhereHas('userDetail',function($q3){
                        $q3->where('company_name','LIKE', '%' . $_GET['search'] . '%');
                    });
                   
                });
                $q->orWhereHas('assignee',function($q2){
                    $q2->where('name', 'LIKE', '%' . $_GET['search'] . '%');
                });
                $q->orWhereHas('assignee',function($q2){
                    $q2->where('name', 'LIKE', '%' . $_GET['search'] . '%');
                });
                $q->orWhereHas('product', function ($q4) {
                    $q4->where('name', 'LIKE', '%' . $_GET['search'] . '%');
                });
                $q->orWhereHas('customer',function ($q5) {
                    $q5->where('ticket_status', 'LIKE', '%' . $_GET['search'] . '%');
                });
                $q->orWhereHas('customer',function ($q5) {
                    $q5->where('id', 'LIKE', '%' . $_GET['search'] . '%');
                });
                $q->orWhereHas('form',function ($q5) {
                    $q5->where('created_at', 'LIKE', '%' . $_GET['search'] . '%');
                });
            }
            if (!empty($_GET['assigned_to'])) {
                $q->where('assigned_to', $_GET['assigned_to']);
            }
            if (!empty($_GET['notClosed']) && $_GET['notClosed'] === '1') {
                $q->where('ticket_status', 'NOT LIKE', 'Closed');
            }
            if (!empty($_GET['type'])) {
                switch ($_GET['type']) {
                    case 'completed':
                        $q->where('ticket_status','LIKE','Validation');
                        break;
                    case 'rescheduled':
                        $q->where('ticket_status','LIKE','Rescheduled');
                        break;
                    case 'closed':
                        $q->where('ticket_status', 'LIKE', 'Closed');
                        break;
                    default:
                        $q->where('type', 'LIKE', '%'.$_GET['type'].'%');
                }
            }
        })->orderBy('created_at','desc')->paginate(50);
        return response()->json($p, 200);
    }

    public function getTickets(Request $request)
    {
        $customerId = Auth::user()->id;
        $p = Service::with(['product', 'assignee', 'company:id,name'])->where('customer_id', $customerId)->where(function ($q) {
            empty($_GET['search']) ?: $q->where('name', 'LIKE', '%' . $_GET['search'] . '%');
            if (!empty($_GET['type'])) {
                $_GET['type'] == 'assigned' ? $q->whereNotNull('assigned_to') : $q->whereNull('assigned_to');
            }
        })->paginate(50);
        return response()->json($p, 200);
    }

    public function getServicesByDate()
    {
        $svc = Service::with('assignee:id,name')->select('id', 'name', 'expected_date', 'assigned_to')->whereNotNull('expected_date')->orderBy('created_at', 'desc')->get();
        $res = [];
        foreach ($svc as $s) {
            $r = [];
            $r['id'] = $s->id;
            $r['start'] = $s->expected_date->format('Y-m-d');
            $r['color'] = 'blue';
            $r['name'] = $s->assignee->name;
            $res[] = $r;
        }
        return response()->json($res, 200);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexForExec(Request $request)
    {
        $userId = Auth::user()->id;
        $p = Service::with(['product', 'assignee', 'customer.userDetail'])->where('assigned_to', $userId)->where(function ($q) {
            empty($_GET['search']) ?: $q->where('name', 'LIKE', '%' . $_GET['search'] . '%');
            if (!empty($_GET['type'])) {
                if($_GET['type']=='completed'){
                    $q->whereIn('ticket_status',['validation','completed','closed']);
                } else if ($_GET['type']=='pending') {
                    $q->whereNotIn('ticket_status', ['validation', 'completed', 'closed']);
                }
            }
        })->orderBy('created_at', 'desc')->paginate(100);
        return response()->json($p, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function createNewTicket(Request $request)
    {
        $input = $request->only('name', 'product_id', 'service_type','type', 'company_id','zone');
        $user = Auth::user()->id;
        if (!empty($request->customer_id)) {
            if ($request->role !== 'Customer') {
                $input['customer_id'] = $request->customer_id;
                $input['ticket_status'] = 'Assigned';
                $input['assigned_to'] = $user;
            } else {
                abort(403, 'Only Staff Can Raise Tickets on Behalf of Customers');
            }
        } else {
            $input['customer_id'] = $user;
        }
        $svc = Service::create($input);
        $formTemplate = FormTemplate::where('product_id', $request->product_id)->where('type', $request->service_type)->first();
        if (!empty($formTemplate) && $formTemplate !== null) {
            Form::create(['title' => $formTemplate->id, 'data' => $formTemplate->data, 'service_id' => $svc->id]);
        }
        return response()->json('Created', 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        $s = Service::with('product:id,name', 'customer.userDetail', 'assignee:id,name', 'form:id,service_id,data')->find($id);
        if ($s->company_id == $request->company_id) {
            return response()->json($s, 200);
        } else {
            abort(400, 'Not Yours');
        }
    }
    public function exportCSV(Request $request)
    {
        $headers = [
            'Content-Type' => 'text/csv',
        ];
        
        //Top of the row
        $columns = array('S No', 'Customer #','Customer Name','Company Name', 'Company E-Mail','Expected Date','Serviced On','Service Type','Assigned To','Product','Created At','Form Filled','Ticket Status','Employee Name','Start Time');
        //Fetching service with relationship "customer" with relationship "userDetail"
        //Relationship "customer" is in model Service.php (belongsTo->User)
        //Then "userDetail" relationship is in model User.php (hasOne->userDetail)
        //You can find or create relationships like this
        $searchKeywords = $request->input('search'); // Get the search query from the request
    // Query to fetch the data and apply filtering based on searchKeywords 
    $startDate = $request->input('date_start');
    $endDate = $request->input('date_end');
        $query = Service::with(['product', 'assignee', 'customer.userDetail', 'form:id,service_id'])->where('company_id', $request->company_id)
        ->where(function ($q) use ($startDate, $endDate) {
            // ... existing filters ...

            // Date range filtering
            if (!empty($startDate) && !empty($endDate)) {
                $q->whereBetween('created_at', [$startDate, $endDate]);
            }

            // ... existing filters ...
        })
        ->where(function ($q) {
            
            if(!empty($_GET['search'])){
                $q->whereHas('customer',function($q2){
                    $q2->where('name', 'LIKE', '%' . $_GET['search'] . '%');
                    $q2->orWhereHas('userDetail',function($q3){
                        $q3->where('company_name','LIKE', '%' . $_GET['search'] . '%');
                    });
                   
                });
                $q->orWhereHas('assignee',function($q2){
                    $q2->where('name', 'LIKE', '%' . $_GET['search'] . '%');
                });
                $q->orWhereHas('assignee',function($q2){
                    $q2->where('name', 'LIKE', '%' . $_GET['search'] . '%');
                });
                $q->orWhereHas('product', function ($q4) {
                    $q4->where('name', 'LIKE', '%' . $_GET['search'] . '%');
                });
                $q->orWhereHas('customer',function ($q5) {
                    $q5->where('ticket_status', 'LIKE', '%' . $_GET['search'] . '%');
                });
                $q->orWhereHas('customer',function ($q5) {
                    $q5->where('id', 'LIKE', '%' . $_GET['search'] . '%');
                });
                $q->orWhereHas('form',function ($q5) {
                    $q5->where('created_at', 'LIKE', '%' . $_GET['search'] . '%');
                });
            }
            if (!empty($_GET['assigned_to'])) {
                $q->where('assigned_to', $_GET['assigned_to']);
            }
            if (!empty($_GET['notClosed']) && $_GET['notClosed'] === '1') {
                $q->where('ticket_status', 'NOT LIKE', 'Closed');
            }
            if (!empty($_GET['type'])) {
                switch ($_GET['type']) {
                    case 'completed':
                        $q->where('ticket_status','LIKE','Validation');
                        break;
                    case 'rescheduled':
                        $q->where('ticket_status','LIKE','Rescheduled');
                        break;
                    case 'closed':
                        $q->where('ticket_status', 'LIKE', 'Closed');
                        break;
                    default:
                        $q->where('type', 'LIKE', '%'.$_GET['type'].'%');
                }
            }
        });
       
       
    // Fetch the filtered data
    $s = $query->get();

        $callback = function () use ($s, $columns) {
            $file = fopen('php://output', 'w');
            fputcsv($file, $columns);
            $count=0;
            //Looping through each service we got
            foreach ($s as $task) {
                //Serial number
                $count++;
                $row['S No']  = $count;
                //We need to skip if the service doesn't have customer/user detail
                //otherwise it'll fire an error
                if(empty($task->customer) || empty($task->customer->userDetail)){continue;}
                $row['Customer #']    = $task->customer->id;
                $row['Customer Name']    = $task->customer->name;
                $row['Company Name']    = $task->customer->userDetail->company_name;
                $row['Company E-Mail']    = $task->customer->userDetail->company_email;
                $row['Expected Date']  = $task->expected_date;
                
                $row['Serviced On']  = $task->serviced_on;
                $row['Service Type'] = $task->service_type;
                if(empty($task->assignee)){continue;}
                $row['Assigned To'] = $task->assignee->name;
                $row['Product'] = $task->product->name;
                $row['Created At'] = $task->created_at;
                $row['Form Filled'] = $task->form;
                $row['Ticket Status'] = $task->ticket_status;
                $row['Employee Name'] = $task->assignee->name;
                $row['Start Time'] = $task->time_location['start']['time'];
               
                //then this is used to add all the above items in row to csv 
                fputcsv($file, array($row['S No'], $row['Customer #'],$row['Customer Name'],$row['Company Name'], $row['Company E-Mail'], $row['Expected Date'], $row['Serviced On'], $row['Service Type'],$row['Assigned To'],$row['Product'],$row['Created At'],$row['Form Filled'],$row['Ticket Status'],$row['Employee Name'],$row['Start Time']));
            }

            fclose($file);
        };
        //Then we return csv response
        return response()->stream($callback, 200, $headers);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $input = $request->all();
        $s = Service::updateOrCreate(['id' => $id], $input);
        if ($s->wasRecentlyCreated) {
            $formTemplate = FormTemplate::where('product_id', $request->product_id)->where('type', $request->service_type)->first();
            if($formTemplate){
                Form::create(['title' => $formTemplate->id, 'data' => $formTemplate->data, 'service_id' => $s->id]);
            }
        }
        return response()->json($s, 201);
    }

    public function execUpdate(Request $request, $id)
    {
        $service = Service::find($id);
        $service->time_location = $request->time_location;
        $service->remarks = $request->remarks;
        !empty($request->signature) ? $service->signature = $request->signature : '';
        if ($service->ticket_status != 'Validation' && $service->ticket_status != 'Closed') {
            if (!empty($request->time_location['end'])) {
                $service->ticket_status = 'Validation';
            } else if (!empty($request->time_location['start'])) {
                $service->ticket_status = 'In Progress';
            }
        }
        $service->save();
        $s = Form::where('service_id', $id)->update(['data' => $request->form]);
        return response()->json($s, 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        /*         if($request->company_id==$id && in_array('admin',$request->role)){ */
        Service::find($id)->delete();
    }

    public function getHistory($id)
    {
        $act = Activity::with('user:id,name')->where('model_id', $id)->get();
        return response()->json($act, 200);
    }
}
