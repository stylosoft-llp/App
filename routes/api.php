<?php

use Illuminate\Http\Request;
use App\Http\Controllers;
use App\Http\Middleware\HasCompany;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('inquiries','InquiryController@store');
Route::group(
    [
        'prefix' => 'auth'
    ],
    function () {
        Route::post('login', 'AuthController@login');
        Route::post('signup', 'AuthController@register');
        Route::post('logout', 'AuthController@logout')->middleware('auth:api');
        Route::get('user', 'AuthController@details')->middleware('auth:api');
        Route::post('present','AuthController@markPresent')->middleware('auth:api');
        Route::resource('licenses',LicenseController::class)->middleware('auth:api');
        Route::resource('companies', CompanyController::class)->middleware('auth:api');
        Route::group([
            'middleware' => ['auth:api','App\Http\Middleware\HasCompany'],
        ], function () {
            /* RESOURCE ROUTES HERE */
            /* Products */
            Route::get('categories','CategoryController@index');
            Route::get('categories/list','CategoryController@list');
            Route::post('categories','CategoryController@store');
            Route::delete('categories/{id}','CategoryController@destroy');
            Route::get('products/filter','ProductController@filter');
            Route::apiResource('products',ProductController::class);
            /* Product Forms */
            Route::get('products/{id}/form-templates','FormTemplateController@show');
            Route::put('products/{id}/form-templates','FormTemplateController@update');
            /* Services */
            Route::get('tasks','ServiceController@indexForExec');
            Route::put('tasks/{id}','ServiceController@execUpdate');
            Route::get('tickets','ServiceController@getTickets');
            Route::post('tickets','ServiceController@createNewTicket');
            Route::get('servicesByDate','ServiceController@getServicesByDate');
            Route::get('services/{id}/history','ServiceController@getHistory');
            Route::apiResource('services',ServiceController::class);
            //Get Address Zones For User(Customer)
            Route::get('users/{id}/zones','UserController@getZones');
            //Users Fetch
            Route::get('users/filter','UserController@filter');
            Route::apiResource('users',UserController::class);
            Route::apiResource('customers',CustomerController::class);
            //Analytics
            Route::get('/analytics/service-count','CompanyController@countServices');
            /* Chat */
            Route::get('conversations','ConversationController@index');
            Route::post('conversations','ConversationController@store');
            Route::get('conversations/{id}/messages','ConversationController@getMessages');
            Route::post('conversations/{id}/messages','ConversationController@sendMessage');
            //IMAGE ROUTES
            Route::post('images', 'ImageController@addImage');
            Route::post('images/delete', 'ImageController@deleteImage');
            Route::post('images/replace', 'ImageControl
            ler@replaceImage');
            Route::post('logo', 'CompanyController@addLogo');
        });
    }
);

Route::group([
    'prefix' => 'admin',
    'middleware' => ['auth:api', 'App\Http\Middleware\HasCompany'],
], function () {
    Route::post('products/csv', 'ProductController@importCsv');
    Route::get('products/exportcsv', 'Admin\UserController@exportCsv');
    Route::get('products/exportcsv', 'ProductController@exportCsv');
    Route::post('users/csv', 'Admin\UserController@importCsv');
    Route::post('customers/csv', 'Admin\CustomerController@importCsv');
    Route::get('customers/importJobs', 'Admin\CustomerController@getImportCache');
    Route::get('customers/exportcsv', 'Admin\CustomerController@exportCsv');
    Route::get('analytics', 'AnalyticsController@sales');
    Route::get('stats', 'AnalyticsController@count');
    Route::get('tasks', 'AnalyticsController@tasks');
    Route::get('users/exportcsv', 'Admin\UserController@exportCsv');
    Route::resource('users', 'Admin\UserController');
    Route::get('inquiries', 'InquiryController@index');
    Route::get('services/exportcsv','ServiceController@exportCsv');
});

Route::post('clones','Admin\CustomerController@cloneForm');

Route::get('test',function(){return 'asdf';});

require __DIR__.'/super.php';