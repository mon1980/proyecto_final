<?php

namespace App;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    //use SoftDeletes;
    protected $fillable = [
        'name',
        'category'
   
    ];

    public function products()
    {
        return $this->belongsToMany('\App\Product');
    }
}
