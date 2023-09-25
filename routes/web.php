<?php

declare(strict_types=1);

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PostController::class, 'index'])->name("home");
Route::get('/post/{post:slug}', [PostController::class, 'show']); //Post->where('slug', $post)->findOrFail();
