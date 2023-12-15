<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Musonza\Chat\ConfigurationManager;

class CreateChatTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('conversations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->foreignId('from')->constrained('users')->onDelete('cascade');
            $table->foreignId('to')->constrained('users')->onDelete('cascade');
            $table->tinyInteger('is_read')->default(0);
            $table->tinyInteger('is_archived')->default(0);
            $table->timestamps();
        });

        Schema::create('messages', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->foreignId('from')->constrained('users')->onDelete('cascade');
            $table->string('sender_name')->nullable();
            $table->text('body')->nullable();
            $table->foreignId('conversation_id')->constrained('conversations')->onDelete('cascade');
            $table->string('type')->default('text');
            $table->text('data')->nullable();
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
        Schema::dropIfExists('conversations');
        Schema::dropIfExists('messages');
    }
}
