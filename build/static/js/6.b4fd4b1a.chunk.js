(this["webpackJsonpgooroo-coding-test-client"]=this["webpackJsonpgooroo-coding-test-client"]||[]).push([[6],{100:function(e,t,a){e.exports=a.p+"static/media/fantasy.28bc701a.svg"},101:function(e,t,a){e.exports=a.p+"static/media/autobio.13f0461d.svg"},102:function(e,t,a){"use strict";var o=a(0);t.a=function(e,t){var a=function(a){e.current&&!e.current.contains(a.target)&&t()};Object(o.useEffect)((function(){return document.addEventListener("click",a),function(){document.removeEventListener("click",a)}}))}},105:function(e,t,a){"use strict";a.d(t,"d",(function(){return l})),a.d(t,"e",(function(){return u})),a.d(t,"c",(function(){return m})),a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return g}));var o=a(112),n=a.n(o),r=a(113),c=a(114),i=a.n(c),s=a(88),l=function(){var e=Object(r.a)(n.a.mark((function e(t,a,o,r){var c,l,u,m,p,g,d;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l="",u="",m="",console.log("getAllBooks activeCategories => ",a),a.length>0){for(u+="?categoryID=",p=0;p<a.length;p++)u+=0==p?a[p]:"_"+a[p];"Library"!==r&&(l+="&contributorID="+t),o.length>0&&(m+="&search="+o)}else"Library"!==r?(l+="?contributorID="+t,o.length>0&&(m+="&search="+o)):o.length>0&&(m+="?search="+o);return g=localStorage.getItem("authToken"),d={"Content-Type":"application/json",Authorization:g},e.next=9,i.a.get(s.a+"books/all"+u+l+m,{headers:d}).then((function(e){console.log("getAllBooks Response => ",e),c=e.data})).catch((function(e){console.log("getAllBooks error => ",e),c=e}));case 9:return e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(t,a,o,n){return e.apply(this,arguments)}}(),u=function(){var e=Object(r.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get(s.a+"books/"+t+"/details").then((function(e){console.log("getBookDetail Response => ",e),a=e.data})).catch((function(e){console.log("getBookDetail error => ",e),a=e}));case 2:return e.abrupt("return",a);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(r.a)(n.a.mark((function e(t,a){var o,r,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=localStorage.getItem("authToken"),r={"Content-Type":"application/json",Authorization:o},c=[],e.next=5,i.a.put(s.a+"/books/"+t+"/edit",a,{headers:r}).then((function(e){console.log("editBookDetails Response => ",e),c=e.data})).catch((function(e){console.log("editBookDetails error => ",e),c=e}));case 5:return e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),p=function(){var e=Object(r.a)(n.a.mark((function e(t){var a,o,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("authToken"),o={"Content-Type":"application/json",Authorization:a},r=[],e.next=5,i.a.post(s.a+"books/create",t,{headers:o}).then((function(e){console.log("createBook Response => ",e),r=e.data})).catch((function(e){console.log(e),r=e}));case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(r.a)(n.a.mark((function e(t){var a,o,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("authToken"),o={"Content-Type":"application/json",Authorization:a},r=[],console.log("deleteBook bookID => ",t),e.next=6,i.a.delete(s.a+"books/"+t+"/delete",{headers:o}).then((function(e){console.log(e),r=e.data})).catch((function(e){console.log(e),r=e}));case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},126:function(e,t,a){"use strict";var o=a(0),n=a.n(o);t.a=function(e){return n.a.createElement("div",{className:"py-4"},n.a.createElement("h3",{className:"mb-2 Poppins-Semi-Bold greyDefault"},e.title),n.a.createElement("h5",{className:"Poppins-Regular greyMedium",style:{letterSpacing:"-0.85px"}},e.subtitle))}},127:function(e,t,a){},128:function(e,t,a){e.exports=a.p+"static/media/filter-icon.30ed8361.svg"},129:function(e,t,a){e.exports=a.p+"static/media/search-icon.0c9f4dec.svg"},138:function(e,t){},140:function(e,t){},145:function(e,t,a){},146:function(e,t,a){e.exports=a.p+"static/media/edit-icon-orange.98dfd202.svg"},147:function(e,t,a){e.exports=a.p+"static/media/rubbish.ddc2c041.svg"},148:function(e,t,a){e.exports=a.p+"static/media/book-add-grey.610ad648.svg"},149:function(e,t,a){e.exports=a.p+"static/media/ink.76c6fb64.svg"},150:function(e,t,a){e.exports=a.p+"static/media/book-2.f11d32d1.svg"},151:function(e,t,a){e.exports=a.p+"static/media/publish.5b41b434.svg"},152:function(e,t,a){},154:function(e,t,a){"use strict";var o=a(94),n=a(0),r=a.n(n),c=a(34),i=a(22),s=a(88),l=(a(127),a(128)),u=a.n(l),m=a(102),p=function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),l=a[0],p=a[1],g=Object(c.c)((function(t){return"Library"===e.from?t.lib:t.mybook})),d=Object(c.b)(),f=g.activeCategories;console.log(f);var b=Object(n.useRef)();return Object(m.a)(b,(function(){l&&p(!1)})),r.a.createElement("div",{className:"custom-filter position-relative"},r.a.createElement("div",{className:"colorDefault cursorPointer normalFont d-flex align-items-center",onClick:function(){return p(!l)}},r.a.createElement("img",{alt:"filter icon",src:u.a,className:"mr-2"}),r.a.createElement("span",null,"Filter")),l&&r.a.createElement("div",{className:"itemFilter greyDefault position-absolute",ref:b},r.a.createElement("p",{className:"Poppins-Bold smallFont mb-3"},"Category"),s.b.map((function(e,t){return r.a.createElement("div",{className:"formCheck form-group form-check mt-0",key:t},r.a.createElement("input",{defaultChecked:!!f.includes(e.categoryID),type:"checkbox",value:e.categoryID,className:"form-check-input",id:"check Category"+ +t,onChange:function(){return t=e.categoryID,void d({type:i.a,categoryID:t});var t}}),r.a.createElement("label",{className:"form-check-label",htmlFor:"check Category"+t},r.a.createElement("span",null,e.categoryName)))}))))},g=a(129),d=a.n(g);t.a=function(e){console.log("ListControlSection props => ",e);var t=Object(c.c)((function(t){return"Library"===e.from?t.lib:t.mybook})),a=Object(c.b)(),s=Object(n.useState)(!1),l=Object(o.a)(s,2),u=l[0],g=l[1],f=Object(n.useState)(t.searchValue),b=Object(o.a)(f,2),h=b[0],y=b[1],v=Object(n.useRef)();Object(m.a)(v,(function(){u&&g(!1)}));return r.a.createElement("div",{className:"d-flex align-items-center px-3",style:{height:"30px"}},r.a.createElement(p,e),u&&r.a.createElement("div",{ref:v,className:"ml-auto"},r.a.createElement("input",{type:"text",className:"form-control custom-form",placeholder:"Search by title ...",spellCheck:"false",value:h,onChange:function(e){return function(e){a({type:i.c,e:e}),y(e.target.value)}(e)},style:{borderRadius:"50px",borderColor:"#f5a623",height:"36px",paddingRight:"40px"}}),r.a.createElement("div",{className:"position-absolute r-0 text-center smallFont cursorPointer buttonRounded",style:{top:"122px",width:"28px",height:"28px",right:"16px",padding:"5px 0px"},onClick:function(){return g(!1)}},r.a.createElement("img",{alt:"search",src:d.a}))),!u&&r.a.createElement("div",{className:"position-absolute r-0 text-center smallFont cursorPointer buttonRounded",style:{width:"30px",height:"30px",padding:"5px 0px"},onClick:function(){return g(!0)}},r.a.createElement("img",{alt:"search",src:d.a})))}},155:function(e,t,a){"use strict";var o=a(0),n=a.n(o),r=a(130),c=a.n(r),i=a(34),s=a(22),l=a(14),u=a(105),m=a(36),p=(a(145),a(146)),g=a.n(p),d=a(147),f=a.n(d),b=a(148),h=a.n(b),y=a(149),v=a.n(y),k=a(150),x=a.n(k),E=a(151),N=a.n(E),I=a(13),D=a(88),j=n.a.lazy((function(){return Promise.all([a.e(7),a.e(12)]).then(a.bind(null,335))})),O=function(e){console.log("BookComponent props => ",e);for(var t=Object(i.b)(),a=e||{},o=a.bookID,r=a.title,c=a.author,s=a.publisher,l=a.categoryID,u=a.contributorName,p=-1,d=0;d<D.b.length;d++)if(l==D.b[d].categoryID){p=d;break}return n.a.createElement("div",{className:"bgWhite rounded book-component",style:{boxShadow:"0px 0px 20px rgba(0,0,0,0.2)"}},e.isAddBook?n.a.createElement("div",{className:"add-book"},n.a.createElement("img",{src:h.a,height:80,className:"rounded-top",alt:"add"}),n.a.createElement("h3",{className:"Poppins-Regular greyDefault",style:{marginTop:"20px"}},"Add New Book")):n.a.createElement("div",null,n.a.createElement("div",{className:"book-image position-relative"},n.a.createElement("img",{src:D.b[p].categoryImage,className:"rounded-top",width:120,alt:e.title}),"MyBooks"===e.from&&n.a.createElement("span",{className:"d-flex align-items-center justify-content-center",style:{top:"15px",width:"30px",height:"30px",borderRadius:"50px",right:"15px"}},n.a.createElement(m.c,{to:"/my-books/edit/"+o},n.a.createElement("img",{src:g.a,height:25,alt:"edit"}))),"MyBooks"===e.from&&n.a.createElement("span",{onClick:function(){t({type:I.f})},className:"d-flex align-items-center justify-content-center",style:{top:"15px",width:"30px",height:"30px",borderRadius:"50px",right:"50px"}},n.a.createElement("img",{src:f.a,height:22,alt:"delete"})),"Library"===e.from&&n.a.createElement("span",{className:"Poppins-Regular",style:{width:"100%",bottom:"0px",fontStyle:"italic",fontSize:"11px",color:"slategray",fontWeight:"300",backgroundColor:"rgba(0,0,0,0.05)",paddingTop:"2px",paddingBottom:"2px",letterSpacing:"0.5px"}},"Contributed by: "+u)),n.a.createElement("div",{className:"p-3"},n.a.createElement("div",{className:"mb-1",style:{display:"flex",flexDirection:"row"}},n.a.createElement("img",{className:"mr-2 mt-1",src:x.a,height:16}),n.a.createElement("p",{className:"Poppins-Semi-Bold greyDefault m-0"},r+" ",n.a.createElement("span",{className:"Poppins-Regular greyMedium",style:{fontSize:"10px"}},"(",D.b[p].categoryName,")"))),n.a.createElement("div",{className:"mb-1",style:{display:"flex",flexDirection:"row"}},n.a.createElement("img",{className:"mr-2 mt-1",src:v.a,height:16}),n.a.createElement("p",{className:"Poppins-Regular greyDefault m-0",style:{fontSize:"14px"}},c)),n.a.createElement("div",{className:"mb-1",style:{display:"flex",flexDirection:"row"}},n.a.createElement("img",{className:"mr-2 mt-1",src:N.a,height:16}),n.a.createElement("p",{className:"Poppins-Regular greyDefault m-0",style:{fontSize:"14px"}},s))),n.a.createElement(j,e)))};a(152),t.a=function(e){console.log("ListSection props => ",e);var t=localStorage.getItem("authToken"),a=c.a.decode(t),r=Object(i.c)((function(t){return"Library"===e.from?t.lib:t.mybook})),m=r.books,p=r.activeCategories,g=r.searchValue,d=Object(i.b)();console.log("books => ",m);return Object(o.useEffect)((function(){Object(u.d)(a.contributorID,p,g,e.from).then((function(t){t.data?(t.data.rows&&function(t){var a="Library"===e.from?s.b:l.e;d({type:a,books:t})}(t.data.rows),localStorage.setItem("authToken",t.data.authToken)):"TokenExpiredError"===t.msg.name&&(localStorage.removeItem("authToken"),e.history.push("/auth/login"))}))}),[d,p,g,e.location.state]),n.a.createElement("div",{style:{backgroundColor:"transparent"},className:"pt-3 mt-3 px-3 rounded"},n.a.createElement("div",{className:"row books-list"},m.map((function(t,a){return n.a.createElement("div",{className:"col-6 col-lg-3",key:t.bookID},n.a.createElement("a",{href:"#"},n.a.createElement(O,Object.assign({},e,{isAddBook:!1,bookID:t.bookID,title:t.title,author:t.author,publisher:t.publisher,categoryID:t.categoryID,contributorID:t.contributorID,contributorName:t.contributors.contributorName}))))})),"MyBooks"===e.from&&n.a.createElement("div",{className:"col-6 col-lg-3"},n.a.createElement("a",{href:"/my-books/add"},n.a.createElement(O,Object.assign({},e,{isAddBook:!0}))))))}},310:function(e,t,a){},333:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=(a(310),a(126)),c=a(154),i=a(155);t.default=function(e){return console.log("Homepage props => ",e),n.a.createElement(o.Suspense,{fallback:n.a.createElement("div",{className:"lds-ring mt-2"},n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null))},n.a.createElement("div",{className:"position-relative h-100 d-flex flex-column",style:{minHeight:"745px"}},n.a.createElement(r.a,Object.assign({},e,{title:"My Books",subtitle:"Take a look at your current collection!!"})),n.a.createElement(c.a,Object.assign({},e,{from:"MyBooks"})),n.a.createElement(i.a,Object.assign({},e,{from:"MyBooks"}))))}},88:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return y}));var o=a(95),n=a.n(o),r=a(96),c=a.n(r),i=a(97),s=a.n(i),l=a(98),u=a.n(l),m=a(99),p=a.n(m),g=a(100),d=a.n(g),f=a(101),b=a.n(f),h="http://localhost:4000/API/v1/",y=[{categoryID:0,categoryName:"Miscellaneous",categoryImage:p.a},{categoryID:1,categoryName:"Horror",categoryImage:c.a},{categoryID:2,categoryName:"Non-fiction",categoryImage:s.a},{categoryID:3,categoryName:"Fantasy",categoryImage:d.a},{categoryID:4,categoryName:"Autobiography",categoryImage:b.a},{categoryID:5,categoryName:"Comedy",categoryImage:n.a},{categoryID:6,categoryName:"Travel",categoryImage:u.a}]},95:function(e,t,a){e.exports=a.p+"static/media/comedy.570adf25.svg"},96:function(e,t,a){e.exports=a.p+"static/media/horror.26175e85.svg"},97:function(e,t,a){e.exports=a.p+"static/media/non-fiction.97c34c04.svg"},98:function(e,t,a){e.exports=a.p+"static/media/travel.f1261f5a.svg"},99:function(e,t,a){e.exports=a.p+"static/media/misc.240b4265.svg"}}]);
//# sourceMappingURL=6.b4fd4b1a.chunk.js.map