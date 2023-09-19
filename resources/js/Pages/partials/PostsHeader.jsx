import DropDown from "@/Shared/DropDown.jsx"

import React from "react"

// const fruits = [
//     {
//         id: 1,
//         name: "Apple",
//         slug: "apple"
//     },
//     {
//         id: 2,
//         name: "Guava",
//         slug: "guava"
//     },
//     {
//         id: 3,
//         name: "Jack",
//         slug: "jack"
//     },
//     {
//         id: 4,
//         name: "Mango",
//         slug: "mango"
//     }
// ]
// const curFruit = undefined

export default function PostsHeader({ categories, curCategory }) {
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
                    />
                </div>

                {/*Other Filters Example Using Same Component*/}
                {/*<div className="relative lg:inline-flex items-center bg-gray-100 rounded-xl">*/}
                {/*<DropDown curItem={curFruit} items={fruits} triggerName="Fruits" itemVisitPath="fruits" />*/}
                {/*</div>*/}

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
