<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


// Route::post('/user', function(Request $request){
// return json_encode('create user');
// });

Route::post('/user', function(Request $request){
   $request->validate([
    'firstName' => 'required',
    'lastName' => 'required',
    'email' => 'required|unique:users',
    'password' => 'required',
   ],[
    'firstName.required' => 'O campo é obrigatório',
    'email.unique' => 'Esse email ja esta cadastrado. Esqueceu a senha?' 
   ]);
});


Route::get('/users', function(){
    return User::all();
});

Route::get('/users/search', function(Request $request){
    $user= $request->input('user');
    return User::where('firstName', 'like', '%'.$user.'%')->paginate(10);
});