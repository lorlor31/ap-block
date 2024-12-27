/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import edit from './edit';
import metadata from './block.json';
import save from './save';

const AP = (<svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
>
    <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 4 L8 20 L16 20 Z"></path> 
        <path d="M10 13 H14"></path> 
        <path d="M20 10 V14"></path> 
        <path d="M18 12 H22"></path> 
    </g>
</svg>) ;

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {// nom du block récupéré ds les meta déclarées dans block.json
	/**
	 * @see ./edit.js
	 */
	edit, // si la fct dans edit.js s'appelle edit on peut raccourcir au lieu d'écrire edit :nomDelaFct
	icon : AP,
    save
} );
