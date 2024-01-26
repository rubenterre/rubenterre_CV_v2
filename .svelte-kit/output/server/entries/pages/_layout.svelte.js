import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { R as Redes, V as Variables } from "../../chunks/Variables.js";
const Cabecera_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".cabecera__principal.svelte-28kqc2{display:flex;align-items:center}.cabecera__titulo.svelte-28kqc2{margin:40px 0px}.cabecera__logo.svelte-28kqc2{padding-right:1rem;width:98px;display:flex;align-items:center}.cabecera__nombre.svelte-28kqc2{font-family:var(--fuente-semibold);font-size:2rem;font-weight:600;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;color:white;width:294px;padding:0px;margin:0px}.cabecera__lema.svelte-28kqc2{font-family:var(--fuente-regular);font-size:1.2rem;font-weight:normal;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;color:white;padding-top:0px;margin:0px}.cabecera__descripcion.svelte-28kqc2{margin-bottom:20px}.cabecera__p.svelte-28kqc2{font-family:var(--fuente-regular);font-size:1rem;font-weight:normal;color:var(--color-secundario);margin:0px;padding:0px;line-height:1.43}.cabecera__p--descripcion.svelte-28kqc2{max-width:390px;padding:15px 0px;line-height:1.43}",
  map: null
};
const Cabecera = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="cabecera__titulo svelte-28kqc2"><a href="/" data-svelte-h="svelte-1vq4luo"><div class="cabecera__principal svelte-28kqc2"><div class="cabecera__logo svelte-28kqc2"><img src="./Logo_RubenTerre_blanco.svg" alt="Logo de Rubén Terré" width="78px"></div> <div class="cabecera__titulares"><h1 class="cabecera__nombre svelte-28kqc2">Rubén Terré</h1> <h2 class="cabecera__lema svelte-28kqc2">Desarrollo web &amp; docencia</h2></div></div></a> <div class="cabecera__descripcion svelte-28kqc2" data-svelte-h="svelte-1cgh00s"><p class="cabecera__p cabecera__p--descripcion svelte-28kqc2">Inspirando conocimiento, creando diseño y desarrollando la web.</p></div> ${validate_component(Redes, "Redes").$$render($$result, {}, {}, {})} </div>`;
});
const materialize = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{background:var(--color-principal);margin:10px 0px;overflow:auto;background:radial-gradient(#122251, #10172a);color:var(--color-secundario);font-family:var(--fuente-regular);font-size:14px;padding:10px 20px}a{color:white;text-decoration:none;font-family:var(--fuente-medium)}.cabecera.svelte-1f8vqwn{display:flex;flex-direction:column}@font-face{font-family:Poppins-Semi;src:url('/static/fonts/Poppins-SemiBold.ttf')}@font-face{font-family:Poppins-Medium;src:url('/static/fonts/Poppins-Medium.ttf')}@font-face{font-family:Poppins-Regular;src:url('/static/fonts/Poppins-Regular.ttf')}@font-face{font-family:Poppins-Light;src:url('/static/fonts/Poppins-Light.ttf')}@font-face{font-family:Poppins-Italic;src:url('/static/fonts/Poppins-Italic.ttf')}:root{font-size:14px;--color-principal:#10172a;--color-secundario:#8e9db2;--color-terciario:#5eead3;--color-cuaternario:#152a39;--fuente-regular:Poppins-Regular;--fuente-light:Poppins-Light;--fuente-italic:Poppins-italic;--fuente-medium:Poppins-Medium;--fuente-semibold:Poppins-Semi}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Variables, "Variables").$$render($$result, {}, {}, {})} <section class="cabecera svelte-1f8vqwn" id="cebecera">${validate_component(Cabecera, "Cabecera").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``} </section>`;
});
export {
  Layout as default
};
