<?php

namespace App\Models;

use App\Traits\CompanyTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;
    
    protected $guarded = ['id','created_at','updated_at'];
    protected $casts = ['expected_date'=> 'date','requirements'=>'array','time_location'=>'array', 'zone' => 'array'];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function assignee()
    {
        return $this->belongsTo(User::class,'assigned_to');
    }

    public function customer()
    {
        return $this->belongsTo(User::class,'customer_id');
    }
    
    public function form()
    {
        return $this->hasOne(Form::class);
    }

    public function activities()
    {
        return $this->hasMany(Activity::class);
    }

}
