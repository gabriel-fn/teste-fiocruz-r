<?php

namespace Database\Factories;

use App\Models\Registro;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class RegistroFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Registro::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'is_estrangeiro' => false,
            'cpf' => $this->faker->unique()->cpf(false),
            'uf' => Str::of($this->faker->stateAbbr())->upper(),
            'municipio' => $this->faker->city(),
            'nome' => Str::of($this->faker->name())->upper(),
            'nascimento' => $this->faker->date(),
            'nivel_formacao' => 'Nenhum',
        ];
    }
}
