(this["webpackJsonptrail-effect"]=this["webpackJsonptrail-effect"]||[]).push([[0],{10:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),r=a.n(n),s=a(11),i=a.n(s),o=a(3),l=a(5),j=a(9),m=a(2);a(10);function b(e){var t=e.fullMenuVisible,a=Object(n.useRef)(),r=Object(m.c)({x:t?0:-100,opacity:t?1:0,from:{opacity:0,x:-100},ref:a}),s=r.opacity,i=r.x,j=Object(n.useRef)(),b=Object(m.d)(7,{ref:j,x:t?0:100,config:{mass:5,tension:2e3,friction:200},duration:2e4,from:{x:100}});return Object(m.b)(t?[a,j]:[j,a],[0,.15]),Object(c.jsx)(m.a.nav,{className:"menu menu--full grim",style:{opacity:s,transform:i.interpolate((function(e){return"translateY(".concat(e,"%)")}))},children:b.map((function(e,t){var a=e.x,n=Object(l.a)(e,["x"]);return t%2===1?Object(c.jsx)("div",{className:"menu__item__container item-".concat(t+1),children:Object(c.jsx)(m.a.div,{className:"menu__item item-bg--".concat(t+1),style:Object(o.a)(Object(o.a)({},n),{},{left:a.interpolate((function(e){return"".concat(e,"%")}))})},t)}):Object(c.jsx)("div",{className:"menu__item__container item-".concat(t+1),children:Object(c.jsx)(m.a.div,{className:"menu__item item-bg--".concat(t+1),style:Object(o.a)(Object(o.a)({},n),{},{bottom:a.interpolate((function(e){return"".concat(e,"%")}))}),children:1===t?"BUZZWORD":""},t)})}))})}var u=[a.p+"static/media/nature1.5bc4c972.jpg",a.p+"static/media/nature2.cb6c8ed0.jpg",a.p+"static/media/nature3.610380c5.jpg",a.p+"static/media/nature4.9a40478d.jpg",a.p+"static/media/nature5.389bc817.jpg"];function d(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),a=t[0],r=t[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b,{fullMenuVisible:a}),Object(c.jsxs)("div",{className:"frame",children:[Object(c.jsx)("h1",{className:"frame__title",children:"Front end experimentation"}),Object(c.jsx)("div",{className:"frame__links",children:Object(c.jsx)("button",{onClick:function(){return r(!a)},className:"frame__links__button",children:"+ Menu"})}),Object(c.jsxs)("div",{className:"frame__nav",children:[Object(c.jsx)("a",{className:"frame__link",href:"https://isengupt.github.io/fiber-website/",children:"Previous"}),Object(c.jsx)("a",{className:"frame__link",href:"https://tympanus.net/codrops/?p=45441",children:"Resume"}),Object(c.jsx)("a",{className:"frame__link",href:"https://github.com/isengupt/trail-effect",children:"GitHub"})]})]}),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(x,{word:"NATURE",images:u,translate:-150}),Object(c.jsx)(x,{word:"SCIENCE",images:u}),Object(c.jsx)(x,{word:"EARTH",images:u,translate:-100,reverse:!0})]})]})}var x=function(e){var t=e.word,a=e.translate,r=e.reverse,s=e.images,i=Object(n.useState)(!1),b=Object(j.a)(i,2),u=b[0],d=b[1],x=Object(n.useRef)(),f={xy:u?[0,0]:[75,75],opacity:u?1:0,height:u?"150px":"0px",config:{mass:5,tension:2e3,friction:200},reverse:!u,from:{xy:[75,75],opacity:0,height:"0px"},ref:x},p=Object(m.c)(f),O=p.opacity,_=p.xy,h=p.height,g=Object(n.useRef)(),v=Object(m.d)(t.length,{ref:g,x:u?0:150,config:{mass:5,tension:2e3,friction:200},reverse:!u,from:{x:150}}),y=Object(n.useRef)(),N=Object(m.d)(4,{ref:y,xy:u?[0,0]:[75,75],opacity:u?1:0,config:{mass:5,tension:2e3,friction:200},reverse:!u,from:{xy:[75,75],opacity:0}}),w=Object(n.useRef)(),k={arrowX:u?0:-75,arrowOp:u?1:0,config:{mass:5,tension:2e3,friction:200},reverse:!u,from:{arrowX:-75,arrowOp:0},ref:w},M=Object(m.c)(k),R=M.arrowOp,E=M.arrowX;return Object(m.b)(u?[g,x,y,w]:[w,y,x,g],[0,.15,.3,.45]),r?Object(c.jsxs)("div",{className:"main__container",onMouseEnter:function(){return d(!0)},onMouseLeave:function(){return d(!1)},style:{transform:a?"translateX(".concat(a,"px)"):"translateX(0px)"},children:[Object(c.jsx)(m.a.div,{style:{transform:E.interpolate((function(e){return"translate3d(".concat(e,"px,0,0)")})),opacity:R},className:"icon__container",children:Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:Object(c.jsx)("path",{"fill-rule":"evenodd",d:"M10.78 19.03a.75.75 0 01-1.06 0l-6.25-6.25a.75.75 0 010-1.06l6.25-6.25a.75.75 0 111.06 1.06L5.81 11.5h14.44a.75.75 0 010 1.5H5.81l4.97 4.97a.75.75 0 010 1.06z"})})}),Object(c.jsxs)("div",{className:"grid__images",children:[Object(c.jsx)("div",{className:"big__image__container",children:Object(c.jsx)(m.a.div,{style:{backgroundImage:"url(".concat(s[0],")"),height:h,transform:_.interpolate((function(e,t){return"translate3d(".concat(e,"px,").concat(t,"px,0)")})),opacity:O},className:"big__image"})}),Object(c.jsx)("div",{className:"small__image__container",children:N.map((function(e,t){var a=e.xy,n=Object(l.a)(e,["xy"]);return Object(c.jsx)(m.a.div,{className:"small__image",style:Object(o.a)(Object(o.a)({},n),{},{backgroundImage:"url(".concat(s[t+1],")"),transform:a.interpolate((function(e,t){return"translate3d(".concat(e,"px,").concat(t,"px,0)")}))})},t)}))})]}),Object(c.jsx)("div",{className:"text__container",children:v.map((function(e,a){var n=e.x,r=Object(l.a)(e,["x"]);return Object(c.jsx)(m.a.span,{className:"trails-text",style:Object(o.a)(Object(o.a)({},r),{},{transform:n.interpolate((function(e){return"translate3d(".concat(e,"px,0,0)")}))}),children:t[a]},a)}))})]}):Object(c.jsxs)("div",{className:"main__container",onMouseEnter:function(){return d(!0)},onMouseLeave:function(){return d(!1)},style:{transform:a?"translateX(".concat(a,"px)"):"translateX(0px)"},children:[Object(c.jsx)("div",{className:"text__container",children:v.map((function(e,a){var n=e.x,r=Object(l.a)(e,["x"]);return Object(c.jsx)(m.a.span,{className:"trails-text",style:Object(o.a)(Object(o.a)({},r),{},{transform:n.interpolate((function(e){return"translate3d(".concat(e,"px,0,0)")}))}),children:t[a]},a)}))}),Object(c.jsxs)("div",{className:"grid__images",children:[Object(c.jsx)("div",{className:"big__image__container",children:Object(c.jsx)(m.a.div,{style:{backgroundImage:"url(".concat(s[0],")"),height:h,transform:_.interpolate((function(e,t){return"translate3d(".concat(e,"px,").concat(t,"px,0)")})),opacity:O},className:"big__image"})}),Object(c.jsx)("div",{className:"small__image__container",children:N.map((function(e,t){var a=e.xy,n=Object(l.a)(e,["xy"]);return Object(c.jsx)(m.a.div,{className:"small__image",style:Object(o.a)(Object(o.a)({},n),{},{backgroundImage:"url(".concat(s[t+1],")"),transform:a.interpolate((function(e,t){return"translate3d(".concat(e,"px,").concat(t,"px,0)")}))})},t)}))})]}),Object(c.jsx)(m.a.div,{style:{transform:E.interpolate((function(e){return"translate3d(".concat(e,"px,0,0)")})),opacity:R},className:"icon__container",children:Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:Object(c.jsx)("path",{"fill-rule":"evenodd",d:"M13.22 19.03a.75.75 0 001.06 0l6.25-6.25a.75.75 0 000-1.06l-6.25-6.25a.75.75 0 10-1.06 1.06l4.97 4.97H3.75a.75.75 0 000 1.5h14.44l-4.97 4.97a.75.75 0 000 1.06z"})})})]})};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(d,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.85284ff0.chunk.js.map