<?php

namespace Database\Seeders;

use App\Models\Company;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CompanySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Company::create([
            'id'=>1,
            'license_id'=>1,
            'name'=>'Stylosoft LLP',
            'address_1'=> 'Plot No.262, HMT Society, Shapurnagar, IDA, Jeedimetla',
            'address_2'=>'',
            'phone'=> '7337318963',
            'state'=>'Telangana',
            'city'=>'Hyderabad',
            'country'=>'India',
            'pincode'=>'500005'
        ]);

        Company::create([
            'id'=>2,
            'license_id'=>2,
            'name'=>'Spotverge',
            'address_1'=>'3rd Floor, RP Business park, Near D-Mart',
            'address_2'=>'Al Hamra Colony, Shaikpet',
            'phone'=>'8465950876',
            'state'=>'Telangana',
            'city'=>'Hyderabad',
            'country'=>'India',
            'pincode'=>'500008'
        ]);

        DB::table('user_companies')->insert(['company_id'=>1,'user_id'=>1,'role'=>'Admin']);

        DB::table('user_companies')->insert(['company_id'=>1,'user_id'=>2,'role'=>'Admin']);

        DB::table('user_companies')->insert(['company_id'=>1,'user_id'=>3,'role'=>'Subadmin']);

        DB::table('user_companies')->insert(['company_id'=>1,'user_id'=>4,'role'=>'Engineer']);
    }
}
