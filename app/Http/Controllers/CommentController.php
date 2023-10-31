<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(Post $post)
    {
        // validating the comment
        $attributes = request()->validate([
            'body' => 'required | min:8'
        ]);

        // add a comment to the given post
        Comment::create([
            'user_id' => auth()->id(),
            'post_id' => $post->id,
            'body' => $attributes['body']
        ]);

        // redirect back to the previous page after submitting a comment
        return back();
    }
}
