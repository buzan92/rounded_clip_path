(function(t){function e(e){for(var n,a,u=e[0],c=e[1],s=e[2],d=0,p=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,u=1;u<r.length;u++){var c=r[u];0!==i[c]&&(n=!1)}n&&(o.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},i={app:0},o=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/rounded_clip_path/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var l=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"05c4":function(t,e,r){"use strict";var n=r("301b"),i=r.n(n);i.a},"10d1":function(t,e,r){},"153e":function(t,e,r){},"301b":function(t,e,r){},"32f6":function(t,e,r){},"3c18":function(t,e,r){"use strict";var n=r("10d1"),i=r.n(n);i.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page",attrs:{id:"app"}},[r("Header"),r("main",{staticClass:"page__inner"},[r("Field",t._b({on:{field_mounted:function(e){return t.field_mounted_handle(e)}}},"Field",t.field_props,!1),t._l(t.points,(function(e,n){return r("Point",t._b({key:n,on:{set_point_coords:t.SET_POINT_COORDS}},"Point",Object.assign({},e,{idx:n}),!1))})),1),r("Sidebar",t._b({on:{set_field_width:t.SET_FIELD_WIDTH,set_field_height:t.SET_FIELD_HEIGHT,set_corner_radius:t.SET_CORNER_RADIUS,set_points_quantity:t.SET_POINTS_QUANTITY}},"Sidebar",t.sidebar_props,!1)),t.is_dev?r("Debug"):t._e(),r("h3",[t._v(t._s(t.clip_path))]),r("button",{staticClass:"options-btn"})],1)],1)},o=[],a=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("2fa7")),u=r("2f62"),c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"header"},[r("div",{staticClass:"git-wrapper"},[r("iframe",{attrs:{src:"https://ghbtns.com/github-btn.html?user=buzan92&repo=rounded_clip_path&type=star&count=true",frameborder:"0",scrolling:"0",width:"160px",height:"30px"}})]),r("div",{staticClass:"header__titles"},[r("h2",{staticClass:"title__name"},[t._v("clip_path_rounded")]),r("h1",{staticClass:"title__description"},[t._v("generate css clip-patch with rounded corners")])])])}],l={},d=l,p=(r("3c18"),r("2877")),f=Object(p["a"])(d,c,s,!1,null,"7c79042a",null),_=f.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"field",staticClass:"field",style:t.field_style},[t._t("default"),r("div",{staticClass:"clip_path",style:t.clip_path_style})],2)},m=[],y=(r("a9e3"),{name:"field",props:{field_width:[Number,String],field_height:[Number,String],field_image:String,clip_path:String},computed:{field_style:function(t){var e=t.field_width,r=t.field_height;return{width:"".concat(e,"px"),height:"".concat(r,"px")}},clip_path_style:function(t){var e=t.field_image,r=t.clip_path;return{backgroundImage:"url(".concat(e,")"),clipPath:"polygon(".concat(r,")")}}},mounted:function(){this.$emit("field_mounted",this.$refs.field)}}),b=y,v=(r("a8f6"),Object(p["a"])(b,h,m,!1,null,"2b97fd2f",null)),g=v.exports,x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"point",staticClass:"point",style:t.point_style,attrs:{draggable:"true"},on:{drag:t.drag_handler}})},O=[],w=["#001f3f","#0074D9","#7FDBFF","#39CCCC","#3D9970","#2ECC40","#01FF70","#FFDC00","#FF851B","#FF4136","#85144b","#F012BE","#B10DC9"],S=r("284c");function E(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function j(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?E(r,!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):E(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var P=function(t,e,r){var n=Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)),i=r/n;return{x:t.x+(e.x-t.x)*i,y:t.y+(e.y-t.y)*i}},D=function(t,e,r){var n=t.x-e.x,i=r.x-e.x,o=t.y-e.y,a=r.y-e.y,u=Math.sqrt(Math.pow(n,2)+Math.pow(o,2)),c=Math.sqrt(Math.pow(i,2)+Math.pow(a,2)),s=Math.acos((n*i+o*a)/(u*c));return s},T=function(t,e,r,n){var i=Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2));if(i>r+n||i<Math.abs(r-n))return{};if(Math.abs(i-(r-n))<1e-6){var o=(t.x+e.x)/2,a=(t.y+e.y)/2;return{x:o,y:a}}var u=(Math.pow(n,2)-Math.pow(r,2)+Math.pow(i,2))/(2*i),c=i-u,s=Math.sqrt(Math.pow(n,2)-Math.pow(u,2)),l=t.x+(e.x-t.x)/(i/c),d=t.y+(e.y-t.y)/(i/c),p=l-(d-e.y)*s/u,f=d+(l-e.x)*s/u;return{x:p,y:f}},M=function(t,e,r){var n={x:t.x-e.x,y:t.y-e.y},i=n.x*Math.cos(r)-n.y*Math.sin(r),o=n.x*Math.sin(r)+n.y*Math.cos(r);return{x:i+e.x,y:o+e.y}},C=function(t,e,r){var n=t.y-e.y,i=e.x-t.x,o=t.x*e.y-e.x*t.y,a=1/Math.sqrt(Math.pow(n,2)+Math.pow(i,2)),u=a*n,c=a*i,s=a*o+r;return{A:u,B:c,C:s}},I=function(t,e,r,n){var i=C(t,e,n),o=i.A,a=i.B,u=i.C,c=C(e,r,n),s=c.A,l=c.B,d=c.C,p=(-d*a+u*l)/(-l*o+a*s),f=(-o*p-u)/a;return{x:p,y:f}},F=function(t,e,r){var n=C(t,e,0),i=n.A,o=n.B,a=n.C,u=(-i*o*r.y+Math.pow(o,2)*r.x-i*a)/(Math.pow(i,2)+Math.pow(o,2)),c=(-i*u-a)/o;return{x:u,y:c}},N=function(t,e,r,n,i){var o=[],a=D(t,e,r);if(a===Math.PI/2){var u=P(e,t,n),c=P(e,r,n),s=T(u,c,n,n);o.push(j({},u,{title:"A"}));for(var l=1;l<i;l++){var d=M(c,s,a/i*l);o.push(j({},d,{title:l}))}o.push(j({},c,{title:"B"}))}else{var p=I(t,e,r,-n),f=F(t,e,p),_=F(e,r,p),h=D(f,p,_);o.push(j({},f,{title:"A"}));for(var m=1;m<i;m++){var y=M(f,p,h/i*m);o.push(j({},y,{title:m}))}o.push(j({},_,{title:"B"}))}return o},q=function(t,e,r,n){var i=t[e],o=e>=t.length-1?t[0]:t[e+1],a={};return a=e===t.length-2?t[0]:e>=t.length-1?t[1]:t[e+2],N(i,o,a,r,n)},$=function(t,e,r){for(var n=[],i=0;i<t.length;i++)n.push.apply(n,Object(S["a"])(q(t,i,e,r)));return n},R={color:w,make_points:$,round_corner:q},k={name:"point",props:{idx:Number,x:[Number,String],y:[Number,String]},data:function(){return{parent_rect:{}}},computed:{point_style:function(t){var e=t.x,r=t.y,n=t.idx;return{backgroundColor:R.color[n],left:"".concat(e,"px"),top:"".concat(r,"px")}}},mounted:function(){this.parent_rect=this.$refs.point.parentNode.getBoundingClientRect()},methods:{drag_handler:function(t){var e=t.clientX,r=t.clientY;e&&r&&this.$emit("set_point_coords",{x:e,y:r,idx:this.idx})}}},A=k,B=(r("fc71"),Object(p["a"])(A,x,O,!1,null,"56f05a86",null)),L=B.exports,H=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("span",[t._v("Dimensions:")]),r("br"),r("br"),t._v(" width: "),r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.field_width_model,expression:"field_width_model",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.field_width_model},on:{input:function(e){e.target.composing||(t.field_width_model=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v("px height: "),r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.field_height_model,expression:"field_height_model",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.field_height_model},on:{input:function(e){e.target.composing||(t.field_height_model=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v("px "),r("br"),r("br"),t._v(" radius: "),r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.corner_radius_model,expression:"corner_radius_model",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.corner_radius_model},on:{input:function(e){e.target.composing||(t.corner_radius_model=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v("px point's quantity: "),r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.points_quantity_model,expression:"points_quantity_model",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.points_quantity_model},on:{input:function(e){e.target.composing||(t.points_quantity_model=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])},U=[],Y={name:"sidebar",props:{field_width:[String,Number],field_height:[String,Number],corner_radius:[String,Number],points_quantity:[String,Number]},computed:{field_width_model:{get:function(t){var e=t.field_width;return e},set:function(t){this.$emit("set_field_width",t)}},field_height_model:{get:function(t){var e=t.field_height;return e},set:function(t){this.$emit("set_field_height",t)}},corner_radius_model:{get:function(t){var e=t.corner_radius;return e},set:function(t){this.$emit("set_corner_radius",t)}},points_quantity_model:{get:function(t){var e=t.points_quantity;return e},set:function(t){this.$emit("set_points_quantity",t)}}}},X=Y,G=Object(p["a"])(X,H,U,!1,null,null,null),Q=G.exports,W=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"test"},[t._v(" Debug: i: "),r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.i,expression:"i",modifiers:{number:!0}}],attrs:{max:t.points.length-1,min:"0",type:"number"},domProps:{value:t.i},on:{input:function(e){e.target.composing||(t.i=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),r("div",{staticClass:"field"},t._l(t.dots,(function(e){return r("div",{key:e.title,staticClass:"dot",style:t.dot_style(e)},[t._v(" "+t._s(e.title)+" ")])})),0)])},J=[];function z(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function K(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?z(r,!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):z(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var V={name:"debug",data:function(){return{i:0}},computed:K({},Object(u["d"])(["points","corner_radius","points_quantity"]),{dots:function(t){var e=t.points,r=t.i,n=t.corner_radius,i=t.points_quantity;return R.round_corner(e,r,n,i)}}),methods:{dot_style:function(t){var e=t.x,r=t.y;return{left:"".concat(e,"px"),top:"".concat(r,"px")}}}},Z=V,tt=(r("e63c"),Object(p["a"])(Z,W,J,!1,null,"4fdc76a5",null)),et=tt.exports;function rt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function nt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?rt(r,!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):rt(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var it={name:"app",components:{Header:_,Field:g,Point:L,Sidebar:Q,Debug:et},computed:nt({},Object(u["d"])(["field_width","field_height","field_image","corner_radius","points_quantity","points"]),{},Object(u["b"])(["clip_path"]),{field_props:function(t){var e=t.field_width,r=t.field_height,n=t.field_image,i=t.clip_path;return{field_width:e,field_height:r,field_image:n,clip_path:i}},sidebar_props:function(t){var e=t.field_props,r=t.corner_radius,n=t.points_quantity;return nt({},e,{corner_radius:r,points_quantity:n})},is_dev:function(){return!1}}),methods:nt({},Object(u["c"])(["SET_FIELD_X","SET_FIELD_Y","SET_FIELD_WIDTH","SET_FIELD_HEIGHT","SET_CORNER_RADIUS","SET_POINTS_QUANTITY","SET_POINT_COORDS"]),{field_mounted_handle:function(t){var e=t.getBoundingClientRect(),r=e.x,n=e.y;this.SET_FIELD_X(r),this.SET_FIELD_Y(n)}})},ot=it,at=(r("05c4"),Object(p["a"])(ot,i,o,!1,null,"25088ffa",null)),ut=at.exports;r("99af"),r("13d5"),r("fb6a"),r("b680");n["a"].use(u["a"]);var ct=new u["a"].Store({state:{field_x:10,field_y:10,field_width:500,field_height:300,corner_radius:30,points_quantity:7,field_image:"https://gratisography.com/wp-content/uploads/2019/11/gratisography-laptop-colorful-keys-900x600.jpg",points:[{x:112,y:49},{x:373,y:50},{x:351,y:197},{x:134,y:238}]},getters:{clip_path:function(t){var e=t.field_width,r=t.field_height,n=t.points,i=t.corner_radius,o=t.points_quantity,a=R.make_points(n,i,o),u=a.reduce((function(t,n){var i=n.x/e*100,o=n.y/r*100;return"".concat(t," ").concat(i.toFixed(2),"% ").concat(o.toFixed(2),"%,")}),"");return u.slice(0,-1)}},mutations:{SET_FIELD_X:function(t,e){t.field_x=e},SET_FIELD_Y:function(t,e){t.field_y=e},SET_FIELD_WIDTH:function(t,e){t.field_width=e},SET_FIELD_HEIGHT:function(t,e){t.field_height=e},SET_CORNER_RADIUS:function(t,e){t.corner_radius=e},SET_POINTS_QUANTITY:function(t,e){t.points_quantity=e},SET_POINT_COORDS:function(t,e){var r=t.field_x,n=t.field_y,i=t.field_width,o=t.field_height,a=e.x,u=e.y,c=e.idx;a<r&&(e.x=r),a>r+i&&(e.x=r+i),u<n&&(e.y=n),u>n+o&&(e.y=n+o),e.x-=r,e.y-=n,Object.assign(t.points[c],e)}},actions:{},modules:{}});r("494d");n["a"].config.productionTip=!1,new n["a"]({store:ct,render:function(t){return t(ut)}}).$mount("#app")},8375:function(t,e,r){},a8f6:function(t,e,r){"use strict";var n=r("32f6"),i=r.n(n);i.a},e63c:function(t,e,r){"use strict";var n=r("8375"),i=r.n(n);i.a},fc71:function(t,e,r){"use strict";var n=r("153e"),i=r.n(n);i.a}});
//# sourceMappingURL=app.90d5850a.js.map