import React from "react"

export default function Label({ name, labelClass, children }) {
    const baseClass = "block mb-2 font-bold text-sm text-gray-700"
    return (
        <label htmlFor={name} className={`${baseClass} ${labelClass}`}>
            {children}
        </label>
    )
}
