(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d3ecf51"],{1447:function(t,e,n){},3191:function(t,e,n){"use strict";n.d(e,"c",function(){return i}),n.d(e,"b",function(){return s}),n.d(e,"f",function(){return r}),n.d(e,"d",function(){return o}),n.d(e,"e",function(){return l}),n.d(e,"a",function(){return c});var a=n("a27e");function i(t){return a["a"].get("/application",{params:t})}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return a["a"].get("/application/".concat(t),{params:e})}function r(){return a["a"].get("/profile")}function o(){return a["a"].get("/qa")}function l(t){return a["a"].get("/application/".concat(t,"/pay"))}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return a["a"].post("/application/".concat(t,"/confirm"),e)}},3388:function(t,e,n){},3814:function(t,e,n){"use strict";var a=n("1447"),i=n.n(a);i.a},"46d1":function(t,e,n){"use strict";e["a"]={cn:{table1:"申请总览",table2:"返回主页",table3:"打印",table4:"请在限定时间内完成支付",table5:"确认及付款",table6:"确认",pay1:"支付剩余时间",pay2:"快递费",pay3:"EOR申请费",pay4:"行政费",pay5:"总金额"},en:{table1:"Application Summary",table2:"Return To Home",table3:"Print",table4:"Please complete the payment within the time limit",table5:"Confirm and Pay",table6:"Confirm",pay1:"Remaining Time for Payment",pay2:"Courier Fee",pay3:"EOR Fee",pay4:"Administrative Fee",pay5:"Total Amount"},zh:{table1:"申請總覽",table2:"返回主頁",table3:"列印",table4:"請在限定時間內完成付款",table5:"確認及付款",table6:"確認",pay1:"支付剩餘時間",pay2:"快遞費",pay3:"EOR申請費",pay4:"行政費",pay5:"總金額"}}},"68fb":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"application-view fixed-view"},[a("DefaultNavBar"),a("RellaxBanner",{scopedSlots:t._u([{key:"rellaxpic",fn:function(){return[a("img",{staticClass:"rellax-pic",attrs:{src:n("ce9d"),alt:""}})]},proxy:!0},{key:"rellaxtext",fn:function(){return[a("div",{staticClass:"rellax-text is-size-1-desktop is-size-3-touch"},[t._v(t._s(t.$t("table1")))])]},proxy:!0}])}),a("div",{staticClass:"rellax-page-view"},[a("div",{staticClass:"title-style-1 title-style-text"},[t._v(t._s(t.$t("table1")))]),a("div",{staticClass:"container"},[a("div",{staticClass:"table-view"},[a("div",{staticClass:"columns is-marginless is-gapless is-mobile table-view-item table-view-item-first"},[a("div",{staticClass:"column"},[t._v(t._s(t.menuList[0]["text"])+"："+t._s(t.menuList[0]["value"]))]),a("div",{staticClass:"column has-text-right"},[t._v(t._s(t.menuList[1]["text"])+"：\n                        "),"cn"==t.getLanguage?[a("span",{staticClass:"table-color"},[t._v(t._s(t.h)+"小时:"+t._s(t.m)+"分钟")])]:"zh"==t.getLanguage?[a("span",{staticClass:"table-color"},[t._v(t._s(t.h)+"小時:"+t._s(t.m)+"分鐘")])]:[a("span",{staticClass:"table-color"},[t._v(t._s(t.h)+"h:"+t._s(t.m)+"m")])]],2)]),t._l(t.list,function(e,n){return a("div",{key:n,staticClass:"table-item"},[a("div",{staticClass:"table-item-title",class:{"no-margin":0==n}},[t._v(" "+t._s(e.title))]),a("div",{staticClass:"columns is-multiline is-variable is-8"},t._l(e.value,function(e,n){return a("div",{key:n,staticClass:"column is-6"},[a("div",{staticClass:"columns is-mobile is-variable"},[a("div",{staticClass:"column is-6 table-color-1"},[t._v(t._s(e.text))]),a("div",{staticClass:"column is-6 has-text-right table-color-2"},[t._v(t._s(e.value))])])])}),0)])})],2),a("div",{staticStyle:{"margin-top":"100px"}}),t._l(t.list1,function(e,n){return a("div",{key:n,staticClass:"columns is-marginless is-gapless price-item"},[a("div",{staticClass:"column has-text-right"},[t._v(t._s(e.text)+"："+t._s(e.value))])])}),a("div",{staticClass:"columns is-marginless is-gapless price-item"},[a("div",{staticClass:"column has-text-right"},[t._v(t._s(t.moneyInfo.text)+"： "),a("span",{staticClass:"price-color"},[t._v(t._s(t.moneyInfo.value))])])]),a("div",{staticClass:"columns is-marginless is-gapless price-item"},[a("div",{staticClass:"column has-text-right",staticStyle:{"margin-bottom":"30px"}},[a("a",{staticClass:"button button-style price-button",attrs:{href:t.link}},[t._v(t._s(t.$t("table5")))])])])],2)]),a("Footer")],1)},i=[],s=(n("96cf"),n("3b8d")),r=n("85f2"),o=n.n(r);function l(t,e,n){return e in t?o()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n("3388");var c=n("ab94");function u(t){var e=parseInt(t),n=0,a=0;return e>60&&(n=parseInt(e/60),e=parseInt(e%60),n>60&&(a=parseInt(n/60),n=parseInt(n%60))),{s:e<10?"0"+e:e,m:n<10?"0"+n:n,h:a<10?"0"+a:a}}var p,d=n("3191"),f=n("46d1"),m={components:{RellaxBanner:c["a"],timer:null},translator:f["a"],data:function(){var t;return t={list:[],modalShow:0,ctxMessage:"",s:"00",m:"00",h:"00",menuList:[{},{}]},l(t,"list",[]),l(t,"list1",[]),l(t,"link",""),l(t,"moneyInfo",""),t},computed:{getLanguage:function(){return this.$store.state.language}},created:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(){var e,n,a=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(d["e"])(this.$route.params.id);case 2:e=t.sent,this.menuList=e.data.info[0]["value"],this.list=e.data.info.slice(1),this.list1=e.data.money,this.moneyInfo=e.data.money_total,this.link=e.data.pay_url,n=this.menuList[1]["value"],p=setInterval(function(){n<=0&&clearInterval(p);var t=u(--n);a.s=t["s"],a.m=t["m"],a.h=t["h"]},1e3);case 11:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),destroyed:function(){clearInterval(p)},methods:{}},v=m,w=n("2877"),b=Object(w["a"])(v,a,i,!1,null,null,null);e["default"]=b.exports},"85f2":function(t,e,n){t.exports=n("ec5b")},ab94:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rellax-view"},[t._t("rellaxpic"),n("div",{directives:[{name:"rellax",rawName:"v-rellax",value:t.options,expression:"options"}],staticClass:"rellax-fixed-view",attrs:{id:"rellax-fixed-view"}},[t._t("rellaxpic"),n("div",{staticClass:"rellax-text-view"},[t._t("rellaxtext")],2)],2)],2)},i=[],s=n("8bbf"),r=n.n(s),o=n("d0bc");n("5118");r.a.use(o["a"]);var l={data:function(){return{options:{speed:"2"}}},created:function(){}},c=l,u=(n("3814"),n("2877")),p=Object(u["a"])(c,a,i,!1,null,null,null);e["a"]=p.exports},ce9d:function(t,e,n){t.exports=n.p+"img/banner_5.91d490aa.png"},d0bc:function(t,e,n){"use strict";(function(t){
/*!
 * Vue Rellax v0.1.0
 * https://github.com/yutahaga/vue-rellax
 *
 * @license
 * Copyright (c) 2018 undefined
 * Released under the MIT license
 * https://github.com/yutahaga/vue-rellax/blob/master/LICENSE
 */
var n="undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{};function a(t,e){return e={exports:{}},t(e,e.exports),e.exports}var i,s=a(function(t){(function(e,n){t.exports?t.exports=n():e.Rellax=n()})(n,function(){var t=function(e,n){var a=Object.create(t.prototype),i=0,s=0,r=0,o=0,l=[],c=!0,u=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){return setTimeout(t,1e3/60)},p=null,d=window.cancelAnimationFrame||window.mozCancelAnimationFrame||clearTimeout,f=window.transformProp||function(){var t=document.createElement("div");if(null===t.style.transform){var e=["Webkit","Moz","ms"];for(var n in e)if(void 0!==t.style[e[n]+"Transform"])return e[n]+"Transform"}return"transform"}();a.options={speed:-2,center:!1,wrapper:null,relativeToWrapper:!1,round:!0,vertical:!0,horizontal:!1,callback:function(){}},n&&Object.keys(n).forEach(function(t){a.options[t]=n[t]}),e||(e=".rellax");var m="string"===typeof e?document.querySelectorAll(e):[e];if(!(m.length>0))throw new Error("The elements you're trying to select don't exist.");if(a.elems=m,a.options.wrapper&&!a.options.wrapper.nodeType){var v=document.querySelector(a.options.wrapper);if(!v)throw new Error("The wrapper you're trying to use don't exist.");a.options.wrapper=v}var w=function(){for(var t=0;t<a.elems.length;t++){var e=h(a.elems[t]);l.push(e)}},b=function(){for(var t=0;t<l.length;t++)a.elems[t].style.cssText=l[t].style;l=[],s=window.innerHeight,o=window.innerWidth,y(),w(),c&&(window.addEventListener("resize",b),c=!1),_()},h=function(t){var e=t.getAttribute("data-rellax-percentage"),n=t.getAttribute("data-rellax-speed"),i=t.getAttribute("data-rellax-zindex")||0,r=a.options.wrapper?a.options.wrapper.scrollTop:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;if(a.options.relativeToWrapper){var l=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;r=l-a.options.wrapper.offsetTop}var c=a.options.vertical&&(e||a.options.center)?r:0,u=a.options.horizontal&&(e||a.options.center)?window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0,p=c+t.getBoundingClientRect().top,d=t.clientHeight||t.offsetHeight||t.scrollHeight,f=u+t.getBoundingClientRect().left,m=t.clientWidth||t.offsetWidth||t.scrollWidth,v=e||(c-p+s)/(d+s),w=e||(u-f+o)/(m+o);a.options.center&&(w=.5,v=.5);var b=n||a.options.speed,h=x(w,v,b),y=t.style.cssText,g="";if(y.indexOf("transform")>=0){var _=y.indexOf("transform"),C=y.slice(_),T=C.indexOf(";");g=T?" "+C.slice(11,T).replace(/\s/g,""):" "+C.slice(11).replace(/\s/g,"")}return{baseX:h.x,baseY:h.y,top:p,left:f,height:d,width:m,speed:b,style:y,transform:g,zindex:i}},y=function(){var t=i,e=r;if(i=a.options.wrapper?a.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset,r=a.options.wrapper?a.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset,a.options.relativeToWrapper){var n=(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset;i=n-a.options.wrapper.offsetTop}return!(t==i||!a.options.vertical)||!(e==r||!a.options.horizontal)},x=function(t,e,n){var i={},s=n*(100*(1-t)),r=n*(100*(1-e));return i.x=a.options.round?Math.round(s):Math.round(100*s)/100,i.y=a.options.round?Math.round(r):Math.round(100*r)/100,i},g=function(){y()&&!1===c&&_(),p=u(g)},_=function(){for(var t,e=0;e<a.elems.length;e++){var n=(i-l[e].top+s)/(l[e].height+s),c=(r-l[e].left+o)/(l[e].width+o);t=x(c,n,l[e].speed);var u=t.y-l[e].baseY,p=t.x-l[e].baseX,d=l[e].zindex,m="translate3d("+(a.options.horizontal?p:"0")+"px,"+(a.options.vertical?u:"0")+"px,"+d+"px) "+l[e].transform;a.elems[e].style[f]=m;var v=$("#transparent-view").height();$(a.elems[e]).css({top:v+"px"})}a.options.callback(t)};return a.destroy=function(){for(var t=0;t<a.elems.length;t++)a.elems[t].style.cssText=l[t].style;c||(window.removeEventListener("resize",b),c=!0),d(p),p=null},b(),g(),a.refresh=b,a};return t})}),r=new WeakMap,o=function(t,e,n){var a=e.value;r.set(t,new s(t,a))},l=function(t){var e=r.get(t);e&&e.destroy()},c=function(t){l(t)},u=function(t,e,n){var a=e.value;l(t),r.set(t,new s(t,a))},p=function(t){i=t,i.directive("rellax",{inserted:o,update:u,unbind:c})},d={install:p};e["a"]=d}).call(this,n("c8ba"))},e341:function(t,e,n){var a=n("d13f");a(a.S+a.F*!n("7d95"),"Object",{defineProperty:n("3adc").f})},ec5b:function(t,e,n){n("e341");var a=n("a7d3").Object;t.exports=function(t,e,n){return a.defineProperty(t,e,n)}}}]);