(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34f30ce6"],{1447:function(e,t,n){},"30db":function(e,t,n){"use strict";var o=n("a4c0"),r=n.n(o);r.a},3814:function(e,t,n){"use strict";var o=n("1447"),r=n.n(o);r.a},5373:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"user-page-view fixed-view"},[o("DefaultNavBar"),o("RellaxBanner",{staticClass:"rellax-auto",scopedSlots:e._u([{key:"rellaxpic",fn:function(){return[o("img",{staticClass:"rellax-pic",attrs:{src:n("d8d9"),alt:""}})]},proxy:!0},{key:"rellaxtext",fn:function(){return[o("div",{staticClass:"title-style-1 is-size-1-desktop is-size-3-touch"},[e._v(e._s(e.$t("forget-3")))])]},proxy:!0}])}),o("div",{staticClass:"rellax-page rellax-page-view"},[o("div",{staticClass:"container"},[o("div",{staticClass:"columns"},[o("div",{staticClass:"column is-10-touch is-6-desktop"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"input",attrs:{name:"email",type:"text",placeholder:e.$t("forget-4")},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),o("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticClass:"help is-danger"},[e._v(e._s(e.$t("forget-4")))])])]),o("div",{staticClass:"columns"},[o("div",{staticClass:"column is-10-touch is-6-desktop"},[o("div",{staticClass:"button button-style is-fullwidth",on:{click:e.postData}},[e._v(e._s(e.$t("s9")))])])]),o("router-link",{staticClass:"user-page-text",attrs:{to:"/login"}},[e._v(e._s(e.$t("forget-2")))])],1)]),o("Footer"),o("Modal",{attrs:{ctxMessage:e.ctxMessage,show:e.show},on:{hideModal:e.hideModal}})],1)},r=[],a=(n("e7e5"),n("d399")),s=(n("96cf"),n("3b8d")),i=(n("8bbf"),n("ab94")),l=n("714b"),c=n("e876"),u=(n("bc4f"),{cn:{"forget-1":"请一分钟后再发送","forget-2":"返回登录页","forget-3":"忘记密码","forget-4":"输入您注册的电子邮件地址","forget-5":"邮件发送成功"},en:{"forget-1":"Please send it in one minute.","forget-2":"Back to login","forget-3":"Reset Your Password","forget-4":"Enter your registered e-mail address","forget-5":"Mail sent successfully"},zh:{"forget-1":"請壹分鐘後再發送","forget-2":"返回登錄頁","forget-3":"忘記密碼","forget-4":"輸入您註冊的電子郵件地址","forget-5":"郵件發送成功"}}),d=null,p={data:function(){return{email:"",ctxMessage:"",show:0,isDown:1,time:60}},components:{RellaxBanner:i["a"],Modal:l["a"]},destroyed:function(){clearInterval(d)},methods:{hideModal:function(){this.show=0},postData:function(){var e=this;if(!this.isDown)return this.show=1,void(this.ctxMessage=this.$t("forget-1"));this.$validator.validateAll().then(function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(n){var o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!n){t.next=15;break}return a["a"].loading({mask:!0,duration:0}),t.next=4,Object(c["f"])({email:e.email});case 4:if(o=t.sent,a["a"].clear(),"0"==o.code){t.next=10;break}return e.show=1,e.ctxMessage=o.message,t.abrupt("return");case 10:e.show=1,e.ctxMessage=e.$t("forget-5"),e.isDown=0,d=setInterval(function(){--e.time,e.time<=0&&(clearInterval(d),e.time=60,e.isDown=1)},1e3);case 15:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())}},translator:u},f=p,m=n("2877"),v=Object(m["a"])(f,o,r,!1,null,null,null);t["default"]=v.exports},"714b":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"modal animated",class:{fadeIn:e.show,"is-active":e.show},on:{touchmove:function(e){e.preventDefault()}}},[n("div",{staticClass:"modal-background"}),n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-view"},[n("div",{staticClass:"modal-view-title"},[e._v("\n                "+e._s(e.$t("s6"))+"\n                "),n("div",{staticClass:"delete is-medium",on:{click:e.hideModal}})]),n("div",{staticClass:"modal-view-ctx"},[e._v(e._s(e.ctxMessage))]),n("div",{staticClass:"modal-button-view"},[n("div",{staticClass:"button button-style modal-button",on:{click:e.hideModal}},[e._v("确定")])])])])])},r=[],a={props:["show","ctxMessage"],methods:{hideModal:function(){this.$emit("hideModal")}}},s=a,i=(n("30db"),n("2877")),l=Object(i["a"])(s,o,r,!1,null,null,null);t["a"]=l.exports},a4c0:function(e,t,n){},ab94:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rellax-view"},[e._t("rellaxpic"),n("div",{directives:[{name:"rellax",rawName:"v-rellax",value:e.options,expression:"options"}],staticClass:"rellax-fixed-view"},[e._t("rellaxpic"),n("div",{staticClass:"rellax-text-view"},[e._t("rellaxtext")],2)],2)],2)},r=[],a=n("8bbf"),s=n.n(a),i=n("d0bc");s.a.use(i["a"]);var l={data:function(){return{options:{speed:"2"}}}},c=l,u=(n("3814"),n("2877")),d=Object(u["a"])(c,o,r,!1,null,null,null);t["a"]=d.exports},bc4f:function(e,t,n){},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(o){"object"===typeof window&&(n=window)}e.exports=n},d0bc:function(e,t,n){"use strict";(function(e){
/*!
 * Vue Rellax v0.1.0
 * https://github.com/yutahaga/vue-rellax
 *
 * @license
 * Copyright (c) 2018 undefined
 * Released under the MIT license
 * https://github.com/yutahaga/vue-rellax/blob/master/LICENSE
 */
var n="undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{};function o(e,t){return t={exports:{}},e(t,t.exports),t.exports}var r,a=o(function(e){(function(t,n){e.exports?e.exports=n():t.Rellax=n()})(n,function(){var e=function(t,n){var o=Object.create(e.prototype),r=0,a=0,s=0,i=0,l=[],c=!0,u=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){return setTimeout(e,1e3/60)},d=null,p=window.cancelAnimationFrame||window.mozCancelAnimationFrame||clearTimeout,f=window.transformProp||function(){var e=document.createElement("div");if(null===e.style.transform){var t=["Webkit","Moz","ms"];for(var n in t)if(void 0!==e.style[t[n]+"Transform"])return t[n]+"Transform"}return"transform"}();o.options={speed:-2,center:!1,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1,callback:function(){}},n&&Object.keys(n).forEach(function(e){o.options[e]=n[e]}),t||(t=".rellax");var m="string"===typeof t?document.querySelectorAll(t):[t];if(!(m.length>0))throw new Error("The elements you're trying to select don't exist.");if(o.elems=m,o.options.wrapper&&!o.options.wrapper.nodeType){var v=document.querySelector(o.options.wrapper);if(!v)throw new Error("The wrapper you're trying to use don't exist.");o.options.wrapper=v}var w=function(){for(var e=0;e<o.elems.length;e++){var t=g(o.elems[e]);l.push(t)}},h=function(){for(var e=0;e<l.length;e++)o.elems[e].style.cssText=l[e].style;l=[],a=window.innerHeight,i=window.innerWidth,x(),w(),c&&(window.addEventListener("resize",h),c=!1),C()},g=function(e){var t=e.getAttribute("data-rellax-percentage"),n=e.getAttribute("data-rellax-speed"),r=e.getAttribute("data-rellax-zindex")||0,s=o.options.wrapper?o.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;if(o.options.relativeToWrapper){var l=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;s=l-o.options.wrapper.offsetTop}var c=o.options.vertical&&(t||o.options.center)?s:0,u=o.options.horizontal&&(t||o.options.center)?window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0,d=c+e.getBoundingClientRect().top,p=e.clientHeight||e.offsetHeight||e.scrollHeight,f=u+e.getBoundingClientRect().left,m=e.clientWidth||e.offsetWidth||e.scrollWidth,v=t||(c-d+a)/(p+a),w=t||(u-f+i)/(m+i);o.options.center&&(w=.5,v=.5);var h=n||o.options.speed,g=b(w,v,h),x=e.style.cssText,y="";if(x.indexOf("transform")>=0){var C=x.indexOf("transform"),k=x.slice(C),M=k.indexOf(";");y=M?" "+k.slice(11,M).replace(/\s/g,""):" "+k.slice(11).replace(/\s/g,"")}return{baseX:g.x,baseY:g.y,top:d,left:f,height:p,width:m,speed:h,style:x,transform:y,zindex:r}},x=function(){var e=r,t=s;if(r=o.options.wrapper?o.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset,s=o.options.wrapper?o.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset,o.options.relativeToWrapper){var n=(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset;r=n-o.options.wrapper.offsetTop}return!(e==r||!o.options.vertical)||!(t==s||!o.options.horizontal)},b=function(e,t,n){var r={},a=n*(100*(1-e)),s=n*(100*(1-t));return r.x=o.options.round?Math.round(a):Math.round(100*a)/100,r.y=o.options.round?Math.round(s):Math.round(100*s)/100,r},y=function(){x()&&!1===c&&C(),d=u(y)},C=function(){for(var e,t=0;t<o.elems.length;t++){var n=(r-l[t].top+a)/(l[t].height+a),c=(s-l[t].left+i)/(l[t].width+i);e=b(c,n,l[t].speed);var u=e.y-l[t].baseY,d=e.x-l[t].baseX,p=l[t].zindex,m="translate3d("+(o.options.horizontal?d:"0")+"px,"+(o.options.vertical?u:"0")+"px,"+p+"px) "+l[t].transform;o.elems[t].style[f]=m}o.options.callback(e)};return o.destroy=function(){for(var e=0;e<o.elems.length;e++)o.elems[e].style.cssText=l[e].style;c||(window.removeEventListener("resize",h),c=!0),p(d),d=null},h(),y(),o.refresh=h,o};return e})}),s=new WeakMap,i=function(e,t,n){var o=t.value;s.set(e,new a(e,o))},l=function(e){var t=s.get(e);t&&t.destroy()},c=function(e){l(e)},u=function(e,t,n){var o=t.value;l(e),s.set(e,new a(e,o))},d=function(e){r=e,r.directive("rellax",{inserted:i,update:u,unbind:c})},p={install:d};t["a"]=p}).call(this,n("c8ba"))},d8d9:function(e,t,n){e.exports=n.p+"img/login.7cee7263.png"},e876:function(e,t,n){"use strict";n.d(t,"d",function(){return r}),n.d(t,"b",function(){return a}),n.d(t,"g",function(){return s}),n.d(t,"c",function(){return i}),n.d(t,"f",function(){return l}),n.d(t,"a",function(){return c}),n.d(t,"e",function(){return u});var o=n("a27e");function r(e){return o["a"].post("/account/login",e)}function a(e){return o["a"].post("/account/mfa",e)}function s(e){return o["a"].post("/account/register",e)}function i(e){return o["a"].get("/captcha",{params:e})}function l(e){return o["a"].post("/account/reset-password-1",e)}function c(e){return o["a"].post("/account/alter-password",e)}function u(e){return o["a"].post("/account/reset-password-2",e)}}}]);