(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63f39c7b"],{1447:function(e,t,n){},"1e25":function(e,t,n){"use strict";t["a"]={cn:{v1:"登录",v2:"请输入正确的邮箱",v3:"请输入密码",v4:"请输入收到的邮箱验证码",v5:"请输入图形验证码",v6:"忘记密码？",v7:"从电子邮件收到的验证码"},en:{v1:"Login",v2:"Email",v3:"Password",v4:"Email Code",v5:"Verification Code",v6:"Forgot your password?",v7:"Verification code received from email"},zh:{v1:"登錄",v2:"請輸入郵箱",v3:"請輸入密碼",v4:"請輸入收到的郵箱驗證碼",v5:"請輸入圖形驗證碼",v6:"忘記密碼？",v7:"從電子郵件收到的驗證碼"}}},"30db":function(e,t,n){"use strict";var o=n("a4c0"),r=n.n(o);r.a},3814:function(e,t,n){"use strict";var o=n("1447"),r=n.n(o);r.a},"44d5":function(e,t,n){"use strict";var o=n("7fc3"),r=n.n(o);r.a},"70c6":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"user-page-view fixed-view"},[o("DefaultNavBar"),o("RellaxBanner",{staticClass:"rellax-auto",scopedSlots:e._u([{key:"rellaxpic",fn:function(){return[o("img",{staticClass:"rellax-pic",attrs:{src:n("d8d9"),alt:""}})]},proxy:!0},{key:"rellaxtext",fn:function(){return[o("div",{staticClass:"title-style-1 is-size-1-desktop is-size-3-touch"},[e._v(e._s(e.$t("v1")))])]},proxy:!0}])}),o("div",{staticClass:"rellax-page rellax-page-view"},[o("div",{staticClass:"container"},[o("div",{staticClass:"columns"},[o("div",{staticClass:"column is-10-touch is-6-desktop"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"input",attrs:{name:"email",type:"text",placeholder:e.$t("v7")},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}}),o("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticClass:"help is-danger"},[e._v(e._s(e.$t("v7")))])])]),o("div",{staticClass:"columns"},[o("div",{staticClass:"column is-10-touch is-6-desktop"},[o("div",{staticClass:"button button-style is-fullwidth email-login-button",on:{click:e.postData}},[e._v(e._s(e.$t("v1")))])])])])]),o("Modal",{attrs:{ctxMessage:e.ctxMessage,show:e.show},on:{hideModal:e.hideModal}}),o("Footer")],1)},r=[],a=(n("96cf"),n("3b8d")),i=n("ab94"),s=n("714b"),c=n("b893"),l=n("fa7d"),u=n("e876"),d=n("1e25"),p=(n("bc4f"),{components:{RellaxBanner:i["a"],Modal:s["a"]},translator:d["a"],data:function(){return{ctxMessage:"",show:0,code:""}},created:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}(),methods:{hideModal:function(){this.show=0},postData:function(){var e=this;this.$validator.validateAll().then(function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(n){var o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!n){t.next=13;break}return t.next=3,Object(u["b"])({code:e.code,token:e.$route.query.token});case 3:if(o=t.sent,"0"==o.code){t.next=8;break}return e.show=1,e.ctxMessage=o.message,t.abrupt("return");case 8:Object(l["d"])("token",o.data.token,.5),e.$store.commit("setLoginState",o.data.token),c["a"].lastLink?(e.$router.push({path:c["a"].lastLink}),c["a"].lastLink=""):e.$router.push({path:"/"});case 13:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())}}}),f=p,v=(n("44d5"),n("2877")),m=Object(v["a"])(f,o,r,!1,null,null,null);t["default"]=m.exports},"714b":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"modal animated",class:{fadeIn:e.show,"is-active":e.show},on:{touchmove:function(e){e.preventDefault()}}},[n("div",{staticClass:"modal-background"}),n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-view"},[n("div",{staticClass:"modal-view-title"},[e._v("\n                "+e._s(e.$t("s6"))+"\n                "),n("div",{staticClass:"delete is-medium",on:{click:e.hideModal}})]),n("div",{staticClass:"modal-view-ctx"},[e._v(e._s(e.ctxMessage))]),n("div",{staticClass:"modal-button-view"},[n("div",{staticClass:"button button-style modal-button",on:{click:e.hideModal}},[e._v("确定")])])])])])},r=[],a={props:["show","ctxMessage"],methods:{hideModal:function(){this.$emit("hideModal")}}},i=a,s=(n("30db"),n("2877")),c=Object(s["a"])(i,o,r,!1,null,null,null);t["a"]=c.exports},"7fc3":function(e,t,n){},a4c0:function(e,t,n){},ab94:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rellax-view"},[e._t("rellaxpic"),n("div",{directives:[{name:"rellax",rawName:"v-rellax",value:e.options,expression:"options"}],staticClass:"rellax-fixed-view"},[e._t("rellaxpic"),n("div",{staticClass:"rellax-text-view"},[e._t("rellaxtext")],2)],2)],2)},r=[],a=n("8bbf"),i=n.n(a),s=n("d0bc");i.a.use(s["a"]);var c={data:function(){return{options:{speed:"2"}}}},l=c,u=(n("3814"),n("2877")),d=Object(u["a"])(l,o,r,!1,null,null,null);t["a"]=d.exports},bc4f:function(e,t,n){},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(o){"object"===typeof window&&(n=window)}e.exports=n},d0bc:function(e,t,n){"use strict";(function(e){
/*!
 * Vue Rellax v0.1.0
 * https://github.com/yutahaga/vue-rellax
 *
 * @license
 * Copyright (c) 2018 undefined
 * Released under the MIT license
 * https://github.com/yutahaga/vue-rellax/blob/master/LICENSE
 */
var n="undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{};function o(e,t){return t={exports:{}},e(t,t.exports),t.exports}var r,a=o(function(e){(function(t,n){e.exports?e.exports=n():t.Rellax=n()})(n,function(){var e=function(t,n){var o=Object.create(e.prototype),r=0,a=0,i=0,s=0,c=[],l=!0,u=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){return setTimeout(e,1e3/60)},d=null,p=window.cancelAnimationFrame||window.mozCancelAnimationFrame||clearTimeout,f=window.transformProp||function(){var e=document.createElement("div");if(null===e.style.transform){var t=["Webkit","Moz","ms"];for(var n in t)if(void 0!==e.style[t[n]+"Transform"])return t[n]+"Transform"}return"transform"}();o.options={speed:-2,center:!1,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1,callback:function(){}},n&&Object.keys(n).forEach(function(e){o.options[e]=n[e]}),t||(t=".rellax");var v="string"===typeof t?document.querySelectorAll(t):[t];if(!(v.length>0))throw new Error("The elements you're trying to select don't exist.");if(o.elems=v,o.options.wrapper&&!o.options.wrapper.nodeType){var m=document.querySelector(o.options.wrapper);if(!m)throw new Error("The wrapper you're trying to use don't exist.");o.options.wrapper=m}var w=function(){for(var e=0;e<o.elems.length;e++){var t=x(o.elems[e]);c.push(t)}},h=function(){for(var e=0;e<c.length;e++)o.elems[e].style.cssText=c[e].style;c=[],a=window.innerHeight,s=window.innerWidth,b(),w(),l&&(window.addEventListener("resize",h),l=!1),k()},x=function(e){var t=e.getAttribute("data-rellax-percentage"),n=e.getAttribute("data-rellax-speed"),r=e.getAttribute("data-rellax-zindex")||0,i=o.options.wrapper?o.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;if(o.options.relativeToWrapper){var c=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;i=c-o.options.wrapper.offsetTop}var l=o.options.vertical&&(t||o.options.center)?i:0,u=o.options.horizontal&&(t||o.options.center)?window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0,d=l+e.getBoundingClientRect().top,p=e.clientHeight||e.offsetHeight||e.scrollHeight,f=u+e.getBoundingClientRect().left,v=e.clientWidth||e.offsetWidth||e.scrollWidth,m=t||(l-d+a)/(p+a),w=t||(u-f+s)/(v+s);o.options.center&&(w=.5,m=.5);var h=n||o.options.speed,x=g(w,m,h),b=e.style.cssText,y="";if(b.indexOf("transform")>=0){var k=b.indexOf("transform"),C=b.slice(k),T=C.indexOf(";");y=T?" "+C.slice(11,T).replace(/\s/g,""):" "+C.slice(11).replace(/\s/g,"")}return{baseX:x.x,baseY:x.y,top:d,left:f,height:p,width:v,speed:h,style:b,transform:y,zindex:r}},b=function(){var e=r,t=i;if(r=o.options.wrapper?o.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset,i=o.options.wrapper?o.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset,o.options.relativeToWrapper){var n=(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset;r=n-o.options.wrapper.offsetTop}return!(e==r||!o.options.vertical)||!(t==i||!o.options.horizontal)},g=function(e,t,n){var r={},a=n*(100*(1-e)),i=n*(100*(1-t));return r.x=o.options.round?Math.round(a):Math.round(100*a)/100,r.y=o.options.round?Math.round(i):Math.round(100*i)/100,r},y=function(){b()&&!1===l&&k(),d=u(y)},k=function(){for(var e,t=0;t<o.elems.length;t++){var n=(r-c[t].top+a)/(c[t].height+a),l=(i-c[t].left+s)/(c[t].width+s);e=g(l,n,c[t].speed);var u=e.y-c[t].baseY,d=e.x-c[t].baseX,p=c[t].zindex,v="translate3d("+(o.options.horizontal?d:"0")+"px,"+(o.options.vertical?u:"0")+"px,"+p+"px) "+c[t].transform;o.elems[t].style[f]=v}o.options.callback(e)};return o.destroy=function(){for(var e=0;e<o.elems.length;e++)o.elems[e].style.cssText=c[e].style;l||(window.removeEventListener("resize",h),l=!0),p(d),d=null},h(),y(),o.refresh=h,o};return e})}),i=new WeakMap,s=function(e,t,n){var o=t.value;i.set(e,new a(e,o))},c=function(e){var t=i.get(e);t&&t.destroy()},l=function(e){c(e)},u=function(e,t,n){var o=t.value;c(e),i.set(e,new a(e,o))},d=function(e){r=e,r.directive("rellax",{inserted:s,update:u,unbind:l})},p={install:d};t["a"]=p}).call(this,n("c8ba"))},d8d9:function(e,t,n){e.exports=n.p+"img/login.7cee7263.png"},e876:function(e,t,n){"use strict";n.d(t,"d",function(){return r}),n.d(t,"b",function(){return a}),n.d(t,"g",function(){return i}),n.d(t,"c",function(){return s}),n.d(t,"f",function(){return c}),n.d(t,"a",function(){return l}),n.d(t,"e",function(){return u});var o=n("a27e");function r(e){return o["a"].post("/account/login",e)}function a(e){return o["a"].post("/account/mfa",e)}function i(e){return o["a"].post("/account/register",e)}function s(e){return o["a"].get("/captcha",{params:e})}function c(e){return o["a"].post("/account/reset-password-1",e)}function l(e){return o["a"].post("/account/alter-password",e)}function u(e){return o["a"].post("/account/reset-password-2",e)}}}]);