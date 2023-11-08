import Settings from "@/Shared/Settings.jsx"

import React from "react"
import { Link } from "@inertiajs/react"

export default function Index({ posts }) {
    const datas = posts.data
    return (
        <Settings header="Show all the posts">
            <div className="flex flex-col max-w-4xl mx-auto">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {datas.map((post) => {
                                        return (
                                            <tr key={post.id}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900">
                                                        <Link href={`/post/${post.slug}`}>
                                                            {post.title.slice(0, 48) + "..."}
                                                        </Link>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-500 text-white">
                                                        Published
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <div className="flex gap-x-8">
                                                        <Link
                                                            href={`/admin/posts/${post.slug}/edit`}
                                                            className="text-blue-500 hover:text-indigo-600"
                                                            as="button"
                                                        >
                                                            Edit
                                                        </Link>
                                                        <Link
                                                            href={`/admin/posts/${post.slug}`}
                                                            className="text-red-600 hover:text-indigo-900"
                                                            as="button"
                                                            method="delete"
                                                        >
                                                            Delete
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Settings>
    )
}
