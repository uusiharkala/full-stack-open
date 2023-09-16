(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),c=t.n(o),u=(t(20),t(2)),i=t(3),l=t.n(i),m=function(){return l.a.get("/api/persons")},s=function(e){return l.a.post("/api/persons",e)},d=function(e){return l.a.delete("/api/persons".concat("/",e))},f=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"notif"},n)},h=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"error"},n)},p=function(e){return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:e.newFilter,onChange:e.handleFilterChange}))},b=function(e){return r.a.createElement("form",{onSubmit:e.addName},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},v=function(e){var n=function(n){var t=e.persons.find(function(e){return e.name===n}).id;window.confirm("Delete ".concat(n," ?"))&&d(t).then(function(){var t=e.persons.filter(function(e){return e.name!==n});e.setPersons(t),e.setNotification("Deleted ".concat(n)),setTimeout(function(){e.setNotification(null)},5e3)})};return 0===e.newFilter.length?e.persons.map(function(e){return r.a.createElement("div",{key:e.name}," ",e.name," ",e.number,r.a.createElement("button",{onClick:function(){return n(e.name)}},"delete"))}):e.persons.filter(function(n){return n.name.toUpperCase().includes(e.newFilter.toUpperCase())}).map(function(e){return r.a.createElement("div",{key:e.name}," ",e.name," ",e.number,r.a.createElement("button",{onClick:function(){return n(e.name)}},"delete"))})},w=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(""),i=Object(u.a)(c,2),d=i[0],w=i[1],E=Object(a.useState)(""),g=Object(u.a)(E,2),N=g[0],j=g[1],C=Object(a.useState)(""),O=Object(u.a)(C,2),k=O[0],y=O[1],F=Object(a.useState)(null),S=Object(u.a)(F,2),T=S[0],D=S[1],P=Object(a.useState)(null),U=Object(u.a)(P,2),A=U[0],B=U[1];Object(a.useEffect)(function(){m().then(function(e){o(e.data)})},[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(h,{message:A}),r.a.createElement(f,{message:T}),r.a.createElement(p,{newFilter:k,handleFilterChange:function(e){y(e.target.value)}}),r.a.createElement("h3",null,"Add a new"),r.a.createElement(b,{addName:function(e){e.preventDefault();var n={name:d,number:N};if(t.map(function(e){return e.name}).includes(d)){if(window.confirm("".concat(d," is already added to phonebook, replace the old number with a new one?"))){var a=t.find(function(e){return e.name===d}).id,r="/api/persons/".concat(a);l.a.put(r,n).then(function(e){o(t.map(function(n){return n.name!==d?n:e.data})),w(""),j(""),D("Updated ".concat(n.name)),setTimeout(function(){D(null)},5e3)}).catch(function(e){B("Information of ".concat(n.name," has already been removed from server")),setTimeout(function(){B(null)},5e3)})}}else s(n).then(function(e){o(t.concat(e.data)),w(""),j(""),D("Added ".concat(n.name)),setTimeout(function(){D(null)},5e3)}).catch(function(e){B(e.response.data.error),setTimeout(function(){B(null)},5e3)})},newName:d,handleNameChange:function(e){w(e.target.value)},newNumber:N,handleNumberChange:function(e){j(e.target.value)}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(v,{newFilter:k,setPersons:o,persons:t,setNotification:D}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,1,2]]]);
//# sourceMappingURL=main.a00ab4e9.chunk.js.map