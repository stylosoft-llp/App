<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserDetail extends Model
{
    use HasFactory;
    protected $guarded = ['id','created_at','updated_at'];
    Protected $casts = ['addresses' => 'array'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
