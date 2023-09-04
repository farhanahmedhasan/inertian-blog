<?php

declare(strict_types=1);

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Post/Index');
});

Route::get('/service', function () {
    return Inertia::render('Service/Index');
});

Route::get('/contact', function () {
    return Inertia::render('Contact/Index');
});
