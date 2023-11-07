import React from "react"
import { Link } from "@inertiajs/react"

export default function DropDownLink({ children, href, isActive, method = "get", as = "button" }) {
    return (
        <Link
            href={href}
            method={method}
            as={as}
            className={`block text-left text-sm px-3 py-1 w-full leading-5 hover:bg-blue-500 focus:bg-blue-500 hover:text-white focus:text-white ${
                isActive ? "bg-blue-500 text-white" : ""
            }`}
        >
            {children}
        </Link>
    )
}
