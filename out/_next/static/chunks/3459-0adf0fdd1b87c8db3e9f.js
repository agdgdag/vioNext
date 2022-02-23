(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3459],{7882:function(n,e,t){"use strict";var r=t(7294),a=r.createElement;function o(n){var e=n.title,t=n.subTitle;return a("div",{className:"page-header text-center",style:{backgroundImage:"url(images/page-header-bg.jpg)"}},a("div",{className:"container"},a("h1",{className:"page-title"},e,a("span",null,t))))}e.Z=r.memo(o)},101:function(n,e,t){"use strict";var r=t(6265),a=t(9999),o=t(7294),i=t(1163),s=t(9322),c=t.n(s),l=t(2954),m=(t(9529),t(8335)),u=t(8289),f=o.createElement;function p(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function d(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function g(n){var e=n.toggle,t=void 0!==e&&e,s=(0,i.useRouter)(),p=(0,i.useRouter)().query,g=(0,o.useState)({min:0,max:1e3}),v=g[0],b=g[1];function h(n){b(n)}function y(n,e){var t=p[n]?p[n].split(","):[];return t&&t.includes(e)}function w(n,e){var t=p[n]?p[n].split(","):[];return t=y(n,e)?t.filter((function(n){return n!==e})):[].concat((0,a.Z)(t),[e]),{pathname:s.pathname,query:d(d({},p),{},(0,r.Z)({page:1},n,t.join(",")))}}function N(n,e,t){if(w(e,t)){var r=w(e,t).query,a=s.pathname.replace("[type]",p.type)+"?";for(var o in r)"type"!==o&&(a+=o+"="+r[o]+"&");s.push(a)}}return(0,o.useEffect)((function(){p.minPrice&&p.maxPrice?b({min:parseInt(p.minPrice),max:parseInt(p.maxPrice)}):b({min:0,max:1e3})}),[p]),f(o.Fragment,null,f("aside",{className:"".concat(t?"sidebar-filter":"sidebar"," sidebar-shop")},f("div",{className:t?"sidebar-filter-wrapper":""},f("div",{className:"widget widget-clean"},f("label",null,"Filters:"),f(m.Z,{href:{pathname:s.pathname,query:{type:p.type}},className:"sidebar-filter-clear",scroll:!1},"Clean All")),f(l.Z,{collapsed:!1},(function(n){var e=n.onToggle,t=n.setCollapsibleElement,r=n.toggleState;return f("div",{className:"widget widget-collapsible"},f("h3",{className:"widget-title mb-2"},f("a",{href:"#category",className:"".concat("collapsed"==r.toLowerCase()?"collapsed":""),onClick:function(n){e(n),n.preventDefault()}},"Category")),f("div",{ref:t},f("div",{className:"widget-body pt-0"},f("div",{className:"filter-items filter-items-count"},u.JQ.categories.map((function(n,e){return f("div",{className:"filter-item",key:"cat_".concat(e)},f(m.Z,{className:"".concat(p.category==n.slug?"active":""),href:{pathname:s.pathname,query:{type:p.type,category:n.slug}},scroll:!1},n.name),f("span",{className:"item-count"},n.count))}))))))})),f(l.Z,{collapsed:!1},(function(n){var e=n.onToggle,t=n.setCollapsibleElement,r=n.toggleState;return f("div",{className:"widget widget-collapsible"},f("h3",{className:"widget-title mb-2"},f("a",{href:"#Size",className:"".concat("collapsed"==r.toLowerCase()?"collapsed":""),onClick:function(n){e(n),n.preventDefault()}},"Size")),f("div",{ref:t},f("div",{className:"widget-body pt-0"},f("div",{className:"filter-items"},u.JQ.sizes.map((function(n,e){return f("div",{className:"filter-item",key:e},f("div",{className:"custom-control custom-checkbox"},f("input",{type:"checkbox",className:"custom-control-input",id:"size-".concat(e+1),onChange:function(e){return N(0,"size",n.slug)},checked:!!y("size",n.slug)}),f("label",{className:"custom-control-label",htmlFor:"size-".concat(e+1)},n.size)))}))))))})),f(l.Z,{collapsed:!1},(function(n){var e=n.onToggle,t=n.setCollapsibleElement,r=n.toggleState;return f("div",{className:"widget widget-collapsible"},f("h3",{className:"widget-title mb-2"},f("a",{href:"#colour",className:"".concat("collapsed"==r.toLowerCase()?"collapsed":""),onClick:function(n){e(n),n.preventDefault()}},"Colour")),f("div",{ref:t},f("div",{className:"widget-body pt-0"},f("div",{className:"filter-colors"},u.JQ.colors.map((function(n,e){return f(m.Z,{href:w("color",n.color_name),className:y("color",n.color_name)?"selected":"",style:{backgroundColor:n.color},key:e,scroll:!1},f("span",{className:"sr-only"},"Color Name"))}))))))})),f(l.Z,{collapsed:!1},(function(n){var e=n.onToggle,t=n.setCollapsibleElement,r=n.toggleState;return f("div",{className:"widget widget-collapsible"},f("h3",{className:"widget-title mb-2"},f("a",{href:"#brand",className:"".concat("collapsed"==r.toLowerCase()?"collapsed":""),onClick:function(n){e(n),n.preventDefault()}},"Brand")),f("div",{ref:t},f("div",{className:"widget-body pt-0"},f("div",{className:"filter-items"},u.JQ.brands.map((function(n,e){return f("div",{className:"filter-item",key:e},f("div",{className:"custom-control custom-checkbox"},f("input",{type:"checkbox",className:"custom-control-input",id:"brand-".concat(e+1),onChange:function(e){return N(0,"brand",n.slug)},checked:!!y("brand",n.slug)}),f("label",{className:"custom-control-label",htmlFor:"brand-".concat(e+1)},n.brand)))}))))))})),f(l.Z,{collapsed:!1},(function(n){var e=n.onToggle,t=n.setCollapsibleElement,r=n.toggleState;return f("div",{className:"widget widget-collapsible"},f("h3",{className:"widget-title mb-2"},f("a",{href:"#price",className:"".concat("collapsed"==r.toLowerCase()?"collapsed":""),onClick:function(n){e(n),n.preventDefault()}},"Price")),f("div",{ref:t},f("div",{className:"widget-body pt-0"},f("div",{className:"filter-price"},f("div",{className:"filter-price-text d-flex justify-content-between"},f("span",null,"Price Range:\xa0",f("span",{className:"filter-price-range"},"$",v.min," - $",v.max)),f(m.Z,{href:{pathname:s.pathname,query:d(d({},p),{},{minPrice:v.min,maxPrice:v.max,page:1})},className:"pr-2",scroll:!1},"Filter")),f("div",{className:"price-slider"},f(c(),{formatLabel:function(n){return"$".concat(n)},maxValue:1e3,minValue:0,step:50,value:v,onChange:h}))))))})))))}e.Z=o.memo(g)},8289:function(n,e,t){"use strict";t.d(e,{lN:function(){return j},JQ:function(){return z},QL:function(){return _},nB:function(){return L},XP:function(){return D},s1:function(){return $},cD:function(){return B},wf:function(){return T},wI:function(){return q},jc:function(){return J},if:function(){return Q},Ju:function(){return G},_e:function(){return I},Sr:function(){return R}});var r=t(7261),a=t(917);function o(){var n=(0,r.Z)(["{\n    0%{\n        transform:scale3d(1,1,1);\n        opacity: 1;\n    }\n    100% {\n        transform:scale3d(1.1,1.1,1);\n        opacity: 1;\n    }\n}"]);return o=function(){return n},n}function i(){var n=(0,r.Z)(["{\n    from, 60%, 75%, 90%, to {\n        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    }\n\n    from {\n        opacity: 0;\n        transform: translate3d(0, 3000px, 0);\n    }\n\n    60% {\n        opacity: 1;\n        transform: translate3d(0, -20px, 0);\n    }\n\n    75% {\n        transform: translate3d(0, 10px, 0);\n    }\n\n    90% {\n        transform: translate3d(0, -5px, 0);\n    }\n\n    to {\n        transform: translate3d(0, 0, 0);\n    }\n}"]);return i=function(){return n},n}function s(){var n=(0,r.Z)(["{\n    0%{\n        -webkit-transform:scale3d(.8,.8,.8);\n        opacity:0;\n        transform:scale3d(.8,.8,.8)\n    }\n    50%{\n        opacity:1\n    }\n}"]);return s=function(){return n},n}function c(){var n=(0,r.Z)([" {\n    0% {\n        animation-timing-function: ease-in;\n        filter: brightness(0%)\n    }\n  \n    to {\n        filter: brightness(100%)\n    }\n}"]);return c=function(){return n},n}function l(){var n=(0,r.Z)(["{\n    0% {\n        animation-timing-function: ease-out;\n        transform: perspective(400px)\n    }\n\n    to {\n        opacity: 0;\n        transform: perspective(400px) rotateY(90deg)\n    }\n}"]);return l=function(){return n},n}function m(){var n=(0,r.Z)(["{\n  0% {\n      animation-timing-function: ease-in;\n      opacity: 0;\n      transform: perspective(400px) rotateY(90deg);\n  }\n\n  to {\n      transform: perspective(400px);\n  }\n}"]);return m=function(){return n},n}function u(){var n=(0,r.Z)(["{\n    0% {\n        animation-timing-function: ease-in;\n        opacity: 0;\n        transform: perspective(400px) rotateX(90deg)\n    }\n  \n    to {\n        transform: perspective(400px)\n    }\n}"]);return u=function(){return n},n}function f(){var n=(0,r.Z)(["{\n    0% {\n        transform: translate3d(100%, 0, 0);\n        visibility: visible\n    }\n  \n    to {\n        transform: translateZ(0)\n    }\n}"]);return f=function(){return n},n}function p(){var n=(0,r.Z)(["{\n    0% {\n        transform: translate3d(-100%, 0, 0);\n        visibility: visible\n    }\n  \n    to {\n        transform: translateZ(0)\n    }\n}"]);return p=function(){return n},n}function d(){var n=(0,r.Z)(["{\n    0% {\n        transform: translate3d(0, -100%, 0);\n        visibility: visible\n    }\n\n    to {\n        transform: translateZ(0)\n    }\n}"]);return d=function(){return n},n}function g(){var n=(0,r.Z)(["{\n    0% {\n        transform: translate3d(0, 100%, 0);\n        visibility: visible\n    }\n\n    to {\n        transform: translateZ(0)\n    }\n}"]);return g=function(){return n},n}function v(){var n=(0,r.Z)(["{\n    from {\n        transform: translate(100%,0)\n    }\n    to {\n        transform: translate(0,0)\n    }\n}"]);return v=function(){return n},n}function b(){var n=(0,r.Z)(["{\n    from {\n        transform: translate(0,-100%)\n    }\n    to {\n        transform: translate(0,0)\n    }\n}"]);return b=function(){return n},n}function h(){var n=(0,r.Z)(["{\n    from {\n        transform: translate(-100%,0)\n    }\n    to {\n        transform: translate(0,0)\n    }\n}"]);return h=function(){return n},n}function y(){var n=(0,r.Z)(["{\n    from {\n        transform: translate(0,100%)\n    }\n  \n    to {\n        transform: translate(0,0)\n    }\n}"]);return y=function(){return n},n}function w(){var n=(0,r.Z)(["{\n    from {\n        opacity:1;\n        transform:scale(.2)\n    }\n  \n    to {\n        opacity:0;\n        transform:scale(1)\n    }\n}"]);return w=function(){return n},n}function N(){var n=(0,r.Z)(["{\n    from {\n        opacity: 1;\n        filter: grayscale(0);\n    }\n    15% {\n        filter: grayscale(100%);\n    }\n    to {\n        opacity: .0;\n        filter: grayscale(100%);\n    }\n}"]);return N=function(){return n},n}function Z(){var n=(0,r.Z)(["{\n    from {\n        opacity: 0;\n        filter: blur(20px);\n        transform: scale(1.2);\n    }\n    to {\n        opacity: 1;\n        filter: blur(0);\n        transform: none \n    }\n}"]);return Z=function(){return n},n}function x(){var n=(0,r.Z)(["\nfrom {\n    opacity: 0;\n    transform: translate(0,-50px);\n    transform-origin: 0 0;\n}\n\nto {\n    opacity: 1;\n    transform: none\n}"]);return x=function(){return n},n}function F(){var n=(0,r.Z)(["\n0% {\n    -webkit-transform: translate3d( 0, 100%, 0 );\n    opacity: 0;\n    transform: translate3d( 0, 100 %, 0 )\n}\n\nto {\n    -webkit-transform: translateZ( 0 );\n    opacity: 1;\n    transform: translateZ( 0 )\n}"]);return F=function(){return n},n}function k(){var n=(0,r.Z)(["\nfrom {\n    opacity: 0;\n    transform: translate(0,50px);\n    transform-origin: 0 0;\n}\nto {\n    opacity:1;\n    transform:none\n}"]);return k=function(){return n},n}function C(){var n=(0,r.Z)(["\n0% {\n    -webkit-transform: translate3d(-100%,0,0);\n    opacity: 0;\n    transform: translate3d(-100%,0,0)\n}\n\nto {\n    -webkit-transform: translateZ(0);\n    opacity: 1;\n    transform: translateZ(0)\n}"]);return C=function(){return n},n}function P(){var n=(0,r.Z)(["{\n    from {\n        opacity: 0;\n        transform: translate(50px,0);\n        transform-origin: 0 0;\n    }\n    to {\n        opacity: 1;\n        transform: none\n    }\n}"]);return P=function(){return n},n}function S(){var n=(0,r.Z)(["\n0% {\n    -webkit-transform: translate3d(100%,0,0);\n    opacity: 0;\n    transform: translate3d(100%,0,0)\n}\n\nto {\n    -webkit-transform: translateZ(0);\n    opacity: 1;\n    transform: translateZ(0)\n}"]);return S=function(){return n},n}function O(){var n=(0,r.Z)(["\nfrom {\n  opacity: 0;\n  transform: translate(-50px,0);\n  transform-origin: 0 0;\n}\n\nto {\n  opacity: 1;\n  transform: none\n}"]);return O=function(){return n},n}function E(){var n=(0,r.Z)(["{\n    from {\n        opacity:0;\n    }\n  \n    to {\n        opacity:1;\n    }\n}"]);return E=function(){return n},n}(0,a.F4)(E()),(0,a.F4)(O()),(0,a.F4)(S()),(0,a.F4)(P()),(0,a.F4)(C());var j=(0,a.F4)(k()),z=((0,a.F4)(F()),(0,a.F4)(x()),(0,a.F4)(Z()),(0,a.F4)(N()),(0,a.F4)(w()),(0,a.F4)(y()),(0,a.F4)(h()),(0,a.F4)(b()),(0,a.F4)(v()),(0,a.F4)(g()),(0,a.F4)(d()),(0,a.F4)(p()),(0,a.F4)(f()),(0,a.F4)(u()),(0,a.F4)(m()),(0,a.F4)(l()),(0,a.F4)(c()),(0,a.F4)(s()),(0,a.F4)(i()),(0,a.F4)(o()),{sizes:[{size:"Extra Small",slug:"XS"},{size:"Small",slug:"S"},{size:"Medium",slug:"M"},{size:"Large",slug:"L"},{size:"Extra Large",slug:"XL"}],colors:[{color:"#cc9966",color_name:"Brown"},{color:"#3399cc",color_name:"Blue"},{color:"#9966cc",color_name:"Purple"},{color:"#333333",color_name:"Black"},{color:"#669933",color_name:"Green"},{color:"#cc3333",color_name:"Red"},{color:"#999999",color_name:"Grey"}],brands:[{brand:"Next",slug:"next"},{brand:"River Island",slug:"river-island"},{brand:"Geox",slug:"geox"},{brand:"New Balance",slug:"nex-balance"},{brand:"UGG",slug:"ugg"},{brand:"F&F",slug:"f-and-f"},{brand:"Nike",slug:"nike"}],categories:[{name:"Furniture",slug:"furniture",count:8},{name:"Coffee & Tables",slug:"coffee-and-tables",count:1},{name:"Lighting",slug:"lighting",count:3},{name:"Decoration",slug:"decoration",count:5},{name:"Electronics",slug:"electronics",count:1},{name:"Beds",slug:"beds",count:2},{name:"Armchairs & Chaises",slug:"armchairs-and-chaises",count:3},{name:"Sofas & Sleeper Sofas",slug:"sofas-and-sleeper-sofas",count:1}],prices:[{min:"0",max:"25",name:"Under $25"},{min:"25",max:"50",name:"$25 to $50"},{min:"50",max:"100",name:"$50 to $100"},{min:"100",max:"200",name:"$100 to $200"},{min:"200",max:"9999",name:"$200 & Above"}]}),_={categories:[{name:"Furniture",slug:"furniture",count:8},{name:"Lighting",slug:"lighting",count:3},{name:"Decoration",slug:"decoration",count:5},{name:"Electronics",slug:"electronics",count:1}],brands:[{name:"brand",image:"images/brands/1.png",width:100,height:23},{name:"brand",image:"images/brands/2.png",width:101,height:34},{name:"brand",image:"images/brands/3.png",width:100,height:30},{name:"brand",image:"images/brands/4.png",width:101,height:39},{name:"brand",image:"images/brands/5.png",width:100,height:48},{name:"brand",image:"images/brands/6.png",width:100,height:23},{name:"brand",image:"images/brands/7.png",width:63,height:32},{name:"brand",image:"images/brands/8.png",width:80,height:72},{name:"brand",image:"images/brands/9.png",width:100,height:25}]},L={nav:!1,dots:!0,items:3,margin:20,loop:!1,responsive:{0:{items:1},600:{items:2},992:{items:3,dots:!0}}},D={nav:!1,dots:!1,margin:20,loop:!1,responsive:{0:{items:2},992:{items:3},1200:{items:4}}},$={nav:!1,dots:!1,margin:20,loop:!1,responsive:{0:{items:2},480:{items:2},768:{items:3},992:{items:4},1200:{items:5}}},B={nav:!1,dots:!0,margin:20,loop:!0,responsive:{1200:{nav:!0}}},T={nav:!1,dots:!0,margin:20,loop:!0,responsive:{0:{items:1},768:{items:2},1200:{items:2,nav:!0}}},q={nav:!1,dots:!0,items:3,margin:20,loop:!0,responsive:{0:{items:1},768:{items:2},992:{items:3},1200:{items:3,nav:!0}}},J={nav:!1,dots:!1,margin:20,loop:!1,items:2,responsive:{768:{items:3},992:{items:4},1200:{items:4},1400:{nav:!0,items:4}}},Q={nav:!0,dots:!1,items:3,margin:20,loop:!1,responsive:{0:{items:1},576:{items:2},992:{items:3}}},G={loop:!1,dots:!1,responsive:{772:{nav:!0}}},I={nav:!1,dots:!0,margin:30,loop:!1,responsive:{0:{items:2},420:{items:3},600:{items:4},900:{items:5},1024:{items:6,nav:!0,dots:!1}}},R={nav:!1,dots:!0,responsive:{992:{nav:!0,dots:!0}}}}}]);