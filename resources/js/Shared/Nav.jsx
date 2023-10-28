import { Link, usePage } from "@inertiajs/react"
import React from "react"

export default function Nav() {
    const { user } = usePage().props
    return (
        <nav className="md:flex md:justify-between md:items-center">
            <div>
                <a href="/">
                    <img src="/images/logo.svg" alt="Laracasts Logo" width="165" height="16" />
                </a>
            </div>

            <div className="mt-8 md:mt-0">
                {user ? (
                    <>
                        <span>Welcome back, {user.name.split(" ")[0]} </span>
                        <Link
                            className="text-blue-500 text-xs font-semibold uppercase py-3 px-5"
                            href="/logout"
                            method="post"
                            as="button"
                        >
                            Logout
                        </Link>
                    </>
                ) : (
                    <>
                        <Link href="/register" method="get" className="text-xs font-bold uppercase">
                            Register
                        </Link>

                        <Link
                            className="text-blue-500 text-xs font-semibold uppercase py-3 px-5"
                            href="/login"
                            method="get"
                            as="button"
                        >
                            Login
                        </Link>
                    </>
                )}

                <a
                    href="#"
                    className="bg-blue-500 ml-3 rounded-full text-xs font-semibold text-white uppercase py-3 px-5 inline-block"
                >
                    Subscribe for Updates
                </a>
            </div>
        </nav>
    )
}
