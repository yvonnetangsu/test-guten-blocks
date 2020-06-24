<?php
/**
 * Plugin Name: Fancy Quote
 * Created by PhpStorm.
 * User: Yvonne Tang
 * Date: 6/15/20
 * Time: 3:45 PM
 */

function myguten_enqueue() {
  wp_enqueue_script( 'myguten-script',
    plugins_url( 'myguten.js', __FILE__ ),
    array( 'wp-blocks' )
  );
}
add_action( 'enqueue_block_editor_assets', 'myguten_enqueue' );

function myguten_stylesheet() {
  wp_enqueue_style( 'myguten-style', plugins_url( 'style.css', __FILE__ ) );
}
add_action( 'enqueue_block_assets', 'myguten_stylesheet' );