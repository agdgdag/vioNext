(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4420],{2076:function(e,a,t){"use strict";var s=t(7294),i=t(1163),l=t(8335),r=s.createElement;function c(e){var a=(0,i.useRouter)(),t=e.prev,s=e.next,c=e.current,o=e.fullWidth;return r("nav",{className:"breadcrumb-nav border-0 mb-0"},r("div",{className:"d-flex align-items-center "+(void 0!==o&&o?"container-fluid":"container")},r("ol",{className:"breadcrumb"},r("li",{className:"breadcrumb-item"},r(l.Z,{href:"/"},"Home")),r("li",{className:"breadcrumb-item"},r(l.Z,{href:"/product/default/dark-yellow-lace-cut-out-swing-dress"},"Product")),r("li",{className:"breadcrumb-item active"},c)),r("nav",{className:"product-pager ml-auto"},t?r(l.Z,{href:{pathname:a.pathname,query:{slug:t.slug}},className:"product-pager-link product-pager-prev ".concat(s?"":"prev-only")},r("i",{className:"icon-angle-left"}),r("span",null,"Prev"),r("div",{className:"product-detail"},r("figure",null,r("img",{src:"https://d-themes.com/react_asset_api/molla"+t.sm_pictures[0].url,alt:"product",width:t.sm_pictures[0].width,height:t.sm_pictures[0].height})),r("h3",{className:"product-name mb-0"},t.name))):"",s?r(l.Z,{href:{pathname:a.pathname,query:{slug:s.slug}},className:"product-pager-link product-pager-next"},r("span",null,"Next"),r("i",{className:"icon-angle-right"}),r("div",{className:"product-detail"},r("figure",null,r("img",{src:"https://d-themes.com/react_asset_api/molla"+s.sm_pictures[0].url,alt:"product",width:s.sm_pictures[0].width,height:s.sm_pictures[0].height})),r("h3",{className:"product-name mb-0"},s.name))):"")))}a.Z=s.memo(c)},478:function(e,a,t){"use strict";var s=t(4047),i=t(7294),l=t(2879),r=i.createElement;function c(e){var a=e.product,t=e.adClass,c=void 0===t?"product-gallery-vertical":t,o=(0,i.useState)(!1),n=o[0],u=o[1],m=(0,i.useState)(0),d=m[0],p=m[1];return(0,i.useEffect)((function(){a&&(u(!1),p(0))}),[a]),a?r(i.Fragment,null,r("div",{className:"product-gallery ".concat(c)},r("div",{className:"row m-0"},r("figure",{className:"product-main-image",index:"0"},a.new?r("span",{className:"product-label label-new"},"New"):"",a.sale_price?r("span",{className:"product-label label-sale"},"Sale"):"",a.top?r("span",{className:"product-label label-top"},"Top"):"",a.stock&&0!=a.stock?"":r("span",{className:"product-label label-out"},"Out of Stock"),r(s.lb,{imageSrc:"https://d-themes.com/react_asset_api/molla"+a.pictures[0].url,imageAlt:"product",largeImageSrc:"https://d-themes.com/react_asset_api/molla"+a.pictures[0].url,dragToMove:!1,mouseActivation:"hover",cursorStyleActive:"crosshair",id:"product-zoom",className:"zoom-image position-relative overflow-hidden",width:a.pictures[0].width,height:a.pictures[0].height,style:{paddingTop:"".concat(a.pictures[0].height/a.pictures[0].width*100,"%")}}),r("button",{id:"btn-product-gallery",className:"btn-product-gallery",onClick:function(){var e=parseInt(document.querySelector(".product-main-image").getAttribute("index"));e||(e=0),u(!0),p(e)}},r("i",{className:"icon-arrows"}))),r("div",{id:"product-zoom-gallery",className:"product-image-gallery"},a.pictures.map((function(e,t){return r("button",{className:"product-gallery-item ".concat(0===t?"active":""),key:a.id+"-"+t,onClick:function(a){return function(e,a,t){for(var s=document.querySelectorAll(".product-main-image img"),i=0;i<s.length;i++)s[i].src=a;document.querySelector(".product-image-gallery .active").classList.remove("active"),document.querySelector(".product-main-image").setAttribute("index",t),e.currentTarget.classList.add("active")}(a,"".concat("https://d-themes.com/react_asset_api/molla"+e.url),t)}},r("div",{className:"img-wrapper h-100"},r("img",{src:"https://d-themes.com/react_asset_api/molla"+a.sm_pictures[t].url,alt:"product back"})))}))))),n?r(l.Z,{mainSrc:"https://d-themes.com/react_asset_api/molla"+a.pictures[d].url,nextSrc:"https://d-themes.com/react_asset_api/molla"+a.pictures[(d+1)%a.pictures.length].url,prevSrc:"https://d-themes.com/react_asset_api/molla"+a.pictures[(d+a.pictures.length-1)%a.pictures.length].url,onCloseRequest:function(){u(!1)},onMovePrevRequest:function(){p((d+1)%a.pictures.length)},onMoveNextRequest:function(){p((d+a.pictures.length-1)%a.pictures.length)},reactModalStyle:{overlay:{zIndex:1041}}}):""):r("div",null)}a.Z=i.memo(c)},439:function(e,a,t){"use strict";var s=t(7294),i=t(340),l=t(8335),r=s.createElement;function c(e){var a=e.product,t=function(e){e.preventDefault(),e.currentTarget.parentNode.querySelector(".active")&&e.currentTarget.parentNode.querySelector(".active").classList.remove("active"),e.currentTarget.classList.add("active")};return a?r(i.mQ,{selectedTabClassName:"show",selectedTabPanelClassName:"active show"},r("div",{className:"product-details-tab"},r(i.td,{className:"nav nav-pills justify-content-center"},r(i.OK,{className:"nav-item"},r("span",{className:"nav-link"}," Description")),r(i.OK,{className:"nav-item"},r("span",{className:"nav-link"}," Additional information")),r(i.OK,{className:"nav-item"},r("span",{className:"nav-link"},"Shipping & Returns")),r(i.OK,{className:"nav-item"},r("span",{className:"nav-link"},"Reviews (",a.review,")"))),r("div",{className:"tab-content"},r(i.x4,{className:"tab-pane"},r("div",{className:"product-desc-content"},r("h3",null,"Product Information"),r("p",{className:"pb-1"},"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. "),r("ul",null,r("li",null,"Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit. "),r("li",null,"Vivamus finibus vel mauris ut vehicula."),r("li",null,"Nullam a magna porttitor, dictum risus nec, faucibus sapien.")),r("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. "))),r(i.x4,{className:"tab-pane"},r("div",{className:"product-desc-content"},r("h3",null,"Information"),r("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. "),r("h3",{className:"pt-2"},"Fabric & care"),r("ul",null,r("li",null,"Faux suede fabric"),r("li",null,"Gold tone metal hoop handles."),r("li",null,"RI branding"),r("li",null,"Snake print trim interior "),r("li",null,"Adjustable cross body strap"),r("li",null," Height: 31cm; Width: 32cm; Depth: 12cm; Handle Drop: 61cm")),r("h3",null,"Size"),r("p",null,"one size"))),r(i.x4,{className:"tab-pane"},r("div",{className:"product-desc-content"},r("h3",null,"Delivery & returns"),r("p",null,"We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our ",r(l.Z,{href:"#"},"Delivery information"),r("br",null),"We hope you\u2019ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our ",r(l.Z,{href:"#"},"Returns information")))),r(i.x4,{className:"tab-pane"},r("div",{className:"reviews"},r("h3",null,"Reviews (2)"),r("div",{className:"review"},r("div",{className:"row no-gutters"},r("div",{className:"col-auto"},r("h4",null,r(l.Z,{href:"#"},"Samanta J.")),r("div",{className:"ratings-container"},r("div",{className:"ratings"},r("div",{className:"ratings-val",style:{width:20*a.ratings+"%"}}),r("span",{className:"tooltip-text"},a.ratings.toFixed(2)))),r("span",{className:"review-date mb-1"},"6 days ago")),r("div",{className:"col"},r("h4",null,"Good, perfect size"),r("div",{className:"review-content"},r("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!")),r("div",{className:"review-action"},r(l.Z,{href:"#"},r("i",{className:"icon-thumbs-up"}),"Helpful (2)"),r(l.Z,{href:"#"},r("i",{className:"icon-thumbs-down"}),"Unhelpful (0)"))))),r("div",{className:"review"},r("div",{className:"row no-gutters"},r("div",{className:"col-auto"},r("h4",null,r(l.Z,{href:"#"},"John Doe")),r("div",{className:"ratings-container"},r("div",{className:"ratings"},r("div",{className:"ratings-val",style:{width:20*a.ratings+"%"}}),r("span",{className:"tooltip-text"},a.ratings.toFixed(2)))),r("span",{className:"review-date mb-1"},"5 days ago")),r("div",{className:"col"},r("h4",null,"Very good"),r("div",{className:"review-content"},r("p",null,"Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!")),r("div",{className:"review-action"},r(l.Z,{href:"#"},r("i",{className:"icon-thumbs-up"}),"Helpful (0)"),r(l.Z,{href:"#"},r("i",{className:"icon-thumbs-down"}),"Unhelpful (0)")))))),r("div",{className:"reply"},r("div",{className:"title-wrapper text-left"},r("h3",{className:"title title-simple text-left text-normal"},"Add a Review"),r("p",null,"Your email address will not be published. Required fields are marked *")),r("div",{className:"rating-form"},r("label",{htmlFor:"rating",className:"text-dark"},"Your rating * "),r("span",{className:"rating-stars selected"},[1,2,3,4,5].map((function(e,a){return r("a",{className:"star-".concat(e),href:"#",onClick:t,key:"star-"+a},e)}))),r("select",{name:"rating",id:"rating",required:"",style:{display:"none"}},r("option",{value:""},"Rate\u2026"),r("option",{value:"5"},"Perfect"),r("option",{value:"4"},"Good"),r("option",{value:"3"},"Average"),r("option",{value:"2"},"Not that bad"),r("option",{value:"1"},"Very poor"))),r("form",{action:"#"},r("textarea",{id:"reply-message",cols:"30",rows:"6",className:"form-control mb-2",placeholder:"Comment *",required:!0}),r("div",{className:"row"},r("div",{className:"col-md-6"},r("input",{type:"text",className:"form-control",id:"reply-name",name:"reply-name",placeholder:"Name *",required:!0})),r("div",{className:"col-md-6"},r("input",{type:"email",className:"form-control",id:"reply-email",name:"reply-email",placeholder:"Email *",required:!0}))),r("div",{className:"form-checkbox d-flex align-items-start mb-2"},r("input",{type:"checkbox",className:"custom-checkbox",id:"signin-remember",name:"signin-remember"}),r("label",{className:"form-control-label ml-3",htmlFor:"signin-remember"},"Save my name, email, and website in this browser for the next time I comment.")),r("button",{type:"submit",className:"btn btn-primary"},"Submit"))))))):r("div",null)}a.Z=s.memo(c)},378:function(e,a,t){"use strict";var s=t(7294),i=t(6359),l=t(4138),r=t(8289),c=s.createElement;function o(e){var a=e.products;return c(s.Fragment,null,c("h2",{className:"title text-center mb-4"},"You May Also Like"),e.loading?c(l.Z,{adClass:"owl-simple carousel-equal-height carousel-with-shadow cols-xl-5 cols-lg-4 cols-md-3 cols-2",isTheme:!1,options:r.jc},[1,2,3,4].map((function(e,a){return c("div",{className:"skel-pro",key:a})}))):c(l.Z,{adClass:"owl-simple carousel-equal-height carousel-with-shadow cols-lg-4 cols-md-3 cols-xs-2 cols-1",isTheme:!1,options:r.jc},a.map((function(e,a){return c(i.Z,{product:e,key:a})}))))}a.Z=s.memo(o)},7832:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return q}});var s=t(7294),i=t(1163),l=t(8997),r=t(3615),c=t(9638),o=t(2076),n=t(478),u=t(6265),m=t(9999),d=t(8216),p=t(2954),v=t(8335),h=t(812),N=t(5708),f=t(2806),g=t(6442),b=s.createElement;function w(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function y(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?w(Object(t),!0).forEach((function(a){(0,u.Z)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var x=(0,d.$j)((function(e){return{cartlist:e.cartlist.data,wishlist:e.wishlist.data}}),y(y({},N.Nw),f.Nw))((function(e){var a=(0,i.useRouter)(),t=e.product,l=(0,s.useState)(1),r=l[0],c=l[1],o=(0,s.useState)([]),n=o[0],u=o[1],d=(0,s.useState)([]),N=d[0],f=d[1],w=(0,s.useState)([]),x=w[0],k=w[1],_=(0,s.useState)({color:null,colorName:null,price:null,size:""}),S=_[0],q=_[1],Z=(0,s.useState)(!1),z=Z[0],C=Z[1],D=(0,s.useState)(!1),O=D[0],F=D[1],E=(0,s.useState)(0),j=E[0],P=E[1],T=(0,s.useState)(99999),A=T[0],R=T[1];function L(){var e=(0,m.Z)(x);S.color&&(e=x.reduce((function(e,a){return S.color!==a.color?e:[].concat((0,m.Z)(e),[a])}),[])),f(e.reduce((function(e,a){return-1!==e.findIndex((function(e){return e.size==a.size}))?e:[].concat((0,m.Z)(e),[a])}),[])),e=(0,m.Z)(x),S.size&&(e=x.reduce((function(e,a){return S.size!==a.size?e:[].concat((0,m.Z)(e),[a])}),[])),u(t.variants.reduce((function(a,t){return-1==e.findIndex((function(e){return e.color==t.color}))?[].concat((0,m.Z)(a),[{color:t.color,colorName:t.color_name,price:t.price,disabled:!0}]):[].concat((0,m.Z)(a),[{color:t.color,colorName:t.color_name,price:t.price,disabled:!1}])}),[]))}return(0,s.useEffect)((function(){var e=99999,a=0;k(t.variants.reduce((function(t,s){return s.size.map((function(e){t.push({color:s.color,colorName:s.color_name,size:e.name,price:s.price})})),e>s.price&&(e=s.price),a<s.price&&(a=s.price),t}),[])),0==t.variants.length&&(e=t.sale_price?t.sale_price:t.price,a=t.price),R(e),P(a)}),[t]),(0,s.useEffect)((function(){q({color:null,colorName:null,price:null,size:""}),c(1)}),[a.query.slug]),(0,s.useEffect)((function(){L()}),[x,S]),(0,s.useEffect)((function(){C(!(!S.color&&""==S.size)),F(!(!S.color||""==S.size));var e=document.querySelector(".product-details-top .variation-toggle");e&&(S.color&&""!=S.size&&e.classList.contains("collapsed")&&e.click(),S.color&&""!=S.size||e.classList.contains("collapsed")||e.click())}),[S]),t?b("div",{className:"product-details product-details-centered"},b("h1",{className:"product-title"},t.name),b("div",{className:"ratings-container"},b("div",{className:"ratings"},b("div",{className:"ratings-val",style:{width:20*t.ratings+"%"}}),b("span",{className:"tooltip-text"},t.ratings.toFixed(2))),b("span",{className:"ratings-text"},"( ",t.review," Reviews )")),0==t.stock?b("div",{className:"product-price"},b("span",{className:"out-price"},A==j?b("span",null,"$",t.price.toFixed(2)):b("span",null,"$",A.toFixed(2),"\u2013$",j.toFixed(2)))):A==j?b("div",{className:"product-price"},"$",A.toFixed(2)):0==t.variants.length?b("div",{className:"product-price"},b("span",{className:"new-price"},"$",A.toFixed(2)),b("span",{className:"old-price"},"$",j.toFixed(2))):b("div",{className:"product-price"},"$",A.toFixed(2),"\u2013$",j.toFixed(2)),b("div",{className:"product-content"},b("p",null,t.short_desc)),t.variants.length>0?b(s.Fragment,null,b("div",{className:"details-filter-row details-row-size"},b("label",null,"Color:"),b("div",{className:"product-nav product-nav-dots"},n.map((function(e,a){return b("a",{href:"#",className:"".concat((e.color==S.color?"active ":"")+(e.disabled?"disabled":"")),style:{backgroundColor:e.color},key:a,onClick:function(a){return function(e,a){e.preventDefault(),a.color==S.color?q(y(y({},S),{},{color:null,colorName:null,price:a.price})):q(y(y({},S),{},{color:a.color,colorName:a.colorName,price:a.price}))}(a,e)}})})))),b("div",{className:"details-filter-row details-row-size"},b("label",{htmlFor:"size"},"Size:"),b("div",{className:"select-custom"},b("select",{name:"size",className:"form-control",value:S.size,onChange:function(e){""==e.target.value?q(y(y({},S),{},{size:""})):q(y(y({},S),{},{size:e.target.value}))}},b("option",{value:""},"Select a size"),N.map((function(e,a){return b("option",{value:e.size,key:a},e.size)})))),b(v.Z,{href:"#",className:"size-guide mr-4"},b("i",{className:"icon-th-list"}),"size guide"),z?b("a",{href:"#",onClick:function(e){e.preventDefault(),q(y(y({},S),{},{color:null,colorName:null,size:""})),L()}},"clear"):""),b(p.Z,{collapsed:!0},(function(e){var a=e.onToggle,t=e.setCollapsibleElement,s=e.toggleState;return b("div",null,b("button",{className:"d-none variation-toggle ".concat(s.toLowerCase()),onClick:a}),b("div",{ref:t,style:{overflow:"hidden"}},b("div",{className:"product-price"},"$",S.price?S.price.toFixed(2):0)))}))):"",b("div",{className:"product-details-action"},b("div",{className:"details-action-col"},b(h.Z,{changeQty:function(e){c(e)},max:t.stock,adClass:"mr-3 mr-sm-4"}),b("a",{href:"#",className:"btn-product btn-cart ".concat(!(0,g.qr)(e.cartlist,t,r)||t.variants.length>0&&!O?"btn-disabled":""),onClick:function(a){if(a.preventDefault(),!a.currentTarget.classList.contains("btn-disabled")){var s=y({},t);t.variants.length>0&&(s=y(y({},t),{},{name:t.name+" - "+S.colorName+", "+S.size,price:S.price})),e.addToCart(s,r)}}},b("span",null,"add to cart"))),b("div",{className:"details-action-wrapper"},(0,g.QY)(e.wishlist,t)?b(v.Z,{href:"/shop/wishlist",className:"btn-product btn-wishlist added-to-wishlist"},b("span",null,"Go to Wishlist")):b("a",{href:"#",className:"btn-product btn-wishlist",onClick:function(s){s.preventDefault(),(0,g.QY)(e.wishlist,t)?a.push("/pages/wishlist"):e.addToWishlist(t)}},b("span",null,"Add to Wishlist")))),b("div",{className:"product-details-footer"},b("div",{className:"product-cat"},b("span",null,"Category:"),t.category.map((function(e,a){return b("span",{key:a},b(v.Z,{href:{pathname:"/shop/sidebar/list",query:{category:e.slug}}},e.name),a<t.category.length-1?",":"")}))),b("div",{className:"social-icons social-icons-sm"},b("span",{className:"social-label"},"Share:"),b(v.Z,{href:"#",className:"social-icon",title:"Facebook"},b("i",{className:"icon-facebook-f"})),b(v.Z,{href:"#",className:"social-icon",title:"Twitter"},b("i",{className:"icon-twitter"})),b(v.Z,{href:"#",className:"social-icon",title:"Instagram"},b("i",{className:"icon-instagram"})),b(v.Z,{href:"#",className:"social-icon",title:"Pinterest"},b("i",{className:"icon-pinterest"}))))):b("div",null)})),k=t(439),_=t(378),S=s.createElement;var q=(0,r.Z)({ssr:!1})((function(){var e=(0,i.useRouter)().query.slug;if(!e)return S("div",null);var a=(0,l.a)(c.N4,{variables:{slug:e}}),t=a.data,s=a.loading,r=a.error,u=t&&t.product.single,m=t&&t.product.related,d=t&&t.product.prev,p=t&&t.product.next;return r?S("div",null):S("div",{className:"main"},S(o.Z,{prev:d,next:p,current:"Centered"}),S("div",{className:"page-content"},S("div",{className:"container skeleton-body"},S("div",{className:"product-details-top"},S("div",{className:"row skel-pro-single ".concat(s?"":"loaded")},S("div",{className:"col-md-6"},S("div",{className:"skel-product-gallery"}),s?"":S(n.Z,{product:u})),S("div",{className:"col-md-6"},S("div",{className:"entry-summary row"},S("div",{className:"col-md-12"},S("div",{className:"entry-summary1 mt-2 mt-md-0"})),S("div",{className:"col-md-12"},S("div",{className:"entry-summary2"}))),s?"":S(x,{product:u})))),s?S("div",{className:"skel-pro-tabs"}):S(k.Z,{product:u}),S(_.Z,{products:m,loading:s}))))}))},8779:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/centered/[slug]",function(){return t(7832)}])}},function(e){e.O(0,[917,340,2879,3671,9774,2888,179],(function(){return a=8779,e(e.s=a);var a}));var a=e.O();_N_E=a}]);