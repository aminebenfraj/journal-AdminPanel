<?php
// app/Http/Controllers/SourceController.php

namespace App\Http\Controllers;

use App\Models\Source;
use App\Http\Requests\StoreSourceRequest;
use App\Http\Requests\UpdateSourceRequest;
use Illuminate\Http\Request;

class SourceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $sources = Source::all();
        return response()->json($sources);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSourceRequest $request)
    {
        $source = Source::create($request->validated());
        return response()->json($source, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Source $source)
    {
        return response()->json($source);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSourceRequest $request, Source $source)
    {
        $source->update($request->validated());
        return response()->json($source);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Source $source)
    {
        $source->delete();
        return response()->json(null, 204);
    }
}
