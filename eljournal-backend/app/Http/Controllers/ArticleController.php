<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Http\Requests\StoreArticleRequest;
use App\Http\Requests\UpdateArticleRequest;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $articles = Article::all();
        return response()->json($articles);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // Normally this would return a view, but for API purposes, this can be left empty or return a message
        return response()->json(['message' => 'Create form not needed for API']);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreArticleRequest $request)
    {
        $article = Article::create($request->validated());
        return response()->json($article, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Article $article)
    {
        return response()->json($article);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Article $article)
    {
        // Normally this would return a view, but for API purposes, this can be left empty or return a message
        return response()->json(['message' => 'Edit form not needed for API']);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateArticleRequest $request, Article $article)
    {
        $article->update($request->validated());
        return response()->json($article);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Article $article)
    {
        $article->delete();
        return response()->json(null, 204);
    }
}
