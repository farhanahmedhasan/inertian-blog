<?php

declare(strict_types=1);

use App\Models\Category;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    $posts = Post::latest();

    $searchData = request("search");

    if ($searchData) {
        $posts->where('title', "like", "%" . $searchData . "%")
            ->orWhere('body', "like", "%" . $searchData . "%");
    }

    return Inertia::render('Post/Index', [
        "posts" => $posts->get(),
        "categories" => Category::all(),
        "searchData" => $searchData
    ]);
})->name("home");

Route::get('/post/{post:slug}', function (Post $post) { //Post->where('slug', $post)->findOrFail();
    return Inertia::render('Post/Show', [
        'post' => $post
    ]);
});

Route::get('category/{category:slug}', function (Category $category, Request $request) {
    $searchData = $request->search;

    $posts = $category->posts()
        ->when($searchData !== null, function (Builder $builder) use ($searchData) {
            $builder->where(function ($builder) use ($searchData) {
                $builder->where('title', "like", "%" . $searchData . "%")
                    ->orWhere('body', "like", "%" . $searchData . "%");
            });
        })->get();

    return Inertia::render('Post/Index', [
        'posts' => $posts,
        'curCategory' => $category,
        'categories' => $category->all(),
        "searchData" => $searchData
    ]);
})->name("category");

Route::get('authors/{author:username}', function (User $author) {
    return Inertia::render('Post/Index', [
        'posts' => $author->posts
    ]);
});
