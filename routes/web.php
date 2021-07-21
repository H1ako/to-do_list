<?php

use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    $user = request('user');
    $data = ['user' => $user];
    return view('homePage', $data);
});
Route::get("/settings", function(){
    $data = [];
    return view('settings', $data);
});
