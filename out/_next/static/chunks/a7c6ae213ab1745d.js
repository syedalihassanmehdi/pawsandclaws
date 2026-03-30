(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,69139,e=>{"use strict";var a=e.i(43476),i=e.i(18566),r=e.i(71645);let n=[{id:"al-ain",name:"PNCV Al Ain",label:"Main Branch",address:"Central Market, Shop F45, Behind Bawadi Mall, Al Ain, Abu Dhabi - UAE",phone:"+971 52 151 1465",phoneHref:"tel:+971521511465",waNumber:"971521511465",email:"pawsandclawsalain@gmail.com",hours:[{days:"Sat – Thu",time:"9:00 AM – 9:00 PM"},{days:"Friday",time:"2:00 PM – 9:00 PM"}],mapsUrl:"https://maps.google.com/?q=Central+Market+Shop+F45+Bawadi+Mall+Al+Ain",waText:"Hello! I would like to book an appointment at the PNCV Al Ain clinic. Please confirm availability."},{id:"dubai",name:"PNCV Dubai (JVC)",label:"Dubai Branch",address:"Dar Al Jawhara Building, Jumeirah Village Circle (JVC), Dubai, UAE",phone:"+971 50 340 8149",phoneHref:"tel:+971503408149",waNumber:"971503408149",email:"Pawsandclawsdxb1@gmail.com",hours:[{days:"Mon, Tue, Thu, Sat, Sun",time:"9:00 AM – 9:00 PM"},{days:"Wednesday",time:"1:00 PM – 9:00 PM"},{days:"Friday",time:"2:00 PM – 9:00 PM"}],mapsUrl:"https://maps.google.com/?q=Dar+Al+Jawhara+Building+JVC+Dubai",waText:"Hello! I would like to book an appointment at PNCV Dubai (JVC). Please confirm availability."}];function s(){let e=(0,i.useSearchParams)().get("location"),s=n.find(a=>a.id===e)??n[0],[o,t]=(0,r.useState)(s),[l,c]=(0,r.useState)({name:"",email:"",phone:"",petType:"",message:""}),[p,d]=(0,r.useState)(!1),[h,x]=(0,r.useState)({});(0,r.useEffect)(()=>{let a=n.find(a=>a.id===e);a&&t(a)},[e]);let m=e=>{c({...l,[e.target.name]:e.target.value}),h[e.target.name]&&x({...h,[e.target.name]:""})};return(0,a.jsxs)("div",{style:{minHeight:"100vh",background:"linear-gradient(135deg,#eeedf8 0%,#e8e7f5 50%,#ece9f7 100%)",fontFamily:"'Poppins',sans-serif",padding:"64px 24px 80px"},children:[(0,a.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        .cp-blob1 { position:fixed; width:500px; height:500px; border-radius:50%; background:#b8b0e8; filter:blur(100px); opacity:0.18; top:-100px; right:-100px; pointer-events:none; z-index:0; }
        .cp-blob2 { position:fixed; width:400px; height:400px; border-radius:50%; background:#c9b8f0; filter:blur(90px); opacity:0.14; bottom:-80px; left:-80px; pointer-events:none; z-index:0; }

        .cp-wrap { position:relative; z-index:1; max-width:1080px; margin:0 auto; }

        .cp-heading { text-align:center; margin-bottom:44px; }
        .cp-heading h1 { font-size:clamp(26px,4.5vw,42px); font-weight:800; color:#1a1a2e; margin:0 0 10px; letter-spacing:-0.02em; }
        .cp-heading p  { font-size:14.5px; color:#555570; margin:0; font-weight:400; }

        .cp-layout { display:grid; grid-template-columns:360px 1fr; gap:24px; align-items:start; }

        .cp-branch {
          background:rgba(255,255,255,0.82); border-radius:20px; padding:22px;
          border:2px solid rgba(255,255,255,0.9);
          backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
          box-shadow:0 2px 20px rgba(90,80,160,0.07);
          cursor:pointer; transition:border-color 0.2s, box-shadow 0.2s, transform 0.18s;
          margin-bottom:16px; position:relative;
        }
        .cp-branch:last-of-type { margin-bottom:0; }
        .cp-branch:hover { transform:translateY(-2px); box-shadow:0 6px 28px rgba(90,80,160,0.12); }
        .cp-branch.active { border-color:#f57c20; box-shadow:0 6px 28px rgba(245,124,32,0.15); }
        .cp-branch-dot { width:9px; height:9px; border-radius:50%; background:#e0ddf5; position:absolute; top:22px; right:22px; transition:background 0.2s; }
        .cp-branch.active .cp-branch-dot { background:#f57c20; }

        .cp-branch-head { display:flex; align-items:center; gap:12px; margin-bottom:14px; }
        .cp-branch-icon { width:40px; height:40px; border-radius:12px; background:rgba(245,124,32,0.1); display:flex; align-items:center; justify-content:center; flex-shrink:0; transition:background 0.2s; }
        .cp-branch.active .cp-branch-icon { background:rgba(245,124,32,0.18); }
        .cp-branch-title { font-size:14.5px; font-weight:700; color:#1a1a2e; margin:0 0 2px; }
        .cp-branch-label { font-size:11.5px; color:#9090b0; font-weight:500; margin:0; }

        .cp-info-row { display:flex; align-items:flex-start; gap:9px; margin-bottom:7px; }
        .cp-info-row:last-child { margin-bottom:0; }
        .cp-info-text { font-size:12.5px; color:#555570; line-height:1.55; margin:0; text-decoration:none; transition:color 0.16s; }
        a.cp-info-text:hover { color:#1a1a2e; }

        .cp-divider { border:none; border-top:1px solid rgba(180,174,230,0.2); margin:12px 0; }

        .cp-hours-row { display:flex; justify-content:space-between; align-items:center; gap:8px; margin-bottom:5px; }
        .cp-hours-days { font-size:11.5px; color:#9090b0; }
        .cp-hours-time { font-size:11.5px; color:#1a1a2e; font-weight:600; }

        .cp-cta-row { display:flex; gap:7px; margin-top:14px; }
        .cp-btn-directions {
          flex:1; display:flex; align-items:center; justify-content:center; gap:6px;
          padding:9px 12px; border-radius:10px; border:1.5px solid rgba(180,174,230,0.3);
          background:#f9f8fd; font-family:'Poppins',sans-serif; font-size:12px; font-weight:600; color:#555570;
          text-decoration:none; transition:background 0.16s, border-color 0.16s, color 0.16s;
        }
        .cp-btn-directions:hover { background:#f0edf9; border-color:#c9c2e8; color:#1a1a2e; }
        .cp-btn-wa {
          display:flex; align-items:center; justify-content:center; gap:6px;
          padding:9px 14px; border-radius:10px;
          background:rgba(37,211,102,0.08); border:1.5px solid rgba(37,211,102,0.2);
          font-family:'Poppins',sans-serif; font-size:12px; font-weight:600; color:#16a34a;
          text-decoration:none; transition:background 0.16s;
        }
        .cp-btn-wa:hover { background:rgba(37,211,102,0.16); }

        .cp-form-panel {
          background:rgba(255,255,255,0.88); border-radius:24px; padding:36px;
          border:1.5px solid rgba(255,255,255,0.95); backdrop-filter:blur(12px);
          box-shadow:0 4px 32px rgba(90,80,160,0.09);
        }
        .cp-form-title { font-size:22px; font-weight:800; color:#1a1a2e; margin:0 0 4px; letter-spacing:-0.02em; }
        .cp-form-sub { font-size:13px; color:#9090b0; margin:0 0 28px; }
        .cp-form-sub span { color:#f57c20; font-weight:600; }

        .cp-form-grid { display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:14px; }
        .cp-form-full { margin-bottom:14px; }

        .cp-label { font-size:11.5px; font-weight:600; color:#555570; margin:0 0 6px; display:block; text-transform:uppercase; letter-spacing:0.06em; }
        .cp-label em { color:#f57c20; font-style:normal; }

        .cp-input, .cp-textarea {
          width:100%; padding:11px 14px; border-radius:12px;
          border:1.5px solid rgba(180,174,230,0.3); background:rgba(249,248,253,0.9);
          font-family:'Poppins',sans-serif; font-size:13.5px; color:#1a1a2e; font-weight:400;
          outline:none; transition:border-color 0.18s, box-shadow 0.18s;
          box-sizing:border-box;
        }
        .cp-input::placeholder, .cp-textarea::placeholder { color:#bbb8d0; }
        .cp-input:focus, .cp-textarea:focus { border-color:#f57c20; box-shadow:0 0 0 3px rgba(245,124,32,0.1); background:#fff; }
        .cp-input.error, .cp-textarea.error { border-color:#ef4444; }
        .cp-textarea { resize:vertical; min-height:110px; }
        .cp-error-msg { font-size:11px; color:#ef4444; margin:4px 0 0; display:block; font-weight:500; }

        .cp-submit-btn {
          width:100%; padding:14px; border-radius:14px; border:none;
          background:linear-gradient(135deg,#f57c20,#e8650a);
          font-family:'Poppins',sans-serif; font-size:14.5px; font-weight:700; color:#fff;
          cursor:pointer; display:flex; align-items:center; justify-content:center; gap:9px;
          margin-top:6px; transition:opacity 0.18s, transform 0.18s;
          box-shadow:0 4px 18px rgba(245,124,32,0.32);
        }
        .cp-submit-btn:hover { opacity:0.92; transform:translateY(-1px); }
        .cp-submit-btn:active { transform:translateY(0); }
        .cp-submit-btn.success { background:linear-gradient(135deg,#22c55e,#16a34a); box-shadow:0 4px 18px rgba(34,197,94,0.32); }

        @media (max-width:900px) {
          .cp-layout { grid-template-columns:1fr; }
          .cp-form-panel { padding:26px 22px; }
        }
        @media (max-width:540px) {
          .cp-form-grid { grid-template-columns:1fr; }
          .cp-form-panel { padding:20px 16px; border-radius:18px; }
          .cp-branch { padding:18px; }
          .cp-heading h1 { font-size:26px; }
        }
      `}),(0,a.jsx)("div",{className:"cp-blob1"}),(0,a.jsx)("div",{className:"cp-blob2"}),(0,a.jsxs)("div",{className:"cp-wrap",children:[(0,a.jsxs)("div",{className:"cp-heading",children:[(0,a.jsx)("h1",{children:"Visit Us"}),(0,a.jsx)("p",{children:"Two convenient clinics across the UAE — choose your nearest branch and book below"})]}),(0,a.jsxs)("div",{className:"cp-layout",children:[(0,a.jsx)("div",{children:n.map(e=>(0,a.jsxs)("div",{className:`cp-branch${o.id===e.id?" active":""}`,onClick:()=>t(e),children:[(0,a.jsx)("div",{className:"cp-branch-dot"}),(0,a.jsxs)("div",{className:"cp-branch-head",children:[(0,a.jsx)("div",{className:"cp-branch-icon",children:(0,a.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"#f57c20",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),(0,a.jsx)("circle",{cx:"12",cy:"10",r:"3"})]})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"cp-branch-title",children:e.name}),(0,a.jsx)("p",{className:"cp-branch-label",children:e.label})]})]}),(0,a.jsxs)("div",{className:"cp-info-row",children:[(0,a.jsxs)("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"#f57c20",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{flexShrink:0,marginTop:2},children:[(0,a.jsx)("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),(0,a.jsx)("circle",{cx:"12",cy:"10",r:"3"})]}),(0,a.jsx)("p",{className:"cp-info-text",children:e.address})]}),(0,a.jsxs)("div",{className:"cp-info-row",children:[(0,a.jsx)("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"#22c55e",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{flexShrink:0},children:(0,a.jsx)("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.42 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012.33 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.91a16 16 0 006.72 6.72l1.27-.76a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"})}),(0,a.jsx)("a",{href:e.phoneHref,className:"cp-info-text",children:e.phone})]}),(0,a.jsxs)("div",{className:"cp-info-row",children:[(0,a.jsxs)("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"#7c6fcd",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{flexShrink:0},children:[(0,a.jsx)("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),(0,a.jsx)("polyline",{points:"22,6 12,13 2,6"})]}),(0,a.jsx)("a",{href:`mailto:${e.email}`,className:"cp-info-text",style:{wordBreak:"break-all"},children:e.email})]}),(0,a.jsx)("hr",{className:"cp-divider"}),(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:5,marginBottom:8},children:[(0,a.jsxs)("svg",{width:"11",height:"11",viewBox:"0 0 24 24",fill:"none",stroke:"#f59e0b",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,a.jsx)("polyline",{points:"12 6 12 12 16 14"})]}),(0,a.jsx)("span",{style:{fontSize:10,fontWeight:700,color:"#9090b0",textTransform:"uppercase",letterSpacing:"0.08em"},children:"Opening Hours"})]}),e.hours.map((e,i)=>(0,a.jsxs)("div",{className:"cp-hours-row",children:[(0,a.jsx)("span",{className:"cp-hours-days",children:e.days}),(0,a.jsx)("span",{className:"cp-hours-time",children:e.time})]},i)),(0,a.jsxs)("div",{className:"cp-cta-row",children:[(0,a.jsxs)("a",{href:e.mapsUrl,target:"_blank",rel:"noopener noreferrer",className:"cp-btn-directions",children:[(0,a.jsxs)("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("polyline",{points:"15 3 21 3 21 9"}),(0,a.jsx)("path",{d:"M21 3L9 15"}),(0,a.jsx)("path",{d:"M11 3H3v18h18v-8"})]}),"Get Directions"]}),(0,a.jsxs)("a",{href:`https://wa.me/${e.waNumber}?text=${encodeURIComponent(e.waText)}`,target:"_blank",rel:"noopener noreferrer",className:"cp-btn-wa",children:[(0,a.jsx)("svg",{width:"13",height:"13",fill:"currentColor",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})}),"WhatsApp"]})]})]},e.id))}),(0,a.jsxs)("div",{className:"cp-form-panel",children:[(0,a.jsx)("p",{className:"cp-form-title",children:"Book Your Appointment"}),(0,a.jsxs)("p",{className:"cp-form-sub",children:["Selected Location: ",(0,a.jsx)("span",{children:o.name})]}),(0,a.jsxs)("div",{className:"cp-form-grid",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("label",{className:"cp-label",children:["Your Name ",(0,a.jsx)("em",{children:"*"})]}),(0,a.jsx)("input",{className:`cp-input${h.name?" error":""}`,name:"name",placeholder:"John Doe",value:l.name,onChange:m}),h.name&&(0,a.jsx)("span",{className:"cp-error-msg",children:h.name})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("label",{className:"cp-label",children:["Email Address ",(0,a.jsx)("em",{children:"*"})]}),(0,a.jsx)("input",{className:`cp-input${h.email?" error":""}`,name:"email",type:"email",placeholder:"john@example.com",value:l.email,onChange:m}),h.email&&(0,a.jsx)("span",{className:"cp-error-msg",children:h.email})]})]}),(0,a.jsxs)("div",{className:"cp-form-grid",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("label",{className:"cp-label",children:["Phone Number ",(0,a.jsx)("em",{children:"*"})]}),(0,a.jsx)("input",{className:`cp-input${h.phone?" error":""}`,name:"phone",placeholder:"+971 XX XXX XXXX",value:l.phone,onChange:m}),h.phone&&(0,a.jsx)("span",{className:"cp-error-msg",children:h.phone})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"cp-label",children:"Pet Type"}),(0,a.jsx)("input",{className:"cp-input",name:"petType",placeholder:"Dog, Cat, Bird...",value:l.petType,onChange:m})]})]}),(0,a.jsxs)("div",{className:"cp-form-full",children:[(0,a.jsxs)("label",{className:"cp-label",children:["How Can We Help? ",(0,a.jsx)("em",{children:"*"})]}),(0,a.jsx)("textarea",{className:`cp-textarea${h.message?" error":""}`,name:"message",placeholder:"Tell us about your pet's needs or any questions you have...",value:l.message,onChange:m}),h.message&&(0,a.jsx)("span",{className:"cp-error-msg",children:h.message})]}),(0,a.jsxs)("div",{className:"cp-form-full",style:{marginBottom:20},children:[(0,a.jsx)("label",{className:"cp-label",children:"Preferred Location"}),(0,a.jsx)("div",{style:{display:"flex",gap:8},children:n.map(e=>(0,a.jsxs)("div",{onClick:()=>t(e),style:{flex:1,padding:"10px 14px",borderRadius:12,cursor:"pointer",border:o.id===e.id?"2px solid #f57c20":"1.5px solid rgba(180,174,230,0.3)",background:o.id===e.id?"rgba(245,124,32,0.06)":"rgba(249,248,253,0.9)",transition:"all 0.16s"},children:[(0,a.jsx)("p",{style:{fontFamily:"'Poppins',sans-serif",fontSize:12,fontWeight:700,color:o.id===e.id?"#f57c20":"#1a1a2e",margin:"0 0 2px"},children:e.name}),(0,a.jsx)("p",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,color:"#9090b0",margin:0},children:e.label})]},e.id))})]}),(0,a.jsx)("button",{className:`cp-submit-btn${p?" success":""}`,onClick:()=>{let e={};if(l.name.trim()||(e.name="Name is required"),l.email.trim()||(e.email="Email is required"),l.phone.trim()||(e.phone="Phone is required"),l.message.trim()||(e.message="Please tell us how we can help"),Object.keys(e).length)return void x(e);let a=`Hello! I'd like to book an appointment at ${o.name}.

👤 Name: ${l.name}
📧 Email: ${l.email}
📞 Phone: ${l.phone}
🐾 Pet Type: ${l.petType||"Not specified"}
📍 Location: ${o.name}

💬 Message: ${l.message}`;window.open(`https://wa.me/${o.waNumber}?text=${encodeURIComponent(a)}`,"_blank"),d(!0),setTimeout(()=>{d(!1),c({name:"",email:"",phone:"",petType:"",message:""})},4e3)},children:p?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("svg",{width:"17",height:"17",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,a.jsx)("polyline",{points:"20 6 9 17 4 12"})}),"Opening WhatsApp…"]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("svg",{width:"17",height:"17",fill:"currentColor",viewBox:"0 0 24 24",children:(0,a.jsx)("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})}),"Book via WhatsApp"]})})]})]})]})]})}function o(){return(0,a.jsx)(r.Suspense,{fallback:(0,a.jsx)("div",{style:{minHeight:"100vh",background:"linear-gradient(135deg,#eeedf8,#ece9f7)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,a.jsx)("span",{style:{fontFamily:"'Poppins',sans-serif",color:"#555570"},children:"Loading..."})}),children:(0,a.jsx)(s,{})})}e.s(["default",()=>o])}]);