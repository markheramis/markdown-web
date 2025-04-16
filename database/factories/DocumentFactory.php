<?php

namespace Database\Factories;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class DocumentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        static $authorId;
        
        return [
            'author_id' => $authorId ?? \App\Models\User::factory(),
            'parent_id' => null,
            'title' => $this->faker->sentence(),
            'content' => $this->faker->paragraph(),
        ];
    }

    /**
     * Set a specific author ID for the document.
     */
    public function withAuthor($id)
    {
        return $this->state(fn (array $attributes) => [
            'author_id' => $id,
        ]);
    }

    /**
     * Set a specific parent ID for the document.
     */
    public function withParent($id)
    {
        return $this->state(fn (array $attributes) => [
            'parent_id' => $id,
        ]);
    }
}