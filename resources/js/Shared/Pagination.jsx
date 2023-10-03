import React from "react"
import { Link } from "@inertiajs/react"

export default function Pagination({ links }) {
    function getClassName(active) {
        if (active) {
            return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary bg-blue-700 text-white"
        } else {
            return "mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-primary focus:text-primary"
        }
    }

    return (
        <div className="flex">
            <div className="flex flex-wrap">
                {links.map((link, key) =>
                    link.url === null ? (
                        <div key={key} className="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded">
                            {link.label}
                        </div>
                    ) : (
                        <Link key={key} className={getClassName(link.active)} href={link.url}>
                            {link.label}
                        </Link>
                    )
                )}
            </div>
        </div>
    )
}
