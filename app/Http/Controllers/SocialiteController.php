<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Laravel\Socialite\Facades\Socialite;

class SocialiteController extends Controller
{
    public function redirect($provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    public function callback($provider) {
        try {
            $socialiteUser = Socialite::driver($provider)->user();
        } catch (\Exception $ex) {
            return redirect('http://localhost:3000/login');
        }
    
        $user = User::where([
            'provider' => $provider,
            'provider_id' => $socialiteUser->getId()
        ])->first();
    
        if (!$user) {
            $validator = Validator::make(
                ['email' => $socialiteUser->getEmail()],
                ['email' => ['unique:users,email']],
                ['email.unique' => 'Couldn\'t log in. Maybe you used a diffrent login method?']
            );
    
            if ($validator->fails()) {
                return redirect('http://localhost:3000/login')->withErrors($validator);
            }
    
    
            $user = User::create([
                'name' => $socialiteUser->getName(),
                'email' => $socialiteUser->getEmail(),
                'email_verified_at' => now(),
                'provider' => $provider,
                'provider_id' => $socialiteUser->getId()
            ]);
        }
    
        Auth::login($user);
    
    
        return redirect('/');
    
        // dd($socialiteUser->getName(), $socialiteUser->getEmail(), $socialiteUser->getId());
        // $user->token
    }
}
