<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Registro;
use App\Http\Controllers\RegistroController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('registros');
});

Route::get('/registros', [RegistroController::class, 'index']);

Route::post('/registros', [RegistroController::class, 'store'])->name('registro');

Route::get('/registros/create', [RegistroController::class, 'create']);
