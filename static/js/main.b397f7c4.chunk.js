(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),l=c(16),s=c.n(l),a=(c(22),c(4)),o=c(10),j=c(2),r=(c(23),c(0));function u(e){var t=Object(n.useState)(20),c=Object(a.a)(t,2),i=c[0],l=c[1],s=Object(n.useState)(""),o=Object(a.a)(s,2),u=o[0],b=o[1],d=Object(n.useState)(""),h=Object(a.a)(d,2),O=h[0],p=h[1],x=Object(n.useState)(""),y=Object(a.a)(x,2),v=y[0],f=y[1],m=Object(j.e)();Object(n.useEffect)((function(){i===e.length&&u===e.difficulty&&O===e.type&&v===e.category||(e.length(i),e.category(v),e.type(O),e.difficulty(u))}));return Object(r.jsx)("div",{className:"main-component",children:Object(r.jsxs)("form",{onSubmit:function(t){t.preventDefault();var c=document.getElementById("category"),n=c.options[c.selectedIndex].text;e.length(i),e.difficulty(u),e.type(O),e.category(v),e.categoryText(n),e.onClick(),m.push("/startQuizz")},onInput:function(){var e=document.getElementById("output"),t=document.getElementById("length");e.value=Math.floor(t.value),l(e.value)},onChange:function(){var e=document.getElementById("category").value,t=document.getElementById("difficulty").value,c=document.getElementById("type").value,n=document.getElementById("type");""!==e&&""!==t&&(n.disabled=!0),f(e),b(t),p(c)},children:[Object(r.jsxs)("label",{htmlFor:"length",className:"length",children:[Object(r.jsx)("p",{children:"Question Length"}),Object(r.jsx)("output",{id:"output",name:"questionLength",htmlFor:"length",children:i}),Object(r.jsx)("input",{id:"length",type:"range",min:"10",max:"20",step:"0.1"})]}),Object(r.jsxs)("label",{htmlFor:"category",className:"select",children:[Object(r.jsx)("p",{children:"Select Category"}),Object(r.jsxs)("select",{name:"category",id:"category",children:[Object(r.jsx)("option",{value:"",children:"Any Category"}),Object(r.jsx)("option",{value:"9",children:"General Knowledge"}),Object(r.jsx)("option",{value:"10",children:"Entertainment: Books"}),Object(r.jsx)("option",{value:"11",children:"Entertainment: Film"}),Object(r.jsx)("option",{value:"12",children:"Entertainment: Music"}),Object(r.jsx)("option",{value:"13",children:"Entertainment: Musicals & Theatres"}),Object(r.jsx)("option",{value:"14",children:"Entertainment: Television"}),Object(r.jsx)("option",{value:"15",children:"Entertainment: Video Games"}),Object(r.jsx)("option",{value:"16",children:"Entertainment: Board Games"}),Object(r.jsx)("option",{value:"17",children:"Science & Nature "}),Object(r.jsx)("option",{value:"18",children:"Science: Computers"}),Object(r.jsx)("option",{value:"19",children:"Science: Mathematicse"}),Object(r.jsx)("option",{value:"20",children:"Mythology"}),Object(r.jsx)("option",{value:"21",children:"Sports"}),Object(r.jsx)("option",{value:"22",children:"Geography"}),Object(r.jsx)("option",{value:"23",children:"History"}),Object(r.jsx)("option",{value:"24",children:"Politics"}),Object(r.jsx)("option",{value:"25",children:"Art"}),Object(r.jsx)("option",{value:"26",children:"Celebrities"}),Object(r.jsx)("option",{value:"27",children:"Animals"}),Object(r.jsx)("option",{value:"28",children:"Vehicles"}),Object(r.jsx)("option",{value:"29",children:"Entertainment: Comics"}),Object(r.jsx)("option",{value:"30",children:"Science: Gadgets"}),Object(r.jsx)("option",{value:"31",children:"Entertainment: Japanese Anime & Manga"}),Object(r.jsx)("option",{value:"32",children:"Entertainment: Cartoon & Animations"})]})]}),Object(r.jsxs)("label",{htmlFor:"category",children:[Object(r.jsx)("p",{children:"Select Difficulty"}),Object(r.jsxs)("select",{name:"category",id:"difficulty",children:[Object(r.jsx)("option",{value:"",children:"Any Difficulty"}),Object(r.jsx)("option",{value:"easy",children:"Easy"}),Object(r.jsx)("option",{value:"medium",children:"Medium"}),Object(r.jsx)("option",{value:"hard",children:"Hard"})]})]}),Object(r.jsxs)("label",{htmlFor:"category",children:[Object(r.jsx)("p",{children:"Select Type"}),Object(r.jsxs)("select",{name:"category",id:"type",children:[Object(r.jsx)("option",{value:"",children:"Any Type"}),Object(r.jsx)("option",{value:"multiple",children:"Multiple Choice"}),Object(r.jsx)("option",{value:"boolean",children:"True / False"})]})]}),Object(r.jsx)("button",{children:"Submit"})]})})}c(30);function b(e){var t=e.data,c=e.categoryTxt,i=Object(n.useState)(0),l=Object(a.a)(i,2),s=l[0],o=l[1],u=Object(n.useState)(),b=Object(a.a)(u,2),d=b[0],h=b[1],O=Object(n.useState)([]),p=Object(a.a)(O,2),x=p[0],y=p[1],v=Object(n.useState)(0),f=Object(a.a)(v,2),m=f[0],g=f[1],S=Object(n.useState)(!1),C=Object(a.a)(S,2),E=C[0],T=C[1],k=Object(n.useState)(1),A=Object(a.a)(k,2),B=A[0],F=A[1],I=Object(n.useRef)();I.current=s;var M=Object(j.e)(),N=[],w=function(){h(t[s].question),(N=[]).push(t[s].correct_answer),t[s].incorrect_answers.map((function(e){return N.push(e)})),function(e){for(var t,c=e.length;0!==c;){t=Math.floor(Math.random()*c),c--;var n=[e[t],e[c]];e[c]=n[0],e[t]=n[1]}}(N),y(null),y(N)};Object(n.useEffect)((function(){t||(t=e.data),t&&(t[s].question!==d&&w(),s!==I.current&&o(I.score),e.categoryTxt!==c&&(c=e.categoryText),s<=e.length&&q())}),[t,s,d,w,c]);var z=function(e){e.target.value===t[s].correct_answer&&g(m+1)},q=function(){B===e.length&&T(!0)};return Object(r.jsx)("div",{className:"questions",children:!1===E?Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),F(B+1),o(s+1),w()},onClick:z,children:[Object(r.jsx)("h1",{children:"Quizz"}),Object(r.jsxs)("div",{className:"score",children:[Object(r.jsxs)("p",{children:["Question: ",B,"/",e.length]}),Object(r.jsxs)("p",{children:["Correct Answers: ",m]})]}),Object(r.jsxs)("div",{className:"chosenOptions",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"Length:"}),Object(r.jsx)("p",{children:e.length})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"Difficulty:"}),Object(r.jsx)("p",{children:""===e.difficulty?"Any Difficulty":e.difficulty})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"Type:"}),Object(r.jsx)("p",{children:""===e.type?"Any Type":e.type})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"Category:"}),Object(r.jsx)("p",{children:""===e.category?"Any Category":c})]})]}),Object(r.jsx)("hr",{}),Object(r.jsx)("div",{className:"question",children:Object(r.jsx)("p",{children:d})}),t?"multiple"!==t[s].type?Object(r.jsxs)("div",{className:"answers",children:[Object(r.jsx)("button",{onClick:z,value:x[0],children:x[0]}),Object(r.jsx)("button",{onClick:z,value:x[1],children:x[1]})]}):Object(r.jsxs)("div",{className:"answers",children:[Object(r.jsx)("button",{onClick:z,value:x[0],children:x[0]}),Object(r.jsx)("button",{onClick:z,value:x[1],children:x[1]}),Object(r.jsx)("button",{onClick:z,value:x[2],children:x[2]}),Object(r.jsx)("button",{onClick:z,value:x[3],children:x[3]})]}):"loading.."]}):Object(r.jsxs)("div",{className:"finished",children:[Object(r.jsxs)("h3",{children:["Congrats your score is ",m,"/",e.length]}),Object(r.jsx)("button",{onClick:function(){M.push("/")},children:"Try Again"})]})})}c(31);var d=function(){var e=Object(n.useState)(null),t=Object(a.a)(e,2),c=t[0],i=t[1],l=Object(n.useState)(20),s=Object(a.a)(l,2),d=s[0],h=s[1],O=Object(n.useState)(""),p=Object(a.a)(O,2),x=p[0],y=p[1],v=Object(n.useState)(""),f=Object(a.a)(v,2),m=f[0],g=f[1],S=Object(n.useState)(""),C=Object(a.a)(S,2),E=C[0],T=C[1],k=Object(n.useState)(""),A=Object(a.a)(k,2),B=A[0],F=A[1],I=Object(n.useRef)();return Object(n.useEffect)((function(){I.current!==c&&i(I.current)}),[c]),Object(r.jsx)("div",{children:Object(r.jsxs)(o.a,{children:[Object(r.jsx)(j.a,{exact:!0,path:"/",children:Object(r.jsx)(u,{onClick:function(){fetch("https://opentdb.com/api.php?amount=".concat(d,"&category=").concat(E,"&difficulty=").concat(m,"&type=").concat(x)).then((function(e){return e.json()})).then((function(e){i(e.results),I.current=e.results}))},length:h,type:y,difficulty:g,category:T,categoryText:F})}),Object(r.jsx)(j.a,{path:"/startQuizz",children:Object(r.jsx)(b,{length:d,type:x,difficulty:m,category:E,data:c,categoryTxt:B})})]})})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,33)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,l=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),l(e),s(e)}))};s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(d,{})}),document.getElementById("root")),h()}},[[32,1,2]]]);
//# sourceMappingURL=main.b397f7c4.chunk.js.map