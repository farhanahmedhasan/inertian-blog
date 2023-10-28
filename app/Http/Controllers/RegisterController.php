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
            'name' => 'required | min:3 | max:32',
            'username' => 'required | min:3 | max:32 | unique:users,username',
            "email" => 'required | email | unique:users,email',
            "password" => 'required | min:8 | max:32'
        ]);

        //Create the user
        User::create($attributes);

        //Flash Success Message
//        $request->session()->flash('user/create', [
//            'message' => "User created successfully",
//            'action' => "user/create"
//        ]);

        $request->session()->flash('message', "User created successfully");
        //Redirect the user
        return redirect('/');
    }
}
