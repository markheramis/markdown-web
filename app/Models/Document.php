<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Str;

class Document extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'author_id',
        'parent_id',
        'title',
        'content',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [];


    /**
     * Get the parent document.
     */
    public function parent()
    {
        return $this->belongsTo(Document::class, 'parent_id');
    }

    /**
     * Get the child documents.
     */
    public function children()
    {
        return $this->hasMany(Document::class, 'parent_id');
    }

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [];
    }

    /**
     * Boot the model.
     */
    protected static function boot()
    {
        parent::boot();

        static::saving(function ($document) {
            if (!$document->slug) {
                $document->slug = Str::slug($document->title);
            }
        });
    }
}
