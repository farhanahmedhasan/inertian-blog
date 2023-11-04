import ErrorMessage from "@/Shared/ErrorMessage.jsx"
import { getCapitalizeStr } from "@/helper/utils.js"

import { useForm } from "@inertiajs/react"
import React, { useEffect } from "react"

export default function Create({ categories }) {
    const { data, setData, post, errors } = useForm({
        title: "",
        slug: "",
        excerpt: "",
        body: "",
        category_id: 1
    })

    function handleChange(e) {
        const key = e.target.name
        const value = e.target.value

        setData({ ...data, [key]: value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        post("/admin/posts")
    }

    useEffect(() => {
        const slug = data.title.trim().replace(/\s/g, "-").toLowerCase()
        setData("slug", slug)
    }, [data.title])

    return (
        <section className="px-6 py-8 max-w-3xl mx-auto">
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="title" className="block mb-2 uppercase font-bold text-xs text-gray-700">
                        Title
                    </label>
                    <input
                        className="border border-gray-400 p-2 w-full"
                        type="text"
                        name="title"
                        id="title"
                        autoComplete="off"
                        value={data.title}
                        onChange={handleChange}
                    />
                    <ErrorMessage message={errors.title} />
                </div>

                <div className="mb-6">
                    <label htmlFor="slug" className="block mb-2 uppercase font-bold text-xs text-gray-700">
                        Slug
                    </label>
                    <input
                        className="border border-gray-400 p-2 w-full"
                        type="text"
                        name="slug"
                        id="slug"
                        autoComplete="off"
                        value={data.slug}
                        onChange={handleChange}
                    />
                    <ErrorMessage message={errors.slug} />
                </div>

                <div className="mb-6">
                    <label htmlFor="excerpt" className="block mb-2 uppercase font-bold text-xs text-gray-700">
                        Excerpt
                    </label>
                    <textarea
                        className="w-full border border-gray-400 p-2"
                        rows="3"
                        name="excerpt"
                        id="excerpt"
                        autoComplete="off"
                        value={data.excerpt}
                        onChange={handleChange}
                    ></textarea>
                    <ErrorMessage message={errors.excerpt} />
                </div>

                <div className="mb-6">
                    <label htmlFor="body" className="block mb-2 uppercase font-bold text-xs text-gray-700">
                        Post body
                    </label>
                    <textarea
                        className="w-full border border-gray-400 p-2"
                        rows="9"
                        name="body"
                        id="body"
                        autoComplete="off"
                        value={data.body}
                        onChange={handleChange}
                    ></textarea>
                    <ErrorMessage message={errors.body} />
                </div>

                <div className="mb-6 flex items-center">
                    <label htmlFor="category_id" className="block uppercase font-bold text-xs text-gray-700">
                        Category
                    </label>
                    <select
                        className="ml-6"
                        name="category_id"
                        id="category_id"
                        value={data.category}
                        onChange={handleChange}
                    >
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {getCapitalizeStr(category.name)}
                            </option>
                        ))}
                    </select>

                    <ErrorMessage message={errors.category} />
                </div>

                <div className="flex justify-end mb-6">
                    <button
                        type="submit"
                        className="bg-blue-500 ml-3 rounded-full text-xs font-semibold text-white uppercase py-3 px-5 inline-block"
                    >
                        Publish Post
                    </button>
                </div>
            </form>
        </section>
    )
}
