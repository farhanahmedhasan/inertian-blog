import React from "react"
import { useForm } from "@inertiajs/react"

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        username: "",
        name: "",
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

        post("/register")
    }

    return (
        <section className="max-w-xl mx-auto mt-12 bg-gray-100 border border-gray-200 rounded p-6">
            <h1 className="text-xl text-center font-bold mb-10">Register</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="username" className="block mb-2 uppercase font-bold text-xs text-gray-700">
                        Username
                    </label>
                    <input
                        className="border border-gray-400 p-2 w-full"
                        type="text"
                        name="username"
                        id="username"
                        value={data.username}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 uppercase font-bold text-xs text-gray-700">
                        Name
                    </label>
                    <input
                        className="border border-gray-400 p-2 w-full"
                        type="text"
                        name="name"
                        id="name"
                        value={data.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 uppercase font-bold text-xs text-gray-700">
                        Email
                    </label>
                    <input
                        className="border border-gray-400 p-2 w-full"
                        type="email"
                        name="email"
                        id="email"
                        value={data.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 uppercase font-bold text-xs text-gray-700">
                        Password
                    </label>
                    <input
                        className="border border-gray-400 p-2 w-full"
                        type="password"
                        name="password"
                        id="password"
                        autoComplete="off"
                        value={data.password}
                        onChange={handleChange}
                    />
                </div>

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
