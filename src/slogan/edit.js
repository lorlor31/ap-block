/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */


// export default function Edit({ attributes, setAttributes }) {
	// const { content } = attributes;

	export default function edit(props) {

	const {
		attributes: { content },
		setAttributes,
	} = props;
	const onChangeContent = (newContent) => {
        setAttributes({ content: newContent });
    };

	const handleMouseClick = () => {
		alert('Texte cliqué !');
		console.log("cliqué côté éditeur");
		// Appelle ici une autre fonction JS si nécessaire
	};

	const slogan = 'Au Delà des Standards, Parce Que \: Pensé, Dessiné et Fabriqué en France  Armoire Garanti 10 ANS conçue pour un usage intensif  Rideaux testés et certifiés pour un minimum de 40,000 cycles ouverture / fermeture  Certificat : NF EN 14073-2 / NF EN 14073-3 / NF EN 14074 / NF D 62-041 / NF Office Excellence Certifié / Certification GS  Qualité reconnue par l’institut technologique FCBA' ;
	// content = props.attributes.content || slogan ;
	console.log('content',content);
	console.log('slogan',slogan);
	
	return (
		<div
                onClick={handleMouseClick}
                style={{ padding: '10px', border: '1px solid #ccc' }}
            >
			<RichText  { ...useBlockProps() }
				tagName="p" // Balise HTML utilisée pour le texte (p, h1, div, etc.)
				// value='Au Delà des Standards, Parce Que \: Pensé, Dessiné et Fabriqué en France  Armoire Garanti 10 ANS conçue pour un usage intensif  Rideaux testés et certifiés pour un minimum de 40,000 cycles ouverture / fermeture  Certificat : NF EN 14073-2 / NF EN 14073-3 / NF EN 14074 / NF D 62-041 / NF Office Excellence Certifié / Certification GS  Qualité reconnue par l’institut technologique FCBA'
				value = {content|| slogan}
				onChange={onChangeContent} // Fonction appelée quand le contenu change
				placeholder={ __( 'Au Delà des Standards, Parce Que \: Pensé, Dessiné et Fabriqué en France  Armoire Garanti 10 ANS conçue pour un usage intensif  Rideaux testés et certifiés pour un minimum de 40,000 cycles ouverture / fermeture  Certificat : NF EN 14073-2 / NF EN 14073-3 / NF EN 14074 / NF D 62-041 / NF Office Excellence Certifié / Certification GS  Qualité reconnue par l’institut technologique FCBA', 'armoireplus-blocks' ) }
			/>
			 </div>
				);
}
