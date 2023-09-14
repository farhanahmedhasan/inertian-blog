import React from "react"
import PostCard from "@/Shared/PostCard.jsx"
import PostFeaturedCard from "@/Shared/PostFeaturedCard.jsx"
import PostsHeader from "@/Pages/partials/PostsHeader.jsx"

export default function Index({ posts }) {
    console.log(posts)
    return (
        <>
            <PostsHeader />

            <section className="max-w-6xl mx-auto mt-6 lg:mt-20 space-y-6">
                <PostFeaturedCard post={posts[0]} />

                <div className="lg:grid lg:grid-cols-2">
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </div>

                <div className="lg:grid lg:grid-cols-3">
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </div>
            </section>
        </>
    )
}
