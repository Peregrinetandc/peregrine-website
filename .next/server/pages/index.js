"use strict";(()=>{var e={};e.id=332,e.ids=[220,332],e.modules={361:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},2015:e=>{e.exports=require("react")},3873:e=>{e.exports=require("path")},4659:(e,s,r)=>{r.r(s),r.d(s,{config:()=>P,default:()=>f,getServerSideProps:()=>N,getStaticPaths:()=>S,getStaticProps:()=>b,reportWebVitals:()=>k,routeModule:()=>C,unstable_getServerProps:()=>_,unstable_getServerSideProps:()=>A,unstable_getStaticParams:()=>w,unstable_getStaticPaths:()=>M,unstable_getStaticProps:()=>y});var a={};r.r(a),r.d(a,{default:()=>p,getServerSideProps:()=>v});var i=r(3885),n=r(237),l=r(1413),t=r(9674),c=r(5504),o=r.n(c),d=r(8732),h=r(7912),x=r.n(h),u=r(7732),g=r(4974);let j=require("axios");var m=r.n(j);async function v(){return{props:{details:(await m().get("http://localhost:3000/api/fetchLandingPageDetails")).data}}}let p=({details:e})=>(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(x(),{children:[(0,d.jsx)("title",{children:"Peregrine T&C - Home"}),(0,d.jsx)("meta",{name:"description",content:"Welcome to Peregrine T&C. We provide high-quality training and consulting services to individuals and organizations around the world."}),(0,d.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,d.jsx)(u.A,{}),(0,d.jsx)("main",{children:(0,d.jsx)("section",{className:"hero",children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)("h1",{children:e.title}),(0,d.jsx)("p",{children:e.description})]})})}),(0,d.jsx)(g.A,{})]}),f=(0,l.M)(a,"default"),b=(0,l.M)(a,"getStaticProps"),S=(0,l.M)(a,"getStaticPaths"),N=(0,l.M)(a,"getServerSideProps"),P=(0,l.M)(a,"config"),k=(0,l.M)(a,"reportWebVitals"),y=(0,l.M)(a,"unstable_getStaticProps"),M=(0,l.M)(a,"unstable_getStaticPaths"),w=(0,l.M)(a,"unstable_getStaticParams"),_=(0,l.M)(a,"unstable_getServerProps"),A=(0,l.M)(a,"unstable_getServerSideProps"),C=new i.PagesRouteModule({definition:{kind:n.A.PAGES,page:"/index",pathname:"/",bundlePath:"",filename:""},components:{App:o(),Document:t.default},userland:a})},4974:(e,s,r)=>{r.d(s,{A:()=>l});var a=r(8732),i=r(9918),n=r.n(i);let l=()=>(0,a.jsx)("footer",{children:(0,a.jsxs)("div",{className:"footer-container",children:[(0,a.jsxs)("p",{children:["\xa9 ",new Date().getFullYear()," Peregrine T&C. All rights reserved."]}),(0,a.jsx)("nav",{children:(0,a.jsxs)("ul",{className:"footer-links",children:[(0,a.jsx)("li",{children:(0,a.jsx)(n(),{href:"/privacy-policy",children:(0,a.jsx)("a",{className:"footer-link",children:"Privacy Policy"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(n(),{href:"/terms-of-service",children:(0,a.jsx)("a",{className:"footer-link",children:"Terms of Service"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(n(),{href:"/#contact",children:(0,a.jsx)("a",{className:"footer-link",children:"Contact Us"})})})]})})]})})},7732:(e,s,r)=>{r.d(s,{A:()=>t});var a=r(8732),i=r(2015),n=r(9918),l=r.n(n);let t=()=>{let[e,s]=(0,i.useState)(!1),[r,n]=(0,i.useState)(!1),t=()=>{window.scrollY>50?n(!0):n(!1)};return(0,i.useEffect)(()=>(window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)}),[]),(0,a.jsx)("header",{className:`site-header ${r?"sticky":""}`,children:(0,a.jsx)("nav",{className:"navbar",children:(0,a.jsxs)("div",{className:"nav-container",children:[(0,a.jsx)(l(),{href:"/",legacyBehavior:!0,children:(0,a.jsx)("a",{className:"logo-link",children:(0,a.jsx)("img",{src:"/images/logo.png",alt:"Peregrine T&C Logo",className:"logo-image professional-logo"})})}),(0,a.jsx)("button",{className:"menu-toggle","aria-label":"Toggle Navigation",onClick:()=>{s(!e)},children:(0,a.jsxs)("div",{className:"hamburger",children:[(0,a.jsx)("span",{className:"bar"}),(0,a.jsx)("span",{className:"bar"}),(0,a.jsx)("span",{className:"bar"})]})}),(0,a.jsxs)("ul",{className:`nav-links ${e?"show":""}`,children:[(0,a.jsx)("li",{children:(0,a.jsx)(l(),{href:"/",legacyBehavior:!0,children:(0,a.jsx)("a",{className:"nav-link",children:"Home"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(l(),{href:"/about",legacyBehavior:!0,children:(0,a.jsx)("a",{className:"nav-link",children:"About"})})}),(0,a.jsxs)("li",{className:"has-submenu",children:[(0,a.jsx)(l(),{href:"/#our-services",legacyBehavior:!0,children:(0,a.jsx)("a",{className:"nav-link",children:"Services"})}),(0,a.jsxs)("ul",{className:"sub-menu",children:[(0,a.jsx)("li",{children:(0,a.jsx)(l(),{href:"/language-training",legacyBehavior:!0,children:(0,a.jsx)("a",{className:"sub-menu-link",children:"Language Training"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(l(),{href:"/translation-services",legacyBehavior:!0,children:(0,a.jsx)("a",{className:"sub-menu-link",children:"Translation Services"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(l(),{href:"/career-counseling",legacyBehavior:!0,children:(0,a.jsx)("a",{className:"sub-menu-link",children:"Career Counseling"})})}),(0,a.jsx)("li",{children:(0,a.jsx)(l(),{href:"/digital-marketing-services",legacyBehavior:!0,children:(0,a.jsx)("a",{className:"sub-menu-link",children:"Digital Marketing Services"})})})]})]})]})]})})})}},7912:e=>{e.exports=require("next/head")},8732:e=>{e.exports=require("react/jsx-runtime")},9674:(e,s,r)=>{r.r(s),r.d(s,{default:()=>t});var a=r(8732),i=r(2341),n=r.n(i);class l extends n(){render(){return(0,a.jsxs)(i.Html,{children:[(0,a.jsx)(i.Head,{children:(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})}),(0,a.jsxs)("body",{children:[(0,a.jsx)(i.Main,{}),(0,a.jsx)(i.NextScript,{})]})]})}}let t=l}};var s=require("../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),a=s.X(0,[341,703],()=>r(4659));module.exports=a})();