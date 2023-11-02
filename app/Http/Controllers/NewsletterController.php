<?php

namespace App\Http\Controllers;

use Illuminate\Validation\ValidationException;
use App\Services\Newsletter;
use Exception;

class NewsletterController extends Controller
{
    public function __invoke(Newsletter $newsletter)
    {
        $attributes = request()->validate([
            'email' => 'email | required'
        ]);

        try {
            $newsletter->subscribe($attributes['email']);
        } catch (Exception $e) {
            throw ValidationException::withMessages([
                'email' => app()->environment('local') ? $e->getMessage() : "We couldn't add your email to our list"
            ]);
        }

        return redirect('/')->with('message', "You have successfully subscribed to our newsletter");
    }
}
