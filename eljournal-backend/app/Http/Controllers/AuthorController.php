<?php

namespace App\Http\Controllers;

use App\Models\Author;
use App\Http\Requests\StoreAuthorRequest;
use App\Http\Requests\UpdateAuthorRequest;
use Illuminate\Http\Request;

class AuthorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $authors = Author::all();
        return response()->json($authors);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // Since this is an API, there's no need for a create form
        return response()->json(['message' => 'Create form not needed for API'], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAuthorRequest $request)
    {
        $validated = $request->validated();
        $author = Author::create($validated);
        return response()->json($author, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Author $author)
    {
        return response()->json($author);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Author $author)
    {
        // Since this is an API, there's no need for an edit form
        return response()->json(['message' => 'Edit form not needed for API'], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAuthorRequest $request, Author $author)
    {
        $validated = $request->validated();
        $author->update($validated);
        return response()->json($author, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Author $author)
    {
        $author->delete();
        return response()->json(null, 204);
    }
}
