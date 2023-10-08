/*! For license information please see 938.70982085.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[938],{7938:function(e,t,o){o.r(t),o.d(t,{default:function(){return k}});var r=o(2791),a=o(3366),n=o(7462),i=o(4419),s=o(3733),c=o(7630),l=o(1046),m=o(5878),u=o(1217);function f(e){return(0,u.Z)("MuiImageList",e)}(0,m.Z)("MuiImageList",["root","masonry","quilted","standard","woven"]);var d=r.createContext({}),v=o(184),p=["children","className","cols","component","rowHeight","gap","style","variant"],g=(0,c.ZP)("ul",{name:"MuiImageList",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t[o.variant]]}})((function(e){var t=e.ownerState;return(0,n.Z)({display:"grid",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"},"masonry"===t.variant&&{display:"block"})})),h=r.forwardRef((function(e,t){var o=(0,l.Z)({props:e,name:"MuiImageList"}),c=o.children,m=o.className,u=o.cols,h=void 0===u?2:u,y=o.component,w=void 0===y?"ul":y,Z=o.rowHeight,b=void 0===Z?"auto":Z,S=o.gap,x=void 0===S?4:S,I=o.style,k=o.variant,N=void 0===k?"standard":k,L=(0,a.Z)(o,p),M=r.useMemo((function(){return{rowHeight:b,gap:x,variant:N}}),[b,x,N]);r.useEffect((function(){0}),[]);var _="masonry"===N?(0,n.Z)({columnCount:h,columnGap:x},I):(0,n.Z)({gridTemplateColumns:"repeat(".concat(h,", 1fr)"),gap:x},I),j=(0,n.Z)({},o,{component:w,gap:x,rowHeight:b,variant:N}),C=function(e){var t=e.classes,o={root:["root",e.variant]};return(0,i.Z)(o,f,t)}(j);return(0,v.jsx)(g,(0,n.Z)({as:w,className:(0,s.Z)(C.root,C[N],m),ref:t,style:_,ownerState:j},L,{children:(0,v.jsx)(d.Provider,{value:M,children:c})}))})),y=o(4942),w=(o(8457),o(9103));function Z(e){return(0,u.Z)("MuiImageListItem",e)}var b=(0,m.Z)("MuiImageListItem",["root","img","standard","woven","masonry","quilted"]),S=["children","className","cols","component","rows","style"],x=(0,c.ZP)("li",{name:"MuiImageListItem",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[(0,y.Z)({},"& .".concat(b.img),t.img),t.root,t[o.variant]]}})((function(e){var t=e.ownerState;return(0,n.Z)({display:"block",position:"relative"},"standard"===t.variant&&{display:"flex",flexDirection:"column"},"woven"===t.variant&&{height:"100%",alignSelf:"center","&:nth-of-type(even)":{height:"70%"}},(0,y.Z)({},"& .".concat(b.img),(0,n.Z)({objectFit:"cover",width:"100%",height:"100%",display:"block"},"standard"===t.variant&&{height:"auto",flexGrow:1})))})),I=r.forwardRef((function(e,t){var o=(0,l.Z)({props:e,name:"MuiImageListItem"}),c=o.children,m=o.className,u=o.cols,f=void 0===u?1:u,p=o.component,g=void 0===p?"li":p,h=o.rows,y=void 0===h?1:h,b=o.style,I=(0,a.Z)(o,S),k=r.useContext(d),N=k.rowHeight,L=void 0===N?"auto":N,M=k.gap,_=k.variant,j="auto";"woven"===_?j=void 0:"auto"!==L&&(j=L*y+M*(y-1));var C=(0,n.Z)({},o,{cols:f,component:g,gap:M,rowHeight:L,rows:y,variant:_}),R=function(e){var t=e.classes,o={root:["root",e.variant],img:["img"]};return(0,i.Z)(o,Z,t)}(C);return(0,v.jsx)(x,(0,n.Z)({as:g,className:(0,s.Z)(R.root,R[_],m),ref:t,style:(0,n.Z)({height:j,gridColumnEnd:"masonry"!==_?"span ".concat(f):void 0,gridRowEnd:"masonry"!==_?"span ".concat(y):void 0,marginBottom:"masonry"===_?M:void 0,breakInside:"masonry"===_?"avoid":void 0},b),ownerState:C},I,{children:r.Children.map(c,(function(e){return r.isValidElement(e)?"img"===e.type||(0,w.Z)(e,["Image"])?r.cloneElement(e,{className:(0,s.Z)(R.img,e.props.className)}):e:null}))}))}));function k(){return(0,v.jsx)(h,{sx:{width:"500",height:450},variant:"woven",cols:3,gap:8,children:N.map((function(e){return(0,v.jsx)(I,{children:(0,v.jsx)("img",{srcSet:"".concat(e.img,"?w=161&fit=crop&auto=format&dpr=2 2x"),src:"".concat(e.img,"?w=161&fit=crop&auto=format"),alt:e.title,loading:"lazy"})},e.img)}))})}var N=[{img:"https://images.unsplash.com/photo-1525097487452-6278ff080c31",title:""},{img:"https://images.unsplash.com/photo-1481277542470-605612bd2d61",title:"Doors"},{img:"https://images.unsplash.com/photo-1530731141654-5993c3016c77",title:"Laptop"}]},6532:function(e,t){var o,r=Symbol.for("react.element"),a=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),l=Symbol.for("react.context"),m=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),v=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen");function h(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case n:case s:case i:case f:case d:return e;default:switch(e=e&&e.$$typeof){case m:case l:case u:case p:case v:case c:return e;default:return t}}case a:return t}}}o=Symbol.for("react.module.reference")},8457:function(e,t,o){o(6532)},9103:function(e,t,o){o.d(t,{Z:function(){return a}});var r=o(2791);var a=function(e,t){var o,a;return r.isValidElement(e)&&-1!==t.indexOf(null!=(o=e.type.muiName)?o:null==(a=e.type)||null==(a=a._payload)||null==(a=a.value)?void 0:a.muiName)}}}]);
//# sourceMappingURL=938.70982085.chunk.js.map