/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/src/blocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/src/block/block.js":
/*!***********************************!*\
  !*** ./blocks/src/block/block.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./blocks/src/block/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./blocks/src/block/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_1__);
var __ = wp.i18n.__; // Import __() from wp.i18n

var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
    PlainText = _wp$editor.PlainText;
var registerBlockType = wp.blocks.registerBlockType;
var Button = wp.components.Button; // Import our CSS files



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
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes;

    var getImageButton = function getImageButton(openEvent) {
      if (attributes.imageUrl) {
        return wp.element.createElement("img", {
          src: attributes.imageUrl,
          onClick: openEvent,
          className: "image"
        });
      } else {
        return wp.element.createElement("div", {
          className: "button-container"
        }, wp.element.createElement(Button, {
          onClick: openEvent,
          className: "button button-large"
        }, "Pick an image"));
      }
    };

    return wp.element.createElement("div", {
      className: "container"
    }, wp.element.createElement(MediaUpload, {
      onSelect: function onSelect(media) {
        setAttributes({
          imageAlt: media.alt,
          imageUrl: media.url
        });
      },
      type: "image",
      value: attributes.imageID,
      render: function render(_ref2) {
        var open = _ref2.open;
        return getImageButton(open);
      }
    }), wp.element.createElement(PlainText, {
      onChange: function onChange(content) {
        return setAttributes({
          title: content
        });
      },
      value: attributes.title,
      placeholder: "Your well title",
      className: "heading"
    }), wp.element.createElement(RichText, {
      onChange: function onChange(content) {
        return setAttributes({
          body: content
        });
      },
      value: attributes.body,
      multiline: "p",
      placeholder: "Your well text",
      formattingControls: ['bold', 'italic', 'underline'],
      isSelected: attributes.isSelected
    }));
  },
  save: function save(_ref3) {
    var attributes = _ref3.attributes;

    var wellImage = function wellImage(src, alt) {
      if (!src) return null;

      if (alt) {
        return wp.element.createElement("img", {
          className: "well__image",
          src: src,
          alt: alt
        });
      } // No alt set, so let's hide it from screen readers


      return wp.element.createElement("img", {
        className: "well__image",
        src: src,
        alt: "",
        "aria-hidden": "true"
      });
    };

    return wp.element.createElement("div", {
      className: "well"
    }, wellImage(attributes.imageUrl, attributes.imageAlt), wp.element.createElement("div", {
      className: "well__content"
    }, wp.element.createElement("h3", {
      className: "well__title"
    }, attributes.title), wp.element.createElement("div", {
      className: "well__body"
    }, attributes.body)));
  }
});

/***/ }),

/***/ "./blocks/src/block/editor.scss":
/*!**************************************!*\
  !*** ./blocks/src/block/editor.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleParseError: Module parse failed: Unexpected token (5:0)\nFile was processed with these loaders:\n * ./node_modules/sass-loader/lib/loader.js\nYou may need an additional loader to handle the result of these loaders.\n|  * that are shared between all of your blocks.\n|  */\n> .wp-admin .container {\n|   border: 1px solid #cccccc;\n|   padding: 1rem; }\n    at handleParseError (/Users/ytang/repos/gutenblock/wp-content/plugins/well-block/node_modules/webpack/lib/NormalModule.js:469:19)\n    at doBuild.err (/Users/ytang/repos/gutenblock/wp-content/plugins/well-block/node_modules/webpack/lib/NormalModule.js:503:5)\n    at runLoaders (/Users/ytang/repos/gutenblock/wp-content/plugins/well-block/node_modules/webpack/lib/NormalModule.js:358:12)\n    at /Users/ytang/repos/gutenblock/wp-content/plugins/well-block/node_modules/loader-runner/lib/LoaderRunner.js:373:3\n    at iterateNormalLoaders (/Users/ytang/repos/gutenblock/wp-content/plugins/well-block/node_modules/loader-runner/lib/LoaderRunner.js:214:10)\n    at iterateNormalLoaders (/Users/ytang/repos/gutenblock/wp-content/plugins/well-block/node_modules/loader-runner/lib/LoaderRunner.js:221:10)\n    at /Users/ytang/repos/gutenblock/wp-content/plugins/well-block/node_modules/loader-runner/lib/LoaderRunner.js:236:3\n    at context.callback (/Users/ytang/repos/gutenblock/wp-content/plugins/well-block/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.render [as callback] (/Users/ytang/repos/gutenblock/wp-content/plugins/well-block/node_modules/sass-loader/lib/loader.js:76:9)\n    at Object.done [as callback] (/Users/ytang/repos/gutenblock/wp-content/plugins/well-block/node_modules/neo-async/async.js:8067:18)\n    at options.success (/Users/ytang/repos/gutenblock/wp-content/plugins/well-block/node_modules/node-sass/lib/index.js:310:32)");

/***/ }),

