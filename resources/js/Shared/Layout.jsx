import FlashMessage from "@/Shared/FlashMessage.jsx"
import Footer from "@/Pages/partials/Footer.jsx"
import Nav from "@/Shared/Nav.jsx"

import { usePage } from "@inertiajs/react"
import { TiTick } from "react-icons/ti"
import React from "react"

export default function Layout({ children }) {
    const { flash } = usePage().props
    console.log(flash)
    // const flash = {
    //     message: "User has created successfully"
    // }
    //TODO When comes back to the page with <- history button flash message recreated
    return (
        <section className="px-6 py-8">
            <Nav />
            <main>{children}</main>
            <Footer />
            {flash.message && (
                <FlashMessage>
                    <p>
                        <TiTick />
                    </p>
                    <p>{flash.message}</p>
                </FlashMessage>
            )}
        </section>
    )
}
