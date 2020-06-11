<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Category;
class CategoryController extends Controller
{
    public function getall(){
        try{
            
        $categories = Category::with('products')->get();
        return response($categories);

        }catch(\Exception $e){
            return response([
                'error'=> $e
            ], 500);
        }
    }

    public function insert(Request $request)
    {
        try {
            $request->validate([
                'name' => 'required|unique:categories|string',
                'image_path'=>'string'
            ]);
            $body = $request->all();
            $category = Category::create($body);
            return response($category, 201);
        } catch (\Exception $e) {
            return response([
                'error' => $e->getMessage(),
                'message' => 'There was a problem trying to update the category',
            ], 500);
        }
    }

      public function update(Request $request, $id)
      {
        try{
            $request->validate([
                'name' => 'require|unique:categories|string'
            ]);
            $body=$request->all();
            $category = Category::find($id);
            $category->update($body);
            return response([
                'category' => $category,
                'message' =>'La categoria ha sido actualizada con éxito',
            ]);

        }catch(\Excepcion $e){

            return response([
                'error' => $e ->getMessage(),
                'message'=> 'Ha ocurrido un error al intentar actualizar la categoría'
            ], 500);
        }
      }

      public function delete(Request $request, $id)
      {
          try {
            $category = Category::find($id);
            $category ->products()->detach();
            $categroy ->delete();
            return response([
                'category' => $category,
                'message' => 'La cagegoria ha sido eliminada correctamente',
            ]);
            
          }catch(\Excepcion $e){
              return response([
                  'error'->$e->getMessage(),
                  'message'=>'Ha ocurrido un error al eliminar la categoría'
              ], 500);
          }
      }
    }


