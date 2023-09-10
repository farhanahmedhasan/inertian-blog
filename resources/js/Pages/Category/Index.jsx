import React from "react"
import { Link } from "@inertiajs/react"

export default function Index({ posts }) {
    console.log(posts)
    return (
        <div>
            {posts.posts.map((post) => {
                return (
                    <div key={post.id} className="mb-6">
                        <h1 className="text-2xl font-bold">
                            <Link href={`/post/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title }}></Link>
                        </h1>

                        <p>{post.excerpt}</p>
                    </div>
                )
            })}

            <Link href="/">View all post</Link>
        </div>
    )
}
