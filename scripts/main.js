import copyOutputText from "./copyOutputText.js";
import { default as encryptorAction } from "./encryptorAction.js"
import formatPasteElement from "./formatPasteElement.js";


document.getElementById('inputTextEncryptButton').addEventListener('click', () => encryptorAction('encryptor'));
document.getElementById('inputTextDecryptButton').addEventListener('click', () => encryptorAction('decryptor'));


document.getElementById('inputTextElement').addEventListener('paste', (event) => formatPasteElement(event));

const outputTextElement = document.getElementById('outputTextElement')
document.getElementById('outputTextCopyButton').addEventListener('click', () => copyOutputText(outputTextElement));