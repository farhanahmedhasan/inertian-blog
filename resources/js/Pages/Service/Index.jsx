import ServiceLayout from "@/Shared/ServiceLayout.jsx"
import Layout from "@/Shared/Layout.jsx"
import { Head } from "@inertiajs/react"
import React from "react"

export default function Index() {
    return (
        <>
            <Head>
                <title>Service</title>
            </Head>
            <h1 className="text-3xl font-bold">I am the service page</h1>
        </>
    )
}

Index.layout = (page) => (
    <Layout>
        <ServiceLayout children={page} />
    </Layout>
)
