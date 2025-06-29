<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory()->createMany([[
            'name' => 'Ajhay',
            'email' => 'herrera@example.com',
            'type' => 'admin',
            'password' => 'ciaociao'
        ], [
            'name' => 'David',
            'email' => 'incarbone@example.com',
            'type' => 'admin',
            'password' => 'ciaociao'
        ], [
            'name' => 'Pippo',
            'email' => 'baudo@example.com',
            'type' => 'teacher',
            'password' => 'ciaociao'
        ], [
            'name' => 'Pino',
            'email' => 'insegno@example.com',
            'type' => 'student',
            'password' => 'ciaociao'
        ]],);
    }
}
