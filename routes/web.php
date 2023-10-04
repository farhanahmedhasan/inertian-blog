<?php

declare(strict_types=1);

use App\Http\Controllers\PostController;
use App\Http\Controllers\RegisterController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PostController::class, 'index'])->name("home");
Route::get('/post/{post:slug}', [PostController::class, 'show']); //Post->where('slug', $post)->findOrFail();

Route::get('register', [RegisterController::class, 'create']);
