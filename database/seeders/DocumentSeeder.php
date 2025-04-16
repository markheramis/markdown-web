<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Document;

class DocumentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 0; $i < 2; $i++) {
            Document::factory()
                ->withAuthor(User::inRandomOrder()->first()->id)
                ->create();
        }
        for ($i = 0; $i < 23; $i++) {
            Document::factory()
                ->withParent(Document::inRandomOrder()->first()->id)
                ->withAuthor(User::inRandomOrder()->first()->id)
                ->create();
        }
    }
}
