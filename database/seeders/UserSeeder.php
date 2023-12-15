<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Super Administrator
        $admin = User::create([
            'id' => 1,
            'name' => 'Admin',
            'user_name' => 'admin',
            'email' => 'admin@stylo.com',
            'password' => bcrypt('admin@12344'),
            'phone' => '9182208465'
        ]);

        $admin->role()->attach(9);

        //Fake Users
        $user = User::create([
            'id' => 2,
            'name' => 'John Doe',
            'user_name' => 'johndoe',
            'email' => 'john@stylo.com',
            'password' => bcrypt('john@12345'),
            'phone' => '8686312387'
        ]);

        $user = User::create([
            'id' => 3,
            'name' => 'John Subadmin',
            'user_name' => 'subadmin',
            'email' => 'subadmin@stylo.com',
            'password' => bcrypt('subadmin@12345'),
            'phone' => '8686312388'
        ]);

        $user = User::create([
            'id' => 4,
            'name' => 'John Engineer',
            'user_name' => 'engineer',
            'email' => 'engineer@stylo.com',
            'password' => bcrypt('engineer@12345'),
            'phone' => '8686312389'
        ]);

        $user = User::create([
            'id' => 5,
            'name' => 'John Customer',
            'user_name' => 'customer',
            'email' => 'customer@stylo.com',
            'password' => bcrypt('customer@12345'),
            'phone' => '8686312390'
        ]);
    }
}
