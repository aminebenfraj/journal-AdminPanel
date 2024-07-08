<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'published_at',
        'category_id',
        'author_id',
        'source_id',
    ];

    /**
     * Define the relationship with category.
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * Define the relationship with author.
     */
    public function author()
    {
        return $this->belongsTo(Author::class);
    }

    /**
     * Define the relationship with tags.
     */
    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    /**
     * Define the relationship with news source.
     */
    public function source()
    {
        return $this->belongsTo(Source::class);
    }
}
