<?php
// app/Http/Controllers/TagController.php

namespace App\Http\Controllers;

use App\Models\Tag;
use App\Http\Requests\StoreTagRequest;
use App\Http\Requests\UpdateTagRequest;

class TagController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tags = Tag::all();
        return response()->json($tags);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTagRequest $request)
    {
        $tag = Tag::create($request->validated());
        return response()->json($tag, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Tag $tag)
    {
        return response()->json($tag);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTagRequest $request, Tag $tag)
    {
        $tag->update($request->validated());
        return response()->json($tag);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tag $tag)
    {
        $tag->delete();
        return response()->json(null, 204);
    }
}
