import React, { useEffect, useState } from "react"

export default function FlashMessage({ delay = 2000, progressColor = "green", children }) {
    const [isActive, setIsActive] = useState(true)
    const [progressVal, setProgressVal] = useState(100)

    const baseWrapper = "fixed bottom-6 bg-white py-4 px-8 shadow rounded overflow-hidden"
    const childrenWrapper = " flex gap-4 items-center"
    const baseIconClass = "flex justify-center items-center text-white bg-green-400 h-5 w-5 rounded-full"

    // TODO have to merge classnames accordingly to the children
    // children.map((children, index) => {
    //     return React.cloneElement(children, {
    //         key: index,
    //         className: `${children.props.className} ${baseIconClass}`
    //     })
    // })

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsActive(false)
        }, delay)

        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setProgressVal((prev) => prev - 1)
        }, delay / 100)

        return () => clearInterval(interval)
    }, [])

    return isActive ? (
        <div className={`${baseWrapper}`}>
            <div className={childrenWrapper}>{children}</div>
            <div
                style={{
                    width: `${progressVal}%`,
                    backgroundColor: `${progressColor}`
                }}
                className="absolute bottom-0 left-0 rounded h-1"
            ></div>
        </div>
    ) : null
}
