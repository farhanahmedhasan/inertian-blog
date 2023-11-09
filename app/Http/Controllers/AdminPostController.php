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
        Post::create(array_merge($this->validatePost(new Post()), [
            'user_id' => auth()->id(),
            'thumbnail' => request()->file('thumbnail')->store('thumbnail')
        ]));

        return redirect('/')->with('message', 'Your post has been created successfully');
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
        $attributes = $this->validatePost($post);

        if ($attributes['thumbnail'] ?? false) {
            $attributes['thumbnail'] = request()->file('thumbnail')->store('thumbnail');
        }

        if (!isset($attributes['thumbnail'])) {
            $attributes['thumbnail'] = $post->thumbnail;
        }

        $post->update($attributes);

        return redirect('/admin/posts')->with('message', 'Post updated');
    }

    public function destroy(Post $post)
    {
        $post->delete();
        return back()->with('message', 'Post deleted');
    }

    protected function validatePost(Post $post): array
    {
        return request()->validate([
            'title' => 'required | min:8 | max:255',
            'slug' => ['required', Rule::unique('posts', 'slug')->ignore($post->id)],
            'thumbnail' => $post->exists ? ['nullable', 'image'] : ['required', 'image'],
            'excerpt' => 'required | max:574',
            'body' => 'required',
            'category_id' => ['required', Rule::exists('categories', 'id')]
        ]);
    }
}
