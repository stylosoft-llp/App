<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::create([
            'id'=>1,
            'name'=>'Android App',
            'slug'=>'android-app',
            's_desc'=>'Android application development by spotverge',
            'installation'=>1,
            'replacement'=>1,
            'company_id'=>1,
        ]);
        Product::create([
            'id'=>2,
            'name'=>'Web App',
            'slug'=>'web-app',
            's_desc'=>'Web application development by spotverge',
            'installation'=>1,
            'replacement'=>0,
            'company_id'=>1,
        ]);
        Product::create([
            'id'=>3,
            'name'=>'IOS App',
            'slug'=>'ios-app',
            's_desc'=>'ios application development by spotverge',
            'installation'=>1,
            'replacement'=>0,
            'company_id'=>1,
        ]);
    }
}
