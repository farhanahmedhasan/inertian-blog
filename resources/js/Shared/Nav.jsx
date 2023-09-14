import React from "react"

export default function Nav() {
    return (
        <nav className="md:flex md:justify-between md:items-center">
            <div>
                <a href="/">
                    <img src="/images/logo.svg" alt="Laracasts Logo" width="165" height="16" />
                </a>
            </div>

            <div className="mt-8 md:mt-0">
                <a href="/" className="text-xs font-bold uppercase">
                    Home Page
                </a>

                <a
                    href="#"
                    className="bg-blue-500 ml-3 rounded-full text-xs font-semibold text-white uppercase py-3 px-5"
                >
                    Subscribe for Updates
                </a>
            </div>
        </nav>
    )
}
