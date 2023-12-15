<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Service::create([
            'name'=>'Android App Development',
            'service_type'=>'Installation',
            'product_id'=>1,
            'company_id'=>1,
            'assigned_to'=>3,
            'customer_id'=>4
        ]);
        Service::create([
            'name'=>'Android App Repair',
            'service_type'=>'Repair',
            'product_id'=>1,
            'company_id'=>1,
            'assigned_to'=>null,
            'customer_id'=>4
        ]);
    }
}
