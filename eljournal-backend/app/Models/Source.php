<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Source extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'url',
        'rss_feed_url',
    ];

    /**
     * Define the relationship with articles.
     */
    public function articles()
    {
        return $this->hasMany(Article::class);
    }
}
