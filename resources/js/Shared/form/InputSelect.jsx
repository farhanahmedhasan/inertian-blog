import ErrorMessage from "@/Shared/ErrorMessage.jsx"
import { getCapitalizeStr } from "@/helper/utils.js"
import Label from "@/Shared/form/Label.jsx"

import React from "react"

export default function InputSelect({ options, name, label, labelClass, value, errorMessage, handleChange }) {
    const baseWrapperClass = "flex items-center col-span-1"
    const baseSelectClass = "ml-6"

    return (
        <div className={`${baseWrapperClass}`}>
            <Label name={name} labelClass={labelClass}>
                {label}
            </Label>

            <select className={`${baseSelectClass}`} name={name} id={name} value={value} onChange={handleChange}>
                {options.map((option) => (
                    <option key={option.id} value={option.id}>
                        {getCapitalizeStr(option.name)}
                    </option>
                ))}
            </select>

            <ErrorMessage message={errorMessage} />
        </div>
    )
}
