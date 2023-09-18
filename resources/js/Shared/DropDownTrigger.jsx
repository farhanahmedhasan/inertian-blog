import React from "react"

export default function DropDownTrigger({ children, onToggle, triggerRef }) {
    return (
        <button
            type="button"
            className="flex py-2 pl-3 pr-9 text-sm font-semibold w-full lg:w-36 text-left"
            ref={triggerRef}
            onClick={onToggle}
        >
            {children}
        </button>
    )
}
