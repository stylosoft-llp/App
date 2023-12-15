<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('service_type')->nullable();//Is Form
            $table->decimal('latitude')->nullable();
            $table->decimal('longitude')->nullable();
            $table->foreignId('product_id')->constrained('products')->onDelete('CASCADE');
            $table->foreignId('company_id')->constrained('companies')->onDelete('CASCADE');
            $table->foreignId('assigned_to')->nullable()->constrained('users')->onDelete('CASCADE');
            $table->foreignId('customer_id')->constrained('users')->onDelete('CASCADE');
            $table->dateTime('expected_date')->nullable();
            $table->dateTime('serviced_on')->nullable();
            $table->text('time_location')->nullable();
            $table->string('initial_inspection')->nullable();
            $table->text('requirements')->nullable();
            $table->string('ticket_status')->default('Ticket Raised');
            $table->string('work_status')->default('Ticket Raised');
            $table->text('attachments')->nullable();
            $table->text('remarks')->nullable();
            $table->string('signature')->nullable();
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
        Schema::dropIfExists('services');
    }
}
