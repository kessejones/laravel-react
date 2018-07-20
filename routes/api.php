<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// EXEMPLO DE LOGIN COM API
Route::post('/auth/login', 'Auth\LoginController@ajax_post_login');

// EXEMPLO DE ROTA COM MIDDLEWARE DE AUTENTICAÇÃO JWT
Route::group(['middleware' => ['jwt.auth']], function(){
    Route::get('/user', 'UsuarioController@ajax_get_user');
});
