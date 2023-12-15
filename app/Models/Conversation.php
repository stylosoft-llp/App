<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Conversation extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function sender(){
        return $this->belongsTo(User::class,'from');
    }

    public function receiver(){
        return $this->belongsTo(User::class,'to');
    }

    public function messages()
    {
        return $this->hasMany(Message::class);
    }

    public function scopeBetween($query,$me,$id){
        return $query->where(function ($q) use ($me,$id) {
            $q->where('from', $me);
            $q->where('to', $id);
        })->orWhere(function($q)use($me,$id){
            $q->where('from', $id);
            $q->where('to', $me);
        });
    }
}
