(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{299:function(t,e,n){"use strict";n.r(e);var r={functional:!0,name:"RsmnPostTags",props:{tags:{type:Array,required:!0}},render(t,e){var{props:n,data:data}=e,span=t("span",{class:"text-xs text-bold mr-4 uppercase tracking-wide antialiased"},"Etiquetas"),r=n.tags.map(e=>t("nuxt-link",{key:e.term_id,attrs:{to:"/tag/".concat(e.slug||"")},class:"bg-grey-lighter text-grey-darker no-underline inline-block py-4 px-8 ml-4 mb-4 ptserif antialiased"},"#".concat(e.name)));return t("div",{class:"rsmn-articulo__tags ".concat(data.staticClass)},[span,r])}},l=n(2),component=Object(l.a)(r,void 0,void 0,!1,null,null,null);e.default=component.exports}}]);