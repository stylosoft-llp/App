<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    use HasFactory;
    protected $guarded = ['id','created_at','updated_at'];
    protected $casts = ['changes'=>'array','created_at'=>'date:Y-M-d H:i'];

    public function user()
    {
        return $this->belongsTo(User::class,'caused_by');
    }
}
