import DropDownTrigger from "@/Shared/DropDownTrigger.jsx"
import { getCapitalizeStr } from "@/helper/utils.js"
import DropDownLink from "@/Shared/DropDownLink.jsx"
import ArrowDown from "@/asstes/svgs/ArrowDown.jsx"
import useClickAway from "@/hooks/useClickAway.js"

import React from "react"

export default function DropDown({ items, curItem, triggerName, itemVisitPath, allRef, searchData }) {
    const { ref, toggle, setToggle } = useClickAway()

    function handleCatToggle() {
        setToggle((prev) => !prev)
    }

    return (
        <div>
            {/*Trigger*/}
            <DropDownTrigger triggerRef={ref} curItem={curItem} onToggle={handleCatToggle}>
                {curItem ? getCapitalizeStr(curItem.name) : triggerName}
                <ArrowDown classes="absolute pointer-events-none right-[12px]" />
            </DropDownTrigger>

            {/*Links*/}
            {toggle && (
                <div
                    className={`py-2 absolute bg-gray-100 mt-2 rounded-xl w-full ${
                        items.length > 8 && "h-[180px] overflow-x-hidden overflow-y-scroll z-50"
                    }`}
                >
                    <DropDownLink href={allRef} isActive={curItem === null}>
                        All
                    </DropDownLink>
                    {items.map((item) => (
                        <DropDownLink
                            key={item.id}
                            href={`
                                ?${itemVisitPath}=${item.slug}${searchData ? `&search=${searchData}` : ""}
                            `}
                            isActive={curItem ? item.id === curItem.id : false}
                        >
                            {getCapitalizeStr(item.name)}
                        </DropDownLink>
                    ))}
                </div>
            )}
        </div>
    )
}
