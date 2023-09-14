import React from "react"

export default function PostsHeader() {
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
                        defaultValue="category"
                        className="flex-1 appearance-none bg-transparent py-2 pl-3 pr-9 text-sm font-semibold"
                    >
                        <option value="category" disabled>
                            Category
                        </option>
                        <option value="personal">Personal</option>
                        <option value="business">Business</option>
                    </select>

                    <svg
                        className="transform -rotate-90 absolute pointer-events-none"
                        style={{ right: "12px" }}
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                    >
                        <g fill="none" fillRule="evenodd">
                            <path stroke="#000" strokeOpacity=".012" strokeWidth=".5" d="M21 1v20.16H.84V1z"></path>
                            <path
                                fill="#222"
                                d="M13.854 7.224l-3.847 3.856 3.847 3.856-1.184 1.184-5.04-5.04 5.04-5.04z"
                            ></path>
                        </g>
                    </svg>
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

                    <svg
                        className="transform -rotate-90 absolute pointer-events-none"
                        style={{ right: "12px" }}
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                    >
                        <g fill="none" fillRule="evenodd">
                            <path stroke="#000" strokeOpacity=".012" strokeWidth=".5" d="M21 1v20.16H.84V1z"></path>
                            <path
                                fill="#222"
                                d="M13.854 7.224l-3.847 3.856 3.847 3.856-1.184 1.184-5.04-5.04 5.04-5.04z"
                            ></path>
                        </g>
                    </svg>
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
