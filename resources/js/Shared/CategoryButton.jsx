import { Link } from "@inertiajs/react"
import React from "react"

export default function CategoryButton({ category }) {
    return (
        <Link
            href={`/category/${category.slug}`}
            className="px-3 py-1 border border-blue-300 rounded-full text-blue-300 text-xs uppercase font-semibold"
            style={{ fontSize: "10px" }}
        >
            {category.name}
        </Link>
    )
}
