!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(1)},function(e,t,n){"use strict";var r=n(2),o=(n.n(r),n(3)),__=(n.n(o),wp.i18n.__),c=wp.editor,l=c.AlignmentToolbar,i=c.BlockControls;(0,wp.blocks.registerBlockType)("cgb/block-icon-block",{title:__("icon-block - CGB Block"),icon:"star",category:"common",attributes:{alignment:{type:"string",default:"none"}},keywords:[__("icon-block \u2014 CGB Block"),__("create-guten-block")],edit:function(e){var t=e.attributes.alignment,n=(e.setAttributes,function(t){e.setAttributes({alignment:void 0===t?"none":t})});return wp.element.createElement("span",{style:{textAlign:t},className:e.className},wp.element.createElement(i,null,wp.element.createElement(l,{value:t,onChange:n})))},save:function(e){var t=e.attributes.alignment;return e.setAttributes,wp.element.createElement("span",{className:"align-"+t,"aria-hidden":"true"})}})},function(e,t){},function(e,t){}]);