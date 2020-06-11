<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Precio;
class PrecioController extends Controller
{
    public function getAll()
    {
        try {
            $precios = Precio::get();
            return response($precios);
        } catch (\Exception $e) {
            return response([
                'error' => $e
            ], 500);
        }
    }

    public function insert(Request $request)
    {
        try {
            $body = $request->validate([
                'cuota_mensual' => 'string',
                'cuota_semanal' => 'string',
                'horas_sueltas'=>'string',
                'descripcion'=> 'string'
            
            ]);
            $precio = Precio::create($body);
            return response($precio, 201);
        } catch (\Exception $e) {
            return response([
                'error' => $e
            ], 500);
        }
    }
}

