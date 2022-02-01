import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom"

function FormModal({children, wrapperId = "modal-wrapper"}) {

    const [wrapperElement, setWrapperElement] = useState(null)
    
    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId)
        let systemCreated = false

        if (!element) {
            systemCreated = true
            appendWrapper(wrapperId)
        }
        setWrapperElement(element)

        return () => {
            if (systemCreated && element) {
                element.parentNode.removeChild(element)
            }
        }
    }, [wrapperId])

    if (wrapperElement === null) return null

    return createPortal(children, document.getElementById(wrapperId));
}

function appendWrapper(wrapperId) {
    const wrapperElement = document.createElement("div")
    wrapperElement.setAttribute("id", wrapperId)
    document.appendChild(wrapperElement)
    return wrapperElement
}

export default FormModal;
