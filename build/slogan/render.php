<?php
/**
 * Fonction de rendu côté serveur pour le bloc.
 *
 * @param array $attributes Les attributs du bloc.
 * @return string Le HTML généré.
 */

    // Récupérer l'attribut 'content'
    $content = isset( $attributes['content'] ) ? $attributes['content'] : '';
	laure_log('$attributes est') ;
laure_log($attributes) ;


    // Retourner le HTML
    return sprintf(
        '<p class="mon-bloc-custom">%s coucou ca marche </p>',
        esc_html('$content') // Échappement pour sécuriser le contenu
    );

