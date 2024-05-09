<?php

use App\Http\Controllers\GoogleAuthController;
use App\Http\Controllers\SocialiteController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// Route::get('/auth/google/redirect', [GoogleAuthController::class, 'redirect'])->name('google-auth');
// Route::get('/auth/google/callback', [GoogleAuthController::class, 'callbackGoogle']);

Route::get('/auth/{provider}/redirect', [SocialiteController::class, 'redirect'])
    ->where('provider', 'google|github');

Route::get('/auth/{provider}/callback', [SocialiteController::class, 'callback'])
    ->where('provider', 'google|github');
;