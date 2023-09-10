<?php

declare(strict_types=1);

use App\Models\Post;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Post/Index', [
        "posts" => Post::all(),
    ]);
});

Route::get('/post/{post:slug}', function (Post $post) { //Post->where('slug', $post)->findOrFail();
    return Inertia::render('Post/Show', [
        'post' => $post
    ]);
});

Route::get('/service', function () {
    return Inertia::render('Service/Index');
});

Route::get('/contact', function () {
    return Inertia::render('Contact/Index');
});
