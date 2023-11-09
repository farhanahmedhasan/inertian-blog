import { Link, usePage } from "@inertiajs/react"
import React from "react"

import DropDownTrigger from "@/Shared/DropDownTrigger.jsx"
import DropDownLink from "@/Shared/DropDownLink.jsx"
import useClickAway from "@/hooks/useClickAway.js"

export default function Nav() {
    const { user, isAdmin } = usePage().props
    const { url } = usePage()
    const { ref, toggle, setToggle } = useClickAway()

    function handleSettingToggle() {
        setToggle((prev) => !prev)
    }
    return (
        <nav className="md:flex md:justify-between md:items-center">
            <div>
                <Link href="/" as="button">
                    <img src="/images/logo.svg" alt="Laracasts Logo" width="165" height="16" />
                </Link>
            </div>

            <div className="mt-8 md:mt-0 flex items-center">
                {user ? (
                    <div className="relative">
                        <DropDownTrigger className="flex-1" triggerRef={ref} onToggle={handleSettingToggle}>
                            <span>Welcome back, {user.name.split(" ")[0]}</span>
                        </DropDownTrigger>

                        {toggle && (
                            <div className="absolute top-10 w-full bg-gray-100 py-3 flex flex-col items-start rounded-xl">
                                {isAdmin && (
                                    <DropDownLink href="/admin/posts" isActive={url.startsWith("/admin/posts")}>
                                        Dashboard
                                    </DropDownLink>
                                )}

                                <DropDownLink method="post" href="/logout">
                                    Logout
                                </DropDownLink>
                            </div>
                        )}
                    </div>
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
                    href="#newsletter"
                    className="bg-blue-500 ml-3 rounded-full text-xs font-semibold text-white uppercase py-3 px-5 inline-block"
                >
                    Subscribe for Updates
                </a>
            </div>
        </nav>
    )
}
