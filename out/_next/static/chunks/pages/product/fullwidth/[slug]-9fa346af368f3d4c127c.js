(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5518],{7185:function(e,t,a){"use strict";var s=a(7294),r=s.createElement;function l(e){var t=e.adClass,a=void 0===t?"":t,s=e.type,l=void 0===s?"normal":s;function i(e){(e.target.classList.contains("toggle-button")||e.target.querySelector(".toggle-button"))&&(e.target.classList.contains("collapsed")||e.target.querySelector(".toggle-button")&&e.target.querySelector(".toggle-button").classList.contains("collapsed")||e.target.classList.contains("collapsing")||e.target.querySelector(".toggle-button")&&e.target.querySelector(".toggle-button").classList.contains("collapsing"))&&(e.currentTarget.querySelector(".toggle-button.expanded")&&e.currentTarget.querySelector(".toggle-button.expanded").click(),e.currentTarget.querySelector(".toggle-button.expanding")&&e.currentTarget.querySelector(".toggle-button.expanding").click())}return"normal"===l?r("div",{className:"accordion  ".concat(a),onClick:i},e.children):"checkout"===l?r("div",{className:"accordion-summary",onClick:i},e.children):""}t.Z=s.memo(l)},2674:function(e,t,a){"use strict";var s=a(7294),r=a(2954),l=a(6442),i=s.createElement;function c(e){var t=e.title,a=e.expanded,s=e.adClass,c=void 0===s?"":s,o=e.type,n=void 0===o?"default":o;return i(r.Z,{collapsed:!a},"default"===n?function(a){var s=a.onToggle,r=a.setCollapsibleElement,o=a.toggleState;return i("div",{className:"card ".concat(c)},i("div",{className:"card-header",onClick:s},i("h2",{className:"card-title"},i("span",{className:"toggle-button ".concat(o.toLowerCase()),dangerouslySetInnerHTML:(0,l.rJ)(t),style:{height:"auto"}}))),i("div",{ref:r},i("div",{className:"card-body"},e.children)))}:function(a){var s=a.onToggle,r=a.setCollapsibleElement,o=a.toggleState;return i("div",{className:"acc-item ".concat(c)},i("h5",null,i("span",{className:"toggle-button ".concat(o.toLowerCase()),dangerouslySetInnerHTML:(0,l.rJ)(t),onClick:s,style:{height:"auto"}})),i("div",{ref:r},i("div",{className:"collapse-wrap"},e.children)))})}t.Z=s.memo(c)},2076:function(e,t,a){"use strict";var s=a(7294),r=a(1163),l=a(8335),i=s.createElement;function c(e){var t=(0,r.useRouter)(),a=e.prev,s=e.next,c=e.current,o=e.fullWidth;return i("nav",{className:"breadcrumb-nav border-0 mb-0"},i("div",{className:"d-flex align-items-center "+(void 0!==o&&o?"container-fluid":"container")},i("ol",{className:"breadcrumb"},i("li",{className:"breadcrumb-item"},i(l.Z,{href:"/"},"Home")),i("li",{className:"breadcrumb-item"},i(l.Z,{href:"/product/default/dark-yellow-lace-cut-out-swing-dress"},"Product")),i("li",{className:"breadcrumb-item active"},c)),i("nav",{className:"product-pager ml-auto"},a?i(l.Z,{href:{pathname:t.pathname,query:{slug:a.slug}},className:"product-pager-link product-pager-prev ".concat(s?"":"prev-only")},i("i",{className:"icon-angle-left"}),i("span",null,"Prev"),i("div",{className:"product-detail"},i("figure",null,i("img",{src:"https://d-themes.com/react_asset_api/molla"+a.sm_pictures[0].url,alt:"product",width:a.sm_pictures[0].width,height:a.sm_pictures[0].height})),i("h3",{className:"product-name mb-0"},a.name))):"",s?i(l.Z,{href:{pathname:t.pathname,query:{slug:s.slug}},className:"product-pager-link product-pager-next"},i("span",null,"Next"),i("i",{className:"icon-angle-right"}),i("div",{className:"product-detail"},i("figure",null,i("img",{src:"https://d-themes.com/react_asset_api/molla"+s.sm_pictures[0].url,alt:"product",width:s.sm_pictures[0].width,height:s.sm_pictures[0].height})),i("h3",{className:"product-name mb-0"},s.name))):"")))}t.Z=s.memo(c)},478:function(e,t,a){"use strict";var s=a(4047),r=a(7294),l=a(2879),i=r.createElement;function c(e){var t=e.product,a=e.adClass,c=void 0===a?"product-gallery-vertical":a,o=(0,r.useState)(!1),n=o[0],u=o[1],d=(0,r.useState)(0),m=d[0],p=d[1];return(0,r.useEffect)((function(){t&&(u(!1),p(0))}),[t]),t?i(r.Fragment,null,i("div",{className:"product-gallery ".concat(c)},i("div",{className:"row m-0"},i("figure",{className:"product-main-image",index:"0"},t.new?i("span",{className:"product-label label-new"},"New"):"",t.sale_price?i("span",{className:"product-label label-sale"},"Sale"):"",t.top?i("span",{className:"product-label label-top"},"Top"):"",t.stock&&0!=t.stock?"":i("span",{className:"product-label label-out"},"Out of Stock"),i(s.lb,{imageSrc:"https://d-themes.com/react_asset_api/molla"+t.pictures[0].url,imageAlt:"product",largeImageSrc:"https://d-themes.com/react_asset_api/molla"+t.pictures[0].url,dragToMove:!1,mouseActivation:"hover",cursorStyleActive:"crosshair",id:"product-zoom",className:"zoom-image position-relative overflow-hidden",width:t.pictures[0].width,height:t.pictures[0].height,style:{paddingTop:"".concat(t.pictures[0].height/t.pictures[0].width*100,"%")}}),i("button",{id:"btn-product-gallery",className:"btn-product-gallery",onClick:function(){var e=parseInt(document.querySelector(".product-main-image").getAttribute("index"));e||(e=0),u(!0),p(e)}},i("i",{className:"icon-arrows"}))),i("div",{id:"product-zoom-gallery",className:"product-image-gallery"},t.pictures.map((function(e,a){return i("button",{className:"product-gallery-item ".concat(0===a?"active":""),key:t.id+"-"+a,onClick:function(t){return function(e,t,a){for(var s=document.querySelectorAll(".product-main-image img"),r=0;r<s.length;r++)s[r].src=t;document.querySelector(".product-image-gallery .active").classList.remove("active"),document.querySelector(".product-main-image").setAttribute("index",a),e.currentTarget.classList.add("active")}(t,"".concat("https://d-themes.com/react_asset_api/molla"+e.url),a)}},i("div",{className:"img-wrapper h-100"},i("img",{src:"https://d-themes.com/react_asset_api/molla"+t.sm_pictures[a].url,alt:"product back"})))}))))),n?i(l.Z,{mainSrc:"https://d-themes.com/react_asset_api/molla"+t.pictures[m].url,nextSrc:"https://d-themes.com/react_asset_api/molla"+t.pictures[(m+1)%t.pictures.length].url,prevSrc:"https://d-themes.com/react_asset_api/molla"+t.pictures[(m+t.pictures.length-1)%t.pictures.length].url,onCloseRequest:function(){u(!1)},onMovePrevRequest:function(){p((m+1)%t.pictures.length)},onMoveNextRequest:function(){p((m+t.pictures.length-1)%t.pictures.length)},reactModalStyle:{overlay:{zIndex:1041}}}):""):i("div",null)}t.Z=r.memo(c)},8062:function(e,t,a){"use strict";var s=a(7294),r=a(2674),l=a(7185),i=a(8335),c=s.createElement;function o(e){var t=e.product,a=function(e){e.preventDefault(),e.currentTarget.parentNode.querySelector(".active")&&e.currentTarget.parentNode.querySelector(".active").classList.remove("active"),e.currentTarget.classList.add("active")};return t?c(l.Z,{adClass:"accordion-plus product-details-accordion pb-2 mb-0"},c(r.Z,{title:"Description",adClass:"card-box card-sm"},c("div",{className:"product-desc-content"},c("p",{className:"pb-1"},"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci."),c("ul",null,c("li",null,"Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit. "),c("li",null,"Vivamus finibus vel mauris ut vehicula."),c("li",null,"Nullam a magna porttitor, dictum risus nec, faucibus sapien.")),c("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede."))),c(r.Z,{title:"Additional information",adClass:"card-box card-sm"},c("div",{className:"product-desc-content"},c("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci."),c("h3",{className:"pt-2"},"Fabric & care"),c("ul",null,c("li",null,"100% Polyester"),c("li",null,"Do not iron"),c("li",null,"Do not wash"),c("li",null,"Do not bleach"),c("li",null,"Do not tumble dry"),c("li",null,"Professional dry clean only")),c("h3",null,"Size"),c("p",null,"S, M, L, XL"))),c(r.Z,{title:"Shipping & Returns",expanded:!0,adClass:"card-box card-sm"},c("div",{className:"product-desc-content"},c("p",null,"We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our ",c(i.Z,{href:"#"},"Delivery information"),c("br",null),"We hope you\u2019ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our ",c(i.Z,{href:"#"},"Returns information")))),c(r.Z,{title:"Reviews (".concat(t.review,")"),adClass:"card-box card-sm"},c("div",{className:"reviews"},c("div",{className:"review"},c("div",{className:"row no-gutters"},c("div",{className:"col-auto"},c("h4",null,c(i.Z,{href:"#"},"Samanta J.")),c("div",{className:"ratings-container"},c("div",{className:"ratings"},c("div",{className:"ratings-val",style:{width:20*t.ratings+"%"}}),c("span",{className:"tooltip-text"},t.ratings.toFixed(2)))),c("span",{className:"review-date mb-1"},"6 days ago")),c("div",{className:"col"},c("h4",null,"Good, perfect size"),c("div",{className:"review-content"},c("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!")),c("div",{className:"review-action"},c(i.Z,{href:"#"},c("i",{className:"icon-thumbs-up"}),"Helpful (2)"),c(i.Z,{href:"#"},c("i",{className:"icon-thumbs-down"}),"Unhelpful (0)"))))),c("div",{className:"review border-0"},c("div",{className:"row no-gutters"},c("div",{className:"col-auto"},c("h4",null,c(i.Z,{href:"#"},"John Doe")),c("div",{className:"ratings-container"},c("div",{className:"ratings"},c("div",{className:"ratings-val",style:{width:20*t.ratings+"%"}}),c("span",{className:"tooltip-text"},t.ratings.toFixed(2)))),c("span",{className:"review-date mb-1"},"5 days ago")),c("div",{className:"col"},c("h4",null,"Very good"),c("div",{className:"review-content"},c("p",null,"Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!")),c("div",{className:"review-action"},c(i.Z,{href:"#"},c("i",{className:"icon-thumbs-up"}),"Helpful (0)"),c(i.Z,{href:"#"},c("i",{className:"icon-thumbs-down"}),"Unhelpful (0)")))))),c("div",{className:"reply"},c("div",{className:"title-wrapper text-left"},c("h3",{className:"title title-simple text-left text-normal"},"Add a Review"),c("p",null,"Your email address will not be published. Required fields are marked *")),c("div",{className:"rating-form"},c("label",{htmlFor:"rating",className:"text-dark"},"Your rating * "),c("span",{className:"rating-stars selected"},[1,2,3,4,5].map((function(e,t){return c("a",{className:"star-".concat(e),href:"#",onClick:a,key:"star-"+t},e)}))),c("select",{name:"rating",id:"rating",required:"",style:{display:"none"}},c("option",{value:""},"Rate\u2026"),c("option",{value:"5"},"Perfect"),c("option",{value:"4"},"Good"),c("option",{value:"3"},"Average"),c("option",{value:"2"},"Not that bad"),c("option",{value:"1"},"Very poor"))),c("form",{action:"#"},c("textarea",{id:"reply-message",cols:"30",rows:"6",className:"form-control mb-2",placeholder:"Comment *",required:!0}),c("div",{className:"row"},c("div",{className:"col-md-6"},c("input",{type:"text",className:"form-control",id:"reply-name",name:"reply-name",placeholder:"Name *",required:!0})),c("div",{className:"col-md-6"},c("input",{type:"email",className:"form-control",id:"reply-email",name:"reply-email",placeholder:"Email *",required:!0}))),c("div",{className:"form-checkbox mb-2"},c("input",{type:"checkbox",className:"custom-checkbox",id:"signin-remember",name:"signin-remember"}),c("label",{className:"form-control-label ml-3",htmlFor:"signin-remember"},"Save my name, email, and website in this browser for the next time I comment.")),c("button",{type:"submit",className:"btn btn-primary"},"Submit"))))):c("div",null)}t.Z=s.memo(o)},7484:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var s=a(7294),r=a(2679),l=a(8335),i=a(4138),c=s.createElement;function o(e){var t=e.product,a=(0,s.useState)(0),r=a[0],i=a[1],o=(0,s.useState)(99999),n=o[0],u=o[1];return(0,s.useEffect)((function(){var e=n,a=r;t.variants.map((function(t){e>t.price&&(e=t.price),a<t.price&&(a=t.price)}),[]),0==t.variants.length&&(e=t.sale_price?t.sale_price:t.price,a=t.price),u(e),i(a)}),[]),c("div",{className:"product product-sm"},c("figure",{className:"product-media"},c(l.Z,{href:"/product/default/".concat(t.slug)},c("img",{src:"https://d-themes.com/react_asset_api/molla"+t.sm_pictures[0].url,alt:"Product",className:"product-image"}))),c("div",{className:"product-body"},c("h5",{className:"product-title"},c(l.Z,{href:"/product/default/".concat(t.slug)},t.name)),t.stock&&0!=t.stock?n==r?c("div",{className:"product-price"},"$",n.toFixed(2)):0==t.variants.length?c("div",{className:"product-price"},c("span",{className:"new-price"},"$",n.toFixed(2)),c("span",{className:"old-price"},"$",r.toFixed(2))):c("div",{className:"product-price"},"$",n.toFixed(2),"\u2013$",r.toFixed(2)):c("div",{className:"product-price"},c("span",{className:"out-price"},"$",t.price.toFixed(2)))))}var n=s.memo(o),u=s.createElement;function d(e){var t=e.products;return t?u(i.Z,{adClass:"owl-simple"},u("div",null,t.map((function(e,t){return u(n,{product:e,key:t})})))):u("div",null)}var m=s.memo(d),p=s.createElement;function v(e){var t=(0,s.useState)(0),a=t[0],i=t[1],c=e.products,o=e.loading,n=void 0!==o&&o;function u(){document.querySelector("body").offsetWidth<992?i(!0):i(!1)}return(0,s.useEffect)((function(){return u(),window.addEventListener("resize",u),function(){window.removeEventListener("resize",u)}}),[]),c?p(s.Fragment,null,n?"":p(s.Fragment,null,p("div",{className:"".concat(a?"sidebar-filter right":"sidebar"," sidebar-product")},p("div",{className:a?"sidebar-filter-wrapper product-sidebar-wrapper":""},p("button",{onClick:function(){document.querySelector("body").classList.contains("sidebar-filter-active")&&document.querySelector("body").classList.remove("sidebar-filter-active")},className:"btn-product btn-close",style:{marginLeft:"auto",marginRight:"5px"}},p("i",{className:"icon-close"})),p("div",{className:"widget widget-products"},p("h4",{className:"widget-title mb-1"},"Related Product"),p("div",{className:"products"},p(m,{products:c.slice(0,4)})),p(l.Z,{href:"/shop/sidebar/list",className:"btn btn-outline-dark-3 text-truncate"},p("span",null,"View More Products"),p("i",{className:"icon-long-arrow-right"}))),p("div",{className:"widget widget-banner-sidebar pb-2"},p("div",{className:"banner-sidebar-title"},"ad box 280 x 280"),p("div",{className:"banner-sidebar text-left banner-overlay ml-0"},p(l.Z,{href:"#",className:"w-100"},p("div",{className:"lazy-overlay"}),p(r.LazyLoadImage,{alt:"banner",src:"images/blog/sidebar/banner.jpg",threshold:500,height:277,width:280,effect:"opacity"})),p("div",{className:"banner-content text-left pt-0"},p("p",{className:"mb-1"},"online & in-store"),p("h3",{className:"banner-subtitle text-uppercase"},"Spring Sale"),p("h2",{className:"banner-title"},"Up to 60% off",p("br",null),"from $55"),p(l.Z,{href:"/shop/sidebar/3cols",className:"btn btn-outline btn-md btn-outline-white text-uppercase m-0"},"Shop Now")))))),a?p("button",{className:"sidebar-fixed-toggler right",onClick:function(){document.querySelector("body").classList.contains("sidebar-filter-active")?document.querySelector("body").classList.remove("sidebar-filter-active"):document.querySelector("body").classList.add("sidebar-filter-active")}},p("i",{className:"icon-cog"})):"",p("div",{className:"sidebar-filter-overlay",onClick:function(){document.querySelector("body").classList.contains("sidebar-filter-active")&&document.querySelector("body").classList.remove("sidebar-filter-active")}}))):p("div",null)}var g=s.memo(v)},3757:function(e,t,a){"use strict";a.r(t);var s=a(7294),r=a(1163),l=a(8997),i=a(1243),c=a(3615),o=a(9638),n=a(2076),u=a(478),d=a(1547),m=a(8062),p=a(7484),v=s.createElement;t.default=(0,c.Z)({ssr:!1})((function(){var e=(0,r.useRouter)().query.slug;if(!e)return v("div",null);var t=(0,l.a)(o.N4,{variables:{slug:e}}),a=t.data,s=t.loading,c=t.error,g=a&&a.product.single,h=a&&a.product.related,N=a&&a.product.prev,b=a&&a.product.next;return c?v("div",null):v("div",{className:"main"},v(n.Z,{prev:N,next:b,current:"Sidebar",fullWidth:!0}),v("div",{className:"page-content pb-3"},v("div",{className:"container-fluid skeleton-body horizontal"},v("div",{className:"row"},v("div",{className:"col-xxl-10 col-lg-9"},v("div",{className:"product-details-top mb-0"},v("div",{className:"row skel-pro-single fullwidth ".concat(s?"":"loaded")},v("div",{className:"col-md-6 col-lg-7"},v("div",{className:"skel-product-gallery"}),s?"":v(u.Z,{product:g,adClass:""})),v("div",{className:"col-md-6 col-lg-5"},v("div",{className:"entry-summary row"},v("div",{className:"col-md-12"},v("div",{className:"entry-summary1 mt-2 mt-md-0"})),v("div",{className:"col-md-12"},v("div",{className:"entry-summary2"}))),s?"":v(d.Z,{product:g}),v(m.Z,{product:g}))))),v("div",{className:"col-xxl-2 col-lg-3 skeleton-body"},v(i.Z,{className:"sticky-content skel-pro-single ".concat(s?"":"loaded"),offsetTop:70},v("div",{className:"skel-widget"}),v("div",{className:"skel-widget"}),v(p.Z,{products:h,loading:s})))))))}))},3404:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/fullwidth/[slug]",function(){return a(3757)}])}},function(e){e.O(0,[1243,2879,9774,2888,179],(function(){return t=3404,e(e.s=t);var t}));var t=e.O();_N_E=t}]);