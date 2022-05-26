import{r}from"../vendor.6dbc47db.js";function b(e,t){try{return e.addEventListener("change",t),()=>e.removeEventListener("change",t)}catch{return e.addListener(t),()=>e.removeListener(t)}}function C(e,t){return t!==void 0?t:typeof window!="undefined"&&"matchMedia"in window?window.matchMedia(e).matches:!1}function L(e,t){const[n,o]=r.exports.useState(C(e,t)),s=r.exports.useRef();return r.exports.useEffect(()=>{if("matchMedia"in window)return s.current=window.matchMedia(e),o(s.current.matches),b(s.current,u=>o(u.matches))},[e]),n}function _(e,t,n={leading:!1}){const[o,s]=r.exports.useState(e),u=r.exports.useRef(!1),h=r.exports.useRef(null),f=r.exports.useRef(!1),l=()=>window.clearTimeout(h.current);return r.exports.useEffect(()=>{u.current&&(!f.current&&n.leading?(f.current=!0,s(e)):(l(),h.current=window.setTimeout(()=>{f.current=!1,s(e)},t)))},[e,n.leading]),r.exports.useEffect(()=>(u.current=!0,l),[]),[o,l]}const P=typeof document!="undefined"?r.exports.useLayoutEffect:r.exports.useEffect;function j(e,t){const n=r.exports.useRef(!1);r.exports.useEffect(()=>{n.current?e():n.current=!0},t)}function T(){return`mantine-${Math.random().toString(36).slice(2,11)}`}function S(e,t,n){r.exports.useEffect(()=>(window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)),[])}function D(e,t){typeof e=="function"?e(t):typeof e=="object"&&e!==null&&"current"in e&&(e.current=t)}function F(...e){return r.exports.useCallback(t=>{e.forEach(n=>D(n,t))},e)}function O({value:e,defaultValue:t,finalValue:n,rule:o,onChange:s,onValueUpdate:u}){const h=o(e),f=r.exports.useRef("initial"),l=o(t)?t:n,[d,a]=r.exports.useState(l);let c=h?e:d;!h&&f.current==="controlled"&&(c=n),f.current=h?"controlled":"uncontrolled";const m=f.current,i=p=>{typeof s=="function"&&s(p),m==="uncontrolled"&&a(p)};return r.exports.useEffect(()=>{m==="uncontrolled"&&a(c),typeof u=="function"&&u(c)},[m,c]),[c,i,f.current]}function U(e){return L("(prefers-reduced-motion: reduce)",e)}const V=e=>e<.5?2*e*e:-1+(4-2*e)*e,B=({axis:e,target:t,parent:n,alignment:o,offset:s,isList:u})=>{if(!t||!n&&typeof document=="undefined")return 0;const h=!!n,l=(n||document.body).getBoundingClientRect(),d=t.getBoundingClientRect(),a=c=>d[c]-l[c];if(e==="y"){const c=a("top");if(c===0)return 0;if(o==="start"){const i=c-s;return i<=d.height*(u?0:1)||!u?i:0}const m=h?l.height:window.innerHeight;if(o==="end"){const i=c+s-m+d.height;return i>=-d.height*(u?0:1)||!u?i:0}return o==="center"?c-m/2+d.height/2:0}if(e==="x"){const c=a("left");if(c===0)return 0;if(o==="start"){const i=c-s;return i<=d.width||!u?i:0}const m=h?l.width:window.innerWidth;if(o==="end"){const i=c+s-m+d.width;return i>=-d.width||!u?i:0}return o==="center"?c-m/2+d.width/2:0}return 0},W=({axis:e,parent:t})=>{if(!t&&typeof document=="undefined")return 0;const n=e==="y"?"scrollTop":"scrollLeft";if(t)return t[n];const{body:o,documentElement:s}=document;return o[n]+s[n]},A=({axis:e,parent:t,distance:n})=>{if(!t&&typeof document=="undefined")return;const o=e==="y"?"scrollTop":"scrollLeft";if(t)t[o]=n;else{const{body:s,documentElement:u}=document;s[o]=n,u[o]=n}};function $({duration:e=1250,axis:t="y",onScrollFinish:n,easing:o=V,offset:s=0,cancelable:u=!0,isList:h=!1}={}){const f=r.exports.useRef(0),l=r.exports.useRef(0),d=r.exports.useRef(!1),a=r.exports.useRef(null),c=r.exports.useRef(null),m=U(),i=()=>{f.current&&cancelAnimationFrame(f.current)},p=r.exports.useCallback(({alignment:y="start"}={})=>{var x;d.current=!1,f.current&&i();const R=(x=W({parent:a.current,axis:t}))!=null?x:0,v=B({parent:a.current,target:c.current,axis:t,alignment:y,offset:s,isList:h})-(a.current?0:R);function g(){l.current===0&&(l.current=performance.now());const M=performance.now()-l.current,E=m||e===0?1:M/e,I=R+v*o(E);A({parent:a.current,axis:t,distance:I}),!d.current&&E<1?f.current=requestAnimationFrame(g):(typeof n=="function"&&n(),l.current=0,f.current=0,i())}g()},[a.current]),w=()=>{u&&(d.current=!0)};return S("wheel",w,{passive:!0}),S("touchmove",w,{passive:!0}),r.exports.useEffect(()=>i,[]),{scrollableRef:a,targetRef:c,scrollIntoView:p,cancel:i}}function z(e){const[t,n]=r.exports.useState("");return P(()=>{n(T())},[]),e||t}export{z as a,U as b,j as c,$ as d,O as e,F as f,_ as g,P as u};
