webpackJsonp([57],{"92+C":function(e,t,a){"use strict";function n(e){a("Qy/c")}Object.defineProperty(t,"__esModule",{value:!0});var r=a("BO1k"),o=a.n(r),s=a("Dd8w"),l=a.n(s),i=a("iVC1"),c=a("QmSG"),u=a("nSkA"),d=a("0xDb"),p=a("NYxO"),m=a("vMJZ"),f={data:function(){return{route_path:this.$route.path.split("/"),tableData:[],tabletotal:0,currentPage:1,ticket_status:"",pagesize:c.pagesize,pageformat:c.pageformat,rowdata:{id:"",status:3},STATUS_TEXT:{0:"未上线",1:"通过",2:"未通过",3:"已上线"},STATUS_COLOR:{0:"danger",1:"success",2:"info",3:"primary"},listQuery:{limit:c.LIMIT,offset:"",create_user__username:"",search:"",ordering:"status"},toolbars:{preview:!0,bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,ol:!0,help:!0},onlineForm:!1,addForm:!1,ruleForm:{name:"",version:"",content:"",create_user:localStorage.getItem("username")},rules:{name:[{required:!0,message:"请输入工单标题",trigger:"blur"}],version:[{required:!0,message:"请输入工单内容",trigger:"blur"}],content:[{required:!0,message:"请输入工单内容",trigger:"blur"}]},uploadurl:c.uploadurl,apiurl:c.apiUrl,fileList:[],count:0,enclosureForm:{ticket:"",create_user:localStorage.getItem("username"),file:""},enclosureData:[],showForm:!1,send_acc:!1,send_cs:!1,send_it:!1,nopassForm:!1,nopass:{id:"",content:""}}},computed:l()({},Object(p.b)(["role"])),created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;Object(i.g)(this.listQuery).then(function(t){e.tableData=t.data.results,e.tabletotal=t.data.count})},EnclosureData:function(e){var t=this,a={ticket__id:e};Object(i.h)(a).then(function(e){console.log(e.data),t.enclosureData=e.data})},getEncloseur:function(e){console.log(e),this.showForm=!0,this.EnclosureData(e)},searchClick:function(){this.fetchData()},handleSizeChange:function(e){this.listQuery.limit=e,this.fetchData()},handleCurrentChange:function(e){this.listQuery.offset=(e-1)*c.LIMIT,this.fetchData()},handleSuccess:function(e,t){this.fileList.push(t.raw),this.count+=1},handleRemove:function(e,t){this.fileList.remove(e),this.count-=1},changeJobPass:function(e){var t=this,a={status:1};Object(i.m)(e.id,a).then(function(){var a={action_user:"itsupport",title:"【上线申请通过】"+e.name,message:"上线内容: "+e.version};Object(u.h)(a),t.fetchData()})},changeJobNopass:function(e){this.nopass.id=e.id,this.nopass.name=e.name,this.nopassForm=!0},updateNopass:function(){var e=this,t={status:2};Object(i.m)(this.nopass.id,t).then(function(){var t={action_user:"itsupport",title:"【申请未通过】"+e.nopass.name,message:"原因: "+e.nopass.content};Object(u.h)(t),e.nopassForm=!1,e.fetchData()})},changeJobOnline:function(e){this.onlineForm=!0,this.rowdata.id=e.id,this.rowdata.name=e.name,this.rowdata.content=e.content},updateOnline:function(){var e=this;Object(i.m)(this.rowdata.id,this.rowdata).then(function(){if(e.send_acc){var t={action_user:"molly",title:"【已上线】"+e.rowdata.name,message:"上线内容: "+e.rowdata.content};Object(u.h)(t)}if(e.send_cs){var a={action_user:"linda",title:"【已上线】"+e.rowdata.name,message:"上线内容: "+e.rowdata.content};Object(u.h)(a)}if(e.send_it){var n={action_user:"ITDept_SkypeID",title:"【已上线】"+e.rowdata.name,message:"上线内容: "+e.rowdata.content};Object(u.h)(n)}e.fetchData(),e.onlineForm=!1})},handleSortChange:function(e){"ascending"===e.order?this.listQuery.ordering=e.prop:"descending"===e.order?this.listQuery.ordering="-"+e.prop:this.listQuery.ordering="",this.fetchData()},postForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;Object(i.p)(t.ruleForm).then(function(e){t.$message({type:"success",message:"恭喜你，新建成功"});var a=!0,n=!1,r=void 0;try{for(var s,l=o()(t.fileList);!(a=(s=l.next()).done);a=!0){var c=s.value,p=new FormData;p.append("username",t.enclosureForm.create_user),p.append("file",c),p.append("create_time",Object(d.a)(c.uid)),p.append("type",c.type),p.append("archive",t.route_path[1]),Object(u.i)(p).then(function(a){t.enclosureForm.file=a.data.filepath,t.enclosureForm.ticket=e.data.id,Object(i.q)(t.enclosureForm)})}}catch(e){n=!0,r=e}finally{try{!a&&l.return&&l.return()}finally{if(n)throw r}}var f={groups__name:"OMS_Dev_Manager"};Object(m.f)(f).then(function(e){var a=e.data,n=!0,r=!1,s=void 0;try{for(var l,i=o()(a);!(n=(l=i.next()).done);n=!0){var c=l.value,d={action_user:c.username,title:"【新上线申请】"+t.ruleForm.name,message:"上线内容: "+t.ruleForm.content};Object(u.h)(d)}}catch(e){r=!0,s=e}finally{try{!n&&i.return&&i.return()}finally{if(r)throw s}}t.addForm=!1,t.fetchData()})})})},deleteEnclosure:function(e){Object(i.b)(e),this.EnclosureData(e)},cleanForm:function(){this.send_acc=!1,this.send_cs=!1}}},h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[a("el-card",[a("div",{staticClass:"head-lavel"},[a("div",{staticClass:"table-button"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){e.addForm=!0}}},[e._v("新建")])],1),e._v(" "),a("div",{staticClass:"table-search"},[a("el-input",{attrs:{placeholder:"search"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.searchClick(t)}},model:{value:e.listQuery.search,callback:function(t){e.$set(e.listQuery,"search",t)},expression:"listQuery.search"}},[a("i",{staticClass:"el-icon-search el-input__icon",attrs:{slot:"suffix"},on:{click:e.searchClick},slot:"suffix"})])],1)]),e._v(" "),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""},on:{"sort-change":e.handleSortChange}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"标题"}}),e._v(" "),a("el-table-column",{attrs:{prop:"version",label:"项目和版本"}}),e._v(" "),a("el-table-column",{attrs:{prop:"content",label:"内容"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{attrs:{slot:"reference"},slot:"reference"},[a("el-popover",{attrs:{placement:"top",width:"300",trigger:"hover",content:t.row.content}},[a("el-button",{attrs:{slot:"reference",size:"mini"},slot:"reference"},[e._v(e._s(t.row.content.slice(0,10))+"...")])],1)],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"工单状态",sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{type:e.STATUS_COLOR[t.row.status]}},[e._v("\n                "+e._s(e.STATUS_TEXT[t.row.status])+"\n              ")])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"create_user",label:"创建人"}}),e._v(" "),a("el-table-column",{attrs:{prop:"create_time",label:"创建时间",sortable:"custom"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[a("span",[e._v(e._s(e._f("parseDate")(t.row.create_time)))])])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"create_time",label:"附件"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[a("el-button",{attrs:{size:"mini",icon:"el-icon-document"},on:{click:function(a){e.getEncloseur(t.row.id)}}})],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button-group",[0===t.row.status&&"devmanager"===e.role?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.changeJobPass(t.row)}}},[e._v("\n                通过\n              ")]):e._e(),e._v(" "),0===t.row.status&&"devmanager"===e.role?a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){e.changeJobNopass(t.row)}}},[e._v("\n                未通过\n              ")]):e._e(),e._v(" "),1===t.row.status&&"super"===e.role?a("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(a){e.changeJobOnline(t.row)}}},[e._v("\n                已上线\n              ")]):e._e()],1)]}}])})],1)],1),e._v(" "),a("div",{staticClass:"table-footer"},[a("div",{staticClass:"table-button"}),e._v(" "),a("div",{staticClass:"table-pagination"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pagesize,"page-size":e.listQuery.limit,layout:e.pageformat,total:e.tabletotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}})],1)])]),e._v(" "),a("el-dialog",{attrs:{visible:e.onlineForm},on:{"update:visible":function(t){e.onlineForm=t},close:e.cleanForm}},[a("el-form",{ref:"ruleForm",attrs:{model:e.rowdata,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"通知对象"}},[a("el-checkbox",{model:{value:e.send_acc,callback:function(t){e.send_acc=t},expression:"send_acc"}},[e._v("财务")]),e._v(" "),a("el-checkbox",{model:{value:e.send_cs,callback:function(t){e.send_cs=t},expression:"send_cs"}},[e._v("客服")]),e._v(" "),a("el-checkbox",{model:{value:e.send_it,callback:function(t){e.send_it=t},expression:"send_it"}},[e._v("部门群组")])],1),e._v(" "),a("el-form-item",[a("el-button",{on:{click:function(t){e.onlineForm=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.updateOnline}},[e._v("确 定")])],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.nopassForm},on:{"update:visible":function(t){e.nopassForm=t},close:e.cleanForm}},[a("el-form",{ref:"ruleForm",attrs:{model:e.nopass,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"原因"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.nopass.content,callback:function(t){e.$set(e.nopass,"content",t)},expression:"nopass.content"}})],1),e._v(" "),a("el-form-item",[a("el-button",{on:{click:function(t){e.nopassForm=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.updateNopass}},[e._v("确 定")])],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.addForm},on:{"update:visible":function(t){e.addForm=t}}},[a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"标题",prop:"name"}},[a("el-input",{model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"项目和版本",prop:"version"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.ruleForm.version,callback:function(t){e.$set(e.ruleForm,"version",t)},expression:"ruleForm.version"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"内容",prop:"content"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}})],1),e._v(" "),a("el-form-item",[a("hr",{staticClass:"heng"}),e._v(" "),a("el-upload",{ref:"upload",attrs:{action:e.uploadurl,"on-success":e.handleSuccess,"on-remove":e.handleRemove,"file-list":e.fileList}},[a("el-button",{attrs:{slot:"trigger",size:"small",type:"primary",disabled:e.count>3},slot:"trigger"},[e._v("\n            上传文件\n          ")]),e._v("\n          (可以不用上传)\n          "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[a("p",[e._v("上传文件不超过10m，"),a("a",{staticStyle:{color:"red"}},[e._v("最多只能上传3个文件")])])])],1),e._v(" "),a("hr",{staticClass:"heng"})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.postForm("ruleForm")}}},[e._v("提交")]),e._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("清空")])],1)],1)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.showForm},on:{"update:visible":function(t){e.showForm=t}}},[e.enclosureData.length>0?a("div",{staticClass:"ticketenclosure"},[a("ul",e._l(e.enclosureData,function(t){return t.file?a("li",{key:t.id,staticStyle:{"list-style":"none"}},[a("i",{staticClass:"fa fa-paperclip"}),e._v(" "),a("a",{attrs:{href:e.apiurl+"/upload/"+t.file,download:t.file}},[e._v(e._s(t.file.split("/")[1]))])]):e._e()}))]):a("div",[e._v("\n      没有上传附件\n    ")])])],1)},v=[],_={render:h,staticRenderFns:v},b=_,g=a("VU/8"),y=n,F=g(f,b,!1,y,null,null);t.default=F.exports},"Qy/c":function(e,t,a){var n=a("pjLY");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("4c2c94f8",n,!0)},pjLY:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,".modifychange{margin:5px}",""])}});