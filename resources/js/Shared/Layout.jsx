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
            <main>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/vBpQ1SlfVtU?si=gyLFahGiOHoVPMs3"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
                {children}
            </main>
            <Footer />
        </>
    )
}
