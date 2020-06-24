<?php
/*
Plugin Name: Stanford Well Block
*/

function my_register_gutenberg_well_block() {

  // Register our block script with WordPress
  wp_register_script(
    'gutenberg-well-block',
    plugins_url('/blocks/dist/blocks.build.js', __FILE__),
    array('wp-blocks', 'wp-element', 'wp-editor')
  );

  // Register our block's base CSS
  wp_register_style(
    'gutenberg-well-block-style',
    plugins_url( '/blocks/dist/blocks.style.build.css', __FILE__ ),
    array( 'wp-blocks' )
  );

  // Register our block's editor-specific CSS
  if( is_admin() ) :
    wp_register_style(
      'gutenberg-well-block-edit-style',
      plugins_url('/blocks/dist/blocks.editor.build.css', __FILE__),
      array( 'wp-edit-blocks' )
    );
  endif;

  // Enqueue the script in the editor
  register_block_type('well-block/main', array(
    'editor_script' => 'gutenberg-well-block',
    'editor_style' => 'gutenberg-well-block-edit-style',
    'style' => 'gutenberg-well-block-edit-style'
  ));
}

add_action('init', 'my_register_gutenberg_well_block');