(this["webpackJsonpgooroo-coding-test-client"]=this["webpackJsonpgooroo-coding-test-client"]||[]).push([[9],{100:function(e,t,n){e.exports=n.p+"static/media/fantasy.28bc701a.svg"},101:function(e,t,n){e.exports=n.p+"static/media/autobio.13f0461d.svg"},105:function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return s})),n.d(t,"c",(function(){return f})),n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var o=n(112),a=n.n(o),r=n(113),c=n(114),i=n.n(c),u=n(88),l=function(){var e=Object(r.a)(a.a.mark((function e(t,n,o,r){var c,l,s,f,p,d,m;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l="",s="",f="",console.log("getAllBooks activeCategories => ",n),n.length>0){for(s+="?categoryID=",p=0;p<n.length;p++)s+=0==p?n[p]:"_"+n[p];"Library"!==r&&(l+="&contributorID="+t),o.length>0&&(f+="&search="+o)}else"Library"!==r?(l+="?contributorID="+t,o.length>0&&(f+="&search="+o)):o.length>0&&(f+="?search="+o);return d=localStorage.getItem("authToken"),m={"Content-Type":"application/json",Authorization:d},e.next=9,i.a.get(u.a+"books/all"+s+l+f,{headers:m}).then((function(e){console.log("getAllBooks Response => ",e),c=e.data})).catch((function(e){console.log("getAllBooks error => ",e),c=e}));case 9:return e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(t,n,o,a){return e.apply(this,arguments)}}(),s=function(){var e=Object(r.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get(u.a+"books/"+t+"/details").then((function(e){console.log("getBookDetail Response => ",e),n=e.data})).catch((function(e){console.log("getBookDetail error => ",e),n=e}));case 2:return e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(r.a)(a.a.mark((function e(t,n){var o,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=localStorage.getItem("authToken"),r={"Content-Type":"application/json",Authorization:o},c=[],e.next=5,i.a.put(u.a+"/books/"+t+"/edit",n,{headers:r}).then((function(e){console.log("editBookDetails Response => ",e),c=e.data})).catch((function(e){console.log("editBookDetails error => ",e),c=e}));case 5:return e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=Object(r.a)(a.a.mark((function e(t){var n,o,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("authToken"),o={"Content-Type":"application/json",Authorization:n},r=[],e.next=5,i.a.post(u.a+"books/create",t,{headers:o}).then((function(e){console.log("createBook Response => ",e),r=e.data})).catch((function(e){console.log(e),r=e}));case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(r.a)(a.a.mark((function e(t){var n,o,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("authToken"),o={"Content-Type":"application/json",Authorization:n},r=[],console.log("deleteBook bookID => ",t),e.next=6,i.a.delete(u.a+"books/"+t+"/delete",{headers:o}).then((function(e){console.log(e),r=e.data})).catch((function(e){console.log(e),r=e}));case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},116:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.notify=void 0;var o=u(n(0)),a=u(n(21)),r=u(n(117)),c=u(n(119)),i=n(87);function u(e){return e&&e.__esModule?e:{default:e}}function l(){var e=document.getElementById(i.defaults.wrapperId);a.default.unmountComponentAtNode(e)}function s(e,t,n,c){if(!document.getElementById(i.defaults.wrapperId).hasChildNodes()){var u=n||i.defaults.timeout;return function(e,t,n,c){var u=document.getElementById(i.defaults.wrapperId);a.default.render(o.default.createElement(r.default,{text:e,timeout:n,type:t,color:c}),u)}(e,t,u,c),-1===u?!1:(setTimeout((function(){l()}),u+i.defaults.animationDuration),!0)}return!1}var f={show:s,hide:l,createShowQueue:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:500,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;return this.msgs=[],this.isNotifying=!1,this.currentRecallDelay=t,this.showNotify=function(){if(0!==e.msgs.length){e.isNotifying=!0;var o=e.msgs.pop();s(o.text,o.type,o.timeout,o.color)?(e.currentRecallDelay=t,o.timeout>0&&setTimeout((function(){return e.showNotify()}),o.timeout+i.defaults.animationDuration)):(e.msgs.unshift(o),setTimeout((function(){return e.showNotify()}),e.currentRecallDelay),e.currentRecallDelay+=n)}else e.isNotifying=!1},function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i.defaults.timeout,a=arguments.length>3?arguments[3]:void 0;e.msgs.push({text:t,type:n,timeout:o,color:a}),e.isNotifying||e.showNotify()}}};t.notify=f;var p=c.default;t.default=p},117:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n(0)),a=u(n(17)),r=u(n(35)),c=n(87),i=u(n(118));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?m(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=function(e){function t(){var e,n;s(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return g(m(n=p(this,(e=d(t)).call.apply(e,[this].concat(a)))),"state",{containerStyle:i.default.styles.container}),n}var n,a,u;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(a=[{key:"getToastStyle",value:function(){var e=this.props,t=e.type,n=e.color,o=i.default.styles,a={};switch(t){case"success":case"error":case"warning":case"info":a=(0,r.default)({},o.content,c.defaults.colors[t]);break;case"custom":var u={backgroundColor:n.background,color:n.text};a=(0,r.default)({},o.content,u);break;default:a=(0,r.default)({},o.content)}return a}},{key:"animateState",value:function(){var e=this,t=i.default.styles;setTimeout((function(){e.updateStyle(t.show)}),100),-1!==this.props.timeout&&setTimeout((function(){e.updateStyle(t.hide)}),this.props.timeout)}},{key:"updateStyle",value:function(e){var t=i.default.styles;this.setState({containerStyle:(0,r.default)({},t.container,e)})}},{key:"componentDidMount",value:function(){this.animateState()}},{key:"render",value:function(){var e=this.props.text,t=this.state.containerStyle;return o.default.createElement("div",{className:"toast-notification",style:t},o.default.createElement("span",{style:this.getToastStyle()},e))}}])&&f(n.prototype,a),u&&f(n,u),t}(o.default.Component);g(h,"propTypes",{text:a.default.oneOfType([a.default.string,a.default.element]),timeout:a.default.number,type:a.default.string,color:a.default.oneOfType([a.default.object,a.default.string]),style:a.default.oneOfType([a.default.object,a.default.bool])});var b=h;t.default=b},118:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(87);function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,(n=[{key:"styles",get:function(){return{container:{position:"fixed",width:"50%",margin:"0 auto",right:"0px",top:o.defaults.top,left:"0px",textAlign:"center",zIndex:o.defaults.zIndex,pointerEvents:"none",transition:"all "+o.defaults.animationDuration+"ms ease",transform:"translateY(-100%)",msTransition:"all "+o.defaults.animationDuration+"ms ease",msTransform:"translateY(-100%)",WebkitTransition:"all "+o.defaults.animationDuration+"ms ease",WebkitTransform:"translateY(-100%)",OTransition:"all "+o.defaults.animationDuration+"ms ease",OTransform:"translateY(-100%)",MozTransition:"all "+o.defaults.animationDuration+"ms ease",MozTransform:"translateY(-100%)"},content:{cursor:"pointer",display:"inline-block",width:"auto",borderRadius:"0 0 4px 4px",backgroundColor:"white",padding:"10px 30px",pointerEvents:"all"},show:{transform:"translateY(0)",msTransform:"translateY(0)",WebkitTransform:"translateY(0)",OTransform:"translateY(0)",MozTransform:"translateY(0)"},hide:{transform:"translateY(-100%)",msTransform:"translateY(-100%)",WebkitTransform:"translateY(-100%)",OTransform:"translateY(-100%)",MozTransform:"translateY(-100%)"}}}}])&&a(t.prototype,n),r&&a(t,r),e}());t.default=r},119:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(n(0)),a=c(n(17)),r=n(87);function c(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){function t(){return u(this,t),s(this,f(t).apply(this,arguments))}var n,a,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){(0,r.mergeOptions)(this.props.options)}},{key:"render",value:function(){return o.default.createElement("div",{id:r.defaults.wrapperId})}}])&&l(n.prototype,a),c&&l(n,c),t}(o.default.Component);t.default=m,d(m,"propTypes",{options:a.default.object}),d(m,"defaultProps",{options:{}})},311:function(e,t,n){},312:function(e,t,n){e.exports=n.p+"static/media/nothing.31dd455f.svg"},334:function(e,t,n){"use strict";n.r(t);var o=n(2),a=n(0),r=n.n(a),c=n(34),i=n(116),u=n.n(i),l=(n(311),n(312)),s=n.n(l),f=n(88),p=n(14),d=n(105);t.default=function(e){console.log("BookOperationsContainer props => ",e);var t=e.match.params.id?e.match.params.id:null,n=null==t?"add":"edit",l="add"===n?"Add Book":"Save Changes",m=Object(c.c)((function(e){return e.mybook.form})),y=m.title,g=m.author,h=m.publisher,b=m.categoryID,v=Object(c.b)();console.log("categoryID => ",b);var k=-1;if(""!==b)for(var w=0;w<f.b.length;w++)if(f.b[w].categoryID===b){k=w;break}Object(a.useEffect)((function(){if("edit"===n){console.log("IN EDIT MODE");Object(d.e)(t).then((function(e){!function(e){v({type:p.d,data:e})}({title:e.data.title,author:e.data.author,publisher:e.data.publisher,categoryID:e.data.categoryID})}))}}),[]);return r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",{className:"lds-ring mt-2"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},r.a.createElement("div",{className:"book-operations-container d-flex flex-column"},r.a.createElement("div",{className:"image-section d-flex flex-column align-items-center"},r.a.createElement("div",{className:"category-image text-center d-flex align-items-center justify-content-center"},r.a.createElement("img",{src:""!==b?f.b[k].categoryImage:s.a,alt:"category-image",height:"80px"}))),r.a.createElement("div",{className:"form-section flex-grow-1 d-flex flex-column"},r.a.createElement(u.a,null),r.a.createElement("div",{className:"w-100 form-content"},r.a.createElement("form",{autoComplete:"off"},r.a.createElement("h4",{className:"biggerFont colorDefault titleSection d-inline-block"},"Book Details"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xl-4 col-lg-6"},r.a.createElement("h5",{className:"smallFont greyMedium text-uppercase"},"TITLE"),r.a.createElement("input",{value:y,name:"title",type:"text",onChange:function(e){return v({type:p.c,e:e})},className:"form-control custom-form",placeholder:"Enter Book Title"})),r.a.createElement("div",{className:"col-xl-4 col-lg-6"},r.a.createElement("h5",{className:"smallFont greyMedium text-uppercase"},"AUTHOR"),r.a.createElement("input",{value:g,name:"author",type:"text",onChange:function(e){return v({type:p.c,e:e})},className:"form-control custom-form",placeholder:"Enter Author Name"})),r.a.createElement("div",{className:"col-xl-4 col-lg-6"},r.a.createElement("h5",{className:"smallFont greyMedium text-uppercase"},"PUBLISHER"),r.a.createElement("input",{value:h,name:"publisher",type:"text",onChange:function(e){return v({type:p.c,e:e})},className:"form-control custom-form",placeholder:"Enter Publisher Name"})),r.a.createElement("div",{className:"col-xl-4 col-lg-6"},r.a.createElement("h5",{className:"smallFont greyMedium text-uppercase"},"CATEGORY"),r.a.createElement("select",{name:"categoryID",value:b,className:"form-control custom-form",onChange:function(e){return v({type:p.c,e:e})}},r.a.createElement("option",{value:""},"Select Category"),f.b.map((function(e,t){return r.a.createElement("option",{key:t,value:e.categoryID},e.categoryName)}))))))),r.a.createElement("div",{className:"mt-auto text-right"},r.a.createElement("button",{disabled:""===y||""===g||""===h||""===b,onClick:function(a){return function(a){a.preventDefault();var r=Object(o.a)({},m,{image:null});"add"===n?Object(d.a)(r).then((function(t){200==t.code?i.notify.show("Book successfully added to your collection!","success",1e3):i.notify.show("An error has occured, please try again later!","error",1e3),t.data.authToken?(localStorage.setItem("authToken",t.data.authToken),v({type:p.a}),setTimeout((function(){return e.history.replace("/my-books")}),1e3)):(localStorage.removeItem("authToken"),e.history.push("/auth/login"))})):Object(d.c)(t,r).then((function(t){200==t.code?i.notify.show("Book successfully editted!","success",1e3):i.notify.show("An error has occured, please try again later!","error",1e3),t.data.authToken?(localStorage.setItem("authToken",t.data.authToken),v({type:p.a}),setTimeout((function(){return e.history.replace("/my-books")}),1e3)):(localStorage.removeItem("authToken"),e.history.push("/auth/login"))}))}(a)},className:"buttonRounded d-inline-block px-4"},l)))))}},87:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mergeOptions=function(e){t.defaults=r=(0,a.default)(r,e)},t.defaults=void 0;var o,a=(o=n(35))&&o.__esModule?o:{default:o};var r={wrapperId:"notification-wrapper",animationDuration:300,timeout:5e3,zIndex:1e3,top:0,colors:{error:{color:"#FFFFFF",backgroundColor:"#E85742"},success:{color:"#FFFFFF",backgroundColor:"#55CA92"},warning:{color:"#333333",backgroundColor:"#F5E273"},info:{color:"#FFFFFF",backgroundColor:"#4990E2"}}};t.defaults=r},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return b}));var o=n(95),a=n.n(o),r=n(96),c=n.n(r),i=n(97),u=n.n(i),l=n(98),s=n.n(l),f=n(99),p=n.n(f),d=n(100),m=n.n(d),y=n(101),g=n.n(y),h="https://ec2-3-136-160-252.us-east-2.compute.amazonaws.com:8443/API/v1/",b=[{categoryID:0,categoryName:"Miscellaneous",categoryImage:p.a},{categoryID:1,categoryName:"Horror",categoryImage:c.a},{categoryID:2,categoryName:"Non-fiction",categoryImage:u.a},{categoryID:3,categoryName:"Fantasy",categoryImage:m.a},{categoryID:4,categoryName:"Autobiography",categoryImage:g.a},{categoryID:5,categoryName:"Comedy",categoryImage:a.a},{categoryID:6,categoryName:"Travel",categoryImage:s.a}]},95:function(e,t,n){e.exports=n.p+"static/media/comedy.570adf25.svg"},96:function(e,t,n){e.exports=n.p+"static/media/horror.26175e85.svg"},97:function(e,t,n){e.exports=n.p+"static/media/non-fiction.97c34c04.svg"},98:function(e,t,n){e.exports=n.p+"static/media/travel.f1261f5a.svg"},99:function(e,t,n){e.exports=n.p+"static/media/misc.240b4265.svg"}}]);
//# sourceMappingURL=9.cd37878b.chunk.js.map