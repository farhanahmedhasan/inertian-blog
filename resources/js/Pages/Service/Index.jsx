import ServiceLayout from "@/Shared/ServiceLayout.jsx"
import React from "react"
import Layout from "@/Shared/Layout.jsx"

export default function Index() {
    return (
        <>
            <h1 className="text-3xl font-bold">I am the service page</h1>
        </>
    )
}

Index.layout = (page) => (
    <Layout>
        <ServiceLayout children={page} />
    </Layout>
)
