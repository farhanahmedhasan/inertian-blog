import Input from "@/Shared/form/Input.jsx"

import { useForm } from "@inertiajs/react"
import React from "react"

export default function Create() {
    const { data, setData, post, errors } = useForm({
        email: "",
        password: ""
    })

    function handleChange(e) {
        const value = e.target.value
        const key = e.target.name

        setData({ ...data, [key]: value })
    }

    function handleSubmit(e) {
        e.preventDefault()

        post("/login")
    }

    return (
        <section className="max-w-xl mx-auto mt-12 border border-gray-200 shadow rounded p-6">
            <h1 className="text-xl text-center font-bold mb-10">Login</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    type="type"
                    name="email"
                    label="Email"
                    value={data.email}
                    handleChange={handleChange}
                    errorMessage={errors.email}
                />

                <Input
                    type="password"
                    name="password"
                    label="Password"
                    value={data.password}
                    handleChange={handleChange}
                    errorMessage={errors.password}
                />

                <div className="mb-6">
                    <button
                        type="submit"
                        className="bg-blue-500 ml-3 rounded-full text-xs font-semibold text-white uppercase py-3 px-5 inline-block"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </section>
    )
}
