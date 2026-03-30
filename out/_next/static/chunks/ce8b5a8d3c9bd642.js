(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,2355,e=>{"use strict";var r=e.i(47167),t=e.i(71645),i=e.i(18566);function o(){return"u">typeof window}function n(){return"production"}function s(){return"development"===((o()?window.vam:n())||"production")}function a(e){return RegExp(`/${e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}(?=[/?#]|$)`)}function l(e){return(0,t.useEffect)(()=>{var r;e.beforeSend&&(null==(r=window.va)||r.call(window,"beforeSend",e.beforeSend))},[e.beforeSend]),(0,t.useEffect)(()=>{!function(e={debug:!0}){var r;if(!o())return;!function(e="auto"){if("auto"===e){window.vam=n();return}window.vam=e}(e.mode),window.va||(window.va=function(...e){(window.vaq=window.vaq||[]).push(e)}),e.beforeSend&&(null==(r=window.va)||r.call(window,"beforeSend",e.beforeSend));let t=e.scriptSrc?e.scriptSrc:s()?"https://va.vercel-scripts.com/v1/script.debug.js":e.basePath?`${e.basePath}/insights/script.js`:"/_vercel/insights/script.js";if(document.head.querySelector(`script[src*="${t}"]`))return;let i=document.createElement("script");i.src=t,i.defer=!0,i.dataset.sdkn="@vercel/analytics"+(e.framework?`/${e.framework}`:""),i.dataset.sdkv="1.6.1",e.disableAutoTrack&&(i.dataset.disableAutoTrack="1"),e.endpoint?i.dataset.endpoint=e.endpoint:e.basePath&&(i.dataset.endpoint=`${e.basePath}/insights`),e.dsn&&(i.dataset.dsn=e.dsn),i.onerror=()=>{let e=s()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${t}. ${e}`)},s()&&!1===e.debug&&(i.dataset.debug="false"),document.head.appendChild(i)}({framework:e.framework||"react",basePath:e.basePath??function(){if(void 0!==r.default&&void 0!==r.default.env)return r.default.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH}(),...void 0!==e.route&&{disableAutoTrack:!0},...e})},[]),(0,t.useEffect)(()=>{e.route&&e.path&&function({route:e,path:r}){var t;null==(t=window.va)||t.call(window,"pageview",{route:e,path:r})}({route:e.route,path:e.path})},[e.route,e.path]),null}function d(e){let o,n,s,{route:d,path:c}=(o=(0,i.useParams)(),n=(0,i.useSearchParams)(),s=(0,i.usePathname)(),o?{route:function(e,r){if(!e||!r)return e;let t=e;try{let e=Object.entries(r);for(let[r,i]of e)if(!Array.isArray(i)){let e=a(i);e.test(t)&&(t=t.replace(e,`/[${r}]`))}for(let[r,i]of e)if(Array.isArray(i)){let e=a(i.join("/"));e.test(t)&&(t=t.replace(e,`/[...${r}]`))}return t}catch(r){return e}}(s,Object.keys(o).length?o:Object.fromEntries(n.entries())),path:s}:{route:null,path:s});return t.default.createElement(l,{path:c,route:d,...e,basePath:function(){if(void 0!==r.default&&void 0!==r.default.env)return r.default.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH}(),framework:"next"})}function c(e){return t.default.createElement(t.Suspense,{fallback:null},t.default.createElement(d,{...e}))}e.s(["Analytics",()=>c])},45686,e=>{"use strict";var r=e.i(43476);let t=[{name:"Al Ain",number:"971521511465"},{name:"Dubai",number:"971503408149"}],i=encodeURIComponent("Hi! I found your website and I'm interested in booking an appointment for my pet. Could you please let me know your availability?"),o=({size:e=16})=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:e,height:e,fill:"white",children:(0,r.jsx)("path",{d:"M16 .5C7.44.5.5 7.44.5 16c0 2.75.72 5.33 1.97 7.58L.5 31.5l8.18-2.14A15.44 15.44 0 0 0 16 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm0 28.6a13.1 13.1 0 0 1-6.67-1.83l-.48-.28-4.86 1.27 1.3-4.73-.31-.49A13.1 13.1 0 0 1 2.9 16C2.9 9.3 8.3 3.9 16 3.9S29.1 9.3 29.1 16 23.7 29.1 16 29.1zm7.19-9.81c-.39-.2-2.32-1.15-2.68-1.28-.36-.13-.62-.2-.88.2s-1.01 1.28-1.24 1.54c-.23.26-.46.29-.85.1a10.71 10.71 0 0 1-3.15-1.95 11.83 11.83 0 0 1-2.18-2.72c-.23-.39 0-.6.17-.8.16-.17.36-.46.55-.69.18-.23.24-.39.36-.65.12-.26.06-.49-.03-.69-.1-.2-.88-2.13-1.21-2.91-.32-.76-.64-.66-.88-.67h-.75c-.26 0-.69.1-1.05.49s-1.38 1.35-1.38 3.28 1.41 3.8 1.61 4.06c.2.26 2.78 4.25 6.74 5.96.94.41 1.68.65 2.25.83.95.3 1.81.26 2.49.16.76-.11 2.32-.95 2.65-1.86.33-.91.33-1.69.23-1.86-.1-.17-.36-.26-.75-.46z"})});function n(){return(0,r.jsx)("div",{className:"fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2",children:t.map(e=>(0,r.jsxs)("a",{href:`https://wa.me/${e.number}?text=${i}`,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-all duration-200",children:[(0,r.jsx)(o,{size:16}),e.name]},e.name))})}e.s(["default",()=>n])},13293,e=>{"use strict";var r=e.i(43476),t=e.i(22016),i=e.i(71645),o=e.i(18566),n=e.i(46723);let s=[{slug:"pet-consultation",title:"Pet Consultation",desc:"Complete wellness checkups & health plans",color:"#f57c20",icon:"M12 18v3m0 0a3 3 0 003-3V9a3 3 0 00-3-3m0 15a3 3 0 01-3-3V9a3 3 0 013-3m0 0V3"},{slug:"in-house-diagnostics",title:"Pet In-House Diagnostics",desc:"Blood panels, urinalysis & same-day results",color:"#7c6fcd",icon:"M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5m4.75-11.396c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.5 8.25h-11L5 14.5m14 0H5"},{slug:"pcr-testing",title:"Pet PCR Testing",desc:"Molecular diagnostics for infectious disease",color:"#2a9d8f",icon:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25"},{slug:"advanced-imaging",title:"Pet Advanced Imaging",desc:"Digital X-rays, ultrasound & echocardiography",color:"#e05c7a",icon:"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75"},{slug:"intensive-care",title:"Pet Intensive Care (ICU)",desc:"24/7 critical care & continuous monitoring",color:"#e05c7a",icon:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"},{slug:"dental-care",title:"Pet Dental Care",desc:"Professional cleanings & oral health therapy",color:"#f5c842",icon:"M12 2c-2.5 0-5 1.5-5 4 0 1.5.5 3 1 4.5.5 2 1 4 1 6 0 1.1.9 2 2 2s2-.9 2-2c0 1.1.9 2 2 2s2-.9 2-2c0-2 .5-4 1-6 .5-1.5 1-3 1-4.5 0-2.5-2.5-4-5-4z"},{slug:"laser-therapy",title:"Pet Laser Therapy",desc:"Drug-free pain relief & accelerated healing",color:"#4caf82",icon:"M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"},{slug:"vaccination-programs",title:"Pet Vaccination Programs",desc:"Tailored immunization for every life stage",color:"#f57c20",icon:"M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"},{slug:"surgical-services",title:"Pet Surgical Services",desc:"Board-certified surgeons & full OR support",color:"#7c6fcd",icon:"M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5 M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.047 2.047",subServices:[{slug:"spay-neuter-surgery",title:"Spay & Neuter"},{slug:"soft-tissue-surgery",title:"Soft Tissue Surgery"},{slug:"orthopedic-procedures",title:"Orthopedic Procedures"},{slug:"tumor-mass-removal",title:"Tumor & Mass Removal"}]},{slug:"pet-grooming",title:"Pet Grooming",desc:"Breed-specific styling & professional coat care",color:"#e05c7a",icon:"M7 3a1 1 0 000 2h10a1 1 0 100-2H7zM4 7a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h16a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6z"},{slug:"pet-boarding",title:"Pet Boarding",desc:"Safe, vet-supervised overnight stays",color:"#7c6fcd",icon:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"}],a=[{id:"al-ain",name:"PNCV Al Ain",sub:"Al Ain, Abu Dhabi - UAE"},{id:"dubai",name:"PNCV Dubai (JVC)",sub:"Dubai, UAE"}],l=[{name:"Home",href:"/"},{name:"About",href:"/about"},{name:"Services",href:"/services",hasDropdown:"services"},{name:"Locations",href:"#",hasDropdown:"locations"},{name:"Team",href:"/team"},{name:"Contact",href:"/contact"}];function d(){let e=(0,o.useRouter)(),[d,c]=(0,i.useState)(!1),[p,h]=(0,i.useState)(!1),[f,x]=(0,i.useState)(!1),[g,m]=(0,i.useState)(!1),[u,b]=(0,i.useState)(!1),[v,w]=(0,i.useState)(!1),[k,y]=(0,i.useState)(!1),[j,N]=(0,i.useState)(!1),P=(0,i.useRef)(null),C=(0,i.useRef)(null),L=(0,i.useRef)(null),S=()=>{P.current&&clearTimeout(P.current),x(!0),m(!1)},z=()=>{P.current=setTimeout(()=>x(!1),120)},A=()=>{C.current&&clearTimeout(C.current),m(!0),x(!1)},M=()=>{C.current=setTimeout(()=>m(!1),120)},B=()=>{h(!1),c(!0)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.default,{isOpen:d,onClose:()=>c(!1)}),(0,r.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        .hdr-root {
          position: sticky; top: 0; z-index: 50;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(180,174,230,0.25);
          font-family: 'Poppins', sans-serif;
        }
        .hdr-inner {
          max-width: 1200px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 48px; height: 68px;
        }
        .hdr-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; flex-shrink: 0; }
        .hdr-logo-text { font-family: 'Poppins', sans-serif; font-weight: 800; font-size: 20px; color: #1a1a2e; letter-spacing: -0.02em; }
        .hdr-logo-text span { color: #f57c20; }

        .hdr-nav { display: flex; align-items: center; gap: 6px; }
        .hdr-link {
          font-family: 'Poppins', sans-serif; font-size: 13.5px; font-weight: 500;
          color: #555570; text-decoration: none; padding: 8px 12px; border-radius: 8px;
          transition: color 0.18s, background 0.18s;
          display: flex; align-items: center; gap: 4px; white-space: nowrap;
        }
        .hdr-link:hover { color: #1a1a2e; background: rgba(124,111,205,0.07); }
        .hdr-link.active { color: #f57c20; }
        .hdr-chevron { transition: transform 0.2s ease; color: #888; }
        .hdr-dropdown-open .hdr-chevron { transform: rotate(180deg); color: #f57c20; }
        .hdr-dropdown-open { color: #1a1a2e !important; background: rgba(124,111,205,0.07) !important; }

        .hdr-cta {
          display: inline-flex; align-items: center; gap: 7px;
          background: #f57c20; color: #fff;
          font-family: 'Poppins', sans-serif; font-weight: 700; font-size: 12.5px;
          letter-spacing: 0.05em; text-transform: uppercase;
          padding: 11px 22px; border-radius: 10px; border: none; cursor: pointer;
          box-shadow: 0 4px 16px rgba(245,124,32,0.28);
          transition: background 0.18s, transform 0.15s; white-space: nowrap;
          text-decoration: none;
        }
        .hdr-cta:hover { background: #e06b10; transform: translateY(-1px); }

        .hdr-dropdown-wrap { position: relative; }
        .hdr-dropdown {
          position: absolute; top: calc(100% + 10px); left: 50%;
          transform: translateX(-50%) translateY(-8px);
          background: rgba(255,255,255,0.97); backdrop-filter: blur(20px);
          border: 1.5px solid rgba(180,174,230,0.3); border-radius: 20px;
          box-shadow: 0 24px 64px rgba(26,26,46,0.14), 0 4px 16px rgba(124,111,205,0.1);
          opacity: 0; pointer-events: none;
          transition: opacity 0.18s ease, transform 0.18s ease; z-index: 100;
        }
        .hdr-dropdown.open {
          opacity: 1; pointer-events: all;
          transform: translateX(-50%) translateY(0);
        }

        .hdr-dropdown-services { width: 780px; padding: 20px; }
        .hdr-dropdown-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 4px 8px 14px; border-bottom: 1px solid rgba(180,174,230,0.2); margin-bottom: 12px;
        }
        .hdr-dropdown-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 6px; }
        .hdr-svc-item {
          display: flex; align-items: flex-start; gap: 12px; padding: 11px 12px;
          border-radius: 12px; text-decoration: none;
          transition: background 0.16s; border: 1px solid transparent;
        }
        .hdr-svc-item:hover { background: rgba(124,111,205,0.06); border-color: rgba(124,111,205,0.12); }
        .hdr-svc-icon {
          width: 36px; height: 36px; border-radius: 9px;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px;
        }
        .hdr-svc-title { font-family: 'Poppins',sans-serif; font-size: 13px; font-weight: 600; color: #1a1a2e; margin: 0 0 2px; line-height: 1.3; }
        .hdr-svc-desc  { font-family: 'Poppins',sans-serif; font-size: 11.5px; color: #888; margin: 0; line-height: 1.5; font-weight: 400; }
        .hdr-dropdown-footer {
          margin-top: 12px; padding-top: 12px; border-top: 1px solid rgba(180,174,230,0.2);
          display: flex; align-items: center; justify-content: space-between;
        }
        .hdr-view-all {
          display: inline-flex; align-items: center; gap: 6px;
          background: #f57c20; color: #fff;
          font-family: 'Poppins',sans-serif; font-weight: 700; font-size: 11.5px;
          letter-spacing: 0.06em; text-transform: uppercase;
          padding: 10px 18px; border-radius: 8px; text-decoration: none;
          box-shadow: 0 3px 12px rgba(245,124,32,0.25); transition: background 0.18s;
        }
        .hdr-view-all:hover { background: #e06b10; }

        .hdr-dropdown-locations { width: 280px; padding: 10px; }
        .hdr-loc-item {
          display: flex; align-items: center; gap: 12px; padding: 12px 14px;
          border-radius: 12px; text-decoration: none; cursor: pointer;
          transition: background 0.16s; border: 1px solid transparent;
        }
        .hdr-loc-item:hover { background: rgba(245,124,32,0.06); border-color: rgba(245,124,32,0.15); }
        .hdr-loc-icon {
          width: 36px; height: 36px; border-radius: 10px; flex-shrink: 0;
          background: rgba(245,124,32,0.1);
          display: flex; align-items: center; justify-content: center;
        }
        .hdr-loc-name { font-family: 'Poppins',sans-serif; font-size: 13px; font-weight: 700; color: #1a1a2e; margin: 0 0 2px; }
        .hdr-loc-sub  { font-family: 'Poppins',sans-serif; font-size: 11.5px; color: #9090b0; margin: 0; font-weight: 400; }
        .hdr-loc-arrow { margin-left: auto; color: #ccc; flex-shrink: 0; transition: color 0.16s; }
        .hdr-loc-item:hover .hdr-loc-arrow { color: #f57c20; }

        /* Surgical flyout */
        .hdr-svc-item-wrap { position: relative; }
        .hdr-svc-flyout {
          position: absolute; left: 100%; top: -8px;
          background: rgba(255,255,255,0.98); backdrop-filter: blur(20px);
          border: 1.5px solid rgba(124,111,205,0.2); border-radius: 14px;
          box-shadow: 0 16px 48px rgba(26,26,46,0.14);
          padding: 8px; min-width: 220px; z-index: 200;
          opacity: 0; pointer-events: none;
          transform: translateX(-6px);
          transition: opacity 0.16s ease, transform 0.16s ease;
        }
        .hdr-svc-flyout.open {
          opacity: 1; pointer-events: all;
          transform: translateX(0);
        }
        .hdr-svc-flyout-item {
          display: flex; align-items: center; gap: 10px;
          padding: 9px 12px; border-radius: 9px;
          text-decoration: none; font-family: 'Poppins', sans-serif;
          font-size: 12.5px; font-weight: 500; color: #1a1a2e;
          transition: background 0.14s; white-space: nowrap;
        }
        .hdr-svc-flyout-item:hover { background: rgba(124,111,205,0.08); color: #7c6fcd; }
        .hdr-svc-flyout-dot { width: 6px; height: 6px; border-radius: 50%; background: #7c6fcd; flex-shrink: 0; }
        .hdr-svc-item-surgical { background: rgba(124,111,205,0.04); border-color: rgba(124,111,205,0.15) !important; }

        /* Mobile */
        .hdr-mobile-btn {
          display: none; background: none; border: none; cursor: pointer;
          padding: 6px; border-radius: 8px; color: #1a1a2e; transition: background 0.15s;
        }
        .hdr-mobile-btn:hover { background: rgba(124,111,205,0.08); }
        .hdr-mobile-menu {
          display: none; border-top: 1px solid rgba(180,174,230,0.2);
          padding: 12px 24px 20px; background: rgba(255,255,255,0.97);
        }
        .hdr-mob-link {
          display: flex; align-items: center; justify-content: space-between;
          padding: 10px 12px; border-radius: 10px; text-decoration: none;
          font-family: 'Poppins',sans-serif; font-size: 14px; font-weight: 500; color: #1a1a2e;
          transition: background 0.15s; width: 100%; background: none; border: none; cursor: pointer; text-align: left;
        }
        .hdr-mob-link:hover { background: rgba(124,111,205,0.06); }
        .hdr-mob-services-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; padding: 8px 0 4px 12px; }
        .hdr-mob-svc {
          display: flex; align-items: center; gap: 8px; padding: 8px 10px; border-radius: 8px;
          text-decoration: none; font-family: 'Poppins',sans-serif; font-size: 12px; font-weight: 500; color: #1a1a2e;
          transition: background 0.15s;
        }
        .hdr-mob-svc:hover { background: rgba(124,111,205,0.06); }
        .hdr-mob-surgical-list { padding: 4px 0 4px 24px; display: flex; flex-direction: column; gap: 2px; }
        .hdr-mob-surgical-item {
          display: flex; align-items: center; gap: 8px; padding: 7px 10px; border-radius: 8px;
          text-decoration: none; font-family: 'Poppins',sans-serif; font-size: 12px; font-weight: 500; color: #555570;
          transition: background 0.15s;
        }
        .hdr-mob-surgical-item:hover { background: rgba(124,111,205,0.06); color: #7c6fcd; }
        .hdr-mob-loc-list { padding: 6px 0 4px 12px; display: flex; flex-direction: column; gap: 4px; }
        .hdr-mob-loc {
          display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: 10px;
          text-decoration: none; cursor: pointer; transition: background 0.15s; border: none; background: none; width: 100%; text-align: left;
        }
        .hdr-mob-loc:hover { background: rgba(245,124,32,0.06); }
        .hdr-mob-loc-name { font-family: 'Poppins',sans-serif; font-size: 13px; font-weight: 600; color: #1a1a2e; margin: 0 0 1px; }
        .hdr-mob-loc-sub  { font-family: 'Poppins',sans-serif; font-size: 11px; color: #9090b0; margin: 0; }

        @media (max-width: 1024px) {
          .hdr-inner { padding: 0 24px; }
          .hdr-nav, .hdr-cta-wrap { display: none !important; }
          .hdr-mobile-btn { display: flex !important; }
          .hdr-mobile-menu { display: block; }
        }
        @media (min-width: 1025px) { .hdr-mobile-menu { display: none !important; } }
        @media (max-width: 480px) { .hdr-mob-services-grid { grid-template-columns: 1fr; } }
      `}),(0,r.jsxs)("header",{className:"hdr-root",children:[(0,r.jsxs)("div",{className:"hdr-inner",children:[(0,r.jsx)(t.default,{href:"/",className:"hdr-logo",children:(0,r.jsx)("img",{src:"/logo.png",alt:"Paws & Claws",style:{width:180,objectFit:"contain"}})}),(0,r.jsx)("nav",{className:"hdr-nav",children:l.map(i=>"services"===i.hasDropdown?(0,r.jsxs)("div",{className:"hdr-dropdown-wrap",onMouseEnter:S,onMouseLeave:z,children:[(0,r.jsxs)("button",{className:`hdr-link ${f?"hdr-dropdown-open":""}`,style:{background:"none",border:"none",cursor:"pointer"},children:[i.name,(0,r.jsx)("svg",{className:"hdr-chevron",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,r.jsx)("polyline",{points:"6 9 12 15 18 9"})})]}),(0,r.jsxs)("div",{className:`hdr-dropdown hdr-dropdown-services ${f?"open":""}`,onMouseEnter:S,onMouseLeave:z,children:[(0,r.jsxs)("div",{className:"hdr-dropdown-header",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{style:{fontFamily:"'Poppins',sans-serif",fontWeight:700,fontSize:14,color:"#1a1a2e",margin:"0 0 2px"},children:"Our Services"}),(0,r.jsx)("p",{style:{fontFamily:"'Poppins',sans-serif",fontSize:12,color:"#888",margin:0,fontWeight:400},children:"Comprehensive care for your beloved pets"})]}),(0,r.jsx)("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,fontWeight:600,color:"#f57c20",background:"#fff5ee",border:"1px solid #fdd5b0",borderRadius:6,padding:"3px 10px",letterSpacing:"0.04em"},children:"12 Services"})]}),(0,r.jsx)("div",{className:"hdr-dropdown-grid",children:s.map(e=>e.subServices?(0,r.jsxs)("div",{className:"hdr-svc-item-wrap",onMouseEnter:()=>{L.current&&clearTimeout(L.current),y(!0)},onMouseLeave:()=>{L.current=setTimeout(()=>y(!1),120)},children:[(0,r.jsxs)(t.default,{href:`/services/${e.slug}`,className:"hdr-svc-item hdr-svc-item-surgical",onClick:()=>x(!1),style:{width:"100%"},children:[(0,r.jsx)("div",{className:"hdr-svc-icon",style:{background:`${e.color}15`,border:`1px solid ${e.color}30`},children:(0,r.jsx)("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:e.color,strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:(0,r.jsx)("path",{d:e.icon})})}),(0,r.jsxs)("div",{style:{flex:1},children:[(0,r.jsxs)("p",{className:"hdr-svc-title",style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.title,(0,r.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"#7c6fcd",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,r.jsx)("path",{d:"M9 18l6-6-6-6"})})]}),(0,r.jsx)("p",{className:"hdr-svc-desc",children:e.desc})]})]}),(0,r.jsxs)("div",{className:`hdr-svc-flyout ${k?"open":""}`,onMouseEnter:()=>{L.current&&clearTimeout(L.current),y(!0)},onMouseLeave:()=>{L.current=setTimeout(()=>y(!1),120)},children:[(0,r.jsx)("p",{style:{fontFamily:"'Poppins',sans-serif",fontSize:10.5,fontWeight:700,color:"#7c6fcd",letterSpacing:"0.08em",textTransform:"uppercase",padding:"4px 12px 8px",margin:0,borderBottom:"1px solid rgba(124,111,205,0.1)"},children:"Surgical Procedures"}),e.subServices.map(e=>(0,r.jsxs)(t.default,{href:`/services/surgical-services/${e.slug}`,className:"hdr-svc-flyout-item",onClick:()=>{x(!1),y(!1)},children:[(0,r.jsx)("span",{className:"hdr-svc-flyout-dot"}),e.title]},e.slug)),(0,r.jsx)("div",{style:{borderTop:"1px solid rgba(124,111,205,0.1)",marginTop:4,paddingTop:4},children:(0,r.jsxs)(t.default,{href:"/services/surgical-services",className:"hdr-svc-flyout-item",style:{color:"#7c6fcd",fontWeight:600},onClick:()=>{x(!1),y(!1)},children:[(0,r.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"#7c6fcd",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,r.jsx)("path",{d:"M5 12h14M12 5l7 7-7 7"})}),"View All Surgical Services"]})})]})]},e.slug):(0,r.jsxs)(t.default,{href:`/services/${e.slug}`,className:"hdr-svc-item",onClick:()=>x(!1),children:[(0,r.jsx)("div",{className:"hdr-svc-icon",style:{background:`${e.color}15`,border:`1px solid ${e.color}30`},children:(0,r.jsx)("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:e.color,strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:(0,r.jsx)("path",{d:e.icon})})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"hdr-svc-title",children:e.title}),(0,r.jsx)("p",{className:"hdr-svc-desc",children:e.desc})]})]},e.slug))}),(0,r.jsxs)("div",{className:"hdr-dropdown-footer",children:[(0,r.jsxs)("p",{style:{fontFamily:"'Poppins',sans-serif",fontSize:12,color:"#888",margin:0,fontWeight:400},children:["🐾 Need help? ",(0,r.jsx)(t.default,{href:"/contact",style:{color:"#f57c20",fontWeight:600,textDecoration:"none"},onClick:()=>x(!1),children:"Talk to our team"})]}),(0,r.jsxs)(t.default,{href:"/services",className:"hdr-view-all",onClick:()=>x(!1),children:["View All Services",(0,r.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,r.jsx)("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]})]})]},"services"):"locations"===i.hasDropdown?(0,r.jsxs)("div",{className:"hdr-dropdown-wrap",onMouseEnter:A,onMouseLeave:M,children:[(0,r.jsxs)("button",{className:`hdr-link ${g?"hdr-dropdown-open":""}`,style:{background:"none",border:"none",cursor:"pointer"},children:[i.name,(0,r.jsx)("svg",{className:"hdr-chevron",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,r.jsx)("polyline",{points:"6 9 12 15 18 9"})})]}),(0,r.jsx)("div",{className:`hdr-dropdown hdr-dropdown-locations ${g?"open":""}`,onMouseEnter:A,onMouseLeave:M,children:a.map(t=>(0,r.jsxs)("div",{className:"hdr-loc-item",onClick:()=>{e.push(`/contact?location=${t.id}`),m(!1)},children:[(0,r.jsx)("div",{className:"hdr-loc-icon",children:(0,r.jsxs)("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"#f57c20",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,r.jsx)("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),(0,r.jsx)("circle",{cx:"12",cy:"10",r:"3"})]})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"hdr-loc-name",children:t.name}),(0,r.jsx)("p",{className:"hdr-loc-sub",children:t.sub})]}),(0,r.jsx)("svg",{className:"hdr-loc-arrow",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,r.jsx)("path",{d:"M9 18l6-6-6-6"})})]},t.id))})]},"locations"):(0,r.jsx)(t.default,{href:i.href,className:"hdr-link",children:i.name},i.name))}),(0,r.jsx)("div",{className:"hdr-cta-wrap",style:{display:"flex"},children:(0,r.jsxs)("button",{onClick:B,className:"hdr-cta",children:["Book Appointment",(0,r.jsx)("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,r.jsx)("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})}),(0,r.jsx)("button",{className:"hdr-mobile-btn",onClick:()=>h(!p),children:p?(0,r.jsxs)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,r.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,r.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}):(0,r.jsxs)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,r.jsx)("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),(0,r.jsx)("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),(0,r.jsx)("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]})})]}),p&&(0,r.jsxs)("div",{className:"hdr-mobile-menu",children:[l.map(i=>"services"===i.hasDropdown?(0,r.jsxs)("div",{children:[(0,r.jsxs)("button",{className:"hdr-mob-link",onClick:()=>b(!u),children:[i.name,(0,r.jsx)("svg",{style:{transition:"transform 0.2s",transform:u?"rotate(180deg)":"none"},width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#888",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,r.jsx)("polyline",{points:"6 9 12 15 18 9"})})]}),u&&(0,r.jsxs)("div",{className:"hdr-mob-services-grid",children:[s.map(e=>e.subServices?(0,r.jsxs)("div",{style:{gridColumn:"1 / -1"},children:[(0,r.jsxs)("button",{className:"hdr-mob-svc",style:{width:"100%",justifyContent:"space-between",background:"rgba(124,111,205,0.05)",borderRadius:8,border:"1px solid rgba(124,111,205,0.12)"},onClick:()=>N(!j),children:[(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,r.jsx)("div",{style:{width:28,height:28,borderRadius:7,background:`${e.color}15`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:(0,r.jsx)("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:e.color,strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:(0,r.jsx)("path",{d:e.icon})})}),(0,r.jsx)("span",{style:{fontWeight:600,color:"#1a1a2e"},children:e.title})]}),(0,r.jsx)("svg",{style:{transition:"transform 0.2s",transform:j?"rotate(180deg)":"none",flexShrink:0},width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"#7c6fcd",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,r.jsx)("polyline",{points:"6 9 12 15 18 9"})})]}),j&&(0,r.jsxs)("div",{className:"hdr-mob-surgical-list",children:[e.subServices.map(e=>(0,r.jsxs)(t.default,{href:`/services/surgical-services/${e.slug}`,className:"hdr-mob-surgical-item",onClick:()=>{h(!1),b(!1),N(!1)},children:[(0,r.jsx)("span",{style:{width:6,height:6,borderRadius:"50%",background:"#7c6fcd",flexShrink:0,display:"inline-block"}}),e.title]},e.slug)),(0,r.jsxs)(t.default,{href:"/services/surgical-services",className:"hdr-mob-surgical-item",style:{color:"#7c6fcd",fontWeight:600},onClick:()=>{h(!1),b(!1),N(!1)},children:[(0,r.jsx)("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"#7c6fcd",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,r.jsx)("path",{d:"M5 12h14M12 5l7 7-7 7"})}),"View All Surgical"]})]})]},e.slug):(0,r.jsxs)(t.default,{href:`/services/${e.slug}`,className:"hdr-mob-svc",onClick:()=>{h(!1),b(!1)},children:[(0,r.jsx)("div",{style:{width:28,height:28,borderRadius:7,background:`${e.color}15`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:(0,r.jsx)("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:e.color,strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:(0,r.jsx)("path",{d:e.icon})})}),e.title]},e.slug)),(0,r.jsx)(t.default,{href:"/services",className:"hdr-mob-svc",style:{gridColumn:"1 / -1",color:"#f57c20",fontWeight:600},onClick:()=>{h(!1),b(!1)},children:"View All Services →"})]})]},"services"):"locations"===i.hasDropdown?(0,r.jsxs)("div",{children:[(0,r.jsxs)("button",{className:"hdr-mob-link",onClick:()=>w(!v),children:[i.name,(0,r.jsx)("svg",{style:{transition:"transform 0.2s",transform:v?"rotate(180deg)":"none"},width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"#888",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,r.jsx)("polyline",{points:"6 9 12 15 18 9"})})]}),v&&(0,r.jsx)("div",{className:"hdr-mob-loc-list",children:a.map(t=>(0,r.jsxs)("button",{className:"hdr-mob-loc",onClick:()=>{e.push(`/contact?location=${t.id}`),h(!1),w(!1)},children:[(0,r.jsx)("div",{style:{width:32,height:32,borderRadius:9,background:"rgba(245,124,32,0.1)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:(0,r.jsxs)("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"#f57c20",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,r.jsx)("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),(0,r.jsx)("circle",{cx:"12",cy:"10",r:"3"})]})}),(0,r.jsxs)("div",{style:{textAlign:"left"},children:[(0,r.jsx)("p",{className:"hdr-mob-loc-name",children:t.name}),(0,r.jsx)("p",{className:"hdr-mob-loc-sub",children:t.sub})]})]},t.id))})]},"locations"):(0,r.jsx)(t.default,{href:i.href,className:"hdr-mob-link",onClick:()=>h(!1),children:i.name},i.name)),(0,r.jsx)("div",{style:{paddingTop:12},children:(0,r.jsxs)("button",{onClick:B,className:"hdr-cta",style:{width:"100%",justifyContent:"center"},children:["Book Appointment",(0,r.jsx)("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"white",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,r.jsx)("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})})]})]})]})}e.s(["Header",()=>d])},76841,e=>{"use strict";var r=e.i(43476),t=e.i(22016);let i=[{title:"Pet Consultation",slug:"pet-consultation"},{title:"Pet In-House Diagnostics",slug:"in-house-diagnostics"},{title:"Pet PCR Testing",slug:"pcr-testing"},{title:"Pet Advanced Imaging",slug:"advanced-imaging"},{title:"Pet Intensive Care (ICU)",slug:"intensive-care"},{title:"Pet Dental Care",slug:"dental-care"},{title:"Pet Laser Therapy",slug:"laser-therapy"},{title:"Pet Vaccination Programs",slug:"vaccination-programs"},{title:"Pet Surgical Services",slug:"surgical-services"},{title:"Pet Grooming",slug:"pet-grooming"},{title:"Pet Boarding",slug:"pet-boarding"}],o=[{name:"Home",href:"/"},{name:"About Us",href:"/about"},{name:"Services",href:"/services"},{name:"Contact",href:"/contact"}],n=[{name:"PNCV Al Ain",address:"Central Market, Shop F45, Behind Bawadi Mall, Al Ain, Abu Dhabi - UAE",phone:"+971 52 151 1465",phoneHref:"tel:+971521511465",email:"pawsandclawsalain@gmail.com",waText:"Hello! I would like to inquire about your veterinary services at the Al Ain clinic. Please share more details."},{name:"PNCV Dubai (JVC)",address:"Dar Al Jawhara Building, Jumeirah Village Circle (JVC), Dubai, UAE",phone:"+971 50 340 8149",phoneHref:"tel:+971503408149",email:"Pawsandclawsdxb1@gmail.com",waText:"Hello! I would like to inquire about your veterinary services at the Dubai JVC clinic. Please share more details."}];function s(){return(0,r.jsxs)("footer",{style:{background:"#1a1a2e",fontFamily:"'Poppins', sans-serif"},children:[(0,r.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        /* ── Layout ── */
        .ftr-inner  { max-width: 1200px; margin: 0 auto; padding: 72px 48px 0; }
        .ftr-grid   { display: grid; grid-template-columns: 1.6fr 1fr 1fr 1.8fr; gap: 48px; }

        /* ── Typography ── */
        .ftr-col-title {
          font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase; color: #f57c20; margin: 0 0 16px;
        }
        .ftr-link {
          display: flex; align-items: center; gap: 6px;
          font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 400;
          color: rgba(255,255,255,0.5); text-decoration: none; padding: 3px 0;
          transition: color 0.16s;
        }
        .ftr-link:hover { color: #f57c20; }

        /* ── Branch cards ── */
        .ftr-branch { margin-bottom: 20px; }
        .ftr-branch:last-child { margin-bottom: 0; }
        .ftr-branch + .ftr-branch { padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.07); }
        .ftr-branch-name {
          font-family: 'Poppins', sans-serif; font-size: 13px; font-weight: 700;
          color: #fff; margin: 0 0 10px; display: flex; align-items: center; gap: 7px;
        }
        .ftr-contact-row { display: flex; align-items: flex-start; gap: 8px; margin-bottom: 7px; }
        .ftr-contact-text {
          font-family: 'Poppins', sans-serif; font-size: 12.5px; font-weight: 400;
          color: rgba(255,255,255,0.5); margin: 0; line-height: 1.55;
          text-decoration: none; transition: color 0.16s;
        }
        a.ftr-contact-text:hover { color: rgba(255,255,255,0.8); }
        .ftr-cta-row { display: flex; gap: 7px; margin-top: 10px; }
        .ftr-btn-call {
          display: inline-flex; align-items: center; gap: 5px;
          background: rgba(245,124,32,0.1); color: #f57c20;
          border: 1px solid rgba(245,124,32,0.22); border-radius: 7px;
          font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 600;
          padding: 7px 13px; text-decoration: none; transition: background 0.16s;
        }
        .ftr-btn-call:hover { background: rgba(245,124,32,0.2); }
        .ftr-btn-wa {
          display: inline-flex; align-items: center; gap: 5px;
          background: rgba(37,211,102,0.08); color: #25d366;
          border: 1px solid rgba(37,211,102,0.18); border-radius: 7px;
          font-family: 'Poppins', sans-serif; font-size: 11px; font-weight: 600;
          padding: 7px 13px; text-decoration: none; transition: background 0.16s;
        }
        .ftr-btn-wa:hover { background: rgba(37,211,102,0.16); }

        /* ── Social ── */
        .ftr-social { display: flex; gap: 8px; margin-top: 20px; }
        .ftr-soc-btn {
          width: 34px; height: 34px; border-radius: 8px;
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.09);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.45); text-decoration: none; transition: background 0.16s, color 0.16s;
        }
        .ftr-soc-btn:hover { background: rgba(245,124,32,0.12); color: #f57c20; }

        /* ── Bottom bar ── */
        .ftr-divider { margin: 52px 48px 0; border: none; border-top: 1px solid rgba(255,255,255,0.07); }
        .ftr-bottom {
          max-width: 1200px; margin: 0 auto; padding: 18px 48px 28px;
          display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;
        }
        .ftr-copy  { font-family: 'Poppins', sans-serif; font-size: 12px; color: rgba(255,255,255,0.28); margin: 0; }
        .ftr-btm-links { display: flex; gap: 18px; }
        .ftr-btm-link  {
          font-family: 'Poppins', sans-serif; font-size: 12px;
          color: rgba(255,255,255,0.28); text-decoration: none; transition: color 0.16s;
        }
        .ftr-btm-link:hover { color: #f57c20; }

        /* ══ TABLET ══ */
        @media (max-width: 1024px) {
          .ftr-inner  { padding: 56px 32px 0; }
          .ftr-grid   { grid-template-columns: 1fr 1fr; gap: 36px; }
          .ftr-divider { margin-left: 32px; margin-right: 32px; }
          .ftr-bottom  { padding-left: 32px; padding-right: 32px; }
        }

        /* ══ MOBILE ══ */
        @media (max-width: 640px) {
          .ftr-inner  { padding: 36px 20px 0; }

          /* Single column, tighter spacing */
          .ftr-grid   { grid-template-columns: 1fr; gap: 0; }

          /* Each column becomes a compact accordion-style row */
          .ftr-col    { padding: 18px 0; border-bottom: 1px solid rgba(255,255,255,0.07); }
          .ftr-col:last-child { border-bottom: none; }

          /* Smaller titles */
          .ftr-col-title { font-size: 10px; margin-bottom: 10px; }

          /* Links tighter */
          .ftr-link   { font-size: 12.5px; padding: 2px 0; }

          /* Hide quick-links chevrons on mobile, save space */
          .ftr-link svg { display: none; }

          /* Quick links: 2-col grid */
          .ftr-links-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; }

          /* Services: 2-col grid, smaller text */
          .ftr-svc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; }
          .ftr-svc-grid .ftr-link { font-size: 11.5px; }

          /* Branch: collapsed — hide address, keep name + buttons only */
          .ftr-branch { margin-bottom: 14px; }
          .ftr-branch + .ftr-branch { padding-top: 14px; }
          .ftr-branch-name { font-size: 12.5px; margin-bottom: 6px; }
          .ftr-contact-row { margin-bottom: 4px; }
          .ftr-contact-text { font-size: 11.5px; }
          /* hide address on mobile */
          .ftr-hide-mobile { display: none !important; }
          .ftr-cta-row { margin-top: 8px; gap: 6px; }
          .ftr-btn-call, .ftr-btn-wa { font-size: 10.5px; padding: 6px 10px; }

          /* Social row */
          .ftr-social { margin-top: 14px; gap: 6px; }
          .ftr-soc-btn { width: 30px; height: 30px; }

          /* Bottom bar */
          .ftr-divider { margin: 28px 20px 0; }
          .ftr-bottom  { padding: 14px 20px 20px; flex-direction: column; align-items: flex-start; gap: 6px; }
          .ftr-copy    { font-size: 11px; }
          .ftr-btm-links { gap: 12px; }
          .ftr-btm-link  { font-size: 11px; }

          /* Brand */
          .ftr-brand-desc { font-size: 12px !important; margin-bottom: 0 !important; }
        }
      `}),(0,r.jsx)("div",{className:"ftr-inner",children:(0,r.jsxs)("div",{className:"ftr-grid",children:[(0,r.jsxs)("div",{className:"ftr-col",children:[(0,r.jsx)(t.default,{href:"/",className:"hdr-logo",children:(0,r.jsx)("img",{src:"/logo.png",alt:"Paws & Claws",style:{width:180,objectFit:"contain",marginBottom:18}})}),(0,r.jsx)("p",{className:"ftr-brand-desc",style:{fontFamily:"'Poppins', sans-serif",fontSize:13,color:"rgba(255,255,255,0.42)",lineHeight:1.75,margin:"0 0 20px",fontWeight:400,maxWidth:270},children:"Professional veterinary care for your beloved pets across the UAE. Trusted by thousands of pet families."}),(0,r.jsxs)("div",{style:{display:"inline-flex",alignItems:"center",gap:7,background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.09)",borderRadius:8,padding:"6px 11px"},children:[(0,r.jsx)("span",{style:{fontSize:14},children:"🇦🇪"}),(0,r.jsx)("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:11.5,color:"rgba(255,255,255,0.45)",fontWeight:500},children:"Serving UAE since 2018"})]}),(0,r.jsxs)("div",{className:"ftr-social",children:[(0,r.jsx)("a",{href:"https://www.facebook.com/p/Paws-and-claws-veterinary-clinic-dubai-100086720370384/",className:"ftr-soc-btn",children:(0,r.jsx)("svg",{width:"14",height:"14",fill:"currentColor",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"})})}),(0,r.jsx)("a",{href:"https://www.instagram.com/paws.and.claws.clinic/",className:"ftr-soc-btn",children:(0,r.jsx)("svg",{width:"14",height:"14",fill:"currentColor",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"})})}),(0,r.jsx)("a",{href:"https://wa.me/971503408149",target:"_blank",rel:"noopener noreferrer",className:"ftr-soc-btn",style:{color:"#25d366"},children:(0,r.jsx)("svg",{width:"14",height:"14",fill:"currentColor",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})})})]})]}),(0,r.jsxs)("div",{className:"ftr-col",children:[(0,r.jsx)("p",{className:"ftr-col-title",children:"Quick Links"}),(0,r.jsx)("div",{className:"ftr-links-grid",children:o.map(e=>(0,r.jsxs)(t.default,{href:e.href,className:"ftr-link",children:[(0,r.jsx)("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",style:{opacity:.35,flexShrink:0},children:(0,r.jsx)("path",{d:"M9 18l6-6-6-6"})}),e.name]},e.name))})]}),(0,r.jsxs)("div",{className:"ftr-col",children:[(0,r.jsx)("p",{className:"ftr-col-title",children:"Services"}),(0,r.jsx)("div",{className:"ftr-svc-grid",children:i.map(e=>(0,r.jsxs)(t.default,{href:`/services/${e.slug}`,className:"ftr-link",children:[(0,r.jsx)("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",style:{opacity:.35,flexShrink:0},children:(0,r.jsx)("path",{d:"M9 18l6-6-6-6"})}),e.title]},e.slug))})]}),(0,r.jsxs)("div",{className:"ftr-col",children:[(0,r.jsx)("p",{className:"ftr-col-title",children:"Contact Us"}),n.map(e=>(0,r.jsxs)("div",{className:"ftr-branch",children:[(0,r.jsxs)("p",{className:"ftr-branch-name",children:[(0,r.jsx)("span",{style:{width:6,height:6,borderRadius:"50%",background:"#f57c20",display:"inline-block",flexShrink:0}}),e.name]}),(0,r.jsxs)("div",{className:"ftr-contact-row ftr-hide-mobile",children:[(0,r.jsxs)("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"#f57c20",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{flexShrink:0,marginTop:2},children:[(0,r.jsx)("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),(0,r.jsx)("circle",{cx:"12",cy:"10",r:"3"})]}),(0,r.jsx)("p",{className:"ftr-contact-text",children:e.address})]}),(0,r.jsxs)("div",{className:"ftr-contact-row",children:[(0,r.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"#f57c20",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{flexShrink:0},children:(0,r.jsx)("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.42 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012.33 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.72 6.72l1.27-.76a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"})}),(0,r.jsx)("a",{href:e.phoneHref,className:"ftr-contact-text",children:e.phone})]}),(0,r.jsxs)("div",{className:"ftr-contact-row ftr-hide-mobile",children:[(0,r.jsxs)("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"#f57c20",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{flexShrink:0},children:[(0,r.jsx)("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),(0,r.jsx)("polyline",{points:"22,6 12,13 2,6"})]}),(0,r.jsx)("a",{href:`mailto:${e.email}`,className:"ftr-contact-text",style:{wordBreak:"break-all"},children:e.email})]}),(0,r.jsxs)("div",{className:"ftr-cta-row",children:[(0,r.jsxs)("a",{href:e.phoneHref,className:"ftr-btn-call",children:[(0,r.jsx)("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,r.jsx)("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.42 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012.33 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.72 6.72l1.27-.76a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"})}),"Call"]}),(0,r.jsxs)("a",{href:`https://wa.me/971503408149?text=${encodeURIComponent(e.waText)}`,target:"_blank",rel:"noopener noreferrer",className:"ftr-btn-wa",children:[(0,r.jsx)("svg",{width:"11",height:"11",fill:"currentColor",viewBox:"0 0 24 24",children:(0,r.jsx)("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})}),"WhatsApp"]})]})]},e.name))]})]})}),(0,r.jsx)("hr",{className:"ftr-divider"}),(0,r.jsxs)("div",{className:"ftr-bottom",children:[(0,r.jsxs)("p",{className:"ftr-copy",children:["© ",new Date().getFullYear()," Paws & Claws Veterinary. All rights reserved."]}),(0,r.jsxs)("p",{className:"ftr-copy",children:["Powered by ",(0,r.jsx)("a",{href:"https://mindoxa.com",target:"_blank",rel:"noopener noreferrer",className:"ftr-btm-link",children:"Mindoxa"})]})]})]})}e.s(["Footer",()=>s])}]);