(this.webpackJsonpauladeploy=this.webpackJsonpauladeploy||[]).push([[0],{28:function(e,t,a){e.exports=a(57)},51:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),o=a.n(c),i=a(7),s=a(2),l=a(3),u=a(5),d=a(4),m=a(6),h=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-light bg-light navbar-fixed-top"},r.a.createElement("a",{class:"navbar-brand"},r.a.createElement("img",{src:"https://cdn4.iconfinder.com/data/icons/car-garage-part-and-service-4/512/Turbo-car-automobile-engine-mechanic-power-turbocharger-512.png",width:"50",height:"50",class:"d-inline-block align-center",alt:""}),"\xa0\xa0\xa0\xa0Auto Pe\xe7as - Avenida"))}}]),t}(n.Component),p=a(10),f=a.n(p),v=a(24),b=a(25),g=a.n(b).a.create({baseURL:"https://api.sheety.co/"}),E=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:e.foto,className:"imgtop"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},e.nome," ",r.a.createElement("p",null,e.marca)),r.a.createElement("div",{className:"preco"},Number(e.preco).toLocaleString("pt-br",{style:"currency",currency:"BRL"}))),r.a.createElement("p",null),r.a.createElement("div",{className:"detalhes"},r.a.createElement("button",{Router:!0,to:"/detalhes/".concat(e.id),className:"btn btn-success btn-block"}," Detalhes")),r.a.createElement("p",null))},w=(a(51),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={ofertas:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!navigator.onLine){e.next=8;break}return e.next=3,g.get("45966615-0b85-4fd3-9487-57742a83bb65");case 3:t=e.sent,this.setState({ofertas:t.data}),localStorage.setItem("super_avenida",JSON.stringify(t.data)),e.next=12;break;case 8:return e.next=10,JSON.parse(localStorage.getItem("super_avenida"));case 10:a=e.sent,this.setState({ofertas:a});case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"container mt-2"},r.a.createElement("div",{className:"card-deck"},this.state.ofertas.map((function(e){return r.a.createElement(E,{key:e.id,id:e.id,nome:e.nome,marca:e.marca,descricao:e.descricao,preco:e.preco,foto:e.foto})}))))}}]),t}(n.Component)),y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={id:"",foto:"",nome:"",descricao:"",valor:0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6 mt-2"},r.a.createElement("div",{className:"card bg-dark text-white"},r.a.createElement("img",{src:this.state.foto,className:"card-img-top img-fluid",alt:"Carro"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},this.state.nome),r.a.createElement("p",{className:"card-text"},r.a.createElement("h6",null,"Descri\xe7\xe3o:"),this.state.descricao),r.a.createElement("p",{className:"card-text"},"Valor: ",this.state.valor.toLocaleString("pt-br",{style:"currency",currency:"BRL"})))))))}}]),t}(n.Component);var N=function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(w,null),r.a.createElement(i.a,{path:"/detalhes/${props.id}",component:y}))},k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(N,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/auladeploy",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/auladeploy","/custom-service-worker.js");k?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):O(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):O(t,e)}))}}()}},[[28,1,2]]]);
//# sourceMappingURL=main.abc829fb.chunk.js.map