import React from "react"

export default function ErrorMessage({ message, className }) {
    const baseClass = "text-sm text-red-500"
    return <p className={`${baseClass} ${className}`}>{message}</p>
}
