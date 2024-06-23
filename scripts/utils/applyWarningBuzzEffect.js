/**
 * Apply buzz effect to parentHolder with img and p
 * parentHolder - holder of img and p tags
 */

export default function (parentHolder) {

    const warningImage = parentHolder.querySelector('img');
    const warningText = parentHolder.querySelector('p');


    parentHolder.classList.add('buzz-effect');
    warningImage.classList.add('red-effect');
    warningText.classList.add('red-effect');


    setTimeout(() => {
        parentHolder.classList.remove('buzz-effect');
        warningImage.classList.remove('red-effect');
        warningText.classList.remove('red-effect');
    }, 700);
}