import React from "react"
import { createInertiaApp } from "@inertiajs/react"
import { createRoot } from "react-dom/client"

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob("./src/Pages/**/*.jsx", { eager: true })
        return pages[`./src/Pages/${name}.jsx`]
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <React.StrictMode>
                <App {...props} />
            </React.StrictMode>
        )
    }
})
