"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[785],{4785:function(a,s,e){e.r(s),e.d(s,{default:function(){return w}});e(2791);var n=e(9595),i="DialogsItems_dialogsItems__3lvxg",t="DialogsItems_avatar__Hdrih",r=e(1523),o=e(184),l=function(a){return(0,o.jsx)("div",{className:i,children:(0,o.jsxs)(r.OL,{to:"/dialogs/"+a.id,children:[a.name,(0,o.jsx)("img",{className:t,src:a.avatar,alt:"avatar"})]})})},d="DialogsMessages_messageContainer__HKZvV",u="DialogsMessages_message__tH59o",c="DialogsMessages_messageBox__w6exV",g="DialogsMessages_avatar__gjO4D",m=function(a){return(0,o.jsxs)("div",{className:d,children:[(0,o.jsx)("img",{className:g,src:a.avatar,alt:"avatar"}),(0,o.jsx)("div",{className:c,children:(0,o.jsx)("span",{className:u,children:a.message})})]})},_=e(6139),v=e(704),f=e(1917),h=e(3079),x=e(6006),j=(0,h.D)(250),D=(0,v.Z)({form:"dialogAddMessageForm"})((function a(s){var e=s.handleSubmit;return(0,o.jsxs)("form",{onSubmit:e,className:n.Z.form,children:[(0,o.jsx)("div",{className:n.Z.data,children:(0,o.jsx)(_.Z,{placeholder:"Enter you message",type:"text",name:"message",validate:[h.C,j],component:f.u})}),(0,o.jsx)(x.G,{form:a})]})})),p=e(364),Z=e(8683),N=e(5987),C=e(9271),b=["isAuth"],y=function(a){return{isAuth:a.auth.isAuth}};var M=e(7781),I=function(a){return a.dialogsPage.dialogsData},k=function(a){return a.dialogsPage.messagesData},A=e(4900),w=(0,M.qC)((function(a){return(0,p.$j)(y)((function(s){var e=s.isAuth,n=(0,N.Z)(s,b);return e?(0,o.jsx)(a,(0,Z.Z)({},n)):(0,o.jsx)(C.l_,{to:"/login"})}))}),(0,p.$j)((function(a){return{dialogsData:I(a),messagesData:k(a)}}),(function(a){return{sendMessage:function(s){return a((0,A.C)(s))}}})))((function(a){var s=a.dialogsData,e=a.messagesData,i=a.sendMessage;return(0,o.jsx)("div",{className:"content",children:(0,o.jsxs)("div",{className:n.Z.dialogsContainer,children:[(0,o.jsx)("div",{className:n.Z.sidebar}),(0,o.jsxs)("div",{className:n.Z.dialogs,children:[(0,o.jsx)("div",{className:n.Z.dialogsItems,children:s.map((function(a){return(0,o.jsx)(l,{id:a.id,name:a.name,avatar:a.avatar},a.id)}))}),(0,o.jsx)("div",{className:n.Z.dialogsMessages,children:e.map((function(a){return(0,o.jsx)(m,{message:a.message,avatar:a.avatar},a.id)}))}),(0,o.jsx)("div",{className:n.Z.addDialogContainer,children:(0,o.jsx)(D,{onSubmit:function(a){i(a.message)}})})]})]})})}))},6006:function(a,s,e){e.d(s,{G:function(){return o}});e(2791);var n=e(364),i=e(2381),t=e(6513),r=e(184),o=function(a){var s=a.form,e=(0,n.I0)();return(0,r.jsx)(t.Z,{type:"submit",color:"primary",variant:"contained",onClick:function(){e((0,i.Ps)(s))},children:"Send"})}},1917:function(a,s,e){e.d(s,{u:function(){return l}});var n=e(8683),i=e(5987),t=(e(2791),e(9038)),r=e(184),o=["input","placeholder","variant","type","meta"],l=function(a){var s=a.input,e=a.placeholder,l=a.variant,d=a.type,u=a.meta,c=u.touched,g=u.error;(0,i.Z)(a,o);return(0,r.jsx)(t.Z,(0,n.Z)((0,n.Z)({},s),{},{style:{marginBottom:"10px"},error:c&&g,helperText:c&&g,fullWidth:!0,label:e,type:d,variant:l||"outlined",size:"small"}))}},3079:function(a,s,e){e.d(s,{C:function(){return n},D:function(){return i}});var n=function(a){return a?void 0:"Field is required"},i=function(a){return function(s){return s&&s.length>a?"Max length is ".concat(a," symbols"):void 0}}},9595:function(a,s){s.Z={dialogsContainer:"Dialogs_dialogsContainer__N1N2Q",dialogs:"Dialogs_dialogs__AvisE",sidebar:"Dialogs_sidebar__-48LN",dialogsMessages:"Dialogs_dialogsMessages__kU9lk",dialogsItems:"Dialogs_dialogsItems__-u5-s",addDialogContainer:"Dialogs_addDialogContainer__n9+aI",messageInput:"Dialogs_messageInput__hpm27"}}}]);
//# sourceMappingURL=785.760dfb12.chunk.js.map