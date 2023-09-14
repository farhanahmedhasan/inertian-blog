import PostFeaturedCard from "@/Shared/PostFeaturedCard.jsx"
import PostsHeader from "@/Pages/partials/PostsHeader.jsx"
import PostCard from "@/Shared/PostCard.jsx"
import React from "react"

export default function Index({ posts }) {
    console.log(posts)
    return (
        <>
            <PostsHeader />

            <section className="max-w-6xl mx-auto mt-6 lg:mt-20 space-y-6">
                {posts.length > 0 ? (
                    <>
                        <PostFeaturedCard post={posts[0]} />

                        {posts.length > 1 && (
                            <div className="lg:grid lg:grid-cols-6">
                                {posts.map((post, index) => {
                                    if (index === 0) return
                                    return (
                                        <PostCard
                                            key={post.id}
                                            post={post}
                                            className={index < 3 ? "col-span-3" : "col-span-2"}
                                        />
                                    )
                                })}
                            </div>
                        )}
                    </>
                ) : (
                    <p className="text-center">There is no post yet. Please check back later...</p>
                )}
            </section>
        </>
    )
}
