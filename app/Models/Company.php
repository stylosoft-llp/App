<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function license()
    {
        return $this->belongsTo(License::class);
    }

    public function customers()
    {
        return $this->belongsToMany(User::class,'user_companies')->wherePivotIn('role',[null,'customer','Customer']);
    }

    public function employees()
    {
        return $this->belongsToMany(User::class,'user_companies')->wherePivotNotIn('role',[null,'customer','Customer']);
    }

    public function services()
    {
        return $this->hasMany(Service::class);
    }

}
