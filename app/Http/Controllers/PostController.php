<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use Inertia\Inertia;
use Inertia\Response;

class PostController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Post/Index', [
            "posts" => Post::latest()->filter(request(["search", "category", "author"]))->paginate(6)->withQueryString(),
            "categories" => Category::all(),
            "searchData" => request("search"),
            "curCategory" => Category::firstWhere('slug', request('category'))
        ]);
    }

    //    TODO: show only some keys on the comments->author && comments
    public function show(Post $post): Response
    {
        // dd($post->comments()->with('author')->get());
        return Inertia::render('Post/Show', [
            'post' => $post,
            'comments' => $post->comments()->with('author')->get()
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Post/Create', [
            'categories' => Category::all()
        ]);
    }

    public function store()
    {
        dd(request()->all());
    }
}
