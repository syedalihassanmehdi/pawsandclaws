(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,98183,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={assign:function(){return l},searchParamsToUrlQuery:function(){return i},urlQueryToSearchParams:function(){return s}};for(var n in o)Object.defineProperty(t,n,{enumerable:!0,get:o[n]});function i(e){let r={};for(let[t,o]of e.entries()){let e=r[t];void 0===e?r[t]=o:Array.isArray(e)?e.push(o):r[t]=[e,o]}return r}function a(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function s(e){let r=new URLSearchParams;for(let[t,o]of Object.entries(e))if(Array.isArray(o))for(let e of o)r.append(t,a(e));else r.set(t,a(o));return r}function l(e,...r){for(let t of r){for(let r of t.keys())e.delete(r);for(let[r,o]of t.entries())e.append(r,o)}return e}},95057,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={formatUrl:function(){return s},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var n in o)Object.defineProperty(t,n,{enumerable:!0,get:o[n]});let i=e.r(90809)._(e.r(98183)),a=/https?|ftp|gopher|file/;function s(e){let{auth:r,hostname:t}=e,o=e.protocol||"",n=e.pathname||"",s=e.hash||"",l=e.query||"",c=!1;r=r?encodeURIComponent(r).replace(/%3A/i,":")+"@":"",e.host?c=r+e.host:t&&(c=r+(~t.indexOf(":")?`[${t}]`:t),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(i.urlQueryToSearchParams(l)));let d=e.search||l&&`?${l}`||"";return o&&!o.endsWith(":")&&(o+=":"),e.slashes||(!o||a.test(o))&&!1!==c?(c="//"+(c||""),n&&"/"!==n[0]&&(n="/"+n)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),d&&"?"!==d[0]&&(d="?"+d),n=n.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${o}${c}${n}${d}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return s(e)}},18581,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return n}});let o=e.r(71645);function n(e,r){let t=(0,o.useRef)(null),n=(0,o.useRef)(null);return(0,o.useCallback)(o=>{if(null===o){let e=t.current;e&&(t.current=null,e());let r=n.current;r&&(n.current=null,r())}else e&&(t.current=i(e,o)),r&&(n.current=i(r,o))},[e,r])}function i(e,r){if("function"!=typeof e)return e.current=r,()=>{e.current=null};{let t=e(r);return"function"==typeof t?t:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),r.exports=t.default)},18967,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={DecodeError:function(){return x},MiddlewareNotFoundError:function(){return j},MissingStaticPage:function(){return v},NormalizeError:function(){return g},PageNotFoundError:function(){return y},SP:function(){return b},ST:function(){return h},WEB_VITALS:function(){return i},execOnce:function(){return a},getDisplayName:function(){return p},getLocationOrigin:function(){return c},getURL:function(){return d},isAbsoluteUrl:function(){return l},isResSent:function(){return u},loadGetInitialProps:function(){return m},normalizeRepeatedSlashes:function(){return f},stringifyError:function(){return k}};for(var n in o)Object.defineProperty(t,n,{enumerable:!0,get:o[n]});let i=["CLS","FCP","FID","INP","LCP","TTFB"];function a(e){let r,t=!1;return(...o)=>(t||(t=!0,r=e(...o)),r)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>s.test(e);function c(){let{protocol:e,hostname:r,port:t}=window.location;return`${e}//${r}${t?":"+t:""}`}function d(){let{href:e}=window.location,r=c();return e.substring(r.length)}function p(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function u(e){return e.finished||e.headersSent}function f(e){let r=e.split("?");return r[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(r[1]?`?${r.slice(1).join("?")}`:"")}async function m(e,r){let t=r.res||r.ctx&&r.ctx.res;if(!e.getInitialProps)return r.ctx&&r.Component?{pageProps:await m(r.Component,r.ctx)}:{};let o=await e.getInitialProps(r);if(t&&u(t))return o;if(!o)throw Object.defineProperty(Error(`"${p(e)}.getInitialProps()" should resolve to an object. But found "${o}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return o}let b="u">typeof performance,h=b&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class x extends Error{}class g extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class v extends Error{constructor(e,r){super(),this.message=`Failed to load static file for page: ${e} ${r}`}}class j extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function k(e){return JSON.stringify({message:e.message,stack:e.stack})}},73668,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return i}});let o=e.r(18967),n=e.r(52817);function i(e){if(!(0,o.isAbsoluteUrl)(e))return!0;try{let r=(0,o.getLocationOrigin)(),t=new URL(e,r);return t.origin===r&&(0,n.hasBasePath)(t.pathname)}catch(e){return!1}}},84508,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"errorOnce",{enumerable:!0,get:function(){return o}});let o=e=>{}},22016,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={default:function(){return x},useLinkStatus:function(){return y}};for(var n in o)Object.defineProperty(t,n,{enumerable:!0,get:o[n]});let i=e.r(90809),a=e.r(43476),s=i._(e.r(71645)),l=e.r(95057),c=e.r(8372),d=e.r(18581),p=e.r(18967),u=e.r(5550);e.r(33525);let f=e.r(91949),m=e.r(73668),b=e.r(9396);function h(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}function x(r){var t;let o,n,i,[l,x]=(0,s.useOptimistic)(f.IDLE_LINK_STATUS),y=(0,s.useRef)(null),{href:v,as:j,children:k,prefetch:w=null,passHref:N,replace:P,shallow:C,scroll:S,onClick:L,onMouseEnter:E,onTouchStart:M,legacyBehavior:T=!1,onNavigate:$,ref:O,unstable_dynamicOnHover:_,...B}=r;o=k,T&&("string"==typeof o||"number"==typeof o)&&(o=(0,a.jsx)("a",{children:o}));let z=s.default.useContext(c.AppRouterContext),R=!1!==w,A=!1!==w?null===(t=w)||"auto"===t?b.FetchStrategy.PPR:b.FetchStrategy.Full:b.FetchStrategy.PPR,{href:F,as:I}=s.default.useMemo(()=>{let e=h(v);return{href:e,as:j?h(j):e}},[v,j]);if(T){if(o?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});n=s.default.Children.only(o)}let U=T?n&&"object"==typeof n&&n.ref:O,X=s.default.useCallback(e=>(null!==z&&(y.current=(0,f.mountLinkInstance)(e,F,z,A,R,x)),()=>{y.current&&((0,f.unmountLinkForCurrentNavigation)(y.current),y.current=null),(0,f.unmountPrefetchableInstance)(e)}),[R,F,z,A,x]),D={ref:(0,d.useMergedRef)(X,U),onClick(r){T||"function"!=typeof L||L(r),T&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(r),!z||r.defaultPrevented||function(r,t,o,n,i,a,l){if("u">typeof window){let c,{nodeName:d}=r.currentTarget;if("A"===d.toUpperCase()&&((c=r.currentTarget.getAttribute("target"))&&"_self"!==c||r.metaKey||r.ctrlKey||r.shiftKey||r.altKey||r.nativeEvent&&2===r.nativeEvent.which)||r.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(t)){i&&(r.preventDefault(),location.replace(t));return}if(r.preventDefault(),l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:p}=e.r(99781);s.default.startTransition(()=>{p(o||t,i?"replace":"push",a??!0,n.current)})}}(r,F,I,y,P,S,$)},onMouseEnter(e){T||"function"!=typeof E||E(e),T&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),z&&R&&(0,f.onNavigationIntent)(e.currentTarget,!0===_)},onTouchStart:function(e){T||"function"!=typeof M||M(e),T&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),z&&R&&(0,f.onNavigationIntent)(e.currentTarget,!0===_)}};return(0,p.isAbsoluteUrl)(I)?D.href=I:T&&!N&&("a"!==n.type||"href"in n.props)||(D.href=(0,u.addBasePath)(I)),i=T?s.default.cloneElement(n,D):(0,a.jsx)("a",{...B,...D,children:o}),(0,a.jsx)(g.Provider,{value:l,children:i})}e.r(84508);let g=(0,s.createContext)(f.IDLE_LINK_STATUS),y=()=>(0,s.useContext)(g);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),r.exports=t.default)},46723,e=>{"use strict";var r=e.i(43476),t=e.i(71645);let o=[{id:"consultation",label:"Pet Consultation",desc:"Complete wellness checkups & health plans",icon:"M12 18v3m0 0a3 3 0 003-3V9a3 3 0 00-3-3m0 15a3 3 0 01-3-3V9a3 3 0 013-3m0 0V3",color:"#f57c20"},{id:"diagnostics",label:"In-House Diagnostics",desc:"Blood panels, urinalysis & same-day results",icon:"M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.5 8.25h-11L5 14.5m14 0H5",color:"#7c6fcd"},{id:"pcr",label:"PCR Testing",desc:"Molecular diagnostics for infectious disease",icon:"M12 6v6l4 2",color:"#4db6ac"},{id:"imaging",label:"Advanced Imaging",desc:"Digital X-rays, ultrasound & echocardiography",icon:"M3 7h18M3 17h18M6 7v10M18 7v10",color:"#e05c7a"},{id:"icu",label:"Intensive Care (ICU)",desc:"24/7 critical care & continuous monitoring",icon:"M12 8v4l3 3",color:"#f26b6b"},{id:"dental",label:"Dental Care",desc:"Professional cleanings & oral health therapy",icon:"M12 2c-2.5 0-5 1.5-5 4 0 1.5.5 3 1 4.5.5 2 1 4 1 6 0 1.1.9 2 2 2s2-.9 2-2c0 1.1.9 2 2 2s2-.9 2-2c0-2 .5-4 1-6 .5-1.5 1-3 1-4.5 0-2.5-2.5-4-5-4z",color:"#f5c842"},{id:"laser",label:"Laser Therapy",desc:"Drug-free pain relief & accelerated healing",icon:"M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",color:"#4caf82"},{id:"vaccination",label:"Vaccination Programs",desc:"Tailored immunization for every life stage",icon:"M9 12.75L11.25 15 15 9.75",color:"#ff8a50"},{id:"surgery",label:"Surgical Services",desc:"Board-certified surgeons & full OR support",icon:"M4 4l16 16M9 9l-5 5M15 15l5-5",color:"#7c6fcd"},{id:"grooming",label:"Pet Grooming",desc:"Breed-specific styling & professional coat care",icon:"M6 14l3-3 3 3 6-6",color:"#e05c7a"},{id:"boarding",label:"Pet Boarding",desc:"Safe, vet-supervised overnight stays",icon:"M3 12l9-9 9 9M4.5 10.5V21h15V10.5",color:"#7c6fcd"}],n=["Dog","Cat","Bird","Rabbit","Reptile","Fish","Other"],i=[{id:"al-ain",name:"PNCV Al Ain",sub:"Central Market, Behind Bawadi Mall",waNumber:"971521511465",color:"#f57c20"},{id:"dubai",name:"PNCV Dubai (JVC)",sub:"Dar Al Jawhara Building, JVC",waNumber:"971503408149",color:"#7c6fcd"}],a=[{number:1,title:"Your Pet",subtitle:"Tell us about your furry friend"},{number:2,title:"Service",subtitle:"What do you need help with?"},{number:3,title:"Your Details",subtitle:"How can we reach you?"},{number:4,title:"Location",subtitle:"Choose your nearest clinic"}];function s({isOpen:e,onClose:s}){let[l,c]=(0,t.useState)(1),[d,p]=(0,t.useState)("forward"),[u,f]=(0,t.useState)(!1),[m,b]=(0,t.useState)(!1),[h,x]=(0,t.useState)(""),[g,y]=(0,t.useState)(""),[v,j]=(0,t.useState)(""),[k,w]=(0,t.useState)(""),[N,P]=(0,t.useState)(""),[C,S]=(0,t.useState)(""),[L,E]=(0,t.useState)(""),[M,T]=(0,t.useState)(""),[$,O]=(0,t.useState)({}),_=(0,t.useRef)(null);(0,t.useEffect)(()=>(e?document.body.style.overflow="hidden":(document.body.style.overflow="",setTimeout(()=>{c(1),p("forward"),b(!1),x(""),y(""),j(""),w(""),P(""),S(""),E(""),T(""),O({})},300)),()=>{document.body.style.overflow=""}),[e]),(0,t.useEffect)(()=>{let e=e=>{"Escape"===e.key&&s()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[s]);let B=(e,r)=>{u||(p(r),f(!0),setTimeout(()=>{c(e),f(!1)},260))},z=(l-1)/3*100;return e?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        .bm-overlay {
          position: fixed; inset: 0; z-index: 9999;
          background: rgba(15, 12, 30, 0.55);
          backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
          display: flex; align-items: center; justify-content: center;
          padding: 16px;
          animation: bmFadeIn 0.22s ease;
        }
        @keyframes bmFadeIn { from { opacity: 0; } to { opacity: 1; } }

        .bm-modal {
          background: #fff;
          border-radius: 28px;
          width: 100%; max-width: 520px;
          box-shadow: 0 32px 80px rgba(15,12,30,0.28), 0 4px 24px rgba(245,124,32,0.08);
          overflow: hidden;
          animation: bmSlideUp 0.28s cubic-bezier(0.34,1.26,0.64,1);
          font-family: 'Poppins', sans-serif;
          position: relative;
          /* Let the modal grow with content but cap it so it doesn't exceed viewport */
          max-height: 92vh;
          display: flex;
          flex-direction: column;
        }
        @keyframes bmSlideUp {
          from { opacity: 0; transform: translateY(32px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }

        /* ── Header ── */
        .bm-header {
          padding: 28px 28px 0;
          position: relative;
          flex-shrink: 0;
        }
        .bm-close {
          position: absolute; top: 20px; right: 20px;
          width: 34px; height: 34px; border-radius: 10px;
          background: #f5f4fb; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.15s;
        }
        .bm-close:hover { background: #ece9f7; }

        /* ── Progress ── */
        .bm-progress-track {
          height: 4px; background: #f0edf9; border-radius: 2px;
          margin: 20px 0 0; overflow: hidden;
        }
        .bm-progress-fill {
          height: 100%; border-radius: 2px;
          background: linear-gradient(90deg, #f57c20, #f59e40);
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* ── Step dots ── */
        .bm-steps {
          display: flex; align-items: center; gap: 6px;
          margin: 14px 0 0;
        }
        .bm-step-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: #e8e5f5; transition: all 0.25s;
        }
        .bm-step-dot.active {
          background: #f57c20; width: 24px; border-radius: 4px;
        }
        .bm-step-dot.done { background: #f57c20; opacity: 0.35; }

        /* ── Body ── */
        .bm-body {
          padding: 24px 28px 28px;
          min-height: 320px;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
        }

        /* Step 2 gets its own scrollable body */
        .bm-body.scrollable {
          overflow-y: auto;
          min-height: unset;
          /* Takes remaining space between header and footer */
          flex: 1;
        }
        .bm-body.scrollable::-webkit-scrollbar {
          width: 4px;
        }
        .bm-body.scrollable::-webkit-scrollbar-track {
          background: #f0edf9;
          border-radius: 2px;
          margin: 8px 0;
        }
        .bm-body.scrollable::-webkit-scrollbar-thumb {
          background: #d4cff0;
          border-radius: 2px;
        }
        .bm-body.scrollable::-webkit-scrollbar-thumb:hover {
          background: #f57c20;
        }

        /* Scroll hint fade at bottom of step 2 */
        .bm-scroll-hint {
          position: sticky;
          bottom: 0;
          left: 0; right: 0;
          height: 36px;
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.95));
          pointer-events: none;
          margin: -8px -28px 0;
        }

        /* Slide animations */
        .bm-step-enter-forward  { animation: bmEnterFwd  0.26s cubic-bezier(0.4,0,0.2,1) forwards; }
        .bm-step-enter-back     { animation: bmEnterBack 0.26s cubic-bezier(0.4,0,0.2,1) forwards; }
        .bm-step-exit-forward   { animation: bmExitFwd   0.22s ease forwards; position:absolute; inset:0; padding:24px 28px; }
        .bm-step-exit-back      { animation: bmExitBack  0.22s ease forwards; position:absolute; inset:0; padding:24px 28px; }

        @keyframes bmEnterFwd  { from { opacity:0; transform:translateX(40px);  } to { opacity:1; transform:translateX(0); } }
        @keyframes bmEnterBack { from { opacity:0; transform:translateX(-40px); } to { opacity:1; transform:translateX(0); } }
        @keyframes bmExitFwd   { from { opacity:1; transform:translateX(0); } to { opacity:0; transform:translateX(-30px); } }
        @keyframes bmExitBack  { from { opacity:1; transform:translateX(0); } to { opacity:0; transform:translateX(30px);  } }

        /* ── Step title ── */
        .bm-step-title { font-size: 20px; font-weight: 800; color: #1a1a2e; margin: 0 0 3px; letter-spacing: -0.02em; }
        .bm-step-sub   { font-size: 13px; color: #9090b0; margin: 0 0 22px; font-weight: 400; }

        /* ── Form elements ── */
        .bm-label {
          font-size: 11px; font-weight: 700; color: #555570;
          text-transform: uppercase; letter-spacing: 0.08em;
          display: block; margin: 0 0 6px;
        }
        .bm-label em { color: #f57c20; font-style: normal; }
        .bm-input {
          width: 100%; padding: 11px 14px; border-radius: 12px;
          border: 1.5px solid #e8e5f5; background: #faf9fd;
          font-family: 'Poppins', sans-serif; font-size: 13.5px; color: #1a1a2e;
          outline: none; transition: border-color 0.18s, box-shadow 0.18s;
          box-sizing: border-box;
        }
        .bm-input::placeholder { color: #c0bcd8; }
        .bm-input:focus { border-color: #f57c20; box-shadow: 0 0 0 3px rgba(245,124,32,0.1); background: #fff; }
        .bm-input.error { border-color: #ef4444; }
        .bm-err { font-size: 11px; color: #ef4444; margin: 4px 0 0; display: block; font-weight: 500; }
        .bm-field { margin-bottom: 14px; }
        .bm-grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 14px; }

        /* Pet type pills */
        .bm-pills { display: flex; flex-wrap: wrap; gap: 8px; }
        .bm-pill {
          padding: 8px 16px; border-radius: 20px; cursor: pointer;
          font-family: 'Poppins', sans-serif; font-size: 12.5px; font-weight: 600;
          border: 1.5px solid #e8e5f5; background: #faf9fd; color: #555570;
          transition: all 0.16s;
        }
        .bm-pill:hover   { border-color: #f57c20; color: #f57c20; background: #fff8f3; }
        .bm-pill.selected { border-color: #f57c20; background: #fff5ee; color: #f57c20; }

        /* Service grid */
        .bm-service-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
        .bm-service-card {
          display: flex; align-items: center; gap: 10px; padding: 11px 13px;
          border-radius: 12px; cursor: pointer;
          border: 1.5px solid #e8e5f5; background: #faf9fd;
          transition: all 0.16s;
        }
        .bm-service-card:hover   { border-color: rgba(245,124,32,0.4); background: #fff8f3; }
        .bm-service-card.selected { border-color: #f57c20; background: #fff5ee; box-shadow: 0 2px 12px rgba(245,124,32,0.12); }
        .bm-service-icon {
          width: 32px; height: 32px; border-radius: 9px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
        }
        .bm-service-label { font-size: 12px; font-weight: 600; color: #1a1a2e; line-height: 1.3; }

        /* Location cards */
        .bm-loc-card {
          display: flex; align-items: center; gap: 14px; padding: 16px 18px;
          border-radius: 16px; cursor: pointer;
          border: 2px solid #e8e5f5; background: #faf9fd;
          transition: all 0.18s; margin-bottom: 10px;
        }
        .bm-loc-card:last-child { margin-bottom: 0; }
        .bm-loc-card:hover     { border-color: rgba(245,124,32,0.35); background: #fff8f3; }
        .bm-loc-card.selected  { border-color: #f57c20; background: #fff5ee; box-shadow: 0 4px 18px rgba(245,124,32,0.14); }
        .bm-loc-icon {
          width: 42px; height: 42px; border-radius: 12px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
        }
        .bm-loc-name { font-size: 14px; font-weight: 700; color: #1a1a2e; margin: 0 0 2px; }
        .bm-loc-sub  { font-size: 11.5px; color: #9090b0; margin: 0; }
        .bm-loc-check {
          margin-left: auto; width: 22px; height: 22px; border-radius: 50%;
          border: 2px solid #e0ddf5; flex-shrink: 0; transition: all 0.18s;
          display: flex; align-items: center; justify-content: center;
        }
        .bm-loc-card.selected .bm-loc-check { background: #f57c20; border-color: #f57c20; }

        /* ── Footer ── */
        .bm-footer {
          padding: 0 28px 28px;
          display: flex; gap: 10px; align-items: center;
          flex-shrink: 0;
          /* Subtle top separator so footer always feels grounded */
          border-top: 1px solid #f0edf9;
          padding-top: 16px;
        }
        .bm-btn-back {
          padding: 12px 20px; border-radius: 12px;
          border: 1.5px solid #e8e5f5; background: #faf9fd;
          font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 600; color: #555570;
          cursor: pointer; display: flex; align-items: center; gap: 6px;
          transition: all 0.16s; flex-shrink: 0;
        }
        .bm-btn-back:hover { background: #ece9f7; border-color: #ccc8e8; color: #1a1a2e; }
        .bm-btn-next {
          flex: 1; padding: 13px; border-radius: 12px; border: none;
          background: linear-gradient(135deg, #f57c20, #e8650a);
          font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 700; color: #fff;
          cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;
          box-shadow: 0 4px 16px rgba(245,124,32,0.3); transition: opacity 0.18s, transform 0.15s;
        }
        .bm-btn-next:hover { opacity: 0.92; transform: translateY(-1px); }
        .bm-btn-next:active { transform: translateY(0); }
        .bm-btn-next.wa { background: linear-gradient(135deg, #25d366, #1aad4f); box-shadow: 0 4px 16px rgba(37,211,102,0.3); }

        /* ── Done screen ── */
        .bm-done {
          padding: 48px 28px;
          display: flex; flex-direction: column; align-items: center; text-align: center; gap: 14px;
        }
        .bm-done-icon {
          width: 72px; height: 72px; border-radius: 50%;
          background: linear-gradient(135deg, #25d366, #1aad4f);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 8px 28px rgba(37,211,102,0.3);
          animation: bmPop 0.4s cubic-bezier(0.34,1.4,0.64,1);
        }
        @keyframes bmPop { from { transform: scale(0); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .bm-done h3 { font-size: 22px; font-weight: 800; color: #1a1a2e; margin: 0; letter-spacing: -0.02em; }
        .bm-done p  { font-size: 13.5px; color: #9090b0; margin: 0; line-height: 1.65; max-width: 340px; }
        .bm-done-close {
          margin-top: 8px; padding: 12px 32px; border-radius: 12px; border: none;
          background: #1a1a2e; color: #fff;
          font-family: 'Poppins', sans-serif; font-size: 13.5px; font-weight: 700;
          cursor: pointer; transition: background 0.18s;
        }
        .bm-done-close:hover { background: #f57c20; }

        @media (max-width: 540px) {
          .bm-modal { border-radius: 20px; }
          .bm-header { padding: 20px 20px 0; }
          .bm-body { padding: 20px 20px 24px; min-height: 280px; }
          .bm-footer { padding: 16px 20px 20px; }
          .bm-service-grid { grid-template-columns: 1fr 1fr; }
          .bm-grid2 { grid-template-columns: 1fr; }
        }
        @media (max-width: 380px) {
          .bm-service-grid { grid-template-columns: 1fr; }
        }
      `}),(0,r.jsx)("div",{className:"bm-overlay",ref:_,onClick:e=>{e.target===_.current&&s()},children:(0,r.jsxs)("div",{className:"bm-modal",role:"dialog","aria-modal":"true",children:[m?(0,r.jsxs)("div",{className:"bm-done",children:[(0,r.jsx)("div",{className:"bm-done-icon",children:(0,r.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,r.jsx)("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})})}),(0,r.jsx)("h3",{children:"WhatsApp Opened!"}),(0,r.jsx)("p",{children:"Your booking details have been pre-filled. Just hit send and our team will confirm your appointment shortly."}),(0,r.jsx)("button",{className:"bm-done-close",onClick:s,children:"Close"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"bm-header",children:[(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:4},children:[(0,r.jsx)("div",{style:{width:32,height:32,borderRadius:9,background:"#fff5ee",border:"1px solid #fdd5b0",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,r.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"#f57c20",children:[(0,r.jsx)("ellipse",{cx:"12",cy:"17",rx:"5",ry:"4"}),(0,r.jsx)("circle",{cx:"6",cy:"10",r:"2.5"}),(0,r.jsx)("circle",{cx:"18",cy:"10",r:"2.5"}),(0,r.jsx)("circle",{cx:"9",cy:"6",r:"2"}),(0,r.jsx)("circle",{cx:"15",cy:"6",r:"2"})]})}),(0,r.jsx)("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:12,fontWeight:700,color:"#f57c20",letterSpacing:"0.06em",textTransform:"uppercase"},children:"Book Appointment"}),(0,r.jsxs)("span",{style:{marginLeft:"auto",fontFamily:"'Poppins',sans-serif",fontSize:11.5,color:"#9090b0",fontWeight:500},children:["Step ",l," of 4"]})]}),(0,r.jsx)("div",{className:"bm-progress-track",children:(0,r.jsx)("div",{className:"bm-progress-fill",style:{width:`${z}%`}})}),(0,r.jsxs)("div",{className:"bm-steps",children:[[1,2,3,4].map(e=>(0,r.jsx)("div",{className:`bm-step-dot ${e===l?"active":e<l?"done":""}`},e)),(0,r.jsx)("span",{style:{marginLeft:"auto",fontFamily:"'Poppins',sans-serif",fontSize:11,color:"#c0bcd8",fontWeight:500},children:a[l-1].subtitle})]})]}),(0,r.jsx)("div",{className:`bm-body${2===l?" scrollable":""}`,children:(0,r.jsxs)("div",{className:u?"forward"===d?"bm-step-exit-forward":"bm-step-exit-back":"forward"===d?"bm-step-enter-forward":"bm-step-enter-back",children:[(0,r.jsx)("p",{className:"bm-step-title",children:a[l-1].title}),(0,r.jsx)("p",{className:"bm-step-sub",children:a[l-1].subtitle}),1===l&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"bm-grid2",children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("label",{className:"bm-label",children:["Pet Name ",(0,r.jsx)("em",{children:"*"})]}),(0,r.jsx)("input",{className:`bm-input${$.petName?" error":""}`,placeholder:"e.g. Buddy",value:h,onChange:e=>{x(e.target.value),O({...$,petName:""})}}),$.petName&&(0,r.jsx)("span",{className:"bm-err",children:$.petName})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"bm-label",children:"Age (optional)"}),(0,r.jsx)("input",{className:"bm-input",placeholder:"e.g. 2 years",value:v,onChange:e=>j(e.target.value)})]})]}),(0,r.jsxs)("div",{className:"bm-field",children:[(0,r.jsxs)("label",{className:"bm-label",children:["Pet Type ",(0,r.jsx)("em",{children:"*"})]}),(0,r.jsx)("div",{className:"bm-pills",children:n.map(e=>(0,r.jsx)("button",{className:`bm-pill${g===e?" selected":""}`,onClick:()=>{y(e),O({...$,petType:""})},children:e},e))}),$.petType&&(0,r.jsx)("span",{className:"bm-err",children:$.petType})]})]}),2===l&&(0,r.jsxs)("div",{className:"bm-field",children:[(0,r.jsx)("div",{className:"bm-service-grid",children:o.map(e=>(0,r.jsxs)("div",{className:`bm-service-card${k===e.id?" selected":""}`,onClick:()=>{w(e.id),O({...$,service:""})},children:[(0,r.jsx)("div",{className:"bm-service-icon",style:{background:`${e.color}15`,border:`1px solid ${e.color}25`},children:(0,r.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:e.color,strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:(0,r.jsx)("path",{d:e.icon})})}),(0,r.jsx)("span",{className:"bm-service-label",children:e.label}),k===e.id&&(0,r.jsx)("svg",{style:{marginLeft:"auto",flexShrink:0},width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#f57c20",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,r.jsx)("polyline",{points:"20 6 9 17 4 12"})})]},e.id))}),$.service&&(0,r.jsx)("span",{className:"bm-err",style:{marginTop:8},children:$.service}),(0,r.jsx)("div",{className:"bm-scroll-hint"})]}),3===l&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"bm-field",children:[(0,r.jsxs)("label",{className:"bm-label",children:["Your Name ",(0,r.jsx)("em",{children:"*"})]}),(0,r.jsx)("input",{className:`bm-input${$.ownerName?" error":""}`,placeholder:"John Doe",value:N,onChange:e=>{P(e.target.value),O({...$,ownerName:""})}}),$.ownerName&&(0,r.jsx)("span",{className:"bm-err",children:$.ownerName})]}),(0,r.jsxs)("div",{className:"bm-field",children:[(0,r.jsxs)("label",{className:"bm-label",children:["Phone Number ",(0,r.jsx)("em",{children:"*"})]}),(0,r.jsx)("input",{className:`bm-input${$.phone?" error":""}`,placeholder:"+971 XX XXX XXXX",value:C,onChange:e=>{S(e.target.value),O({...$,phone:""})}}),$.phone&&(0,r.jsx)("span",{className:"bm-err",children:$.phone})]}),(0,r.jsxs)("div",{className:"bm-field",style:{marginBottom:0},children:[(0,r.jsx)("label",{className:"bm-label",children:"Email (optional)"}),(0,r.jsx)("input",{className:"bm-input",type:"email",placeholder:"john@example.com",value:L,onChange:e=>E(e.target.value)})]})]}),4===l&&(0,r.jsxs)("div",{className:"bm-field",style:{marginBottom:0},children:[i.map(e=>(0,r.jsxs)("div",{className:`bm-loc-card${M===e.id?" selected":""}`,onClick:()=>{T(e.id),O({...$,location:""})},children:[(0,r.jsx)("div",{className:"bm-loc-icon",style:{background:`${e.color}15`,border:`1px solid ${e.color}25`},children:(0,r.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:e.color,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,r.jsx)("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),(0,r.jsx)("circle",{cx:"12",cy:"10",r:"3"})]})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"bm-loc-name",children:e.name}),(0,r.jsx)("p",{className:"bm-loc-sub",children:e.sub})]}),(0,r.jsx)("div",{className:"bm-loc-check",children:M===e.id&&(0,r.jsx)("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"#fff",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:(0,r.jsx)("polyline",{points:"20 6 9 17 4 12"})})})]},e.id)),$.location&&(0,r.jsx)("span",{className:"bm-err",children:$.location})]})]})}),(0,r.jsxs)("div",{className:"bm-footer",children:[l>1?(0,r.jsxs)("button",{className:"bm-btn-back",onClick:()=>{l>1&&B(l-1,"back")},children:[(0,r.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,r.jsx)("path",{d:"M19 12H5M12 5l-7 7 7 7"})}),"Back"]}):(0,r.jsx)("button",{className:"bm-btn-back",onClick:s,children:"Cancel"}),(0,r.jsx)("button",{className:`bm-btn-next${4===l?" wa":""}`,onClick:()=>{let e;if(e={},1===l&&(h.trim()||(e.petName="Pet name is required"),g||(e.petType="Select a pet type")),2!==l||k||(e.service="Please select a service"),3===l&&(N.trim()||(e.ownerName="Your name is required"),C.trim()||(e.phone="Phone number is required")),4!==l||M||(e.location="Please choose a location"),O(e),0!==Object.keys(e).length)return;if(l<4)return void B(l+1,"forward");let r=i.find(e=>e.id===M),t=o.find(e=>e.id===k)?.label??k,n=`Hello! I'd like to book an appointment at ${r.name}.

🐾 Pet Name: ${h}
🐶 Pet Type: ${g}${v?`
🎂 Pet Age: ${v}`:""}

🩺 Service Needed: ${t}

👤 Owner Name: ${N}
📞 Phone: ${C}${L?`
📧 Email: ${L}`:""}

📍 Preferred Location: ${r.name}`;window.open(`https://wa.me/${r.waNumber}?text=${encodeURIComponent(n)}`,"_blank"),b(!0)},children:4===l?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("svg",{width:"16",height:"16",fill:"currentColor",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})}),"Send via WhatsApp"]}):(0,r.jsxs)(r.Fragment,{children:["Continue",(0,r.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,r.jsx)("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})})]})]}),!m&&(0,r.jsx)("button",{className:"bm-close",onClick:s,style:{position:"absolute",top:20,right:20},children:(0,r.jsxs)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#888",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,r.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,r.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]})})]}):null}e.s(["default",()=>s])}]);