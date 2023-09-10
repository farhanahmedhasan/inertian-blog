import React from "react"
import { Link } from "@inertiajs/react"

export default function Index({ posts }) {
    return (
        <div>
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <h1>
                            <Link href={`/post/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title }}></Link>
                        </h1>
                        <p>{post.excerpt}</p>
                    </div>
                )
            })}
        </div>
    )
}
