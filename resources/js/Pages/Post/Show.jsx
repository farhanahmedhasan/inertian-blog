import React from "react"
import { Link } from "@inertiajs/react"

export default function Show({ post }) {
    // console.log(category)
    console.log(post)
    return (
        <div>
            <p>
                By
                <Link href={`/posts/${post.user.username}`} className="text-blue-600">
                    &nbsp;{post.user.username}&nbsp;
                </Link>
                in&nbsp;
                <Link href={`/category/${post.category.slug}`} className="text-blue-600">
                    {post.category.name}
                </Link>
            </p>

            <h1 dangerouslySetInnerHTML={{ __html: post.title }}></h1>
            <p>{post.excerpt}</p>
            <p dangerouslySetInnerHTML={{ __html: post.body }}></p>

            <Link href="/">View all post</Link>
        </div>
    )
}
