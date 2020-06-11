<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Precio extends Model
{

     //use SoftDeletes;
     protected $fillable = [
        'cuota_mensual',
        'cuota_semanal',
        'horas_sueltas',
        'descripcion'
    ];






}




