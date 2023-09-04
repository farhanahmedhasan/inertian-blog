import { Link } from "@inertiajs/react"
import React from "react"

export default function Nav() {
    return (
        <nav className="flex">
            <ul className="flex space-x-4">
                <li>
                    <Link href="/">Home</Link>
                </li>

                <li>
                    <Link href="/service">Service</Link>
                </li>

                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}
