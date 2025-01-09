/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */
console.log( 'Hello World! (from create-block-armoireplus-blocks block)' );
/* eslint-enable no-console */

document.addEventListener('DOMContentLoaded', () => {
    const productShortDescPart1 = document.querySelector('.product-short-desc-part1');
    const productShortDescPart2 = document.querySelector('.product-short-desc-part2');
    productShortDescPart1.addEventListener('mouseenter', () => {
        productShortDescPart2.classList.remove('invisible') ;
    });
    productShortDescPart1.addEventListener('mouseleave', () => {
        productShortDescPart2.classList.add('invisible') ;
    });
});
