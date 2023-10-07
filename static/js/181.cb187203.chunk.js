"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[181],{7181:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var r=t(2791),a=t(9434),s=t(184);function c(e){var n=e.contact;return(0,s.jsxs)("div",{children:[n.name," - ",n.number]})}var i="ContactList_button__7kL4l",o=t(208),u=function(e){return e.contacts.items},l=function(e){return e.contacts.isLoading},d=function(e){return e.contacts.filter};function m(e){var n=e.contacts,t=(0,a.I0)(),r=(0,a.v9)(d),u=null===n||void 0===n?void 0:n.filter((function(e){return e.name&&e.name.toLowerCase().includes(r.toLowerCase())}));return(0,s.jsx)("ul",{children:u.map((function(e){return(0,s.jsxs)("li",{children:[(0,s.jsx)(c,{contact:e}),(0,s.jsx)("button",{onClick:function(){return t((0,o.GK)(e.id))},className:i,children:"Delete"})]},e.id)}))})}var h=t(5705),f="ContactForm_button__eSwX9";function x(){var e=(0,a.I0)();return(0,s.jsx)(h.J9,{initialValues:{name:"",number:""},onSubmit:function(n,t){var r={name:n.name,number:n.number};e((0,o.rE)(r)),t.resetForm()},children:(0,s.jsxs)(h.l0,{children:[(0,s.jsx)("h3",{children:"Name"}),(0,s.jsx)(h.gN,{type:"text",name:"name",pattern:"^[a-zA-Z]+(([ \\\\-][a-zA-Z ])?[a-zA-Z]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Enter a name"}),(0,s.jsx)("h3",{children:"Number"}),(0,s.jsx)(h.gN,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Enter a phone number"}),(0,s.jsx)("button",{className:f,type:"submit",children:"Add Contact"})]})})}function p(){var e=(0,a.I0)();return(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"filter",children:"Filter by Name:"}),(0,s.jsx)("input",{type:"text",id:"filter",onChange:function(n){return t=n.target.value,void e((0,o.Tv)(t));var t},placeholder:"Search by name"})]})}function b(){var e=(0,a.I0)(),n=(0,a.v9)(l),t=(0,a.v9)(u);return(0,r.useEffect)((function(){e((0,o.yF)())}),[e]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("title",{children:"Phonebook"}),(0,s.jsx)(x,{}),(0,s.jsx)("h2",{children:"Contacts"}),(0,s.jsx)(p,{}),n?(0,s.jsx)("p",{children:"Loading Contacts"}):(0,s.jsx)(m,{contacts:t})]})}}}]);
//# sourceMappingURL=181.cb187203.chunk.js.map