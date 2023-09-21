<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'title',
        'slug',
        'excerpt',
        'body'
    ];

    //Gimme author and category data every time i call post model
    protected $with = ['author', 'category'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function author()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function scopeSearchTitleBody(Builder $builder, string $title, string $body): void
    {
        $builder->where(function (Builder $builder) use ($title, $body) {
            $builder->where('title', "like", "%" . $title . "%")
                ->orWhere('body', "like", "%" . $body . "%");
        });
    }
}
