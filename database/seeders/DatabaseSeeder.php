<?php

namespace Database\Seeders;

use App\Models\Courier;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(RoleTableSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(PackageSeeder::class);
        $this->call(LicenseSeeder::class);
        $this->call(CompanySeeder::class);
        $this->call(ProductSeeder::class);
        //$this->call(FormTemplateSeeder::class);
        $this->call(ServiceSeeder::class);
        // \App\Models\User::factory(10)->create();
    }
}
