/**
 * Encrypt Action encrypt decrypt
 * mode: encryptor - decryptor
 */

import applyWarningBuzzEffect from "./utils/applyWarningBuzzEffect.js";
import mainEncryptor from "./utils/mainEncryptor.js";
import showHideOutputText from "./utils/showHideOutputText.js";
import validateCorrectInput from "./utils/validateCorrectInput.js";

export default function (mode) {
    // console.log('Encrypt Function');
    const rawText = document.getElementById('inputTextElement').innerText
    const warningElement = document.getElementById('inputTextWarningHolder')

    const outputNotFoundImageElement = document.getElementById('outputNotFoundImageElement')
    const outputNotFoundTextContainer = document.getElementById('outputNotFoundTextContainer')


    const outputTextElement = document.getElementById('outputTextElement')
    const outputTextCopyButton = document.getElementById('outputTextCopyButton')


    if (validateCorrectInput(rawText)) {
        const encryptedText = mainEncryptor((mode === 'encryptor' ? 'encrypt' : 'decrypt'), rawText)

        if (encryptedText === '' || encryptedText.length <= 0 || encryptedText.trim().length <= 0) {
            showHideOutputText('hide', [outputTextElement, outputTextCopyButton])
            showHideOutputText('show', [outputNotFoundImageElement, outputNotFoundTextContainer])
        } else {
            showHideOutputText('show', [outputTextElement, outputTextCopyButton])
            showHideOutputText('hide', [outputNotFoundImageElement, outputNotFoundTextContainer])
            outputTextElement.innerText = encryptedText
        }
    } else {
        applyWarningBuzzEffect(warningElement)
    }
}