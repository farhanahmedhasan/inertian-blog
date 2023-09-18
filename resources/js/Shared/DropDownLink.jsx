import React from "react"
import { Link } from "@inertiajs/react"

export default function DropDownLink({ children, href, isActive }) {
    return (
        <Link
            href={href}
            className={`block text-left text-sm px-3 leading-5 hover:bg-blue-500 focus:bg-blue-500 hover:text-white focus:text-white ${
                isActive ? "bg-blue-500 text-white" : ""
            }`}
        >
            {children}
        </Link>
    )
}
