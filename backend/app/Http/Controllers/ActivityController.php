<?php
namespace App\Http\Controllers;

use App\Activity;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ActivityController extends Controller
{

    public function getAll()
    {
        try {
            $activities = Activity::get();
            return response($activities);
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
                'name' => 'required|string|max:40',
                'description' => 'string',
                'image_path'=>'string',
            
            ]);
            $activity = Activity::create($body);
            return response($activity, 201);
        } catch (\Exception $e) {
            return response([
                'error' => $e
            ], 500);
        }
    }
}