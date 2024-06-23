/**
 * Main encryptor and decryptor function
 * mode: encrypt - decrypt
 * text: raw string to transform
 */

export default function (mode, text) {
    const encryptorDictionary = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    }

    try {
        const formatedArray = []

        for (let x = 0; x < text.length; x++) {
            switch (text[x]) {
                case 'a':
                case 'e':
                case 'i':
                case 'o':
                case 'u':
                    if (mode === 'encrypt') {
                        formatedArray.push(encryptorDictionary[`${text[x]}`])
                    } else {
                        formatedArray.push(text[x]);
                        x += encryptorDictionary[`${text[x]}`].length - text[x].length;
                    }
                    break;
                default:
                    formatedArray.push(text[x])
                    break;
            }

        }
        return formatedArray.join('')
    } catch (error) {
        return ''
    }
}