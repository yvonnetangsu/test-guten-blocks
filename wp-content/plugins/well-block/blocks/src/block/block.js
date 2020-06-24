const { __ } = wp.i18n; // Import __() from wp.i18n
const { RichText, MediaUpload, PlainText } = wp.editor;
const { registerBlockType } = wp.blocks;
const { Button } = wp.components;

// Import our CSS files
import './style.scss';
import './editor.scss';

registerBlockType('well-block/main', {
  title: 'Stanford Well',
  icon: 'id-alt',
  category: 'common',
  attributes: {
    title: {
      source: 'text',
      selector: '.well__title'
    },
    body: {
      type: 'array',
      source: 'children',
      selector: '.well__body'
    },
    imageAlt: {
      attribute: 'alt',
      selector: '.well__image'
    },
    imageUrl: {
      attribute: 'src',
      selector: '.well__image'
    }
  },
  edit({ attributes, className, setAttributes }) {

    const getImageButton = (openEvent) => {
      if(attributes.imageUrl) {
        return (
          <img
            src={ attributes.imageUrl }
            onClick={ openEvent }
            className="image"
          />
        );
      }
      else {
        return (
          <div className="button-container">
            <Button
              onClick={ openEvent }
              className="button button-large"
            >
              Pick an image
            </Button>
          </div>
        );
      }
    };

    return (
      <div className="container">
        <MediaUpload
          onSelect={ media => { setAttributes({ imageAlt: media.alt, imageUrl: media.url }); } }
          type="image"
          value={ attributes.imageID }
          render={ ({ open }) => getImageButton(open) }
        />
        <PlainText
          onChange={ content => setAttributes({ title: content }) }
          value={ attributes.title }
          placeholder="Your well title"
          className="heading"
        />
        <RichText
          onChange={ content => setAttributes({ body: content }) }
          value={ attributes.body }
          multiline="p"
          placeholder="Your well text"
          formattingControls={ ['bold', 'italic', 'underline'] }
          isSelected={ attributes.isSelected }
        />
      </div>
    );

  },

  save({ attributes }) {

    const wellImage = (src, alt) => {
      if(!src) return null;

      if(alt) {
        return (
          <img
            className="well__image"
            src={ src }
            alt={ alt }
          />
        );
      }

      // No alt set, so let's hide it from screen readers
      return (
        <img
          className="well__image"
          src={ src }
          alt=""
          aria-hidden="true"
        />
      );
    };

    return (
      <div className="well">
        { wellImage(attributes.imageUrl, attributes.imageAlt) }
        <div className="well__content">
          <h3 className="well__title">{ attributes.title }</h3>
          <div className="well__body">
            { attributes.body }
          </div>
        </div>
      </div>
    );
  }
});