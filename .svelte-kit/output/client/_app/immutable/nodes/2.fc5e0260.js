import{s as se,r as He,f as ce,n as de}from"../chunks/scheduler.63274e7e.js";import{S as ie,i as oe,r as U,s as D,g,u as B,c as j,h as b,x as K,j as E,f,k as o,v as W,a as T,y as r,d as J,t as X,w as Z,z as ee,A as ae,B as Se,C as Ve,D as ue,m as N,n as R}from"../chunks/index.deb28cb3.js";import{V as pe}from"../chunks/Variables.e4716a08.js";import{F as qe}from"../chunks/Footer.11e7f08e.js";function Q(c){return(c==null?void 0:c.length)!==void 0?c:Array.from(c)}function _e(c){let e,a,t,_,w,p,n,v,d,l,h,s,m,u,i,$,C,V,q,k,A,L,F,G=`Soy mayor de 16 años. Acepto el tratamiento de mis datos en los
              términos abajo indicados, con la finalidad de gestionar mi
              suscripción, y confirmo haber leído y aceptado la <a href="/privacidad" class="svelte-1ljnzd8">Política de Privacidad</a>`,H,M,S,P="Enviar",O,z;return{c(){e=g("form"),a=g("div"),t=g("div"),_=g("input"),w=D(),p=g("div"),n=g("input"),v=D(),d=g("div"),l=g("input"),h=D(),s=g("div"),m=g("textarea"),u=D(),i=g("div"),$=g("input"),C=D(),V=g("div"),q=g("p"),k=g("label"),A=g("input"),L=D(),F=g("span"),F.innerHTML=G,H=D(),M=g("div"),S=g("button"),S.textContent=P,this.h()},l(y){e=b(y,"FORM",{});var x=E(e);a=b(x,"DIV",{class:!0});var I=E(a);t=b(I,"DIV",{class:!0});var Y=E(t);_=b(Y,"INPUT",{class:!0,type:!0,name:!0,id:!0,placeholder:!0}),Y.forEach(f),w=j(I),p=b(I,"DIV",{class:!0});var te=E(p);n=b(te,"INPUT",{class:!0,type:!0,name:!0,id:!0,placeholder:!0}),te.forEach(f),v=j(I),d=b(I,"DIV",{class:!0});var re=E(d);l=b(re,"INPUT",{class:!0,type:!0,name:!0,id:!0,placeholder:!0}),re.forEach(f),h=j(I),s=b(I,"DIV",{class:!0});var fe=E(s);m=b(fe,"TEXTAREA",{class:!0,name:!0,id:!0,placeholder:!0}),E(m).forEach(f),fe.forEach(f),u=j(I),i=b(I,"DIV",{class:!0});var he=E(i);$=b(he,"INPUT",{class:!0,type:!0,name:!0,id:!0,placeholder:!0}),he.forEach(f),C=j(I),V=b(I,"DIV",{class:!0});var ve=E(V);q=b(ve,"P",{});var me=E(q);k=b(me,"LABEL",{});var le=E(k);A=b(le,"INPUT",{class:!0,type:!0}),L=j(le),F=b(le,"SPAN",{class:!0,"data-svelte-h":!0}),K(F)!=="svelte-1wyosic"&&(F.innerHTML=G),le.forEach(f),me.forEach(f),ve.forEach(f),H=j(I),M=b(I,"DIV",{class:!0});var ne=E(M);S=b(ne,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),K(S)!=="svelte-1ypd37u"&&(S.textContent=P),ne.forEach(f),I.forEach(f),x.forEach(f),this.h()},h(){o(_,"class","contacto__input svelte-1ljnzd8"),o(_,"type","text"),o(_,"name","nombre"),o(_,"id","nombre"),o(_,"placeholder","Nombre"),_.required=!0,o(t,"class","col s6 pt-2 pb-2 pr-2"),o(n,"class","contacto__input svelte-1ljnzd8"),o(n,"type","text"),o(n,"name","apellidos"),o(n,"id","apellidos"),o(n,"placeholder","Apellidos"),n.required=!0,o(p,"class","col s6 pt-2 pb-2 pr-2"),o(l,"class","contacto__input svelte-1ljnzd8"),o(l,"type","email"),o(l,"name","email"),o(l,"id","email"),o(l,"placeholder","Correo electrónico"),l.required=!0,o(d,"class","col s12 pt-2 pb-2 pr-2"),o(m,"class","contacto__input--textarea svelte-1ljnzd8"),o(m,"name","mensaje"),o(m,"id","mensaje"),o(m,"placeholder","Mensaje"),m.required=!0,o(s,"class","col s12 pt-2 pb-2 pr-2"),o($,"class","contacto__input svelte-1ljnzd8"),o($,"type","number"),o($,"name","numero"),o($,"id","numero"),o($,"placeholder","¿Cuánto son 3+1?"),$.required=!0,o(i,"class","col s12 pt-2 pb-2 pr-2"),o(A,"class","contacto__input--checkbox svelte-1ljnzd8"),o(A,"type","checkbox"),A.required=!0,o(F,"class","svelte-1ljnzd8"),o(V,"class","col s12 pt-2 pb-2 pr-2"),o(S,"type","submit"),o(S,"class","svelte-1ljnzd8"),o(M,"class","col s12 pt-2 pb-2 pr-2 contacto__boton svelte-1ljnzd8"),o(a,"class","row")},m(y,x){T(y,e,x),r(e,a),r(a,t),r(t,_),ee(_,c[0].nombre),r(a,w),r(a,p),r(p,n),ee(n,c[0].apellidos),r(a,v),r(a,d),r(d,l),ee(l,c[0].email),r(a,h),r(a,s),r(s,m),ee(m,c[0].mensaje),r(a,u),r(a,i),r(i,$),ee($,c[0].numero),r(a,C),r(a,V),r(V,q),r(q,k),r(k,A),A.checked=c[0].aceptarTerminos,r(k,L),r(k,F),r(a,H),r(a,M),r(M,S),O||(z=[ae(_,"input",c[4]),ae(n,"input",c[5]),ae(l,"input",c[6]),ae(m,"input",c[7]),ae($,"input",c[8]),ae(A,"change",c[9]),ae(S,"click",c[3]),ae(e,"submit",Se(c[3]))],O=!0)},p(y,x){x&1&&_.value!==y[0].nombre&&ee(_,y[0].nombre),x&1&&n.value!==y[0].apellidos&&ee(n,y[0].apellidos),x&1&&l.value!==y[0].email&&ee(l,y[0].email),x&1&&ee(m,y[0].mensaje),x&1&&Ve($.value)!==y[0].numero&&ee($,y[0].numero),x&1&&(A.checked=y[0].aceptarTerminos)},d(y){y&&f(e),O=!1,He(z)}}}function ge(c){let e,a="¡Formulario enviado con éxito!";return{c(){e=g("p"),e.textContent=a,this.h()},l(t){e=b(t,"P",{class:!0,"data-svelte-h":!0}),K(e)!=="svelte-jgegdl"&&(e.textContent=a),this.h()},h(){o(e,"class","center-align")},m(t,_){T(t,e,_)},d(t){t&&f(e)}}}function Ae(c){let e,a,t,_='<h2 class="titulo__h2 svelte-1ljnzd8">CONTACTO</h2>',w,p,n,v='<h3 class="contacto__h3 svelte-1ljnzd8">Déjame un mensaje</h3> <p class="contacto__p">Te contactaré lo antes posible</p>',d,l,h;e=new pe({});let s=c[2]&&_e(c),m=c[1]&&ge();return{c(){U(e.$$.fragment),a=D(),t=g("div"),t.innerHTML=_,w=D(),p=g("section"),n=g("div"),n.innerHTML=v,d=D(),s&&s.c(),l=D(),m&&m.c(),this.h()},l(u){B(e.$$.fragment,u),a=j(u),t=b(u,"DIV",{class:!0,"data-svelte-h":!0}),K(t)!=="svelte-wdjm7y"&&(t.innerHTML=_),w=j(u),p=b(u,"SECTION",{id:!0});var i=E(p);n=b(i,"DIV",{class:!0,"data-svelte-h":!0}),K(n)!=="svelte-1ftnv98"&&(n.innerHTML=v),d=j(i),s&&s.l(i),l=j(i),m&&m.l(i),i.forEach(f),this.h()},h(){o(t,"class","titulo svelte-1ljnzd8"),o(n,"class","contacto__cabecera"),o(p,"id","contacto")},m(u,i){W(e,u,i),T(u,a,i),T(u,t,i),T(u,w,i),T(u,p,i),r(p,n),r(p,d),s&&s.m(p,null),r(p,l),m&&m.m(p,null),h=!0},p(u,[i]){u[2]?s?s.p(u,i):(s=_e(u),s.c(),s.m(p,l)):s&&(s.d(1),s=null),u[1]?m||(m=ge(),m.c(),m.m(p,null)):m&&(m.d(1),m=null)},i(u){h||(J(e.$$.fragment,u),h=!0)},o(u){X(e.$$.fragment,u),h=!1},d(u){u&&(f(a),f(t),f(w),f(p)),Z(e,u),s&&s.d(),m&&m.d()}}}function ke(c,e,a){let t={},_=!1,w=!0,p=!0;const n=async()=>{if(p=t.numero===4,!p){console.error("El resultado de la suma no es correcto");return}(await fetch("https://formspree.io/f/xzblnyqq",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).ok?(console.log("Formulario enviado con éxito"),a(1,_=!0),a(2,w=!1),setTimeout(()=>{a(1,_=!1),a(2,w=!0)},3e3)):console.error("Error al enviar el formulario")};function v(){t.nombre=this.value,a(0,t)}function d(){t.apellidos=this.value,a(0,t)}function l(){t.email=this.value,a(0,t)}function h(){t.mensaje=this.value,a(0,t)}function s(){t.numero=Ve(this.value),a(0,t)}function m(){t.aceptarTerminos=this.checked,a(0,t)}return[t,_,w,n,v,d,l,h,s,m]}class Le extends ie{constructor(e){super(),oe(this,e,ke,Ae,se,{})}}function be(c,e,a){const t=c.slice();return t[1]=e[a],t}function we(c,e,a){const t=c.slice();return t[4]=e[a],t}function $e(c){let e,a,t=c[4]+"",_,w;return{c(){e=g("div"),a=g("p"),_=N(t),w=D(),this.h()},l(p){e=b(p,"DIV",{class:!0});var n=E(e);a=b(n,"P",{class:!0});var v=E(a);_=R(v,t),v.forEach(f),w=j(n),n.forEach(f),this.h()},h(){o(a,"class","pills__p svelte-rggin2"),o(e,"class","pills__contenedor svelte-rggin2")},m(p,n){T(p,e,n),r(e,a),r(a,_),r(e,w)},p:de,d(p){p&&f(e)}}}function Ee(c){let e,a,t,_=c[1].date+"",w,p,n,v,d=c[1].titulo+"",l,h,s,m,u,i=c[1].tipo+"",$,C,V,q,k=c[1].institucion+"",A,L,F,G=c[1].descripcion+"",H,M,S,P,O=Q(c[1].pills),z=[];for(let y=0;y<O.length;y+=1)z[y]=$e(we(c,O,y));return{c(){e=g("div"),a=g("div"),t=g("h4"),w=N(_),p=D(),n=g("h3"),v=g("a"),l=N(d),h=g("img"),m=D(),u=g("p"),$=N(i),C=D(),V=g("p"),q=g("em"),A=N(k),L=D(),F=g("p"),H=N(G),M=D(),S=g("div");for(let y=0;y<z.length;y+=1)z[y].c();P=D(),this.h()},l(y){e=b(y,"DIV",{class:!0});var x=E(e);a=b(x,"DIV",{class:!0});var I=E(a);t=b(I,"H4",{class:!0});var Y=E(t);w=R(Y,_),Y.forEach(f),p=j(I),n=b(I,"H3",{class:!0});var te=E(n);v=b(te,"A",{class:!0,href:!0});var re=E(v);l=R(re,d),h=b(re,"IMG",{src:!0,alt:!0,class:!0}),re.forEach(f),te.forEach(f),m=j(I),u=b(I,"P",{class:!0});var fe=E(u);$=R(fe,i),fe.forEach(f),C=j(I),V=b(I,"P",{class:!0});var he=E(V);q=b(he,"EM",{});var ve=E(q);A=R(ve,k),ve.forEach(f),he.forEach(f),L=j(I),F=b(I,"P",{class:!0});var me=E(F);H=R(me,G),me.forEach(f),M=j(I),S=b(I,"DIV",{class:!0});var le=E(S);for(let ne=0;ne<z.length;ne+=1)z[ne].l(le);le.forEach(f),I.forEach(f),P=j(x),x.forEach(f),this.h()},h(){o(t,"class","educacion__h4 svelte-rggin2"),ce(h.src,s="./flecha.svg")||o(h,"src",s),o(h,"alt","flecha de enlace"),o(h,"class","svelte-rggin2"),o(v,"class","educacion__h3 svelte-rggin2"),o(v,"href",c[1].web),o(n,"class","educacion__h3 svelte-rggin2"),o(u,"class","educacion__tipo svelte-rggin2"),o(V,"class","educacion__institucion svelte-rggin2"),o(F,"class","educacion__descripcion svelte-rggin2"),o(S,"class","pills svelte-rggin2"),o(a,"class","educacion__detalles svelte-rggin2"),o(e,"class","educacion svelte-rggin2")},m(y,x){T(y,e,x),r(e,a),r(a,t),r(t,w),r(a,p),r(a,n),r(n,v),r(v,l),r(v,h),r(a,m),r(a,u),r(u,$),r(a,C),r(a,V),r(V,q),r(q,A),r(a,L),r(a,F),r(F,H),r(a,M),r(a,S);for(let I=0;I<z.length;I+=1)z[I]&&z[I].m(S,null);r(e,P)},p(y,x){if(x&1){O=Q(y[1].pills);let I;for(I=0;I<O.length;I+=1){const Y=we(y,O,I);z[I]?z[I].p(Y,x):(z[I]=$e(Y),z[I].c(),z[I].m(S,null))}for(;I<z.length;I+=1)z[I].d(1);z.length=O.length}},d(y){y&&f(e),ue(z,y)}}}function Fe(c){let e,a,t,_='<div><h2 class="titulo__h2 svelte-rggin2">EDUCACIÓN</h2></div> <div><img src="combined-shape@2x.webp" alt="Flecha que indica que te puedes mover el scroll de forma horizontal" title="Flecha que indica que te puedes mover de forma horizontal"/></div>',w,p,n;e=new pe({});let v=Q(c[0]),d=[];for(let l=0;l<v.length;l+=1)d[l]=Ee(be(c,v,l));return{c(){U(e.$$.fragment),a=D(),t=g("div"),t.innerHTML=_,w=D(),p=g("section");for(let l=0;l<d.length;l+=1)d[l].c();this.h()},l(l){B(e.$$.fragment,l),a=j(l),t=b(l,"DIV",{class:!0,"data-svelte-h":!0}),K(t)!=="svelte-ojbe5k"&&(t.innerHTML=_),w=j(l),p=b(l,"SECTION",{id:!0,class:!0});var h=E(p);for(let s=0;s<d.length;s+=1)d[s].l(h);h.forEach(f),this.h()},h(){o(t,"class","educacion__titulo svelte-rggin2"),o(p,"id","educacion"),o(p,"class","svelte-rggin2")},m(l,h){W(e,l,h),T(l,a,h),T(l,t,h),T(l,w,h),T(l,p,h);for(let s=0;s<d.length;s+=1)d[s]&&d[s].m(p,null);n=!0},p(l,[h]){if(h&1){v=Q(l[0]);let s;for(s=0;s<v.length;s+=1){const m=be(l,v,s);d[s]?d[s].p(m,h):(d[s]=Ee(m),d[s].c(),d[s].m(p,null))}for(;s<d.length;s+=1)d[s].d(1);d.length=v.length}},i(l){n||(J(e.$$.fragment,l),n=!0)},o(l){X(e.$$.fragment,l),n=!1},d(l){l&&(f(a),f(t),f(w),f(p)),Z(e,l),ue(d,l)}}}function ze(c){return[[{date:"Mar-Jun 2023",titulo:"Docencia para la F.P. para el empleo",tipo:"Certificado de profesionalidad",institucion:"FORGA",descripcion:"Certificado que habilita para la docencia de los grupos A, B y C de la Formación Profesional.",pills:["Docencia"],web:"https://sede.sepe.gob.es/especialidadesformativas/RXBuscadorEFRED/DetalleEspecialidad.do?codEspecialidad=SSCE0110"},{date:"Mar-Dic 2020",titulo:"Desarrollo de aplicaciones con tecnologías web",tipo:"Certificado de profesionalidad",institucion:"CEC",descripcion:"Certificado de nivel 3 que habilita como técnico en desarrollo web.",pills:["HTML","CSS","JavaScript","Firebase","API Rest","Express"],web:"https://sede.sepe.gob.es/especialidadesformativas/RXBuscadorEFRED/DetalleEspecialidad.do?codEspecialidad=IFCD0210"},{date:"2015-2017",titulo:"FP GM Preimpresión digital",tipo:"Formación Profesional",institucion:"Afundación Colegio Hogar",descripcion:"Preparación de 2 años para la elaboración de productos de diseño gráfico e impresión digital.",pills:["Photoshop","Illustrator","InDesign","AfterEffects","Roland Versaworks","Trotec JobControl","HTML"],web:"https://www.todofp.es/que-estudiar/loe/artes-graficas/preimpresion-digital.html"},{date:"2014-2015",titulo:"Gestión Cultural",tipo:"Experto universitario",institucion:"Universidade de Santiago de Compostela",descripcion:"Formación para la planificación de actividades de gestión cultural como exposiciones o conciertos.",pills:["Marketing","Gestión financiera","Legislación cultural","Administración"],web:"https://www.usc.gal/es/estudios/propios/posgrado/area-ciencias-juridicas-sociales/20222023/curso-experto-gestion-innovacion-cultural"},{date:"2012-2013",titulo:"Estudios medievales europeos",tipo:"Máster oficial universitario",institucion:"Universidade de Santiago de Compostela",descripcion:"Especialización en historia, historia del arte y filología medieval europea.",pills:["Historia","Historia del arte","Filología"],web:"https://www.usc.gal/filrom/teaching/master/?lang=es"},{date:"2006-2012",titulo:"Historia",tipo:"Licenciatura",institucion:"Universidade de Santiago de Compostela",descripcion:"Orientación en historia medieval, historia antigua y arqueología.",pills:["Historia","Historia antigua","Historia medieval","Arqueología","Biblioteconomía"],web:"https://www.usc.gal/es/estudios/grados/artes-humanidades/grado-historia"}]]}class xe extends ie{constructor(e){super(),oe(this,e,ze,Fe,se,{})}}function Ie(c,e,a){const t=c.slice();return t[1]=e[a],t}function De(c,e,a){const t=c.slice();return t[4]=e[a],t}function je(c){let e,a,t=c[4]+"",_,w;return{c(){e=g("div"),a=g("p"),_=N(t),w=D(),this.h()},l(p){e=b(p,"DIV",{class:!0});var n=E(e);a=b(n,"P",{class:!0});var v=E(a);_=R(v,t),v.forEach(f),w=j(n),n.forEach(f),this.h()},h(){o(a,"class","pills__p svelte-1cmhpdo"),o(e,"class","pills__contenedor svelte-1cmhpdo")},m(p,n){T(p,e,n),r(e,a),r(a,_),r(e,w)},p:de,d(p){p&&f(e)}}}function Ce(c){let e,a,t,_=c[1].date+"",w,p,n,v,d=c[1].empresa+"",l,h,s,m,u,i=c[1].profesion+"",$,C,V,q=c[1].descripcion+"",k,A,L,F,G=Q(c[1].pills),H=[];for(let M=0;M<G.length;M+=1)H[M]=je(De(c,G,M));return{c(){e=g("div"),a=g("div"),t=g("h4"),w=N(_),p=D(),n=g("h3"),v=g("a"),l=N(d),h=g("img"),m=D(),u=g("p"),$=N(i),C=D(),V=g("p"),k=N(q),A=D(),L=g("div");for(let M=0;M<H.length;M+=1)H[M].c();F=D(),this.h()},l(M){e=b(M,"DIV",{class:!0});var S=E(e);a=b(S,"DIV",{class:!0});var P=E(a);t=b(P,"H4",{class:!0});var O=E(t);w=R(O,_),O.forEach(f),p=j(P),n=b(P,"H3",{class:!0});var z=E(n);v=b(z,"A",{class:!0,href:!0});var y=E(v);l=R(y,d),h=b(y,"IMG",{src:!0,alt:!0,class:!0}),y.forEach(f),z.forEach(f),m=j(P),u=b(P,"P",{class:!0});var x=E(u);$=R(x,i),x.forEach(f),C=j(P),V=b(P,"P",{class:!0});var I=E(V);k=R(I,q),I.forEach(f),A=j(P),L=b(P,"DIV",{class:!0});var Y=E(L);for(let te=0;te<H.length;te+=1)H[te].l(Y);Y.forEach(f),P.forEach(f),F=j(S),S.forEach(f),this.h()},h(){o(t,"class","experiencia__h4 svelte-1cmhpdo"),ce(h.src,s="./flecha.svg")||o(h,"src",s),o(h,"alt","flecha de enlace"),o(h,"class","svelte-1cmhpdo"),o(v,"class","experiencia__h3 svelte-1cmhpdo"),o(v,"href",c[1].web),o(n,"class","experiencia__h3 svelte-1cmhpdo"),o(u,"class","experiencia__profesion svelte-1cmhpdo"),o(V,"class","experiencia__descripcion svelte-1cmhpdo"),o(L,"class","pills svelte-1cmhpdo"),o(a,"class","experiencia__detalles svelte-1cmhpdo"),o(e,"class","experiencia svelte-1cmhpdo")},m(M,S){T(M,e,S),r(e,a),r(a,t),r(t,w),r(a,p),r(a,n),r(n,v),r(v,l),r(v,h),r(a,m),r(a,u),r(u,$),r(a,C),r(a,V),r(V,k),r(a,A),r(a,L);for(let P=0;P<H.length;P+=1)H[P]&&H[P].m(L,null);r(e,F)},p(M,S){if(S&1){G=Q(M[1].pills);let P;for(P=0;P<G.length;P+=1){const O=De(M,G,P);H[P]?H[P].p(O,S):(H[P]=je(O),H[P].c(),H[P].m(L,null))}for(;P<H.length;P+=1)H[P].d(1);H.length=G.length}},d(M){M&&f(e),ue(H,M)}}}function Ge(c){let e,a,t,_='<div><h2 class="titulo__h2 svelte-1cmhpdo">EXPERIENCIA</h2></div> <div><img src="combined-shape@2x.webp" alt="Flecha que indica que te puedes mover el scroll de forma horizontal" title="Flecha que indica que te puedes mover de forma horizontal"/></div>',w,p,n;e=new pe({});let v=Q(c[0]),d=[];for(let l=0;l<v.length;l+=1)d[l]=Ce(Ie(c,v,l));return{c(){U(e.$$.fragment),a=D(),t=g("div"),t.innerHTML=_,w=D(),p=g("section");for(let l=0;l<d.length;l+=1)d[l].c();this.h()},l(l){B(e.$$.fragment,l),a=j(l),t=b(l,"DIV",{class:!0,"data-svelte-h":!0}),K(t)!=="svelte-141f0vt"&&(t.innerHTML=_),w=j(l),p=b(l,"SECTION",{id:!0,class:!0});var h=E(p);for(let s=0;s<d.length;s+=1)d[s].l(h);h.forEach(f),this.h()},h(){o(t,"class","experiencia__titulo svelte-1cmhpdo"),o(p,"id","experiencia"),o(p,"class","svelte-1cmhpdo")},m(l,h){W(e,l,h),T(l,a,h),T(l,t,h),T(l,w,h),T(l,p,h);for(let s=0;s<d.length;s+=1)d[s]&&d[s].m(p,null);n=!0},p(l,[h]){if(h&1){v=Q(l[0]);let s;for(s=0;s<v.length;s+=1){const m=Ie(l,v,s);d[s]?d[s].p(m,h):(d[s]=Ce(m),d[s].c(),d[s].m(p,null))}for(;s<d.length;s+=1)d[s].d(1);d.length=v.length}},i(l){n||(J(e.$$.fragment,l),n=!0)},o(l){X(e.$$.fragment,l),n=!1},d(l){l&&(f(a),f(t),f(w),f(p)),Z(e,l),ue(d,l)}}}function Oe(c){return[[{date:"actualidad",empresa:"Grupo Academia Postal",profesion:"Profesor titular",descripcion:"Profesor titular de certificados de profesionalidad de la familia de tecnologías de la información.",pills:["HTML","CSS","JavaScript","UX/UI","Hardware"],web:"https://www.academiapostal.es/"},{date:"2021-2022",empresa:"Freelancer",profesion:"Diseñador & Desarrollador web",descripcion:"Desarrollador web y diseñador gráfico de recursos para web y redes sociales.",pills:["Photoshop","Illustrator","InDesign","HTML","WordPress"],web:"https://www.rubenterre.com/"},{date:"2018-2019",empresa:"ADM Comunicaciones",profesion:"Diseñador & Desarrollador web",descripcion:"Diseñador gráfico y maquetador web. Creación de web de empresa y papelería publicitaria y corporativa.",pills:["Photoshop","Illustrator","InDesign","WordPress","Prestashop","AfterEffects"],web:"https://www.admcomunicaciones.com/"},{date:"2017-2018",empresa:"INVBIT - Diseño y desarrollo web",profesion:"Diseñador & Desarrollador web",descripcion:"Diseñador gráfico y maquetador web. Creación de páginas web y e-commerce (Wordpress...).",pills:["Photoshop","Illustrator","InDesign","HTML","WordPress"],web:"https://www.invbit.com/"}]]}class Ne extends ie{constructor(e){super(),oe(this,e,Oe,Ge,se,{})}}function ye(c,e,a){const t=c.slice();return t[1]=e[a],t}function Me(c){let e,a,t,_,w,p,n,v,d=c[1].date+"",l,h,s,m,u=c[1].titular+"",i,$,C,V,q;return{c(){e=g("div"),a=g("div"),t=g("div"),_=g("img"),p=D(),n=g("div"),v=g("p"),l=N(d),h=D(),s=g("a"),m=g("h3"),i=N(u),$=D(),C=g("img"),q=D(),this.h()},l(k){e=b(k,"DIV",{class:!0});var A=E(e);a=b(A,"DIV",{class:!0});var L=E(a);t=b(L,"DIV",{class:!0});var F=E(t);_=b(F,"IMG",{src:!0,alt:!0}),F.forEach(f),p=j(L),n=b(L,"DIV",{class:!0});var G=E(n);v=b(G,"P",{class:!0});var H=E(v);l=R(H,d),H.forEach(f),h=j(G),s=b(G,"A",{target:!0,rel:!0,href:!0});var M=E(s);m=b(M,"H3",{class:!0});var S=E(m);i=R(S,u),$=j(S),C=b(S,"IMG",{src:!0,alt:!0,class:!0}),S.forEach(f),M.forEach(f),G.forEach(f),L.forEach(f),q=j(A),A.forEach(f),this.h()},h(){ce(_.src,w=c[1].img)||o(_,"src",w),o(_,"alt",c[1].alt),o(t,"class","noticias__img svelte-1jj00ha"),o(v,"class","noticias__p svelte-1jj00ha"),ce(C.src,V="./flecha.svg")||o(C,"src",V),o(C,"alt","flecha de enlace"),o(C,"class","svelte-1jj00ha"),o(m,"class","noticias__h3 svelte-1jj00ha"),o(s,"target","_blank"),o(s,"rel","noopener noreferrer"),o(s,"href",c[1].web),o(n,"class","noticias__detalle svelte-1jj00ha"),o(a,"class","noticias__card svelte-1jj00ha"),o(e,"class","col s12 m6")},m(k,A){T(k,e,A),r(e,a),r(a,t),r(t,_),r(a,p),r(a,n),r(n,v),r(v,l),r(n,h),r(n,s),r(s,m),r(m,i),r(m,$),r(m,C),r(e,q)},p:de,d(k){k&&f(e)}}}function Re(c){let e,a,t,_,w='<h2 class="titulo__h2 svelte-1jj00ha">NOTICIAS</h2>',p,n,v,d;e=new pe({});let l=Q(c[0]),h=[];for(let s=0;s<l.length;s+=1)h[s]=Me(ye(c,l,s));return{c(){U(e.$$.fragment),a=D(),t=g("section"),_=g("div"),_.innerHTML=w,p=D(),n=g("div"),v=g("div");for(let s=0;s<h.length;s+=1)h[s].c();this.h()},l(s){B(e.$$.fragment,s),a=j(s),t=b(s,"SECTION",{id:!0});var m=E(t);_=b(m,"DIV",{class:!0,"data-svelte-h":!0}),K(_)!=="svelte-bb7asn"&&(_.innerHTML=w),p=j(m),n=b(m,"DIV",{class:!0});var u=E(n);v=b(u,"DIV",{class:!0});var i=E(v);for(let $=0;$<h.length;$+=1)h[$].l(i);i.forEach(f),u.forEach(f),m.forEach(f),this.h()},h(){o(_,"class","titulo svelte-1jj00ha"),o(v,"class","row"),o(n,"class","noticias"),o(t,"id","noticias")},m(s,m){W(e,s,m),T(s,a,m),T(s,t,m),r(t,_),r(t,p),r(t,n),r(n,v);for(let u=0;u<h.length;u+=1)h[u]&&h[u].m(v,null);d=!0},p(s,[m]){if(m&1){l=Q(s[0]);let u;for(u=0;u<l.length;u+=1){const i=ye(s,l,u);h[u]?h[u].p(i,m):(h[u]=Me(i),h[u].c(),h[u].m(v,null))}for(;u<h.length;u+=1)h[u].d(1);h.length=l.length}},i(s){d||(J(e.$$.fragment,s),d=!0)},o(s){X(e.$$.fragment,s),d=!1},d(s){s&&(f(a),f(t)),Z(e,s),ue(h,s)}}}function Ue(c){return[[{date:"2017",img:"img/noticias/A_Vivir_Galicia_Ruben_Terre.png",alt:"Imagen de Radio Galega",titular:"Entrevista en el programa 'Coñecer Galicia' de Radio galega",web:"http://www.crtvg.es/rg/a-carta/conecer-galicia-conecer-galicia-do-dia-21-01-2017-2650682"},{date:"2016",img:"img/noticias/Faro_De_Vigo_1_Ruben_Terre.png",alt:"Imagen del Faro de Vigo",titular:"Curso de verano de la Universidade de Santiago de Compostela",web:"https://www.farodevigo.es/arousa/2016/07/10/vista-real-profundiza-historia-comarca-16562686.html"},{date:"2016",img:"img/noticias/Entrevista_Faro_de_Vigo_Ruben_Terre.png",alt:"Imagen de entrevista en el Faro de Vigo",titular:"Entrevista en el periódico Faro de Vigo",web:"http://www.farodevigo.es/portada-arousa/2016/07/11/ruben-terre-ria-arousa-puerta/1496290.html"},{date:"2016",img:"img/noticias/Canal_7_Ruben_Terre.png",alt:"Imagen de presentación del libro 'Os viquingos na comarca do Salnés' en Cambados",titular:"Presentación del libro 'Os viquingos na comarca do Salnés",web:"http://www.canalriasbaixas.com/index.php/cultura/item/19894-a-mancomunidade-aposta-polo-pasado-vikingo-do-salnes-como-atractivo-cultural-e-turistico"},{date:"2016",img:"img/noticias/Presentacion_Faro_de_Vigo_Ruben_Terre.png",alt:"Imagen de presentación del libro 'Os viquingos na comarca do Salnés' y entrevista en Faro de Vigo",titular:"Entrevista en Faro de Vigo sobre los vikingos en Galicia",web:"https://www.farodevigo.es/arousa/2016/07/11/ruben-terre-ria-arousa-puerta-16562154.html"},{date:"2016",img:"img/noticias/La_Voz_De_Galicia_Ruben_Terre.png",alt:"Imagen de entrevista en La Voz de Galicia",titular:"Entrevista en La Voz de Galicia",web:"https://www.lavozdegalicia.es/noticia/arousa/vilagarcia-de-arousa/2015/11/06/salnes-saca-partido-vikingos/0003_201511A6C5999.html"}]]}class Be extends ie{constructor(e){super(),oe(this,e,Ue,Re,se,{})}}function We(c){let e,a,t,_='<h2 class="titulo__h2 svelte-14lajh2">PERFIL</h2>',w,p,n=`<p class="perfil__p col s12 m6 svelte-14lajh2">Hoy día existe una gran cantidad de medios y soportes en los que vemos a
    diario trabajos de <span class="perfil__span svelte-14lajh2">diseño gráfico</span>. De
    hecho, estos son tan abundantes que muchas veces apenas nos damos cuenta de
    que están ahí. No tienen por qué ser grandes rotulaciones, simplemente las
    letras de una bolsa o la estructura de una factura son prueba de esa
    presencia omnipresente del diseño.</p> <p class="perfil__p col s12 m6 svelte-14lajh2">En el ámbito digital cobra especial importancia el desarrollo web. En esta
    área la <span class="perfil__span svelte-14lajh2">docencia</span> no se limita a la transmisión
    de habilidades técnicas; va más allá, formando a individuos capaces de plasmar
    valores y aspiraciones a través de la creación digital.
    Así como una buena poesía comunica lo inefable con pocas palabras, un diseño
    bien ejecutado, guiado por un educador experto en <span class="perfil__span svelte-14lajh2">desarrollo web</span>, tiene el poder de inspirar y cautivar.</p>`,v;return e=new pe({}),{c(){U(e.$$.fragment),a=D(),t=g("div"),t.innerHTML=_,w=D(),p=g("section"),p.innerHTML=n,this.h()},l(d){B(e.$$.fragment,d),a=j(d),t=b(d,"DIV",{class:!0,"data-svelte-h":!0}),K(t)!=="svelte-8ha3r1"&&(t.innerHTML=_),w=j(d),p=b(d,"SECTION",{class:!0,"data-svelte-h":!0}),K(p)!=="svelte-1cweqvw"&&(p.innerHTML=n),this.h()},h(){o(t,"class","titulo svelte-14lajh2"),o(p,"class","perfil row svelte-14lajh2")},m(d,l){W(e,d,l),T(d,a,l),T(d,t,l),T(d,w,l),T(d,p,l),v=!0},p:de,i(d){v||(J(e.$$.fragment,d),v=!0)},o(d){X(e.$$.fragment,d),v=!1},d(d){d&&(f(a),f(t),f(w),f(p)),Z(e,d)}}}class Je extends ie{constructor(e){super(),oe(this,e,null,We,se,{})}}function Pe(c,e,a){const t=c.slice();return t[1]=e[a],t}function Te(c){let e,a,t,_,w,p=c[1].proyecto+"",n,v,d,l,h,s=c[1].descripcion+"",m,u,i,$,C,V;return{c(){e=g("div"),a=g("div"),t=g("div"),_=g("a"),w=g("h3"),n=N(p),v=g("img"),l=D(),h=g("p"),m=N(s),u=D(),i=g("div"),$=g("img"),V=D(),this.h()},l(q){e=b(q,"DIV",{class:!0});var k=E(e);a=b(k,"DIV",{class:!0});var A=E(a);t=b(A,"DIV",{class:!0});var L=E(t);_=b(L,"A",{href:!0});var F=E(_);w=b(F,"H3",{class:!0});var G=E(w);n=R(G,p),v=b(G,"IMG",{src:!0,alt:!0,class:!0}),G.forEach(f),F.forEach(f),l=j(L),h=b(L,"P",{class:!0});var H=E(h);m=R(H,s),H.forEach(f),L.forEach(f),u=j(A),i=b(A,"DIV",{class:!0});var M=E(i);$=b(M,"IMG",{src:!0,alt:!0,class:!0}),M.forEach(f),A.forEach(f),V=j(k),k.forEach(f),this.h()},h(){ce(v.src,d="./flecha.svg")||o(v,"src",d),o(v,"alt","flecha de enlace"),o(v,"class","svelte-15l1jwb"),o(w,"class","portfolio__h3 svelte-15l1jwb"),o(_,"href",c[1].web),o(h,"class","portfolio__p svelte-15l1jwb"),o(t,"class","portfolio__detalle"),ce($.src,C=c[1].img)||o($,"src",C),o($,"alt",c[1].alt),o($,"class","svelte-15l1jwb"),o(i,"class","portfolio__img svelte-15l1jwb"),o(a,"class","portfolio__tarjeta svelte-15l1jwb"),o(e,"class","col s12 m6 porfolio__item svelte-15l1jwb")},m(q,k){T(q,e,k),r(e,a),r(a,t),r(t,_),r(_,w),r(w,n),r(w,v),r(t,l),r(t,h),r(h,m),r(a,u),r(a,i),r(i,$),r(e,V)},p:de,d(q){q&&f(e)}}}function Xe(c){let e,a,t,_,w='<h2 class="titulo__h2 svelte-15l1jwb">PORTFOLIO</h2>',p,n,v,d,l,h='<a class="portfolio__a svelte-15l1jwb" href="#">Ver más trabajos <img src="./flecha.svg" alt="flecha de enlace"/></a>',s;e=new pe({});let m=Q(c[0]),u=[];for(let i=0;i<m.length;i+=1)u[i]=Te(Pe(c,m,i));return{c(){U(e.$$.fragment),a=D(),t=g("section"),_=g("div"),_.innerHTML=w,p=D(),n=g("div"),v=g("div");for(let i=0;i<u.length;i+=1)u[i].c();d=D(),l=g("div"),l.innerHTML=h,this.h()},l(i){B(e.$$.fragment,i),a=j(i),t=b(i,"SECTION",{id:!0});var $=E(t);_=b($,"DIV",{class:!0,"data-svelte-h":!0}),K(_)!=="svelte-1jnoxh7"&&(_.innerHTML=w),p=j($),n=b($,"DIV",{class:!0});var C=E(n);v=b(C,"DIV",{class:!0});var V=E(v);for(let q=0;q<u.length;q+=1)u[q].l(V);V.forEach(f),C.forEach(f),d=j($),l=b($,"DIV",{class:!0,"data-svelte-h":!0}),K(l)!=="svelte-1li6hrq"&&(l.innerHTML=h),$.forEach(f),this.h()},h(){o(_,"class","titulo svelte-15l1jwb"),o(v,"class","row"),o(n,"class","portfolio svelte-15l1jwb"),o(l,"class","portfolio__enlace svelte-15l1jwb"),o(t,"id","portfolio")},m(i,$){W(e,i,$),T(i,a,$),T(i,t,$),r(t,_),r(t,p),r(t,n),r(n,v);for(let C=0;C<u.length;C+=1)u[C]&&u[C].m(v,null);r(t,d),r(t,l),s=!0},p(i,[$]){if($&1){m=Q(i[0]);let C;for(C=0;C<m.length;C+=1){const V=Pe(i,m,C);u[C]?u[C].p(V,$):(u[C]=Te(V),u[C].c(),u[C].m(v,null))}for(;C<u.length;C+=1)u[C].d(1);u.length=m.length}},i(i){s||(J(e.$$.fragment,i),s=!0)},o(i){X(e.$$.fragment,i),s=!1},d(i){i&&(f(a),f(t)),Z(e,i),ue(u,i)}}}function Ze(c){return[[{img:"img/portfolio/GaliciaWeather_iPhone12_Mockup.png",alt:"Imagen de GaliciaWeather",proyecto:"GaliciaWeather App",descripcion:"Desarrollo de app del tiempo especializada en poblaciones de Galicia. Ha sido diseñada con Sketch y está desarrollada con Svelte, Materialize CSS y la API de OpenWeatherMaps.",web:"https://www.behance.net/gallery/155847275/Galicia-Weather-App"},{img:"img/portfolio/Os_Viquingos_na_comarca_do_salnes_iPhone12_Mockup.png",alt:"Imagen del libro de Os viquingos na comarca do Salnés",proyecto:"Os Viquingos na comarca do Salnés - Publicación editorial",descripcion:"Edición editorial de esta publicación sobre los vikingos en la comarca del Salnés. Editado por Urco Editora y con la colaboración de la Mancomunidade do Salnés.",web:"https://urcoeditora.com/titulos/os-viquingos-na-comarca-do-salnes/"},{img:"img/portfolio/SoloHistoria_iPhone12_Mockup.png",alt:"Imagen de la app SoloHistoria",proyecto:"SoloHistoria App",descripcion:"Desarrollo de app de aprendizaje de historia medieval con audios y quizes. Diseñada con Sketch y desarrollada con HTML, CSS y JavaScript.",web:"https://www.behance.net/gallery/97500747/SoloHistoria-App-Learning-history"},{img:"img/portfolio/MuseoPoboGalego_iPhone12_Mockup.png",alt:"Imagen del prototipo de la web del Museo do Pobo Galego",proyecto:"Museo do pobo galego",descripcion:"Diseño de UX y UI de un prototipo de web pensado en el Museo do pobo galego. Diseñado con Sketch y Zeplin.",web:"https://www.behance.net/gallery/92767455/Museo-do-Pobo-Galego-Web-Design-Concept"},{img:"img/portfolio/ADM_Comunicaciones_iPhone12_Mockup.png",alt:"Imagen de la web de ADM Comunicaciones",proyecto:"ADM Comunicaciones",descripcion:"Diseño y desarrollo de la web corporativa de  ADM Comunicaciones. Diseñada con Photoshop y desarrollada con WordPress utilizando el builder Divi y WooCommerce.",web:"https://www.admcomunicaciones.com/"},{img:"img/portfolio/MieresBalsan_iPhone12_Mockup.png",alt:"Imagen del diseño de logo de Mieres & Balsan",proyecto:"Mieres & Balsan",descripcion:"Diseño del isologo de Mieres & Balsan realizado con Adobe Illustrator. Imagen corporativa de la empresa de asesores Mieres & Balsan.",web:"https://mieresasesores.com/"}]]}class Ke extends ie{constructor(e){super(),oe(this,e,Ze,Xe,se,{})}}function Qe(c){let e,a,t,_,w,p,n,v,d,l,h,s,m,u;return e=new Je({}),t=new Ne({}),w=new Ke({}),n=new xe({}),d=new Be({}),h=new Le({}),m=new qe({}),{c(){U(e.$$.fragment),a=D(),U(t.$$.fragment),_=D(),U(w.$$.fragment),p=D(),U(n.$$.fragment),v=D(),U(d.$$.fragment),l=D(),U(h.$$.fragment),s=D(),U(m.$$.fragment)},l(i){B(e.$$.fragment,i),a=j(i),B(t.$$.fragment,i),_=j(i),B(w.$$.fragment,i),p=j(i),B(n.$$.fragment,i),v=j(i),B(d.$$.fragment,i),l=j(i),B(h.$$.fragment,i),s=j(i),B(m.$$.fragment,i)},m(i,$){W(e,i,$),T(i,a,$),W(t,i,$),T(i,_,$),W(w,i,$),T(i,p,$),W(n,i,$),T(i,v,$),W(d,i,$),T(i,l,$),W(h,i,$),T(i,s,$),W(m,i,$),u=!0},p:de,i(i){u||(J(e.$$.fragment,i),J(t.$$.fragment,i),J(w.$$.fragment,i),J(n.$$.fragment,i),J(d.$$.fragment,i),J(h.$$.fragment,i),J(m.$$.fragment,i),u=!0)},o(i){X(e.$$.fragment,i),X(t.$$.fragment,i),X(w.$$.fragment,i),X(n.$$.fragment,i),X(d.$$.fragment,i),X(h.$$.fragment,i),X(m.$$.fragment,i),u=!1},d(i){i&&(f(a),f(_),f(p),f(v),f(l),f(s)),Z(e,i),Z(t,i),Z(w,i),Z(n,i),Z(d,i),Z(h,i),Z(m,i)}}}class lt extends ie{constructor(e){super(),oe(this,e,null,Qe,se,{})}}export{lt as component};
