import Footer from "@/Shared/Footer.jsx"
import Nav from "@/Shared/Nav.jsx"
import React from "react"
import { Head } from "@inertiajs/react"

export default function Layout({ children }) {
    return (
        <>
            <Nav />
            <Head>
                <meta head-key="description" name="description" content="This is default meta description" />
            </Head>
            <main>{children}</main>
            <Footer />
        </>
    )
}
