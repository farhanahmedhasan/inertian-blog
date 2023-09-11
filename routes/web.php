<?php

declare(strict_types=1);

use App\Models\Category;
use App\Models\Post;
use App\Models\User;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Post/Index', [
        "posts" => Post::with('category', 'user')->get()
    ]);
});

Route::get('/post/{post:slug}', function (Post $post) { //Post->where('slug', $post)->findOrFail();
    return Inertia::render('Post/Show', [
        'post' => $post->load('category', 'user')
    ]);
});

Route::get('category/{category:slug}', function (Category $category) {
    return Inertia::render('Category/Index', [
        'posts' => $category->load('posts')
    ]);
});

Route::get('posts/{user:username}', function (User $user) {
    return Inertia::render('User/Index', [
        'posts' => $user->load('posts')
    ]);
});

Route::get('/service', function () {
    return Inertia::render('Service/Index');
});

Route::get('/contact', function () {
    return Inertia::render('Contact/Index');
});
