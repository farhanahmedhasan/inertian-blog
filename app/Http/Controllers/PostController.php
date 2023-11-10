<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Http\Resources\CommentResource;
use App\Http\Resources\PostResource;
use App\Models\Category;
use App\Models\Post;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index()
    {
        return Inertia::render('Post/Index', [
            "posts" => PostResource::collection(
                Post::latest()->filter(request(['search', 'category', 'author']))->paginate(6)->withQueryString()
            ),
            "categories" => CategoryResource::collection(Category::all()),
            "searchData" => request("search"),
            "curCategory" => Category::firstWhere('slug', request('category'))
        ]);
    }

    public function show(Post $post)
    {
        // This only gives the comments collection bcz we're conditionally loading relationship in the commentResource
        // return CommentResource::collection($post->comments);
        return Inertia::render('Post/Show', [
            'post' => PostResource::make($post),
            // But here as we are loading author relation we will get both comment collection, and it's related author model
            'comments' => CommentResource::collection($post->comments()->with('author')->get()),
        ]);
    }
}
