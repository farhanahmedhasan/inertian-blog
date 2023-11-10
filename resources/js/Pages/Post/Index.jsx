import PostFeaturedCard from "@/Shared/PostFeaturedCard.jsx"
import PostsHeader from "@/Pages/partials/PostsHeader.jsx"
import PostCard from "@/Shared/PostCard.jsx"

import React from "react"
import Pagination from "@/Shared/Pagination.jsx"

export default function Index({ posts, categories, curCategory, searchData }) {
    console.log(posts)
    return (
        <>
            <PostsHeader categories={categories} curCategory={curCategory} searchData={searchData} />

            <section className="max-w-6xl mx-auto mt-6 lg:mt-20 space-y-6">
                {posts.data.length > 0 ? (
                    <>
                        <PostFeaturedCard post={posts.data[0]} />

                        {posts.data.length > 1 && (
                            <div className="lg:grid lg:grid-cols-6">
                                {posts.data.map((post, index) => {
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

            {posts.meta.total > 6 && (
                <div className="flex items-center justify-end gap-x-4 mt-8">
                    <p>
                        Showing {posts.meta.from} to {posts.meta.to} of {posts.meta.total} results
                    </p>
                    <Pagination links={posts.meta.links} />
                </div>
            )}
        </>
    )
}
