(this["webpackJsonpcat-reverse-image-search"]=this["webpackJsonpcat-reverse-image-search"]||[]).push([[0],{10:function(e,c,t){},12:function(e,c,t){"use strict";t.r(c);var n=t(1),a=t.n(n),r=t(3),s=t.n(r),i=(t(9),t(4)),o=(t(10),t(0));var j=function(){var e=Object(n.useState)([]),c=Object(i.a)(e,2),t=c[0],a=c[1];function r(e){var c=Array.from(e).map((function(e){return URL.createObjectURL(e)})).map((function(e){return{image:e,confidence:.2*Math.random()+.8}}));a((function(e){return c.reverse().concat(e)}))}return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)("header",{className:"header",children:Object(o.jsx)("h1",{children:"Cat Reverse Image Search"})}),Object(o.jsxs)("label",{className:"upload",onDrop:function(e){e.preventDefault(),r(e.dataTransfer.files)},onDragOver:function(e){e.preventDefault()},children:["Upload images of cats",Object(o.jsx)("input",{type:"file",multiple:!0,accept:"image/*",onChange:function(e){r(e.target.files)}})]}),Object(o.jsx)("section",{className:"preview",children:t.map((function(e,c){return Object(o.jsxs)("div",{className:"chip",children:[Object(o.jsx)("img",{className:"chip-image",src:e.image,alt:"Chip"}),Object(o.jsx)("div",{className:"chip-spacer"}),Object(o.jsxs)("div",{className:"chip-row",children:[Object(o.jsx)("code",{children:Object(o.jsx)("strong",{children:"Name"})}),Object(o.jsx)("code",{children:'"Chip"'})]}),Object(o.jsxs)("div",{className:"chip-row",children:[Object(o.jsx)("code",{children:Object(o.jsx)("strong",{children:"Confidence"})}),Object(o.jsxs)("code",{children:[(100*e.confidence).toFixed(2),"%"]})]})]},t.length-c)}))})]})},l=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,13)).then((function(c){var t=c.getCLS,n=c.getFID,a=c.getFCP,r=c.getLCP,s=c.getTTFB;t(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),l()},9:function(e,c,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.f6ede902.chunk.js.map