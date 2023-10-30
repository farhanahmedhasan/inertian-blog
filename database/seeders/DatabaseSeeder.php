<?php

declare(strict_types=1);

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Comment;
use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\Post;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::factory()->create([
            'username' => "mehar",
            'email' => "mehar@gmail.com",
            'name' => "Humayra Binte Mehar"
        ]);

        User::factory()->create([
            'username' => "yourHasan",
            'name' => "Hasan Al Mamun",
            'email' => "dev.hasanalmamun@gmail.com",
            'password' => "yourHasan"
        ]);

        User::factory(8)->create();

        Category::factory(10)->create();

        Post::factory(50)->create();

        Comment::factory(700)->create();
    }
}
