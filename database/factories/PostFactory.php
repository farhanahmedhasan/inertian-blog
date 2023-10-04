<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Post;

/**
 * @extends Factory<Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => rand(1, 10),
            'category_id' => rand(1, 10),
            'title' => $this->faker->sentence,
            'slug' => $this->faker->slug,
            'excerpt' => '<p>' . implode('<p></p>', $this->faker->paragraphs(2)) . '</p>',
            'body' => '<p>' . implode('<p></p>', $this->faker->paragraphs(6)) . '</p>',
        ];
    }
}
