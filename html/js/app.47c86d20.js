(function(e){function t(t){for(var a,i,r=t[0],c=t[1],u=t[2],l=0,d=[];l<r.length;l++)i=r[l],s[i]&&d.push(s[i][0]),s[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var r=n[i];0!==s[r]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},i={app:0},s={app:0},o=[];function r(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-1d3ecf51":"5d14d2d1","chunk-22250683":"ec54387c","chunk-321e4e85":"57c51a08","chunk-4a21ce8b":"35d8e923","chunk-521e0f6c":"5e978013","chunk-17e2efe2":"e7909a47","chunk-2cfbbe67":"3447357a","chunk-39c9a0b9":"3dd28274","chunk-675d2e42":"55e5c62b","chunk-795007da":"8106d500","chunk-3d1d08b2":"f20576ee","chunk-469274f1":"fa864228","chunk-63781a48":"419a9b75","chunk-6f4353e2":"3c67a6bc","chunk-7ada5dbc":"9b4a7c8d","chunk-9bf37730":"1d980bee","chunk-c9fa76fa":"e1e5d8a6","chunk-cb05576c":"a6b52b4c"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-1d3ecf51":1,"chunk-22250683":1,"chunk-321e4e85":1,"chunk-4a21ce8b":1,"chunk-521e0f6c":1,"chunk-2cfbbe67":1,"chunk-3d1d08b2":1,"chunk-469274f1":1,"chunk-63781a48":1,"chunk-6f4353e2":1,"chunk-7ada5dbc":1,"chunk-9bf37730":1,"chunk-c9fa76fa":1,"chunk-cb05576c":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-1d3ecf51":"7d9ca5e3","chunk-22250683":"c8a43a5c","chunk-321e4e85":"3f25db7f","chunk-4a21ce8b":"a3363d4d","chunk-521e0f6c":"2188942d","chunk-17e2efe2":"31d6cfe0","chunk-2cfbbe67":"82e89b65","chunk-39c9a0b9":"31d6cfe0","chunk-675d2e42":"31d6cfe0","chunk-795007da":"31d6cfe0","chunk-3d1d08b2":"a4c780dc","chunk-469274f1":"e9de8a55","chunk-63781a48":"c8024077","chunk-6f4353e2":"f152dc7b","chunk-7ada5dbc":"911bd1d1","chunk-9bf37730":"86ef6db1","chunk-c9fa76fa":"922c789e","chunk-cb05576c":"1e7c0a07"}[e]+".css",s=c.p+a,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var u=o[r],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===s))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){u=d[r],l=u.getAttribute("data-href");if(l===a||l===s)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete i[e],p.parentNode.removeChild(p),n(o)},p.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){i[e]=0}));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise(function(t,n){a=s[e]=[t,n]});t.push(a[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=r(e),u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+a+": "+i+")");o.type=a,o.request=i,n[1](o)}s[e]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/html/",c.oe=function(e){throw e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2a56":function(e,t,n){},"41cb":function(e,t,n){"use strict";var a=n("8bbf"),i=n.n(a),s=n("6389"),o=n.n(s),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"index-view"},[n("DefaultNavBar"),n("Banner")],1)},c=[],u=(n("96cf"),n("3b8d")),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("swiper",{ref:"parentSwiper",staticClass:"index-banner",attrs:{options:e.parentConfig}},[n("swiper-slide",{staticClass:"parent-slide"},[n("swiper",{ref:"childSwiper",staticClass:"child-swiper",attrs:{options:e.childConfig}},[e._l(e.bannerData.banner,function(t,a){return n("swiper-slide",{key:a},[n("div",{staticClass:"slide-item"},[n("img",{staticClass:"slide-img",class:{"slide-pic-active":e.swiperIndex==a},attrs:{src:t.image_url,alt:""}})]),0==a?n("div",{staticClass:"slide-ctx"},[n("div",{staticClass:"container"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-8 is-offset-2-desktop"},[n("div",{staticClass:"home-ctx",domProps:{innerHTML:e._s(t.text)}})])])])]):e._e(),a>0?n("div",{staticClass:"slide-ctx"},[n("div",{staticClass:"slide-text is-size-3-touch"},[e._v("\n                        "+e._s(e.bannerData.sector[a]["name"])+"\n                    ")]),n("div",{staticClass:"slide-button",on:{click:function(t){return e.goPage(a)}}},[e._v("\n                        \n                        "+e._s(e.$t("s13"))+"\n                    ")])]):e._e()])}),n("div",{staticClass:"swiper-pagination",attrs:{id:"swiper-pagination"}})],2)],1),n("swiper-slide",{staticClass:"slide-auto parent-slide"},[n("Footer")],1)],1)},d=[],p=n("d9b7"),f={computed:{bannerData:function(){return this.$store.state.TestList}},data:function(){var e=this;return{swiperIndex:0,parentConfig:{direction:"vertical",slidesPerView:"auto",mousewheel:!0,on:{reachBeginning:function(e){},reachEnd:function(e){}}},childConfig:{effect:"fade",lazy:!0,autoplay:{delay:1e4,stopOnLastSlide:!1,disableOnInteraction:!0},pagination:{el:"#swiper-pagination",clickable:!0,bulletClass:"my-bullet",bulletActiveClass:"my-bullet-active"},on:{slideChange:function(t){var n=e.$refs.childSwiper.swiper.activeIndex;e.swiperIndex=n}}}}},methods:{setSwiperPage:function(e){this.$refs.childSwiper.swiper.slideTo(e)},goPage:function(e){this.bannerData["banner"][e]["external"]?window.location.href=this.bannerData["banner"][e]["jump_url"]:this.$router.push({path:this.bannerData["banner"][e]["jump_url"]})}},created:function(){},components:{swiper:p["swiper"],swiperSlide:p["swiperSlide"]}},h=f,v=(n("f4e2"),n("2877")),b=Object(v["a"])(h,l,d,!1,null,null,null),m=b.exports,g={name:"home",data:function(){return{}},methods:{},created:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}(),components:{Banner:m}},k=g,w=(n("ca9c"),Object(v["a"])(k,r,c,!1,null,null,null)),_=w.exports;i.a.use(o.a);t["a"]=new o.a({mode:"history",base:"/html",routes:[{path:"/",name:"Index",component:_},{path:"/home",name:"Home",component:function(){return n.e("chunk-3d1d08b2").then(n.bind(null,"bb51"))},meta:{login:!0,keepAlive:!0}},{path:"/about",name:"About",component:function(){return n.e("chunk-6f4353e2").then(n.bind(null,"f820"))}},{path:"/score_application",name:"ScoreApplication",component:function(){return Promise.all([n.e("chunk-321e4e85"),n.e("chunk-521e0f6c"),n.e("chunk-17e2efe2")]).then(n.bind(null,"0059"))},meta:{login:!0}},{path:"/test_date_application",name:"TestDateApplication",component:function(){return Promise.all([n.e("chunk-321e4e85"),n.e("chunk-521e0f6c"),n.e("chunk-39c9a0b9")]).then(n.bind(null,"be11"))},meta:{login:!0}},{path:"/refund_application",name:"RefundApplication",component:function(){return Promise.all([n.e("chunk-321e4e85"),n.e("chunk-521e0f6c"),n.e("chunk-795007da")]).then(n.bind(null,"2251"))},meta:{login:!0}},{path:"/additional_test_application",name:"AdditionalTestApplication",component:function(){return Promise.all([n.e("chunk-321e4e85"),n.e("chunk-521e0f6c"),n.e("chunk-2cfbbe67")]).then(n.bind(null,"0fbf"))},meta:{login:!0}},{path:"/post_score_application",name:"PostScoreApplication",component:function(){return Promise.all([n.e("chunk-321e4e85"),n.e("chunk-521e0f6c"),n.e("chunk-675d2e42")]).then(n.bind(null,"a702"))},meta:{login:!0}},{path:"/login",name:"Login",component:function(){return Promise.all([n.e("chunk-321e4e85"),n.e("chunk-4a21ce8b")]).then(n.bind(null,"a55b"))}},{path:"/email_login",name:"EmailLogin",component:function(){return n.e("chunk-c9fa76fa").then(n.bind(null,"70c6"))}},{path:"/sign_up",name:"SignUp",component:function(){return n.e("chunk-22250683").then(n.bind(null,"5c9c"))}},{path:"/forget_password",name:"ForgetPassword",component:function(){return n.e("chunk-9bf37730").then(n.bind(null,"5373"))}},{path:"/price_table/:id",name:"PriceTable",component:function(){return n.e("chunk-1d3ecf51").then(n.bind(null,"68fb"))},meta:{login:!0}},{path:"/contact_us",name:"ContactUs",component:function(){return n.e("chunk-7ada5dbc").then(n.bind(null,"e9bb"))}},{path:"/table/:id",name:"Table",component:function(){return n.e("chunk-63781a48").then(n.bind(null,"3f0e"))},meta:{login:!0}},{path:"/faq",name:"FAQ",component:function(){return n.e("chunk-469274f1").then(n.bind(null,"0b2e"))}},{path:"/reset_password/:id",name:"ResetPassword",component:function(){return n.e("chunk-cb05576c").then(n.bind(null,"0813"))}}],scrollBehavior:function(e,t,n){return n||"undefined"===typeof n?n||void 0:{x:0,y:0}}})},4256:function(e,t,n){e.exports=n.p+"img/top-logo.8eada984.png"},"53d7":function(e,t,n){"use strict";var a=n("730d"),i=n.n(a);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("7f7f"),n("14c6"),n("08c1"),n("4842"),n("d9fc");var a=n("8bbf"),i=n.n(a),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{style:{paddingTop:e.getTop+"px"},attrs:{id:"app"}},[n("keep-alive",{attrs:{include:e.includeList}},[n("router-view")],1)],1)},o=[],r={name:"App",data:function(){return{paddingTop:"0"}},computed:{includeList:function(){return this.$store.state.includeList},getTop:function(){return this.$store.state.appTop}}},c=r,u=(n("5c0b"),n("2877")),l=Object(u["a"])(c,s,o,!1,null,null,null),d=l.exports,p=n("41cb"),f=n("c0d6"),h=n("79f7"),v=n.n(h),b=n("9718"),m=n.n(b),g=n("323e"),k=n.n(g),w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"transparent-view",attrs:{id:"transparent-view"}},[e.isCookieTips?a("div",{staticClass:"cookie-view",attrs:{id:"cookie-view"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"cookie-tips"},[a("div",{staticClass:"cookie-close",on:{click:e.closeCookieTips}}),a("div",{staticClass:"cookie-text",domProps:{innerHTML:e._s(e.$t("s16"))}})])])]):e._e(),a("nav",{staticClass:"pc-navbar is-hidden-touch navbar is-transparent"},[a("div",{staticClass:"container"},[a("div",{staticClass:"navbar-brand is-marginless"},[a("a",{staticClass:"navbar-item is-paddingless",on:{click:e.goIndex}},[a("img",{staticClass:"navbar-logo",attrs:{src:n("4256"),alt:""}})])]),a("div",{staticClass:"navbar-menu is-marginless"},[a("div",{staticClass:"navbar-end"},[e.isLogin?e._e():a("div",{staticClass:"navbar-item is-paddingless pc-navbar-item",on:{click:function(t){return e.goPage(0)}}},[e._v("\n                            "+e._s(e.$t("s1"))+"\n                        ")]),e.isLogin?e._e():a("div",{staticClass:"navbar-item is-paddingless pc-navbar-item",on:{click:function(t){return e.goPage(1)}}},[e._v("\n                            "+e._s(e.$t("s2"))+"   \n                        ")]),a("div",{staticClass:"navbar-item is-paddingless pc-navbar-item",on:{click:e.goIndex}},[e._v("\n                            "+e._s(e.$t("s12"))+"\n                        ")]),a("div",{staticClass:"navbar-item is-paddingless pc-navbar-item",on:{click:function(t){return e.goPage(2)}}},[e._v("\n                            "+e._s(e.$t("s3"))+"  \n                        ")]),a("div",{staticClass:"navbar-item is-paddingless pc-navbar-item",on:{click:function(t){return e.goPage(3)}}},[e._v("\n                            "+e._s(e.$t("s4"))+"   \n                        ")]),a("div",{staticClass:"navbar-item is-paddingless pc-navbar-item",on:{click:function(t){return e.goPage(4)}}},[e._v("\n                            "+e._s(e.$t("s5"))+"  \n                        ")]),a("div",{staticClass:"navbar-item is-paddingless pc-navbar-item",on:{click:function(t){return e.goPage(5)}}},[e._v("\n                            "+e._s(e.$t("s8"))+"  \n                        ")]),e.isLogin?a("div",{staticClass:"navbar-item is-paddingless pc-navbar-item",on:{click:e.exitAccount}},[e._v("\n                            "+e._s(e.$t("s7"))+"   \n                        ")]):e._e(),a("Language")],1)])])]),a("div",{staticClass:"navigation-list is-hidden-touch"},[a("div",{staticClass:"container is-hidden-touch navigation-view"},[a("div",{staticClass:"navigation-wrap"},e._l(e.getTestList.sector,function(t,n){return n>0?a("div",{key:n,staticClass:"navigation-item has-text-centered",class:{"navbar-active":n==e.navbarKey},on:{click:function(t){return e.testPage(n)}}},[e._v("\n                        "+e._s(t.name)+"\n                    ")]):e._e()}),0)])]),a("nav",{staticClass:"mobile-navbar is-hidden-desktop navbar"},[a("div",{staticClass:"container mobile-center"},[a("div",{staticClass:"navbar-brand"},[a("div",{staticClass:"navbar-item",on:{click:e.goIndex}},[a("img",{staticClass:"navbar-logo",attrs:{src:n("4256"),alt:""}})]),a("div",{staticClass:"mobile-fixed-item is-paddingless"},[a("Language")],1),a("div",{staticClass:"navbar-burger",class:{"is-active":e.isNavbar},on:{click:e.showlayer}},[a("span"),a("span"),a("span")])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isNavbar,expression:"isNavbar"}],staticClass:"mobile-layer animated",style:{top:e.getTop+"px",height:"calc(100% - "+e.getTop+"px)"}},[e._l(e.getTestList.sector,function(t,n){return n>0?a("div",{key:n,staticClass:"mobile-navbar-item is-paddingless navbar-item",on:{click:function(t){return e.testPage(n)}}},[a("div",{staticClass:"mobile-navbar-ctx"},[e._v(e._s(t.name))])]):e._e()}),a("div",{staticClass:"mobile-navbar-item is-paddingless navbar-item",on:{click:e.goIndex}},[a("div",{staticClass:"mobile-navbar-ctx"},[e._v(e._s(e.$t("s12")))])]),a("div",{staticClass:"mobile-navbar-item is-paddingless navbar-item",on:{click:function(t){return e.goPage(2)}}},[a("div",{staticClass:"mobile-navbar-ctx"},[e._v(e._s(e.$t("s3")))])]),a("div",{staticClass:"mobile-navbar-item is-paddingless navbar-item",on:{click:function(t){return e.goPage(3)}}},[a("div",{staticClass:"mobile-navbar-ctx"},[e._v(e._s(e.$t("s4")))])]),a("div",{staticClass:"mobile-navbar-item is-paddingless navbar-item",on:{click:function(t){return e.goPage(4)}}},[a("div",{staticClass:"mobile-navbar-ctx"},[e._v(e._s(e.$t("s5")))])]),a("div",{staticClass:"mobile-navbar-item is-paddingless navbar-item",on:{click:function(t){return e.goPage(5)}}},[a("div",{staticClass:"mobile-navbar-ctx"},[e._v(e._s(e.$t("s8")))])]),e.isLogin?a("div",{staticClass:"mobile-navbar-item is-paddingless navbar-item",on:{click:e.exitAccount}},[a("div",{staticClass:"mobile-navbar-ctx"},[e._v(e._s(e.$t("s7")))])]):e._e(),e.isLogin?e._e():a("div",{staticClass:"mobile-flex"},[a("div",{staticClass:"mobile-layer-item",on:{click:function(t){return e.goPage(0)}}},[e._v(e._s(e.$t("s1")))]),a("div",{staticClass:"mobile-flex-line"}),a("div",{staticClass:"mobile-layer-item",on:{click:function(t){return e.goPage(1)}}},[e._v(e._s(e.$t("s2")))])])],2)])},C=[],x=(n("96cf"),n("3b8d")),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar-item language-navbar-item is-paddingless"},[n("div",{staticClass:"dropdown",class:{"is-active":e.isLanguage}},[n("div",{staticClass:"dropdown-trigger is-hidden-mobile"},[n("div",{staticClass:"navbar-button other-navbar-button",class:{"navbar-button-active":e.isLanguage},on:{click:function(t){e.isLanguage=!e.isLanguage}}},[e._v(e._s(e.getLanguage))])]),n("div",{staticClass:"dropdown-trigger is-hidden-tablet"},[n("div",{staticClass:"navbar-button other-navbar-button",class:{"navbar-button-active":e.isLanguage},on:{click:function(t){e.isLanguage=!e.isLanguage}}},[e._v(e._s(e.getLanguage))])]),n("div",{staticClass:"dropdown-menu",attrs:{id:"dropdown-menu",role:"menu"}},[n("div",{staticClass:"dropdown-content is-6"},e._l(3,function(t,a){return n("a",{key:a,staticClass:"dropdown-item",on:{click:function(t){return e.setLanguage(a)}}},[0==a?[e._v("简体中文")]:1==a?[e._v("繁體中文")]:2==a?[e._v("English")]:e._e()],2)}),0)])])])},L=[],T={data:function(){return{isLanguage:0}},computed:{getLanguage:function(){var e;switch(this.$store.state.language){case"cn":e="简体中文";break;case"zh":e="繁體中文";break;case"en":e="English";break}return e}},methods:{setLanguage:function(e){var t=["cn","zh","en"];localStorage.setItem("language",t[e]),window.location.reload()}}},P=T,E=(n("e6dd"),Object(u["a"])(P,y,L,!1,null,null,null)),A=E.exports,S=n("a27e"),I={getBanner:function(e){return S["a"].get("/banner",{params:e})}},j=n("e876"),O=(n("5118"),{props:["type"],data:function(){return{isNavbar:0,navbarKey:0}},computed:{getTestList:function(){return this.$store.state.TestList},isCookieTips:function(){return this.$store.state.isCookieTips},isLogin:function(){return this.$store.state.isLogin},getTop:function(){return this.$store.state.appTop}},methods:{testPage:function(e){this.isNavbar=!1,this.getTestList["banner"][e]["external"]?window.location.href=this.getTestList["banner"][e]["jump_url"]:this.$router.push({path:this.getTestList["banner"][e]["jump_url"]})},closeCookieTips:function(){this.$store.commit("setCookieTipsState",0);var e=$("#transparent-view").height()-$("#cookie-view").height();this.$store.commit("setAppTop",e),$("#rellax-fixed-view").css({top:e+"px"})},exitAccount:function(){var e=Object(x["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(j["c"])();case 2:Cookies.remove("token"),location.reload();case 4:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}(),showlayer:function(){this.isNavbar=!this.isNavbar},goPage:function(e){switch(this.isNavbar=!1,e){case 0:this.$router.push("/login");break;case 1:this.$router.push("/sign_up");break;case 2:this.$router.push("/contact_us");break;case 3:this.$router.push("/about");break;case 4:this.$router.push("/home");break;case 5:this.$router.push("/faq");break}},goIndex:function(){"Index"==this.$route.name?window.location.reload():this.$router.push("/")}},created:function(){var e=Object(x["a"])(regeneratorRuntime.mark(function e(){var t,n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!(this.getTestList.length<2)){e.next=6;break}return e.next=3,I.getBanner();case 3:t=e.sent,t.data.sector.unshift({}),this.$store.commit("setTestList",t.data);case 6:this.$nextTick(function(){var e=$("#transparent-view").height();n.$store.commit("setAppTop",e)}),e.t0=this.$route.name,e.next="ScoreApplication"===e.t0?11:"TestDateApplication"===e.t0?13:"RefundApplication"===e.t0?15:"AdditionalTestApplication"===e.t0?17:"PostScoreApplication"===e.t0?19:21;break;case 11:return this.navbarKey=1,e.abrupt("break",21);case 13:return this.navbarKey=2,e.abrupt("break",21);case 15:return this.navbarKey=3,e.abrupt("break",21);case 17:return this.navbarKey=4,e.abrupt("break",21);case 19:return this.navbarKey=5,e.abrupt("break",21);case 21:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),components:{Language:A}}),D=O,N=(n("e1a6"),Object(u["a"])(D,w,C,!1,null,null,null)),R=N.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer-view"},[e._m(0),n("div",{staticClass:"footer-menu-view"},[n("div",{staticClass:"footer-column column-hidden has-text-centered"},[e._v("Copyright © 2019 IDP Education.")]),n("div",{staticClass:"footer-column has-text-centered"},[e._v("All Rights Reserved.")]),n("a",{staticClass:"footer-link footer-column has-text-centered",attrs:{href:"https://www.idp.com/hongkong/disclaimer/"}},[e._v("Disclaimer")]),n("a",{staticClass:"footer-link footer-column has-text-centered",attrs:{href:"https://www.ieltsessentials.com/global/footerlinks/privacypolicy"}},[e._v("Privacy Policy")]),n("a",{staticClass:"footer-link footer-column has-text-centered",attrs:{href:"https://www.idp.com/hongkong/terms-of-use/"}},[e._v("Terms of Use")]),n("a",{staticClass:"footer-link footer-column column-hidden has-text-centered",attrs:{href:"en"==e.getLanguage?"https://www.idp.com/hongkong/pics/?lang=en":"https://www.idp.com/hongkong/pics/"}},[e._v("Personal Information Collection Statement")])]),n("div",{staticClass:"footer-tips"},[e._v("\n        The website works best with following browsers: Internet Explorer 10 (or above) and all other major browsers currently available.\n    ")])])},F=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container footer-logo-view"},[a("img",{staticClass:"footer-logo",attrs:{width:"220",src:n("bb45"),alt:""}})])}],z={computed:{getLanguage:function(){return this.$store.state.language}}},K=z,M=(n("53d7"),Object(u["a"])(K,B,F,!1,null,null,null)),U=M.exports,V={cn:{s1:"登录",s2:"注册",s3:"联络我们",s4:"关于IDP",s5:"我的账户",s6:"信息提示",s7:"退出登录",s8:"常见问题",s9:"提交",s10:"查看上传文件",s11:"您必须输入您在注册证件中显示的姓名.",s12:"首页",s13:"在线申请",s14:"如证件号码EE2468135，只须输入EE24。",s15:"您必须输入报名时的电子邮件地址",s16:'我们利用Cookies令你浏览网站时更感简便。<a class="cookie-link" href="https://www.idp.com/hongkong/cookies/" target="_blank">了解更多</a> 有关cookies的信息。',s17:"点击验证码图片刷新验证码","validation-1":"请填写英文姓氏","validation-2":"请填写英文名字","validation-3":"请填写电子邮件","validation-4":"请填写报名时身份证明文件的首4位","validation-5":"请填写考生号码","validation-6":"请选择测试日期","validation-7":"请选择测试类型"},zh:{s1:"登錄",s2:"註冊",s3:"聯絡我們",s4:"關於IDP",s5:"我的賬戶",s6:"信息提示",s7:"退出",s8:"常見問題",s9:"提交",s10:"查看上載文件",s11:"您必須輸入您在註冊證件中顯示的姓名.",s12:"首頁",s13:"網上申請",s14:"如證件號碼EE2468135，只須輸入EE24。",s15:"您必須輸入報名時的電子郵件地址",s16:'我們利用Cookies令你瀏覽網站時更感簡便。<a class="cookie-link" href="https://www.idp.com/hongkong/cookies/" target="_blank">了解更多</a> 有關cookies的資訊。',s17:"點擊驗證碼圖片刷新驗證碼","validation-1":"請填寫英文姓氏","validation-2":"請填寫英文名字","validation-3":"請填寫電郵地址","validation-4":"請填寫報名時身份證明文件的首4位","validation-5":"請填寫考生號碼","validation-6":"請選擇測試日期","validation-7":"請選擇測試類型"},en:{s1:"Login",s2:"Sign up",s3:"Contact Us",s4:"About IDP",s5:"My Account",s6:"Message Notification",s7:"Sign Out",s8:"FAQ",s9:"Submit",s10:"Preview Uploaded Files",s11:"You must enter your name as it appears in your registered ID document.",s12:"Home",s13:"Proceed to Apply Online",s14:"e.g. for passport number: EE2468135, only enter EE24.",s15:"You must enter the same email address as your test application.",s16:'We use cookies to enhance your experience. <a class="cookie-link" href="https://www.idp.com/hongkong/cookies/" target="_blank">Find out more</a>  about cookies.',s17:"Click verification code image to refresh verification code","validation-1":"Family Name","validation-2":"Given Name","validation-3":"Email","validation-4":"First 4 Characters of Registered ID document","validation-5":"Candidate Number","validation-6":"Test Date","validation-7":"Test Type"}},q=n("b893");i.a.component("DefaultNavBar",R),i.a.component("Footer",U),i.a.use(m.a),i.a.use(v.a,{defaultLocale:"en",locale:f["a"].state.language,translations:V,merge:_.merge}),p["a"].beforeEach(function(e,t,n){k.a.start(),e.meta.keepAlive&&f["a"].commit("addIncludeList",e.name);var a=f["a"].state.isLogin;if(e.meta.login)q["a"].lastLink=e.path,a?n():(k.a.done(),n("/login"));else{if(a&&"Login"==e.name||a&&"SignUp"==e.name)return void n("/");n()}}),p["a"].afterEach(function(e,t){k.a.done()}),i.a.config.productionTip=!1,new i.a({router:p["a"],store:f["a"],render:function(e){return e(d)}}).$mount("#app")},"572a":function(e,t,n){},5880:function(e,t){e.exports=Vuex},"5c0b":function(e,t,n){"use strict";var a=n("5e27"),i=n.n(a);i.a},"5e27":function(e,t,n){},6187:function(e,t,n){},6389:function(e,t){e.exports=VueRouter},"730d":function(e,t,n){},"79f7":function(e,t){e.exports=VueTranslator},"8bbf":function(e,t){e.exports=Vue},9718:function(e,t){e.exports=VeeValidate},a27e:function(e,t,n){"use strict";n("e7e5");var a=n("d399"),i=n("cebe"),s=n.n(i),o=n("c0d6"),r=n("41cb"),c="https://mall.xvfin.com/api",u={cn:"sc",en:"en",zh:"tc"},l=s.a.create({baseURL:c,timeout:1e4}),d=0,p={1:1,6000:1,5000:1};l.interceptors.request.use(function(e){var t=o["a"].state.isLogin;return d||a["a"].loading({mask:!0,duration:0}),d++,t&&(e.headers.common["token"]=t),e.headers.common["lang"]=u[o["a"].state.language],e},function(e){d=0,Object(a["a"])(res.message),Promise.reject(e)}),l.interceptors.response.use(function(e){var t=e.data;if(d--,d||a["a"].clear(),0!=t.code)switch(p[t.code]||Object(a["a"])(t.message),t.code){case 4001:setTimeout(function(){Cookies.remove("token"),window.location.reload()},2e3);break;case 4004:setTimeout(function(){r["a"].push("/")},2e3);break}return t},function(e){return d=0,Object(a["a"])(res.message),Promise.reject(e)}),l.__proto__=s.a,t["a"]=l},b893:function(e,t,n){"use strict";t["a"]={preLink:""}},bb45:function(e,t,n){e.exports=n.p+"img/logo-bottom.dae705d3.png"},bcae:function(e,t,n){},c0d6:function(e,t,n){"use strict";n("6762"),n("2fdb");var a=n("8bbf"),i=n.n(a),s=n("5880"),o=n.n(s),r=localStorage.getItem("language");if(!r){var c=navigator.language;switch(c){case"zh-CN":r="cn";break;case"en":r="en";break;default:r="zh";break}}switch(r){case"en":document.title="IELTS IDP";break;default:document.title="雅思IDP";break}i.a.use(o.a),t["a"]=new o.a.Store({state:{isIndexFixed:0,swiperIndex:0,language:r,isCookieTips:1,isLogin:Cookies.get("token"),includeList:[],TestList:[{}],appTop:0},mutations:{setAppTop:function(e,t){e.appTop=t},setCookieTipsState:function(e,t){e.isCookieTips=t},setTestList:function(e,t){e.TestList=t},setLoginState:function(e,t){e.isLogin=t},addIncludeList:function(e,t){!e.includeList.includes(t)&&e.includeList.push(t)},removeIncludeList:function(e,t){var n=e.includeList.indexOf(t);-1!=n&&e.includeList.splice(n,1)}}})},ca9c:function(e,t,n){"use strict";var a=n("2a56"),i=n.n(a);i.a},cebe:function(e,t){e.exports=axios},d9b7:function(e,t){e.exports=VueAwesomeSwiper},e1a6:function(e,t,n){"use strict";var a=n("6187"),i=n.n(a);i.a},e6dd:function(e,t,n){"use strict";var a=n("bcae"),i=n.n(a);i.a},e876:function(e,t,n){"use strict";n.d(t,"e",function(){return i}),n.d(t,"b",function(){return s}),n.d(t,"h",function(){return o}),n.d(t,"d",function(){return r}),n.d(t,"c",function(){return c}),n.d(t,"g",function(){return u}),n.d(t,"a",function(){return l}),n.d(t,"f",function(){return d});var a=n("a27e");function i(e){return a["a"].post("/account/login",e)}function s(e){return a["a"].post("/account/mfa",e)}function o(e){return a["a"].post("/account/register",e)}function r(e){return a["a"].get("/captcha",{params:e})}function c(){return a["a"].post("/account/logout")}function u(e){return a["a"].post("/account/reset-password-1",e)}function l(e){return a["a"].post("/account/alter-password",e)}function d(e){return a["a"].post("/account/reset-password-2",e)}},f4e2:function(e,t,n){"use strict";var a=n("572a"),i=n.n(a);i.a}});