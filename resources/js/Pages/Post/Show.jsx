import React from "react"
import { Link } from "@inertiajs/react"

export default function Show({ post }) {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
            <p>{post.body}</p>

            <Link href="/">View all post</Link>
        </div>
    )
}
