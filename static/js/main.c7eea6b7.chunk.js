(this["webpackJsonpinterspace-chat"]=this["webpackJsonpinterspace-chat"]||[]).push([[0],{12:function(e,n,t){},19:function(e,n,t){e.exports=t.p+"static/media/titanembeds.15387e4d.png"},20:function(e,n,t){e.exports=t.p+"static/media/jitsi.ac8e35d6.png"},22:function(e,n,t){e.exports=t(37)},27:function(e,n,t){},29:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(7),l=t.n(c),o=(t(27),t(4)),i=(t(29),t(12),t(1)),u=t(2),s=t(3),m="portal.interspace.chat",d={capsule1:{jitsi:{domain:m,roomName:"capsule1"}},capsule2:{jitsi:{domain:m,roomName:"capsule2"}}},f=Object.keys(d),p=Object(r.createContext)([{},function(){}]),h=function(e){var n=Object(r.useState)([]),t=Object(s.a)(n,2),c=t[0],l=t[1];return a.a.createElement(p.Provider,{value:{currentFloatingSpaces:c,addFloatingSpace:function(e){-1===c.indexOf(e)&&(-1!==f.indexOf(e)&&-1!==c.findIndex((function(e){return-1!==f.indexOf(e)}))?l(c.filter((function(e){return-1===f.indexOf(e)})).concat([e])):l(c.concat([e])))},closeFloatingSpace:function(e){l(c.filter((function(n){return n!==e})))}}},e.children)},b=Object(r.createContext)([{},function(){}]),g=function(e){var n=Object(r.useState)(""),t=Object(s.a)(n,2),c=t[0],l=t[1];return a.a.createElement(b.Provider,{value:{currentSpace:c,setSpace:l}},e.children)},v=function(e){var n=e.roomName,t=(e.active,Object(r.useContext)(b)),c=t.currentSpace,l=t.setSpace;return a.a.createElement("span",{className:"click-zone-mobile",onClick:function(){return l(n)}},a.a.createElement("span",{className:"roomFont ".concat(c===n?"active":"")},n))};function E(){var e=Object(i.a)(["\n  height: auto;\n  display: grid;\n  justify-self: center;\n  margin: 0 auto;\n  padding: 0.5rem;\n"]);return E=function(){return e},e}function x(){var e=Object(i.a)(["\n  opacity: 0;\n"]);return x=function(){return e},e}function O(){var e=Object(i.a)([""]);return O=function(){return e},e}var k=window.JitsiMeetExternalAPI,j=u.a.div(O()),w=u.a.div(x()),y=u.a.div(E()),N=function(){var e=Object(r.useContext)(b).currentSpace;return Object(r.useEffect)((function(){var n={roomName:e,height:400,parentNode:document.querySelector("#meet")},t=new k("portal.interspace.chat",n);return function(){t.dispose()}})),a.a.createElement(j,null,""===e?a.a.createElement(w,{id:"meet"}):a.a.createElement(y,{id:"meet"}))};function C(){var e=Object(i.a)(["\n  background: black;\n  box-shadow: inset 0px 0px 30px 30px rgba(0, 0, 0, 0);\n  justify-content: center;\n  display: grid;\n  grid-template-columns: auto auto auto;\n  grid-gap: 0.2rem;\n"]);return C=function(){return e},e}function S(){var e=Object(i.a)(["\n  background: black;\n  justify-content: center;\n"]);return S=function(){return e},e}function _(){var e=Object(i.a)(["\n  color: whitesmoke;\n"]);return _=function(){return e},e}function F(){var e=Object(i.a)(["\n  position: absolute;\n  z-index: -1;\n  display: inline-block;\n  border-radius: 50%;\n  top: 10vh;\n  left: 10vw;\n  height: 80vh;\n  width: 80vw;\n  background-color: #bbb;\n"]);return F=function(){return e},e}function Z(){var e=Object(i.a)(["\n  position: absolute;\n  top: 0px;\n  width: 100%;\n  background-color: black;\n  z-index: 1;\n  margin: 0px;\n  font-size: 0.8rem;\n  padding-bottom: 0.4rem;\n  p {\n    padding: 0.5rem;\n    margin: 0px;\n  }\n\n  a {\n    padding: 0px;\n  }\n"]);return Z=function(){return e},e}function A(){var e=Object(i.a)(["\n  text-align: center;\n  padding-top: 1rem;\n  margin: 0 auto;\n  font-size: 1rem;\n  z-index: 100;\n  div {\n    color: violet;\n  }\n"]);return A=function(){return e},e}function I(){var e=Object(i.a)(["\n  padding-bottom: 1rem;\n  width: 100%;\n\n  @media (max-width: 600px) {\n    background-color: black;\n    padding: 0px;\n    min-height: 10vh;\n  }\n"]);return I=function(){return e},e}function z(){var e=Object(i.a)(["\n  color: whitesmoke;\n  font-weight: 600;\n  font-size: 1.3rem;\n  padding: 1rem;\n\n  a {\n    font-weight: 100;\n    color: black;\n    background-color: #00ffbf;\n    text-decoration: underline;\n  }\n\n  @media (max-width: 600px) {\n    background-color: black;\n  }\n"]);return z=function(){return e},e}var T=u.a.h6(z()),D=u.a.nav(I()),W=u.a.div(A()),B=u.a.div(Z()),Y=u.a.span(F()),L=u.a.span(_()),P=u.a.div(S()),J=u.a.div(C()),R=function(){var e,n=Object(r.useContext)(p),t=n.currentFloatingSpaces,c=n.addFloatingSpace;if(t.length>0)if(t.length>2){var l=t.length;e=t.slice(0,l-2).join(", ")+", "+t.slice(l-2,l).join(" & ")}else e=t.join(" & ");return a.a.createElement(D,null,a.a.createElement(o.BrowserView,null,a.a.createElement("span",null,a.a.createElement(W,null,e?a.a.createElement(r.Fragment,null,"You're in the"," ",a.a.createElement(L,null,e),"!"):a.a.createElement(r.Fragment,null,a.a.createElement("div",null,"Click on a portal")))),a.a.createElement("div",null,a.a.createElement(Y,null,a.a.createElement("div",{className:"m-grid-container"},a.a.createElement("div",{id:"c6",className:"circle row-2 c-rectright click-zone",onClick:function(){return c("discord chat")},style:{backgroundColor:"coral"}},a.a.createElement("span",{className:"roomName"},"Not on the list? Get in line!")),a.a.createElement("div",{id:"c8",className:"circle row-5 c-center-right",style:{backgroundColor:"aquamarine"}},a.a.createElement("span",{className:"roomName"},"Live Cam")),a.a.createElement("div",{id:"c9",className:"circle row-6 c-rectleft click-zone",onClick:function(){return c("loft.radio")},style:{backgroundColor:"sienna"}},a.a.createElement("span",{className:"roomName"},"Enter VR")),a.a.createElement("div",{id:"c11",className:"circle row-3 c-center-left"},a.a.createElement("span",{className:"roomName"},"Join the call")),a.a.createElement("div",{id:"c12",className:"circle row-4 c-center click-zone",onClick:function(){return c("calendar")}},a.a.createElement("span",{className:"roomName"},"Livestream")))))),a.a.createElement(o.MobileView,null,a.a.createElement(P,null,a.a.createElement(T,null,"Welcome to"," ",a.a.createElement("a",{href:"https://interspace.chat",target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none"}},"interspace.chat")),a.a.createElement(B,null,a.a.createElement("p",null," Click below to enter the videochat"),a.a.createElement("a",{href:"https://portal.interspace.chat"},"or open a new room")),a.a.createElement(J,null,a.a.createElement(v,{roomName:"capsule1"}),a.a.createElement(v,{roomName:"capsule2"})),a.a.createElement(N,null))))},V=t(5),M=t(10),G=t(16);var X=function(e){var n=e.backgroundColor;return a.a.createElement("iframe",{title:"Interspace loft.radio",src:"https://loft.radio/",style:{height:"100%",width:"100%",border:"0px",backgroundColor:"".concat(n)}})};var H=function(){var e=Object(r.useState)("690315812002988361"),n=Object(s.a)(e,2),t=n[0],c=n[1],l=Object(r.useContext)(p).currentFloatingSpaces;return Object(r.useEffect)((function(){return l.indexOf("capsule1")>-1?c("692864138447421530"):l.indexOf("capsule2")>-1?c("692864277714829392"):c("690315812002988361"),console.log(t)}),[l,t]),a.a.createElement("iframe",{src:"https://titanembeds.com/embed/690315811293888778?css=85&defaultchannel=".concat(t,"&theme=DiscordDark"),width:"100%",height:"100%",frameBorder:"0",title:"discord chat"})};var Q=function(){return a.a.createElement("iframe",{src:"https://calendar.google.com/calendar/b/1/embed?height=400&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FVienna&src=N3RtbnFxamZtdnB2dGIyNTdycDNlNDkxbmtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=aWo1cmVzcGM2bHFpN2Y5ZWVkYmcxZWlkbnNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=NDgzY3RzbjZkZzIydWp0NW9uczlvOHBmcHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=bDRxbGtzZDgyZDJhZzFia2ljOHB1NDRxbGdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23000000&color=%234285F4&color=%238E24AA&color=%23F4511E&mode=AGENDA",width:"100%",height:"100%",frameBorder:"0",scrolling:"no",title:"calendar"})},U=window.JitsiMeetExternalAPI;function q(){var e=Object(i.a)(["\n  min-height: 20px;\n  max-width: 100px;\n  color: black;\n  align-self: flex-end;\n  margin-top: 15px;\n"]);return q=function(){return e},e}function K(){var e=Object(i.a)(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n"]);return K=function(){return e},e}var $={jitsi:{title:"Videochat",component:function(e){var n=e.width,t=e.height,c=e.roomData,l=Object(r.useRef)(null);return Object(r.useEffect)((function(){var e={roomName:c.roomName,width:"100%",height:"100%",parentNode:l.current,interfaceConfigOverwrite:{defaultLanguage:"de",TOOLBAR_ALWAYS_VISIBLE:"true",INITIAL_TOOLBAR_TIMEOUT:2e5,TOOLBAR_BUTTONS:["microphone","camera","closedcaptions","desktop","fullscreen","fodeviceselection","hangup","profile","info","recording","livestreaming","etherpad","sharedvideo","settings","raisehand","videoquality","filmstrip","invite","feedback","stats","shortcuts","tileview","download","help","mute-everyone"]}},n=new U(c.domain,e);return function(){n.dispose()}}),[c,n,t]),a.a.createElement("div",{ref:l,style:{height:"100%"}})}},chat:{title:"chat",component:H}},ee=u.a.div(K()),ne=u.a.button(q()),te=function(e){var n=e.space,t=Object(r.useContext)(p),c=t.currentFloatingSpaces,l=t.addFloatingSpace,o=d[n],i=Object.keys($).filter((function(e){return Object.keys(o).includes(e)})),u=Object(r.useState)(i[0]),m=Object(s.a)(u,1)[0];if(0===i.length)return a.a.createElement("div",null,"Unknown room");var f=o[m],h=$[m].component;return a.a.createElement(ee,null,a.a.createElement(h,{roomData:f}),-1===c.indexOf("discord chat")?a.a.createElement(ne,{onClick:function(){return l("discord chat")}},"Open Chat"):null)};function re(){var e=Object(i.a)(['\n  opacity: 0.7;\n  cursor: pointer;\n  &:hover {\n    opacity: 1;\n  }\n  &::before {\n    content: "\xd7"; // here is your X(cross) sign.\n    color: #fff;\n    font-family: Arial, sans-serif;\n    font-weight: bold;\n    font-size: 30px;\n  }\n']);return re=function(){return e},e}function ae(){var e=Object(i.a)(["\n  width: 100%;\n  flex: 1;\n"]);return ae=function(){return e},e}function ce(){var e=Object(i.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n"]);return ce=function(){return e},e}function le(){var e=Object(i.a)(["\n  margin: 0.5rem;\n"]);return le=function(){return e},e}function oe(){var e=Object(i.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return oe=function(){return e},e}var ie=window.innerWidth/2,ue=window.innerHeight/2,se=u.a.div(oe()),me=u.a.div(le()),de=u.a.div(ce()),fe=u.a.div(ae()),pe={padding:"15px",paddingTop:"0px",backgroundColor:"#36393ecc",borderRadius:"10px",cursor:"all-scroll",pointerEvents:"all",boxShadow:"0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)","&:active iframe":{pointerEvents:"none"}},he=u.a.div(re());function be(e,n){return Object(M.a)({},e,Object(V.a)({},n.key,n.value))}var ge=function(){var e=Object(r.useContext)(p),n=e.currentFloatingSpaces,t=e.closeFloatingSpace,c=Object(r.useReducer)(be,{}),l=Object(s.a)(c,2),o=l[0],i=l[1],u=Object.values(o).reduce((function(e,n){return Math.max(e,n)}),1);Object(r.useEffect)((function(){var e=u;n.forEach((function(n){o[n]||i({key:n,value:++e})}))}),[n,u,o]);var m=function(e){var n=20;return("discord chat"===e||"calendar"===e)&&(n=ie),n},d=function(e){var n=40;return"discord chat"===e?n=40:"calendar"===e&&(n=ue/2),n};return n.map((function(e){return a.a.createElement(G.a,{key:e,default:{x:m(e),y:d(e),width:ie-20,height:ue},style:Object(M.a)({},pe,{zIndex:o[e]||1}),onDragStart:function(){return function(e){i({key:e,value:u+1})}(e)}},a.a.createElement(de,null,a.a.createElement(se,null,a.a.createElement(me,{onClick:function(){return t(e)}},a.a.createElement(he,null)),a.a.createElement(me,null,e),a.a.createElement(me,null)),a.a.createElement(fe,null,function(e){return"loft.radio"===e?a.a.createElement(X,null):f.indexOf(e)>-1?a.a.createElement(te,{space:e}):"discord chat"===e?a.a.createElement(H,null):"calendar"===e?a.a.createElement(Q,null):null===e?null:void 0}(e))))}))},ve=Object(r.createContext)([{},function(){}]),Ee=function(e){var n=Object(r.useState)("Fellow Spacer"),t=Object(s.a)(n,2),c=t[0],l=t[1];return a.a.createElement(ve.Provider,{value:{user:c,setUsername:l}},e.children)},xe=Object(r.createContext)([{},function(){}]),Oe=function(e){var n=Object(r.useState)(""),t=Object(s.a)(n,2),c=t[0],l=t[1];return a.a.createElement(xe.Provider,{value:{currentHouse:c,setHouse:l}},e.children)},ke=function(e){return a.a.createElement(Ee,null,a.a.createElement(Oe,null,a.a.createElement(h,null,e.children)))},je=t(6),we=t.n(je),ye=t(19),Ne=t.n(ye),Ce=t(20),Se=t.n(Ce);function _e(){var e=Object(i.a)(["\n  list-style-type: none;\n  padding: 1rem;\n  display: grid;\n  grid-template-columns: auto auto;\n  align-items: center;\n  grid-gap: 0.5rem;\n"]);return _e=function(){return e},e}function Fe(){var e=Object(i.a)(["\n  list-style-type: none;\n  padding: 1rem;\n"]);return Fe=function(){return e},e}function Ze(){var e=Object(i.a)(["\n  text-align: left;\n\n  .Collapsible__trigger {\n    color: black;\n    background-color: whitesmoke;\n    cursor: pointer;\n    padding: 0.2rem;\n    :hover {\n      background-color: #00ffbf;\n    }\n  }\n  .Collapsible__contentOuter {\n    max-width: 300px;\n    background-color: #333;\n\n    :hover {\n      .Collapsible__contentInner {\n      }\n    }\n  }\n  .Collapsible__contentInner {\n    padding: 0.5rem;\n\n    a {\n      color: #00ffbf;\n    }\n  }\n"]);return Ze=function(){return e},e}var Ae=u.a.nav(Ze()),Ie=u.a.li(Fe()),ze=u.a.li(_e()),Te=function(){return a.a.createElement(Ae,null,a.a.createElement(we.a,{trigger:"Credits"},a.a.createElement("p",null,"Art used:"),a.a.createElement("ul",null,a.a.createElement(Ie,null,'"Metatron Menu" forked from'," ",a.a.createElement("a",{href:"https://github.com/MGrudule/metatron",target:"_blank",rel:"noopener noreferrer"},"@MGrudule")," "),a.a.createElement(Ie,null,'"Space Image" by'," ",a.a.createElement("a",{href:"https://www.pexels.com/photo/cluster-of-stars-1341279/",target:"_blank",rel:"noopener noreferrer"},"Kai Pilger from Pexels")," ")),a.a.createElement("hr",null),a.a.createElement("p",null,"Tech used:"),a.a.createElement("ul",null,a.a.createElement(ze,null,a.a.createElement("a",{href:"https://meet.jit.si",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("img",{src:Se.a,width:"30px",alt:"Jitsi logo"})),a.a.createElement("a",{href:"https://meet.jit.si",target:"_blank",rel:"noopener noreferrer"},"Video Conferencing - JitSi Open Source")),a.a.createElement(ze,null,a.a.createElement("a",{href:"https://titanembeds.com",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("img",{src:Ne.a,width:"30px",alt:"Titanembeds logo"})),a.a.createElement("a",{href:"https://titanembeds.com",target:"_blank",rel:"noopener noreferrer"},"Chat integration - Titan Embeds"))),a.a.createElement("hr",null),a.a.createElement("ul",null,a.a.createElement(Ie,null,"Forked with"," ",a.a.createElement("span",{role:"img","aria-label":"heart"},"\ud83d\udc9d")," ","from"," ",a.a.createElement("a",{href:"https://github.com/interspacechat",target:"_blank",rel:"noopener noreferrer"},"interspace.chat")))))};function De(){var e=Object(i.a)(["\n  list-style-type: none;\n  padding: 1rem;\n"]);return De=function(){return e},e}function We(){var e=Object(i.a)(["\n  text-align: left;\n\n  .Collapsible__trigger {\n    color: black;\n    background-color: whitesmoke;\n    cursor: pointer;\n    padding: 0.2rem;\n    :hover {\n      background-color: #00ffbf;\n    }\n  }\n  .Collapsible__contentOuter {\n    max-width: 300px;\n    background-color: #333;\n\n    :hover {\n      .Collapsible__contentInner {\n      }\n    }\n  }\n  .Collapsible__contentInner {\n    padding: 0.5rem;\n\n    a {\n      color: #00ffbf;\n    }\n  }\n"]);return We=function(){return e},e}var Be=u.a.nav(We()),Ye=u.a.li(De()),Le=function(){return a.a.createElement(Be,null,a.a.createElement(we.a,{trigger:"Help"},a.a.createElement("p",null,"General usage:"),a.a.createElement("ul",null,a.a.createElement(Ye,null,"This website is making it easy for users to meet in the same rooms to have a video call. ",a.a.createElement("br",null),"We use it for conferences and gatherings"," ")),a.a.createElement("p",null,"Textchat:"),a.a.createElement("ul",null,a.a.createElement(Ye,null,"The text chat can be used by registering on our"," ",a.a.createElement("a",{href:"https://discord.gg/YStg9p9",target:"_blank",rel:"noopener noreferrer"},"Discord Server"))),a.a.createElement("hr",null),a.a.createElement("p",null,"Privacy:"),a.a.createElement("ul",null,a.a.createElement(Ye,null,"Private Server"),a.a.createElement(Ye,null,"Fully end to end encrypted"),a.a.createElement(Ye,null,"Please don't write sensitive data into the chats."),a.a.createElement(Ye,null,"Please adhere to a general code of conduct or risk banning."))))};function Pe(){var e=Object(i.a)(["\n  display: flex;\n  width: 100px;\n  text-decoration-line: none;\n  padding-bottom: 2rem;\n"]);return Pe=function(){return e},e}function Je(){var e=Object(i.a)(["\n  align-self: flex-end;\n  margin: 0;\n  font-size: 18px;\n"]);return Je=function(){return e},e}function Re(){var e=Object(i.a)(["\n  position: fixed;\n  top: 0px;\n  left: 20px;\n  display: grid;\n  grid-gap: 0.2rem;\n  grid-template-rows: auto auto;\n  padding: 1rem;\n  justify-items: start;\n\n  :hover {\n    opacity: 1;\n  }\n"]);return Re=function(){return e},e}var Ve=u.a.div(Re()),Me=u.a.h2(Je()),Ge=u.a.a(Pe()),Xe=function(){return a.a.createElement(Ve,null,a.a.createElement(Ge,{href:"/"},a.a.createElement(Me,null,"Solarpunk VR Party")),a.a.createElement(Le,null),a.a.createElement(Te,null))};var He=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(ke,null,a.a.createElement(Oe,null,a.a.createElement(g,null,a.a.createElement(o.BrowserView,null,a.a.createElement(Xe,null)),a.a.createElement(R,null))),a.a.createElement(ge,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(He,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.c7eea6b7.chunk.js.map