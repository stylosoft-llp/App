<?php

namespace Database\Seeders;

use App\Models\License;
use Illuminate\Database\Seeder;

class LicenseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        License::create([
            'id'=>1,
            'package_id'=>1,
            'name'=>'Starter',
            'user_id'=>2,
            'expires_on'=>now()->addDays(30),
            'admins'=>1,
            'subadmins'=>1,
            'engineers'=>8
        ]);

        License::create([
            'id'=>2,
            'package_id'=>2,
            'name'=>'Starter',
            'user_id'=>2,
            'expires_on'=>now()->addDays(30),
            'admins'=>1,
            'subadmins'=>1,
            'engineers'=>8
        ]);

    }
}
