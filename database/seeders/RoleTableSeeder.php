<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Role;

class RoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role_business = new Role();
        $role_business->id = 9;
        $role_business->name = 'super';
        $role_business->save();

        $role_business = new Role();
        $role_business->id = 5;
        $role_business->name = 'admin';
        $role_business->save();

        $role_staff = new Role();
        $role_staff->id = 2;
        $role_staff->name = 'staff';
        $role_staff->save();

        $role_approved = new Role();
        $role_approved->id = 1;
        $role_approved->name = 'user_approved';
        $role_approved->save();

    }
}
