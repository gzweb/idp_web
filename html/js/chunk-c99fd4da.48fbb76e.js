(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c99fd4da"],{"067e":function(e,t,n){"use strict";var o=n("8304"),i=n.n(o);i.a},"0b2e":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home-view fixed-view"},[o("DefaultNavBar"),o("RellaxBanner",{scopedSlots:e._u([{key:"rellaxpic",fn:function(){return[o("img",{staticClass:"rellax-pic",attrs:{src:n("d678"),alt:""}})]},proxy:!0},{key:"rellaxtext",fn:function(){return[o("div",{staticClass:"rellax-text is-size-1-desktop is-size-3-touch"},[e._v("Be better prepared for your IELTS test!")])]},proxy:!0}])}),o("div",{staticClass:"rellax-page-view"},[o("div",{staticClass:"title-style-1 faq-title"},[e._v("IELTS FAQ")]),e._m(0),e._l(e.list,function(t,n){return o("div",{key:n,staticClass:"container faq-wrap"},[o("div",{staticClass:"faq-content-title"},[e._v(e._s(t.group))]),e._l(t.list,function(i,r){return o("div",{key:r,staticClass:"faq-content-item"},[o("div",{staticClass:"faq-content-item-title",class:{"is-faq-active":t.isChecked},on:{click:function(t){return e.showItem(n)}}},[e._v("\n                    "+e._s(i.question)+"\n                ")]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.isChecked,expression:"item.isChecked"}],staticClass:"faq-content-item-ctx",domProps:{innerHTML:e._s(i.answer)}})])})],2)})],2),o("Footer")],1)},i=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[o("div",{staticClass:"columns is-gapless"},[o("div",{staticClass:"column is-6 notifications-column-view"},[o("div",{staticClass:"faq-notifications-view"},[o("div",{staticClass:"faq-notifications-item"},[o("div",{staticClass:"faq-notifications-title"},[e._v("Frequently asked questions about IELTS")]),o("div",{staticClass:"faq-notifications-text"},[e._v("In addition to the questions below, you will find IELTS support on our official IELTS website: \n                                "),o("a",{attrs:{href:"http://www.IELTSessentials.com"}},[e._v("www.IELTSessentials.com")]),e._v("\n                                . As a proud co-owner of IELTS, \n                                IDP Education provides free advice, practice questions and IELTS \n                                Masterclasses and seminars to help you be better prepared.\n                            ")])])])]),o("div",{staticClass:"column is-6 notifications-column-view"},[o("img",{staticClass:"faq-img",attrs:{src:n("961f"),alt:""}})])])])}],r=(n("96cf"),n("3b8d")),s=n("ab94"),a=n("3191"),c=n("83cf"),l={components:{RellaxBanner:s["a"]},translator:c["a"],data:function(){return{list:[{},{},{},{},{},{}]}},created:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(a["c"])();case 2:t=e.sent,this.list=t.data;case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:{showItem:function(e){this.$set(this.list[e],"isChecked",!this.list[e]["isChecked"])}}},u=l,p=(n("067e"),n("2877")),d=Object(p["a"])(u,o,i,!1,null,null,null);t["default"]=d.exports},1447:function(e,t,n){},3191:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return r}),n.d(t,"e",function(){return s}),n.d(t,"c",function(){return a}),n.d(t,"d",function(){return c});var o=n("a27e");function i(e){return o["a"].get("/application",{params:e})}function r(e){return o["a"].get("/application/".concat(e))}function s(){return o["a"].get("/profile")}function a(){return o["a"].get("/qa")}function c(e){return o["a"].get("/application/".concat(e,"/pay"))}},3814:function(e,t,n){"use strict";var o=n("1447"),i=n.n(o);i.a},8304:function(e,t,n){},"83cf":function(e,t,n){"use strict";t["a"]={cn:{home1:"申请列表",home2:"个人信息",home3:"修改密码",home4:"订单号",home5:"订单状态",home6:"创建时间",home7:"订单类型",home8:"操作",home9:"订单详情",home10:"去支付",home11:"必须填写包含英文大写小写数字8-20位混合密码",home12:"请确认密码一致",home13:"请填写旧密码",hoem18:"修改成功，请重新登录"},en:{home1:"Application History",home2:"My Account",home3:"Change Password",home4:"Application Number",home5:"Status",home6:"Creation time",home7:"Type",home8:"Operating",home9:"Details",home10:"Pay",home11:"Please provide a 8-20 alphanumeric [A-Z, a-z, 0-9,symbols] password",home12:"You must enter the password",home13:"Please fill in the old password",home18:"The modification is successful, please log in again."},zh:{home1:"申請列表",home2:"個人信息",home3:"修改密碼",home4:"訂單號",home5:"訂單狀態",home6:"創建時間",home7:"訂單類型",home8:"操作",home9:"訂單詳情",home10:"去支付",home11:"必須填寫包含英文大寫小寫數字8-20位混合密碼",home12:"請確認密碼壹致",home13:"請填寫舊密碼",home18:"修改成功，请重新登录"}}},"961f":function(e,t,n){e.exports=n.p+"img/faq_1.c684d58d.png"},ab94:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rellax-view"},[e._t("rellaxpic"),n("div",{directives:[{name:"rellax",rawName:"v-rellax",value:e.options,expression:"options"}],staticClass:"rellax-fixed-view"},[e._t("rellaxpic"),n("div",{staticClass:"rellax-text-view"},[e._t("rellaxtext")],2)],2)],2)},i=[],r=n("8bbf"),s=n.n(r),a=n("d0bc");s.a.use(a["a"]);var c={data:function(){return{options:{speed:"2"}}}},l=c,u=(n("3814"),n("2877")),p=Object(u["a"])(l,o,i,!1,null,null,null);t["a"]=p.exports},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(o){"object"===typeof window&&(n=window)}e.exports=n},d0bc:function(e,t,n){"use strict";(function(e){
/*!
 * Vue Rellax v0.1.0
 * https://github.com/yutahaga/vue-rellax
 *
 * @license
 * Copyright (c) 2018 undefined
 * Released under the MIT license
 * https://github.com/yutahaga/vue-rellax/blob/master/LICENSE
 */
