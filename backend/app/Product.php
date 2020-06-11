<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;


class Product extends Model
{
    //use SoftDeletes;
    protected $fillable = [
        'name',
        'price',
        'description',
        'image_path'
    ];
    public function categories()
    {
        return $this->belongsToMany('\App\Category');
    }
    public function orders()
    {
       return $this->belongsToMany('\App\Order');
    }

    function comments()
    {
        return $this->morphMany('\App\Comment','commentable');
    }
}







