<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Auth;

class UsuarioController extends Controller
{
    public function ajax_get_user()
    {
        return new JsonResponse([
            'status' => '1',
            'data' => Auth::user()
        ]);
    }
}
