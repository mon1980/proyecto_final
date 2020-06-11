<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{

    //use SoftDeletes;
    protected $fillable = [
        'name',
        'description',
        'image_path'
    ];
    
}