/***/ "./blocks/src/block/style.scss":
/*!*************************************!*\
  !*** ./blocks/src/block/style.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleParseError: Module parse failed: Unexpected token (1:0)\nFile was processed with these loaders:\n * ./node_modules/sass-loader/lib/loader.js\nYou may need an additional loader to handle the result of these loaders.\n> .wp-block-well-block-main {\n|   background-color: #fff;\n|   border-top: 6px solid red;\n    at handleParseError (/Users/ytang/repos/gutenblock/wp-content/plugins/well-block/node_modules/webpack/lib/NormalModule.js:469:19)\n    at doBuild.err (/Users/ytang/repos/gutenblock/wp-content/plugins/well-block/node_modules/webpack/lib/NormalModule.js:503:5)\n    at runLoaders (/Users/ytang/repos/gutenblock/wp-content/plugins/well-block/node_modules/webpack/lib/NormalModule.js:358:12)\n    at /Users/ytang/repos/gutenblock/wp-content/plugins/well-block/node_modules/loader-runner/lib/LoaderRunner.js:373:3\n    at iterateNormalLoaders (/Users/ytang/repos/gutenblock/wp-content/plugins/well-block/node_modules/loader-runner/lib/LoaderRunner.js:214:10)\n    at iterateNormalLoaders (/Users/ytang/repos/gutenblock/wp-content/plugins/well-block/node_modules/loader-runner/lib/LoaderRunner.js:221:10)\n    at /Users/ytang/repos/gutenblock/wp-content/plugins/well-block/node_modules/loader-runner/lib/LoaderRunner.js:236:3\n    at context.callback (/Users/ytang/repos/gutenblock/wp-content/plugins/well-block/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.render [as callback] (/Users/ytang/repos/gutenblock/wp-content/plugins/well-block/node_modules/sass-loader/lib/loader.js:76:9)\n    at Object.done [as callback] (/Users/ytang/repos/gutenblock/wp-content/plugins/well-block/node_modules/neo-async/async.js:8067:18)\n    at options.success (/Users/ytang/repos/gutenblock/wp-content/plugins/well-block/node_modules/node-sass/lib/index.js:310:32)");

/***/ }),

