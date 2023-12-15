<?php

use App\Jobs\ChargeSubscriptionJob;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

/*
|--------------------------------------------------------------------------
| Console Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of your Closure based console
| commands. Each Closure is bound to a command instance allowing a
| simple approach to interacting with each command's IO methods.
|
*/

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

Artisan::command('charge',function(){
    ChargeSubscriptionJob::dispatch();
});
Artisan::command('magic',function(){
    echo("

 __             _                            
/ _\_ __   ___ | |___   _____ _ __ __ _  ___ 
\ \| '_ \ / _ \| __\ \ / / _ \ '__/ _` |/ _ \
_\ \ |_) | (_) | |_ \ V /  __/ | | (_| |  __/
\__/ .__/ \___/ \__| \_/ \___|_|  \__, |\___|
   |_|                            |___/      
                                                        
✦ Thank you for joining Spotverge coders clan
");
});
