(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7870,7158],{7158:function(e,t,s){var a,i;"undefined"!=typeof window&&window,void 0===(i="function"===typeof(a=function(){"use strict";function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var s=this._events=this._events||{},a=s[e]=s[e]||[];return-1==a.indexOf(t)&&a.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var s=this._onceEvents=this._onceEvents||{};return(s[e]=s[e]||{})[t]=!0,this}},t.off=function(e,t){var s=this._events&&this._events[e];if(s&&s.length){var a=s.indexOf(t);return-1!=a&&s.splice(a,1),this}},t.emitEvent=function(e,t){var s=this._events&&this._events[e];if(s&&s.length){s=s.slice(0),t=t||[];for(var a=this._onceEvents&&this._onceEvents[e],i=0;i<s.length;i++){var n=s[i];a&&a[n]&&(this.off(e,n),delete a[n]),n.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e})?a.call(t,s,t,e):a)||(e.exports=i)},7564:function(e,t,s){var a,i;!function(n,o){"use strict";a=[s(7158)],void 0===(i=function(e){return function(e,t){var s=e.jQuery,a=e.console;function i(e,t){for(var s in t)e[s]=t[s];return e}var n=Array.prototype.slice;function o(e){return Array.isArray(e)?e:"object"==typeof e&&"number"==typeof e.length?n.call(e):[e]}function r(e,t,n){if(!(this instanceof r))return new r(e,t,n);var l=e;"string"==typeof e&&(l=document.querySelectorAll(e)),l?(this.elements=o(l),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),s&&(this.jqDeferred=new s.Deferred),setTimeout(this.check.bind(this))):a.error("Bad element for imagesLoaded "+(l||e))}r.prototype=Object.create(t.prototype),r.prototype.options={},r.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},r.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),!0===this.options.background&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&l[t]){for(var s=e.querySelectorAll("img"),a=0;a<s.length;a++){var i=s[a];this.addImage(i)}if("string"==typeof this.options.background){var n=e.querySelectorAll(this.options.background);for(a=0;a<n.length;a++){var o=n[a];this.addElementBackgroundImages(o)}}}};var l={1:!0,9:!0,11:!0};function c(e){this.img=e}function u(e,t){this.url=e,this.element=t,this.img=new Image}return r.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var s=/url\((['"])?(.*?)\1\)/gi,a=s.exec(t.backgroundImage);null!==a;){var i=a&&a[2];i&&this.addBackground(i,e),a=s.exec(t.backgroundImage)}},r.prototype.addImage=function(e){var t=new c(e);this.images.push(t)},r.prototype.addBackground=function(e,t){var s=new u(e,t);this.images.push(s)},r.prototype.check=function(){var e=this;function t(t,s,a){setTimeout((function(){e.progress(t,s,a)}))}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach((function(e){e.once("progress",t),e.check()})):this.complete()},r.prototype.progress=function(e,t,s){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+s,e,t)},r.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},c.prototype=Object.create(t.prototype),c.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},c.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},c.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},c.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},c.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},u.prototype=Object.create(c.prototype),u.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},u.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},u.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},r.makeJQueryPlugin=function(t){(t=t||e.jQuery)&&((s=t).fn.imagesLoaded=function(e,t){return new r(this,e,t).jqDeferred.promise(s(this))})},r.makeJQueryPlugin(),r}(n,e)}.apply(t,a))||(e.exports=i)}("undefined"!==typeof window?window:this)},7882:function(e,t,s){"use strict";var a=s(7294),i=a.createElement;function n(e){var t=e.title,s=e.subTitle;return i("div",{className:"page-header text-center",style:{backgroundImage:"url(images/page-header-bg.jpg)"}},i("div",{className:"container"},i("h1",{className:"page-title"},t,i("span",null,s))))}t.Z=a.memo(n)},4590:function(e,t,s){"use strict";var a=s(6265),i=s(7294),n=s(8216),o=s(2679),r=s(8335),l=s(4138),c=s(2870),u=i.createElement;function d(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}t.Z=(0,n.$j)(null,function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?d(Object(s),!0).forEach((function(t){(0,a.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):d(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({},c.Nw))((function(e){var t=e.post,s=e.adClass,a=void 0===s?"":s,n=e.isContent,c=void 0===n||n,d=e.isAuthor,m=void 0===d||d,h=new Date(t.date);return u("article",{className:"entry ".concat(a)},t.image.length<=1?u("figure",{className:"entry-media ".concat("video"==t.type?"entry-video":""),style:{paddingTop:"".concat(t.image[0].height/t.image[0].width*100,"%")}},"video"!==t.type?u(r.Z,{href:"/blog/single/default/".concat(t.slug)},u("div",{className:"lazy-overlay"}),u(o.LazyLoadImage,{alt:"Post",src:"https://d-themes.com/react_asset_api/molla"+t.image[0].url,threshold:500,effect:"blur",height:"auto"})):u(i.Fragment,null,u(r.Z,{href:"/blog/single/default/".concat(t.slug)},u("div",{className:"lazy-overlay"}),u(o.LazyLoadImage,{alt:"Post",src:"https://d-themes.com/react_asset_api/molla"+t.image[0].url,threshold:500,effect:"blur",height:"auto"})),u("a",{href:"https://www.youtube.com/watch?v=vBPgmASQ1A0",onClick:function(t){t.preventDefault(),e.showVideo()},className:"btn-video btn-iframe"},u("i",{className:"icon-play"})))):u("figure",{className:"entry-media",style:{paddingTop:"".concat(t.image[0].height/t.image[0].width*100,"%")}},u(l.Z,{adClass:"owl-simple owl-light owl-nav-inside cols-1",options:{dots:!1,nav:!0,responsive:{992:{nav:!0}}}},t.image.map((function(e,s){return u(r.Z,{href:"/blog/single/default/".concat(t.slug),key:s},u("div",{className:"lazy-overlay"}),u(o.LazyLoadImage,{alt:"Post",src:"".concat("https://d-themes.com/react_asset_api/molla"+e.url),threshold:500,effect:"blur"}))})))),u("div",{className:"entry-body"},u("div",{className:"entry-meta"},m?u(i.Fragment,null,u("span",{className:"entry-author"},"by ",u(r.Z,{href:"/blog/single/default/".concat(t.slug)},t.author)),u("span",{className:"meta-separator"},"|")):"",u(r.Z,{href:"/blog/single/default/".concat(t.slug)},h.toLocaleDateString("en-US",{year:"numeric",month:"short",day:"2-digit",timeZone:"UTC"})),u("span",{className:"meta-separator"},"|"),u(r.Z,{href:"/blog/single/default/".concat(t.slug)},t.comments," Comments")),u("h2",{className:"entry-title"},u(r.Z,{href:"/blog/single/default/".concat(t.slug)},t.title)),u("div",{className:"entry-cats"},"in\xa0",t.blog_categories.map((function(e,s){return u("span",{key:s},u(r.Z,{href:{pathname:"/blog/classic",query:{category:e.slug}}},e.name),s<t.blog_categories.length-1?", ":"")}))),c?u("div",{className:"entry-content"},u("p",null,t.content),u(r.Z,{href:"/blog/single/default/".concat(t.slug),className:"read-more"},"Continue Reading")):""))}))},7205:function(e,t,s){"use strict";var a=s(1163),i=s(7294),n=s(2679),o=s(8335),r=i.createElement;function l(e){var t=e.categories,s=void 0===t?[]:t,i=e.toggle,l=void 0!==i&&i,c=(0,a.useRouter)(),u=c.query;return r("div",{className:"sidebar mt-0 ".concat(l?"sidebar-filter px-3 right pt-3":"")},r("div",{className:"widget widget-search"},r("h3",{className:"widget-title"},"Search"),r("form",{action:"#",method:"get"},r("div",{className:"header-search-wrapper search-wrapper-wide"},r("label",{htmlFor:"ws",className:"sr-only"},"Search in blog"),r("input",{type:"search",className:"form-control",name:"ws",id:"ws",placeholder:"Search in blog",required:!0}),r("button",{type:"submit",className:"btn"},r("i",{className:"icon-search"}),r("span",{className:"sr-only"},"Search"))))),r("div",{className:"widget widget-cats"},r("h3",{className:"widget-title"},"Categories"),r("ul",null,c.pathname.includes("single")?s.map((function(e,t){return r("li",{key:t},r(o.Z,{href:{pathname:"/blog/classic/",query:{category:e.slug}},className:"".concat(u.category==e.slug?"active":""),scroll:!1},e.name,r("span",null,e.count)))})):s.map((function(e,t){return r("li",{key:t},r(o.Z,{href:{pathname:c.pathname,query:{category:e.slug}},className:"".concat(u.category==e.slug?"active":""),scroll:!1},e.name,r("span",null,e.count)))})))),r("div",{className:"widget"},r("h3",{className:"widget-title"},"Popular Posts"),r("ul",{className:"posts-list"},r("li",null,r("figure",{className:"position-relative"},r(o.Z,{href:"/blog/single/default/sed-adipiscing-ornare.",className:"w-100"},r("div",{className:"lazy-overlay"}),r(n.LazyLoadImage,{alt:"Post",src:"https://d-themes.com/react_asset_api/molla/uploads/post_1_b9361c0eac.jpg",threshold:500,effect:"blur",height:"80"}))),r("div",null,r("span",null,"Nov 22, 2018"),r("h4",null,r(o.Z,{href:"/blog/single/default/sed-adipiscing-ornare."},"Sed adipiscing ornare..")))),r("li",null,r("figure",{className:"position-relative"},r(o.Z,{href:"/blog/single/default/fusce-pellentesque-suscipit.",className:"w-100"},r("div",{className:"lazy-overlay"}),r(n.LazyLoadImage,{alt:"Post",src:"https://d-themes.com/react_asset_api/molla/uploads/post_4_be80872f91.jpg",threshold:500,effect:"blur",height:"80"}))),r("div",null,r("span",null,"Nov 19, 2018"),r("h4",null,r(o.Z,{href:"/blog/single/default/fusce-pellentesque-suscipit."},"Fusce pellentesque suscipit.")))),r("li",null,r("figure",{className:"position-relative"},r(o.Z,{href:"/blog/single/default/donec-nec-justo-eget-felis-facilisis-fermentum.",className:"w-100"},r("div",{className:"lazy-overlay"}),r(n.LazyLoadImage,{alt:"Post",src:"https://d-themes.com/react_asset_api/molla/uploads/post_5_3c9d9563f6.jpg",threshold:500,effect:"blur",height:"80"}))),r("div",null,r("span",null,"Nov 12, 2018"),r("h4",null,r(o.Z,{href:"/blog/single/default/donec-nec-justo-eget-felis-facilisis-fermentum."},"Donec nec justo eget felis facilisis  fermentum.")))),r("li",null,r("figure",{className:"position-relative"},r(o.Z,{href:"/blog/single/default/vivamus-vestibulum-ngtulla-necante.",className:"w-100"},r("div",{className:"lazy-overlay"}),r(n.LazyLoadImage,{alt:"Post",src:"https://d-themes.com/react_asset_api/molla/uploads/post_2_a2b4601de7.jpg",threshold:500,effect:"blur",height:"80"}))),r("div",null,r("span",null,"Nov 25, 2018"),r("h4",null,r(o.Z,{href:"/blog/single/default/vivamus-vestibulum-ngtulla-necante."},"Vivamus vestibulum ngtulla necante.")))))),r("div",{className:"widget widget-banner-sidebar"},r("div",{className:"banner-sidebar-title"},"ad box 280 x 280"),r("div",{className:"banner-sidebar banner-overlay"},r(o.Z,{href:"/shop/sidebar/3cols",className:"w-100"},r("div",{className:"lazy-overlay"}),r(n.LazyLoadImage,{alt:"banner",src:"images/blog/sidebar/banner.jpg",threshold:500,height:277,width:"280",effect:"opacity"})),r("div",{className:"banner-content text-left"},r("p",{className:"mb-1"},"online & in-store"),r("h3",{className:"banner-subtitle text-uppercase"},"Spring Sale"),r("h2",{className:"banner-title"},"Up to 60% off",r("br",null),"from $55"),r(o.Z,{href:"/shop/sidebar/3cols",className:"btn btn-outline btn-md btn-outline-white text-uppercase m-0"},"Shop Now")))),r("div",{className:"widget"},r("h3",{className:"widget-title"},"Browse Tags"),r("div",{className:"tagcloud"},r(o.Z,{href:"#"},"fashion"),r(o.Z,{href:"#"},"style"),r(o.Z,{href:"#"},"women"),r(o.Z,{href:"#"},"photography"),r(o.Z,{href:"#"},"travel"),r(o.Z,{href:"#"},"shopping"),r(o.Z,{href:"#"},"hobbies"))),r("div",{className:"widget widget-text"},r("h3",{className:"widget-title"},"About Blog"),r("div",{className:"widget-text-content"},r("p",null,"Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, pulvinar nunc sapien ornare nisl."))))}t.Z=i.memo(l)},2295:function(e,t,s){"use strict";s.r(t);var a=s(809),i=s.n(a),n=s(2447),o=s(4121),r=s(7294),l=s(1163),c=s(7934),u=s(7564),d=s.n(u),m=s(1243),h=s(8335),g=s(7882),p=s(4590),f=s(7205),v=s(3615),y=s(9638),b=r.createElement;t.default=(0,v.Z)({ssr:!1})((function(){var e=(0,c.t)(y.AU),t=(0,o.Z)(e,2),a=t[0],u=t[1],v=u.data,N=u.loading,w=u.error,E=((0,l.useRouter)(),(0,l.useRouter)().query),_=(0,r.useState)(!1),k=_[0],Z=_[1],L=v&&v.postsByPage.data,I=v&&v.postsByPage.categories,j=(0,r.useRef)();function S(){document.querySelector("body").offsetWidth<992?Z(!0):Z(!1)}return(0,r.useEffect)((function(){a({variables:{page:"masonry-sidebar",category:E.category}})}),[E.category]),(0,r.useEffect)((function(){L&&L.length>0&&d()(".page-content").on("done",(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.e(3391).then(s.t.bind(s,3391,23));case 2:t=e.sent.default,new t(j.current,{itemSelector:".grid-item"});case 4:case"end":return e.stop()}}),e)}))))}),[L]),(0,r.useEffect)((function(){return window.addEventListener("resize",S),S(),function(){window.removeEventListener("resize",S)}}),[]),w?b("div",null):b("div",{className:"main"},b(g.Z,{title:"Blog Masonry Sidebar",subTitle:"Blog"}),b("nav",{className:"breadcrumb-nav"},b("div",{className:"container"},b("ol",{className:"breadcrumb"},b("li",{className:"breadcrumb-item"},b(h.Z,{href:"/"},"Home")),b("li",{className:"breadcrumb-item"},b(h.Z,{href:"/blog/classic"},"Blog")),b("li",{className:"breadcrumb-item active"},"Masonry Sidebar")))),b("div",{className:"page-content"},b("div",{className:"container skeleton-body ".concat(N?"":"loaded")},b("div",{className:"row"},b("div",{className:"col-lg-9"},N||!L?b("div",{className:"row"},[1,2,3,4,5,6].map((function(e){return b("div",{className:"col-sm-6",key:e},b("div",{className:"skel-grid-post"}))}))):b(r.Fragment,null,0==L.length?b("div",{className:"row"},b("p",{className:"blogs-info"},"No posts were found matching your selection.")):b("div",{className:"row",ref:j},L.map((function(e,t){return b("div",{className:"col-sm-6 grid-item",key:t},b(p.Z,{post:e,adClass:"text-center"}))}))))),b("div",{className:"col-lg-3 skel-shop-sidebar skeleton-body ".concat(N?"":"loaded")},b("div",{className:"skel-widget"}),b("div",{className:"skel-widget"}),b("div",{className:"skel-widget"}),b("div",{className:"skel-widget"}),b(m.Z,{className:"sticky-content",offsetTop:70},b(f.Z,{categories:I,toggle:k}),k?b("button",{className:"sidebar-fixed-toggler right",onClick:function(){document.querySelector("body").classList.contains("sidebar-filter-active")?document.querySelector("body").classList.remove("sidebar-filter-active"):document.querySelector("body").classList.add("sidebar-filter-active")}},b("i",{className:"icon-cog"})):"",b("div",{className:"sidebar-filter-overlay",onClick:function(){document.querySelector("body").classList.remove("sidebar-filter-active")}})))))))}))},7512:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/masonry/sidebar",function(){return s(2295)}])}},function(e){e.O(0,[1243,9774,2888,179],(function(){return t=7512,e(e.s=t);var t}));var t=e.O();_N_E=t}]);