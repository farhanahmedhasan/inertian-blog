<?php

declare(strict_types=1);

use App\Models\User;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Post/Index', [
        'user' => User::get(['username'])
    ]);
});

Route::get('/service', function () {
    return Inertia::render('Service/Index');
});

Route::get('/contact', function () {
    return Inertia::render('Contact/Index');
});
