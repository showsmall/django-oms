webpackJsonp([25],{"3Kqx":function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".box-card[data-v-9fd14fc6]{width:600px;margin:20px auto}.item-btn[data-v-9fd14fc6]{margin-bottom:15px;margin-left:0}.block[data-v-9fd14fc6]{padding:25px}",""])},fLO1:function(t,e,a){var s=a("3Kqx");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("271278c2",s,!0)},orwO:function(t,e,a){"use strict";function s(t){a("fLO1")}Object.defineProperty(e,"__esModule",{value:!0});var l={zh:{i18nView:{title:"切换语言",note:"目前只翻译了当前页面和侧边栏和导航，未完待续，敬请期待...",datePlaceholder:"请选择日期",tableDate:"日期",tableName:"姓名",tableAddress:"地址",default:"默认按钮",primary:"主要按钮",success:"成功按钮",info:"信息按钮",warning:"警告按钮",danger:"危险按钮"}},en:{i18nView:{title:"Switch Language",note:"Currently only translated the i18n page and the sidebar and levelbar, please look forword to...",datePlaceholder:"Pick a day",tableDate:"tableDate",tableName:"tableName",tableAddress:"tableAddress",default:"default:",primary:"primary",success:"success",info:"info",warning:"warning",danger:"danger"}}},i={name:"i18n",data:function(){return{date:"",currentPage:5,tableData:[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles"}]}},created:function(){this.$i18n.getLocaleMessage("en").i18nView||(this.$i18n.mergeLocaleMessage("en",l.en),this.$i18n.mergeLocaleMessage("zh",l.zh))},computed:{lang:{get:function(){return this.$store.state.app.language},set:function(t){this.$i18n.locale=t,this.$store.dispatch("setLanguage",t)}}}},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"40px"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("svg-icon",{attrs:{"icon-class":"international"}}),t._v(" "),a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(t.$t("i18nView.title")))])],1),t._v(" "),a("div",[a("el-radio-group",{attrs:{size:"small"},model:{value:t.lang,callback:function(e){t.lang=e},expression:"lang"}},[a("el-radio",{attrs:{label:"zh",border:""}},[t._v("简体中文")]),t._v(" "),a("el-radio",{attrs:{label:"en",border:""}},[t._v("English")])],1),t._v(" "),a("el-tag",{staticStyle:{"margin-top":"15px",display:"block"},attrs:{type:"info"}},[t._v(t._s(t.$t("i18nView.note")))])],1)]),t._v(" "),a("el-row",{staticStyle:{margin:"100px 15px 50px"},attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"block"},[a("el-date-picker",{attrs:{type:"date",placeholder:t.$t("i18nView.datePlaceholder")},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1),t._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:"","current-page":t.currentPage,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next",total:400}})],1),t._v(" "),a("div",{staticClass:"block"},[a("el-button",{staticClass:"item-btn",attrs:{size:"small"}},[t._v(t._s(t.$t("i18nView.default")))]),t._v(" "),a("el-button",{staticClass:"item-btn",attrs:{size:"small",type:"primary"}},[t._v(t._s(t.$t("i18nView.primary")))]),t._v(" "),a("el-button",{staticClass:"item-btn",attrs:{size:"small",type:"success"}},[t._v(t._s(t.$t("i18nView.success")))]),t._v(" "),a("el-button",{staticClass:"item-btn",attrs:{size:"small",type:"info"}},[t._v(t._s(t.$t("i18nView.info")))]),t._v(" "),a("el-button",{staticClass:"item-btn",attrs:{size:"small",type:"warning"}},[t._v(t._s(t.$t("i18nView.warning")))]),t._v(" "),a("el-button",{staticClass:"item-btn",attrs:{size:"small",type:"danger"}},[t._v(t._s(t.$t("i18nView.danger")))])],1)]),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,fit:"","highlight-current-row":"",border:""}},[a("el-table-column",{attrs:{prop:"name",label:t.$t("i18nView.tableName"),width:"100",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"date",label:t.$t("i18nView.tableDate"),width:"120",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:t.$t("i18nView.tableAddress")}})],1)],1)],1)],1)},r=[],o={render:n,staticRenderFns:r},d=o,c=a("VU/8"),p=s,g=c(i,d,!1,p,"data-v-9fd14fc6",null);e.default=g.exports}});