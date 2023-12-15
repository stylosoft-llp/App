<?php

namespace App\Models;


use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'user_name',
        'email',
        'phone',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function company()
    {
        return $this->belongsToMany(Company::class,'user_companies')->withPivot('role','permissions');
    }

    public function userCompany()
    {
        return $this->hasOne(UserCompany::class);
    }

    public function userDetail()
    {
        return $this->hasOne(UserDetail::class);
    }

    public function addresses()
    {
        return $this->hasMany(Address::class);
    }

    public function messages()
    {
        return $this->hasMany(Message::class);
    }

    /**
     * Role Authorization - Model
     * 
     */

    public function role()
    {
        return $this->belongsToMany(Role::class);
    }
    /**
     * Role Authorization
     * @param string
     * @return boolean
     */
    public function hasRole($roles)
    {
        return null !== $this->role()->whereIn('name', $roles)->first();
    }
    
    public function license()
    {
        return $this->hasOne(License::class);
    }

    public function hasLicense()
    {
        return null !== $this->license()->where('expires_on','<=',now()->subDays(1));
    }

    public function hasCompany()
    {
        return null !== $this->company()->first();
    }
}
