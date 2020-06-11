<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::prefix('v1')-> group(function(){
    Route::prefix('users')->group(function(){
        Route::post('register','UserController@register');
        Route::post('login', 'UserController@login');

        Route::middleware('auth:api')->group(function(){
            Route::get('info','UserController@getUserInfo');
            Route::get('logout', 'UserController@logout');
            Route::post('comment/{id}','UserController@addComment');
            Route::put('','UserController@update');
        Route::middleware(['auth:api','checkRole:admin'])->group(function(){
            Route::get('','UserController@getAll');
        });
        });
    });
    
    Route::group([
        'prefix'=> 'categories',
        //'middleware' => 'auth:api'
    ], function(){
        Route::get('', 'CategoryController@getall');
        Route::post('', 'CategoryController@insert');
        Route::put('id', 'CategoryController@update');
        Route::delete('id', 'CategoryController@delete');
    });
    
    Route::group([
        'prefix'=>'products',
        //'middleware'=>['auth:api','checkRole:admin']
    ],function(){
        Route::get('','ProductController@getAll');
        Route::get('{id}','ProductController@getOne');
        Route::post('comment/{id}','ProductController@addComment')->middleware('auth:api');
        Route::middleware(['auth:api','checkRole:admin'])->group(function(){
            Route::get('restore/{id}','ProductController@restore');
            Route::get('{id}','ProductController@getOne');
            Route::post('','ProductController@insert');
            Route::post('/image/{id}','ProductController@uploadImage');
            Route::put('{id}','ProductController@update');
            Route::delete('{id}','ProductController@delete');
        });
    });

    Route::group([
        'prefix' => 'orders',
        'middleware' => 'auth:api'
    ],function(){
        Route::get('','OrderController@getAll');
        Route::post('','OrderController@insert');
    });

    Route::group([
        'prefix' => 'activities',
        //'middleware' => 'auth:api'
    ],function(){
        Route::get('','ActivityController@getAll');
        Route::post('','ActivityController@insert');
    });


    Route::group([
        'prefix'=>'precios',
        //'middleware'=>['auth:api','checkRole:admin']
    ],function(){
        Route::get('','PrecioController@getAll');
        Route::middleware(['auth:api','checkRole:admin'])->group(function(){
            Route::post('','PrecioController@insert');
        });
    });


    
});



