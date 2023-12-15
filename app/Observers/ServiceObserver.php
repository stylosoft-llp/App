<?php

namespace App\Observers;

use App\Models\Activity;
use App\Models\Service;
use Illuminate\Support\Facades\Auth;

class ServiceObserver
{
    /**
     * Handle the Service "created" event.
     *
     * @param  \App\Models\Service  $service
     * @return void
     */
    public function created(Service $service)
    {
        //
    }

    /**
     * Handle the Service "updated" event.
     *
     * @param  \App\Models\Service  $service
     * @return void
     */
    public function updated(Service $service)
    {
        $newChanges = [];
        $service->isDirty('expected_date') ? $newChanges['expected_date'] = $service->expected_date : '';
        $service->isDirty('assigned_to') ? $newChanges['assigned_to'] = $service->assigned_to : '';
        $service->isDirty('product_id') ? $newChanges['product_id'] = $service->product_id : '';
        $service->isDirty('customer_id') ? $newChanges['customer_id'] = $service->customer_id : '';
        $service->isDirty('signature') ? $newChanges['signature'] = $service->signature : '';
        if(count($newChanges) > 0) {
            Activity::create(
              ['model_id'=>$service->id, 'model'=>'Service', 'changes'=>$newChanges, 'caused_by'=>Auth::user()->id] 
            );
        }
    }

    /**
     * Handle the Service "deleted" event.
     *
     * @param  \App\Models\Service  $service
     * @return void
     */
    public function deleted(Service $service)
    {
        //
    }

    /**
     * Handle the Service "restored" event.
     *
     * @param  \App\Models\Service  $service
     * @return void
     */
    public function restored(Service $service)
    {
        //
    }

    /**
     * Handle the Service "force deleted" event.
     *
     * @param  \App\Models\Service  $service
     * @return void
     */
    public function forceDeleted(Service $service)
    {
        //
    }
}
