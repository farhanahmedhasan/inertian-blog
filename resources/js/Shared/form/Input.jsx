import ErrorMessage from "@/Shared/ErrorMessage.jsx"
import Label from "@/Shared/form/Label.jsx"

import React from "react"

export default function Input({
    type = "text",
    name,
    autoComplete = "off",
    wrapperClass,
    value,
    label,
    labelClass,
    inputClass,
    handleChange,
    errorMessage
}) {
    const baseWrapperClass = "mb-6"
    const baseInputClass = "border border-gray-400 p-2 w-full"

    return (
        <div className={`${baseWrapperClass} ${wrapperClass}`}>
            <Label name={name} labelClass={labelClass}>
                {label}
            </Label>
            <input
                className={`${baseInputClass} ${inputClass}`}
                type={type}
                name={name}
                id={name}
                autoComplete={autoComplete}
                value={value}
                onChange={handleChange}
            />
            <ErrorMessage message={errorMessage} />
        </div>
    )
}
