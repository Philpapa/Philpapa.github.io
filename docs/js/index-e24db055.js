import{O as C,h as g,r as v,y as w}from"./_vue@2.7.16@vue-83e28a6d.js";import{e as F}from"./_element-ui@2.15.14@element-ui-fc052bc5.js";import{n as b,F as p}from"./index-69501200.js";import{c as h}from"./index-9e04d314.js";import"./_@antv_x6-common@2.0.17@@antv-5f61d1c3.js";import"./_lodash-es@4.17.21@lodash-es-326016e5.js";import"./_deepmerge@1.5.2@deepmerge-251d9111.js";import"./_resize-observer-polyfill@1.5.1@resize-observer-polyfill-9304753a.js";import"./_throttle-debounce@1.1.0@throttle-debounce-d93b3c53.js";import"./_babel-helper-vue-jsx-merge-props@2.0.3@babel-helper-vue-jsx-merge-props-72d30afb.js";import"./_normalize-wheel@1.0.1@normalize-wheel-1b789469.js";import"./_async-validator@1.8.5@async-validator-0d2cd599.js";import"./_babel-runtime@6.26.0@babel-runtime-ff8b37cd.js";import"./_core-js@2.6.12@core-js-edebcccf.js";import"./_vuex@3.6.2@vuex-0d722715.js";import"./_axios@1.6.6@axios-0e1c8a69.js";import"./_side-channel@1.0.4@side-channel-286692b5.js";import"./_get-intrinsic@1.2.2@get-intrinsic-d65d77de.js";import"./_has-symbols@1.0.3@has-symbols-af84758f.js";import"./_has-proto@1.0.1@has-proto-ed1b0be6.js";import"./_function-bind@1.1.2@function-bind-0a5fc7a8.js";import"./_hasown@2.0.0@hasown-843e4100.js";import"./_call-bind@1.0.5@call-bind-875e1b33.js";import"./_set-function-length@1.2.0@set-function-length-16fcf548.js";import"./_define-data-property@1.1.1@define-data-property-b4413702.js";import"./_has-property-descriptors@1.0.1@has-property-descriptors-19326040.js";import"./_gopd@1.0.1@gopd-5fc553b7.js";import"./_qs@6.11.2@qs-b0c89749.js";import"./_vue-router@3.5.3@vue-router-44f70d6f.js";import"./_nanoid@3.3.7@nanoid-3ec3f908.js";import"./_gm-crypto@0.1.12@gm-crypto-0d53e928.js";import"./_to-arraybuffer@1.0.1@to-arraybuffer-11df8309.js";import"./_buffer@5.7.1@buffer-3f1a9d90.js";import"./_base64-js@1.5.1@base64-js-787d8b6c.js";import"./_ieee754@1.2.1@ieee754-00029a05.js";import"./_jsbn@1.1.0@jsbn-569987c9.js";import"./_element-resize-detector@1.2.4@element-resize-detector-0b105688.js";import"./_batch-processor@1.0.0@batch-processor-252a9c8d.js";import"./_@vueuse_core@10.7.2@@vueuse-c641c031.js";import"./_@vueuse_shared@10.7.2@@vueuse-de6891b4.js";import"./_vue-demi@0.14.6@vue-demi-7b32015b.js";import"./_v-region@2.3.0@v-region-1f02d150.js";import"./_@antv_x6@2.18.1@@antv-b1d372ee.js";import"./_@antv_x6-geometry@2.0.5@@antv-094791ee.js";import"./_@antv_x6-vue-shape@2.1.1@@antv-8e71ca73.js";import"./_vuedraggable@2.24.3@vuedraggable-31bb3ba2.js";import"./_sortablejs@1.10.2@sortablejs-39264ca6.js";function B(o){let e=C(o),t=C({data:{}});function a(s,i=e){if(!i||!s)return;let r;if(!i.isBasic&&i.id===s.id)return i;if(i.children&&i.children.length>0)for(let c in i.children)a(s,i.children[c])&&(typeof s=="object"&&(i.children[c]=s),r=i.children[c]);return r}function n(s){t.data=s.id===t.data.id?{}:s}return{data:e,currentComp:t,findCompInfoById:a,setCurrentComp:n}}const I=g({name:"constructorTree",setup(){return{}}});var A=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",[e._v("2354235325")])},E=[],L=b(I,A,E,!1,null,"2c085400",null,null);const O=L.exports;function H(o){const{attrs:e,name:t,props:{dicOrigin:a,dic:n,opHeight:s,groupDisabled:i,dividerType:r,dividerHeight:c,dividerColor:l,chooseAlign:u,chooseRowNum:f,textFontSize:x,textColor:k,textLineHeight:T,textSpaceLetter:$,textAlign:S}}=o;let d={};return e.forEach(D=>{const{key:m,value:_,type:N}=D;if(!p.isEmpty(m)&&!p.isEmpty(_)&&(d[m]=_),N==="json"){if(!p.isEmpty(m)&&!p.isEmpty(_)){let y=null;try{y=JSON.parse(_),d[m]=y}catch(R){console.log(R)}}}else!p.isEmpty(m)&&!p.isEmpty(_)&&(d[m]=_)}),s&&(d.opHeight=s),i&&(d.disabled=!0),["dRadio","dCheckbox"].includes(t)&&(d.layout={chooseAlign:u||"many",chooseRowNum:p.isEmpty(f)?0:f}),t==="dDivider"&&(d.dividerStyle={type:r,height:c,color:l}),t==="dText"&&(d.textStyle={size:x,color:k,letterSpacing:$,lineHeight:T,textAlign:S}),d}const P=g({name:"cRecursive",props:{data:{type:Object},currentComp:{type:Object}},setup(){const o=v(["dPlaceholder","dDivider","dTitle","dText"]);function e(a){console.log(a,"e");const n=a.from._prevClass||"",s=a.to._prevClass||"";return n.includes("draggable-active-table")&&!s.includes("draggable-active-table")&&a.dragged._underlying_vm_.tag==="table"&&(delete a.dragged._underlying_vm_.tag,delete a.dragged._underlying_vm_.tableId),s.includes("draggable-active-table")&&(a.dragged._underlying_vm_.tag="table",a.dragged._underlying_vm_.tableId=a.to.__vue__.$attrs.compId),s.includes("draggable-compute-table")&&(a.dragged._underlying_vm_.tag="cTable"),s.includes("can")&&(a.dragged._underlying_vm_.props.groupDisabled=!!a.to.__vue__.$attrs.groupDisabled),s.includes("draggable-comp")?!1:!(!["dInput","dInputNumber","dTextarea","dTime","dRadio","dCheckbox","dSelect","dCascader"].includes(a.dragged._underlying_vm_.name)&&s.includes("draggable-active-table")||!["dRadio","dCheckbox"].includes(a.dragged._underlying_vm_.name)&&s.includes("draggable-compute-table"))}function t(a){if(!a)return{};const{props:{width:n,labelColAlign:s}}=a;return{width:`${n}%`,alignItems:`${s||"center"}`}}return{noLabel:o,useCompAttrs:H,onMove:e,compStyleHandler:t}}});var G=function(){var e=this,t=e._self._c;return e._self._setupProxy,e.data?t("draggable",e._b({staticClass:"c-recursive",attrs:{move:e.onMove,forceFallback:"true",ghostClass:"chosen"},model:{value:e.data.children,callback:function(a){e.$set(e.data,"children",a)},expression:"data.children"}},"draggable",{animation:150,group:{name:"name"},sort:!0},!1),[e._l(e.data.children,function(a){return[t("div",{key:a.id,staticClass:"comp",class:{isCurrent:a.id===e.currentComp.id,isGroup:a.children},style:e.compStyleHandler(a)},[a.props.isCollect?t("c-recursive",e._g({key:a.id,class:{isGroup:a.props.isCollect},staticStyle:{width:"100%"},attrs:{currentComp:e.currentComp,data:a}},e.$listeners)):[e.noLabel.includes(a.name)?e._e():t("span",{staticClass:"comp-label"},[e._v(e._s(a.label))]),t(a.name,e._b({key:a.id,tag:"component",staticClass:"comp-con",attrs:{dic:a.props.dic?a.props.dic:null},model:{value:a.defVal,callback:function(n){e.$set(a,"defVal",n)},expression:"comp.defVal"}},"component",e.useCompAttrs(a),!1))],t("div",{directives:[{name:"show",rawName:"v-show",value:a.id===e.currentComp.id,expression:"comp.id === currentComp.id"}],staticClass:"comp-type"},[e._v(e._s(a.type)+" ")]),t("div",{staticClass:"click-btn",on:{click:function(n){return n.stopPropagation(),e.$emit("setCurrentComp",a)}}})],2)]})],2):e._e()},J=[],j=b(P,G,J,!1,null,"2a8aa139",null,null);const M=j.exports;const V=g({name:"compGroup",props:{type:{type:Number}},setup(o){const e=v(o.type===1?h.basic:h.container),t=v([]),a=v(!1);function n(r){let c=JSON.parse(JSON.stringify(r));return c.id=p.nanoid(),c}function s(r){let c=document.querySelector(".chosen");console.dir(c),a.value=!0;const l=r.to._prevClass||"";return l.includes("draggable-active-table")&&(r.dragged._underlying_vm_.tag="table",r.dragged._underlying_vm_.tableId=r.to.__vue__.$attrs.compId),l.includes("draggable-compute-table")&&(r.dragged._underlying_vm_.tag="cTable"),l.includes("c-recursive")&&(r.dragged._underlying_vm_.props.groupDisabled=!!r.to.__vue__.$attrs.groupDisabled),l.includes("draggable-comp")?!1:!(!["dInput","dInputNumber","dTextarea","dTime","dRadio","dCheckbox","dSelect","dCascader"].includes(r.dragged._underlying_vm_.name)&&l.includes("draggable-active-table")||!["dRadio","dCheckbox"].includes(r.dragged._underlying_vm_.name)&&l.includes("draggable-compute-table"))}function i(r){a.value=!1,t.value=[]}return{compDic:e,delList:t,showDelBox:a,cloneDefaultField:n,onMove:s,onEnd:i}}});var z=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"comp-group"},[t("draggable",e._b({staticClass:"draggable-comp",attrs:{clone:e.cloneDefaultField,move:e.onMove,forceFallback:"true",chosenClass:"chosen"},on:{unchoose:e.onEnd},model:{value:e.compDic,callback:function(a){e.compDic=a},expression:"compDic"}},"draggable",{animation:150,group:{name:"name",pull:"clone"},sort:!0},!1),e._l(e.compDic,function(a,n){return t("div",{key:n,staticClass:"draggable-com-item"},[t("i",{class:`el-icon-my-${a.name}`}),t("span",[e._v(e._s(a.label))])])}),0),e.showDelBox?t("draggable",e._b({key:"del",staticClass:"del-draggable",attrs:{ghostClass:"trash"},model:{value:e.delList,callback:function(a){e.delList=a},expression:"delList"}},"draggable",{animation:150,group:{name:"name",pull:"clone"},sort:!0},!1)):e._e()],1)},q=[],K=b(V,z,q,!1,null,"c6d40f40",null,null);const U=K.exports;const Q={name:"compSet",props:{data:{type:Object}},setup(){return{}}};var W=function(){var e=this,t=e._self._c;return t("div",{staticClass:"comp-set",class:{isActive:e.data.id}},[e.data.id?[t("div",[t("span",[e._v("\u9ED8\u8BA4\u503C")]),e.data.props.dic?[t("el-select",{key:e.data.id,staticStyle:{width:"100%"},attrs:{placeholder:"\u8BF7\u9009\u62E9",multiple:Array.isArray(e.data.defVal)},model:{value:e.data.defVal,callback:function(a){e.$set(e.data,"defVal",a)},expression:"data.defVal"}},e._l(e.data.props.dic,function(a){return t("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})}),1)]:[t("el-input",{key:e.data.id,attrs:{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",type:"text"},model:{value:e.data.defVal,callback:function(a){e.$set(e.data,"defVal",typeof a=="string"?a.trim():a)},expression:"data.defVal"}})]],2)]:e._e()],2)},X=[],Y=b(Q,W,X,!1,null,"b7d58a34",null,null);const Z=Y.exports;const ee=g({components:{ConstructorTree:O,CRecursive:M,CompGroup:U,CompSet:Z},setup(o,e){function t(){let l=e.root.$router;F.exports.MessageBox.confirm("\u82E5\u5185\u5BB9\u672A\u4FDD\u5B58\u6570\u636E\u4F1A\u4E22\u5931\uFF0C\u662F\u5426\u9000\u51FA?","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88"}).then(()=>{l.push("/customFormList")}).catch(u=>{console.log(u)})}const a=v("comp"),n=v(!0);function s(l){n.value=!0;let u=document.querySelector(".el-tabs__active-bar");w(()=>{let f=document.querySelector(`#tab-${l.name}`);u.style.transform=`translate(0, ${f.offsetTop}px)`})}const{data:i,currentComp:r,setCurrentComp:c}=B({id:"basic",isBasic:!0,children:[],cbApi:"",configFields:[]});return{goBack:t,activeTabName:a,showTab:n,tabBarPositionHandler:s,data:i,currentComp:r,setCurrentComp:c}}});var te=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"comp-designer"},[t("div",{staticClass:"con-header"},[t("div",{staticClass:"con-bar-one"},[t("div",{staticClass:"goBack"},[t("i",{staticClass:"el-icon-my-leftarrow",on:{click:e.goBack}}),t("span",[e._v("\u8FD4\u56DE\u5217\u8868")])]),t("div",{staticClass:"form-name"}),t("div",{staticClass:"bar-fn"},[t("div",{staticClass:"bar-btn"},[t("dIcon",{attrs:{name:"preview"}}),t("span",[e._v("\u6253\u5370\u9884\u89C8")])],1),t("div",{staticClass:"bar-btn"},[t("dIcon",{attrs:{name:"preview"}}),t("span",[e._v("\u9884\u89C8")])],1),t("el-button",{attrs:{type:"primary"}},[e._v("\u4FDD\u5B58")])],1)]),t("div",{staticClass:"con-bar-two"},[t("div",{staticClass:"bar-btn"},[t("d-icon",{attrs:{name:"createJson"}}),t("span",[e._v("\u751F\u6210JSON")])],1),t("div",{staticClass:"bar-btn"},[t("d-icon",{attrs:{name:"importJson"}}),t("span",[e._v("\u5BFC\u5165JSON")])],1),t("div",{staticClass:"bar-btn"},[t("d-icon",{attrs:{name:"dataset"}}),t("span",[e._v("\u6570\u636E\u96C6")])],1),t("div",{staticClass:"bar-btn"},[t("d-icon",{attrs:{name:"delete"}}),t("span",[e._v("\u6E05\u7A7A")])],1),t("div",{staticClass:"bar-btn"},[t("d-icon",{attrs:{name:"gjConfig"}}),t("span",[e._v("\u9AD8\u7EA7\u914D\u7F6E")])],1),t("div",{staticClass:"bar-btn"},[t("d-icon",{attrs:{name:"back"}}),t("span",[e._v("\u9000\u51FA")])],1)])]),t("div",{staticClass:"con-body"},[t("el-tabs",{class:{tabs__hidden:!e.showTab},attrs:{"tab-position":"left"},on:{"tab-click":e.tabBarPositionHandler},model:{value:e.activeTabName,callback:function(a){e.activeTabName=a},expression:"activeTabName"}},[t("el-tab-pane",{attrs:{name:"comp"}},[t("span",{staticClass:"tab-item tab-item-comp",attrs:{slot:"label"},slot:"label"},[t("i",{class:e.activeTabName==="comp"?"el-icon-my-activeComp":"el-icon-my-comp"}),t("span",[e._v("\u7EC4\u4EF6")])]),t("div",{staticClass:"tab-tree-title"},[t("span",[e._v("\u57FA\u7840\u63A7\u4EF6")]),t("i",{staticClass:"el-icon-close",on:{click:function(a){e.showTab=!1}}})]),t("Comp-Group",{attrs:{type:1}})],1),t("el-tab-pane",{attrs:{name:"layout"}},[t("span",{staticClass:"tab-item tab-item-layout",attrs:{slot:"label"},slot:"label"},[t("i",{class:e.activeTabName==="layout"?"el-icon-my-activeLayout":"el-icon-my-layout"}),t("span",[e._v("\u5E03\u5C40")])]),t("div",{staticClass:"tab-tree-title"},[t("span",[e._v("\u5E03\u5C40\u63A7\u4EF6")]),t("i",{staticClass:"el-icon-close",on:{click:function(a){e.showTab=!1}}})]),t("Comp-Group",{attrs:{type:2}})],1),t("el-tab-pane",{attrs:{name:"tree"}},[t("span",{staticClass:"tab-item tab-item-tree",attrs:{slot:"label"},slot:"label"},[t("i",{class:e.activeTabName==="tree"?"el-icon-my-activeTree":"el-icon-my-bTree",staticStyle:{"background-size":"90% auto"}}),t("span",[e._v("\u6811\u5F62")])]),t("div",{staticClass:"tab-tree-title"},[t("span",[e._v("\u6570\u636E\u7ED3\u6784\u6811")]),t("i",{staticClass:"el-icon-close",on:{click:function(a){e.showTab=!1}}})]),t("Constructor-Tree")],1)],1),t("C-Recursive",{attrs:{data:e.data,currentComp:e.currentComp.data},on:{setCurrentComp:e.setCurrentComp}}),t("Comp-Set",{attrs:{data:e.currentComp.data}})],1)])},ae=[],se=b(ee,te,ae,!1,null,"b4b5b76e",null,null);const Xe=se.exports;export{Xe as default};
