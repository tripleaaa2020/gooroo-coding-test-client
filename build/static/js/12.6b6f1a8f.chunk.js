(this["webpackJsonpgooroo-coding-test-client"]=this["webpackJsonpgooroo-coding-test-client"]||[]).push([[12],{329:function(e,t,o){e.exports=o.p+"static/media/remove-icon.020dfd90.svg"},330:function(e,t,o){e.exports=o.p+"static/media/close-popup-icon.d9cd8e4a.svg"},335:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),r=o(34),l=o(116),c=o.n(l),s=o(319),i=o.n(s),u=o(13),d=o(105),m=o(329),p=o.n(m),f=o(330),b=o.n(f);i.a.setAppElement("#root");t.default=function(e){console.log("DeleteBookModal props => ",e);var t=Object(r.c)((function(e){return e.nav})),o=Object(r.b)(),n=e.bookID,s=function(){e.history.push("/my-books"),o({type:u.a})};return a.a.createElement("div",null,a.a.createElement(c.a,null),a.a.createElement(i.a,{isOpen:t.showDeleteModal,style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",zIndex:"20",padding:"40px 20px 30px",overflow:"none",width:"360px",borderRadius:"8px",textAlign:"center"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.2)",zIndex:"20"}},contentLabel:"Example Modal",onRequestClose:function(){return s()}},a.a.createElement("img",{alt:"Close",src:b.a,className:"position-absolute cursorPointer",style:{right:"10px",top:"10px"},onClick:function(){return s()}}),a.a.createElement("img",{alt:"Del",src:p.a,className:"mb-3"}),a.a.createElement("div",{className:"greyDefault normalFont font-weight-bold text-center"},a.a.createElement("span",null,"Delete Book")),a.a.createElement("div",{className:"greyDefault smallFont text-center mx-auto mt-3"},a.a.createElement("span",null,"Are you sure you want to delete this book from your collection?")),a.a.createElement("div",{className:"d-flex w-100 justify-content-around mt-3"},a.a.createElement("button",{className:"buttonRounded d-inline-block px-4",onClick:function(){return s()}},"No"),a.a.createElement("button",{className:"buttonRounded d-inline-block px-4",onClick:function(){Object(d.b)(n).then((function(t){200==t.code?l.notify.show("Book successfully deleted!","success",1e3):l.notify.show("An error has occured, please try again later!","error",1e3),o({type:u.a}),setTimeout((function(){return e.history.push("/my-books",{deleted:!0})}),1e3)})).catch((function(t){console.log(t),l.notify.show("An error has occured, please try again later!","error",1e3),o({type:u.a}),setTimeout((function(){return e.history.push("/my-books")}),1e3)}))}},"Yes"))))}}}]);
//# sourceMappingURL=12.6b6f1a8f.chunk.js.map