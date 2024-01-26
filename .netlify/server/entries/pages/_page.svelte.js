import { c as create_ssr_component, v as validate_component, d as add_attribute, e as escape, f as each } from "../../chunks/ssr.js";
import { V as Variables } from "../../chunks/Variables.js";
import { F as Footer } from "../../chunks/Footer.js";
const Contacto_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".titulo.svelte-1ljnzd8{margin:80px 0px 30px 0px}.titulo__h2.svelte-1ljnzd8{font-family:var(--fuente-semibold);font-size:1rem;font-weight:normal;color:white;margin:0px}.contacto__h3.svelte-1ljnzd8{font-family:var(--fuente-regular);font-size:1rem;font-weight:normal;color:white}.contacto__input.svelte-1ljnzd8{background:var(--color-principal);border:1px solid var(--color-secundario);border-radius:8px;font-family:var(--fuente-regular);font-size:1rem;color:var(--color-secundario) !important;letter-spacing:0;padding-left:10px}.contacto__input.svelte-1ljnzd8::placeholder{color:var(--color-secundario)}.contacto__input--textarea.svelte-1ljnzd8{background:var(--color-principal);border:1px solid var(--color-secundario);border-radius:8px;font-family:var(--fuente-regular);font-size:1.2rem;color:var(--color-secundario);letter-spacing:0;padding-left:10px;padding-top:15px;height:200px}.contacto__input--textarea.svelte-1ljnzd8::placeholder{font-family:var(--fuente-regular);font-size:1.2rem;color:var(--color-secundario);padding-top:5px}.contacto__input--checkbox.svelte-1ljnzd8{border:1px solid var(--color-secundario)}span.svelte-1ljnzd8{font-family:var(--fuente-regular);font-size:1rem;color:var(--color-secundario)}a.svelte-1ljnzd8{font-family:var(--fuente-regular);font-size:1rem;color:white}a.svelte-1ljnzd8:hover{font-family:var(--fuente-regular);font-size:1rem;color:var(--color-terciario)}.contacto__boton.svelte-1ljnzd8{display:flex;justify-content:center;align-content:center}button.svelte-1ljnzd8{width:214px;height:35px;padding:9px 34px 9px 33px;border-radius:8px;border:solid 1px var(--color-terciario);background-color:var(--color-cuaternario);color:var(--color-terciario);margin:20px 0px}",
  map: null
};
const Contacto = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let formData = {};
  $$result.css.add(css$5);
  return `${validate_component(Variables, "Variables").$$render($$result, {}, {}, {})} <div class="titulo svelte-1ljnzd8" data-svelte-h="svelte-wdjm7y"><h2 class="titulo__h2 svelte-1ljnzd8">CONTACTO</h2></div> <section id="contacto"><div class="contacto__cabecera" data-svelte-h="svelte-1ftnv98"><h3 class="contacto__h3 svelte-1ljnzd8">Déjame un mensaje</h3> <p class="contacto__p">Te contactaré lo antes posible</p></div> ${`<form><div class="row"><div class="col s6 pt-2 pb-2 pr-2"><input class="contacto__input svelte-1ljnzd8" type="text" name="nombre" id="nombre" placeholder="Nombre" required${add_attribute("value", formData.nombre, 0)}></div> <div class="col s6 pt-2 pb-2 pr-2"><input class="contacto__input svelte-1ljnzd8" type="text" name="apellidos" id="apellidos" placeholder="Apellidos" required${add_attribute("value", formData.apellidos, 0)}></div> <div class="col s12 pt-2 pb-2 pr-2"><input class="contacto__input svelte-1ljnzd8" type="email" name="email" id="email" placeholder="Correo electrónico" required${add_attribute("value", formData.email, 0)}></div> <div class="col s12 pt-2 pb-2 pr-2"><textarea class="contacto__input--textarea svelte-1ljnzd8" name="mensaje" id="mensaje" placeholder="Mensaje" required>${escape(formData.mensaje || "")}</textarea></div> <div class="col s12 pt-2 pb-2 pr-2"><input class="contacto__input svelte-1ljnzd8" type="number" name="numero" id="numero" placeholder="¿Cuánto son 3+1?" required${add_attribute("value", formData.numero, 0)}></div> <div class="col s12 pt-2 pb-2 pr-2"><p><label><input class="contacto__input--checkbox svelte-1ljnzd8" type="checkbox" required${add_attribute("checked", formData.aceptarTerminos, 1)}> <span class="svelte-1ljnzd8" data-svelte-h="svelte-1wyosic">Soy mayor de 16 años. Acepto el tratamiento de mis datos en los
              términos abajo indicados, con la finalidad de gestionar mi
              suscripción, y confirmo haber leído y aceptado la <a href="/privacidad" class="svelte-1ljnzd8">Política de Privacidad</a></span></label></p></div> <div class="col s12 pt-2 pb-2 pr-2 contacto__boton svelte-1ljnzd8"><button type="submit" class="svelte-1ljnzd8" data-svelte-h="svelte-1ypd37u">Enviar</button></div></div></form>`} ${``} </section>`;
});
const Educacion_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".titulo__h2.svelte-rggin2.svelte-rggin2{font-family:var(--fuente-semibold);font-size:1rem;font-weight:normal;color:white;margin:0px}#educacion.svelte-rggin2.svelte-rggin2{overflow-x:auto;display:flex}.educacion__titulo.svelte-rggin2.svelte-rggin2{display:flex;justify-content:space-between;margin:30px 0px}.educacion.svelte-rggin2.svelte-rggin2{display:flex;justify-content:center;margin:20px 10px;padding:10px 20px}.educacion.svelte-rggin2.svelte-rggin2:hover{background:rgba(128, 128, 128, 0.084);border-radius:5px;margin:20px 10px;padding:10px 20px}.educacion__h4.svelte-rggin2.svelte-rggin2{font-family:var(--fuente-regular);font-size:1rem;font-weight:normal;color:var(--color-secundario);margin:0px;padding:10px 0px;text-transform:uppercase}.educacion__detalles.svelte-rggin2.svelte-rggin2{margin-left:0px;width:387px}.educacion__h3.svelte-rggin2.svelte-rggin2{font-family:var(--fuente-semibold);font-size:1rem;font-weight:normal;color:white;margin:0px}.educacion__h3.svelte-rggin2.svelte-rggin2:hover{font-family:var(--fuente-semibold);font-size:1rem;font-weight:normal;color:var(--color-terciario);margin:0px}.educacion__h3.svelte-rggin2 img.svelte-rggin2{padding-left:20px}.educacion__tipo.svelte-rggin2.svelte-rggin2{font-family:var(--fuente-semibold);font-size:1rem;font-weight:normal;color:var(--color-secundario);margin-top:5px;margin-bottom:5px}.educacion__institucion.svelte-rggin2.svelte-rggin2{font-family:var(--fuente-semibold);font-size:1rem;font-weight:normal;color:var(--color-secundario);margin-top:5px;margin-bottom:20px}.educacion__descripcion.svelte-rggin2.svelte-rggin2{font-family:var(--fuente-regular);font-size:1rem;color:var(--color-secundario);font-weight:normal;font-stretch:normal;font-style:normal;line-height:1.625;letter-spacing:normal}.pills.svelte-rggin2.svelte-rggin2{display:flex;flex-wrap:wrap}.pills__contenedor.svelte-rggin2.svelte-rggin2{margin:5px 5px 5px 0px;padding:0.25rem 0.75rem;border-radius:9999px;background-color:var(--color-cuaternario);border:0.5px solid var(--color-terciario)}.pills__p.svelte-rggin2.svelte-rggin2{font-family:var(--fuente-regular);font-size:.8rem;color:var(--color-terciario);padding:0.2rem 0.25rem;margin:0px}",
  map: null
};
const Educacion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let educacion = [
    {
      date: "Mar-Jun 2023",
      titulo: "Docencia para la F.P. para el empleo",
      tipo: "Certificado de profesionalidad",
      institucion: "FORGA",
      descripcion: "Certificado que habilita para la docencia de los grupos A, B y C de la Formación Profesional.",
      pills: ["Docencia"],
      web: "https://sede.sepe.gob.es/especialidadesformativas/RXBuscadorEFRED/DetalleEspecialidad.do?codEspecialidad=SSCE0110"
    },
    {
      date: "Mar-Dic 2020",
      titulo: "Desarrollo de aplicaciones con tecnologías web",
      tipo: "Certificado de profesionalidad",
      institucion: "CEC",
      descripcion: "Certificado de nivel 3 que habilita como técnico en desarrollo web.",
      pills: ["HTML", "CSS", "JavaScript", "Firebase", "API Rest", "Express"],
      web: "https://sede.sepe.gob.es/especialidadesformativas/RXBuscadorEFRED/DetalleEspecialidad.do?codEspecialidad=IFCD0210"
    },
    {
      date: "2015-2017",
      titulo: "FP GM Preimpresión digital",
      tipo: "Formación Profesional",
      institucion: "Afundación Colegio Hogar",
      descripcion: "Preparación de 2 años para la elaboración de productos de diseño gráfico e impresión digital.",
      pills: [
        "Photoshop",
        "Illustrator",
        "InDesign",
        "AfterEffects",
        "Roland Versaworks",
        "Trotec JobControl",
        "HTML"
      ],
      web: "https://www.todofp.es/que-estudiar/loe/artes-graficas/preimpresion-digital.html"
    },
    {
      date: "2014-2015",
      titulo: "Gestión Cultural",
      tipo: "Experto universitario",
      institucion: "Universidade de Santiago de Compostela",
      descripcion: "Formación para la planificación de actividades de gestión cultural como exposiciones o conciertos.",
      pills: [
        "Marketing",
        "Gestión financiera",
        "Legislación cultural",
        "Administración"
      ],
      web: "https://www.usc.gal/es/estudios/propios/posgrado/area-ciencias-juridicas-sociales/20222023/curso-experto-gestion-innovacion-cultural"
    },
    {
      date: "2012-2013",
      titulo: "Estudios medievales europeos",
      tipo: "Máster oficial universitario",
      institucion: "Universidade de Santiago de Compostela",
      descripcion: "Especialización en historia, historia del arte y filología medieval europea.",
      pills: ["Historia", "Historia del arte", "Filología"],
      web: "https://www.usc.gal/filrom/teaching/master/?lang=es"
    },
    {
      date: "2006-2012",
      titulo: "Historia",
      tipo: "Licenciatura",
      institucion: "Universidade de Santiago de Compostela",
      descripcion: "Orientación en historia medieval, historia antigua y arqueología.",
      pills: [
        "Historia",
        "Historia antigua",
        "Historia medieval",
        "Arqueología",
        "Biblioteconomía"
      ],
      web: "https://www.usc.gal/es/estudios/grados/artes-humanidades/grado-historia"
    }
  ];
  $$result.css.add(css$4);
  return `${validate_component(Variables, "Variables").$$render($$result, {}, {}, {})} <div class="educacion__titulo svelte-rggin2" data-svelte-h="svelte-ojbe5k"><div><h2 class="titulo__h2 svelte-rggin2">EDUCACIÓN</h2></div> <div><img src="combined-shape@2x.webp" alt="Flecha que indica que te puedes mover el scroll de forma horizontal" title="Flecha que indica que te puedes mover de forma horizontal"></div></div> <section id="educacion" class="svelte-rggin2">${each(educacion, (item) => {
    return `<div class="educacion svelte-rggin2"><div class="educacion__detalles svelte-rggin2"><h4 class="educacion__h4 svelte-rggin2">${escape(item.date)}</h4> <h3 class="educacion__h3 svelte-rggin2"><a class="educacion__h3 svelte-rggin2"${add_attribute("href", item.web, 0)}>${escape(item.titulo)}<img src="./flecha.svg" alt="flecha de enlace" class="svelte-rggin2"></a></h3> <p class="educacion__tipo svelte-rggin2">${escape(item.tipo)}</p> <p class="educacion__institucion svelte-rggin2"><em>${escape(item.institucion)}</em></p> <p class="educacion__descripcion svelte-rggin2">${escape(item.descripcion)}</p> <div class="pills svelte-rggin2">${each(item.pills, (pill) => {
      return `<div class="pills__contenedor svelte-rggin2"><p class="pills__p svelte-rggin2">${escape(pill)}</p> </div>`;
    })} </div></div> </div>`;
  })} </section>`;
});
const Experiencia_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".titulo__h2.svelte-1cmhpdo.svelte-1cmhpdo{font-family:var(--fuente-semibold);font-size:1rem;font-weight:normal;color:white;margin:0px}#experiencia.svelte-1cmhpdo.svelte-1cmhpdo{overflow-x:auto;display:flex}.experiencia__titulo.svelte-1cmhpdo.svelte-1cmhpdo{display:flex;justify-content:space-between;margin-top:50px}.experiencia.svelte-1cmhpdo.svelte-1cmhpdo{display:flex;justify-content:center;margin:40px 10px;padding:10px 10px}.experiencia.svelte-1cmhpdo.svelte-1cmhpdo:hover{display:flex;justify-content:center;margin:40px 10px;padding:10px 10px;background:rgba(128, 128, 128, 0.084);border-radius:5px}.experiencia__h4.svelte-1cmhpdo.svelte-1cmhpdo{font-family:var(--fuente-regular);font-size:0.8rem;font-weight:normal;color:var(--color-secundario);margin:0px;text-transform:uppercase;padding:10px 0px}.experiencia__detalles.svelte-1cmhpdo.svelte-1cmhpdo{margin-left:10px;width:367px}.experiencia__h3.svelte-1cmhpdo.svelte-1cmhpdo{font-family:var(--fuente-regular);font-size:1rem;font-weight:normal;color:white;margin:0px}.experiencia__h3.svelte-1cmhpdo.svelte-1cmhpdo:hover{font-family:var(--fuente-semibold);font-size:1rem;font-weight:normal;color:var(--color-terciario);margin:0px}.experiencia__h3.svelte-1cmhpdo img.svelte-1cmhpdo{padding-left:20px}.experiencia__profesion.svelte-1cmhpdo.svelte-1cmhpdo{font-family:var(--fuente-semibold);font-size:0.9rem;font-weight:normal;color:var(--color-secundario);margin-top:5px}.experiencia__descripcion.svelte-1cmhpdo.svelte-1cmhpdo{font-family:var(--fuente-regular);font-size:0.9rem;color:var(--color-secundario);font-weight:normal;font-stretch:normal;font-style:normal;line-height:1.625;letter-spacing:normal}.pills.svelte-1cmhpdo.svelte-1cmhpdo{display:flex;flex-wrap:wrap}.pills__contenedor.svelte-1cmhpdo.svelte-1cmhpdo{margin:5px 5px 5px 0px;padding:0.25rem 0.75rem;border-radius:9999px;background-color:var(--color-cuaternario);border:0.5px solid var(--color-terciario)}.pills__p.svelte-1cmhpdo.svelte-1cmhpdo{font-family:var(--fuente-regular);font-size:.8rem;color:var(--color-terciario);padding:0.2rem 0.25rem;margin:0px}",
  map: null
};
const Experiencia = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let experiencia = [
    {
      date: "actualidad",
      empresa: "Grupo Academia Postal",
      profesion: "Profesor titular",
      descripcion: "Profesor titular de certificados de profesionalidad de la familia de tecnologías de la información.",
      pills: ["HTML", "CSS", "JavaScript", "UX/UI", "Hardware"],
      web: "https://www.academiapostal.es/"
    },
    {
      date: "2021-2022",
      empresa: "Freelancer",
      profesion: "Diseñador & Desarrollador web",
      descripcion: "Desarrollador web y diseñador gráfico de recursos para web y redes sociales.",
      pills: ["Photoshop", "Illustrator", "InDesign", "HTML", "WordPress"],
      web: "https://www.rubenterre.com/"
    },
    {
      date: "2018-2019",
      empresa: "ADM Comunicaciones",
      profesion: "Diseñador & Desarrollador web",
      descripcion: "Diseñador gráfico y maquetador web. Creación de web de empresa y papelería publicitaria y corporativa.",
      pills: [
        "Photoshop",
        "Illustrator",
        "InDesign",
        "WordPress",
        "Prestashop",
        "AfterEffects"
      ],
      web: "https://www.admcomunicaciones.com/"
    },
    {
      date: "2017-2018",
      empresa: "INVBIT - Diseño y desarrollo web",
      profesion: "Diseñador & Desarrollador web",
      descripcion: "Diseñador gráfico y maquetador web. Creación de páginas web y e-commerce (Wordpress...).",
      pills: ["Photoshop", "Illustrator", "InDesign", "HTML", "WordPress"],
      web: "https://www.invbit.com/"
    }
  ];
  $$result.css.add(css$3);
  return `${validate_component(Variables, "Variables").$$render($$result, {}, {}, {})} <div class="experiencia__titulo svelte-1cmhpdo" data-svelte-h="svelte-141f0vt"><div><h2 class="titulo__h2 svelte-1cmhpdo">EXPERIENCIA</h2></div> <div><img src="combined-shape@2x.webp" alt="Flecha que indica que te puedes mover el scroll de forma horizontal" title="Flecha que indica que te puedes mover de forma horizontal"></div></div> <section id="experiencia" class="svelte-1cmhpdo">${each(experiencia, (item) => {
    return `<div class="experiencia svelte-1cmhpdo"><div class="experiencia__detalles svelte-1cmhpdo"><h4 class="experiencia__h4 svelte-1cmhpdo">${escape(item.date)}</h4> <h3 class="experiencia__h3 svelte-1cmhpdo"><a class="experiencia__h3 svelte-1cmhpdo"${add_attribute("href", item.web, 0)}>${escape(item.empresa)}<img src="./flecha.svg" alt="flecha de enlace" class="svelte-1cmhpdo"></a></h3> <p class="experiencia__profesion svelte-1cmhpdo">${escape(item.profesion)}</p> <p class="experiencia__descripcion svelte-1cmhpdo">${escape(item.descripcion)}</p> <div class="pills svelte-1cmhpdo">${each(item.pills, (pill) => {
      return `<div class="pills__contenedor svelte-1cmhpdo"><p class="pills__p svelte-1cmhpdo">${escape(pill)}</p> </div>`;
    })} </div></div> </div>`;
  })} </section>`;
});
const Noticias_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".titulo.svelte-1jj00ha.svelte-1jj00ha{margin:30px 0px}.titulo__h2.svelte-1jj00ha.svelte-1jj00ha{font-family:var(--fuente-semibold);font-size:1rem;font-weight:normal;color:white;margin:0px}.noticias__img.svelte-1jj00ha.svelte-1jj00ha{width:134px}.noticias__detalle.svelte-1jj00ha.svelte-1jj00ha{padding-left:10px;padding-right:10px}.noticias__card.svelte-1jj00ha.svelte-1jj00ha{display:flex;margin:15px 10px;padding:10px 10px}.noticias__card.svelte-1jj00ha.svelte-1jj00ha:hover{margin:15px 10px;padding:10px 10px;background:rgba(128, 128, 128, 0.084);border-radius:5px}.noticias__h3.svelte-1jj00ha img.svelte-1jj00ha{padding-left:20px}.noticias__h3.svelte-1jj00ha.svelte-1jj00ha{font-family:var(--fuente-regular);font-size:1rem;line-height:1.3;color:white;margin:0px}.noticias__h3.svelte-1jj00ha.svelte-1jj00ha:hover{font-family:var(--fuente-regular);font-size:1rem;color:var(--color-terciario);margin:0px;line-height:1.3}.noticias__p.svelte-1jj00ha.svelte-1jj00ha{font-family:var(--fuente-regular);color:var(--color-secundario);font-size:1rem;line-height:1.625;margin:5px 0px}",
  map: null
};
const Noticias = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let noticias = [
    {
      date: "2017",
      img: "img/noticias/A_Vivir_Galicia_Ruben_Terre.png",
      alt: "Imagen de Radio Galega",
      titular: "Entrevista en el programa 'Coñecer Galicia' de Radio galega",
      web: "http://www.crtvg.es/rg/a-carta/conecer-galicia-conecer-galicia-do-dia-21-01-2017-2650682"
    },
    {
      date: "2016",
      img: "img/noticias/Faro_De_Vigo_1_Ruben_Terre.png",
      alt: "Imagen del Faro de Vigo",
      titular: "Curso de verano de la Universidade de Santiago de Compostela",
      web: "https://www.farodevigo.es/arousa/2016/07/10/vista-real-profundiza-historia-comarca-16562686.html"
    },
    {
      date: "2016",
      img: "img/noticias/Entrevista_Faro_de_Vigo_Ruben_Terre.png",
      alt: "Imagen de entrevista en el Faro de Vigo",
      titular: "Entrevista en el periódico Faro de Vigo",
      web: "http://www.farodevigo.es/portada-arousa/2016/07/11/ruben-terre-ria-arousa-puerta/1496290.html"
    },
    {
      date: "2016",
      img: "img/noticias/Canal_7_Ruben_Terre.png",
      alt: "Imagen de presentación del libro 'Os viquingos na comarca do Salnés' en Cambados",
      titular: "Presentación del libro 'Os viquingos na comarca do Salnés",
      web: "http://www.canalriasbaixas.com/index.php/cultura/item/19894-a-mancomunidade-aposta-polo-pasado-vikingo-do-salnes-como-atractivo-cultural-e-turistico"
    },
    {
      date: "2016",
      img: "img/noticias/Presentacion_Faro_de_Vigo_Ruben_Terre.png",
      alt: "Imagen de presentación del libro 'Os viquingos na comarca do Salnés' y entrevista en Faro de Vigo",
      titular: "Entrevista en Faro de Vigo sobre los vikingos en Galicia",
      web: "https://www.farodevigo.es/arousa/2016/07/11/ruben-terre-ria-arousa-puerta-16562154.html"
    },
    {
      date: "2016",
      img: "img/noticias/La_Voz_De_Galicia_Ruben_Terre.png",
      alt: "Imagen de entrevista en La Voz de Galicia",
      titular: "Entrevista en La Voz de Galicia",
      web: "https://www.lavozdegalicia.es/noticia/arousa/vilagarcia-de-arousa/2015/11/06/salnes-saca-partido-vikingos/0003_201511A6C5999.html"
    }
  ];
  $$result.css.add(css$2);
  return `${validate_component(Variables, "Variables").$$render($$result, {}, {}, {})} <section id="noticias"><div class="titulo svelte-1jj00ha" data-svelte-h="svelte-bb7asn"><h2 class="titulo__h2 svelte-1jj00ha">NOTICIAS</h2></div> <div class="noticias"><div class="row">${each(noticias, (item) => {
    return `<div class="col s12 m6"><div class="noticias__card svelte-1jj00ha"><div class="noticias__img svelte-1jj00ha"><img${add_attribute("src", item.img, 0)}${add_attribute("alt", item.alt, 0)}></div> <div class="noticias__detalle svelte-1jj00ha"><p class="noticias__p svelte-1jj00ha">${escape(item.date)}</p> <a target="_blank" rel="noopener noreferrer"${add_attribute("href", item.web, 0)}><h3 class="noticias__h3 svelte-1jj00ha">${escape(item.titular)} <img src="./flecha.svg" alt="flecha de enlace" class="svelte-1jj00ha"> </h3></a> </div></div> </div>`;
  })}</div></div>  </section>`;
});
const Perfil_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".titulo.svelte-14lajh2{margin:20px 0px}.titulo__h2.svelte-14lajh2{font-family:var(--fuente-semibold);font-size:1rem;font-weight:normal;color:white;margin:0px}.perfil.svelte-14lajh2{margin-bottom:20px}.perfil__p.svelte-14lajh2{font-family:var(--fuente-regular);font-size:1rem;font-weight:normal;color:var(--color-secundario);margin-right:20px;font-weight:normal;font-stretch:normal;font-style:normal;line-height:1.625;letter-spacing:normal;flex-grow:1;text-align:justify}.perfil__span.svelte-14lajh2{font-family:var(--fuente-semi);font-size:1rem;font-weight:normal;color:white;line-height:1.625}@media screen and (max-width:568px){.perfil__p.svelte-14lajh2{font-family:var(--fuente-regular);font-size:1rem;font-weight:normal;color:var(--color-secundario);margin-right:0px;font-weight:normal;font-stretch:normal;font-style:normal;line-height:1.625;letter-spacing:normal;flex-grow:1;text-align:justify}}",
  map: null
};
const Perfil = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `${validate_component(Variables, "Variables").$$render($$result, {}, {}, {})} <div class="titulo svelte-14lajh2" data-svelte-h="svelte-8ha3r1"><h2 class="titulo__h2 svelte-14lajh2">PERFIL</h2></div> <section class="perfil row svelte-14lajh2" data-svelte-h="svelte-1cweqvw"><p class="perfil__p col s12 m6 svelte-14lajh2">Hoy día existe una gran cantidad de medios y soportes en los que vemos a
    diario trabajos de <span class="perfil__span svelte-14lajh2">diseño gráfico</span>. De
    hecho, estos son tan abundantes que muchas veces apenas nos damos cuenta de
    que están ahí. No tienen por qué ser grandes rotulaciones, simplemente las
    letras de una bolsa o la estructura de una factura son prueba de esa
    presencia omnipresente del diseño.</p> <p class="perfil__p col s12 m6 svelte-14lajh2">En el ámbito digital cobra especial importancia el desarrollo web. En esta
    área la <span class="perfil__span svelte-14lajh2">docencia</span> no se limita a la transmisión
    de habilidades técnicas; va más allá, formando a individuos capaces de plasmar
    valores y aspiraciones a través de la creación digital.
    Así como una buena poesía comunica lo inefable con pocas palabras, un diseño
    bien ejecutado, guiado por un educador experto en <span class="perfil__span svelte-14lajh2">desarrollo web</span>, tiene el poder de inspirar y cautivar.</p> </section>`;
});
const Portfolio_svelte_svelte_type_style_lang = "";
const css = {
  code: ".titulo.svelte-15l1jwb.svelte-15l1jwb{margin:30px 0px}.titulo__h2.svelte-15l1jwb.svelte-15l1jwb{font-family:var(--fuente-semibold);font-size:1rem;font-weight:normal;color:white;margin:0px}.portfolio.svelte-15l1jwb.svelte-15l1jwb{display:flex;flex-wrap:wrap}.portfolio__tarjeta.svelte-15l1jwb.svelte-15l1jwb{margin:10px 20px 10px 0px}.portfolio__img.svelte-15l1jwb img.svelte-15l1jwb{width:200px}.portfolio__h3.svelte-15l1jwb img.svelte-15l1jwb{padding-left:20px}.porfolio__item.svelte-15l1jwb.svelte-15l1jwb{margin-bottom:20px;padding:20px 20px}.porfolio__item.svelte-15l1jwb.svelte-15l1jwb:hover{padding:20px 20px;background:rgba(128, 128, 128, 0.084);border-radius:5px}.portfolio__h3.svelte-15l1jwb.svelte-15l1jwb{font-family:var(--fuente-semibold);font-size:1.1rem;color:white;margin:0px;line-height:160%}.portfolio__h3.svelte-15l1jwb.svelte-15l1jwb:hover{font-family:var(--fuente-regular);font-size:1.1rem;color:var(--color-terciario);margin:0px;line-height:160%}.portfolio__p.svelte-15l1jwb.svelte-15l1jwb{font-family:var(--fuente-regular);color:var(--color-secundario);font-size:1rem;line-height:1.625}.portfolio__a.svelte-15l1jwb.svelte-15l1jwb{font-family:var(--fuente-regular);font-size:1rem;color:white}.portfolio__enlace.svelte-15l1jwb.svelte-15l1jwb{margin-bottom:30px}",
  map: null
};
const Portfolio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let portfolio = [
    {
      img: "img/portfolio/GaliciaWeather_iPhone12_Mockup.png",
      alt: "Imagen de GaliciaWeather",
      proyecto: "GaliciaWeather App",
      descripcion: "Desarrollo de app del tiempo especializada en poblaciones de Galicia. Ha sido diseñada con Sketch y está desarrollada con Svelte, Materialize CSS y la API de OpenWeatherMaps.",
      web: "https://www.behance.net/gallery/155847275/Galicia-Weather-App"
    },
    {
      img: "img/portfolio/Os_Viquingos_na_comarca_do_salnes_iPhone12_Mockup.png",
      alt: "Imagen del libro de Os viquingos na comarca do Salnés",
      proyecto: "Os Viquingos na comarca do Salnés - Publicación editorial",
      descripcion: "Edición editorial de esta publicación sobre los vikingos en la comarca del Salnés. Editado por Urco Editora y con la colaboración de la Mancomunidade do Salnés.",
      web: "https://urcoeditora.com/titulos/os-viquingos-na-comarca-do-salnes/"
    },
    {
      img: "img/portfolio/SoloHistoria_iPhone12_Mockup.png",
      alt: "Imagen de la app SoloHistoria",
      proyecto: "SoloHistoria App",
      descripcion: "Desarrollo de app de aprendizaje de historia medieval con audios y quizes. Diseñada con Sketch y desarrollada con HTML, CSS y JavaScript.",
      web: "https://www.behance.net/gallery/97500747/SoloHistoria-App-Learning-history"
    },
    {
      img: "img/portfolio/MuseoPoboGalego_iPhone12_Mockup.png",
      alt: "Imagen del prototipo de la web del Museo do Pobo Galego",
      proyecto: "Museo do pobo galego",
      descripcion: "Diseño de UX y UI de un prototipo de web pensado en el Museo do pobo galego. Diseñado con Sketch y Zeplin.",
      web: "https://www.behance.net/gallery/92767455/Museo-do-Pobo-Galego-Web-Design-Concept"
    },
    {
      img: "img/portfolio/ADM_Comunicaciones_iPhone12_Mockup.png",
      alt: "Imagen de la web de ADM Comunicaciones",
      proyecto: "ADM Comunicaciones",
      descripcion: "Diseño y desarrollo de la web corporativa de  ADM Comunicaciones. Diseñada con Photoshop y desarrollada con WordPress utilizando el builder Divi y WooCommerce.",
      web: "https://www.admcomunicaciones.com/"
    },
    {
      img: "img/portfolio/MieresBalsan_iPhone12_Mockup.png",
      alt: "Imagen del diseño de logo de Mieres & Balsan",
      proyecto: "Mieres & Balsan",
      descripcion: "Diseño del isologo de Mieres & Balsan realizado con Adobe Illustrator. Imagen corporativa de la empresa de asesores Mieres & Balsan.",
      web: "https://mieresasesores.com/"
    }
  ];
  $$result.css.add(css);
  return `${validate_component(Variables, "Variables").$$render($$result, {}, {}, {})} <section id="portfolio"><div class="titulo svelte-15l1jwb" data-svelte-h="svelte-1jnoxh7"><h2 class="titulo__h2 svelte-15l1jwb">PORTFOLIO</h2></div> <div class="portfolio svelte-15l1jwb"><div class="row">${each(portfolio, (item) => {
    return `<div class="col s12 m6 porfolio__item svelte-15l1jwb"><div class="portfolio__tarjeta svelte-15l1jwb"><div class="portfolio__detalle"><a${add_attribute("href", item.web, 0)}><h3 class="portfolio__h3 svelte-15l1jwb">${escape(item.proyecto)}<img src="./flecha.svg" alt="flecha de enlace" class="svelte-15l1jwb"> </h3></a> <p class="portfolio__p svelte-15l1jwb">${escape(item.descripcion)} </p></div> <div class="portfolio__img svelte-15l1jwb"><img${add_attribute("src", item.img, 0)}${add_attribute("alt", item.alt, 0)} class="svelte-15l1jwb"> </div></div> </div>`;
  })}</div></div> <div class="portfolio__enlace svelte-15l1jwb" data-svelte-h="svelte-1li6hrq"><a class="portfolio__a svelte-15l1jwb" href="#">Ver más trabajos <img src="./flecha.svg" alt="flecha de enlace"></a></div> </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Perfil, "Perfil").$$render($$result, {}, {}, {})} ${validate_component(Experiencia, "Experiencia").$$render($$result, {}, {}, {})} ${validate_component(Portfolio, "Portfolio").$$render($$result, {}, {}, {})} ${validate_component(Educacion, "Educacion").$$render($$result, {}, {}, {})} ${validate_component(Noticias, "Noticias").$$render($$result, {}, {}, {})} ${validate_component(Contacto, "Contacto").$$render($$result, {}, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
