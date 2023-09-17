import React, { useEffect, useState } from "react"
import { router } from "@inertiajs/react"
import ArrowDown from "@/asstes/svgs/ArrowDown.jsx"

export default function PostsHeader({ categories }) {
    const [catValue, setCatValue] = useState("")
    function handleCatValChange(e) {
        e.preventDefault()
        setCatValue(e.target.value)
    }

    useEffect(() => {
        if (catValue === "all") {
            router.get("/")
        }

        console.log(catValue)
        if (catValue !== "" && catValue !== "all") {
            router.get(
                `/category/${catValue}`,
                {},
                {
                    preserveState: true
                }
            )
        }
    }, [catValue])

    return (
        <header className="max-w-xl mx-auto mt-20 text-center">
            <h1 className="text-4xl">
                Latest <span className="text-blue-500">Laravel From Scratch</span> News
            </h1>

            <h2 className="inline-flex mt-2">
                By Lary Laracore <img src="/images/lary-head.svg" alt="Head of Lary the mascot" />
            </h2>

            <p className="text-sm mt-14">
                Another year. Another update. We&apos;re refreshing the popular Laravel series with new content.
                I&apos;m going to keep you guys up to speed with what&apos;s going on!
            </p>

            <div className="space-y-2 lg:space-y-0 lg:space-x-4 mt-8">
                {/*Category*/}
                <div className="relative flex lg:inline-flex items-center bg-gray-100 rounded-xl">
                    <select
                        value={catValue}
                        onChange={handleCatValChange}
                        className="flex-1 appearance-none bg-transparent py-2 pl-3 pr-9 text-sm font-semibold"
                    >
                        <option value="all">All</option>
                        {categories.map((category) => {
                            return (
                                <option key={category.id} value={category.slug}>
                                    {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                                </option>
                            )
                        })}
                    </select>

                    <ArrowDown />
                </div>

                {/*Other Filters*/}
                <div className="relative flex lg:inline-flex items-center bg-gray-100 rounded-xl">
                    <select
                        defaultValue="category"
                        className="flex-1 appearance-none bg-transparent py-2 pl-3 pr-9 text-sm font-semibold"
                    >
                        <option value="category" disabled>
                            Other Filters
                        </option>
                        <option value="foo">Foo</option>
                        <option value="bar">Bar</option>
                    </select>

                    <ArrowDown />
                </div>

                {/*Search*/}
                <div className="relative flex lg:inline-flex items-center bg-gray-100 rounded-xl px-3 py-2">
                    <form method="GET" action="#" className="mb-0">
                        <input
                            type="text"
                            name="search"
                            placeholder="Find something"
                            className="bg-transparent placeholder-black font-semibold text-sm"
                        />
                    </form>
                </div>
            </div>
        </header>
    )
}
