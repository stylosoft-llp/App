<?php

use Illuminate\Support\Facades\Route;

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

Route::get('bp',function(){
        var_dump('ln -s ' . base_path() . '/storage/app/public ' . base_path() . '/public/storage');
});

Route::get(
    '/',
    function () {
        return file_get_contents(env('NUXT_OUTPUT_PATH', public_path('spa.html')));
    }
)->where('path', '/')
    // Redirect to Nuxt from within Laravel
    // by using Laravels route helper
    // e.g.: `route('nuxt', ['path' => '/<nuxtPath>'])`
    ->name('nuxt');
Route::get(
    '/{path?}',
    function ($request) {
        // ...
        // If the request expects JSON, it means that
        // someone sent a request to an invalid route.

        // Fetch and display the page from the render path on nuxt dev server or fallback to static file
        if (preg_match('/api/i', $request)) {
            return response()->json('Nothing Found', 404);
        } else {
            return file_get_contents(env('NUXT_OUTPUT_PATH', public_path('spa.html')));
        }
    }
)->where('path', '.*')
    // Redirect to Nuxt from within Laravel
    // by using Laravels route helper
    // e.g.: `route('nuxt', ['path' => '/<nuxtPath>'])`
    ->name('nuxt');