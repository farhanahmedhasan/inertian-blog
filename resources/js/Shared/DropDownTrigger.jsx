import ArrowDown from "@/asstes/svgs/ArrowDown.jsx"
import { getCapitalizeStr } from "@/helper/utils.js"

import React from "react"

export default function DropDownTrigger({ children, onToggle, triggerRef, curItem }) {
    return (
        <button
            type="button"
            className="flex py-2 pl-3 pr-9 text-sm font-semibold w-full lg:w-36 text-left"
            ref={triggerRef}
            onClick={onToggle}
        >
            {curItem ? getCapitalizeStr(curItem.name) : children}
            <ArrowDown />
        </button>
    )
}
