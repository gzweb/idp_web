(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-795007da"],{"1dbd":function(e,a,t){e.exports=t.p+"img/banner_2.65e0521a.png"},2251:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("div",{staticClass:"application-view fixed-view"},[s("DefaultNavBar"),s("RellaxBanner",{scopedSlots:e._u([{key:"rellaxpic",fn:function(){return[s("img",{staticClass:"rellax-pic",attrs:{src:t("1dbd"),alt:""}})]},proxy:!0},{key:"rellaxtext",fn:function(){return[s("div",{staticClass:"rellax-text is-size-1-desktop is-size-3-touch"},[e._v(e._s(e.$t("a-t-3")))])]},proxy:!0}])}),s("div",{staticClass:"application-page"},[s("BannerStep",{attrs:{show:1},scopedSlots:e._u([{key:"text",fn:function(){return[e._v("\n               "+e._s(e.$t("ap42"))+"\n            ")]},proxy:!0}])}),s("div",{staticClass:"container form-view"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha_spaces",expression:"'required|alpha_spaces'"},{name:"model",rawName:"v-model",value:e.params.last_name,expression:"params.last_name"}],staticClass:"input",attrs:{name:"lastName",type:"text",placeholder:e.$t("validation-2")},domProps:{value:e.params.last_name},on:{input:function(a){a.target.composing||e.$set(e.params,"last_name",a.target.value)}}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("lastName"),expression:"errors.has('lastName')"}],staticClass:"help is-danger"},[e._v(e._s(e.$t("validation-2")))])]),s("div",{staticClass:"column"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.params.first_name,expression:"params.first_name"},{name:"validate",rawName:"v-validate",value:"required|alpha_spaces",expression:"'required|alpha_spaces'"}],staticClass:"input",attrs:{name:"firstName",type:"text",placeholder:e.$t("validation-1")},domProps:{value:e.params.first_name},on:{input:function(a){a.target.composing||e.$set(e.params,"first_name",a.target.value)}}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("firstName"),expression:"errors.has('firstName')"}],staticClass:"help is-danger"},[e._v(e._s(e.$t("validation-1")))])])]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha_num|min:4|max:4",expression:"'required|alpha_num|min:4|max:4'"},{name:"model",rawName:"v-model",value:e.params.candidate_id,expression:"params.candidate_id"}],staticClass:"input",attrs:{name:"nameNumber",type:"text",placeholder:e.$t("validation-4")},domProps:{value:e.params.candidate_id},on:{input:function(a){a.target.composing||e.$set(e.params,"candidate_id",a.target.value)}}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("nameNumber"),expression:"errors.has('nameNumber')"}],staticClass:"help is-danger"},[e._v(e._s(e.$t("validation-4")))])]),s("div",{staticClass:"column"},[s("div",{staticClass:"field has-addons"},[s("div",{staticClass:"control is-expanded"},[s("div",{staticClass:"select is-fullwidth"},[s("select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.params.test_type,expression:"params.test_type"}],attrs:{name:"testType"},on:{change:[function(a){var t=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){var a="_value"in e?e._value:e.value;return a});e.$set(e.params,"test_type",a.target.multiple?t:t[0])},e.selectChange]}},[s("option",{attrs:{disabled:"",value:""}},[e._v(e._s(e.$t("validation-7")))]),e._l(e.selectArr,function(a,t){return s("option",{key:t,domProps:{value:a.value}},[e._v("\n                                        "+e._s(a.text)+"\n                                    ")])})],2)])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("testType"),expression:"errors.has('testType')"}],staticClass:"help is-danger"},[e._v(e._s(e.$t("validation-7")))])])]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-6"},[s("date-picker",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"testDate",editable:!1,placeholder:e.$t("validation-6"),"value-type":"format",width:"100%","input-class":"input",lang:e.getLanguage,type:"date",format:"MM/DD/YYYY",confirm:""},model:{value:e.params.test_date,callback:function(a){e.$set(e.params,"test_date",a)},expression:"params.test_date"}}),s("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("testDate"),expression:"errors.has('testDate')"}],staticClass:"help is-danger"},[e._v(e._s(e.$t("validation-6")))])],1)])]),s("div",{staticClass:"container form-view"},[s("label",{staticClass:"label form-label"},[e._v(e._s(e.$t("ap5")))]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-6"},[s("div",{staticClass:"field has-addons"},[s("div",{staticClass:"control is-expanded"},[s("div",{staticClass:"select is-fullwidth"},[s("select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.params.refund_type,expression:"params.refund_type"}],attrs:{name:"params.refund_type"},on:{change:[function(a){var t=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){var a="_value"in e?e._value:e.value;return a});e.$set(e.params,"refund_type",a.target.multiple?t:t[0])},e.selectChange]}},[s("option",{attrs:{disabled:"",value:""}},[e._v(e._s(e.$t("ap1")))]),e._l(e.selectArr1,function(a,t){return s("option",{key:t,domProps:{value:a.value}},[e._v("\n                                        "+e._s(a.text)+"\n                                    ")])})],2)])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("params.refund_type"),expression:"errors.has('params.refund_type')"}],staticClass:"help is-danger"},[e._v(e._s(e.$t("ap1")))])])]),"CHEQUE"==e.params.refund_type?s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-6"},[s("div",{staticClass:"field has-addons"},[s("div",{staticClass:"control is-expanded"},[s("div",{staticClass:"select is-fullwidth"},[s("select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.isInput,expression:"isInput"}],attrs:{name:"isInput"},on:{change:[function(a){var t=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){var a="_value"in e?e._value:e.value;return a});e.isInput=a.target.multiple?t:t[0]},e.selectChange]}},[s("option",{attrs:{disabled:"",value:""}},[e._v(e._s(e.$t("ap40")))]),e._l(e.selectArr3,function(a,t){return s("option",{key:t,domProps:{value:a.value}},[e._v("\n                                        "+e._s(a.text)+"\n                                    ")])})],2)])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("isInput"),expression:"errors.has('isInput')"}],staticClass:"help is-danger"},[e._v(e._s(e.$t("ap40")))])])]):e._e(),"ANOTHER"==e.isInput&&"CHEQUE"==e.params.refund_type?s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.params.payee_first_name,expression:"params.payee_first_name"},{name:"validate",rawName:"v-validate",value:"required|alpha_spaces",expression:"'required|alpha_spaces'"}],staticClass:"input",attrs:{name:"params.payee_first_name",type:"text",placeholder:e.$t("ap2")},domProps:{value:e.params.payee_first_name},on:{input:function(a){a.target.composing||e.$set(e.params,"payee_first_name",a.target.value)}}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("params.payee_first_name"),expression:"errors.has('params.payee_first_name')"}],staticClass:"help is-danger"},[e._v(e._s(e.$t("ap2")))])]),s("div",{staticClass:"column"},[s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.params.payee_last_name,expression:"params.payee_last_name"},{name:"validate",rawName:"v-validate",value:"required|alpha_spaces",expression:"'required|alpha_spaces'"}],staticClass:"input",attrs:{name:"params.payee_last_name",type:"text",placeholder:e.$t("ap3")},domProps:{value:e.params.payee_last_name},on:{input:function(a){a.target.composing||e.$set(e.params,"payee_last_name",a.target.value)}}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("params.payee_last_name"),expression:"errors.has('params.payee_last_name')"}],staticClass:"help is-danger"},[e._v(e._s(e.$t("ap3")))])])]):e._e()]),s("div",{staticClass:"container form-view"},[s("label",{staticClass:"label form-label"},[e._v(e._s(e.$t("ap34")))]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-6"},[s("div",{staticClass:"field has-addons"},[s("div",{staticClass:"control is-expanded"},[s("div",{staticClass:"select is-fullwidth"},[s("select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.params.reason,expression:"params.reason"}],attrs:{name:"reason"},on:{change:[function(a){var t=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){var a="_value"in e?e._value:e.value;return a});e.$set(e.params,"reason",a.target.multiple?t:t[0])},e.selectChange]}},[s("option",{attrs:{disabled:"",value:""}},[e._v(e._s(e.$t("ap34")))]),e._l(e.selectArr2,function(a,t){return s("option",{key:t,domProps:{value:a.value}},[e._v("\n                                        "+e._s(a.text)+"\n                                    ")])})],2)])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("reason"),expression:"errors.has('reason')"}],staticClass:"help is-danger"},[e._v(e._s(e.$t("ap34")))])]),"ABSENT"==e.params.reason?s("div",{staticClass:"column is-6"},[s("div",{staticClass:"file has-name is-fullwidth"},[s("label",{staticClass:"file-label"},[s("input",{staticClass:"file-input",attrs:{type:"file",name:"file"},on:{change:e.imgChange}}),s("span",{staticClass:"file-cta"},[e._m(0),s("span",{staticClass:"file-label"},[e._v("\n                                "+e._s(e.$t("ap14"))+"\n                            ")])]),s("span",{staticClass:"file-name"},[e._v("\n                            File format:  jpg, png, gif, jpeg ,pdf ,doc\n                            ")])])]),e.params.medical_proof?s("a",{staticClass:"button button-style upload-button",attrs:{target:"_blank",href:e.uploadLink}},[e._v(e._s(e.$t("s10")))]):e._e()]):e._e()]),s("label",{staticClass:"label form-label",domProps:{innerHTML:e._s(e.$t("ap41"))}}),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"control"},[s("textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.params.statement,expression:"params.statement"}],staticClass:"textarea",attrs:{name:"params.statement",placeholder:e.$t("ap35")},domProps:{value:e.params.statement},on:{input:function(a){a.target.composing||e.$set(e.params,"statement",a.target.value)}}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("params.statement"),expression:"errors.has('params.statement')"}],staticClass:"help is-danger"},[e._v(e._s(e.$t("ap35")))])])]),s("label",{staticClass:"bui-checkbox-label  bui-checkbox-anim"},[s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{type:"checkbox",name:"terms"}}),s("i",{staticClass:"bui-checkbox"}),e._v("  "+e._s(e.$t("ap6"))),s("a",{attrs:{target:"_blank",href:"https://www.idp.com/hongkong/terms-of-use/"}},[e._v("Terms")]),e._v("  and "),s("a",{attrs:{target:"_blank",href:"https://www.ieltsessentials.com/global/footerlinks/privacypolicy"}},[e._v("Privacy Policy")])]),s("div",{staticClass:"control"},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("terms"),expression:"errors.has('terms')"}],staticClass:"help is-danger"},[e._v(e._s(e.$t("ap4")))])])]),s("div",{staticClass:"field is-grouped is-grouped-centered button-view"},[s("div",{staticClass:"button button-style is-medium",on:{click:e.submitForm}},[e._v(e._s(e.$t("s9")))])]),s("div",{staticClass:"container"},[s("div",{staticClass:"application-title",domProps:{innerHTML:e._s(e.ruleCtx.title)}}),s("div",{staticClass:"application-ctx",domProps:{innerHTML:e._s(e.ruleCtx.content)}})])],1),s("Modal",{attrs:{ctxMessage:e.ctxMessage,show:e.modalShow},on:{hideModal:e.hideModal}}),s("Footer")],1)},r=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("span",{staticClass:"file-icon"},[t("i",{staticClass:"fas fa-upload"})])}],i=(t("a481"),t("b54a"),t("7f7f"),t("96cf"),t("3b8d")),n=(t("9a2a"),t("ab94")),l=t("714b"),o=t("6106"),c=t("ea76"),p=t.n(c),d=t("c2cf"),u=t("b255"),m={components:{DatePicker:p.a,RellaxBanner:n["a"],BannerStep:o["a"],Modal:l["a"]},translator:d["a"],data:function(){return{ruleCtx:{},uploadLink:"",beforeTime:new Date,modalShow:0,ctxMessage:"",params:{test_type:"",refund_type:"",reason:""},isInput:"",selectArr:[],selectArr1:[],selectArr2:[]}},computed:{getLanguage:function(){return"en"==this.$store.state.language?"en":"zh"}},created:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(u["a"])("TFR");case 2:a=e.sent,this.ruleCtx=a.data.sector.terms,this.selectArr=a.data.test_type,this.selectArr1=a.data.refund_type,this.selectArr2=a.data.reason,this.selectArr3=a.data.refund_payee_name;case 9:case"end":return e.stop()}},e,this)}));function a(){return e.apply(this,arguments)}return a}(),methods:{selectChange:function(e){switch(e.target.name){case"testType":this.params.test_type=e.target.value;break;case"reason":this.params.reason=e.target.value;break;case"params.refund_type":this.params.refund_type=e.target.value;break}},imgChange:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(a){var t,s,r,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!(a.target.files.length<=0)){e.next=2;break}return e.abrupt("return");case 2:if(t=a.target.files[0],s=new FormData,/\.(gif|jpg|jpeg|png|GIF|JPG|PNG|pdf|PDF|doc|DOC|docx|DOCX)$/.test(t.name)){e.next=8;break}return this.modalShow=1,this.ctxMessage=this.$t("ap37"),e.abrupt("return");case 8:return s.append("file",t),r={headers:{"Content-Type":"multipart/form-data"}},e.next=13,Object(u["c"])(s,r);case 13:i=e.sent,this.modalShow=1,0!=i.code&&(this.ctxMessage=i.msg),this.ctxMessage=this.$t("ap15"),this.params.medical_proof=i.data.id,this.uploadLink=i.data.link;case 20:case"end":return e.stop()}},e,this)}));function a(a){return e.apply(this,arguments)}return a}(),hideModal:function(){if(this.modalShow=0,this.isSuccess){var e;switch(this.isSuccess){case 1:e="/price_table/".concat(this.dataID);break;case 2:e="/table/".concat(this.dataID);break}this.$router.replace(e)}},submitForm:function(){var e=this;this.$validator.validateAll().then(function(){var a=Object(i["a"])(regeneratorRuntime.mark(function a(t){var s;return regeneratorRuntime.wrap(function(a){while(1)switch(a.prev=a.next){case 0:if(!t){a.next=17;break}if(e.params.medical_proof||"ABSENT"!=e.params.reason){a.next=5;break}return e.modalShow=1,e.ctxMessage=e.$t("ap14"),a.abrupt("return");case 5:return a.next=7,Object(u["b"])("TFR",e.params);case 7:if(s=a.sent,e.modalShow=1,"0"==s.code){a.next=12;break}return e.ctxMessage=s.message,a.abrupt("return");case 12:s.data.to_pay?e.isSuccess=1:e.isSuccess=2,e.dataID=s.data.id,e.ctxMessage=e.$t("ap16");case 17:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}())}}},v=m,h=t("2877"),_=Object(h["a"])(v,s,r,!1,null,null,null);a["default"]=_.exports},"386b":function(e,a,t){var s=t("5ca1"),r=t("79e5"),i=t("be13"),n=/"/g,l=function(e,a,t,s){var r=String(i(e)),l="<"+a;return""!==t&&(l+=" "+t+'="'+String(s).replace(n,"&quot;")+'"'),l+">"+r+"</"+a+">"};e.exports=function(e,a){var t={};t[e]=a(l),s(s.P+s.F*r(function(){var a=""[e]('"');return a!==a.toLowerCase()||a.split('"').length>3}),"String",t)}},b54a:function(e,a,t){"use strict";t("386b")("link",function(e){return function(a){return e(this,"a","href",a)}})}}]);