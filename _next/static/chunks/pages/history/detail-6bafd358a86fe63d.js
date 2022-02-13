(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[627],{1535:function(e,t,n){"use strict";var r=n(5318);t.Z=void 0;var i=r(n(4938)),a=n(5893),o=(0,i.default)((0,a.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"}),"Circle");t.Z=o},3282:function(e,t,n){"use strict";var r=n(5318);t.Z=void 0;var i=r(n(4938)),a=n(5893),o=(0,i.default)((0,a.jsx)("path",{d:"M3 3h18v18H3z"}),"Square");t.Z=o},3321:function(e,t,n){"use strict";n.d(t,{Z:function(){return N}});var r=n(3366),i=n(7462),a=n(7294),o=n(6010),l=n(7925),s=n(7192),c=n(1796),d=n(2151),f=n(7623),u=n(7739),h=n(8216),p=n(8979);function m(e){return(0,p.Z)("MuiButton",e)}var x=(0,n(6087).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var v=a.createContext({}),b=n(5893);const g=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],Z=e=>(0,i.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),j=(0,d.ZP)(u.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],t[`${n.variant}${(0,h.Z)(n.color)}`],t[`size${(0,h.Z)(n.size)}`],t[`${n.variant}Size${(0,h.Z)(n.size)}`],"inherit"===n.color&&t.colorInherit,n.disableElevation&&t.disableElevation,n.fullWidth&&t.fullWidth]}})((({theme:e,ownerState:t})=>(0,i.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,i.Z)({textDecoration:"none",backgroundColor:(0,c.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${e.palette[t.color].main}`,backgroundColor:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.palette[t.color].dark,"@media (hover: none)":{backgroundColor:e.palette[t.color].main}}),"&:active":(0,i.Z)({},"contained"===t.variant&&{boxShadow:e.shadows[8]}),[`&.${x.focusVisible}`]:(0,i.Z)({},"contained"===t.variant&&{boxShadow:e.shadows[6]}),[`&.${x.disabled}`]:(0,i.Z)({color:e.palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${e.palette.action.disabledBackground}`},"outlined"===t.variant&&"secondary"===t.color&&{border:`1px solid ${e.palette.action.disabled}`},"contained"===t.variant&&{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:e.palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid "+("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"outlined"===t.variant&&"inherit"!==t.color&&{color:e.palette[t.color].main,border:`1px solid ${(0,c.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:e.palette[t.color].contrastText,backgroundColor:e.palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${x.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${x.disabled}`]:{boxShadow:"none"}})),w=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.startIcon,t[`iconSize${(0,h.Z)(n.size)}`]]}})((({ownerState:e})=>(0,i.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},Z(e)))),S=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.endIcon,t[`iconSize${(0,h.Z)(n.size)}`]]}})((({ownerState:e})=>(0,i.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},Z(e))));var N=a.forwardRef((function(e,t){const n=a.useContext(v),c=(0,l.Z)(n,e),d=(0,f.Z)({props:c,name:"MuiButton"}),{children:u,color:p="primary",component:x="button",className:Z,disabled:N=!1,disableElevation:_=!1,disableFocusRipple:z=!1,endIcon:y,focusVisibleClassName:A,fullWidth:C=!1,size:R="medium",startIcon:k,type:I,variant:$="text"}=d,M=(0,r.Z)(d,g),L=(0,i.Z)({},d,{color:p,component:x,disabled:N,disableElevation:_,disableFocusRipple:z,fullWidth:C,size:R,type:I,variant:$}),W=(e=>{const{color:t,disableElevation:n,fullWidth:r,size:a,variant:o,classes:l}=e,c={root:["root",o,`${o}${(0,h.Z)(t)}`,`size${(0,h.Z)(a)}`,`${o}Size${(0,h.Z)(a)}`,"inherit"===t&&"colorInherit",n&&"disableElevation",r&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,h.Z)(a)}`],endIcon:["endIcon",`iconSize${(0,h.Z)(a)}`]},d=(0,s.Z)(c,m,l);return(0,i.Z)({},l,d)})(L),E=k&&(0,b.jsx)(w,{className:W.startIcon,ownerState:L,children:k}),T=y&&(0,b.jsx)(S,{className:W.endIcon,ownerState:L,children:y});return(0,b.jsxs)(j,(0,i.Z)({ownerState:L,className:(0,o.Z)(Z,n.className),component:x,disabled:N,focusRipple:!z,focusVisibleClassName:(0,o.Z)(W.focusVisible,A),ref:t,type:I},M,{classes:W,children:[E,u,T]}))}))},6242:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(7462),i=n(3366),a=n(7294),o=n(6010),l=n(7192),s=n(2151),c=n(7623),d=n(5113),f=n(8979);function u(e){return(0,f.Z)("MuiCard",e)}(0,n(6087).Z)("MuiCard",["root"]);var h=n(5893);const p=["className","raised"],m=(0,s.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"})));var x=a.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiCard"}),{className:a,raised:s=!1}=n,d=(0,i.Z)(n,p),f=(0,r.Z)({},n,{raised:s}),x=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},u,t)})(f);return(0,h.jsx)(m,(0,r.Z)({className:(0,o.Z)(x.root,a),elevation:s?8:void 0,ref:t,ownerState:f},d))}))},4267:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(7462),i=n(3366),a=n(7294),o=n(6010),l=n(7192),s=n(2151),c=n(7623),d=n(8979);function f(e){return(0,d.Z)("MuiCardContent",e)}(0,n(6087).Z)("MuiCardContent",["root"]);var u=n(5893);const h=["className","component"],p=(0,s.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}})));var m=a.forwardRef((function(e,t){const n=(0,c.Z)({props:e,name:"MuiCardContent"}),{className:a,component:s="div"}=n,d=(0,i.Z)(n,h),m=(0,r.Z)({},n,{component:s}),x=(e=>{const{classes:t}=e;return(0,l.Z)({root:["root"]},f,t)})(m);return(0,u.jsx)(p,(0,r.Z)({as:s,className:(0,o.Z)(x.root,a),ownerState:m,ref:t},d))}))},1519:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(3366),i=n(7462),a=n(7294),o=n(6010),l=n(7192),s=n(1796),c=n(2151),d=n(7623),f=n(8979);function u(e){return(0,f.Z)("MuiDivider",e)}(0,n(6087).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var h=n(5893);const p=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],m=(0,c.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.absolute&&t.absolute,t[n.variant],n.light&&t.light,"vertical"===n.orientation&&t.vertical,n.flexItem&&t.flexItem,n.children&&t.withChildren,n.children&&"vertical"===n.orientation&&t.withChildrenVertical,"right"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignRight,"left"===n.textAlign&&"vertical"!==n.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,i.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:e.palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:(0,s.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:e,ownerState:t})=>(0,i.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${e.palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:e,ownerState:t})=>(0,i.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${e.palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:e})=>(0,i.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),x=(0,c.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.wrapper,"vertical"===n.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,i.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})));var v=a.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiDivider"}),{absolute:a=!1,children:s,className:c,component:f=(s?"div":"hr"),flexItem:v=!1,light:b=!1,orientation:g="horizontal",role:Z=("hr"!==f?"separator":void 0),textAlign:j="center",variant:w="fullWidth"}=n,S=(0,r.Z)(n,p),N=(0,i.Z)({},n,{absolute:a,component:f,flexItem:v,light:b,orientation:g,role:Z,textAlign:j,variant:w}),_=(e=>{const{absolute:t,children:n,classes:r,flexItem:i,light:a,orientation:o,textAlign:s,variant:c}=e,d={root:["root",t&&"absolute",c,a&&"light","vertical"===o&&"vertical",i&&"flexItem",n&&"withChildren",n&&"vertical"===o&&"withChildrenVertical","right"===s&&"vertical"!==o&&"textAlignRight","left"===s&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,l.Z)(d,u,r)})(N);return(0,h.jsx)(m,(0,i.Z)({as:f,className:(0,o.Z)(_.root,c),role:Z,ref:t,ownerState:N},S,{children:s?(0,h.jsx)(x,{className:_.wrapper,ownerState:N,children:s}):null}))}))},5686:function(e,t,n){"use strict";n.d(t,{O:function(){return v},A:function(){return x}});var r=n(9008),i=n(2293),a=n(155),o=n(1163),l=n(3946),s=n(8862),c=n(214),d=n.n(c),f=n(724),u=n(4360),h=(0,n(7063).Z)({palette:{primary:{main:"#3f50b5"},secondary:{main:"#19857b"},background:{default:"#fff"}}}),p=n(6638),m=n(5893);function x(e){var t=(0,o.useRouter)();return(0,m.jsx)(u.Z,{theme:h,children:(0,m.jsxs)("div",{className:d().container,children:[(0,m.jsxs)(r.default,{children:[(0,m.jsx)("title",{children:"DA\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u30c7\u30e2"}),(0,m.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,m.jsx)(i.Z,{position:"static",elevation:0,color:"primary",children:(0,m.jsxs)(a.Z,{variant:"dense",children:[(0,m.jsx)(l.Z,{onClick:function(){return t.back()},color:"inherit",children:(0,m.jsx)(f.Z,{})}),(0,m.jsx)(s.Z,{variant:"h6",component:"div",sx:{flexGrow:1},color:"white",children:e.title}),(0,m.jsx)(l.Z,{onClick:function(){return t.push("/")},color:"inherit","aria-controls":"menu-appbar",children:(0,m.jsx)(p.Z,{})})]})}),(0,m.jsx)("main",{className:d().main,children:e.children})]})})}function v(e){var t=e.children;return(0,m.jsxs)("div",{className:d().container,children:[(0,m.jsxs)(r.default,{children:[(0,m.jsx)("title",{children:"DA\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u30c7\u30e2"}),(0,m.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,m.jsx)("main",{className:d().main,children:t})]})}},7745:function(e,t,n){"use strict";n.d(t,{s:function(){return l},K:function(){return s}});var r=n(6242),i=n(4267),a=n(122),o=n(5893);function l(e){return(0,o.jsx)("div",{className:"mr-2 mb-2",children:(0,o.jsx)(a.Z,{href:e.href,style:{textDecoration:"none"},children:(0,o.jsx)(r.Z,{variant:"outlined",className:"w-48",children:(0,o.jsx)(i.Z,{children:e.children})})})})}function s(e){return(0,o.jsx)("div",{className:"mr-2 mb-2",children:(0,o.jsx)("div",{className:"inline-block rounded-full border-2 border-gray-200 px-2",children:e.children})})}},2896:function(e,t,n){"use strict";n.d(t,{H:function(){return r}});var r="http://54.248.214.244:8000"},4137:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return L}});var r=n(29),i=n(7794),a=n.n(i),o=n(8100),l=n(9669),s=n.n(l),c=n(5686),d=n(8456),f=n(5893);function u(e){e.children;return(0,f.jsx)("div",{className:"text-center",children:(0,f.jsx)(d.Z,{})})}var h=n(7745),p=n(1163),m=n(2896),x=n(8862),v=n(1519),b=n(3321),g=(n(7294),n(1535)),Z=n(3282),j=n(265),w=n(4518),S=n(6949);var N={50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",A100:"#a7ffeb",A200:"#64ffda",A400:"#1de9b6",A700:"#00bfa5"},_=n(3486);var z={50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",A100:"#f4ff81",A200:"#eeff41",A400:"#c6ff00",A700:"#aeea00"};var y={50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",A100:"#ffff8d",A200:"#ffff00",A400:"#ffea00",A700:"#ffd600"};var A={50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",A100:"#ffe57f",A200:"#ffd740",A400:"#ffc400",A700:"#ffab00"};var C={50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",A100:"#ff9e80",A200:"#ff6e40",A400:"#ff3d00",A700:"#dd2c00"};var R={50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723",A100:"#d7ccc8",A200:"#bcaaa4",A400:"#8d6e63",A700:"#5d4037"};var k={50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4"};var I={50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe"},$=[j.Z,w.Z,S.Z,N,_.Z,z,y,A,C,R,k,I];function M(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return $[e+n%$.length][t]}function L(){var e=(0,p.useRouter)().query.id,t=[],n=[];function i(){return(i=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,s().get("".concat(m.H,"/api/project/").concat(t,"/"));case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var l=(0,o.ZP)(e,(function(e){return i.apply(this,arguments)})).data;if(!l)return(0,f.jsx)(c.A,{children:(0,f.jsx)(u,{})});function d(e){return j.apply(this,arguments)}function j(){return(j=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().post("".concat(m.H,"/api/project/").concat(e,"/assign/"),{assign_type:n});case 2:location.reload();case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return l.candidate_set.map((function(e,t){return e.color=M(t,200),e})),l.destination_set.map((function(e,t){return e.color=M(t,400,2),e})),t=l.result_set.filter((function(e){return"da"===e.type})),n=l.result_set.filter((function(e){return"boston"===e.type})),(0,f.jsxs)(c.A,{title:l.label,children:[(0,f.jsxs)("div",{children:[(0,f.jsx)(x.Z,{variant:"h6",children:"\u5019\u88dc\u8005:"}),(0,f.jsx)("div",{className:"flex flex-wrap mt-4",children:l.candidate_set.map((function(e,t){return(0,f.jsxs)(h.s,{children:[(0,f.jsxs)("div",{className:"font-bold a",children:[(0,f.jsx)(g.Z,{className:"mr-2",fontSize:"small",sx:{color:e.color}}),e.label]}),(0,f.jsx)(v.Z,{}),"\u5e0c\u671b\u9806",(0,f.jsx)("div",{className:"mt-2",children:e.preference.split(",").map((function(t,n){var r=l.destination_set.find((function(e){return e.label===t})).color;return(0,f.jsxs)("div",{className:"flex align-center",children:[(0,f.jsx)("div",{className:"mr-2",children:n+1}),(0,f.jsxs)(h.K,{children:[(0,f.jsx)(Z.Z,{fontSize:"small",className:"mr-1",sx:{color:r}}),t]})]},"".concat(e.label,"-").concat(n))}))})]},"cand-".concat(t))}))})]}),(0,f.jsx)(v.Z,{className:"my-6"}),(0,f.jsxs)("div",{children:[(0,f.jsx)(x.Z,{variant:"h6",children:"\u914d\u5c5e\u5148:"}),(0,f.jsx)("div",{className:"flex flex-wrap mt-4",children:l.destination_set.map((function(e,t){return(0,f.jsxs)(h.s,{children:[(0,f.jsxs)("div",{className:"font-bold",children:[(0,f.jsx)(Z.Z,{className:"mr-2",fontSize:"small",sx:{color:e.color}}),e.label]}),(0,f.jsxs)("div",{className:"mt-2",children:[(0,f.jsx)("span",{children:"\u6700\u5927\u6570: "}),e.capacity]}),(0,f.jsx)(v.Z,{}),"\u5e0c\u671b\u9806",(0,f.jsx)("div",{className:"mt-2",children:e.preference.split(",").map((function(t,n){var r=l.candidate_set.find((function(e){return e.label===t})).color;return(0,f.jsxs)("div",{className:"flex align-center",children:[(0,f.jsx)("div",{className:"mr-2",children:n+1}),(0,f.jsxs)(h.K,{children:[(0,f.jsx)(g.Z,{fontSize:"small",className:"mr-1",sx:{color:r}}),t]})]},"".concat(e.label,"-").concat(n))}))})]},"dest-".concat(t))}))})]}),(0,f.jsx)(v.Z,{className:"my-6"}),(0,f.jsxs)("div",{children:[(0,f.jsx)(x.Z,{variant:"h6",children:"DA\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306b\u3088\u308b\u5272\u308a\u5f53\u3066"}),(0,f.jsxs)("div",{className:"mt-2",children:[(0,f.jsx)(W,{result:t,candidate_set:l.candidate_set,destination_set:l.destination_set}),0===t.length&&(0,f.jsx)("div",{className:"mt-2",children:(0,f.jsx)(b.Z,{onClick:function(){return d("da")},variant:"outlined",children:"\u5272\u308a\u5f53\u3066"})})]})]}),(0,f.jsx)(v.Z,{className:"my-6"}),(0,f.jsxs)("div",{children:[(0,f.jsx)(x.Z,{variant:"h6",children:"\u30dc\u30b9\u30c8\u30f3\u65b9\u5f0f\u306b\u3088\u308b\u5272\u308a\u5f53\u3066"}),(0,f.jsxs)("div",{className:"mt-2",children:[(0,f.jsx)(W,{result:n,candidate_set:l.candidate_set,destination_set:l.destination_set}),0===n.length&&(0,f.jsx)("div",{className:"mt-2",children:(0,f.jsx)(b.Z,{onClick:function(){d("boston")},variant:"outlined",children:"\u5272\u308a\u5f53\u3066"})})]})]})]})}function W(e){if(e.result.length>0){var t=e.result[0].data;return(0,f.jsxs)("div",{children:[(0,f.jsx)("div",{className:"flex",children:t.destinations.map((function(t,n){var r=e.destination_set.find((function(e){return e.label===t.label}));return(0,f.jsxs)(h.s,{children:[(0,f.jsxs)("div",{className:"font-bold",children:[(0,f.jsx)(Z.Z,{className:"mr-2",fontSize:"small",sx:{color:r}}),t.label]}),(0,f.jsx)(v.Z,{className:"my-2"}),(0,f.jsx)("div",{children:t.accept.map((function(t,n){var r=e.candidate_set.find((function(e){return e.label===t.label}));return(0,f.jsxs)(h.K,{children:[(0,f.jsx)(g.Z,{fontSize:"small",className:"mr-1",sx:{color:r}}),t.label]},"rc-".concat(n))}))})]},"result-".concat(n))}))}),(0,f.jsxs)("div",{className:"mt-2",children:["\u672a\u914d\u5c5e:",(0,f.jsx)("div",{className:"flex mt-2",children:t.remains.map((function(t,n){var r=e.candidate_set.find((function(e){return e.label===t.label}));return(0,f.jsxs)(h.K,{children:[(0,f.jsx)(g.Z,{fontSize:"small",className:"mr-1",sx:{color:r}}),t.label]},"remain-".concat(n))}))})]})]})}return(0,f.jsx)("div",{children:"\u307e\u3060\u7d50\u679c\u304c\u3042\u308a\u307e\u305b\u3093\u3002"})}},5839:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/history/detail",function(){return n(4137)}])},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}}},function(e){e.O(0,[829,646,462,774,888,179],(function(){return t=5839,e(e.s=t);var t}));var t=e.O();_N_E=t}]);