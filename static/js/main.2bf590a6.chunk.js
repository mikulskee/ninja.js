(this["webpackJsonpreact-interview-project"]=this["webpackJsonpreact-interview-project"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),u=a.n(c),s=a(4),l=a(5),o=a(7),i=a(6),m=a(8),b=a(1),f=function(e){var t=e.pageNumber,a=e.currentPageNumber,c=e.onChange,u=Object(n.useState)(),s=Object(b.a)(u,2),l=s[0],o=s[1],i=Object(n.useState)(),m=Object(b.a)(i,2),f=m[0],p=m[1];return Object(n.useEffect)((function(){o(t+1)}),[o,t]),Object(n.useEffect)((function(){p(a===t?"page-link button-outline":"page-link")}),[a,t]),r.a.createElement("li",{className:"page-item mr-1"},f&&r.a.createElement("button",{className:f,onClick:function(e){e.preventDefault(),c(t)}},l))},p=function(e){var t=e.currentPageNumber,a=e.totalNumberOfPages,c=e.onChange,u=Object(n.useState)([]),s=Object(b.a)(u,2),l=s[0],o=s[1];return Object(n.useEffect)((function(){var e=Array.from(Array(a).keys()).map((function(e){return r.a.createElement(f,{key:e,currentPageNumber:t,pageNumber:e,onChange:c})}));o(e)}),[t,a,c]),r.a.createElement("ul",{className:"pagination"},l.length?l:null)},O=function(e){var t=e.usersData,a=e.setUsersList,n=e.setSearchBarValue;return r.a.createElement("div",{className:"p-b-1"},r.a.createElement("input",{type:"search",className:"form-control",placeholder:"S\xf8g brugere",onChange:function(e){var r=e.target.value;if(r){var c=t.filter((function(e){return e.name1.toLowerCase().search(r.toLowerCase())>-1||e.email&&e.email.toLowerCase().search(r.toLowerCase())>-1}));a(c)}else a(t);n(r)}}))},j=function(e){var t=e.user;return r.a.createElement("li",{className:"pagination"},r.a.createElement("div",null,r.a.createElement("a",{href:t.edit_path},t.name1),r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("small",null,t.email))))},E=function(e){var t=e.children;return r.a.createElement("ul",{style:{minHeight:"350px"}},t)},g=function(e){var t=e.usersData,a=e.usersPerPage,c=Object(n.useState)(t),u=Object(b.a)(c,2),s=u[0],l=u[1],o=Object(n.useState)(),i=Object(b.a)(o,2),m=i[0],f=i[1],g=Object(n.useState)(0),h=Object(b.a)(g,2),v=h[0],d=h[1],N=Object(n.useState)(),S=Object(b.a)(N,2),y=S[0],C=S[1],w=Object(n.useState)([]),P=Object(b.a)(w,2),k=P[0],L=P[1],D=Object(n.useState)(""),B=Object(b.a)(D,2),x=B[0],J=B[1];return Object(n.useEffect)((function(){C(0===a?0:Math.ceil(s.length/a))}),[a,C,s]),Object(n.useEffect)((function(){f(v*a)}),[v,a]),Object(n.useEffect)((function(){L(s.map((function(e){return r.a.createElement(j,{key:e.per_id,user:e})})).slice(m,m+a))}),[m,a,s,L]),r.a.createElement("div",null,r.a.createElement(O,{usersData:t,setUsersList:l,setSearchBarValue:J}),x&&!k.length?r.a.createElement("p",null,'User "',x,'" does not exist'):r.a.createElement(E,null,k),r.a.createElement(p,{currentPageNumber:v,totalNumberOfPages:y,onChange:function(e){d(e)}}))},h=(a(14),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("main",{className:"container mt-3"},r.a.createElement(g,{usersData:this.props.rows,locale:"da",usersPerPage:5}))}}]),t}(n.Component)),v=JSON.parse(document.getElementById("user-data").dataset.users);u.a.render(r.a.createElement(h,{rows:v}),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.2bf590a6.chunk.js.map