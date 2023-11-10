<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'slug' => $this->slug,
            'excerpt' => $this->excerpt,
            'body' => $this->body,
            'created_at' => $this->created_at,
            'thumbnail' => $this->thumbnail,
            'author' => UserResource::make($this->whenLoaded('author')),
            'category' => CategoryResource::make($this->whenLoaded('category'))
        ];
    }
}
