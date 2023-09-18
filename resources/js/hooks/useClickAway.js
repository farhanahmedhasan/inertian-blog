import { useEffect, useRef, useState } from "react"

export default function useClickAway() {
    const [toggle, setToggle] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        function onClickOutSide(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setToggle(false)
            }
        }
        document.addEventListener("click", onClickOutSide)

        return () => document.removeEventListener("click", onClickOutSide)
    }, [])

    return { ref, toggle, setToggle }
}
