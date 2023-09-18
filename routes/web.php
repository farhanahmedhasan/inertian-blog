<?php

declare(strict_types=1);

use App\Models\Category;
use App\Models\Post;
use App\Models\User;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Post/Index', [
        "posts" => Post::latest()->with('category', 'author')->get(),
        "categories" => Category::all()
    ]);
})->name("home");

Route::get('/post/{post:slug}', function (Post $post) { //Post->where('slug', $post)->findOrFail();
    return Inertia::render('Post/Show', [
        'post' => $post
    ]);
});

Route::get('category/{category:slug}', function (Category $category) {
    return Inertia::render('Post/Index', [
        'posts' => $category->posts,
        'curCategory' => $category,
        'categories' => $category->all()
    ]);
})->name("category");

Route::get('authors/{author:username}', function (User $author) {
    return Inertia::render('Post/Index', [
        'posts' => $author->posts
    ]);
});
