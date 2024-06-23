/**
 * Show and hide output elements
 * mode: show - hide
 */

export default function (mode, elements = []) {
    if (mode === 'show')
        elements.forEach(element => {
            element.classList.remove("noDisplay");
        })
    if (mode === 'hide')
        elements.forEach(element => {
            element.classList.add("noDisplay");
        })
}