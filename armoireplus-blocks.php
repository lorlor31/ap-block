<?php
/**
 * Plugin Name:       Armoireplus Blocks
 * Description:       Mes blocs maison pour Armoire Plus
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       armoireplus-blocks
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_armoireplus_blocks_block_init() {
	register_block_type( __DIR__ . '/build/slogan' );
    register_block_type( __DIR__ . '/build/editable' );

	// require_once __DIR__ . '/src/slogan/render.php';
	// register_block_type_from_metadata(
    //     __DIR__ . '/src/slogan/', //chemin vers block.json
    //     array(
    //         'render_callback' => 'render_mon_bloc_custom', // Nom de la fonction de rendu ds render.php
    //     )
    // );
}
add_action( 'init', 'create_block_armoireplus_blocks_block_init' );
