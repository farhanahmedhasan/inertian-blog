import React, { useEffect, useRef, useState } from "react"
import ArrowDown from "@/asstes/svgs/ArrowDown.jsx"
import { Link } from "@inertiajs/react"

export default function PostsHeader({ categories, curCategory }) {
    const [catToggle, setCatToggle] = useState(false)
    const buttonRef = useRef(null)

    function handleCatToggle() {
        setCatToggle((prev) => !prev)
    }

    useEffect(() => {
        function onClickOutSide(e) {
            if (buttonRef.current && !buttonRef.current.contains(e.target)) {
                setCatToggle(false)
            }
        }
        document.addEventListener("click", onClickOutSide)

        return () => document.removeEventListener("click", onClickOutSide)
    }, [])

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
                <div className="relative lg:inline-flex items-center bg-gray-100 rounded-xl">
                    <div>
                        <button
                            type="button"
                            ref={buttonRef}
                            className="flex py-2 pl-3 pr-9 text-sm font-semibold w-full lg:w-36 text-left"
                            onClick={handleCatToggle}
                        >
                            {curCategory
                                ? curCategory.name.charAt(0).toUpperCase() + curCategory.name.slice(1)
                                : "Category"}
                            <ArrowDown />
                        </button>
                        {catToggle && (
                            <div
                                className={`py-2 absolute bg-gray-100 mt-2 rounded-xl w-full ${
                                    categories.length > 8 && "h-[180px] overflow-x-hidden overflow-y-scroll z-50"
                                }`}
                            >
                                <Link
                                    href="/"
                                    className="block text-left text-sm px-3 leading-5 hover:bg-blue-500 focus:bg-blue-500 hover:text-white focus:text-white"
                                >
                                    All
                                </Link>
                                {categories.map((category) => (
                                    <Link
                                        key={category.id}
                                        href={`/category/${category.slug}`}
                                        className={`block text-left text-sm px-3 leading-5 hover:bg-blue-500 focus:bg-blue-500 hover:text-white focus:text-white ${
                                            curCategory
                                                ? category.id === curCategory.id && "bg-blue-500 text-white"
                                                : ""
                                        }`}
                                    >
                                        {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
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
