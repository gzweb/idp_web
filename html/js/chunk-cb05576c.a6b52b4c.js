(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cb05576c"],{"0813":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user-page-view fixed-view"},[a("DefaultNavBar"),a("RellaxBanner",{staticClass:"rellax-auto",scopedSlots:e._u([{key:"rellaxpic",fn:function(){return[a("img",{staticClass:"rellax-pic",attrs:{src:s("d8d9"),alt:""}})]},proxy:!0},{key:"rellaxtext",fn:function(){return[a("div",{staticClass:"title-style-1 is-size-1-desktop is-size-3-touch"},[e._v(e._s(e.$t("r-p-1")))])]},proxy:!0}])}),a("div",{staticClass:"rellax-page rellax-page-view"},[a("div",{staticClass:"container"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-10-touch is-6-desktop"},[a("input",{directives:[{name:"validate",rawName:"v-validate",value:{required:!0,regex:/^(?=.*[0-9].*)(?=.*[A-Z].*)(?=.*[a-z].*).{8,20}$/},expression:"{ required: true,regex: /^(?=.*[0-9].*)(?=.*[A-Z].*)(?=.*[a-z].*).{8,20}$/ }"},{name:"model",rawName:"v-model",value:e.password,expression:"password"}],ref:"password",staticClass:"input",attrs:{name:"password",type:"password",placeholder:e.$t("r-p-2")},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("password"),expression:"errors.has('password')"}],staticClass:"help is-danger"},[e._v(e._s(e.$t("r-p-2")))])])]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-10-touch is-6-desktop"},[a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|confirmed:password",expression:"'required|confirmed:password'"},{name:"model",rawName:"v-model",value:e.againPassword,expression:"againPassword"}],staticClass:"input",attrs:{name:"againPassword","data-vv-as":"password",type:"password",placeholder:e.$t("r-p-3")},domProps:{value:e.againPassword},on:{input:function(t){t.target.composing||(e.againPassword=t.target.value)}}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("againPassword"),expression:"errors.has('againPassword')"}],staticClass:"help is-danger"},[e._v(e._s(e.$t("r-p-3")))])])]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-10-touch is-6-desktop"},[a("div",{staticClass:"button reset-button button-style is-fullwidth",on:{click:e.postData}},[e._v(e._s(e.$t("s9")))])])])])]),a("Modal",{attrs:{ctxMessage:e.ctxMessage,show:e.show},on:{hideModal:e.hideModal}}),a("Footer")],1)},o=[],n=(s("96cf"),s("3b8d")),r=s("ab94"),i=s("714b"),l=s("e876"),c={cn:{"r-p-1":"重置密码","r-p-2":"必须填写包含英文大写、小写及8-20位数字混合密码","r-p-3":"必须输入密码","r-p-4":"修改成功，请重新登录"},en:{"r-p-1":"Reset Password","r-p-2":"Please provide a 8-20 alphanumeric [A-Z, a-z, 0-9,symbols] password","r-p-3":"You must enter the password","r-p-4":"The modification is successful, please log in again."},zh:{"r-p-1":"重置密碼","r-p-2":"必須填寫包含英文大寫、小寫及8-20位數字混合密碼","r-p-3":"必須輸入密碼","r-p-4":"修改成功，請重新登錄"}},d=(s("bc4f"),{components:{RellaxBanner:r["a"],Modal:i["a"]},translator:c,data:function(){return{password:"",againPassword:"",ctxMessage:"",show:0}},created:function(){var e=Object(n["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}(),methods:{hideModal:function(){this.show=0,this.isSussces&&(Cookies.remove("token"),this.$router.push("/login"))},postData:function(){var e=this;this.$validator.validateAll().then(function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(s){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!s){t.next=11;break}return t.next=3,Object(l["f"])({data:e.$route.params.id,password:e.password});case 3:if(a=t.sent,e.show=1,"0"==a.code){t.next=8;break}return e.ctxMessage=a.message,t.abrupt("return");case 8:e.isSussces=1,e.ctxMessage=e.$t("r-p-4");case 11:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())}}}),u=d,p=(s("ac19"),s("2877")),f=Object(p["a"])(u,a,o,!1,null,null,null);t["default"]=f.exports},1447:function(e,t,s){},"30db":function(e,t,s){"use strict";var a=s("a4c0"),o=s.n(a);o.a},3814:function(e,t,s){"use strict";var a=s("1447"),o=s.n(a);o.a},"714b":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"modal animated",class:{fadeIn:e.show,"is-active":e.show},on:{touchmove:function(e){e.preventDefault()}}},[s("div",{staticClass:"modal-background"}),s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-view"},[s("div",{staticClass:"modal-view-title"},[e._v("\n                "+e._s(e.$t("s6"))+"\n                "),s("div",{staticClass:"delete is-medium",on:{click:e.hideModal}})]),s("div",{staticClass:"modal-view-ctx",domProps:{innerHTML:e._s(e.ctxMessage)}}),s("div",{staticClass:"modal-button-view"},[s("div",{staticClass:"button button-style modal-button",on:{click:e.hideModal}},[e._v("确定")])])])])])},o=[],n={props:["show","ctxMessage"],methods:{hideModal:function(){this.$emit("hideModal")}}},r=n,i=(s("30db"),s("2877")),l=Object(i["a"])(r,a,o,!1,null,null,null);t["a"]=l.exports},"9fd2":function(e,t,s){},a4c0:function(e,t,s){},ab94:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"rellax-view"},[e._t("rellaxpic"),s("div",{directives:[{name:"rellax",rawName:"v-rellax",value:e.options,expression:"options"}],staticClass:"rellax-fixed-view",attrs:{id:"rellax-fixed-view"}},[e._t("rellaxpic"),s("div",{staticClass:"rellax-text-view"},[e._t("rellaxtext")],2)],2)],2)},o=[],n=s("8bbf"),r=s.n(n),i=s("d0bc");s("5118");r.a.use(i["a"]);var l={data:function(){return{options:{speed:"2"}}},created:function(){}},c=l,d=(s("3814"),s("2877")),u=Object(d["a"])(c,a,o,!1,null,null,null);t["a"]=u.exports},ac19:function(e,t,s){"use strict";var a=s("9fd2"),o=s.n(a);o.a},bc4f:function(e,t,s){},d0bc:function(e,t,s){"use strict";(function(e){
/*!
 * Vue Rellax v0.1.0
 * https://github.com/yutahaga/vue-rellax
 *
 * @license
 * Copyright (c) 2018 undefined
 * Released under the MIT license
 * https://github.com/yutahaga/vue-rellax/blob/master/LICENSE
 */
var s="undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{};function a(e,t){return t={exports:{}},e(t,t.exports),t.exports}var o,n=a(function(e){(function(t,s){e.exports?e.exports=s():t.Rellax=s()})(s,function(){var e=function(t,s){var a=Object.create(e.prototype),o=0,n=0,r=0,i=0,l=[],c=!0,d=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){return setTimeout(e,1e3/60)},u=null,p=window.cancelAnimationFrame||window.mozCancelAnimationFrame||clearTimeout,f=window.transformProp||function(){var e=document.createElement("div");if(null===e.style.transform){var t=["Webkit","Moz","ms"];for(var s in t)if(void 0!==e.style[t[s]+"Transform"])return t[s]+"Transform"}return"transform"}();a.options={speed:-2,center:!1,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1,callback:function(){}},s&&Object.keys(s).forEach(function(e){a.options[e]=s[e]}),t||(t=".rellax");var v="string"===typeof t?document.querySelectorAll(t):[t];if(!(v.length>0))throw new Error("The elements you're trying to select don't exist.");if(a.elems=v,a.options.wrapper&&!a.options.wrapper.nodeType){var m=document.querySelector(a.options.wrapper);if(!m)throw new Error("The wrapper you're trying to use don't exist.");a.options.wrapper=m}var w=function(){for(var e=0;e<a.elems.length;e++){var t=x(a.elems[e]);l.push(t)}},h=function(){for(var e=0;e<l.length;e++)a.elems[e].style.cssText=l[e].style;l=[],n=window.innerHeight,i=window.innerWidth,g(),w(),c&&(window.addEventListener("resize",h),c=!1),C()},x=function(e){var t=e.getAttribute("data-rellax-percentage"),s=e.getAttribute("data-rellax-speed"),o=e.getAttribute("data-rellax-zindex")||0,r=a.options.wrapper?a.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;if(a.options.relativeToWrapper){var l=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;r=l-a.options.wrapper.offsetTop}var c=a.options.vertical&&(t||a.options.center)?r:0,d=a.options.horizontal&&(t||a.options.center)?window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0,u=c+e.getBoundingClientRect().top,p=e.clientHeight||e.offsetHeight||e.scrollHeight,f=d+e.getBoundingClientRect().left,v=e.clientWidth||e.offsetWidth||e.scrollWidth,m=t||(c-u+n)/(p+n),w=t||(d-f+i)/(v+i);a.options.center&&(w=.5,m=.5);var h=s||a.options.speed,x=b(w,m,h),g=e.style.cssText,y="";if(g.indexOf("transform")>=0){var C=g.indexOf("transform"),k=g.slice(C),T=k.indexOf(";");y=T?" "+k.slice(11,T).replace(/\s/g,""):" "+k.slice(11).replace(/\s/g,"")}return{baseX:x.x,baseY:x.y,top:u,left:f,height:p,width:v,speed:h,style:g,transform:y,zindex:o}},g=function(){var e=o,t=r;if(o=a.options.wrapper?a.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset,r=a.options.wrapper?a.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset,a.options.relativeToWrapper){var s=(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset;o=s-a.options.wrapper.offsetTop}return!(e==o||!a.options.vertical)||!(t==r||!a.options.horizontal)},b=function(e,t,s){var o={},n=s*(100*(1-e)),r=s*(100*(1-t));return o.x=a.options.round?Math.round(n):Math.round(100*n)/100,o.y=a.options.round?Math.round(r):Math.round(100*r)/100,o},y=function(){g()&&!1===c&&C(),u=d(y)},C=function(){for(var e,t=0;t<a.elems.length;t++){var s=(o-l[t].top+n)/(l[t].height+n),c=(r-l[t].left+i)/(l[t].width+i);e=b(c,s,l[t].speed);var d=e.y-l[t].baseY,u=e.x-l[t].baseX,p=l[t].zindex,v="translate3d("+(a.options.horizontal?u:"0")+"px,"+(a.options.vertical?d:"0")+"px,"+p+"px) "+l[t].transform;a.elems[t].style[f]=v;var m=$("#transparent-view").height();$(a.elems[t]).css({top:m+"px"})}a.options.callback(e)};return a.destroy=function(){for(var e=0;e<a.elems.length;e++)a.elems[e].style.cssText=l[e].style;c||(window.removeEventListener("resize",h),c=!0),p(u),u=null},h(),y(),a.refresh=h,a};return e})}),r=new WeakMap,i=function(e,t,s){var a=t.value;r.set(e,new n(e,a))},l=function(e){var t=r.get(e);t&&t.destroy()},c=function(e){l(e)},d=function(e,t,s){var a=t.value;l(e),r.set(e,new n(e,a))},u=function(e){o=e,o.directive("rellax",{inserted:i,update:d,unbind:c})},p={install:u};t["a"]=p}).call(this,s("c8ba"))},d8d9:function(e,t,s){e.exports=s.p+"img/login.7cee7263.png"}}]);