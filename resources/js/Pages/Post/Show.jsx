import React from "react"
import { Link } from "@inertiajs/react"

export default function Show({ post }) {
    // console.log(category)
    console.log(post)
    return (
        <div>
            <Link href={`/category/${post.category.slug}`} className="text-blue-600">
                {post.category.name}
            </Link>

            <h1 dangerouslySetInnerHTML={{ __html: post.title }}></h1>
            <p>{post.excerpt}</p>
            <p dangerouslySetInnerHTML={{ __html: post.body }}></p>

            <Link href="/">View all post</Link>
        </div>
    )
}
