!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t){var n=wp.i18n,a=n.__,r=(n.setLocaleData,wp.blocks.registerBlockType),l=wp.editor,i=l.RichText,s=l.MediaUpload,c=wp.components.Button;r("gutenberg-examples/example-05-recipe-card-esnext",{title:a("Example: Recipe Card (esnext)","gutenberg-examples"),icon:"index-card",category:"layout",attributes:{title:{type:"array",source:"children",selector:"h2"},mediaID:{type:"number"},mediaURL:{type:"string",source:"attribute",selector:"img",attribute:"src"},ingredients:{type:"array",source:"children",selector:".ingredients"},instructions:{type:"array",source:"children",selector:".steps"}},edit:function(e){var t=e.className,n=e.attributes,r=n.title,l=n.mediaID,m=n.mediaURL,u=n.ingredients,o=n.instructions,p=e.setAttributes,g=function(e){p({title:e})},d=function(e){p({mediaURL:e.url,mediaID:e.id})},b=function(e){p({ingredients:e})},w=function(e){p({instructions:e})};return wp.element.createElement("div",{className:t},wp.element.createElement(i,{tagName:"h2",placeholder:a("Write Recipe title…","gutenberg-examples"),value:r,onChange:g}),wp.element.createElement("div",{className:"recipe-image"},wp.element.createElement(s,{onSelect:d,allowedTypes:"image",value:l,render:function(e){var t=e.open;return wp.element.createElement(c,{className:l?"image-button":"button button-large",onClick:t},l?wp.element.createElement("img",{src:m,alt:a("Upload Recipe Image","gutenberg-examples")}):a("Upload Image","gutenberg-examples"))}})),wp.element.createElement("h3",null,a("Ingredients","gutenberg-examples")),wp.element.createElement(i,{tagName:"ul",multiline:"li",placeholder:a("Write a list of ingredients…","gutenberg-examples"),value:u,onChange:b,className:"ingredients"}),wp.element.createElement("h3",null,a("Instructions","gutenberg-examples")),wp.element.createElement(i,{tagName:"div",multiline:"p",className:"steps",placeholder:a("Write the instructions…","gutenberg-examples"),value:o,onChange:w}))},save:function(e){var t=e.className,n=e.attributes,r=n.title,l=n.mediaURL,s=n.ingredients,c=n.instructions;return wp.element.createElement("div",{className:t},wp.element.createElement(i.Content,{tagName:"h2",value:r}),l&&wp.element.createElement("img",{className:"recipe-image",src:l,alt:a("Recipe Image","gutenberg-examples")}),wp.element.createElement(i.Content,{tagName:"ul",className:"ingredients",value:s}),wp.element.createElement(i.Content,{tagName:"div",className:"steps",value:c}))}})}]);