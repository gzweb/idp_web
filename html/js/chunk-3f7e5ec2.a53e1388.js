(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f7e5ec2"],{"0059":function(a,e,s){"use strict";s.r(e);var t=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"application-view fixed-view"},[t("DefaultNavBar"),t("RellaxBanner",{scopedSlots:a._u([{key:"rellaxpic",fn:function(){return[t("img",{staticClass:"rellax-pic",attrs:{src:s("ec10"),alt:""}})]},proxy:!0},{key:"rellaxtext",fn:function(){return[t("div",{staticClass:"rellax-text is-size-1-desktop is-size-3-touch"},[a._v(a._s(a.$t("a-t-1"))+" ")])]},proxy:!0}])}),t("div",{staticClass:"application-page"},[t("BannerStep"),t("div",{staticClass:"container form-view"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("div",{staticClass:"control"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha_spaces",expression:"'required|alpha_spaces'"},{name:"model",rawName:"v-model",value:a.params.last_name,expression:"params.last_name"}],staticClass:"input",attrs:{name:"params.last_name",type:"text",placeholder:a.$t("validation-2")},domProps:{value:a.params.last_name},on:{input:function(e){e.target.composing||a.$set(a.params,"last_name",e.target.value)}}})]),t("div",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("params.last_name"),expression:"errors.has('params.last_name')"}],staticClass:"help is-danger"},[a._v(a._s(a.$t("validation-2")))])]),t("div",{staticClass:"column"},[t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.params.first_name,expression:"params.first_name"},{name:"validate",rawName:"v-validate",value:"required|alpha_spaces",expression:"'required|alpha_spaces'"}],staticClass:"input",attrs:{name:"params.first_name",type:"text",placeholder:a.$t("validation-1")},domProps:{value:a.params.first_name},on:{input:function(e){e.target.composing||a.$set(a.params,"first_name",e.target.value)}}})]),t("div",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("params.first_name"),expression:"errors.has('params.first_name')"}],staticClass:"help is-danger"},[a._v(a._s(a.$t("validation-1")))])])]),t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("div",{staticClass:"control"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha_num|min:4|max:4",expression:"'required|alpha_num|min:4|max:4'"},{name:"model",rawName:"v-model",value:a.params.candidate_id,expression:"params.candidate_id"}],staticClass:"input",attrs:{name:"params.candidate_id",type:"text",placeholder:a.$t("validation-4")},domProps:{value:a.params.candidate_id},on:{input:function(e){e.target.composing||a.$set(a.params,"candidate_id",e.target.value)}}})]),t("div",{staticClass:"application-tips"},[a._v(a._s(a.$t("s11")))]),t("div",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("params.candidate_id"),expression:"errors.has('params.candidate_id')"}],staticClass:"help is-danger"},[a._v(a._s(a.$t("validation-4")))])]),t("div",{staticClass:"column"},[t("div",{staticClass:"field has-addons"},[t("div",{staticClass:"control is-expanded"},[t("div",{staticClass:"select is-fullwidth"},[t("select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.params.test_type,expression:"params.test_type"}],attrs:{name:"params.test_type"},on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,function(a){return a.selected}).map(function(a){var e="_value"in a?a._value:a.value;return e});a.$set(a.params,"test_type",e.target.multiple?s:s[0])},a.selectChange]}},[t("option",{attrs:{disabled:"",value:""}},[a._v(a._s(a.$t("validation-7")))]),a._l(a.selectArr,function(e,s){return t("option",{key:s,domProps:{value:e.value}},[a._v("\n                                        "+a._s(e.text)+"\n                                    ")])})],2)])])]),t("div",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("params.test_type"),expression:"errors.has('params.test_type')"}],staticClass:"help is-danger"},[a._v(a._s(a.$t("validation-7")))])])]),t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.params.candidate_number,expression:"params.candidate_number"}],staticClass:"input",attrs:{name:"params.candidate_number",type:"text",placeholder:a.$t("validation-5")},domProps:{value:a.params.candidate_number},on:{input:function(e){e.target.composing||a.$set(a.params,"candidate_number",e.target.value)}}}),t("div",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("params.candidate_number"),expression:"errors.has('params.candidate_number')"}],staticClass:"help is-danger"},[a._v(a._s(a.$t("validation-5")))])]),t("div",{staticClass:"column"},[t("date-picker",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{name:"params.test_date",editable:!1,placeholder:a.$t("validation-6"),"value-type":"format",width:"100%","input-class":"input",lang:a.getLanguage,type:"date",format:"MM/DD/YYYY",confirm:""},model:{value:a.params.test_date,callback:function(e){a.$set(a.params,"test_date",e)},expression:"params.test_date"}}),t("div",{staticClass:"application-tips"},[a._v(a._s(a.$t("ap38")))]),t("div",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("params.test_date"),expression:"errors.has('params.test_date')"}],staticClass:"help is-danger"},[a._v(a._s(a.$t("validation-6")))])],1)])]),t("div",{staticClass:"container form-view"},[t("label",{staticClass:"label form-label"},[a._v(a._s(a.$t("ap39")))]),t("div",{staticClass:"columns"},a._l(a.selectArr2,function(e,s){return t("div",{key:s,staticClass:"column"},[t("label",{staticClass:"bui-checkbox-label  bui-checkbox-anim"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.params.components,expression:"params.components"}],attrs:{name:"check",type:"checkbox"},domProps:{value:e.value,checked:Array.isArray(a.params.components)?a._i(a.params.components,e.value)>-1:a.params.components},on:{change:function(s){var t=a.params.components,r=s.target,i=!!r.checked;if(Array.isArray(t)){var n=e.value,l=a._i(t,n);r.checked?l<0&&a.$set(a.params,"components",t.concat([n])):l>-1&&a.$set(a.params,"components",t.slice(0,l).concat(t.slice(l+1)))}else a.$set(a.params,"components",i)}}}),t("i",{staticClass:"bui-checkbox"}),a._v(" "+a._s(e.text)+"\n                    ")])])}),0),t("div",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("check"),expression:"errors.has('check')"}],staticClass:"help is-danger"},[a._v(a._s(a.$t("ap39")))])]),t("div",{staticClass:"container form-view"},[t("label",{staticClass:"label form-label"},[a._v(a._s(a.$t("ap5")))]),t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-6"},[t("div",{staticClass:"field has-addons"},[t("div",{staticClass:"control is-expanded"},[t("div",{staticClass:"select is-fullwidth"},[t("select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.params.refund_type,expression:"params.refund_type"}],attrs:{name:"params.refund_type"},on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,function(a){return a.selected}).map(function(a){var e="_value"in a?a._value:a.value;return e});a.$set(a.params,"refund_type",e.target.multiple?s:s[0])},a.selectChange]}},[t("option",{attrs:{disabled:"",value:""}},[a._v(a._s(a.$t("ap1")))]),a._l(a.selectArr1,function(e,s){return t("option",{key:s,domProps:{value:e.value}},[a._v("\n                                        "+a._s(e.text)+"\n                                    ")])})],2)])])]),t("div",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("params.refund_type"),expression:"errors.has('params.refund_type')"}],staticClass:"help is-danger"},[a._v(a._s(a.$t("ap1")))])])]),"CHEQUE"==a.params.refund_type?t("div",{staticClass:"columns"},[t("div",{staticClass:"column is-6"},[t("div",{staticClass:"field has-addons"},[t("div",{staticClass:"control is-expanded"},[t("div",{staticClass:"select is-fullwidth"},[t("select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:a.isInput,expression:"isInput"}],attrs:{name:"isInput"},on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,function(a){return a.selected}).map(function(a){var e="_value"in a?a._value:a.value;return e});a.isInput=e.target.multiple?s:s[0]},a.selectChange]}},[t("option",{attrs:{disabled:"",value:""}},[a._v(a._s(a.$t("ap40")))]),a._l(a.selectArr3,function(e,s){return t("option",{key:s,domProps:{value:e.value}},[a._v("\n                                        "+a._s(e.text)+"\n                                    ")])})],2)])])]),t("div",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("isInput"),expression:"errors.has('isInput')"}],staticClass:"help is-danger"},[a._v(a._s(a.$t("ap40")))])])]):a._e(),"ANOTHER"==a.isInput&&"CHEQUE"==a.params.refund_type?t("div",{staticClass:"columns"},[t("div",{staticClass:"column"},[t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.params.payee_first_name,expression:"params.payee_first_name"},{name:"validate",rawName:"v-validate",value:"required|alpha_spaces",expression:"'required|alpha_spaces'"}],staticClass:"input",attrs:{name:"params.payee_first_name",type:"text",placeholder:a.$t("ap2")},domProps:{value:a.params.payee_first_name},on:{input:function(e){e.target.composing||a.$set(a.params,"payee_first_name",e.target.value)}}})]),t("div",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("params.payee_first_name"),expression:"errors.has('params.payee_first_name')"}],staticClass:"help is-danger"},[a._v(a._s(a.$t("ap2")))])]),t("div",{staticClass:"column"},[t("div",{staticClass:"control"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.params.payee_last_name,expression:"params.payee_last_name"},{name:"validate",rawName:"v-validate",value:"required|alpha_spaces",expression:"'required|alpha_spaces'"}],staticClass:"input",attrs:{name:"params.payee_last_name",type:"text",placeholder:a.$t("ap3")},domProps:{value:a.params.payee_last_name},on:{input:function(e){e.target.composing||a.$set(a.params,"payee_last_name",e.target.value)}}})]),t("div",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("params.payee_last_name"),expression:"errors.has('params.payee_last_name')"}],staticClass:"help is-danger"},[a._v(a._s(a.$t("ap3")))])])]):a._e(),t("label",{staticClass:"bui-checkbox-label  bui-checkbox-anim"},[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{type:"checkbox",name:"terms"}}),t("i",{staticClass:"bui-checkbox"}),a._v("  "+a._s(a.$t("ap6"))),t("a",{attrs:{target:"_blank",href:"https://www.idp.com/hongkong/terms-of-use/"}},[a._v("Terms")]),a._v("  and "),t("a",{attrs:{target:"_blank",href:"https://www.ieltsessentials.com/global/footerlinks/privacypolicy"}},[a._v("Privacy Policy")])]),t("div",{staticClass:"control"},[t("div",{directives:[{name:"show",rawName:"v-show",value:a.errors.has("terms"),expression:"errors.has('terms')"}],staticClass:"help is-danger"},[a._v(a._s(a.$t("ap4")))])])]),t("div",{staticClass:"field is-grouped is-grouped-centered button-view"},[t("div",{staticClass:"button button-style is-medium",on:{click:a.submitForm}},[a._v(a._s(a.$t("s9")))])]),t("div",{staticClass:"container"},[t("div",{staticClass:"application-title",domProps:{innerHTML:a._s(a.ruleCtx.title)}}),t("div",{staticClass:"application-ctx",domProps:{innerHTML:a._s(a.ruleCtx.content)}})])],1),t("Modal",{attrs:{ctxMessage:a.ctxMessage,show:a.modalShow},on:{hideModal:a.hideModal}}),t("Footer")],1)},r=[],i=(s("a481"),s("7f7f"),s("96cf"),s("3b8d")),n=(s("9a2a"),s("ab94")),l=s("714b"),o=s("6106"),c=s("ea76"),p=s.n(c),d=s("b255"),m=s("c2cf"),u={components:{DatePicker:p.a,RellaxBanner:n["a"],BannerStep:o["a"],Modal:l["a"]},translator:m["a"],data:function(){return{ruleCtx:{},modalShow:0,ctxMessage:"",selectArr:[],selectArr1:[],selectArr2:[],selectArr3:[],isInput:"",params:{refund_type:"",test_type:"",components:[]}}},computed:{getLanguage:function(){return"en"==this.$store.state.language?"en":"zh"}},created:function(){var a=Object(i["a"])(regeneratorRuntime.mark(function a(){var e;return regeneratorRuntime.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(d["a"])("EOR");case 2:e=a.sent,this.ruleCtx=e.data.sector.terms,this.selectArr=e.data.test_type,this.selectArr1=e.data.refund_type,this.selectArr2=e.data.components,this.selectArr3=e.data.refund_payee_name,this.params.components=this.selectArr2.map(function(a){return a.value});case 10:case"end":return a.stop()}},a,this)}));function e(){return a.apply(this,arguments)}return e}(),methods:{selectChange:function(a){switch(a.target.name){case"params.test_type":this.params.test_type=a.target.value;break;case"params.refund_type":this.params.refund_type=a.target.value;break}},checkTap:function(a,e){this.checkIndex==a&&e.preventDefault(),this.checkIndex=a},hideModal:function(){if(this.modalShow=0,this.isSuccess){var a;switch(this.isSuccess){case 1:a="/price_table/".concat(this.dataID);break;case 2:a="/table/".concat(this.dataID);break}this.$router.replace(a)}},submitForm:function(){var a=this;this.$validator.validateAll().then(function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(s){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!s){e.next=13;break}return e.next=3,Object(d["b"])("EOR",a.params);case 3:if(t=e.sent,a.modalShow=1,"0"==t.code){e.next=8;break}return a.ctxMessage=t.message,e.abrupt("return");case 8:t.data.to_pay?a.isSuccess=1:a.isSuccess=2,a.dataID=t.data.id,a.ctxMessage=a.$t("ap16");case 13:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}())}}},v=u,_=s("2877"),h=Object(_["a"])(v,t,r,!1,null,null,null);e["default"]=h.exports},ec10:function(a,e,s){a.exports=s.p+"img/score_1.528ded84.png"}}]);