import { getCapitalizeStr } from "@/helper/utils.js"
import useClickAway from "@/hooks/useClickAway.js"

import React from "react"
import DropDownTrigger from "@/Shared/DropDownTrigger.jsx"
import { Link } from "@inertiajs/react"

export default function DropDown({ items, curItem, triggerName }) {
    const { ref, toggle, setToggle } = useClickAway()

    function handleCatToggle() {
        setToggle((prev) => !prev)
    }

    return (
        <div>
            {/*Trigger*/}
            <DropDownTrigger triggerRef={ref} curItem={curItem} onToggle={handleCatToggle}>
                {triggerName}
            </DropDownTrigger>

            {/*Links*/}
            {toggle && (
                <div
                    className={`py-2 absolute bg-gray-100 mt-2 rounded-xl w-full ${
                        items.length > 8 && "h-[180px] overflow-x-hidden overflow-y-scroll z-50"
                    }`}
                >
                    <Link
                        href="/"
                        className="block text-left text-sm px-3 leading-5 hover:bg-blue-500 focus:bg-blue-500 hover:text-white focus:text-white"
                    >
                        All
                    </Link>
                    {items.map((item) => (
                        <Link
                            key={item.id}
                            href={`/category/${item.slug}`}
                            className={`block text-left text-sm px-3 leading-5 hover:bg-blue-500 focus:bg-blue-500 hover:text-white focus:text-white ${
                                curItem ? item.id === curItem.id && "bg-blue-500 text-white" : ""
                            }`}
                        >
                            {getCapitalizeStr(item.name)}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}
