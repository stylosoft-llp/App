<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePackagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('packages', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('s_desc');
            $table->decimal('sale_price');
            $table->decimal('reg_price')->nullable();
            $table->text('features')->nullable();
            $table->string('frequency')->default('Monthly');
            $table->smallInteger('admins');
            $table->smallInteger('subadmins');
            $table->smallInteger('engineers');
            $table->tinyInteger('status')->default(1);
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
        Schema::dropIfExists('packages');
    }
}
