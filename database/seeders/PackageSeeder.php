<?php

namespace Database\Seeders;

use App\Models\Package;
use Illuminate\Database\Seeder;

class PackageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Package::create([
            'id' => 1,
            'name' => 'STARTER',
            's_desc' => 'For Starters To Try',
            'sale_price' => 29.99,
            'reg_price' => 10.99,
            'frequency' => 'Monthly',
            'admins' => 1,
            'subadmins' => 1,
            'engineers' => 1,
            'features' => [
                'Business Flow Management',
                'Ticket Management',
                'Stylo Service Desk Support',
            ]
        ]);
        Package::create([
            'id' => 2,
            'name' => 'PLUS',
            's_desc' => 'Plus Users or Medium Sized Businesses',
            'sale_price' => 39.99,
            'reg_price' => 20.99,
            'admins' => 1,
            'subadmins' => 2,
            'engineers' => 16,
            'features' => [
                'Business Flow Management',
                'Ticket Management',
                'Stylo Service Desk Support',
                'Payments & More'
            ]
        ]);
        Package::create([
            'id' => 3,
            'name' => 'PRO',
            's_desc' => 'For Corporates and Enterprises',
            'sale_price' => 79.99,
            'reg_price' => 30.99,
            'admins' => 1,
            'subadmins' => 4,
            'engineers' => 32,
            'features' => [
                'Business Flow Management',
                'Ticket Management',
                'Stylo Service Desk Support',
                'Payments & More'
            ]
        ]);
    }
}
