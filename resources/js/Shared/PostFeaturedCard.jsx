import CategoryButton from "@/Shared/CategoryButton.jsx"

import { Link } from "@inertiajs/react"
import moment from "moment"
import React from "react"

export default function PostFeaturedCard({ post }) {
    return (
        <article className="transition-colors duration-300 hover:bg-gray-100 border border-black border-opacity-0 hover:border-opacity-5 rounded-xl">
            <div className="py-6 px-5 lg:flex">
                <div className="flex-1 lg:mr-8">
                    <img
                        src={post.thumbnail ? `/storage/${post.thumbnail}` : "images/illustration-1.png"}
                        alt="Blog Post illustration"
                        className="rounded-xl"
                    />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                    <header className="mt-8 lg:mt-0">
                        <div className="space-x-2">
                            <CategoryButton category={post.category} />
                        </div>

                        <div className="mt-4">
                            <Link href={`/post/${post.slug}`}>
                                <h1 className="text-3xl">{post.title}</h1>
                            </Link>

                            <span className="mt-2 block text-gray-400 text-xs">
                                Published <time>{moment(post.created_at).fromNow()}</time>
                            </span>
                        </div>
                    </header>

                    <div className="mt-2 space-y-4" dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>

                    <footer className="flex justify-between items-center mt-8">
                        <div className="flex items-center text-sm">
                            <img src="/images/lary-avatar.svg" alt="Lary avatar" />
                            <div className="ml-3">
                                <h5>
                                    <Link href={`/?author=${post.author.username}`}>
                                        By <span className="font-bold">{post.author.username}</span>
                                    </Link>
                                </h5>
                            </div>
                        </div>

                        <div className="hidden lg:block">
                            <Link
                                href={`/post/${post.slug}`}
                                className="transition-colors duration-300 text-xs font-semibold bg-gray-200 hover:bg-gray-300 rounded-full py-2 px-8"
                            >
                                Read More
                            </Link>
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    )
}
