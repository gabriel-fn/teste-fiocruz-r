<?php

namespace App\Http\Controllers;

use App\Models\Registro;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class RegistroController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('RegistroTabela', [
            'registros' => Registro::orderByDesc('updated_at')->get(),
        ]);        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Registro');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'is_estrangeiro' => "required",
            'cpf' => "nullable|min:11|max:11",
            'uf' => "nullable|alpha|min:2|max:2",
            'municipio' => "nullable|max:50",
            'nome' => "required|max:50",
            'nascimento' => "required|date",
            'nivel_formacao' => "required",
        ]);

        if ($validator->stopOnFirstFailure()->fails()) {
            return Inertia::render('Registro', [
                'errors' => $validator->errors(),
            ]); 
        }

        $registro = Registro::create([
            'is_estrangeiro' => $request->is_estrangeiro,
            'cpf' => $request->cpf,
            'uf' => Str::of($request->uf)->upper(),
            'municipio' => $request->municipio,
            'nome' => Str::of($request->nome)->upper(),
            'nascimento' => $request->nascimento,
            'nivel_formacao' => $request->nivel_formacao,
        ]);

        return redirect('registros');
    }

}