/***/ "./blocks/src/blocks.js":
/*!******************************!*\
  !*** ./blocks/src/blocks.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block/block */ "./blocks/src/block/block.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy5qcyJdLCJuYW1lcyI6WyJfXyIsIndwIiwiaTE4biIsImVkaXRvciIsIlJpY2hUZXh0IiwiTWVkaWFVcGxvYWQiLCJQbGFpblRleHQiLCJyZWdpc3RlckJsb2NrVHlwZSIsImJsb2NrcyIsIkJ1dHRvbiIsImNvbXBvbmVudHMiLCJ0aXRsZSIsImljb24iLCJjYXRlZ29yeSIsImF0dHJpYnV0ZXMiLCJzb3VyY2UiLCJzZWxlY3RvciIsImJvZHkiLCJ0eXBlIiwiaW1hZ2VBbHQiLCJhdHRyaWJ1dGUiLCJpbWFnZVVybCIsImVkaXQiLCJjbGFzc05hbWUiLCJzZXRBdHRyaWJ1dGVzIiwiZ2V0SW1hZ2VCdXR0b24iLCJvcGVuRXZlbnQiLCJtZWRpYSIsImFsdCIsInVybCIsImltYWdlSUQiLCJvcGVuIiwiY29udGVudCIsImlzU2VsZWN0ZWQiLCJzYXZlIiwid2VsbEltYWdlIiwic3JjIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNsRlFBLEUsR0FBT0MsRUFBRSxDQUFDQyxJLENBQVZGLEUsRUFBZ0I7O2lCQUNxQkMsRUFBRSxDQUFDRSxNO0lBQXhDQyxRLGNBQUFBLFE7SUFBVUMsVyxjQUFBQSxXO0lBQWFDLFMsY0FBQUEsUztJQUN2QkMsaUIsR0FBc0JOLEVBQUUsQ0FBQ08sTSxDQUF6QkQsaUI7SUFDQUUsTSxHQUFXUixFQUFFLENBQUNTLFUsQ0FBZEQsTSxFQUVSOztBQUNBO0FBQ0E7QUFFQUYsaUJBQWlCLENBQUMsaUJBQUQsRUFBb0I7QUFDbkNJLE9BQUssRUFBRSxlQUQ0QjtBQUVuQ0MsTUFBSSxFQUFFLFFBRjZCO0FBR25DQyxVQUFRLEVBQUUsUUFIeUI7QUFJbkNDLFlBQVUsRUFBRTtBQUNWSCxTQUFLLEVBQUU7QUFDTEksWUFBTSxFQUFFLE1BREg7QUFFTEMsY0FBUSxFQUFFO0FBRkwsS0FERztBQUtWQyxRQUFJLEVBQUU7QUFDSkMsVUFBSSxFQUFFLE9BREY7QUFFSkgsWUFBTSxFQUFFLFVBRko7QUFHSkMsY0FBUSxFQUFFO0FBSE4sS0FMSTtBQVVWRyxZQUFRLEVBQUU7QUFDUkMsZUFBUyxFQUFFLEtBREg7QUFFUkosY0FBUSxFQUFFO0FBRkYsS0FWQTtBQWNWSyxZQUFRLEVBQUU7QUFDUkQsZUFBUyxFQUFFLEtBREg7QUFFUkosY0FBUSxFQUFFO0FBRkY7QUFkQSxHQUp1QjtBQXVCbkNNLE1BdkJtQyxzQkF1Qlk7QUFBQSxRQUF4Q1IsVUFBd0MsUUFBeENBLFVBQXdDO0FBQUEsUUFBNUJTLFNBQTRCLFFBQTVCQSxTQUE0QjtBQUFBLFFBQWpCQyxhQUFpQixRQUFqQkEsYUFBaUI7O0FBRTdDLFFBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsU0FBRCxFQUFlO0FBQ3BDLFVBQUdaLFVBQVUsQ0FBQ08sUUFBZCxFQUF3QjtBQUN0QixlQUNFO0FBQ0UsYUFBRyxFQUFHUCxVQUFVLENBQUNPLFFBRG5CO0FBRUUsaUJBQU8sRUFBR0ssU0FGWjtBQUdFLG1CQUFTLEVBQUM7QUFIWixVQURGO0FBT0QsT0FSRCxNQVNLO0FBQ0gsZUFDRTtBQUFLLG1CQUFTLEVBQUM7QUFBZixXQUNFLHlCQUFDLE1BQUQ7QUFDRSxpQkFBTyxFQUFHQSxTQURaO0FBRUUsbUJBQVMsRUFBQztBQUZaLDJCQURGLENBREY7QUFVRDtBQUNGLEtBdEJEOztBQXdCQSxXQUNFO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDRSx5QkFBQyxXQUFEO0FBQ0UsY0FBUSxFQUFHLGtCQUFBQyxLQUFLLEVBQUk7QUFBRUgscUJBQWEsQ0FBQztBQUFFTCxrQkFBUSxFQUFFUSxLQUFLLENBQUNDLEdBQWxCO0FBQXVCUCxrQkFBUSxFQUFFTSxLQUFLLENBQUNFO0FBQXZDLFNBQUQsQ0FBYjtBQUE4RCxPQUR0RjtBQUVFLFVBQUksRUFBQyxPQUZQO0FBR0UsV0FBSyxFQUFHZixVQUFVLENBQUNnQixPQUhyQjtBQUlFLFlBQU0sRUFBRztBQUFBLFlBQUdDLElBQUgsU0FBR0EsSUFBSDtBQUFBLGVBQWNOLGNBQWMsQ0FBQ00sSUFBRCxDQUE1QjtBQUFBO0FBSlgsTUFERixFQU9FLHlCQUFDLFNBQUQ7QUFDRSxjQUFRLEVBQUcsa0JBQUFDLE9BQU87QUFBQSxlQUFJUixhQUFhLENBQUM7QUFBRWIsZUFBSyxFQUFFcUI7QUFBVCxTQUFELENBQWpCO0FBQUEsT0FEcEI7QUFFRSxXQUFLLEVBQUdsQixVQUFVLENBQUNILEtBRnJCO0FBR0UsaUJBQVcsRUFBQyxpQkFIZDtBQUlFLGVBQVMsRUFBQztBQUpaLE1BUEYsRUFhRSx5QkFBQyxRQUFEO0FBQ0UsY0FBUSxFQUFHLGtCQUFBcUIsT0FBTztBQUFBLGVBQUlSLGFBQWEsQ0FBQztBQUFFUCxjQUFJLEVBQUVlO0FBQVIsU0FBRCxDQUFqQjtBQUFBLE9BRHBCO0FBRUUsV0FBSyxFQUFHbEIsVUFBVSxDQUFDRyxJQUZyQjtBQUdFLGVBQVMsRUFBQyxHQUhaO0FBSUUsaUJBQVcsRUFBQyxnQkFKZDtBQUtFLHdCQUFrQixFQUFHLENBQUMsTUFBRCxFQUFTLFFBQVQsRUFBbUIsV0FBbkIsQ0FMdkI7QUFNRSxnQkFBVSxFQUFHSCxVQUFVLENBQUNtQjtBQU4xQixNQWJGLENBREY7QUF5QkQsR0ExRWtDO0FBNEVuQ0MsTUE1RW1DLHVCQTRFZDtBQUFBLFFBQWRwQixVQUFjLFNBQWRBLFVBQWM7O0FBRW5CLFFBQU1xQixTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxHQUFELEVBQU1SLEdBQU4sRUFBYztBQUM5QixVQUFHLENBQUNRLEdBQUosRUFBUyxPQUFPLElBQVA7O0FBRVQsVUFBR1IsR0FBSCxFQUFRO0FBQ04sZUFDRTtBQUNFLG1CQUFTLEVBQUMsYUFEWjtBQUVFLGFBQUcsRUFBR1EsR0FGUjtBQUdFLGFBQUcsRUFBR1I7QUFIUixVQURGO0FBT0QsT0FYNkIsQ0FhOUI7OztBQUNBLGFBQ0U7QUFDRSxpQkFBUyxFQUFDLGFBRFo7QUFFRSxXQUFHLEVBQUdRLEdBRlI7QUFHRSxXQUFHLEVBQUMsRUFITjtBQUlFLHVCQUFZO0FBSmQsUUFERjtBQVFELEtBdEJEOztBQXdCQSxXQUNFO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FDSUQsU0FBUyxDQUFDckIsVUFBVSxDQUFDTyxRQUFaLEVBQXNCUCxVQUFVLENBQUNLLFFBQWpDLENBRGIsRUFFRTtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0U7QUFBSSxlQUFTLEVBQUM7QUFBZCxPQUE4QkwsVUFBVSxDQUFDSCxLQUF6QyxDQURGLEVBRUU7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNJRyxVQUFVLENBQUNHLElBRGYsQ0FGRixDQUZGLENBREY7QUFXRDtBQWpIa0MsQ0FBcEIsQ0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQUEiLCJmaWxlIjoiYmxvY2tzLmJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9ibG9ja3Mvc3JjL2Jsb2Nrcy5qc1wiKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47IC8vIEltcG9ydCBfXygpIGZyb20gd3AuaTE4blxuY29uc3QgeyBSaWNoVGV4dCwgTWVkaWFVcGxvYWQsIFBsYWluVGV4dCB9ID0gd3AuZWRpdG9yO1xuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3QgeyBCdXR0b24gfSA9IHdwLmNvbXBvbmVudHM7XG5cbi8vIEltcG9ydCBvdXIgQ1NTIGZpbGVzXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnd2VsbC1ibG9jay9tYWluJywge1xuICB0aXRsZTogJ1N0YW5mb3JkIFdlbGwnLFxuICBpY29uOiAnaWQtYWx0JyxcbiAgY2F0ZWdvcnk6ICdjb21tb24nLFxuICBhdHRyaWJ1dGVzOiB7XG4gICAgdGl0bGU6IHtcbiAgICAgIHNvdXJjZTogJ3RleHQnLFxuICAgICAgc2VsZWN0b3I6ICcud2VsbF9fdGl0bGUnXG4gICAgfSxcbiAgICBib2R5OiB7XG4gICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgc291cmNlOiAnY2hpbGRyZW4nLFxuICAgICAgc2VsZWN0b3I6ICcud2VsbF9fYm9keSdcbiAgICB9LFxuICAgIGltYWdlQWx0OiB7XG4gICAgICBhdHRyaWJ1dGU6ICdhbHQnLFxuICAgICAgc2VsZWN0b3I6ICcud2VsbF9faW1hZ2UnXG4gICAgfSxcbiAgICBpbWFnZVVybDoge1xuICAgICAgYXR0cmlidXRlOiAnc3JjJyxcbiAgICAgIHNlbGVjdG9yOiAnLndlbGxfX2ltYWdlJ1xuICAgIH1cbiAgfSxcbiAgZWRpdCh7IGF0dHJpYnV0ZXMsIGNsYXNzTmFtZSwgc2V0QXR0cmlidXRlcyB9KSB7XG5cbiAgICBjb25zdCBnZXRJbWFnZUJ1dHRvbiA9IChvcGVuRXZlbnQpID0+IHtcbiAgICAgIGlmKGF0dHJpYnV0ZXMuaW1hZ2VVcmwpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9eyBhdHRyaWJ1dGVzLmltYWdlVXJsIH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eyBvcGVuRXZlbnQgfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2VcIlxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17IG9wZW5FdmVudCB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b24tbGFyZ2VcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBQaWNrIGFuIGltYWdlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxNZWRpYVVwbG9hZFxuICAgICAgICAgIG9uU2VsZWN0PXsgbWVkaWEgPT4geyBzZXRBdHRyaWJ1dGVzKHsgaW1hZ2VBbHQ6IG1lZGlhLmFsdCwgaW1hZ2VVcmw6IG1lZGlhLnVybCB9KTsgfSB9XG4gICAgICAgICAgdHlwZT1cImltYWdlXCJcbiAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMuaW1hZ2VJRCB9XG4gICAgICAgICAgcmVuZGVyPXsgKHsgb3BlbiB9KSA9PiBnZXRJbWFnZUJ1dHRvbihvcGVuKSB9XG4gICAgICAgIC8+XG4gICAgICAgIDxQbGFpblRleHRcbiAgICAgICAgICBvbkNoYW5nZT17IGNvbnRlbnQgPT4gc2V0QXR0cmlidXRlcyh7IHRpdGxlOiBjb250ZW50IH0pIH1cbiAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMudGl0bGUgfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciB3ZWxsIHRpdGxlXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkaW5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPFJpY2hUZXh0XG4gICAgICAgICAgb25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyBib2R5OiBjb250ZW50IH0pIH1cbiAgICAgICAgICB2YWx1ZT17IGF0dHJpYnV0ZXMuYm9keSB9XG4gICAgICAgICAgbXVsdGlsaW5lPVwicFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIHdlbGwgdGV4dFwiXG4gICAgICAgICAgZm9ybWF0dGluZ0NvbnRyb2xzPXsgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnXSB9XG4gICAgICAgICAgaXNTZWxlY3RlZD17IGF0dHJpYnV0ZXMuaXNTZWxlY3RlZCB9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gIH0sXG5cbiAgc2F2ZSh7IGF0dHJpYnV0ZXMgfSkge1xuXG4gICAgY29uc3Qgd2VsbEltYWdlID0gKHNyYywgYWx0KSA9PiB7XG4gICAgICBpZighc3JjKSByZXR1cm4gbnVsbDtcblxuICAgICAgaWYoYWx0KSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwid2VsbF9faW1hZ2VcIlxuICAgICAgICAgICAgc3JjPXsgc3JjIH1cbiAgICAgICAgICAgIGFsdD17IGFsdCB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gTm8gYWx0IHNldCwgc28gbGV0J3MgaGlkZSBpdCBmcm9tIHNjcmVlbiByZWFkZXJzXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPVwid2VsbF9faW1hZ2VcIlxuICAgICAgICAgIHNyYz17IHNyYyB9XG4gICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsbFwiPlxuICAgICAgICB7IHdlbGxJbWFnZShhdHRyaWJ1dGVzLmltYWdlVXJsLCBhdHRyaWJ1dGVzLmltYWdlQWx0KSB9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsbF9fY29udGVudFwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ3ZWxsX190aXRsZVwiPnsgYXR0cmlidXRlcy50aXRsZSB9PC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGxfX2JvZHlcIj5cbiAgICAgICAgICAgIHsgYXR0cmlidXRlcy5ib2R5IH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTsiLCJpbXBvcnQgJy4vYmxvY2svYmxvY2snOyJdLCJzb3VyY2VSb290IjoiIn0=