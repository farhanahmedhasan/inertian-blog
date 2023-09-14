import Footer from "@/Shared/Footer.jsx"
import Nav from "@/Shared/Nav.jsx"

import React from "react"

export default function Layout({ children }) {
    return (
        <section className="px-6 py-8">
            <Nav />
            <main>{children}</main>
            <Footer />
        </section>
    )
}
