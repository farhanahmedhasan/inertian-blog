import React from "react"

export default function DropDownTrigger({ children, className, onToggle, triggerRef }) {
    const baseClass = "flex py-2 pl-3 pr-9 text-sm font-semibold w-full text-left"

    return (
        <button type="button" className={`${baseClass} ${className}`} ref={triggerRef} onClick={onToggle}>
            {children}
        </button>
    )
}
