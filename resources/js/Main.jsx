import { createInertiaApp } from "@inertiajs/react"
import { createRoot } from "react-dom/client"
import Layout from "@/Shared/Layout.jsx"
import React from "react"

createInertiaApp({
    resolve: async (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: false })
        let page = await pages[`./Pages/${name}.jsx`]()

        if (name.startsWith("Auth/")) {
            page.default.layout = undefined
        } else {
            page.default.layout = page.default.layout || ((page) => <Layout children={page} />)
        }

        return page
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <React.StrictMode>
                <App {...props} />
            </React.StrictMode>
        )
    }
})
