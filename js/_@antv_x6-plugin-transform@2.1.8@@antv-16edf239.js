import{l as s}from"./_@antv_x6@2.18.1@@antv-4eec9d0e.js";var y=globalThis&&globalThis.__decorate||function(c,t,e,i){var n=arguments.length,o=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(c,t,e,i);else for(var h=c.length-1;h>=0;h--)(a=c[h])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};class R extends s.View{get model(){return this.graph.model}get view(){return this.graph.renderer.findViewByCell(this.node)}get containerClassName(){return this.prefixClassName("widget-transform")}get resizeClassName(){return`${this.containerClassName}-resize`}get rotateClassName(){return`${this.containerClassName}-rotate`}constructor(t,e,i){super(),this.node=e,this.graph=i,this.options=Object.assign(Object.assign({},g.defaultOptions),t),this.render(),this.startListening()}startListening(){this.delegateEvents({[`mousedown .${this.resizeClassName}`]:"startResizing",[`touchstart .${this.resizeClassName}`]:"startResizing",[`mousedown .${this.rotateClassName}`]:"startRotating",[`touchstart .${this.rotateClassName}`]:"startRotating"}),this.model.on("*",this.update,this),this.graph.on("scale",this.update,this),this.graph.on("translate",this.update,this),this.node.on("removed",this.remove,this),this.model.on("reseted",this.remove,this),this.view.on("cell:knob:mousedown",this.onKnobMouseDown,this),this.view.on("cell:knob:mouseup",this.onKnobMouseUp,this)}stopListening(){this.undelegateEvents(),this.model.off("*",this.update,this),this.graph.off("scale",this.update,this),this.graph.off("translate",this.update,this),this.node.off("removed",this.remove,this),this.model.off("reseted",this.remove,this),this.view.off("cell:knob:mousedown",this.onKnobMouseDown,this),this.view.off("cell:knob:mouseup",this.onKnobMouseUp,this)}renderHandles(){this.container=document.createElement("div");const t=document.createElement("div");s.Dom.attr(t,"draggable","false");const e=t.cloneNode(!0);s.Dom.addClass(e,this.rotateClassName);const i=g.POSITIONS.map(n=>{const o=t.cloneNode(!0);return s.Dom.addClass(o,this.resizeClassName),s.Dom.attr(o,"data-position",n),o});this.empty(),s.Dom.append(this.container,[...i,e])}render(){return this.renderHandles(),this.view&&this.view.addClass(g.NODE_CLS),s.Dom.addClass(this.container,this.containerClassName),s.Dom.toggleClass(this.container,"no-orth-resize",this.options.preserveAspectRatio||!this.options.orthogonalResizing),s.Dom.toggleClass(this.container,"no-resize",!this.options.resizable),s.Dom.toggleClass(this.container,"no-rotate",!this.options.rotatable),this.options.className&&s.Dom.addClass(this.container,this.options.className),this.graph.container.appendChild(this.container),this.update()}update(){const t=this.graph.matrix(),e=this.node.getBBox();e.x*=t.a,e.x+=t.e,e.y*=t.d,e.y+=t.f,e.width*=t.a,e.height*=t.d;const i=s.Angle.normalize(this.node.getAngle()),n=i!==0?`rotate(${i}deg)`:"";return s.Dom.css(this.container,{transform:n,width:e.width,height:e.height,left:e.x,top:e.y}),this.updateResizerDirections(),this}remove(){return this.view&&this.view.removeClass(g.NODE_CLS),super.remove()}onKnobMouseDown(){this.startHandle()}onKnobMouseUp(){this.stopHandle()}updateResizerDirections(){const t=s.Angle.normalize(this.node.getAngle()),e=Math.floor(t*(g.DIRECTIONS.length/360));if(e!==this.prevShift){const i=g.DIRECTIONS.slice(e).concat(g.DIRECTIONS.slice(0,e)),n=a=>`${this.containerClassName}-cursor-${a}`;this.container.querySelectorAll(`.${this.resizeClassName}`).forEach((a,h)=>{s.Dom.removeClass(a,g.DIRECTIONS.map(b=>n(b)).join(" ")),s.Dom.addClass(a,n(i[h]))}),this.prevShift=e}}getTrueDirection(t){const e=s.Angle.normalize(this.node.getAngle());let i=g.POSITIONS.indexOf(t);return i+=Math.floor(e*(g.POSITIONS.length/360)),i%=g.POSITIONS.length,g.POSITIONS[i]}toValidResizeDirection(t){return{top:"top-left",bottom:"bottom-right",left:"bottom-left",right:"top-right"}[t]||t}startResizing(t){t.stopPropagation(),this.model.startBatch("resize",{cid:this.cid});const e=s.Dom.attr(t.target,"data-position");this.prepareResizing(t,e),this.startAction(t)}prepareResizing(t,e){const i=this.getTrueDirection(e);let n=0,o=0;e.split("-").forEach(v=>{n={left:-1,right:1}[v]||n,o={top:-1,bottom:1}[v]||o});const a=this.toValidResizeDirection(e),h={"top-right":"bottomLeft","top-left":"bottomRight","bottom-left":"topRight","bottom-right":"topLeft"}[a],b=s.Angle.normalize(this.node.getAngle());this.setEventData(t,{selector:h,direction:a,trueDirection:i,relativeDirection:e,angle:b,resizeX:n,resizeY:o,action:"resizing"})}startRotating(t){t.stopPropagation(),this.model.startBatch("rotate",{cid:this.cid});const e=this.node.getBBox().getCenter(),i=this.normalizeEvent(t),n=this.graph.snapToGrid(i.clientX,i.clientY);this.setEventData(t,{center:e,action:"rotating",angle:s.Angle.normalize(this.node.getAngle()),start:s.Point.create(n).theta(e)}),this.startAction(t)}onMouseMove(t){const e=this.graph.findViewByCell(this.node);let i=this.getEventData(t);if(i.action){const n=this.normalizeEvent(t);let o=n.clientX,a=n.clientY;const h=this.graph.getPlugin("scroller"),b=this.options.restrictedResizing;if(b===!0||typeof b=="number"){const p=b===!0?0:b,x=h?Math.max(p,8):p,r=this.graph.container.getBoundingClientRect();o=s.NumberExt.clamp(o,r.left+x,r.right-x),a=s.NumberExt.clamp(a,r.top+x,r.bottom-x)}else this.options.autoScrollOnResizing&&h&&h.autoScroll(o,a);const v=this.graph.snapToGrid(o,a),C=this.graph.getGridSize(),D=this.node,f=this.options;if(i.action==="resizing"){i=i,i.resized||(e&&(e.addClass("node-resizing"),this.notify("node:resize",t,e)),i.resized=!0);const p=D.getBBox(),x=s.Point.create(v).rotate(i.angle,p.getCenter()).diff(p[i.selector]);let r=i.resizeX?x.x*i.resizeX:p.width,l=i.resizeY?x.y*i.resizeY:p.height;const m=r,u=l;if(r=s.GeometryUtil.snapToGrid(r,C),l=s.GeometryUtil.snapToGrid(l,C),r=Math.max(r,f.minWidth||C),l=Math.max(l,f.minHeight||C),r=Math.min(r,f.maxWidth||1/0),l=Math.min(l,f.maxHeight||1/0),f.preserveAspectRatio){const d=p.width*l/p.height,N=p.height*r/p.width;r<d?l=N:r=d}const w=i.relativeDirection;if(f.allowReverse&&(m<=-r||u<=-l)){let d;w==="left"?m<=-r&&(d="right"):w==="right"?m<=-r&&(d="left"):w==="top"?u<=-l&&(d="bottom"):w==="bottom"?u<=-l&&(d="top"):w==="top-left"?m<=-r&&u<=-l?d="bottom-right":m<=-r?d="top-right":u<=-l&&(d="bottom-left"):w==="top-right"?m<=-r&&u<=-l?d="bottom-left":m<=-r?d="top-left":u<=-l&&(d="bottom-right"):w==="bottom-left"?m<=-r&&u<=-l?d="top-right":m<=-r?d="bottom-right":u<=-l&&(d="top-left"):w==="bottom-right"&&(m<=-r&&u<=-l?d="top-left":m<=-r?d="bottom-left":u<=-l&&(d="top-right"));const N=d;this.stopHandle();const O=this.container.querySelector(`.${this.resizeClassName}[data-position="${N}"]`);this.startHandle(O),this.prepareResizing(t,N),this.onMouseMove(t)}if(p.width!==r||p.height!==l){const d={ui:!0,direction:i.direction,relativeDirection:i.relativeDirection,trueDirection:i.trueDirection,minWidth:f.minWidth,minHeight:f.minHeight,maxWidth:f.maxWidth,maxHeight:f.maxHeight,preserveAspectRatio:f.preserveAspectRatio===!0};D.resize(r,l,d),this.notify("node:resizing",t,e)}}else if(i.action==="rotating"){i=i,i.rotated||(e&&(e.addClass("node-rotating"),this.notify("node:rotate",t,e)),i.rotated=!0);const p=D.getAngle(),x=i.start-s.Point.create(v).theta(i.center);let r=i.angle+x;f.rotateGrid&&(r=s.GeometryUtil.snapToGrid(r,f.rotateGrid)),r=s.Angle.normalize(r),p!==r&&(D.rotate(r,{absolute:!0}),this.notify("node:rotating",t,e))}}}onMouseUp(t){const e=this.getEventData(t);e.action&&(this.stopAction(t),this.model.stopBatch(e.action==="resizing"?"resize":"rotate",{cid:this.cid}))}startHandle(t){if(this.handle=t||null,s.Dom.addClass(this.container,`${this.containerClassName}-active`),t){s.Dom.addClass(t,`${this.containerClassName}-active-handle`);const e=t.getAttribute("data-position");if(e){const i=g.DIRECTIONS[g.POSITIONS.indexOf(e)];s.Dom.addClass(this.container,`${this.containerClassName}-cursor-${i}`)}}}stopHandle(){if(s.Dom.removeClass(this.container,`${this.containerClassName}-active`),this.handle){s.Dom.removeClass(this.handle,`${this.containerClassName}-active-handle`);const t=this.handle.getAttribute("data-position");if(t){const e=g.DIRECTIONS[g.POSITIONS.indexOf(t)];s.Dom.removeClass(this.container,`${this.containerClassName}-cursor-${e}`)}this.handle=null}}startAction(t){this.startHandle(t.target),this.graph.view.undelegateEvents(),this.delegateDocumentEvents(g.documentEvents,t.data)}stopAction(t){this.stopHandle(),this.undelegateDocumentEvents(),this.graph.view.delegateEvents();const e=this.graph.findViewByCell(this.node),i=this.getEventData(t);e&&(e.removeClass(`node-${i.action}`),i.action==="resizing"&&i.resized?this.notify("node:resized",t,e):i.action==="rotating"&&i.rotated&&this.notify("node:rotated",t,e))}notify(t,e,i,n={}){if(i){const o=i.graph,a=o.view.normalizeEvent(e),h=o.snapToGrid(a.clientX,a.clientY);this.trigger(t,Object.assign({e:a,view:i,node:i.cell,cell:i.cell,x:h.x,y:h.y},n))}}dispose(){this.stopListening(),this.remove(),this.off()}}y([s.View.dispose()],R.prototype,"dispose",null);var g;(function(c){c.NODE_CLS="has-widget-transform",c.DIRECTIONS=["nw","n","ne","e","se","s","sw","w"],c.POSITIONS=["top-left","top","top-right","right","bottom-right","bottom","bottom-left","left"],c.documentEvents={mousemove:"onMouseMove",touchmove:"onMouseMove",mouseup:"onMouseUp",touchend:"onMouseUp"},c.defaultOptions={minWidth:0,minHeight:0,maxWidth:1/0,maxHeight:1/0,rotateGrid:15,rotatable:!0,preserveAspectRatio:!1,orthogonalResizing:!0,restrictedResizing:!1,autoScrollOnResizing:!0,allowReverse:!0}})(g||(g={}));const E=`.x6-widget-transform {
  position: absolute;
  box-sizing: content-box !important;
  margin: -5px 0 0 -5px;
  padding: 4px;
  border: 1px dashed #000;
  border-radius: 5px;
  user-select: none;
  pointer-events: none;
}
.x6-widget-transform > div {
  position: absolute;
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #000;
  transition: background-color 0.2s;
  pointer-events: auto;
  -webkit-user-drag: none;
  user-drag: none;
  /* stylelint-disable-line */
}
.x6-widget-transform > div:hover {
  background-color: #d3d3d3;
}
.x6-widget-transform-cursor-n {
  cursor: n-resize;
}
.x6-widget-transform-cursor-s {
  cursor: s-resize;
}
.x6-widget-transform-cursor-e {
  cursor: e-resize;
}
.x6-widget-transform-cursor-w {
  cursor: w-resize;
}
.x6-widget-transform-cursor-ne {
  cursor: ne-resize;
}
.x6-widget-transform-cursor-nw {
  cursor: nw-resize;
}
.x6-widget-transform-cursor-se {
  cursor: se-resize;
}
.x6-widget-transform-cursor-sw {
  cursor: sw-resize;
}
.x6-widget-transform-resize {
  width: 10px;
  height: 10px;
  border-radius: 6px;
}
.x6-widget-transform-resize[data-position='top-left'] {
  top: -5px;
  left: -5px;
}
.x6-widget-transform-resize[data-position='top-right'] {
  top: -5px;
  right: -5px;
}
.x6-widget-transform-resize[data-position='bottom-left'] {
  bottom: -5px;
  left: -5px;
}
.x6-widget-transform-resize[data-position='bottom-right'] {
  right: -5px;
  bottom: -5px;
}
.x6-widget-transform-resize[data-position='top'] {
  top: -5px;
  left: 50%;
  margin-left: -5px;
}
.x6-widget-transform-resize[data-position='bottom'] {
  bottom: -5px;
  left: 50%;
  margin-left: -5px;
}
.x6-widget-transform-resize[data-position='left'] {
  top: 50%;
  left: -5px;
  margin-top: -5px;
}
.x6-widget-transform-resize[data-position='right'] {
  top: 50%;
  right: -5px;
  margin-top: -5px;
}
.x6-widget-transform.prevent-aspect-ratio .x6-widget-transform-resize[data-position='top'],
.x6-widget-transform.prevent-aspect-ratio .x6-widget-transform-resize[data-position='bottom'],
.x6-widget-transform.prevent-aspect-ratio .x6-widget-transform-resize[data-position='left'],
.x6-widget-transform.prevent-aspect-ratio .x6-widget-transform-resize[data-position='right'] {
  display: none;
}
.x6-widget-transform.no-orth-resize .x6-widget-transform-resize[data-position='bottom'],
.x6-widget-transform.no-orth-resize .x6-widget-transform-resize[data-position='left'],
.x6-widget-transform.no-orth-resize .x6-widget-transform-resize[data-position='right'],
.x6-widget-transform.no-orth-resize .x6-widget-transform-resize[data-position='top'] {
  display: none;
}
.x6-widget-transform.no-resize .x6-widget-transform-resize {
  display: none;
}
.x6-widget-transform-rotate {
  top: -20px;
  left: -20px;
  width: 12px;
  height: 12px;
  border-radius: 6px;
  cursor: crosshair;
}
.x6-widget-transform.no-rotate .x6-widget-transform-rotate {
  display: none;
}
.x6-widget-transform-active {
  border-color: transparent;
  pointer-events: all;
}
.x6-widget-transform-active > div {
  display: none;
}
.x6-widget-transform-active > .x6-widget-transform-active-handle {
  display: block;
  background-color: #808080;
}
`;s.Graph.prototype.createTransformWidget=function(c){const t=this.getPlugin("transform");return t&&t.createWidget(c),this};s.Graph.prototype.clearTransformWidgets=function(){const c=this.getPlugin("transform");return c&&c.clearWidgets(),this};var S=globalThis&&globalThis.__decorate||function(c,t,e,i){var n=arguments.length,o=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(c,t,e,i);else for(var h=c.length-1;h>=0;h--)(a=c[h])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};class z extends s.Basecoat{constructor(t={}){super(),this.name="transform",this.widgets=new Map,this.disabled=!1,this.options=t,s.CssLoader.ensure(this.name,E)}init(t){this.graph=t,!this.disabled&&this.startListening()}startListening(){this.graph.on("node:click",this.onNodeClick,this),this.graph.on("blank:mousedown",this.onBlankMouseDown,this)}stopListening(){this.graph.off("node:click",this.onNodeClick,this),this.graph.off("blank:mousedown",this.onBlankMouseDown,this)}enable(){this.disabled&&(this.disabled=!1,this.startListening())}disable(){this.disabled||(this.disabled=!0,this.stopListening())}isEnabled(){return!this.disabled}createWidget(t){this.clearWidgets();const e=this.createTransform(t);e&&(this.widgets.set(t,e),e.on("*",(i,n)=>{this.trigger(i,n),this.graph.trigger(i,n)}))}onNodeClick({node:t}){this.createWidget(t)}onBlankMouseDown(){this.clearWidgets()}createTransform(t){const e=this.getTransformOptions(t);return e.resizable||e.rotatable?new R(e,t,this.graph):null}getTransformOptions(t){this.options.resizing||(this.options.resizing={enabled:!1}),this.options.rotating||(this.options.rotating={enabled:!1}),typeof this.options.resizing=="boolean"&&(this.options.resizing={enabled:this.options.resizing}),typeof this.options.rotating=="boolean"&&(this.options.rotating={enabled:this.options.rotating});const e=z.parseOptionGroup(this.graph,t,this.options.resizing),i=z.parseOptionGroup(this.graph,t,this.options.rotating);return{resizable:!!e.enabled,minWidth:e.minWidth||0,maxWidth:e.maxWidth||Number.MAX_SAFE_INTEGER,minHeight:e.minHeight||0,maxHeight:e.maxHeight||Number.MAX_SAFE_INTEGER,orthogonalResizing:typeof e.orthogonal=="boolean"?e.orthogonal:!0,restrictedResizing:!!e.restrict,autoScrollOnResizing:typeof e.autoScroll=="boolean"?e.autoScroll:!0,preserveAspectRatio:!!e.preserveAspectRatio,allowReverse:typeof e.allowReverse=="boolean"?e.allowReverse:!0,rotatable:!!i.enabled,rotateGrid:i.grid||15}}clearWidgets(){this.widgets.forEach((t,e)=>{this.graph.getCellById(e.id)&&t.dispose()}),this.widgets.clear()}dispose(){this.clearWidgets(),this.stopListening(),this.off(),s.CssLoader.clean(this.name)}}S([s.Basecoat.dispose()],z.prototype,"dispose",null);(function(c){function t(e,i,n){const o={};return Object.keys(n||{}).forEach(a=>{const h=n[a];o[a]=typeof h=="function"?h.call(e,i):h}),o}c.parseOptionGroup=t})(z||(z={}));export{z as T};
