"use strict";(self.webpackChunktodolist_front=self.webpackChunktodolist_front||[]).push([[986],{992:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(439),o=n(791),s=n(937),c=n(533),a=n(184);function i(e){var t=(0,o.useContext)(s.V),n=t.stateAuth,i=(t.RemoveError,(0,o.useContext)(c.a)),l=i.stateTodoList,u=(i.RemoveError,(0,o.useState)(!1)),d=(0,r.Z)(u,2),f=d[0],m=d[1],x=(0,o.useState)(""),p=(0,r.Z)(x,2),h=p[0],b=p[1];return(0,o.useEffect)((function(){n.errorMessage.length>0?(b(n.errorMessage),m(!0)):l.errorMessage.length>0&&(b(l.errorMessage),m(!0)),setTimeout((function(){return m(!1)}),5e3)}),[l,n]),(0,o.useEffect)((function(){setTimeout((function(){m(!1)}),2e3)}),[]),(0,a.jsx)("div",{className:"alert alert-danger text-center ".concat(0==f&&" d-none"),role:"alert",children:h})}},630:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(413),o=n(925),s=n(791),c=n(184),a=["type","onSubmit","text","color","small"];function i(e){var t=e.type,n=e.onSubmit,i=e.text,l=e.color,u=e.small,d=(0,o.Z)(e,a),f=(0,s.useRef)(null);return(0,c.jsx)("button",(0,r.Z)((0,r.Z)({type:t,onSubmit:function(){return n}},d),{},{ref:f,className:"btn btn-".concat(l," ").concat(u&&"btn-sm"),children:i}))}},484:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(413),o=n(630),s=(n(791),n(134)),c=n(184);function a(e){var t=e.formMethods,n=e.id,a=e.onSubmit,i=e.btnText,l=e.children,u=e.close,d=e.onSubmitClose;return(0,c.jsx)(s.RV,(0,r.Z)((0,r.Z)({},t),{},{children:(0,c.jsxs)("form",{id:n,onSubmit:t.handleSubmit((function(e){return a(e)})),children:[l,(0,c.jsx)(o.Z,{type:"submit",text:i,color:"primary m-2"},"sucess"),u&&(0,c.jsx)(o.Z,{type:"button",color:"secondary",onClick:d,className:"m-2",text:"cancel"},"cancel")]})}))}},881:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(413),o=(n(791),n(134)),s=n(184);function c(e){var t=e.type,n=e.label,c=e.id,a=e.name,i=e.defaultValue,l=e.placeholder,u=e.textArea,d=(0,o.Gc)(),f=d.register,m=d.formState.errors;return(0,s.jsxs)("div",{className:n?"mb-3":"",children:[n&&(0,s.jsx)("label",{htmlFor:c,className:"form-label",children:n}),u?(0,s.jsx)("textarea",(0,r.Z)((0,r.Z)({id:c,className:"mt-2 form-control border-0"},f(String(a))),{},{name:a,defaultValue:i,placeholder:l})):(0,s.jsx)("input",(0,r.Z)((0,r.Z)({id:c,className:"form-control ".concat(l&&" border-0")},f(String(a))),{},{type:t,name:a,defaultValue:i,placeholder:l})),m[c]&&(0,s.jsx)("span",{className:"d-block text-left",children:"Llene el campo"})]})}},986:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(439),o=n(791),s=n(533),c=n(630),a=n(184);function i(e){var t=e.id,n=e.description,r=e.title,i=(0,o.useContext)(s.a).Delete;return(0,a.jsxs)("div",{className:"card border p-3 m-2 b-2",style:{cursor:"pointer"},children:[(0,a.jsx)("h3",{children:r}),(0,a.jsx)("p",{children:n}),(0,a.jsx)(c.Z,{text:"Borrar",color:"danger",small:!0,onClick:function(){return i(t)}})]},t)}var l=n(484),u=n(134),d=n(881);function f(e){var t=e.cancel,n=(0,o.useContext)(s.a).Add,r=(0,u.cI)({mode:"onBlur",defaultValues:{title:"",description:""}}),c=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.Z,{placeholder:"Titulo",id:"title",name:"title",type:"text"}),(0,a.jsx)(d.Z,{placeholder:"Descripcion",id:"description",name:"description",type:"text",textArea:!0})]});return(0,a.jsx)(l.Z,{formMethods:r,id:"formTodoList",close:!0,onSubmitClose:t,onSubmit:n,btnText:"Guardar",children:c})}var m=n(992),x=n(937);function p(){var e=(0,o.useContext)(s.a),t=e.todoList,n=e.getAll,l=(0,o.useContext)(x.V).logOut,u=(0,o.useState)(!1),d=(0,r.Z)(u,2),p=d[0],h=d[1];return(0,o.useEffect)((function(){n()}),[]),(0,o.useEffect)((function(){h(!1)}),[t]),(0,a.jsxs)("div",{className:"container-sm p-5 b-5 ",children:[(0,a.jsx)(c.Z,{text:"Salir",color:"danger",onClick:l}),(0,a.jsx)(m.Z,{}),(0,a.jsx)("div",{className:"row justify-content-center p-5 m-3",children:p?(0,a.jsx)(f,{cancel:function(){return h(!1)}}):(0,a.jsx)("input",{className:"form-control  border-1",placeholder:"Crea una nota...",onClick:function(){return h(!0)}})}),(0,a.jsx)("div",{className:"row justify-content-center",children:t.map((function(e,t){var n=e.id,r=e.title,o=e.description;return(0,a.jsx)("div",{className:"col",children:(0,a.jsx)(i,{id:n,title:r,description:o},t)},t)}))})]})}}}]);
//# sourceMappingURL=986.7515b5ca.chunk.js.map