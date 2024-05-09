<?php

use App\Http\Controllers\PageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/sanctum/csrf-cookie', function () {
    return csrf_token(); 
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//UserController
Route::get('/ext/getUsers', [UserController::class, 'getUsers']);
Route::post('/ext/setUser', [UserController::class, 'setUser']);
// FOR TESTING
// Route::get('/ext/setUser', [UserController::class, 'setUser']);
Route::get('/ext/user/{id}', [UserController::class, 'getUserById']);
//THIS IS FOR TESTING PURPOSES ONLY Route::get('/ext/loginUserTest/', [UserController::class, 'loginUser']);
Route::post('/ext/loginUser/', [UserController::class, 'loginUser']);


//PageController
Route::post('/ext/categories', [PageController::class, 'setCategory']);
Route::get('/ext/categories', [PageController::class, 'getCategories']);
// Route::get('/ext/getItemsByCategory/{search}', [PageController::class, 'getItemsByCategory']);
// Route::get('/ext/getCategoryByItem/{search}', [PageController::class, 'getCategoryByItem']);

Route::get('/ext/items', [PageController::class, 'getItems']);
Route::get('/ext/items/{search}', [PageController::class, 'getItem']);
Route::post('/ext/litems', [PageController::class, 'setItem']);