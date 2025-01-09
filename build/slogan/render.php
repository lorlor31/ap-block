<?php
// Simple log pour vérifier que render.php est exécuté

error_log("fctrenduPHP");
// if (!is_product()) {
//     echo '<div class="hover-text-block">Votre produit a le numéro c est pas page produit</div>'; // Si ce n'est pas une page produit, ne rien afficher.
// }
// global $product;
// if (!$product || !is_a($product, 'WC_Product')) {
//     echo '<div class="hover-text-block">Votre produit a le numéro c est pas produit</div>';
// }
// // Récupérez l'ID du produit.
// else {
//     $product_id = $product->get_id();
//     error_log('$prodifd est ' . $product_id);    // Retournez le contenu HTML du bloc.
//     echo sprintf(
//         '<div class="hover-text-block">Votre produit a le numéro %d</div>',
//         esc_html($product_id)
//     );
// }


global $post;

$short_description = apply_filters( 'woocommerce_short_description', $post->post_excerpt );

if ( ! $short_description ) {
	return;
}
$split_point = strpos($short_description, '<b>Parce Que</b></span>') + strlen('<b>Parce Que</b></span>');
$short_desc_part1 = substr($short_description, 0, $split_point);
$short_desc_part2 = substr($short_description, $split_point);
echo '<div class="product-short-desc-container">' ;
echo sprintf(
    '<div class="product-short-desc-part1">%s :</div>
    <div class="icon-show-more"><i> IconeADefinir</i></div>',
    wp_kses_post($short_desc_part1)
);
echo sprintf(
    '<div class="product-short-desc-part2 invisible">%s</div>',
    wp_kses_post($short_desc_part2)
);

echo '</div>' ;
