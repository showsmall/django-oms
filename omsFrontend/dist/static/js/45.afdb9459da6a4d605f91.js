webpackJsonp([45],{"54xA":function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var l={data:function(){return{ruleForm:{name:"",desc:""},rules:{name:[{required:!0,message:"请陛下输入一个风骚的名字",trigger:"blur"}]}}},methods:{submitForm:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;r.$emit("formdata",r.ruleForm),r.ruleForm={name:"",desc:""}})},resetForm:function(e){this.$refs[e].resetFields()}}},o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"名称",prop:"name"}},[t("el-input",{model:{value:e.ruleForm.name,callback:function(r){e.$set(e.ruleForm,"name",r)},expression:"ruleForm.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"描述",prop:"desc"}},[t("el-input",{attrs:{type:"textarea",autosize:{minRows:10,maxRows:30}},model:{value:e.ruleForm.desc,callback:function(r){e.$set(e.ruleForm,"desc",r)},expression:"ruleForm.desc"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submitForm("ruleForm")}}},[e._v("立即创建")]),e._v(" "),t("el-button",{on:{click:function(r){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)},s=[],n={render:o,staticRenderFns:s},u=n,m=t("VU/8"),a=m(l,u,!1,null,null,null);r.default=a.exports}});