/**
 * format copy and pate of selected elements
 * mode: encryptor - decryptor
 */

export default function (event) {
    const targetElement = event.target

    event.preventDefault();
    const clipboardData = event.clipboardData || window.clipboardData;
    const pastedText = clipboardData.getData('text/plain');

    return targetElement.innerText += pastedText;


}