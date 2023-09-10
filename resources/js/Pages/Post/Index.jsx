import React from "react"
import { Link } from "@inertiajs/react"

export default function Index({ posts }) {
    return (
        <div>
            {posts.map((post) => {
                return (
                    <div key={post.id} className="mb-6">
                        <h1 className="text-2xl font-bold">
                            <Link href={`/post/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title }}></Link>
                        </h1>

                        <Link href={`category/${post.category.slug}`} className="text-blue-600">
                            {post.category.name}
                        </Link>
                        <p>{post.excerpt}</p>
                    </div>
                )
            })}
        </div>
    )
}
