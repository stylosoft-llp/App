<?php

namespace App\Jobs;

use App\Models\User;
use App\Models\UserCompany;
use App\Models\UserDetail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class bulkImport implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($data, $userId, $companyId)
    {
        $this->data = $data;
        $this->userId = $userId;
        $this->companyId = $companyId;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        ini_set('max_execution_time', 3600);
        Cache::put('bulkimport-' . $this->companyId, 'Import Pending. Started at: ' . now(), now()->addDays(3));
        DB::beginTransaction();
        try {
            foreach ($this->data as $dt) {
                try {
                    $u = User::create([
                        'name' => $dt['name'],
                        'email' => $dt['email'],
                        'phone' => $dt['phone'],
                        'status' => $dt['status'],
                        'password' => bcrypt($dt['password']),
                    ]);
                    UserCompany::create([
                        'user_id' => $u->id, 'company_id' => $this->companyId,
                        'role' => 'Customer'
                    ]);
                    UserDetail::create([
                        'user_id' => $u->id,
                        'address_1' => $dt['address_1'],
                        'address_2' => !empty($dt['address_2']) ? $dt['address_2'] : '',
                        'city' => !empty($dt['city']) ? $dt['city'] : '',
                        'state' => !empty($dt['city']) ? $dt['city'] : '',
                        'pincode' => !empty($dt['pincode']) ? $dt['pincode'] : '',
                        'country' => !empty($dt['country']) ? $dt['country'] : '',
                        'company_name' => $dt['company'],
                        'designation' => !empty($dt['designation']) ? $dt['designation'] : '',
                        'consent_auth_1' => !empty($dt['cnsnt_auth_1']) ? $dt['cnsnt_auth_1'] : '',
                        'consent_auth_1_phone' => !empty($dt['cnsnt_auth_1_phone']) ? $dt['cnsnt_auth_1_phone'] : "",
                        'consent_auth_2' => !empty($dt['cnsnt_auth_2']) ? $dt['cnsnt_auth_2'] : "",
                        'consent_auth_2_phone' => !empty($dt['cnsnt_auth_2_phone']) ? $dt['cnsnt_auth_2_phone'] : "",
                    ]);
                } catch (\Throwable $e) {
                    Cache::put('bulkimport-' . $this->companyId, 'Failed at: ' . now(), now()->addDays(3));
                    throw $e;
                    break;
                }
            }
        } catch (\Throwable $e) {
            Cache::put('bulkimport-' . $this->companyId, 'Failed at: ' . now(), now()->addDays(3));
            DB::rollBack();
            throw $e;
        }
        DB::commit();
        Cache::put('bulkimport-' . $this->companyId, 'Success', now()->addDays(3));
    }
}
