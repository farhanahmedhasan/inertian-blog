import ErrorMessage from "@/Shared/ErrorMessage.jsx"
import Label from "@/Shared/form/Label.jsx"

import React from "react"

export default function InputTextArea({
    name,
    autoComplete = "off",
    rows = 3,
    value,
    textAreaClass,
    placeholder,
    label,
    handleChange,
    errorMessage
}) {
    const baseClass = "w-full border border-gray-400 p-2"

    return (
        <div className="mb-6">
            <Label name={name}>{label}</Label>

            <textarea
                className={`${baseClass} ${textAreaClass}`}
                rows={rows}
                name={name}
                id={name}
                autoComplete={autoComplete}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
            ></textarea>
            <ErrorMessage message={errorMessage} />
        </div>
    )
}
