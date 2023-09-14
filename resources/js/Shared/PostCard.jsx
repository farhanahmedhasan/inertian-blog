import React from "react"
import { Link } from "@inertiajs/react"
import moment from "moment"

export default function PostCard({ post, className }) {
    return (
        <article
            className={`transition-colors duration-300 hover:bg-gray-100 border border-black border-opacity-0 hover:border-opacity-5 rounded-xl ${className}`}
        >
            <div className="py-6 px-5">
                <div>
                    <img src="/images/illustration-3.png" alt="Blog Post illustration" className="rounded-xl" />
                </div>

                <div className="mt-8 flex flex-col justify-between">
                    <header>
                        <div className="space-x-2">
                            <Link
                                href={`/category/${post?.category?.slug}`}
                                className="px-3 py-1 border border-blue-300 rounded-full text-blue-300 text-xs uppercase font-semibold"
                                style={{ fontSize: "10px" }}
                            >
                                {post?.category?.name}
                            </Link>
                        </div>

                        <div className="mt-4">
                            <h1 className="text-3xl">{post?.title}</h1>

                            <span className="mt-2 block text-gray-400 text-xs">
                                Published <time>{moment(post?.created_at).fromNow()}</time>
                            </span>
                        </div>
                    </header>

                    <div className="text-sm mt-4">
                        <p>{post?.excerpt}</p>
                    </div>

                    <footer className="flex justify-between items-center mt-8">
                        <div className="flex items-center text-sm">
                            <img src="/images/lary-avatar.svg" alt="Lary avatar" />
                            <div className="ml-3">
                                <h5>
                                    By
                                    <span className="font-bold">{post?.author?.name}</span>
                                </h5>
                            </div>
                        </div>

                        <div>
                            <Link
                                href={`/post/${post?.slug}`}
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