var n="undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{};function o(e,t){return t={exports:{}},e(t,t.exports),t.exports}var i,r=o(function(e){(function(t,n){e.exports?e.exports=n():t.Rellax=n()})(n,function(){var e=function(t,n){var o=Object.create(e.prototype),i=0,r=0,s=0,a=0,c=[],l=!0,u=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(e){return setTimeout(e,1e3/60)},p=null,d=window.cancelAnimationFrame||window.mozCancelAnimationFrame||clearTimeout,f=window.transformProp||function(){var e=document.createElement("div");if(null===e.style.transform){var t=["Webkit","Moz","ms"];for(var n in t)if(void 0!==e.style[t[n]+"Transform"])return t[n]+"Transform"}return"transform"}();o.options={speed:-2,center:!1,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1,callback:function(){}},n&&Object.keys(n).forEach(function(e){o.options[e]=n[e]}),t||(t=".rellax");var m="string"===typeof t?document.querySelectorAll(t):[t];if(!(m.length>0))throw new Error("The elements you're trying to select don't exist.");if(o.elems=m,o.options.wrapper&&!o.options.wrapper.nodeType){var h=document.querySelector(o.options.wrapper);if(!h)throw new Error("The wrapper you're trying to use don't exist.");o.options.wrapper=h}var w=function(){for(var e=0;e<o.elems.length;e++){var t=x(o.elems[e]);c.push(t)}},v=function(){for(var e=0;e<c.length;e++)o.elems[e].style.cssText=c[e].style;c=[],r=window.innerHeight,a=window.innerWidth,y(),w(),l&&(window.addEventListener("resize",v),l=!1),T()},x=function(e){var t=e.getAttribute("data-rellax-percentage"),n=e.getAttribute("data-rellax-speed"),i=e.getAttribute("data-rellax-zindex")||0,s=o.options.wrapper?o.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;if(o.options.relativeToWrapper){var c=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;s=c-o.options.wrapper.offsetTop}var l=o.options.vertical&&(t||o.options.center)?s:0,u=o.options.horizontal&&(t||o.options.center)?window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0,p=l+e.getBoundingClientRect().top,d=e.clientHeight||e.offsetHeight||e.scrollHeight,f=u+e.getBoundingClientRect().left,m=e.clientWidth||e.offsetWidth||e.scrollWidth,h=t||(l-p+r)/(d+r),w=t||(u-f+a)/(m+a);o.options.center&&(w=.5,h=.5);var v=n||o.options.speed,x=g(w,h,v),y=e.style.cssText,b="";if(y.indexOf("transform")>=0){var T=y.indexOf("transform"),C=y.slice(T),q=C.indexOf(";");b=q?" "+C.slice(11,q).replace(/\s/g,""):" "+C.slice(11).replace(/\s/g,"")}return{baseX:x.x,baseY:x.y,top:p,left:f,height:d,width:m,speed:v,style:y,transform:b,zindex:i}},y=function(){var e=i,t=s;if(i=o.options.wrapper?o.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset,s=o.options.wrapper?o.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset,o.options.relativeToWrapper){var n=(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset;i=n-o.options.wrapper.offsetTop}return!(e==i||!o.options.vertical)||!(t==s||!o.options.horizontal)},g=function(e,t,n){var i={},r=n*(100*(1-e)),s=n*(100*(1-t));return i.x=o.options.round?Math.round(r):Math.round(100*r)/100,i.y=o.options.round?Math.round(s):Math.round(100*s)/100,i},b=function(){y()&&!1===l&&T(),p=u(b)},T=function(){for(var e,t=0;t<o.elems.length;t++){var n=(i-c[t].top+r)/(c[t].height+r),l=(s-c[t].left+a)/(c[t].width+a);e=g(l,n,c[t].speed);var u=e.y-c[t].baseY,p=e.x-c[t].baseX,d=c[t].zindex,m="translate3d("+(o.options.horizontal?p:"0")+"px,"+(o.options.vertical?u:"0")+"px,"+d+"px) "+c[t].transform;o.elems[t].style[f]=m}o.options.callback(e)};return o.destroy=function(){for(var e=0;e<o.elems.length;e++)o.elems[e].style.cssText=c[e].style;l||(window.removeEventListener("resize",v),l=!0),d(p),p=null},v(),b(),o.refresh=v,o};return e})}),s=new WeakMap,a=function(e,t,n){var o=t.value;s.set(e,new r(e,o))},c=function(e){var t=s.get(e);t&&t.destroy()},l=function(e){c(e)},u=function(e,t,n){var o=t.value;c(e),s.set(e,new r(e,o))},p=function(e){i=e,i.directive("rellax",{inserted:a,update:u,unbind:l})},d={install:p};t["a"]=d}).call(this,n("c8ba"))},d678:function(e,t,n){e.exports=n.p+"img/banner_8.b16c569f.png"}}]);