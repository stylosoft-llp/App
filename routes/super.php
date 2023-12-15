<?php

use Illuminate\Support\Facades\Route;
use App\Http\Middleware\checkAdmin;

Route::group([
	'prefix' => 'super',
	'middleware' => ['auth:api','checkAdmin']
], function () {
	Route::get('users/filter', 'Super\UserController@filter');
	Route::resource('users', 'Super\UserController');
	Route::get('stats', 'Super\AnalyticsController@count');
	Route::get('sales', 'Super\AnalyticsController@sales');
	Route::resource('packages', 'Super\PackageController');
	Route::resource('queries', 'Super\QueryController');
	Route::get('packagestats', 'Super\AnalyticsController@packages');
	Route::resource('licenses', 'Super\LicenseController');
});
