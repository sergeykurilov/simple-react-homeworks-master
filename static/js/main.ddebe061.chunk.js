(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,function(e,a,t){e.exports={message:"Message_message__200Wj",avatar:"Message_avatar__1Iv50",alterMessage:"Message_alterMessage__2MJYN",messageBubble:"Message_messageBubble__HCys9",alterTime:"Message_alterTime__PAOHx",alterAvatar:"Message_alterAvatar__3U2RL",alterMessageBubble:"Message_alterMessageBubble__iPDCu"}},,function(e,a,t){e.exports={closeButton:"Affairs_closeButton__OolDF",taskList:"Affairs_taskList__1OfQT",taskListItem:"Affairs_taskListItem__vc8mT",sortButton:"Affairs_sortButton__3RkrA"}},,function(e,a,t){e.exports={notfound:"Error404_notfound__1-idy","notfound-404":"Error404_notfound-404__3fACq",title:"Error404_title__3nq9L",subtitle:"Error404_subtitle__Kk7kh",link:"Error404_link__1IO6Y"}},,,function(e,a,t){e.exports={success:"Greeting_success__2zlWK",form:"Greeting_form__1MOWY",total:"Greeting_total__f2re5",error:"Greeting_error__2j7xs"}},function(e,a,t){e.exports={superInput:"SuperInputText_superInput__2ti5T",input:"SuperInputText_input__3tFGf",errorInput:"SuperInputText_errorInput__2kzEJ",error:"SuperInputText_error__2pVfS"}},,,,,,function(e,a,t){e.exports={blue:"HW4_blue__3o8n6",column:"HW4_column__nrsJz"}},function(e,a,t){e.exports={default:"SuperButton_default__3wolc",red:"SuperButton_red__121Vv"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__1gU4E",spanClassName:"SuperCheckbox_spanClassName__yY2VM"}},,,,function(e,a,t){e.exports={App:"App_App__3I2Vy"}},function(e,a,t){e.exports={nav:"Nav_nav__mUZ4M"}},,,function(e,a,t){e.exports=t(41)},,,,,function(e,a,t){},,,,,,function(e,a,t){e.exports={imgG:"PreJunior_imgG__2E3uT"}},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(24),c=t.n(l),o=(t(34),t(25)),s=t.n(o),u=t(8),i=t(26),m=t.n(i);var f=function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:m.a.nav},r.a.createElement(u.b,{to:"/"},"Home"),r.a.createElement(u.b,{to:"/pre-junior"},"PRE_JUNIOR"),r.a.createElement(u.b,{to:"/Junior"},"Junior"),r.a.createElement(u.b,{to:"/JuniorPlus"},"JuniorPlus")))},d=t(1),p=t(9),E=t.n(p);var h=function(){return r.a.createElement("div",null,r.a.createElement("div",{id:E.a.notfound},r.a.createElement("div",{className:E.a.notfound},r.a.createElement("div",{className:E.a.notfound404},r.a.createElement("h1",{className:E.a.title},"4",r.a.createElement("span",null,"0"),"4")),r.a.createElement("p",{className:E.a.subtitle},"The page you are looking for might have been removed had its name changed or is temporarily unavailable."),r.a.createElement("a",{href:E.a.link},"home page"))))},_=t(5),v=t.n(_);var b=function(e){return r.a.createElement("div",{className:v.a.messageBubble},r.a.createElement("div",{className:v.a.avatar},r.a.createElement("img",{src:e.avatar,alt:"img"})),r.a.createElement("div",{className:"messageBlocks"},r.a.createElement("div",{className:v.a.message},r.a.createElement("h1",null,e.name),r.a.createElement("p",null,e.message)),r.a.createElement("div",{className:v.a.time},r.a.createElement("time",null,e.time))))};var g=function(e){return r.a.createElement("div",{className:v.a.alterMessageBubble},r.a.createElement("div",{className:v.a.alterAvatar},r.a.createElement("img",{src:e.avatar,alt:"img"})),r.a.createElement("div",null,r.a.createElement("div",{className:v.a.alterMessage},r.a.createElement("h1",null,e.name),r.a.createElement("p",null,e.message)),r.a.createElement("div",{className:v.a.alterTime},r.a.createElement("time",null,e.time))))},k="https://proza.ru/pics/2017/01/14/1314.jpg",N="Some Name",C="some text",x="22:00";var y=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(b,{avatar:k,name:N,message:C,time:x}),r.a.createElement("hr",null),r.a.createElement(g,{avatar:k,name:N,message:C,time:x}),r.a.createElement("hr",null))},j=t(2),w=t(7),O=t.n(w);var S=function(e){return r.a.createElement("div",null,r.a.createElement("ul",{className:O.a.taskList},r.a.createElement("button",{className:O.a.closeButton,onClick:function(){e.deleteAffairCallback(e.affair._id)}}),r.a.createElement("li",{className:O.a.taskListItem,key:e.affair._id},e.affair.name)))};var B=function(e){var a=e.data.map((function(a){return r.a.createElement(S,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{className:O.a.sortButton,onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{className:O.a.sortButton,onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{className:O.a.sortButton,onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{className:O.a.sortButton,onClick:function(){e.setFilter("low")}},"Low"))},I=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var T=function(){var e=Object(n.useState)(I),a=Object(j.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(j.a)(c,2),s=o[0],u=o[1],i=function(e,a){return"all"===a?e:"high"===a?e.filter((function(e){return"high"===e.priority})):"low"===a?e.filter((function(e){return"low"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):e}(t,s);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(B,{data:i,setFilter:u,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},A=t(28),M=t(12),J=t.n(M),P=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=a?J.a.success:J.a.error;return r.a.createElement("div",{className:J.a.form},r.a.createElement("input",{value:a,onChange:t,className:o,placeholder:l}),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",{className:J.a.total},"Total Users: ",c))},F=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(j.a)(l,2),o=c[0],s=c[1],u=Object(n.useState)(""),i=Object(j.a)(u,2),m=i[0],f=i[1],d=a.length;return r.a.createElement(P,{name:o,setNameCallback:function(e){s(e.currentTarget.value),""===e.currentTarget.value&&f("Input field must not be empty")},addUser:function(){o?(t(o),alert("Hello ".concat(o)),s("")):f("Input field must not be empty"),s("")},error:m,totalUsers:d})};var U=function(){var e=Object(n.useState)([]),a=Object(j.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(F,{users:t,addUserCallback:function(e){l([{_id:12,name:e}].concat(Object(A.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},L=t(6),G=t(13),H=t.n(G),W=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,s=e.spanClassName,u=Object(L.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(H.a.error," ").concat(s||""),m="".concat(u.value?H.a.superInput:H.a.errorInput," ").concat(o," ").concat(H.a.input);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:m},u)),c&&r.a.createElement("span",{className:i},c))},z=t(19),D=t.n(z),K=t(20),R=t.n(K),V=function(e){var a=e.className,t=Object(L.a)(e,["className"]),n="".concat(t.children?R.a.red:R.a.default," ").concat(a);return r.a.createElement("button",Object.assign({className:n},t))},Y=t(21),q=t.n(Y),Q=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(L.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(q.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:q.a.spanClassName},l))};var Z=function(){var e=Object(n.useState)(""),a=Object(j.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},s=Object(n.useState)(!1),u=Object(j.a)(s,2),i=u[0],m=u[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:D.a.column},r.a.createElement(W,{value:t,onChangeText:l,onEnter:o,error:c,className:D.a.blue}),r.a.createElement(V,{red:!0,onClick:o},"delete "),r.a.createElement(Q,{checked:i,onChangeChecked:m},"some text "),r.a.createElement(Q,{checked:i,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},$=(t(40),function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(L.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),s=Object(j.a)(o,2),u=s[0],i=s[1],m=l||{},f=m.children,d=m.onDoubleClick,p=m.className,E=Object(L.a)(m,["children","onDoubleClick","className"]),h="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",p);return r.a.createElement(r.a.Fragment,null,u?r.a.createElement(W,Object.assign({autoFocus:!0,onBlur:function(e){i(!1),a&&a(e)},onEnter:function(){i(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){i(!0),d&&d(e)},className:h},E),f||c.value))});function X(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function ee(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}X("test",{x:"A",y:1});ee("test",{x:"",y:0});var ae=function(){var e=Object(n.useState)(""),a=Object(j.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement($,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(V,{onClick:function(){X("editable-span-value",t)}},"save"),r.a.createElement(V,{onClick:function(){l(ee("editable-span-value",t))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var te=function(){return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(T,null),r.a.createElement(U,null),r.a.createElement(Z,null),r.a.createElement(ae,null))};var ne=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"JuniorPlus Page"))};var re=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Junior Page"))};var le=function(){return r.a.createElement("div",null,r.a.createElement("img",{className:"imgG",sizes:"(max-width: 540px) 100vw, 540px",srcSet:"https://cdn.sanity.io/images/hnbmpj3u/production/bd1a20ef000eaf379e527f355e9fcc1c8af7d5db-840x840.png?w=135&h=135&fit=crop 135w,\nhttps://cdn.sanity.io/images/hnbmpj3u/production/bd1a20ef000eaf379e527f355e9fcc1c8af7d5db-840x840.png?w=270&h=270&fit=crop 270w,\nhttps://cdn.sanity.io/images/hnbmpj3u/production/bd1a20ef000eaf379e527f355e9fcc1c8af7d5db-840x840.png?w=540&h=540&fit=crop 540w,\nhttps://cdn.sanity.io/images/hnbmpj3u/production/bd1a20ef000eaf379e527f355e9fcc1c8af7d5db-840x840.png?w=810&h=810&fit=crop 810w",src:"https://cdn.sanity.io/images/hnbmpj3u/production/bd1a20ef000eaf379e527f355e9fcc1c8af7d5db-840x840.png?w=540&h=540&fit=crop",alt:"A brass instrument with lots of twists and turns",loading:"lazy",style:{margin:"auto",display:"block"}}))},ce="/",oe="/pre-junior",se="/JuniorPlus",ue="/junior";var ie=function(){return r.a.createElement("div",null,r.a.createElement(d.c,null,r.a.createElement(d.a,{path:ce,exact:!0,render:function(){return r.a.createElement(le,null)}}),r.a.createElement(d.a,{path:oe,exact:!0,render:function(){return r.a.createElement(te,null)}}),r.a.createElement(d.a,{path:se,exact:!0,render:function(){return r.a.createElement(ne,null)}}),r.a.createElement(d.a,{path:ue,exact:!0,render:function(){return r.a.createElement(re,null)}}),r.a.createElement(d.a,{render:function(){return r.a.createElement(h,null)}})))};var me=function(){return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(f,null),r.a.createElement(ie,null)))};var fe=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(me,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[29,1,2]]]);
//# sourceMappingURL=main.ddebe061.chunk.js.map