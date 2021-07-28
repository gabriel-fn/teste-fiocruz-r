<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRegistrosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('registros', function (Blueprint $table) {
            $table->id();
            $table->boolean('is_estrangeiro');
            $table->string('cpf', 11)->nullable();
            $table->string('uf', 2)->nullable();
            $table->string('municipio')->nullable();
            $table->string('nome');
            $table->date('nascimento');
            $table->string('nivel_formacao');
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
        Schema::dropIfExists('registros');
    }
}
