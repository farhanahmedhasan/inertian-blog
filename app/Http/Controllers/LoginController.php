<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class LoginController extends Controller
{

    public function create()
    {
        return Inertia::render('Login/Create');
    }

    public function store()
    {
        //validate the request
        $attributes = request()->validate([
            'email' => 'required | email ',
            'password' => 'required | min:8 | max:32'
        ]);

        //attempt to authenticate and login the user based on the provided credentials
        if (auth()->attempt($attributes)) {
            //session fixation for security purpose
            session()->regenerate();

            //redirect with a flash message
            return redirect('/')->with('message', "Welcome Back 💖");
        }

        //auth failed
        return redirect('/login')->withErrors([
            'email' => "Your provided credentials doesn't match"
        ]);

    }

    public function destroy()
    {
        auth()->logout();
        return redirect('/')->with("message", 'Goodbye 😢');
    }
}
