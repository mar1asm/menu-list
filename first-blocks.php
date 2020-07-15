<?php
/**
 * Plugin Name: n-Column menu
 * Description: A menu
 * Version: 1.0.0
 *
 * @package first-blocks
 */

//  Exit if accessed directly.
defined('ABSPATH') || exit;

/**
 * Enqueue front end and editor JavaScript and CSS
 */
function first_blocks_scripts() {
    
    $filterPath = '/dist/filters.js';
    $blockPath = '/dist/block.js';
    $stylePath = '/dist/block.css';
    
    //filters
    wp_enqueue_script(
        'first-blocks-filter-js',
        plugins_url( $filterPath, __FILE__ ),
        [ 'wp-i18n', 'wp-edit-post', 'wp-element', 'wp-editor', 'wp-components', 'wp-data', 'wp-plugins', 'wp-edit-post', 'wp-api' ],
        filemtime( plugin_dir_path(__FILE__) . $filterPath )
    );

    // Enqueue the bundled block JS file
    wp_enqueue_script(
        'first-blocks-block-js',
        plugins_url( $blockPath, __FILE__ ),
        [ 'wp-i18n', 'wp-edit-post', 'wp-element', 'wp-editor', 'wp-components', 'wp-data', 'wp-plugins', 'wp-edit-post', 'wp-api' ],
        filemtime( plugin_dir_path(__FILE__) . $blockPath )
    );

    // Enqueue frontend and editor block styles
    wp_enqueue_style(
        'first-blocks-block-css',
        plugins_url ($stylePath, __FILE__),
        '',
        filemtime( plugin_dir_path(__FILE__) . $stylePath )
    );
    

}

// Hook scripts function into block editor hook
add_action('enqueue_block_assets', 'first_blocks_scripts');
