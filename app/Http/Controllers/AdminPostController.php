<?php

namespace App\Http\Controllers;

use Illuminate\Validation\Rule;
use App\Models\Category;
use App\Models\Post;
use Inertia\Inertia;
use Inertia\Response;

class AdminPostController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Admin/Post/Index', [
            'posts' => Post::latest()->paginate(30)
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/Post/Create', [
            'categories' => Category::all()
        ]);
    }

    public function store()
    {
        $attributes = request()->validate([
            'title' => 'required | min:8 | max:255',
            'slug' => 'required | unique:posts,slug',
            'thumbnail' => 'required | image',
            'excerpt' => 'required | max:574',
            'body' => 'required',
            'category_id' => ['required', Rule::exists('categories', 'id')]
        ]);

        $attributes['user_id'] = auth()->id();
        $attributes['thumbnail'] = request()->file('thumbnail')->store('thumbnail');

        Post::create($attributes);

        return redirect('/');
    }

    public function edit(Post $post)
    {
        return Inertia::render('Admin/Post/Edit', [
            'post' => $post,
            'categories' => Category::all()
        ]);
    }

    public function update(Post $post)
    {
        $attributes = request()->validate([
            'title' => 'required | min:8 | max:255',
            'slug' => ['required', Rule::unique('posts', 'slug')->ignore($post->id)],
            'thumbnail' => 'nullable | image',
            'excerpt' => 'required | max:574',
            'body' => 'required',
            'category_id' => ['required', Rule::exists('categories', 'id')]
        ]);

        if (isset($attributes['thumbnail'])) {
            $attributes['thumbnail'] = request()->file('thumbnail')->store('thumbnail');
        }

        if (!isset($attributes['thumbnail'])) {
            $attributes['thumbnail'] = $post->thumbnail;
        }

        $post->update($attributes);

        return back()->with('message', 'Post Updated');
    }
}
