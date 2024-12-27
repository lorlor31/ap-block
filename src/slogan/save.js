import { useBlockProps, RichText } from '@wordpress/block-editor';

// export default function save({ attributes }) {
//     const { content } = attributes;

export default function save(props) {
    const {
		attributes: { content },
	} = props;
    return <RichText.Content { ...useBlockProps.save() }
    tagName="p" 
    value={content} 
    />;
}
