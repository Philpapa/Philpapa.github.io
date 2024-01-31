import{l as o}from"./_@antv_x6@2.18.1@@antv-b1d372ee.js";import{D as A}from"./_@antv_x6-plugin-dnd@2.1.1@@antv-97a94c80.js";function H(r,t={}){const e=o.Model.isModel(r)?r:new o.Model().resetCells(r,{sort:!1,dryrun:!0}),i=e.getNodes(),n=t.columns||1,s=Math.ceil(i.length/n),l=t.dx||0,a=t.dy||0,p=t.center!==!1,c=t.resizeToFit===!0,x=t.marginX||0,M=t.marginY||0,m=[];let d=t.columnWidth;if(d==="compact")for(let h=0;h<n;h+=1){const w=f.getNodesInColumn(i,h,n);m.push(f.getMaxDim(w,"width")+l)}else{(d==null||d==="auto")&&(d=f.getMaxDim(i,"width")+l);for(let h=0;h<n;h+=1)m.push(d)}const y=f.accumulate(m,x),G=[];let b=t.rowHeight;if(b==="compact")for(let h=0;h<s;h+=1){const w=f.getNodesInRow(i,h,n);G.push(f.getMaxDim(w,"height")+a)}else{(b==null||b==="auto")&&(b=f.getMaxDim(i,"height")+a);for(let h=0;h<s;h+=1)G.push(b)}const I=f.accumulate(G,M);e.startBatch("layout"),i.forEach((h,w)=>{const v=w%n,L=Math.floor(w/n),T=m[v],j=G[L];let E=0,z=0,u=h.getSize();if(c){let O=T-2*l,N=j-2*a;const S=u.height*(u.width?O/u.width:1),k=u.width*(u.height?N/u.height:1);j<S?O=k:N=S,u={width:O,height:N},h.setSize(u,t)}p&&(E=(T-u.width)/2,z=(j-u.height)/2),h.position(y[v]+l+E,I[L]+a+z,t)}),e.stopBatch("layout")}var f;(function(r){function t(s,l){return s.reduce((a,p)=>Math.max(p==null?void 0:p.getSize()[l],a),0)}r.getMaxDim=t;function e(s,l,a){const p=[];for(let c=a*l,x=c+a;c<x;c+=1)s[c]&&p.push(s[c]);return p}r.getNodesInRow=e;function i(s,l,a){const p=[];for(let c=l,x=s.length;c<x;c+=a)s[c]&&p.push(s[c]);return p}r.getNodesInColumn=i;function n(s,l){return s.reduce((a,p,c)=>(a.push(a[c]+p),a),[l||0])}r.accumulate=n})(f||(f={}));const P=`.x6-widget-dnd {
  position: absolute;
  top: -10000px;
  left: -10000px;
  z-index: 999999;
  display: none;
  cursor: move;
  opacity: 0.7;
  pointer-events: 'cursor';
}
.x6-widget-dnd.dragging {
  display: inline-block;
}
.x6-widget-dnd.dragging * {
  pointer-events: none !important;
}
.x6-widget-dnd .x6-graph {
  background: transparent;
  box-shadow: none;
}
.x6-widget-stencil {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.x6-widget-stencil::after {
  position: absolute;
  top: 0;
  display: block;
  width: 100%;
  height: 20px;
  padding: 8px 0;
  line-height: 20px;
  text-align: center;
  opacity: 0;
  transition: top 0.1s linear, opacity 0.1s linear;
  content: ' ';
  pointer-events: none;
}
.x6-widget-stencil-content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: auto;
  overflow-x: hidden;
  overflow-y: auto;
}
.x6-widget-stencil .x6-node [magnet]:not([magnet='passive']) {
  pointer-events: none;
}
.x6-widget-stencil-group {
  padding: 0;
  padding-bottom: 8px;
  overflow: hidden;
  user-select: none;
}
.x6-widget-stencil-group.collapsed {
  height: auto;
  padding-bottom: 0;
}
.x6-widget-stencil-group-title {
  position: relative;
  margin-top: 0;
  margin-bottom: 0;
  padding: 4px;
  cursor: pointer;
}
.x6-widget-stencil-title,
.x6-widget-stencil-group > .x6-widget-stencil-group-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  user-select: none;
}
.x6-widget-stencil .unmatched {
  opacity: 0.3;
}
.x6-widget-stencil .x6-node.unmatched {
  display: none;
}
.x6-widget-stencil-group.unmatched {
  display: none;
}
.x6-widget-stencil-search-text {
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  max-height: 30px;
  line-height: 30px;
  outline: 0;
}
.x6-widget-stencil.not-found::after {
  opacity: 1;
  content: attr(data-not-found-text);
}
.x6-widget-stencil.not-found.searchable::after {
  top: 30px;
}
.x6-widget-stencil.not-found.searchable.collapsable::after {
  top: 50px;
}
.x6-widget-stencil {
  color: #333;
  background: #f5f5f5;
}
.x6-widget-stencil-content {
  position: absolute;
}
.x6-widget-stencil.collapsable > .x6-widget-stencil-content {
  top: 32px;
}
.x6-widget-stencil.searchable > .x6-widget-stencil-content {
  top: 80px;
}
.x6-widget-stencil.not-found::after {
  position: absolute;
}
.x6-widget-stencil.not-found.searchable.collapsable::after {
  top: 80px;
}
.x6-widget-stencil.not-found.searchable::after {
  top: 60px;
}
.x6-widget-stencil-group {
  height: auto;
  margin-bottom: 1px;
  padding: 0;
  transition: none;
}
.x6-widget-stencil-group .x6-graph {
  background: transparent;
  box-shadow: none;
}
.x6-widget-stencil-group.collapsed {
  height: auto;
  max-height: 31px;
}
.x6-widget-stencil-title,
.x6-widget-stencil-group > .x6-widget-stencil-group-title {
  position: relative;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 32px;
  padding: 0 5px 0 8px;
  color: #666;
  font-weight: 700;
  font-size: 12px;
  line-height: 32px;
  cursor: default;
  transition: all 0.3;
}
.x6-widget-stencil-title:hover,
.x6-widget-stencil-group > .x6-widget-stencil-group-title:hover {
  color: #444;
}
.x6-widget-stencil-title {
  background: #e9e9e9;
}
.x6-widget-stencil-group > .x6-widget-stencil-group-title {
  background: #ededed;
}
.x6-widget-stencil.collapsable > .x6-widget-stencil-title,
.x6-widget-stencil-group.collapsable > .x6-widget-stencil-group-title {
  padding-left: 32px;
  cursor: pointer;
}
.x6-widget-stencil.collapsable > .x6-widget-stencil-title::before,
.x6-widget-stencil-group.collapsable > .x6-widget-stencil-group-title::before {
  position: absolute;
  top: 6px;
  left: 8px;
  display: block;
  width: 18px;
  height: 18px;
  margin: 0;
  padding: 0;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: 0 0;
  border: none;
  content: ' ';
}
.x6-widget-stencil.collapsable > .x6-widget-stencil-title::before,
.x6-widget-stencil-group.collapsable > .x6-widget-stencil-group-title::before {
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNOS4zNzUuNUM0LjY4Ny41Ljg3NSA0LjMxMy44NzUgOWMwIDQuNjg4IDMuODEyIDguNSA4LjUgOC41IDQuNjg3IDAgOC41LTMuODEyIDguNS04LjUgMC00LjY4Ny0zLjgxMy04LjUtOC41LTguNXptMCAxNS44ODZDNS4zMDMgMTYuMzg2IDEuOTkgMTMuMDcyIDEuOTkgOXMzLjMxMi03LjM4NSA3LjM4NS03LjM4NVMxNi43NiA0LjkyOCAxNi43NiA5YzAgNC4wNzItMy4zMTMgNy4zODYtNy4zODUgNy4zODZ6Ii8+PHBhdGggZD0iTTEyLjc1MyA4LjQ0M0g1Ljk5N2EuNTU4LjU1OCAwIDAwMCAxLjExNmg2Ljc1NmEuNTU4LjU1OCAwIDAwMC0xLjExNnoiLz48L2c+PC9zdmc+');
  opacity: 0.4;
  transition: all 0.3s;
}
.x6-widget-stencil.collapsable > .x6-widget-stencil-title:hover::before,
.x6-widget-stencil-group.collapsable > .x6-widget-stencil-group-title:hover::before {
  opacity: 0.6;
}
.x6-widget-stencil.collapsable.collapsed > .x6-widget-stencil-title::before,
.x6-widget-stencil-group.collapsable.collapsed > .x6-widget-stencil-group-title::before {
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNOS4zNzUuNUM0LjY4Ny41Ljg3NSA0LjMxMy44NzUgOWMwIDQuNjg4IDMuODEyIDguNSA4LjUgOC41IDQuNjg3IDAgOC41LTMuODEyIDguNS04LjUgMC00LjY4Ny0zLjgxMy04LjUtOC41LTguNXptMCAxNS44ODZDNS4zMDMgMTYuMzg2IDEuOTkgMTMuMDcyIDEuOTkgOXMzLjMxMi03LjM4NSA3LjM4NS03LjM4NVMxNi43NiA0LjkyOCAxNi43NiA5YzAgNC4wNzItMy4zMTMgNy4zODYtNy4zODUgNy4zODZ6Ii8+PHBhdGggZD0iTTEyLjc1MyA4LjQ0M0g1Ljk5N2EuNTU4LjU1OCAwIDAwMCAxLjExNmg2Ljc1NmEuNTU4LjU1OCAwIDAwMC0xLjExNnoiLz48cGF0aCBkPSJNOC44MTcgNS42MjN2Ni43NTZhLjU1OC41NTggMCAwMDEuMTE2IDBWNS42MjNhLjU1OC41NTggMCAxMC0xLjExNiAweiIvPjwvZz48L3N2Zz4=');
  opacity: 0.4;
}
.x6-widget-stencil.collapsable.collapsed > .x6-widget-stencil-title:hover::before,
.x6-widget-stencil-group.collapsable.collapsed > .x6-widget-stencil-group-title:hover::before {
  opacity: 0.6;
}
.x6-widget-stencil input[type='search'] {
  appearance: textfield;
}
.x6-widget-stencil input[type='search']::-webkit-search-cancel-button,
.x6-widget-stencil input[type='search']::-webkit-search-decoration {
  appearance: none;
}
.x6-widget-stencil-search-text {
  display: block;
  width: 90%;
  margin: 8px 5%;
  padding-left: 8px;
  color: #333;
  background: #fff;
  border: 1px solid #e9e9e9;
  border-radius: 12px;
  outline: 0;
}
.x6-widget-stencil-search-text:focus {
  outline: 0;
}
.x6-widget-stencil::after {
  color: #808080;
  font-weight: 600;
  font-size: 12px;
  background: 0 0;
}
`;var U=globalThis&&globalThis.__decorate||function(r,t,e,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,t,e,i);else for(var a=r.length-1;a>=0;a--)(l=r[a])&&(s=(n<3?l(s):n>3?l(t,e,s):l(t,e))||s);return n>3&&s&&Object.defineProperty(t,e,s),s};class C extends o.View{get targetScroller(){return this.options.target.getPlugin("scroller")}get targetGraph(){return this.options.target}get targetModel(){return this.targetGraph.model}constructor(t={}){super(),this.name="stencil",o.CssLoader.ensure(this.name,P),this.graphs={},this.groups={},this.options=Object.assign(Object.assign({},C.defaultOptions),t),this.init()}init(){this.dnd=new A(this.options),this.onSearch=o.FunctionExt.debounce(this.onSearch,200),this.initContainer(),this.initSearch(),this.initContent(),this.initGroups(),this.setTitle(),this.startListening()}load(t,e){return Array.isArray(t)?this.loadGroup(t,e):this.options.groups&&Object.keys(this.options.groups).forEach(i=>{t[i]&&this.loadGroup(t[i],i)}),this}unload(t,e){return Array.isArray(t)?this.loadGroup(t,e,!0):this.options.groups&&Object.keys(this.options.groups).forEach(i=>{t[i]&&this.loadGroup(t[i],i,!0)}),this}toggleGroup(t){return this.isGroupCollapsed(t)?this.expandGroup(t):this.collapseGroup(t),this}collapseGroup(t){if(this.isGroupCollapsable(t)){const e=this.groups[t];e&&!this.isGroupCollapsed(t)&&(this.trigger("group:collapse",{name:t}),o.Dom.addClass(e,"collapsed"))}return this}expandGroup(t){if(this.isGroupCollapsable(t)){const e=this.groups[t];e&&this.isGroupCollapsed(t)&&(this.trigger("group:expand",{name:t}),o.Dom.removeClass(e,"collapsed"))}return this}isGroupCollapsable(t){const e=this.groups[t];return o.Dom.hasClass(e,"collapsable")}isGroupCollapsed(t){const e=this.groups[t];return e&&o.Dom.hasClass(e,"collapsed")}collapseGroups(){return Object.keys(this.groups).forEach(t=>this.collapseGroup(t)),this}expandGroups(){return Object.keys(this.groups).forEach(t=>this.expandGroup(t)),this}resizeGroup(t,e){const i=this.graphs[t];return i&&i.resize(e.width,e.height),this}addGroup(t){const e=Array.isArray(t)?t:[t];this.options.groups?this.options.groups.push(...e):this.options.groups=e,e.forEach(i=>this.initGroup(i))}removeGroup(t){const e=Array.isArray(t)?t:[t];this.options.groups&&(this.options.groups=this.options.groups.filter(i=>!e.includes(i.name)),e.forEach(i=>{const n=this.graphs[i];this.unregisterGraphEvents(n),n.dispose(),delete this.graphs[i];const s=this.groups[i];o.Dom.remove(s),delete this.groups[i]}))}initContainer(){this.container=document.createElement("div"),o.Dom.addClass(this.container,this.prefixClassName(g.base)),o.Dom.attr(this.container,"data-not-found-text",this.options.notFoundText||"No matches found")}initContent(){this.content=document.createElement("div"),o.Dom.addClass(this.content,this.prefixClassName(g.content)),o.Dom.appendTo(this.content,this.container)}initSearch(){this.options.search&&(o.Dom.addClass(this.container,"searchable"),o.Dom.append(this.container,this.renderSearch()))}initGroup(t){const e=this.options.stencilGraphOptions||{},i=document.createElement("div");o.Dom.addClass(i,this.prefixClassName(g.group)),o.Dom.attr(i,"data-name",t.name),(t.collapsable==null&&this.options.collapsable||t.collapsable!==!1)&&o.Dom.addClass(i,"collapsable"),o.Dom.toggleClass(i,"collapsed",t.collapsed===!0);const n=document.createElement("h3");o.Dom.addClass(n,this.prefixClassName(g.groupTitle)),n.innerHTML=t.title||t.name;const s=document.createElement("div");o.Dom.addClass(s,this.prefixClassName(g.groupContent));const l=t.graphOptions,a=new o.Graph(Object.assign(Object.assign(Object.assign({},e),l),{container:document.createElement("div"),model:e.model||new o.Model,width:t.graphWidth||this.options.stencilGraphWidth,height:t.graphHeight||this.options.stencilGraphHeight,interacting:!1,preventDefaultBlankAction:!1}));this.registerGraphEvents(a),o.Dom.append(s,a.container),o.Dom.append(i,[n,s]),o.Dom.appendTo(i,this.content),this.groups[t.name]=i,this.graphs[t.name]=a}initGroups(){if(this.clearGroups(),this.setCollapsableState(),this.options.groups&&this.options.groups.length)this.options.groups.forEach(t=>{this.initGroup(t)});else{const t=this.options.stencilGraphOptions||{},e=new o.Graph(Object.assign(Object.assign({},t),{container:document.createElement("div"),model:t.model||new o.Model,width:this.options.stencilGraphWidth,height:this.options.stencilGraphHeight,interacting:!1,preventDefaultBlankAction:!1}));o.Dom.append(this.content,e.container),this.graphs[D.defaultGroupName]=e}}setCollapsableState(){this.options.collapsable=this.options.collapsable&&this.options.groups&&this.options.groups.some(t=>t.collapsable!==!1),this.options.collapsable?(o.Dom.addClass(this.container,"collapsable"),this.options.groups&&this.options.groups.every(e=>e.collapsed||e.collapsable===!1)?o.Dom.addClass(this.container,"collapsed"):o.Dom.removeClass(this.container,"collapsed")):o.Dom.removeClass(this.container,"collapsable")}setTitle(){const t=document.createElement("div");o.Dom.addClass(t,this.prefixClassName(g.title)),t.innerHTML=this.options.title,o.Dom.appendTo(t,this.container)}renderSearch(){const t=document.createElement("div");o.Dom.addClass(t,this.prefixClassName(g.search));const e=document.createElement("input");return o.Dom.attr(e,{type:"search",placeholder:this.options.placeholder||"Search"}),o.Dom.addClass(e,this.prefixClassName(g.searchText)),o.Dom.append(t,e),t}startListening(){const t=this.prefixClassName(g.title),e=this.prefixClassName(g.searchText),i=this.prefixClassName(g.groupTitle);this.delegateEvents({[`click .${t}`]:"onTitleClick",[`touchstart .${t}`]:"onTitleClick",[`click .${i}`]:"onGroupTitleClick",[`touchstart .${i}`]:"onGroupTitleClick",[`input .${e}`]:"onSearch",[`focusin .${e}`]:"onSearchFocusIn",[`focusout .${e}`]:"onSearchFocusOut"})}stopListening(){this.undelegateEvents()}registerGraphEvents(t){t.on("cell:mousedown",this.onDragStart,this)}unregisterGraphEvents(t){t.off("cell:mousedown",this.onDragStart,this)}loadGroup(t,e,i){const n=this.getModel(e);if(n){const p=t.map(c=>o.Node.isNode(c)?c:o.Node.create(c));i===!0?n.removeCells(p):n.resetCells(p)}const s=this.getGroup(e);let l=this.options.stencilGraphHeight;s&&s.graphHeight!=null&&(l=s.graphHeight);const a=s&&s.layout||this.options.layout;if(a&&n&&o.FunctionExt.call(a,this,n,s),!l){const p=this.getGraph(e);p.fitToContent({minWidth:p.options.width,gridHeight:1,padding:s&&s.graphPadding||this.options.stencilGraphPadding||10})}return this}onDragStart(t){const{e,node:i}=t,n=this.getGroupByNode(i);n&&n.nodeMovable===!1||this.dnd.start(i,e)}filter(t,e){const i=Object.keys(this.graphs).reduce((n,s)=>{const l=this.graphs[s],a=s===D.defaultGroupName?null:s,p=l.model.getNodes().filter(m=>{let d=!1;typeof e=="function"?d=o.FunctionExt.call(e,this,m,t,a,this):typeof e=="boolean"?d=e:d=this.isCellMatched(m,t,e,t.toLowerCase()!==t);const y=l.renderer.findViewByCell(m);return y&&o.Dom.toggleClass(y.container,"unmatched",!d),d}),c=p.length>0,x=this.options,M=new o.Model;return M.resetCells(p),x.layout&&o.FunctionExt.call(x.layout,this,M,this.getGroup(s)),this.groups[s]&&o.Dom.toggleClass(this.groups[s],"unmatched",!c),l.fitToContent({gridWidth:1,gridHeight:1,padding:x.stencilGraphPadding||10}),n||c},!1);o.Dom.toggleClass(this.container,"not-found",!i)}isCellMatched(t,e,i,n){return e&&i?Object.keys(i).some(s=>{if(s==="*"||t.shape===s){const l=i[s];return typeof l=="boolean"?l:(Array.isArray(l)?l:[l]).some(p=>{let c=t.getPropByPath(p);return c!=null?(c=`${c}`,n||(c=c.toLowerCase()),c.indexOf(e)>=0):!1})}return!1}):!0}onSearch(t){this.filter(t.target.value,this.options.search)}onSearchFocusIn(){o.Dom.addClass(this.container,"is-focused")}onSearchFocusOut(){o.Dom.removeClass(this.container,"is-focused")}onTitleClick(){this.options.collapsable&&(o.Dom.toggleClass(this.container,"collapsed"),o.Dom.hasClass(this.container,"collapsed")?this.collapseGroups():this.expandGroups())}onGroupTitleClick(t){const e=t.target.closest(`.${this.prefixClassName(g.group)}`);e&&this.toggleGroup(o.Dom.attr(e,"data-name")||"");const i=Object.keys(this.groups).every(n=>{const s=this.getGroup(n),l=this.groups[n];return s&&s.collapsable===!1||o.Dom.hasClass(l,"collapsed")});o.Dom.toggleClass(this.container,"collapsed",i)}getModel(t){const e=this.getGraph(t);return e?e.model:null}getGraph(t){return this.graphs[t||D.defaultGroupName]}getGroup(t){const e=this.options.groups;return t!=null&&e&&e.length?e.find(i=>i.name===t):null}getGroupByNode(t){const e=this.options.groups;return e?e.find(i=>{const n=this.getModel(i.name);return n?n.has(t.id):!1}):null}clearGroups(){Object.keys(this.graphs).forEach(t=>{const e=this.graphs[t];this.unregisterGraphEvents(e),e.dispose()}),Object.keys(this.groups).forEach(t=>{const e=this.groups[t];o.Dom.remove(e)}),this.graphs={},this.groups={}}onRemove(){this.clearGroups(),this.dnd.remove(),this.stopListening(),this.undelegateDocumentEvents()}dispose(){this.remove(),o.CssLoader.clean(this.name)}}U([o.View.dispose()],C.prototype,"dispose",null);(function(r){r.defaultOptions=Object.assign({stencilGraphWidth:200,stencilGraphHeight:800,title:"Stencil",collapsable:!1,placeholder:"Search",notFoundText:"No matches found",layout(t,e){const i={columnWidth:this.options.stencilGraphWidth/2-10,columns:2,rowHeight:80,resizeToFit:!1,dx:10,dy:10};H(t,Object.assign(Object.assign(Object.assign({},i),this.options.layoutOptions),e?e.layoutOptions:{}))}},A.defaults)})(C||(C={}));var g;(function(r){r.base="widget-stencil",r.title=`${r.base}-title`,r.search=`${r.base}-search`,r.searchText=`${r.search}-text`,r.content=`${r.base}-content`,r.group=`${r.base}-group`,r.groupTitle=`${r.group}-title`,r.groupContent=`${r.group}-content`})(g||(g={}));var D;(function(r){r.defaultGroupName="__default__"})(D||(D={}));export{C as S};
