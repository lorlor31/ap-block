import { useBlockProps, RichText } from '@wordpress/block-editor';

// export default function save({ attributes }) {
//     const { content } = attributes;

export default function save(props) {
	//JS pour le bloc en statique
    // const {
	// 	attributes: { content },
	// } = props;
    // const slogan = 'Au Delà des Standards, Parce Que \: Pensé, Dessiné et Fabriqué en France  Armoire Garanti 10 ANS conçue pour un usage intensif  Rideaux testés et certifiés pour un minimum de 40,000 cycles ouverture / fermeture  Certificat : NF EN 14073-2 / NF EN 14073-3 / NF EN 14074 / NF D 62-041 / NF Office Excellence Certifié / Certification GS  Qualité reconnue par l’institut technologique FCBA' ;
    // // content = props.attributes.content || slogan ;
    // console.log('content',content);
	// console.log('slogan',slogan);
    // return (
	// 		<div  {...useBlockProps.save({// permet de rajouter la class custom 
    //             className: 'hover-text-block',
    //         })}>
	// 			<RichText.Content
	// 				{...useBlockProps.save()} 
	// 				tagName="p"
	// 				value={content || slogan}
                    
	// 			/>
	// 		</div>
	// 	); 

	//JS pour le bloc dynamique, donc géré par PHP, on renvoie rien, ça sera de toute manière écrasé par le rendu PHP
	// return null ;// Rendu côté serveur uniquement.
		return (<p>coucoiufzgrh</p>); 
}
