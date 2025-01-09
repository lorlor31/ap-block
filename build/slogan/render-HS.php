<?php
/**
 * Fonction de rendu côté serveur pour le bloc.
 *
 * @param array $attributes Les attributs du bloc.
 * @return string Le HTML généré.
 */

 // essai du bloc editable je suppose ?
//     // Récupérer l'attribut 'content'
//     $content = isset( $attributes['content'] ) ? $attributes['content'] : '';
// 	laure_log('$attributes est') ;
// laure_log($attributes) ;


//     // Retourner le HTML
//     return sprintf(
//         '<p class="mon-bloc-custom">%s coucou ca marche </p>',
//         esc_html('$content') // Échappement pour sécuriser le contenu
//     );
// if (!function_exists('render_product_id_block')) {
    
//     function render_product_id_block($attributes='', $content='') {
//         error_log("fctrenduPHP");
//         if (!is_product()) {
//              return '<div class="hover-text-block">Votre produit a le numéro c est pas page produit</div>' ; // Si ce n'est pas une page produit, ne rien afficher.
//         }

//         global $product;
//         if (!$product || !is_a($product, 'WC_Product')) {
//              return '<div class="hover-text-block">Votre produit a le numéro c est pas produit</div>';
//         }

//         Récupérez l'ID du produit.
//         $product_id = $product->get_id();

//         Retournez le contenu HTML du bloc.
//         return sprintf(
//             '<div class="hover-text-block">Votre produit a le numéro %d</div>',
//             esc_html($product_id)
//         );
//     }
// }

// register_block_type(__DIR__, array(
//     'render_callback' => 'render_product_id_block',
// ));
// add_action('init', function () {
//     error_log('register_block_type initialized');
//     register_block_type('armoireplus-blocks/slogan', array(
//         'render_callback' => function ($attributes='', $content='') {
//             error_log('render_callback triggered');
//             return '<div>Callback minimaliste pour debug</div>';
//         },
//     ));
// });

// Log pour vérifier que render.php est exécuté
error_log("renduPHP");

// Enregistre une fonction de rendu pour le bloc
if (!function_exists('armoireplus_render_slogan_block')){
function armoireplus_render_slogan_block($attributes, $content) {
    error_log('render_callback triggered');
    return '<div>Callback minimaliste pour debug</div>';
}
}
// // Enregistre le bloc avec la fonction de rendu
// add_action('init', function () {
//     register_block_type(__DIR__, array(
//         'render_callback' => 'armoireplus_render_slogan_block', // Associe directement la fonction de rendu
//     ));
// });
