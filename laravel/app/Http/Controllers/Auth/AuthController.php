<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegistrationRequest;
use App\Services\Auth\AuthService;
use Illuminate\Http\JsonResponse;

class AuthController extends Controller
{
    public function __construct(
        public AuthService $authService
    ) {
    }

    /**
     * @throws \Exception
     */
    public function register(RegistrationRequest $request): JsonResponse
    {
        $name = $request->input('name');
        $email = $request->input('email');
        $password = $request->input('password');

        return $this->success($this->authService->register($name, $email, $password));
    }

    public function login(LoginRequest $request): JsonResponse
    {
        $email = $request->input('email');
        $password = $request->input('password');

        return $this->success($this->authService->login($email, $password));
    }

    /**
     * @throws \Exception
     */
    public function verifyEmail($token): JsonResponse
    {
        return $this->success($this->authService->verifyEmail($token));
    }
}
