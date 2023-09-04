import Footer from "@/Shared/Footer.jsx"
import Nav from "@/Shared/Nav.jsx"
import React from "react"

export default function ServiceLayout({ children }) {
    return (
        <>
            <h1>From service layout</h1>
            <main>
                <iframe
                    className="mt-6"
                    width="100%"
                    frameBorder="no"
                    scrolling="no"
                    seamless
                    src="https://player.simplecast.com/08381222-a27d-497b-813a-e66c04b6f50f?dark=false"
                ></iframe>
                {children}
            </main>
        </>
    )
}
