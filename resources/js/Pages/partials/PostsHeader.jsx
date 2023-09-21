import DropDown from "@/Shared/DropDown.jsx"

import React, { useState } from "react"
import { router } from "@inertiajs/react"

export default function PostsHeader({ categories, curCategory, searchData }) {
    const [searchQuery, setSearchQuery] = useState(searchData || "")

    function handleSearch(e) {
        setSearchQuery(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        router.get(
            `?search=${searchQuery}`,
            {},
            {
                preserveState: true
            }
        )
    }

    return (
        <header className="max-w-xl mx-auto mt-20 text-center">
            <h1 className="text-4xl">
                Latest <span className="text-blue-500">Laravel From Scratch</span> News
            </h1>

            <div className="space-y-2 lg:space-y-0 lg:space-x-4 mt-6">
                {/*Category*/}
                <div className="relative lg:inline-flex items-center bg-gray-100 rounded-xl">
                    <DropDown
                        curItem={curCategory}
                        items={categories}
                        triggerName="Category"
                        itemVisitPath="category"
                        allRef={searchQuery ? `/?search=${searchQuery}` : "/"}
                        searchData={searchQuery}
                    />
                </div>

                {/*Other Filters Example Using Same Component*/}
                {/*<div className="relative lg:inline-flex items-center bg-gray-100 rounded-xl">*/}
                {/*<DropDown curItem={curFruit} items={fruits} triggerName="Fruits" itemVisitPath="fruits" />*/}
                {/*</div>*/}

                {/*Search*/}
                <div className="relative flex lg:inline-flex items-center bg-gray-100 rounded-xl px-3 py-2">
                    <form className="mb-0 w-full" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="search"
                            value={searchQuery}
                            onChange={handleSearch}
                            placeholder="Find something"
                            className="bg-transparent placeholder-black font-semibold text-sm w-full"
                        />
                    </form>
                </div>
            </div>
        </header>
    )
}
