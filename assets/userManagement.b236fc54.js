import{M as h,r,a4 as g,Y as b,g as v,a5 as I,a6 as _}from"./index.0af4b258.js";import{u as y}from"./useUserQuery.3719189f.js";const x=h({name:"userManagement",setup(){const a=r([]),e=r({}),t=r(!0);function s(){I({isNotPaging:!0,status:"2",pageNum:0,pageSize:0}).then(d=>{const{data:f}=d;a.value=f,a.value.length&&(e.value=a.value[0],l.groupId=e.value.id+"",n(l))})}s();const l=g({isNotPaging:!1,groupId:""}),[i,o,u,n,c,m,p]=y({api:_,params:l});return{userGroup:a,isShow:t,curCharacter:e,qryParams:l,reqLoading:i,page:o,characterList:u,queryCB:n,changeSize:c,changeCurrent:m,deletePageChange:p}},data(){return{pagePermission:[],dialogVisible:!1,title:"",formInline:{},rules:{},editObj:{},pickerOptionsStart:{disabledDate:a=>a.getTime()>Date.now()}}},computed:{...b({menuPermission:a=>a.user.menuPermission})},methods:{getPagePermission(){let a=this.menuPermission[this.$route.name].map(s=>s.value);const e=a.includes("edit"),t=a.includes("delete");if(e){const s=[{label:"\u7F16\u8F91",value:"edit",value1:"edit"},{label:"\u505C\u7528",value:"stop",value1:"edit"},{label:"\u91CD\u7F6E\u5BC6\u7801",value:"updatePassword",value1:"edit"}];this.pagePermission.push(...s)}if(t){const s=[{label:"\u5220\u9664",value:"delete",value1:"delete"}];this.pagePermission.push(...s)}},rowHandler(a,e){switch(a){case"edit":this.eduitForm(e);break;case"stop":this.changeStatus(e);break;case"updatePassword":this.resetCode(e);break;case"delete":this.delUserManage(e);break}},submitForm(a){this.$refs[a].validate(e=>{if(e)if(this.title==="\u64CD\u4F5C\u5458\u7BA1\u7406\u6DFB\u52A0"){const t={account:this.formInline.account,name:this.formInline.name,password:`${this.$fun.encryDataECB(this.formInline.password)} 11HDESaAhiHHugDz`,userGroupIDs:this.formInline.userGroupIDs?this.formInline.userGroupIDs.toString():"",uid:this.formInline.uid,birth:this.formInline.birth,email:this.formInline.email,sex:Number(this.formInline.sex),status:this.formInline.status,tel:this.formInline.tel};this.$api.usermanagement.addUser(t).then(s=>{const{msg:l}=s;this.$message({type:"success",message:l}),this.page.pageNum=1,this.dialogVisible=!1,this.queryCB()})}else{const t={id:this.formInline.id,name:this.formInline.name,account:this.formInline.account,userGroupIDs:this.formInline.userGroupIDs?this.formInline.userGroupIDs.toString():"",birth:this.formInline.birth?this.formInline.birth:"",email:this.formInline.email,uid:this.formInline.uid,sex:Number(this.formInline.sex),status:this.formInline.status,tel:this.formInline.tel};this.$api.usermanagement.updateUser(t).then(s=>{const{msg:l}=s;this.$message({type:"success",message:l}),this.dialogVisible=!1,this.queryCB()})}})},eduitForm(a){console.log(a),this.dialogVisible=!0,this.title="\u64CD\u4F5C\u5458\u7BA1\u7406\u7F16\u8F91",this.formInline=JSON.parse(JSON.stringify(a)),this.formInline.userGroupIDs=this.formInline.userGroupIDs.split(",")},changeStatus(a){const e={id:a.id,status:a.status===0?1:0,name:a.name,userGroupIDs:a.userGroupIDs?a.userGroupIDs.toString():"",birth:a.birth?`${a.birth} 00:00:00`:"",email:a.email,sex:a.sex,tel:a.tel};this.$api.usermanagement.updateUser(e).then(t=>{const{msg:s}=t;this.$message({type:"success",message:s})}),this.queryCB()},resetCode(a){this.$confirm("\u6B64\u64CD\u4F5C\u5C06\u4F1A\u91CD\u7F6E\u5BC6\u7801,\u662F\u5426\u7EE7\u7EED?","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88"}).then(()=>{this.$api.usermanagement.resetPassword(a.id).then(e=>{const{msg:t}=e;this.$message({type:"success",message:t}),this.queryCB()})}).catch(()=>{})},delUserManage(a){this.$confirm("\u6B64\u64CD\u4F5C\u5C06\u4F1A\u6C38\u4E45\u5220\u9664\u6570\u636E, \u662F\u5426\u7EE7\u7EED?","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88"}).then(()=>{this.$api.usermanagement.deleteUser(a.id).then(e=>{const{msg:t}=e;this.$message({type:"success",message:t}),this.deletePageChange(a.id),this.queryCB()})}).catch(()=>{})},handleClose(){this.title="",this.formInline={},this.$refs.formInline.clearValidate(),this.dialogVisible=!1},hasPermissions(a){return this.pagePermission.some(e=>e.value1===a)}},created(){const a=(t,s,l)=>{s?s&&(s.length<2||s.length>50)?l(new Error("\u59D3\u540D\u957F\u5EA6\u5FC5\u987B\u57282-50\u4F4D\u4E4B\u95F4")):l():l(new Error("\u8BF7\u8F93\u5165\u59D3\u540D"))},e=(t,s,l)=>{s?s&&(s.length<6||s.length>50)?l(new Error("\u5BC6\u7801\u957F\u5EA6\u5FC5\u987B\u57286-50\u4F4D\u4E4B\u95F4")):l():l(new Error("\u8BF7\u8F93\u5165\u5BC6\u7801"))};this.rules.name=[{required:!0,validator:a,trigger:"blur"}],this.rules.uid=[{required:!0,message:"\u8BF7\u8F93\u5165\u5DE5\u53F7",trigger:"blur"}],this.rules.account=[{required:!0,message:"\u8BF7\u8F93\u5165\u767B\u5F55\u540D",trigger:"blur"}],this.rules.password=[{required:!0,validator:e,trigger:"blur"}]},mounted(){this.getPagePermission()}});var w=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.reqLoading,expression:"reqLoading"}],staticClass:"user-management"},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"character-menu"},[t("div",{staticClass:"m-header"},[t("span",[e._v("\u64CD\u4F5C\u5458\u7EC4")]),t("i",{staticClass:"el-icon-d-arrow-left",on:{click:function(s){e.isShow=!1}}})]),t("ul",{staticClass:"m-list"},e._l(e.userGroup,function(s,l){return t("li",{key:l,class:{active:e.curCharacter.id===s.id},on:{click:()=>{e.curCharacter=s,e.qryParams.groupId=s.id+"",e.queryCB()}}},[e._v(" "+e._s(s.name)+" ")])}),0)]),t("div",{staticClass:"character-con"},[t("div",{staticClass:"c-header"},[t("span",[t("i",{directives:[{name:"show",rawName:"v-show",value:!e.isShow,expression:"!isShow"}],staticClass:"el-icon-d-arrow-right",staticStyle:{"font-size":"18px","margin-right":"8px"},on:{click:function(s){e.isShow=!0}}}),e._v("\u5F53\u524D\u5206\u7C7B\uFF1A"+e._s(e.curCharacter.name))]),t("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:()=>{e.dialogVisible=!0,e.title="\u64CD\u4F5C\u5458\u7BA1\u7406\u6DFB\u52A0"}}},[e._v("\u65B0\u589E")])],1),t("el-table",{staticClass:"plain_table",staticStyle:{width:"100%"},attrs:{data:e.characterList,height:"calc(100% - 117px)"}},[t("el-table-column",{attrs:{label:"ID",prop:"id",width:"100",align:"left"}}),t("el-table-column",{attrs:{prop:"name",label:"\u59D3\u540D","show-overflow-ellipsis":"",width:"200",align:"left"}}),t("el-table-column",{attrs:{prop:"userGroupList",label:"\u6240\u5C5E\u64CD\u4F5C\u5458\u7EC4","min-width":"250","show-overflow-ellipsis":"",align:"left"},scopedSlots:e._u([{key:"default",fn:function({row:s}){return e._l(s.userGroupList,function(l){return t("span",{key:l.name},[e._v(" "+e._s(l.name)+" ")])})}}])}),t("el-table-column",{attrs:{prop:"tel",label:"\u624B\u673A\u53F7\u7801",width:"130",align:"left"}}),t("el-table-column",{attrs:{prop:"email",label:"\u90AE\u7BB1","min-width":"140",align:"left"}}),t("el-table-column",{attrs:{prop:"status",label:"\u72B6\u6001",width:"76",align:"left"},scopedSlots:e._u([{key:"default",fn:function({row:s}){return[t("div",[t("span",{class:s.status===1?"status-background-color-green":"status-background-color-gray"},[e._v(e._s(s.status===1?"\u542F\u7528":"\u505C\u7528"))])])]}}])}),t("el-table-column",{attrs:{label:"\u64CD\u4F5C",width:"180"},scopedSlots:e._u([{key:"default",fn:function({row:s}){return[e.pagePermission.length<4?[e._l(e.pagePermission,function(l){return[e.hasPermissions(`${l.value1}`)?t("el-button",{key:l.value,attrs:{type:"text"},on:{click:function(i){return e.rowHandler(l.value,s)}}},[e._v(" "+e._s(l.label)+" ")]):e._e()]})]:[e._l(e.pagePermission.slice(0,2),function(l){return[e.hasPermissions(`${l.value1}`)?t("el-button",{key:l.value,attrs:{type:"text"},on:{click:function(i){return e.rowHandler(l.value,s)}}},[e._v(" "+e._s(l.label!=="\u505C\u7528"?l.label:s.status===1?"\u505C\u7528":"\u542F\u7528")+" ")]):e._e()]}),t("el-dropdown",{staticClass:"fe-more-button",staticStyle:{"margin-left":"8px"},attrs:{trigger:"click"}},[t("el-button",{attrs:{type:"text"}},[e._v(" \u66F4\u591A"),t("i",{staticClass:"el-icon-arrow-down el-icon-caret-bottom"})]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.pagePermission.slice(2),function(l){return t("el-dropdown-item",{key:l.value,staticClass:"fe-drop-item"},[e.hasPermissions(`${l.value1}`)?t("el-button",{attrs:{type:"text"},on:{click:function(i){return e.rowHandler(l.value,s)}}},[e._v(" "+e._s(l.label)+" ")]):e._e()],1)}),1)],1)]]}}])})],1),t("d-page",{staticClass:"c-paginate",attrs:{"pager-count":5,"current-page":e.page.pageNum,"page-sizes":[10,20,30,50,100],"page-size":e.page.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.page.total},on:{"current-change":e.changeCurrent,"size-change":e.changeSize}})],1),t("el-dialog",{staticClass:"user-dialog",attrs:{title:e.title,visible:e.dialogVisible,width:"600px","close-on-click-modal":!1,"close-on-press-escape":!1,"before-close":e.handleClose},on:{"update:visible":function(s){e.dialogVisible=s}}},[t("el-form",{ref:"formInline",staticClass:"demo-form-inline",attrs:{inline:!0,rules:e.rules,"label-position":"right",model:e.formInline,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"\u59D3\u540D",prop:"name"}},[t("el-input",{attrs:{clearable:"",placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D"},model:{value:e.formInline.name,callback:function(s){e.$set(e.formInline,"name",typeof s=="string"?s.trim():s)},expression:"formInline.name"}})],1),t("el-form-item",{staticClass:"fe-no_mr",attrs:{label:"\u5DE5\u53F7",prop:"uid"}},[t("el-input",{attrs:{clearable:"",oninput:"value=value.replace(/^(0+)|[^\\d]+/g,'')",maxlength:"20",placeholder:"\u8BF7\u8F93\u5165\u5DE5\u53F7"},model:{value:e.formInline.uid,callback:function(s){e.$set(e.formInline,"uid",s)},expression:"formInline.uid"}})],1),t("el-form-item",{attrs:{label:"\u767B\u5F55\u540D",prop:"account"}},[t("el-input",{attrs:{clearable:"",maxlength:"20",placeholder:"\u8BF7\u8F93\u5165\u767B\u5F55\u540D"},model:{value:e.formInline.account,callback:function(s){e.$set(e.formInline,"account",typeof s=="string"?s.trim():s)},expression:"formInline.account"}})],1),e.title==="\u64CD\u4F5C\u5458\u7BA1\u7406\u6DFB\u52A0"?t("el-form-item",{staticClass:"fe-no_mr",attrs:{label:"\u7528\u6237\u5BC6\u7801",prop:"password"}},[t("el-input",{attrs:{minlength:"6",clearable:"",maxlength:"50",type:"password",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u5BC6\u7801"},model:{value:e.formInline.password,callback:function(s){e.$set(e.formInline,"password",s)},expression:"formInline.password"}})],1):e._e(),t("el-form-item",{class:e.title==="\u64CD\u4F5C\u5458\u7BA1\u7406\u7F16\u8F91"?"fe-no_mr":"",attrs:{label:"\u6027\u522B",prop:"sex"}},[t("el-select",{attrs:{placeholder:"\u8BF7\u9009\u62E9\u6027\u522B",clearable:""},model:{value:e.formInline.sex,callback:function(s){e.$set(e.formInline,"sex",s)},expression:"formInline.sex"}},[t("el-option",{attrs:{label:"\u7537",value:0}}),t("el-option",{attrs:{label:"\u5973",value:1}}),t("el-option",{attrs:{label:"\u5176\u4ED6",value:2}})],1)],1),t("el-form-item",{class:e.title==="\u64CD\u4F5C\u5458\u7BA1\u7406\u7F16\u8F91"?"":"fe-no_mr",attrs:{label:"\u51FA\u751F\u5E74\u6708",prop:"birth"}},[t("el-date-picker",{attrs:{type:"date",clearable:"","picker-options":e.pickerOptionsStart,"value-format":"yyyy-MM-dd 00:00:00",format:"yyyy-MM-dd","disabled-date":"",placeholder:"\u8BF7\u9009\u62E9\u51FA\u751F\u5E74\u6708"},model:{value:e.formInline.birth,callback:function(s){e.$set(e.formInline,"birth",s)},expression:"formInline.birth"}})],1),t("el-form-item",{class:e.title==="\u64CD\u4F5C\u5458\u7BA1\u7406\u7F16\u8F91"?"fe-no_mr":"",attrs:{label:"\u90AE\u7BB1",prop:"email"}},[t("el-input",{attrs:{clearable:"",maxlength:"20",placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1"},model:{value:e.formInline.email,callback:function(s){e.$set(e.formInline,"email",s)},expression:"formInline.email"}})],1),t("el-form-item",{class:e.title==="\u64CD\u4F5C\u5458\u7BA1\u7406\u7F16\u8F91"?"":"fe-no_mr",attrs:{label:"\u624B\u673A\u53F7",prop:"tel"}},[t("el-input",{attrs:{clearable:"",oninput:"value=value.replace(/[^\\d]/g,'')",maxlength:"11",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},model:{value:e.formInline.tel,callback:function(s){e.$set(e.formInline,"tel",s)},expression:"formInline.tel"}})],1),t("el-form-item",{class:e.title==="\u64CD\u4F5C\u5458\u7BA1\u7406\u7F16\u8F91"?"fe-no_mr":"fe-lastelement-margin",attrs:{label:"\u6743\u9650\u7EC4\u522B",prop:"userGroupIDs"}},[t("el-select",{attrs:{"collapse-tags":"",multiple:"",clearable:"",placeholder:"\u8BF7\u9009\u62E9\u6743\u9650\u7EC4\u522B"},model:{value:e.formInline.userGroupIDs,callback:function(s){e.$set(e.formInline,"userGroupIDs",s)},expression:"formInline.userGroupIDs"}},e._l(e.userGroup,function(s){return t("el-option",{key:s.id,attrs:{label:s.name,value:s.id+""}})}),1)],1),t("el-form-item",{staticClass:"fe-lastelement-margin",attrs:{label:"\u72B6\u6001",prop:"status"}},[t("el-switch",{attrs:{"active-color":"#1890ff","active-value":1,"inactive-value":0,"inactive-color":"#b9b9b9"},model:{value:e.formInline.status,callback:function(s){e.$set(e.formInline,"status",s)},expression:"formInline.status"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary"},on:{click:function(s){return e.submitForm("formInline")}}},[e._v("\u4FDD\u5B58")]),t("el-button",{on:{click:e.handleClose}},[e._v("\u53D6\u6D88")])],1)],1)],1)},C=[],k=v(x,w,C,!1,null,"109a9fdb",null,null);const G=k.exports;export{G as default};
