/**
 * copy output text
 * outputElementText - element to copy content to 
 */

export default function (outputElementText) {

    const rawText = getPlainText(outputElementText);

    // console.log(rawText);
    navigator.clipboard.writeText(rawText)
        .then(() => {
            // console.log('Raw text copied successfully');

            alert('Texto copiado exitosamente!');
        })
        .catch(err => {
            console.error('Failed to copy raw text', err);

            alert('Error al copiar el texto, intente nuevamente.');
        });

    function getPlainText(element) {
        const clonedElement = element.cloneNode(true);

        const allElements = clonedElement.querySelectorAll('*');
        allElements.forEach(el => {
            el.removeAttribute('class');
            el.removeAttribute('style');
        });

        return clonedElement.innerText.trim();
    }
}