webpackJsonp([20],{"Ht+X":function(e,t,r){"use strict";function a(e){r("enNm")}Object.defineProperty(t,"__esModule",{value:!0});var o=r("gRE1"),n=r.n(o),s=r("BO1k"),l=r.n(s),i=r("ZTLr"),c=r("EMlb"),u=r("lLHC"),p=r("nSkA"),m=r("QmSG"),d=r("0xDb"),f=r("vMJZ"),h={components:{},data:function(){return{route_path:this.$route.path.split("/"),pid:this.$route.params.pid,ruleForm:{},rules:{name:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],content:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],type:[{required:!0,message:"请输入正确的内容",trigger:"blur"}]},copy:"op",users:[],toolbars:{preview:!0,bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,ol:!0,help:!0},apiurl:m.apiUrl,uploadurl:m.uploadurl,types:[],img_file:{},count:0,enclosureData:[],enclosureForm:{project:"",create_user:localStorage.getItem("username"),file:""},commentForm:{ticket:"",create_user:localStorage.getItem("username"),content:"本工单已经被转成需求"}}},created:function(){this.fetchData(),this.getTypes(),this.fetchEnclosureData()},methods:{fetchData:function(){var e=this,t={pid:this.pid};Object(i.f)(t).then(function(t){e.ruleForm=t.data[0]})},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.ruleForm.status=1,Object(i.m)(t.ruleForm.id,t.ruleForm).then(function(e){t.copyWorkticket(e.data)})})},resetForm:function(e){this.$refs[e].resetFields()},getTypes:function(){var e=this;Object(i.e)().then(function(t){e.types=t.data})},imgAdd:function(e,t){var r=this.$refs.md,a=new FormData;a.append("username",localStorage.getItem("username")),a.append("file",t),a.append("create_time",Object(d.a)(t.lastModified)),a.append("type",t.type),a.append("archive",this.route_path[1]),Object(p.i)(a).then(function(t){r.$imglst2Url([[e,t.data.file]])})},beforeAvatarUpload:function(e){var t=this,r=new FormData;return r.append("username",this.enclosureForm.create_user),r.append("file",e),r.append("create_time",Object(d.a)()),r.append("type",e.type),r.append("archive",this.route_path[1]),Object(p.i)(r).then(function(e){t.enclosureForm.file=e.data.filepath,t.enclosureForm.ticket=t.ruleForm.id,Object(i.i)(t.enclosureForm),"Created"===e.statusText&&t.$message({type:"success",message:"恭喜你，上传成功"}),t.fetchEnclosureData()}).catch(function(e){t.$message.error("上传失败"),t.$refs.upload.clearFiles(),console.log(e)}),!0},fetchEnclosureData:function(){var e=this,t={ticket__pid:this.pid};Object(i.d)(t).then(function(t){e.enclosureData=t.data})},deleteEnclosure:function(e){Object(i.a)(e),this.fetchEnclosureData()},copyWorkticket:function(e){var t=this,r={pid:e.pid,name:e.name,content:e.content,type:"来自工单",create_user:e.create_user,create_time:e.create_time};"op"===this.copy?Object(u.q)(r).then(function(e){if(t.$message({type:"success",message:"恭喜你，转移成功"}),t.enclosureData.length>0){var a=!0,o=!1,n=void 0;try{for(var s,i=l()(t.enclosureData);!(a=(s=i.next()).done);a=!0){var c=s.value,m={project:e.data.id,file:c.file,create_user:c.create_user,create_time:c.create_time};Object(u.p)(m)}}catch(e){o=!0,n=e}finally{try{!a&&i.return&&i.return()}finally{if(o)throw n}}}var d={action_user:"itsupport",title:"【新需求】"+r.name,message:"需求创建人: "+r.create_user};Object(p.h)(d),t.$router.push("/opstasks/opsdemands")}).catch(function(e){var r=n()(e.response.data)[0];t.$message.error(r[0]),console.log(r)}):Object(c.u)(r).then(function(e){if(t.$message({type:"success",message:"恭喜你，转移成功"}),t.enclosureData.length>0){var a=!0,o=!1,n=void 0;try{for(var s,i=l()(t.enclosureData);!(a=(s=i.next()).done);a=!0){var u=s.value,m={project:e.data.id,file:u.file,create_user:u.create_user,create_time:u.create_time};Object(c.t)(m)}}catch(e){o=!0,n=e}finally{try{!a&&i.return&&i.return()}finally{if(o)throw n}}}var d={groups__name:"OMS_Dev_Manager"};Object(f.f)(d).then(function(t){var a=t.data,o=!0,n=!1,s=void 0;try{for(var i,c=l()(a);!(o=(i=c.next()).done);o=!0){var u=i.value,m={action_user:u.username,title:"【新需求】"+r.name,message:"操作人: "+r.create_user+"地址: http://"+window.location.host+"/#/projects/viewdemand/"+e.data.id};Object(p.h)(m)}}catch(e){n=!0,s=e}finally{try{!o&&c.return&&c.return()}finally{if(n)throw s}}}),t.$router.push("/projects/demands")}).catch(function(e){var r=n()(e.response.data)[0];t.$message.error(r[0]),console.log(r)}),this.commentForm.ticket=e.id,Object(i.h)(this.commentForm);var a={ticket_status:1};Object(i.g)(e.id,a)}}},v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[r("el-card",[r("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"转移"}},[r("el-radio",{attrs:{label:"op"},model:{value:e.copy,callback:function(t){e.copy=t},expression:"copy"}},[e._v("运维")]),e._v(" "),r("el-radio",{attrs:{label:"dev"},model:{value:e.copy,callback:function(t){e.copy=t},expression:"copy"}},[e._v("研发")])],1),e._v(" "),r("el-form-item",{attrs:{label:"名称",prop:"name"}},[r("el-input",{attrs:{placeholder:"请输入名称"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"类型",prop:"type"}},[r("el-select",{attrs:{placeholder:"请选择类型"},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},e._l(e.types,function(e){return r("el-option",{key:e.id,attrs:{value:e.name}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"内容",prop:"content"}},[r("mavon-editor",{ref:"md",staticStyle:{"z-index":"1"},attrs:{code_style:"monokai",toolbars:e.toolbars},on:{imgAdd:e.imgAdd},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}}),e._v(" "),r("a",{staticClass:"tips"},[e._v(" Tip：截图可以直接 Ctrl + v 粘贴到内容里面")])],1),e._v(" "),r("el-form-item",{attrs:{label:"附件"}},[r("el-upload",{ref:"upload",attrs:{action:e.uploadurl,"show-file-list":!1,disabled:e.count>4,"before-upload":e.beforeAvatarUpload}},[r("el-button",{attrs:{slot:"trigger",size:"mini",type:"success",plain:"",disabled:e.count>4},slot:"trigger"},[e._v("\n            上传\n          ")]),e._v(" "),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[r("p",[r("a",{staticStyle:{color:"red"}},[e._v("最多只能上传5个文件")])])])],1),e._v(" "),r("hr",{staticClass:"heng"}),e._v(" "),e.enclosureData.length>0?r("div",{staticClass:"ticketenclosure"},[r("ul",e._l(e.enclosureData,function(t){return t.file?r("li",{key:t.id,staticStyle:{"list-style":"none"}},[r("i",{staticClass:"fa fa-paperclip"}),e._v(" "),r("a",{attrs:{href:e.apiurl+"/upload/"+t.file,download:t.file}},[e._v(e._s(t.file.split("/")[1]))]),e._v(" "),r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除附件",placement:"right"}},[r("el-button",{attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(r){e.deleteEnclosure(t.id)}}})],1)],1):e._e()}))]):e._e()],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("提交")])],1)],1)],1)],1)},_=[],b={render:v,staticRenderFns:_},y=b,g=r("VU/8"),F=a,j=g(h,y,!1,F,null,null);t.default=j.exports},enNm:function(e,t,r){var a=r("mQ1n");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r("rjj0")("14bec6b5",a,!0)},mQ1n:function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,"",""])}});