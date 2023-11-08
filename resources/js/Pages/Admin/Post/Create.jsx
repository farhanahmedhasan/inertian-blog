import InputTextArea from "@/Shared/form/InputTextArea.jsx"
import InputSelect from "@/Shared/form/InputSelect.jsx"
import Settings from "@/Shared/Settings.jsx"
import Input from "@/Shared/form/Input.jsx"

import { useForm } from "@inertiajs/react"
import React, { useEffect } from "react"

export default function Create({ categories }) {
    const { data, setData, post, errors } = useForm({
        title: "",
        slug: "",
        excerpt: "",
        body: "",
        category_id: 1,
        thumbnail: ""
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
        post("/admin/posts")
    }

    useEffect(() => {
        const slug = data.title.trim().replace(/\s/g, "-").toLowerCase()
        setData("slug", slug) //From inertia setter func
    }, [data.title])

    return (
        <Settings header="Publish new post">
            <form className="p-6 max-w-3xl mx-auto border rounded-xl shadow-xl" onSubmit={handleSubmit}>
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

                    <Input
                        type="file"
                        name="thumbnail"
                        label="Thumbnail"
                        labelClass="!mb-0"
                        inputClass="!border-0"
                        wrapperClass="flex items-center gap-x-2 col-span-2 !mb-0"
                        errorMessage={errors.thumbnail}
                        handleChange={handleChange}
                    />
                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-500 ml-3 rounded-full text-xs font-semibold text-white uppercase py-3 px-5 inline-block"
                    >
                        Publish Post
                    </button>
                </div>
            </form>
        </Settings>
    )
}
