webpackJsonp([31],{AwQk:function(e,r,t){r=e.exports=t("FZ+f")(!1),r.push([e.i,"",""])},"Yh+p":function(e,r,t){var o=t("AwQk");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t("rjj0")("40d347e8",o,!0)},vadm:function(e,r,t){"use strict";function o(e){t("Yh+p")}Object.defineProperty(r,"__esModule",{value:!0});var s=t("vMJZ"),l={components:{},data:function(){return{ruleForm:{username:"",email:"",is_active:"",group:"",roles:"",password:"qwert@12345"},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],email:[{required:!0,type:"email",message:"请输入正确的Email地址",trigger:"blur"}],group:[{required:!0,message:"请选择用户分组",trigger:"change"}],roles:[{required:!0,message:"请选择用户角色",trigger:"blur"}]},groups:"",roles:""}},created:function(){this.getGroups(),this.getRoles()},methods:{postForm:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;Object(s.j)(r.ruleForm).then(function(e){"ok"===e.statusText&&r.$message({type:"success",message:"恭喜你，新建成功"})}).catch(function(e){r.$message.error("新建失败"),console.log(e)})}),this.$emit("DialogStatus",!1)},resetForm:function(e){this.ruleForm.hosts=[],this.$refs[e].resetFields()},getHosts:function(e){this.ruleForm.hosts=e},getGroups:function(){var e=this;Object(s.d)().then(function(r){e.groups=r.data.results})},getRoles:function(){var e=this;Object(s.e)().then(function(r){e.roles=r.data.results})},setPasswd:function(){this.ruleForm.password=Math.random().toString(35).slice(2)}}},u=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{model:{value:e.ruleForm.username,callback:function(r){e.$set(e.ruleForm,"username",r)},expression:"ruleForm.username"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"Email",prop:"email"}},[t("el-input",{model:{value:e.ruleForm.email,callback:function(r){e.$set(e.ruleForm,"email",r)},expression:"ruleForm.email"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"用户分组",prop:"group"}},[t("el-select",{attrs:{placeholder:"请选择用户分组"},model:{value:e.ruleForm.group,callback:function(r){e.$set(e.ruleForm,"group",r)},expression:"ruleForm.group"}},e._l(e.groups,function(e){return t("el-option",{key:e.name,attrs:{value:e.name}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"是否激活",prop:"is_active"}},[t("el-switch",{attrs:{"on-text":"oo","off-text":"xx"},model:{value:e.ruleForm.is_active,callback:function(r){e.$set(e.ruleForm,"is_active",r)},expression:"ruleForm.is_active"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"角色",prop:"group"}},[t("el-select",{attrs:{placeholder:"请选择用户角色"},model:{value:e.ruleForm.roles,callback:function(r){e.$set(e.ruleForm,"roles",r)},expression:"ruleForm.roles"}},e._l(e.roles,function(e){return t("el-option",{key:e.name,attrs:{value:e.name}})}))],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.postForm("ruleForm")}}},[e._v("提交")]),e._v(" "),t("el-button",{attrs:{type:"danger"},on:{click:function(r){e.resetForm("ruleForm")}}},[e._v("清空")])],1)],1)},a=[],n={render:u,staticRenderFns:a},i=n,m=t("VU/8"),c=o,p=m(l,i,!1,c,null,null);r.default=p.exports}});