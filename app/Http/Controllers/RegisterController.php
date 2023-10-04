<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class RegisterController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('Register/Create');
    }

    public function store(Request $request)
    {
        //Validate the request
        $attributes = $request->validate([
            'name' => 'min:3 | max:32 | required',
            'username' => 'min:3 | max:32 | required',
            "email" => 'email | required',
            "password" => 'min:8 | max:32 | required'
        ]);

        //Create the user
        User::create($attributes);

        //Redirect the user
        return redirect('/');
    }
}
