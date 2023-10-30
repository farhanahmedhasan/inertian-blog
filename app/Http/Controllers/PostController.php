<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;
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

    //    TODO: show only some keys on the comments->author && comments->post
    public function show(Post $post): Response
    {
        return Inertia::render('Post/Show', [
            'post' => $post,
            'comments' => $post->comments()->get()
        ]);
    }
}
