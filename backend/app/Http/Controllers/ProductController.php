<?php
namespace App\Http\Controllers;

use App\Category;
use App\Comment;
use App\Product;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ProductController extends Controller
{
    public function getAll()
    {
        try {
            $products = Product::with('categories')->get();
            return response($products);
        } catch (\Exception $e) {
            return response([
                'error' => $e
            ], 500);
        }
    }
    public function getOne($id)
    {
        try {
            $product = Product::find($id)->load('comments.user');
            return response($product);
        } catch (\Exception $e) {
            return response([
                'error' => $e
            ], 500);
        }
    }
    public function insert(Request $request)
    {
        try {
            $categoriesIds = Category::all()->map(fn ($category) => $category->id)->toArray();
            $body = $request->validate([
                'name' => 'required|string|max:40',
                'price' => 'required|numeric',
                'description' => 'string',
                'image_path'=>'string',
                'categories' => 'required|array|in:' . implode(',', $categoriesIds)
            ]);
            $product = Product::create($body);
            $product->categories()->attach($body['categories']);
            return response($product->load('categories'), 201);
        } catch (\Exception $e) {
            return response([
                'error' => $e
            ], 500);
        }
    }
    public function update(Request $request, $id)
    {
        try {
            dd($request);
            $categoriesIds = Category::all()->map(fn ($category) => $category->id)->toArray();
            $body = $request->validate([
                'name' => 'string|max:40',
                'price' => 'numeric',
                'description' => 'string',
                'categories' => 'array|in:' . implode(',', $categoriesIds)

            ]);
            $product = Product::find($id);
            $product->update($body);
            if ($request->has('categories')) {
                $product->categories()->sync($body['categories']);
            }
            return response($product->load('categories'));
        } catch (\Exception $e) {
            return response([
                'error' => $e
            ], 500);
        }
    }
    public function uploadImage(Request $request, $id)
    {
        try {
            $request->validate(['img' => 'required|image']);
            $product = Product::find($id);
            $imageName = time() . '-' . request()->img->getClientOriginalName();
            request()->img->move('images/products', $imageName);
            $product->update(['image_path' => $imageName]);
            return response($product);
        } catch (\Exception $e) {
            return response([
                'error' => $e,
            ], 500);
        }
    }
    public function delete($id)
    {
        try {
            $product = Product::find($id);
            $product->delete();
            return response([
                'message' => 'Producto eliminado con éxito',
                'product' => $product
            ]);
        } catch (\Exception $e) {
            return response([
                'error' => $e,
            ], 500);
        }
    }
    public function restore($id)
    {
        try {
            $products = Product::withTrashed()->where('id', $id)->get();
            if ($products->isEmpty() || !$products[0]->trashed()) {
                return response([
                    'message' => 'No se ha encontrado el producto a recuperar'
                ], 400);
            }
            $product = $products[0];
            $product->restore();
            return response([
                'message' => 'Producto recuperado con éxito',
                'product' => $product
            ], 400);
        } catch (\Exception $e) {
            return response([
                'error' => $e,
            ], 500);
        }
    }

    public function addComment(Request $request, $id)
    {
        try {
            $request->validate([
                'body' => 'string',
                'stars' => 'required|integer|min:1|max:5'
            ]);
            $body = $request->all();
            $product = Product::find($id);
            $body['user_id'] = Auth::id();
            $comments =$product->comments()->where('user_id',$body['user_id'])->get();
            if($comments->isNotEmpty()){
                return response(['message'=>'You cannot review the same product twice'],400);
            }
            $comment = new Comment($body);
            $product->comments()->save($comment);
            return response($product->load('comments.user'));
        } catch (\Exception $e) {
            return response( $e, 500);
        }
    }
}

