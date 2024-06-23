/**
 * Verify input it is correctly specified - No deben ser utilizados letras con acentos ni caracteres especiales
 * text - string to analyze
 */

export default function (text) {
    const regex = /^[a-z \r\n]*$/;

    return regex.test(text)
}