import ErrorMessage from "@/Shared/ErrorMessage.jsx"

import { Link, useForm, usePage } from "@inertiajs/react"
import React from "react"

export default function AddCommentForm({ post }) {
    const { user } = usePage().props

    const { data, setData, post: routePost, errors } = useForm({ body: "" })

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

    return user ? (
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
                    required
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
            <Link className="font-semibold hover:underline" href="/login">
                Login{" "}
            </Link>
            or
            <Link className="font-semibold hover:underline" href="/register">
                {" "}
                Register{" "}
            </Link>
            to participate in a comment
        </p>
    )
}
