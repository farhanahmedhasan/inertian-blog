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

    public function scopeFilter($query, array $filters): void //Post::newQuery()->filter()
    {
        $query->when($filters['search'] ?? false, function ($query, $search) {
            dd($search);
            $query->where('title', 'like', '%' . $search . '%')
                ->orWhere('body', 'like', '%' . $search . '%');
        });
    }

    //        dd($filters['search'] ?? false);
//        if ($filters['search'] ?? false) {
//            $query->where('title', "like", "%" . $filters['search'] . "%")
//                ->orWhere('body', "like", "%" . $filters['search'] . "%");
//        }

//    public function scopeSearchTitleBody(Builder $builder, string $title, string $body): void
//    {
//        $builder->where(function (Builder $builder) use ($title, $body) {
//            $builder->where('title', "like", "%" . $title . "%")
//                ->orWhere('body', "like", "%" . $body . "%");
//        });
//    }
}
