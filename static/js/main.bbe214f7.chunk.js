(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{140:function(e,t,a){e.exports=a(267)},22:function(e,t,a){e.exports={Container:"Boss01_Container__3AUP8",grid_item:"Boss01_grid_item__XBbBM",grid_item_1st:"Boss01_grid_item_1st__It9Fz",title:"Boss01_title__A3e9X",border_top:"Boss01_border_top__1-8dL",border_bottom:"Boss01_border_bottom__2es2X",line:"Boss01_line__P6oR6",grid_item_left:"Boss01_grid_item_left__2Y40X",grid_item_right:"Boss01_grid_item_right__31767"}},267:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(31),c=a.n(l),m=a(273),s=a(276),o=a(279),i=a(280),_=a(266),u=a(275),d=a(277),E=a(274),g=a(272),p=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_.a,{src:"https://udemy-images.udemy.com/course/480x270/2165164_de7e.jpg",centered:!0}),r.a.createElement(u.a,{as:"h1",textAlign:"center"},"\u65b0\u624b JS \u5730\u4e0b\u57ce"),r.a.createElement(d.a,null,r.a.createElement(d.a.Column,{textAlign:"center"},r.a.createElement(g.a,{to:"/boss01"},r.a.createElement(E.a,{primary:!0},"BOSS-01\uff1a9x9 \u4e58\u6cd5\u8868")))),r.a.createElement(d.a,null,r.a.createElement(d.a.Column,{textAlign:"center"},r.a.createElement(g.a,{to:"/boss02"},r.a.createElement(E.a,{primary:!0},"BOSS-02\uff1a\u6642\u9418")))))},h=a(278),f=a(22),b=a.n(f),v=[2,3,4,5,6,7,8,9],x=[1,2,3],y=[4,5,6,7,8,9],B=function(){return v.map(function(e){return r.a.createElement(d.a.Column,{key:e},r.a.createElement(h.a,{className:b.a.grid_item},r.a.createElement("div",{className:b.a.grid_item_left},r.a.createElement("h3",null,e),(t=e,x.map(function(e){return r.a.createElement("p",{key:e},t," x ",e," = ",t*e)}))),r.a.createElement("div",{className:b.a.grid_item_right},function(e){return y.map(function(t){return r.a.createElement("p",{key:t},e," x ",t," = ",e*t)})}(e))));var t})},N=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(d.a.Column,{textAlign:"center"},r.a.createElement(g.a,{to:"/"},r.a.createElement(E.a,{primary:!0},"Home")))),r.a.createElement(m.a,{style:{width:"1280px"},className:b.a.Container},r.a.createElement(d.a,{columns:3},r.a.createElement(d.a.Row,null,r.a.createElement(d.a.Column,null,r.a.createElement(h.a,{className:b.a.grid_item_1st},r.a.createElement("div",{className:b.a.border_top},r.a.createElement("p",null,"x"),r.a.createElement("div",{className:b.a.line}),r.a.createElement("p",null,"x")),r.a.createElement("div",{className:b.a.title},r.a.createElement("h1",null,"\u4e5d\u4e5d\u4e58\u6cd5\u8868"),r.a.createElement("h2",null,"MULTIPLICATION CHART")),r.a.createElement("div",{className:b.a.border_bottom},r.a.createElement("p",null,"x"),r.a.createElement("div",{className:b.a.line}),r.a.createElement("p",null,"x")))),B()))))},k=a(126),w=a(127),C=a(130),D=a(128),O=a(131),A=a(33),S=a.n(A),j=function(e){function t(){var e,a;Object(k.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(C.a)(this,(e=Object(D.a)(t)).call.apply(e,[this].concat(r)))).state={secDeg:null,minDeg:null,hourDeg:null},a.setTime=function(){var e=new Date,t=e.getSeconds(),n=6*t+180,r=e.getMinutes(),l=6*r+.1*t+180,c=e.getHours()%12*30+.5*r+270;a.setState({secDeg:n,minDeg:l,hourDeg:c})},a}return Object(O.a)(t,e),Object(w.a)(t,[{key:"componentDidMount",value:function(){setInterval(this.setTime,1e3)}},{key:"render",value:function(){return r.a.createElement("div",{className:S.a.clock},r.a.createElement("div",{className:S.a.clock_face},r.a.createElement("div",{className:S.a.hand_hour,style:{transform:"rotate(".concat(this.state.hourDeg,"deg)")}}),r.a.createElement("div",{className:S.a.hand_min,style:{transform:"rotate(".concat(this.state.minDeg,"deg)")}}),r.a.createElement("div",{className:S.a.hand_sec,style:{transform:"rotate(".concat(this.state.secDeg,"deg)")}})))}}]),t}(r.a.Component),T=function(){return r.a.createElement(m.a,{style:{padding:"4rem 0",width:"1280px"}},r.a.createElement(s.a,null,r.a.createElement(o.a,null,r.a.createElement(i.a,{path:"/",exact:!0,component:p}),r.a.createElement(i.a,{path:"/boss01",component:N}),r.a.createElement(i.a,{path:"/boss02",component:j}))))};c.a.render(r.a.createElement(T,null),document.querySelector("#root"))},33:function(e,t,a){e.exports={clock:"Boss02_clock__1YcEO",clock_face:"Boss02_clock_face__26X8_",hand_hour:"Boss02_hand_hour__1TozQ",hand_min:"Boss02_hand_min__2eHvO",hand_sec:"Boss02_hand_sec__3G_Xf"}}},[[140,2,1]]]);
//# sourceMappingURL=main.bbe214f7.chunk.js.map