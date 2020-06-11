<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    //use SoftDeletes;
    protected $fillable = [
        'user',
        'message',
        'image_path',
        'likes',
        'dislikes'
    ];
}




