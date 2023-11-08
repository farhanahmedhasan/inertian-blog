import InputTextArea from "@/Shared/form/InputTextArea.jsx"
import InputSelect from "@/Shared/form/InputSelect.jsx"
import Input from "@/Shared/form/Input.jsx"

import React from "react"
import { useForm } from "@inertiajs/react"
import Settings from "@/Shared/Settings.jsx"
export default function Edit({ post, categories }) {
    const {
        data,
        setData,
        post: route,
        errors
    } = useForm({
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        body: post.body,
        category_id: post.category_id,
        thumbnail: post.thumbnail
    })

    function handleChange(e) {
        const key = e.target.name
        const value = e.target.value

        if (key === "thumbnail") {
            setData({ ...data, thumbnail: e.target.files[0] })
        }

        if (key !== "thumbnail") {
            setData({ ...data, [key]: value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        // route("/admin/posts")
    }
    return (
        <Settings header="Edit your post">
            <form className="p-6 max-w-4xl mx-auto border rounded-xl shadow-xl" onSubmit={handleSubmit}>
                <Input
                    name="title"
                    label="Title"
                    value={data.title}
                    errorMessage={errors.title}
                    handleChange={handleChange}
                />
                <Input
                    name="slug"
                    label="Slug"
                    value={data.slug}
                    errorMessage={errors.slug}
                    handleChange={handleChange}
                />

                <InputTextArea
                    name="excerpt"
                    label="excerpt"
                    value={data.excerpt}
                    errorMessage={errors.excerpt}
                    handleChange={handleChange}
                />

                <InputTextArea
                    name="body"
                    label="Post body"
                    rows={9}
                    value={data.body}
                    errorMessage={errors.body}
                    handleChange={handleChange}
                />

                <div className="grid grid-cols-3">
                    <InputSelect
                        name="category_id"
                        label="Category"
                        labelClass="!mb-0"
                        value={data.category_id}
                        options={categories}
                        errorMessage={errors.category_id}
                        handleChange={handleChange}
                    />

                    <div className="col-span-2 flex items-center">
                        <div className="rounded-xl overflow-hidden">
                            <img
                                src={post.thumbnail ? `/storage/${post.thumbnail}` : "/images/illustration-4.png"}
                                alt=""
                                className="object-cover h-20 w-20"
                                height="20"
                                width="80"
                            />
                        </div>

                        <Input
                            type="file"
                            name="thumbnail"
                            inputClass="!border-0"
                            wrapperClass="!mb-0"
                            errorMessage={errors.thumbnail}
                            handleChange={handleChange}
                        />
                    </div>
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-500 ml-3 rounded-full text-xs font-semibold text-white uppercase py-3 px-5 inline-block"
                    >
                        Update Post
                    </button>
                </div>
            </form>
        </Settings>
    )
}
