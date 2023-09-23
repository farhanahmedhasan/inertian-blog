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
            "posts" => $this->getPosts(request("search")),
            "categories" => Category::all(),
            "searchData" => request("search")
        ]);
    }

    public function show(Post $post): Response
    {
        return Inertia::render('Post/Show', [
            'post' => $post
        ]);
    }

    protected function getPosts($searchData)
    {
        $posts = Post::latest();

        if ($searchData) {
            $posts->where('title', "like", "%" . $searchData . "%")
                ->orWhere('body', "like", "%" . $searchData . "%");
        }

        return $posts->get();
    }
}
