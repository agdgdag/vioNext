(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5505],{7882:function(e,t,a){"use strict";var s=a(7294),c=s.createElement;function l(e){var t=e.title,a=e.subTitle;return c("div",{className:"page-header text-center",style:{backgroundImage:"url(images/page-header-bg.jpg)"}},c("div",{className:"container"},c("h1",{className:"page-title"},t,c("span",null,a))))}t.Z=s.memo(l)},1921:function(e,t,a){"use strict";var s=a(6265),c=a(7294),l=a(1163),r=a(8216),o=a(2679),n=a(8335),i=a(5708),u=a(2806),p=a(9792),m=a(2870),d=a(6442),g=c.createElement;function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){(0,s.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.Z=(0,r.$j)((function(e){return{wishlist:e.wishlist.data,comparelist:e.comparelist.data}}),N(N(N(N({},i.Nw),u.Nw),p.Nw),m.Nw))((function(e){var t=(0,l.useRouter)(),a=e.product,s=e.wishlist,r=(0,c.useState)(0),i=r[0],u=r[1],p=(0,c.useState)(99999),m=p[0],b=p[1];return(0,c.useEffect)((function(){var e=m,t=i;a.variants.map((function(a){e>a.price&&(e=a.price),t<a.price&&(t=a.price)}),[]),0==a.variants.length&&(e=a.sale_price?a.sale_price:a.price,t=a.price),b(e),u(t)}),[]),g("div",{className:"product product-4 text-center"},g("figure",{className:"product-media"},a.new?g("span",{className:"product-label label-circle label-new"},"New"):"",a.sale_price?g("span",{className:"product-label label-circle label-sale"},"Sale"):"",a.top?g("span",{className:"product-label label-circle label-top"},"Top"):"",a.stock&&0!=a.stock?"":g("span",{className:"product-label label-circle label-out"},"Out of Stock"),g(n.Z,{href:"/product/default/".concat(a.slug)},g(o.LazyLoadImage,{alt:"product",src:"https://d-themes.com/react_asset_api/molla"+a.sm_pictures[0].url,threshold:500,effect:"black and white",wrapperClassName:"product-image"}),a.sm_pictures.length>=2?g(o.LazyLoadImage,{alt:"product",src:"https://d-themes.com/react_asset_api/molla"+a.sm_pictures[1].url,threshold:500,effect:"black and white",wrapperClassName:"product-image-hover"}):""),g("div",{className:"product-action-vertical"},(0,d.QY)(s,a)?g(n.Z,{href:"/shop/wishlist",className:"btn-product-icon btn-wishlist btn-expandable added-to-wishlist"},g("span",null,"go to wishlist")):g("a",{href:"#",className:"btn-product-icon btn-wishlist btn-expandable",onClick:function(s){s.preventDefault(),(0,d.QY)(e.wishlist,a)?t.push("/pages/wishlist"):e.addToWishlist(a)}},g("span",null,"add to wishlist"))),a.stock&&0!==a.stock?g("div",{className:"product-action"},a.variants.length>0?g(n.Z,{href:"/product/default/".concat(a.slug),className:"btn-product btn-cart btn-select"},g("span",null,"select options")):g("button",{className:"btn-product btn-cart",onClick:function(t){t.preventDefault(),e.addToCart(a)}},g("span",null,"add to cart"))):""),g("div",{className:"product-body"},g("div",{className:"product-cat"},a.category.map((function(e,t){return g(c.Fragment,{key:e.slug+"-"+t},g(n.Z,{href:{pathname:"/shop/sidebar/list",query:{category:e.slug}}},e.name),t<a.category.length-1?", ":"")}))),g("h3",{className:"product-title"},g(n.Z,{href:"/product/default/".concat(a.slug)},a.name)),a.stock&&0!=a.stock?m==i?g("div",{className:"product-price"},"$",m.toFixed(2)):0==a.variants.length?g("div",{className:"product-price"},g("span",{className:"new-price"},"$",m.toFixed(2)),g("span",{className:"old-price"},"$",i.toFixed(2))):g("div",{className:"product-price"},"$",m.toFixed(2),"\u2013$",i.toFixed(2)):g("div",{className:"product-price"},g("span",{className:"out-price"},"$",a.price.toFixed(2))),a.variants.length>0?g("div",{className:"product-nav product-nav-dots"},g("div",{className:"row no-gutters"},a.variants.map((function(e,t){return g(n.Z,{href:"#",style:{backgroundColor:e.color},key:t},g("span",{className:"sr-only"},"Color Name"))})))):""))}))},6683:function(e,t,a){"use strict";var s=a(7294),c=a(8335),l=s.createElement;t.Z=function(){return l("div",{className:"container mb-5"},l("div",{className:"row elements"},l("div",{className:"col-xl-5col col-lg-4 col-md-3 col-6"},l(c.Z,{href:"/elements/accordions",className:"element-type"},l("div",{className:"element"},l("i",{className:"element-img",style:{backgroundImage:"url('images/elements.png')"}}),l("i",{className:"element-hover-img",style:{backgroundImage:"url('images/elements.png')"}}),l("p",null,"accordions")))),l("div",{className:"col-xl-5col col-lg-4 col-md-3 col-6"},l(c.Z,{href:"/elements/banners",className:"element-type"},l("div",{className:"element"},l("i",{className:"element-img",style:{backgroundImage:"url('images/elements.png')"}}),l("i",{className:"element-hover-img",style:{backgroundImage:"url('images/elements.png')"}}),l("p",null,"banners")))),l("div",{className:"col-xl-5col col-lg-4 col-md-3 col-6"},l(c.Z,{href:"/elements/blog-posts",className:"element-type"},l("div",{className:"element"},l("i",{className:"element-img",style:{backgroundImage:"url('images/elements.png')"}}),l("i",{className:"element-hover-img",style:{backgroundImage:"url('images/elements.png')"}}),l("p",null,"blog posts")))),l("div",{className:"col-xl-5col col-lg-4 col-md-3 col-6"},l(c.Z,{href:"/elements/buttons",className:"element-type"},l("div",{className:"element"},l("i",{className:"element-img",style:{backgroundImage:"url('images/elements.png')"}}),l("i",{className:"element-hover-img",style:{backgroundImage:"url('images/elements.png')"}}),l("p",null,"buttons")))),l("div",{className:"col-xl-5col col-lg-4 col-md-3 col-6"},l(c.Z,{href:"/elements/cta",className:"element-type"},l("div",{className:"element"},l("i",{className:"element-img",style:{backgroundImage:"url('images/elements.png')"}}),l("i",{className:"element-hover-img",style:{backgroundImage:"url('images/elements.png')"}}),l("p",null,"call to action")))),l("div",{className:"col-xl-5col col-lg-4 col-md-3 col-6"},l(c.Z,{href:"/elements/icon-boxes",className:"element-type"},l("div",{className:"element"},l("i",{className:"element-img",style:{backgroundImage:"url('images/elements.png')"}}),l("i",{className:"element-hover-img",style:{backgroundImage:"url('images/elements.png')"}}),l("p",null,"icon boxes")))),l("div",{className:"col-xl-5col col-lg-4 col-md-3 col-6"},l(c.Z,{href:"/elements/categories",className:"element-type"},l("div",{className:"element"},l("i",{className:"element-img",style:{backgroundImage:"url('images/elements.png')"}}),l("i",{className:"element-hover-img",style:{backgroundImage:"url('images/elements.png')"}}),l("p",null,"product catigories")))),l("div",{className:"col-xl-5col col-lg-4 col-md-3 col-6"},l(c.Z,{href:"/elements/products",className:"element-type"},l("div",{className:"element"},l("i",{className:"element-img",style:{backgroundImage:"url('images/elements.png')"}}),l("i",{className:"element-hover-img",style:{backgroundImage:"url('images/elements.png')"}}),l("p",null,"products")))),l("div",{className:"col-xl-5col col-lg-4 col-md-3 col-6"},l(c.Z,{href:"/elements/tabs",className:"element-type"},l("div",{className:"element"},l("i",{className:"element-img",style:{backgroundImage:"url('images/elements.png')"}}),l("i",{className:"element-hover-img",style:{backgroundImage:"url('images/elements.png')"}}),l("p",null,"tabs")))),l("div",{className:"col-xl-5col col-lg-4 col-md-3 col-6"},l(c.Z,{href:"/elements/testimonials",className:"element-type"},l("div",{className:"element"},l("i",{className:"element-img",style:{backgroundImage:"url('images/elements.png')"}}),l("i",{className:"element-hover-img",style:{backgroundImage:"url('images/elements.png')"}}),l("p",null,"testimonials")))),l("div",{className:"col-xl-5col col-lg-4 col-md-3 col-6"},l(c.Z,{href:"/elements/titles",className:"element-type"},l("div",{className:"element"},l("i",{className:"element-img",style:{backgroundImage:"url('images/elements.png')"}}),l("i",{className:"element-hover-img",style:{backgroundImage:"url('images/elements.png')"}}),l("p",null,"titles")))),l("div",{className:"col-xl-5col col-lg-4 col-md-3 col-6"},l(c.Z,{href:"/elements/typography",className:"element-type"},l("div",{className:"element"},l("i",{className:"element-img",style:{backgroundImage:"url('images/elements.png')"}}),l("i",{className:"element-hover-img",style:{backgroundImage:"url('images/elements.png')"}}),l("p",null,"typography")))),l("div",{className:"col-xl-5col col-lg-4 col-md-3 col-6"},l(c.Z,{href:"/elements/video-banners",className:"element-type"},l("div",{className:"element"},l("i",{className:"element-img",style:{backgroundImage:"url('images/elements.png')"}}),l("i",{className:"element-hover-img",style:{backgroundImage:"url('images/elements.png')"}}),l("p",null,"video"))))))}},2584:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return W}});var s=a(7294),c=a(8997),l=a(8335),r=a(7882),o=a(6683),n=a(4138),i=a(6265),u=a(1163),p=a(8216),m=a(2679),d=a(5708),g=a(2806),b=a(9792),N=a(2870),h=a(6442),v=s.createElement;function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){(0,i.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var y=(0,p.$j)((function(e){return{wishlist:e.wishlist.data,comparelist:e.comparelist.data}}),w(w(w(w({},d.Nw),g.Nw),b.Nw),N.Nw))((function(e){(0,u.useRouter)();var t=e.product,a=(e.wishlist,(0,s.useState)(0)),c=a[0],r=a[1],o=(0,s.useState)(99999),n=o[0],i=o[1];function p(a){a.preventDefault(),e.showQuickView(t.slug)}return(0,s.useEffect)((function(){var e=n,a=c;t.variants.map((function(t){e>t.price&&(e=t.price),a<t.price&&(a=t.price)}),[]),0==t.variants.length&&(e=t.sale_price?t.sale_price:t.price,a=t.price),i(e),r(a)}),[]),v("div",{className:"product text-center no-span"},v("figure",{className:"product-media"},t.new?v("span",{className:"product-label label-new"},"New"):"",t.sale_price?v("span",{className:"product-label label-sale"},"Sale"):"",t.top?v("span",{className:"product-label label-top"},"Top"):"",t.stock&&0!=t.stock?"":v("span",{className:"product-label label-out"},"Out of Stock"),v(l.Z,{href:"/product/default/".concat(t.slug)},v(m.LazyLoadImage,{alt:"product",src:"https://d-themes.com/react_asset_api/molla"+t.sm_pictures[0].url,threshold:500,effect:"black and white",wrapperClassName:"product-image"}),t.sm_pictures.length>=2?v(m.LazyLoadImage,{alt:"product",src:"https://d-themes.com/react_asset_api/molla"+t.sm_pictures[1].url,threshold:500,effect:"black and white",wrapperClassName:"product-image-hover"}):""),t.stock&&0!==t.stock?v("div",{className:"product-action"},t.variants.length>0?v(l.Z,{href:"/product/default/".concat(t.slug),className:"btn-product btn-cart btn-select"},v("span",null,"select options")):v("button",{className:"btn-product btn-cart",onClick:function(a){a.preventDefault(),e.addToCart(t)}},v("span",null,"add to cart")),v("button",{className:"btn-product btn-quickview",title:"Quick View",onClick:p},v("span",null,"quick view"))):v("div",{className:"product-action"},v("button",{className:"btn-product btn-quickview",title:"Quick View",onClick:p},v("span",null,"quick view")))),v("div",{className:"product-body"},v("div",{className:"product-cat"},t.category.map((function(e,a){return v(s.Fragment,{key:e.slug+"-"+a},v(l.Z,{href:{pathname:"/shop/sidebar/list",query:{category:e.slug}}},e.name),a<t.category.length-1?", ":"")}))),v("h3",{className:"product-title"},v(l.Z,{href:"/product/default/".concat(t.slug)},t.name)),t.stock&&0!=t.stock?n==c?v("div",{className:"product-price"},"$",n.toFixed(2)):0==t.variants.length?v("div",{className:"product-price"},v("span",{className:"new-price"},"$",n.toFixed(2)),v("span",{className:"old-price"},"$",c.toFixed(2))):v("div",{className:"product-price"},"$",n.toFixed(2),"\u2013$",c.toFixed(2)):v("div",{className:"product-price"},v("span",{className:"out-price"},"$",t.price.toFixed(2))),v("div",{className:"ratings-container"},v("div",{className:"ratings"},v("div",{className:"ratings-val",style:{width:20*t.ratings+"%"}}),v("span",{className:"tooltip-text"},t.ratings.toFixed(2))),v("span",{className:"ratings-text"},"( ",t.review," Reviews )")),t.variants.length>0?v("div",{className:"product-nav product-nav-dots"},v("div",{className:"row no-gutters"},t.variants.map((function(e,t){return v(l.Z,{href:"#",style:{backgroundColor:e.color},key:t},v("span",{className:"sr-only"},"Color Name"))})))):""))})),k=s.createElement;function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(Object(a),!0).forEach((function(t){(0,i.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var j=(0,p.$j)((function(e){return{wishlist:e.wishlist.data,comparelist:e.comparelist.data}}),x(x(x(x({},d.Nw),g.Nw),b.Nw),N.Nw))((function(e){var t=(0,u.useRouter)(),a=e.product,c=e.wishlist,r=(0,s.useState)(0),o=r[0],n=r[1],i=(0,s.useState)(99999),p=i[0],d=i[1];function g(t){t.preventDefault(),e.showQuickView(a.slug)}return(0,s.useEffect)((function(){var e=p,t=o;a.variants.map((function(a){e>a.price&&(e=a.price),t<a.price&&(t=a.price)}),[]),0==a.variants.length&&(e=a.sale_price?a.sale_price:a.price,t=a.price),d(e),n(t)}),[]),k("div",{className:"product"},k("figure",{className:"product-media"},a.new?k("span",{className:"product-label label-new"},"New"):"",a.sale_price?k("span",{className:"product-label label-sale"},"Sale"):"",a.top?k("span",{className:"product-label label-top"},"Top"):"",a.stock&&0!=a.stock?"":k("span",{className:"product-label label-out"},"Out of Stock"),k(l.Z,{href:"/product/default/".concat(a.slug)},k(m.LazyLoadImage,{alt:"product",src:"https://d-themes.com/react_asset_api/molla"+a.sm_pictures[0].url,threshold:500,effect:"black and white",wrapperClassName:"product-image"}),a.sm_pictures.length>=2?k(m.LazyLoadImage,{alt:"product",src:"https://d-themes.com/react_asset_api/molla"+a.sm_pictures[1].url,threshold:500,effect:"black and white",wrapperClassName:"product-image-hover"}):""),a.stock&&0!==a.stock?k("div",{className:"product-action action-icon-top"},a.variants.length>0?k(l.Z,{href:"/product/default/".concat(a.slug),className:"btn-product btn-cart btn-select"},k("span",null,"select options")):k("button",{className:"btn-product btn-cart",onClick:function(t){t.preventDefault(),e.addToCart(a)}},k("span",null,"add to cart")),k("button",{className:"btn-product btn-quickview",title:"Quick View",onClick:g},k("span",null,"quick view")),k("button",{className:"btn-product btn-compare",title:"Compare",onClick:function(t){t.preventDefault(),(0,h.V4)(e.comparelist,a)||e.addToCompare(a)}},k("span",null,"compare"))):k("div",{className:"product-action action-icon-top"},k("button",{className:"btn-product btn-quickview",title:"Quick View",onClick:g},k("span",null,"quick view")))),k("div",{className:"product-body product-action-inner"},(0,h.QY)(c,a)?k(l.Z,{href:"/shop/wishlist",className:"btn-product btn-wishlist added-to-wishlist"},k("span",null,"go to wishlist")):k("a",{href:"#",className:"btn-product btn-wishlist",onClick:function(s){s.preventDefault(),(0,h.QY)(e.wishlist,a)?t.push("/pages/wishlist"):e.addToWishlist(a)}},k("span",null,"add to wishlist")),k("div",{className:"product-cat"},a.category.map((function(e,t){return k(s.Fragment,{key:e.slug+"-"+t},k(l.Z,{href:{pathname:"/shop/sidebar/list",query:{category:e.slug}}},e.name),t<a.category.length-1?", ":"")}))),k("h3",{className:"product-title"},k(l.Z,{href:"/product/default/".concat(a.slug)},a.name)),a.stock&&0!=a.stock?p==o?k("div",{className:"product-price"},"$",p.toFixed(2)):0==a.variants.length?k("div",{className:"product-price"},k("span",{className:"new-price"},"$",p.toFixed(2)),k("span",{className:"old-price"},"$",o.toFixed(2))):k("div",{className:"product-price"},"$",p.toFixed(2),"\u2013$",o.toFixed(2)):k("div",{className:"product-price"},k("span",{className:"out-price"},"$",a.price.toFixed(2))),k("div",{className:"ratings-container"},k("div",{className:"ratings"},k("div",{className:"ratings-val",style:{width:20*a.ratings+"%"}}),k("span",{className:"tooltip-text"},a.ratings.toFixed(2))),k("span",{className:"ratings-text"},"( ",a.review," Reviews )")),a.variants.length>0?k("div",{className:"product-nav product-nav-dots"},k("div",{className:"row no-gutters"},a.variants.map((function(e,t){return k(l.Z,{href:"#",style:{backgroundColor:e.color},key:t},k("span",{className:"sr-only"},"Color Name"))})))):""))})),_=s.createElement;function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function Z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(Object(a),!0).forEach((function(t){(0,i.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var P=(0,p.$j)((function(e){return{wishlist:e.wishlist.data,comparelist:e.comparelist.data}}),Z(Z(Z(Z({},d.Nw),g.Nw),b.Nw),N.Nw))((function(e){var t=(0,u.useRouter)(),a=e.product,c=e.wishlist,r=(0,s.useState)(0),o=r[0],n=r[1],i=(0,s.useState)(99999),p=i[0],d=i[1];function g(t){t.preventDefault(),e.showQuickView(a.slug)}return(0,s.useEffect)((function(){var e=p,t=o;a.variants.map((function(a){e>a.price&&(e=a.price),t<a.price&&(t=a.price)}),[]),0==a.variants.length&&(e=a.sale_price?a.sale_price:a.price,t=a.price),d(e),n(t)}),[]),_("div",{className:"product product-2"},_("figure",{className:"product-media"},a.new?_("span",{className:"product-label label-circle label-new"},"New"):"",a.sale_price?_("span",{className:"product-label label-circle label-sale"},"Sale"):"",a.top?_("span",{className:"product-label label-circle label-top"},"Top"):"",a.stock&&0!=a.stock?"":_("span",{className:"product-label label-circle label-out"},"Out of Stock"),_(l.Z,{href:"/product/default/".concat(a.slug)},_(m.LazyLoadImage,{alt:"product",src:"https://d-themes.com/react_asset_api/molla"+a.sm_pictures[0].url,threshold:500,effect:"black and white",wrapperClassName:"product-image"}),a.sm_pictures.length>=2?_(m.LazyLoadImage,{alt:"product",src:"https://d-themes.com/react_asset_api/molla"+a.sm_pictures[1].url,threshold:500,effect:"black and white",wrapperClassName:"product-image-hover"}):""),a.stock>0?_("div",{className:"product-action-vertical"},(0,h.QY)(c,a)?_(l.Z,{href:"/shop/wishlist",className:"btn-product-icon btn-wishlist btn-expandable added-to-wishlist"},_("span",null,"go to wishlist")):_("a",{href:"#",className:"btn-product-icon btn-wishlist btn-expandable",onClick:function(s){s.preventDefault(),(0,h.QY)(e.wishlist,a)?t.push("/pages/wishlist"):e.addToWishlist(a)}},_("span",null,"add to wishlist"))):"",a.stock&&0!==a.stock?_("div",{className:"product-action product-action-dark"},a.variants.length>0?_(l.Z,{href:"/product/default/".concat(a.slug),className:"btn-product btn-cart btn-select"},_("span",null,"select options")):_("button",{className:"btn-product btn-cart",onClick:function(t){t.preventDefault(),e.addToCart(a)}},_("span",null,"add to cart")),_("button",{className:"btn-product btn-quickview",title:"Quick View",onClick:g},_("span",null,"quick view"))):_("div",{className:"product-action product-action-dark"},_("button",{className:"btn-product btn-quickview",title:"Quick View",onClick:g},_("span",null,"quick view")))),_("div",{className:"product-body"},_("div",{className:"product-cat"},a.category.map((function(e,t){return _(s.Fragment,{key:e.slug+"-"+t},_(l.Z,{href:{pathname:"/shop/sidebar/list",query:{category:e.slug}}},e.name),t<a.category.length-1?", ":"")}))),_("h3",{className:"product-title"},_(l.Z,{href:"/product/default/".concat(a.slug)},a.name)),a.stock&&0!=a.stock?p==o?_("div",{className:"product-price"},"$",p.toFixed(2)):0==a.variants.length?_("div",{className:"product-price"},_("span",{className:"new-price"},"$",p.toFixed(2)),_("span",{className:"old-price"},"$",o.toFixed(2))):_("div",{className:"product-price"},"$",p.toFixed(2),"\u2013$",o.toFixed(2)):_("div",{className:"product-price"},_("span",{className:"out-price"},"$",a.price.toFixed(2))),_("div",{className:"ratings-container"},_("div",{className:"ratings"},_("div",{className:"ratings-val",style:{width:20*a.ratings+"%"}}),_("span",{className:"tooltip-text"},a.ratings.toFixed(2))),_("span",{className:"ratings-text"},"( ",a.review," Reviews )")),a.variants.length>0?_("div",{className:"product-nav product-nav-dots"},_("div",{className:"row no-gutters"},a.variants.map((function(e,t){return _(l.Z,{href:"#",style:{backgroundColor:e.color},key:t},_("span",{className:"sr-only"},"Color Name"))})))):""))})),F=s.createElement;function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(Object(a),!0).forEach((function(t){(0,i.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var $=(0,p.$j)((function(e){return{wishlist:e.wishlist.data,comparelist:e.comparelist.data}}),D(D(D(D({},d.Nw),g.Nw),b.Nw),N.Nw))((function(e){var t=(0,u.useRouter)(),a=(0,s.useRef)(null),c=e.product,r=e.wishlist,o=(0,s.useState)(0),n=o[0],i=o[1],p=(0,s.useState)(99999),d=p[0],g=p[1];function b(a){a.preventDefault(),(0,h.QY)(e.wishlist,c)?t.push("/pages/wishlist"):e.addToWishlist(c)}function N(t){t.preventDefault(),e.showQuickView(c.slug)}function v(){var e=a.current.offsetHeight-(a.current.querySelector(".product-body").offsetHeight+a.current.querySelector(".product-media").offsetHeight),t=a.current.querySelector(".product-footer").offsetHeight-e;a.current.querySelector(".product-footer").setAttribute("style","visibility: visible; transform: translateY(0);"),a.current.querySelector(".product-body").setAttribute("style","transform: translateY("+-t+"px)")}function f(){a.current.querySelector(".product-footer").setAttribute("style","visibility: hidden; transform: translateY(100%);"),a.current.querySelector(".product-body").setAttribute("style","transform: translateY(0)")}return(0,s.useEffect)((function(){var e=d,t=n;c.variants.map((function(a){e>a.price&&(e=a.price),t<a.price&&(t=a.price)}),[]),0==c.variants.length&&(e=c.sale_price?c.sale_price:c.price,t=c.price),g(e),i(t),a.current.addEventListener("mouseover",v,{passive:!0}),a.current.addEventListener("mouseleave",f,{passive:!0})}),[]),F("div",{className:"product product-3",ref:a},F("figure",{className:"product-media"},c.new?F("span",{className:"product-label label-new"},"New"):"",c.sale_price?F("span",{className:"product-label label-sale"},"Sale"):"",c.top?F("span",{className:"product-label label-top"},"Top"):"",c.stock&&0!=c.stock?"":F("span",{className:"product-label label-out"},"Out of Stock"),F(l.Z,{href:"/product/default/".concat(c.slug)},F(m.LazyLoadImage,{alt:"product",src:"https://d-themes.com/react_asset_api/molla"+c.sm_pictures[0].url,threshold:500,effect:"black and white",wrapperClassName:"product-image"}),c.sm_pictures.length>=2?F(m.LazyLoadImage,{alt:"product",src:"https://d-themes.com/react_asset_api/molla"+c.sm_pictures[1].url,threshold:500,effect:"black and white",wrapperClassName:"product-image-hover"}):""),c.stock>0?F("div",{className:"product-action-vertical"},(0,h.QY)(r,c)?F(l.Z,{href:"/shop/wishlist",className:"btn-product-icon btn-wishlist btn-expandable added-to-wishlist"},F("span",null,"go to wishlist")):F("a",{href:"#",className:"btn-product-icon btn-wishlist btn-expandable",onClick:b},F("span",null,"add to wishlist")),F("a",{href:"#",className:"btn-product-icon btn-quickview",title:"Quick View",onClick:N},F("span",null,"quick view")),F("a",{href:"#",className:"btn-product-icon btn-compare",onClick:function(t){t.preventDefault(),(0,h.V4)(e.comparelist,c)||e.addToCompare(c)}},F("span",null,"compare"))):F("div",{className:"product-action-vertical"},(0,h.QY)(r,c)?F(l.Z,{href:"/shop/wishlist",className:"btn-product-icon btn-wishlist btn-expandable added-to-wishlist"},F("span",null,"go to wishlist")):F("a",{href:"#",className:"btn-product-icon btn-wishlist btn-expandable",onClick:b},F("span",null,"add to wishlist")),F("a",{href:"#",className:"btn-product-icon btn-quickview",title:"Quick View",onClick:N},F("span",null,"quick view")))),F("div",{className:"product-body"},c.stock&&0!==c.stock?F("div",{className:"product-action"},c.variants.length>0?F(l.Z,{href:"/product/default/".concat(c.slug),className:"btn-product btn-cart btn-select"},F("span",null,"select options")):F("button",{className:"btn-product btn-cart",onClick:function(t){t.preventDefault(),e.addToCart(c)}},F("span",null,"add to cart"))):"",F("div",{className:"product-cat"},c.category.map((function(e,t){return F(s.Fragment,{key:e.slug+"-"+t},F(l.Z,{href:{pathname:"/shop/sidebar/list",query:{category:e.slug}}},e.name),t<c.category.length-1?", ":"")}))),F("h3",{className:"product-title"},F(l.Z,{href:"/product/default/".concat(c.slug)},c.name)),c.stock&&0!=c.stock?d==n?F("div",{className:"product-price"},"$",d.toFixed(2)):0==c.variants.length?F("div",{className:"product-price"},F("span",{className:"new-price"},"$",d.toFixed(2)),F("span",{className:"old-price"},"$",n.toFixed(2))):F("div",{className:"product-price"},"$",d.toFixed(2),"\u2013$",n.toFixed(2)):F("div",{className:"product-price"},F("span",{className:"out-price"},"$",c.price.toFixed(2)))),F("div",{className:"product-footer"},F("div",{className:"ratings-container"},F("div",{className:"ratings"},F("div",{className:"ratings-val",style:{width:20*c.ratings+"%"}}),F("span",{className:"tooltip-text"},c.ratings.toFixed(2))),F("span",{className:"ratings-text"},"( ",c.review," Reviews )")),c.variants.length>0?F("div",{className:"product-nav product-nav-dots"},F("div",{className:"row no-gutters"},c.variants.map((function(e,t){return F(l.Z,{href:"#",style:{backgroundColor:e.color},key:t},F("span",{className:"sr-only"},"Color Name"))})))):""))})),I=a(1921),E=a(6359),q=s.createElement;function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function Q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(Object(a),!0).forEach((function(t){(0,i.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var T=(0,p.$j)((function(e){return{wishlist:e.wishlist.data,comparelist:e.comparelist.data}}),Q(Q(Q(Q({},d.Nw),g.Nw),b.Nw),N.Nw))((function(e){var t=(0,u.useRouter)(),a=e.product,c=e.wishlist,r=(0,s.useState)(0),o=r[0],n=r[1],i=(0,s.useState)(99999),p=i[0],d=i[1];return(0,s.useEffect)((function(){var e=p,t=o;a.variants.map((function(a){e>a.price&&(e=a.price),t<a.price&&(t=a.price)}),[]),0==a.variants.length&&(e=a.sale_price?a.sale_price:a.price,t=a.price),d(e),n(t)}),[]),q("div",{className:"product product-6 no-span"},q("figure",{className:"product-media"},a.new?q("span",{className:"product-label"},"New"):"",a.sale_price?q("span",{className:"product-label"},"Sale"):"",a.top?q("span",{className:"product-label"},"Top"):"",a.stock&&0!=a.stock?"":q("span",{className:"product-label"},"Out of Stock"),q(l.Z,{href:"/product/default/".concat(a.slug)},q(m.LazyLoadImage,{alt:"product",src:"https://d-themes.com/react_asset_api/molla"+a.sm_pictures[0].url,threshold:500,effect:"black and white",wrapperClassName:"product-image"}),a.sm_pictures.length>=2?q(m.LazyLoadImage,{alt:"product",src:"https://d-themes.com/react_asset_api/molla"+a.sm_pictures[1].url,threshold:500,effect:"black and white",wrapperClassName:"product-image-hover"}):""),q("div",{className:"product-action-vertical"},(0,h.QY)(c,a)?q(l.Z,{href:"/shop/wishlist",className:"btn-product-icon btn-wishlist btn-expandable added-to-wishlist"},q("span",null,"go to wishlist")):q("a",{href:"#",className:"btn-product-icon btn-wishlist btn-expandable",onClick:function(s){s.preventDefault(),(0,h.QY)(e.wishlist,a)?t.push("/pages/wishlist"):e.addToWishlist(a)}},q("span",null,"add to wishlist")))),q("div",{className:"product-body"},q("div",{className:"product-cat"},a.category.map((function(e,t){return q(s.Fragment,{key:e.slug+"-"+t},q(l.Z,{href:{pathname:"/shop/sidebar/list",query:{category:e.slug}}},e.name),t<a.category.length-1?", ":"")}))),q("h3",{className:"product-title"},q(l.Z,{href:"/product/default/".concat(a.slug)},a.name)),a.stock&&0!=a.stock?p==o?q("div",{className:"product-price"},"$",p.toFixed(2)):0==a.variants.length?q("div",{className:"product-price"},q("span",{className:"new-price"},"$",p.toFixed(2)),q("span",{className:"old-price"},"$",o.toFixed(2))):q("div",{className:"product-price"},"$",p.toFixed(2),"\u2013$",o.toFixed(2)):q("div",{className:"product-price"},q("span",{className:"out-price"},"$",a.price.toFixed(2))),q("div",{className:"ratings-container d-none d-xl-block"},q("div",{className:"ratings"},q("div",{className:"ratings-val",style:{width:20*a.ratings+"%"}}),q("span",{className:"tooltip-text"},a.ratings.toFixed(2))),q("span",{className:"ratings-text"},"( ",a.review," Reviews )")),a.stock&&0!==a.stock?q("div",{className:"product-action"},a.variants.length>0?q(l.Z,{href:"/product/default/".concat(a.slug),className:"btn-product btn-cart btn-select"},q("span",null,"select options")):q("button",{className:"btn-product btn-cart",onClick:function(t){t.preventDefault(),e.addToCart(a)}},q("span",null,"add to cart")),q("button",{className:"btn-product btn-quickview",title:"Quick View",onClick:function(t){t.preventDefault(),e.showQuickView(a.slug)}},q("span",null,"quick view"))):""))})),V=a(3615),Y=a(9638),z=a(8289),R=s.createElement;var W=(0,V.Z)({ssr:!1})((function(){var e=(0,c.a)(Y.xg),t=e.data,a=e.loading,s=e.error,i=t&&t.elementProducts,u=t&&t.elementProducts.slice(0,3),p=t&&t.elementProducts.slice(0,4),m=t&&t.elementProducts.slice(0,5);return s?R("div",null,s):R("div",{className:"main"},R(r.Z,{title:"Products",subTitle:"Elements"}),R("nav",{className:"breadcrumb-nav"},R("div",{className:"container"},R("ol",{className:"breadcrumb"},R("li",{className:"breadcrumb-item"},R(l.Z,{href:"/"},"Home")),R("li",{className:"breadcrumb-item"},R(l.Z,{href:"/elements"},"Elements")),R("li",{className:"breadcrumb-item active"},"Products")))),R("div",{className:"page-content skeleton-body"},R("div",{className:"container"},R("h2",{className:"title text-center mb-3"},"3 Columns Large"),R("div",{className:"row"},a?[1,2,3].map((function(e,t){return R("div",{className:"col-6 col-md-4 col-lg-4 mb-2",key:t},R("div",{className:"skel-pro"}))})):u.map((function(e,t){return R("div",{className:"col-6 col-md-4 col-lg-4",key:"one_".concat(t)},R(y,{product:e}))}))),R("hr",{className:"mt-1 mb-5"}),R("h2",{className:"title text-center mb-3"},"4 Columns Carousel"),R(n.Z,{adClass:"owl-simple carousel-equal-height carousel-with-shadow cols-xl-4 cols-lg-3 cols-2",options:z.XP},a?[1,2,3,4].map((function(e,t){return R("div",{className:"skel-pro",key:t})})):p.map((function(e,t){return R(j,{product:e,key:t})}))),R("hr",{className:"mt-3 mb-5"}),R("h2",{className:"title text-center mb-3"},"4 Columns Carousel 2"),R(n.Z,{adClass:"owl-simple carousel-equal-height carousel-with-shadow cols-xl-4 cols-lg-3 cols-2",options:z.XP},a?[1,2,3,4].map((function(e,t){return R("div",{className:"skel-pro",key:t})})):p.map((function(e,t){return R(P,{product:e,key:t})}))),R("hr",{className:"mt-3 mb-5"}),R("h2",{className:"title text-center mb-3"},"4 Columns Simple"),R("div",{className:"row"},a?[1,2,3,4].map((function(e,t){return R("div",{className:"col-6 col-md-4 col-lg-3 mb-2",key:t},R("div",{className:"skel-pro"}))})):p.map((function(e,t){return R("div",{className:"col-6 col-md-4 col-lg-3",key:t},R($,{product:e}))}))),R("hr",{className:"mt-2 mb-5"}),R("h2",{className:"title text-center mb-3"},"5 Columns Simple"),R(n.Z,{adClass:"owl-simple carousel-equal-height carousel-with-shadow cols-xl-5 cols-lg-4 cols-md-3 cols-2",options:z.s1},a?[1,2,3,4,5].map((function(e,t){return R("div",{className:"skel-pro",key:t})})):m.map((function(e,t){return R(I.Z,{product:e,key:t})}))),R("hr",{className:"mt-0 mb-5"})),R("div",{className:"container-fluid"},R("h2",{className:"title text-center mb-3"},"Fullwidth"),R("div",{className:"row"},a?[1,2,3,4].map((function(e,t){return R("div",{className:"col-6 col-md-4 col-lg-3 col-xl-2 mb-2",key:t},R("div",{className:"skel-pro"}))})):i.map((function(e,t){return R("div",{className:"col-6 col-md-4 col-lg-3 col-xl-2",key:t},R(E.Z,{product:e}))})))),R("div",{className:"container"},R("hr",{className:"mt-2 mb-5"}),R("h2",{className:"title text-center mb-3"},"4 Columns Without Space"),R("div",{className:"row no-gutters"},a?[1,2,3,4].map((function(e,t){return R("div",{className:"col-sm-6 col-12 col-md-4 col-lg-3 mb-2",key:t},R("div",{className:"skel-pro"}))})):p.map((function(e,t){return R("div",{className:"col-sm-6 col-12 col-md-4 col-lg-3",key:t},R(T,{product:e}))}))))),R(o.Z,null))}))},6092:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/elements/products",function(){return a(2584)}])}},function(e){e.O(0,[917,3671,9774,2888,179],(function(){return t=6092,e(e.s=t);var t}));var t=e.O();_N_E=t}]);