(this["webpackJsonpcomics-test"]=this["webpackJsonpcomics-test"]||[]).push([[0],{23:function(t,e,n){},24:function(t,e,n){},45:function(t,e,n){},47:function(t,e,n){},48:function(t,e,n){},49:function(t,e,n){},50:function(t,e,n){},51:function(t,e,n){},52:function(t,e,n){},53:function(t,e,n){},54:function(t,e,n){},55:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),a=n(15),o=n.n(a),r=(n(23),n(24),n(18)),s=n(3),l=n(16),u=n.n(l),d=n(17),j=n.n(d),b=(n(45),n(0)),m=function(t){var e=t.comic;return Object(b.jsxs)("div",{className:"ComicDetails",children:[Object(b.jsx)("h1",{className:"ComicDetails_title",children:e.title}),Object(b.jsxs)("div",{className:"ComicDetails_details",children:[Object(b.jsx)("img",{src:"".concat(e.thumbnail.path,"/portrait_xlarge.").concat(e.thumbnail.extension),width:"150",height:"225",alt:"Not found"}),Object(b.jsx)("p",{children:e.description})]})]})},h=(n(47),function(t){var e=t.sendEmail,n=Object(c.useState)(""),i=Object(s.a)(n,2),a=i[0],o=i[1];return Object(b.jsxs)("div",{className:"EmailForm",children:[Object(b.jsx)("p",{children:"Digite o seu email:"}),Object(b.jsx)("input",{className:"EmailForm_input",onChange:function(t){return o(t.target.value)}}),Object(b.jsx)("button",{className:"Main_button",onClick:function(){return e(a)},children:"Enviar"})]})}),f=(n(48),function(t){return t.show?Object(b.jsx)("div",{className:"Backdrop",onClick:t.clicked}):null}),O=(n(49),function(t){var e=t.show,n=t.children,c=t.modalClosed;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(f,{show:e,clicked:c}),Object(b.jsx)("div",{className:"Modal",style:{transform:e?"translateY(0)":"translateY(-100vh)",opacity:e?"1":"0"},children:n})]})}),x=i.a.memo(O,(function(t,e){return e.show===t.show&&e.children===t.children})),g=(n(50),function(t){var e=t.currentEntry,n=t.totalEntries,c=t.numberPerPage,i=t.changePage;return console.log("Pagintor rendered"),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{className:"Paginator_button",onClick:function(){return i(e-c)},disabled:0===e,children:"Anterior"}),Object(b.jsx)("span",{className:"Paginator_text",children:"Mostrando ".concat(e,"-").concat(e+c," de ").concat(n)}),Object(b.jsx)("button",{className:"Paginator_button",onClick:function(){return i(e+c)},children:"Pr\xf3xima"})]})}),p=i.a.memo(g,(function(t,e){return e.currentEntry===t.currentEntry&&t.totalEntries===e.totalEntries})),v=(n(51),function(){return Object(b.jsx)("div",{className:"Loader",children:"Loading..."})}),C=(n(52),function(t){var e=t.comic,n=t.comicClicked,c=t.comicSelected;return Object(b.jsxs)("div",{className:"Comic",onClick:function(){return n(e)},children:[Object(b.jsx)("img",{src:"".concat(e.thumbnail.path,"/portrait_xlarge.").concat(e.thumbnail.extension),width:"150",height:"225",alt:"Not found"}),Object(b.jsx)("h3",{children:e.title}),Object(b.jsx)("div",{className:"Comic_select_email",children:Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"checkbox",onClick:function(t){return c(t,e)}}),"Selecionar para envio via email"]})})]})}),N=(n(53),function(t){var e=t.comicList,n=t.comicClicked,c=t.comicSelected,i=t.loading,a=e.map((function(t){return Object(b.jsx)(C,{comic:t,comicClicked:n,comicSelected:c},t.id)}));return Object(b.jsx)("div",{className:"ComicList",children:i?Object(b.jsx)(v,{}):a})}),k=i.a.memo(N,(function(t,e){return e.comicList===t.comicList&&t.loading===e.loading})),_=n.p+"static/media/ironman.b1708865.jpg",S=(n(54),function(){var t=Object(c.useState)(""),e=Object(s.a)(t,2),n=e[0],i=e[1],a=Object(c.useState)([]),o=Object(s.a)(a,2),l=o[0],d=o[1],f=Object(c.useState)(null),O=Object(s.a)(f,2),g=O[0],v=O[1],C=Object(c.useState)(!1),N=Object(s.a)(C,2),S=N[0],E=N[1],P=Object(c.useState)(!1),w=Object(s.a)(P,2),y=w[0],L=w[1],M=Object(c.useState)(null),F=Object(s.a)(M,2),D=F[0],I=F[1],q=Object(c.useState)(!1),A=Object(s.a)(q,2),B=A[0],T=A[1],z=Object(c.useState)(null),H=Object(s.a)(z,2),J=H[0],Y=H[1],U=Object(c.useState)(null),G=Object(s.a)(U,2),K=G[0],Q=G[1],R=function(t){T(!0),u.a.get("".concat("https://gateway.marvel.com:443/v1/public/comics","?apikey=").concat("a604e1ad53cdd5a80cb69338cdfc660c","&orderBy=-focDate&title=").concat(n,"&offset=").concat(t)).then((function(e){var n=[];e.data.data.results.length>0?(e.data.data.results.forEach((function(t){n.push({id:t.id,title:t.title,description:t.description,thumbnail:t.thumbnail,creators:t.creators.items})})),d(n),Y({current:t,total:e.data.data.total}),Q(null)):(d([]),Q("Nenhum quadrinho com esse titulo foi encontrado."),Y(null)),v(null),T(!1)})).catch((function(){Q("Houve um problema ao chamar o servi\xe7o. Tente novamente."),v(null),T(!1)}))};return Object(b.jsxs)(b.Fragment,{children:[S?Object(b.jsx)(x,{show:S,modalClosed:function(){return E(!1)},children:Object(b.jsx)(m,{comic:D})}):null,y?Object(b.jsx)(x,{show:y,modalClosed:function(){return L(!1)},children:Object(b.jsx)(h,{sendEmail:function(t){if(L(!1),console.log(g),g.length>0){var e={to_email:t,message:g.map((function(t){return"<h1>".concat(t.title,"</h1><img src=").concat(t.thumbnail.path,"/portrait_xlarge.").concat(t.thumbnail.extension," /><p>").concat(t.description,"</p><hr>")})).reduce((function(t,e){return t.concat(e)}),"")};j.a.send("service_nolf1fu","template_7zsk2xn",e,"user_AbACusNO1Id1cs9blhC9q").then((function(t){console.log("SUCCESS!",t.status,t.text)}),(function(t){console.log("FAILED...",t)}))}}})}):null,Object(b.jsxs)("div",{className:"Main",style:{backgroundImage:"url(".concat(_,")"),backgroundSize:"cover"},children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{className:"Main_input",onChange:function(t){return i(t.target.value)},placeholder:"Pesquisa por titulo do quadrinho. Ex: Hulk."}),Object(b.jsx)("button",{className:"Main_button",onClick:function(){return R(0)},disabled:""===n.trim(),children:" Pesquisar "})]}),K?Object(b.jsx)("p",{className:"Main_text",children:K}):null,Object(b.jsx)(k,{comicList:l,comicClicked:function(t){E((function(t){return!t})),I(t)},comicSelected:function(t,e){v((function(t){var n=null===t?[]:Object(r.a)(t),c=n.findIndex((function(t){return t.id===e.id}));return-1===c?n.push(e):n.splice(c,1),console.log(n),n})),t.stopPropagation()},loading:B}),J?Object(b.jsx)(p,{currentEntry:J.current,totalEntries:J.total,numberPerPage:20,changePage:R}):null,l.length>0?Object(b.jsx)("button",{className:"Main_button Main_button_white",onClick:function(){return L(!0)},disabled:null===g||0===g.length,children:"Enviar por email"}):null]})]})});var E=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(S,{})})},P=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),i(t),a(t),o(t)}))};o.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(E,{})}),document.getElementById("root")),P()}},[[55,1,2]]]);
//# sourceMappingURL=main.7fdd4753.chunk.js.map