<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\User::create([
            'nome' => 'Usuario 1',
            'email' => 'user1@test.com',
            'senha' => bcrypt('senha123'),
            'remember_token' => str_random(10),
        ]);
    }
}
