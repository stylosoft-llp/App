<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLicensesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('licenses', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->foreignId('package_id')->constrained('packages');
            $table->foreignId('user_id')->constrained('users');
            $table->string('is_lifetime')->default(0);
            $table->dateTime('expires_on');
            $table->smallInteger('admins')->default(1);
            $table->smallInteger('subadmins');
            $table->smallInteger('engineers');
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
        Schema::dropIfExists('licenses');
    }
}
