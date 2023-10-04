<?php

declare(strict_types=1);

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
            'name' => "Humayra Binte Mehar"
        ]);
        User::factory(9)->create();

        Category::factory(10)->create();

        Post::factory(50)->create();
    }
}
