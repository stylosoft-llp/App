<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_details', function (Blueprint $table) {
            $table->id();
            $table->string('designation')->nullable();
            $table->string('company_name')->nullable()->define('if user is customer, not employee');
            //Below is Primary Address, Additional blocks are in addresses column
            $table->string('team')->nullable();
            $table->string('zone')->nullable();
            $table->string('address_1')->nullable();
            $table->string('address_2')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('country')->nullable();
            $table->string('pincode')->nullable();
            $table->string('consent_auth_1')->nullable();
            $table->string('consent_auth_1_phone')->nullable();
            $table->string('consent_auth_2')->nullable();
            $table->string('consent_auth_2_phone')->nullable();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->text('addresses')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_details');
    }
}
