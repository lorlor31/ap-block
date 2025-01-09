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
// function create_block_armoireplus_blocks_block_init() {
// 	register_block_type( __DIR__ . '/build/slogan' );
//     // register_block_type( __DIR__ . '/build/editable' );
//     register_block_type( __DIR__ . '/build/editable-brand' );
//     register_block_type( __DIR__ . '/build/editable', array(
//         'editor_script' => 'my-block-a-js',
//         'style' => 'my-block-a-css',
//         'enqueue_assets' => function() {
//             // Charger les scripts et styles uniquement si le bloc est utilisé
//             wp_enqueue_script('my-block-a-js', plugin_dir_url(__FILE__) . 'build/block-a.js', array('wp-blocks', 'wp-element'), '1.0.0', true);
//             wp_enqueue_style('my-block-a-css', plugin_dir_url(__FILE__) . 'build/block-a.css', array(), '1.0.0');
//         },
//     ));



function create_block_armoireplus_blocks_block_init() {
    // Bloc 1 : Slogan
    register_block_type(__DIR__ . '/build/slogan', array(
        'enqueue_assets' => function() {
            // Charger les assets uniquement si le bloc est utilisé
            wp_enqueue_script(
                'slogan-block-js',
                plugin_dir_url(__FILE__) . 'build/slogan/index.js',
                array('wp-blocks', 'wp-element'),
                '1.0.0',
                true
            );
            wp_enqueue_style(
                'slogan-block-css',
                plugin_dir_url(__FILE__) . 'build/slogan/style.css',
                array(),
                '1.0.0'
            );
        },
        // 'render_callback' => 'render_slogan'// pas besoins pouisque déclaré ds block.json

    ));

    // Bloc 4 : product-short-desc
    register_block_type(__DIR__ . '/build/product-short-desc', array(
        'enqueue_assets' => function() {
            wp_enqueue_script(
                'product-short-desc-block-js',
                plugin_dir_url(__FILE__) . 'build/product-short-desc/index.js',
                array('wp-blocks', 'wp-element'),
                '1.0.0',
                true
            );
            wp_enqueue_style(
                'product-short-desc-block-css',
                plugin_dir_url(__FILE__) . 'build/product-short-desc/style.css',
                array(),
                '1.0.0'
            );
        },
    ));
    // Bloc 2 : Editable
    register_block_type(__DIR__ . '/build/editable', array(
        'enqueue_assets' => function() {
            wp_enqueue_script(
                'editable-block-js',
                plugin_dir_url(__FILE__) . 'build/editable/index.js',
                array('wp-blocks', 'wp-element'),
                '1.0.0',
                true
            );
            wp_enqueue_style(
                'editable-block-css',
                plugin_dir_url(__FILE__) . 'build/editable/style.css',
                array(),
                '1.0.0'
            );
        },
    ));

    // Bloc 3 : Editable Brand
    register_block_type(__DIR__ . '/build/editable-brand', array(
        'enqueue_assets' => function() {
            wp_enqueue_script(
                'editable-brand-block-js',
                plugin_dir_url(__FILE__) . 'build/editable-brand/index.js',
                array('wp-blocks', 'wp-element'),
                '1.0.0',
                true
            );
            wp_enqueue_style(
                'editable-brand-block-css',
                plugin_dir_url(__FILE__) . 'build/editable-brand/style.css',
                array(),
                '1.0.0'
            );
        },
    ));
}
add_action('init', 'create_block_armoireplus_blocks_block_init');



	// require_once __DIR__ . '/src/slogan/render.php';
	// register_block_type_from_metadata(
    //     __DIR__ . '/src/slogan/', //chemin vers block.json
    //     array(
    //         'render_callback' => 'render_mon_bloc_custom', // Nom de la fonction de rendu ds render.php
    //     )
    // );