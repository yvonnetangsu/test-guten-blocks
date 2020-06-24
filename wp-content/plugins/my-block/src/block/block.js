/**
 * BLOCK: my-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const {
  RichText,
  AlignmentToolbar,
  BlockControls,
  InnerBlocks,
} = wp.editor;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-my-block', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'my-block - Custom Well' ), // Block title.
	icon: 'id-alt', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  attributes: {
    title: {
      type: 'array',
      source: 'children',
      selector: 'h2',
    },
    content: {
      type: 'array',
      source: 'children',
      selector: '.content',
    },
    alignment: {
      type: 'string',
      default: 'none',
    },
  },
	keywords: [
		__( 'my-block — Custom Well' ),
	],

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: ( props ) => {
    const {
      attributes: {
        title,
				content,
        alignment,
      },
      setAttributes,
    } = props;

    const onChangeTitle = ( value ) => {
      setAttributes( { title: value } );
    };

    const onChangeContent = ( value ) => {
      setAttributes( { content: value } );
    };

    const onChangeAlignment = ( newAlignment ) => {
      props.setAttributes( { alignment: newAlignment === undefined ? 'none' : newAlignment } );
    };

		// Creates a <p class='wp-block-cgb-block-my-block'></p>.
		return (
			<div className={ props.className }>
        {
          <BlockControls>
            <AlignmentToolbar
              value={ alignment }
              onChange={ onChangeAlignment }
            />
          </BlockControls>
        }
        <RichText
          tagName="h2"
          placeholder={ __( 'Add well title…', 'my-block' ) }
          value={ title }
          style={ { textAlign: alignment } }
          onChange={ onChangeTitle }
        />
        <RichText
          tagName="div"
          multiline="p"
          className="content"
          placeholder={ __( 'Add well content here…', 'my-block' ) }
          value={ content }
          onChange={ onChangeContent }
        />
        <InnerBlocks />
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: ( props ) => {
    const {
      attributes: {
        title,
				content,
				alignment
      },
    } = props;
		return (
			<div className={ props.className }>
        <RichText.Content tagName="h2" value={ title } className={ `align-${ alignment }` } />
        <RichText.Content tagName="div" className="content" value={ content } />
        <InnerBlocks.Content />
			</div>
		);
	},
} );
