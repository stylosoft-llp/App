<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class License extends Model
{
    use HasFactory;

    protected $guarded = ['id','created_at','updated_at'];
    protected $casts = ['expires_on'=>'datetime'];

    public function package()
    {
        return $this->belongsTo(Package::class);
    }
}
