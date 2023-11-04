<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class MustBeAdministrator
{
    /**
     * Handle an incoming request.
     *
     * @param Closure(Request): (Response) $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (auth()->user()?->username !== "yourHasan") {
            abort(\Symfony\Component\HttpFoundation\Response::HTTP_FORBIDDEN);
        }
         
        return $next($request);
    }
}
