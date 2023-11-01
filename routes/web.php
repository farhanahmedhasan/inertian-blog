<?php

declare(strict_types=1);

use Illuminate\Validation\ValidationException;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use MailchimpMarketing\ApiClient;

Route::post("/newsletter", function () {
    $attributes = request()->validate([
        'email' => 'email | required'
    ]);

    $mailchimp = new ApiClient();

    $mailchimp->setConfig([
        'apiKey' => config('services.mailchimp.key'),
        'server' => 'us21'
    ]);

    try {
        $mailchimp->lists->addListMember('37b4fac775', [
            'email_address' => $attributes['email'],
            'status' => 'subscribed'
        ]);
    } catch (Exception $e) {
        throw ValidationException::withMessages([
            'email' => 'This email could not be added to our newsletter list'
        ]);
    }

    return redirect('/')->with('message', "You have successfully subscribed to our newsletter");
});

Route::get('/', [PostController::class, 'index'])->name("home");
Route::get('/post/{post:slug}', [PostController::class, 'show']); //Post->where('slug', $post)->findOrFail();
Route::post('/post/{post:slug}/comments', [CommentController::class, 'store'])->middleware('auth');

Route::get('/register', [RegisterController::class, 'create'])->middleware('guest');
Route::post('/register', [RegisterController::class, 'store'])->middleware('guest');

Route::get('/login', [LoginController::class, 'create'])->middleware('guest');
Route::post('/login', [LoginController::class, 'store'])->middleware('guest');
Route::post('/logout', [LoginController::class, 'destroy'])->middleware('auth');
