import CategoryButton from "@/Shared/CategoryButton.jsx"
import Comment from "../../Shared/Comment.jsx"

import { Link, useForm, usePage } from "@inertiajs/react"
import moment from "moment"
import React from "react"
import ErrorMessage from "@/Shared/ErrorMessage.jsx"

export default function Show({ post, comments }) {
    const { user } = usePage().props

    const {
        data,
        setData,
        post: routePost,
        errors
    } = useForm({
        body: ""
    })

    function handleChange(e) {
        const value = e.target.value
        const key = e.target.name

        setData({ ...data, [key]: value })
    }

    function handleSubmit(e) {
        e.preventDefault()

        routePost(`/post/${post.slug}/comments`, { preserveScroll: true })
        setData({ ...data, body: "" })
    }

    return (
        <section className="px-6 py-8">
            <div className="max-w-6xl mx-auto mt-10 lg:mt-20 space-y-6">
                <article className="max-w-6xl mx-auto lg:grid lg:grid-cols-12 gap-x-10">
                    <div className="col-span-4 lg:text-center lg:pt-14 mb-10">
                        <img src="/images/illustration-1.png" alt="" className="rounded-xl" />

                        <p className="mt-4 block text-gray-400 text-xs">
                            Published <time>{moment(post.created_at).fromNow()}</time>
                        </p>

                        <div className="flex items-center lg:justify-center text-sm mt-4">
                            <img src="/images/lary-avatar.svg" alt="Lary avatar" />
                            <div className="ml-3 text-left">
                                <h5>
                                    <Link href={`/?author=${post.author.username}`}>
                                        By <span className="font-bold">{post.author.username}</span>
                                    </Link>
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-8">
                        <div className="hidden lg:flex justify-between mb-6">
                            <Link
                                href="/"
                                className="transition-colors duration-300 relative inline-flex items-center text-lg hover:text-blue-500"
                            >
                                <svg width="22" height="22" viewBox="0 0 22 22" className="mr-2">
                                    <g fill="none" fillRule="evenodd">
                                        <path
                                            stroke="#000"
                                            strokeOpacity=".012"
                                            strokeWidth=".5"
                                            d="M21 1v20.16H.84V1z"
                                        ></path>
                                        <path
                                            className="fill-current"
                                            d="M13.854 7.224l-3.847 3.856 3.847 3.856-1.184 1.184-5.04-5.04 5.04-5.04z"
                                        ></path>
                                    </g>
                                </svg>
                                Back to Posts
                            </Link>

                            <div className="space-x-2">
                                <CategoryButton category={post.category} />
                            </div>
                        </div>

                        <h1 className="font-bold text-3xl lg:text-4xl mb-10">{post.title}</h1>

                        <div
                            className="space-y-4 lg:text-lg leading-loose"
                            dangerouslySetInnerHTML={{ __html: post.body }}
                        ></div>
                    </div>
                </article>

                <section className="space-y-6">
                    {user ? (
                        <form className="border border-gray-200 p-6 rounded-xl" onSubmit={handleSubmit}>
                            <header className="flex items-center space-x-4">
                                <img
                                    className="rounded-full"
                                    src={`https://i.pravatar.cc/40?u=${user.id}`}
                                    alt=""
                                    width="40"
                                    height="40"
                                />

                                <h2>Want to comment ?</h2>
                            </header>

                            <div className="mt-6">
                                <textarea
                                    className="text-sm w-full border border-gray-100 p-4 focus:outline-none focus:ring-1 rounded-xl mb-1"
                                    placeholder="Think of something nice to say !!!"
                                    rows={5}
                                    name="body"
                                    value={data.body}
                                    onChange={handleChange}
                                ></textarea>
                                <ErrorMessage message={errors.body} />
                            </div>

                            <div className="flex justify-end mt-4">
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-600 rounded-full text-xs font-semibold text-white uppercase py-3 px-5 inline-block"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    ) : (
                        <p className="text-lg">
                            <Link className="font-bold hover:underline" href="/login">
                                Login
                            </Link>
                            or
                            <Link className="font-bold hover:underline" href="/register">
                                Register
                            </Link>
                            to participate in a comment
                        </p>
                    )}

                    <div className="max-h-[800px] overflow-y-scroll space-y-6">
                        {comments.map((comment) => (
                            <Comment key={comment.id} comment={comment} />
                        ))}
                    </div>
                </section>
            </div>
        </section>
    )
}
