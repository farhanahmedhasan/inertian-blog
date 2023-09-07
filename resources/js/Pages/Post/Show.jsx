import React from "react"
import { Link } from "@inertiajs/react"

export default function Show({ post }) {
    return (
        <div>
            <h1 dangerouslySetInnerHTML={{ __html: post.title }}></h1>
            <p>{post.excerpt}</p>
            <p dangerouslySetInnerHTML={{ __html: post.body }}></p>

            <Link href="/">View all post</Link>
        </div>
    )
}
