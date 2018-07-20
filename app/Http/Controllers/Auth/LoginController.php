<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Auth;
use JWTAuth;
use Validator;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('ajax_get_logout');
    }

    public function ajax_post_login(Request $request)
    {
        $response =[];
        $credenciais = $request->all();
        $validator = Validator::make($credenciais, [
            'email' => 'required:exists:usuarios',
            'senha' => 'required'
        ]);

        $validator->setAttributeNames([
            'email' => 'Email',
            'senha' => 'Senha'
        ]);

        if($validator->fails())
        {
            $response = ['status' => '0', 'message' => $validator->errors()];
        }
        else
        {
            if(Auth::attempt(['email' => $credenciais['email'], 'password' => $credenciais['senha']]))
            {
                $token = JWTAuth::fromUser(Auth::user());

                $objectToken = JWTAuth::setToken($token);
                $expiration = JWTAuth::decode($objectToken->getToken())->get('exp');
                
                $response = [
                    'status' => '1',
                    'data' => [
                        'access_token' => $token,
                        'token_type' => 'bearer',
                        'expires_in' => $expiration
                    ]
                ];
            }
            else
            {
                $response = [
                    'status' => '0',
                    'message' => 'Usuário ou senha inválido'
                ];
            }
        }

        return new JsonResponse($response);
    }

    public function ajax_get_logout()
    {
        Auth::logout();

        return new JsonResponse([
            'status' => '1'
        ]);
    }
}
