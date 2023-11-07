import { Link, usePage } from "@inertiajs/react"
import React from "react"

export default function Settings({ children, header }) {
    const { url } = usePage()
    return (
        <section className="px-10 mt-10 mx-auto grid">
            <h1 className="font-bold text-left capitalize text-2xl border-b pb-2 mb-10">{header}</h1>

            <span className="mb-6 font-semibold">Links</span>
            <div className="flex">
                <aside className="w-48 mr-6">
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="/admin/dashboard"
                                className={url.startsWith("/admin/dashboard") ? "text-blue-500" : ""}
                            >
                                Dashboard
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/admin/posts/create"
                                className={url.startsWith("/admin/posts") ? "text-blue-500" : ""}
                            >
                                Create New post
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/admin/category"
                                className={url.startsWith("/admin/dashboard") ? "text-blue-500" : ""}
                            >
                                Category Actions
                            </Link>
                        </li>
                    </ul>
                </aside>
                <main className="m-6 flex-1">{children}</main>
            </div>
        </section>
    )
}
