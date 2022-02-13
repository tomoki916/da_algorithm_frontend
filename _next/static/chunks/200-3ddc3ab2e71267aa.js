"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[200],{8456:function(e,r,t){t.d(r,{Z:function(){return Z}});var n=t(3366),i=t(7462),o=t(7294),a=t(6010),u=t(7192),c=t(917),s=t(8216),l=t(7623),f=t(2151),d=t(8979);function v(e){return(0,d.Z)("MuiCircularProgress",e)}(0,t(6087).Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var h=t(5893);const g=["className","color","disableShrink","size","style","thickness","value","variant"];let p,m,y,b,w=e=>e;const k=44,S=(0,c.F4)(p||(p=w`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),x=(0,c.F4)(m||(m=w`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),R=(0,f.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,s.Z)(t.color)}`]]}})((({ownerState:e,theme:r})=>(0,i.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:r.transitions.create("transform")},"inherit"!==e.color&&{color:r.palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,c.iv)(y||(y=w`
      animation: ${0} 1.4s linear infinite;
    `),S))),E=(0,f.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),C=(0,f.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.circle,r[`circle${(0,s.Z)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})((({ownerState:e,theme:r})=>(0,i.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,c.iv)(b||(b=w`
      animation: ${0} 1.4s ease-in-out infinite;
    `),x)));var Z=o.forwardRef((function(e,r){const t=(0,l.Z)({props:e,name:"MuiCircularProgress"}),{className:o,color:c="primary",disableShrink:f=!1,size:d=40,style:p,thickness:m=3.6,value:y=0,variant:b="indeterminate"}=t,w=(0,n.Z)(t,g),S=(0,i.Z)({},t,{color:c,disableShrink:f,size:d,thickness:m,value:y,variant:b}),x=(e=>{const{classes:r,variant:t,color:n,disableShrink:i}=e,o={root:["root",t,`color${(0,s.Z)(n)}`],svg:["svg"],circle:["circle",`circle${(0,s.Z)(t)}`,i&&"circleDisableShrink"]};return(0,u.Z)(o,v,r)})(S),Z={},O={},P={};if("determinate"===b){const e=2*Math.PI*((k-m)/2);Z.strokeDasharray=e.toFixed(3),P["aria-valuenow"]=Math.round(y),Z.strokeDashoffset=`${((100-y)/100*e).toFixed(3)}px`,O.transform="rotate(-90deg)"}return(0,h.jsx)(R,(0,i.Z)({className:(0,a.Z)(x.root,o),style:(0,i.Z)({width:d,height:d},O,p),ownerState:S,ref:r,role:"progressbar"},P,w,{children:(0,h.jsx)(E,{className:x.svg,ownerState:S,viewBox:"22 22 44 44",children:(0,h.jsx)(C,{className:x.circle,style:Z,ownerState:S,cx:k,cy:k,r:(k-m)/2,fill:"none",strokeWidth:m})})}))}))},8100:function(e,r,t){t.d(r,{ZP:function(){return Q}});var n=t(7294);function i(e,r,t,n){return new(t||(t=Promise))((function(i,o){function a(e){try{c(n.next(e))}catch(r){o(r)}}function u(e){try{c(n.throw(e))}catch(r){o(r)}}function c(e){var r;e.done?i(e.value):(r=e.value,r instanceof t?r:new t((function(e){e(r)}))).then(a,u)}c((n=n.apply(e,r||[])).next())}))}function o(e,r){var t,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=r.call(e,a)}catch(u){o=[6,u],n=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}var a,u=function(){},c=u(),s=Object,l=function(e){return e===c},f=function(e){return"function"==typeof e},d=function(e,r){return s.assign({},e,r)},v="undefined",h=function(){return typeof window!=v},g=new WeakMap,p=0,m=function(e){var r,t,n=typeof e,i=e&&e.constructor,o=i==Date;if(s(e)!==e||o||i==RegExp)r=o?e.toJSON():"symbol"==n?e.toString():"string"==n?JSON.stringify(e):""+e;else{if(r=g.get(e))return r;if(r=++p+"~",g.set(e,r),i==Array){for(r="@",t=0;t<e.length;t++)r+=m(e[t])+",";g.set(e,r)}if(i==s){r="#";for(var a=s.keys(e).sort();!l(t=a.pop());)l(e[t])||(r+=t+":"+m(e[t])+",");g.set(e,r)}}return r},y=!0,b=h(),w=typeof document!=v,k=b&&window.addEventListener?window.addEventListener.bind(window):u,S=w?document.addEventListener.bind(document):u,x=b&&window.removeEventListener?window.removeEventListener.bind(window):u,R=w?document.removeEventListener.bind(document):u,E={isOnline:function(){return y},isVisible:function(){var e=w&&document.visibilityState;return l(e)||"hidden"!==e}},C={initFocus:function(e){return S("visibilitychange",e),k("focus",e),function(){R("visibilitychange",e),x("focus",e)}},initReconnect:function(e){var r=function(){y=!0,e()},t=function(){y=!1};return k("online",r),k("offline",t),function(){x("online",r),x("offline",t)}}},Z=!h()||"Deno"in window,O=function(e){return h()&&typeof window.requestAnimationFrame!=v?window.requestAnimationFrame(e):setTimeout(e,1)},P=Z?n.useEffect:n.useLayoutEffect,D="undefined"!==typeof navigator&&navigator.connection,T=!Z&&D&&(["slow-2g","2g"].includes(D.effectiveType)||D.saveData),V=function(e){if(f(e))try{e=e()}catch(t){e=""}var r=[].concat(e);return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?m(e):"",r,e?"$swr$"+e:""]},M=new WeakMap,I=function(e,r,t,n,i,o,a){void 0===a&&(a=!0);var u=M.get(e),c=u[0],s=u[1],l=u[3],f=c[r],d=s[r];if(a&&d)for(var v=0;v<d.length;++v)d[v](t,n,i);return o&&(delete l[r],f&&f[0])?f[0](2).then((function(){return e.get(r)})):e.get(r)},F=0,L=function(){return++F},N=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return i(void 0,void 0,void 0,(function(){var r,t,n,i,a,u,s,v,h,g,p,m,y,b,w,k,S,x,R,E;return o(this,(function(o){switch(o.label){case 0:if(r=e[0],t=e[1],n=e[2],i=e[3],u=!1!==(a="boolean"===typeof i?{revalidate:i}:i||{}).populateCache,s=!1!==a.revalidate,v=!1!==a.rollbackOnError,h=a.optimisticData,g=V(t),p=g[0],m=g[2],!p)return[2];if(y=M.get(r),b=y[2],e.length<3)return[2,I(r,p,r.get(p),c,c,s,u)];if(w=n,S=L(),b[p]=[S,0],x=!l(h),R=r.get(p),x&&(r.set(p,h),I(r,p,h)),f(w))try{w=w(r.get(p))}catch(C){k=C}return w&&f(w.then)?[4,w.catch((function(e){k=e}))]:[3,2];case 1:if(w=o.sent(),S!==b[p][0]){if(k)throw k;return[2,w]}k&&x&&v&&(u=!0,w=R,r.set(p,R)),o.label=2;case 2:return u&&(k||r.set(p,w),r.set(m,d(r.get(m),{error:k}))),b[p][1]=L(),[4,I(r,p,w,k,c,s,u)];case 3:if(E=o.sent(),k)throw k;return[2,u?E:w]}}))}))},$=function(e,r){for(var t in e)e[t][0]&&e[t][0](r)},A=function(e,r){if(!M.has(e)){var t=d(C,r),n={},i=N.bind(c,e),o=u;if(M.set(e,[n,{},{},{},i]),!Z){var a=t.initFocus(setTimeout.bind(c,$.bind(c,n,0))),s=t.initReconnect(setTimeout.bind(c,$.bind(c,n,1)));o=function(){a&&a(),s&&s(),M.delete(e)}}return[e,i,o]}return[e,M.get(e)[4]]},W=A(new Map),j=W[0],_=W[1],z=d({onLoadingSlow:u,onSuccess:u,onError:u,onErrorRetry:function(e,r,t,n,i){var o=t.errorRetryCount,a=i.retryCount,u=~~((Math.random()+.5)*(1<<(a<8?a:8)))*t.errorRetryInterval;!l(o)&&a>o||setTimeout(n,u,i)},onDiscarded:u,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:T?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:T?5e3:3e3,compare:function(e,r){return m(e)==m(r)},isPaused:function(){return!1},cache:j,mutate:_,fallback:{}},E),q=function(e,r){var t=d(e,r);if(r){var n=e.use,i=e.fallback,o=r.use,a=r.fallback;n&&o&&(t.use=n.concat(o)),i&&a&&(t.fallback=d(i,a))}return t},J=(0,n.createContext)({}),B=function(e){return f(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]},G=function(){return d(z,(0,n.useContext)(J))},H=function(e,r,t){var n=r[e]||(r[e]=[]);return n.push(t),function(){var e=n.indexOf(t);e>=0&&(n[e]=n[n.length-1],n.pop())}},K={dedupe:!0},Q=(s.defineProperty((function(e){var r=e.value,t=q((0,n.useContext)(J),r),i=r&&r.provider,o=(0,n.useState)((function(){return i?A(i(t.cache||j),r):c}))[0];return o&&(t.cache=o[0],t.mutate=o[1]),P((function(){return o?o[2]:c}),[]),(0,n.createElement)(J.Provider,d(e,{value:t}))}),"default",{value:z}),a=function(e,r,t){var a=t.cache,u=t.compare,s=t.fallbackData,v=t.suspense,h=t.revalidateOnMount,g=t.refreshInterval,p=t.refreshWhenHidden,m=t.refreshWhenOffline,y=M.get(a),b=y[0],w=y[1],k=y[2],S=y[3],x=V(e),R=x[0],E=x[1],C=x[2],D=(0,n.useRef)(!1),T=(0,n.useRef)(!1),F=(0,n.useRef)(R),$=(0,n.useRef)(r),A=(0,n.useRef)(t),W=function(){return A.current},j=function(){return W().isVisible()&&W().isOnline()},_=function(e){return a.set(C,d(a.get(C),e))},z=a.get(R),q=l(s)?t.fallback[R]:s,J=l(z)?q:z,B=a.get(C)||{},G=B.error,Q=function(){return l(h)?!W().isPaused()&&(v?!l(J):l(J)||t.revalidateIfStale):h},U=!(!R||!r)&&(!!B.isValidating||!D.current&&Q()),X=function(e,r){var t=(0,n.useState)({})[1],i=(0,n.useRef)(e),o=(0,n.useRef)({data:!1,error:!1,isValidating:!1}),a=(0,n.useCallback)((function(e){var n=!1,a=i.current;for(var u in e){var c=u;a[c]!==e[c]&&(a[c]=e[c],o.current[c]&&(n=!0))}n&&!r.current&&t({})}),[]);return P((function(){i.current=e})),[i,o.current,a]}({data:J,error:G,isValidating:U},T),Y=X[0],ee=X[1],re=X[2],te=(0,n.useCallback)((function(e){return i(void 0,void 0,void 0,(function(){var r,n,i,s,d,v,h,g,p,m,y,b,w;return o(this,(function(o){switch(o.label){case 0:if(r=$.current,!R||!r||T.current||W().isPaused())return[2,!1];s=!0,d=e||{},v=!S[R]||!d.dedupe,h=function(){return!T.current&&R===F.current&&D.current},g=function(){var e=S[R];e&&e[1]===i&&delete S[R]},p={isValidating:!1},m=function(){_({isValidating:!1}),h()&&re(p)},_({isValidating:!0}),re({isValidating:!0}),o.label=1;case 1:return o.trys.push([1,3,,4]),v&&(I(a,R,Y.current.data,Y.current.error,!0),t.loadingTimeout&&!a.get(R)&&setTimeout((function(){s&&h()&&W().onLoadingSlow(R,t)}),t.loadingTimeout),S[R]=[r.apply(void 0,E),L()]),w=S[R],n=w[0],i=w[1],[4,n];case 2:return n=o.sent(),v&&setTimeout(g,t.dedupingInterval),S[R]&&S[R][1]===i?(_({error:c}),p.error=c,y=k[R],!l(y)&&(i<=y[0]||i<=y[1]||0===y[1])?(m(),v&&h()&&W().onDiscarded(R),[2,!1]):(u(Y.current.data,n)?p.data=Y.current.data:p.data=n,u(a.get(R),n)||a.set(R,n),v&&h()&&W().onSuccess(n,R,t),[3,4])):(v&&h()&&W().onDiscarded(R),[2,!1]);case 3:return b=o.sent(),g(),W().isPaused()||(_({error:b}),p.error=b,v&&h()&&(W().onError(b,R,t),("boolean"===typeof t.shouldRetryOnError&&t.shouldRetryOnError||f(t.shouldRetryOnError)&&t.shouldRetryOnError(b))&&j()&&W().onErrorRetry(b,R,t,te,{retryCount:(d.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return s=!1,m(),h()&&v&&I(a,R,p.data,p.error,!1),[2,!0]}}))}))}),[R]),ne=(0,n.useCallback)(N.bind(c,a,(function(){return F.current})),[]);if(P((function(){$.current=r,A.current=t})),P((function(){if(R){var e=D.current,r=te.bind(c,K),t=0,n=H(R,w,(function(e,r,t){re(d({error:r,isValidating:t},u(Y.current.data,e)?c:{data:e}))})),i=H(R,b,(function(e){if(0==e){var n=Date.now();W().revalidateOnFocus&&n>t&&j()&&(t=n+W().focusThrottleInterval,r())}else if(1==e)W().revalidateOnReconnect&&j()&&r();else if(2==e)return te()}));return T.current=!1,F.current=R,D.current=!0,e&&re({data:J,error:G,isValidating:U}),Q()&&(l(J)||Z?r():O(r)),function(){T.current=!0,n(),i()}}}),[R,te]),P((function(){var e;function r(){var r=f(g)?g(J):g;r&&-1!==e&&(e=setTimeout(t,r))}function t(){Y.current.error||!p&&!W().isVisible()||!m&&!W().isOnline()?r():te(K).then(r)}return r(),function(){e&&(clearTimeout(e),e=-1)}}),[g,p,m,te]),(0,n.useDebugValue)(J),v&&l(J)&&R)throw $.current=r,A.current=t,l(G)?te(K):G;return{mutate:ne,get data(){return ee.data=!0,J},get error(){return ee.error=!0,G},get isValidating(){return ee.isValidating=!0,U}}},function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var t=G(),n=B(e),i=n[0],o=n[1],u=n[2],c=q(t,u),s=a,l=c.use;if(l)for(var f=l.length;f-- >0;)s=l[f](s);return s(i,o||c.fetcher,c)})}}]);