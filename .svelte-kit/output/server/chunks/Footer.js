import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { V as Variables, R as Redes } from "./Variables.js";
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "#logoRT.svelte-1jjmnpg:hover{fill:white;transition:all 1s linear}.footer.svelte-1jjmnpg{margin:80px 0px}.footer__p.svelte-1jjmnpg{font-family:var(--fuente-regular);font-size:1rem;font-weight:normal;color:var(--color-secundario);font-weight:normal;font-stretch:normal;font-style:normal;line-height:1.625}.footer__logo.svelte-1jjmnpg{display:flex;place-content:center}.footer__derechos.svelte-1jjmnpg{display:flex;place-content:center;margin-bottom:30px}span.svelte-1jjmnpg{font-family:var(--fuente-semibold);color:var(--color-secundario);font-size:1rem;line-height:1.625}span.svelte-1jjmnpg:hover{font-family:var(--fuente-semibold);color:white;font-size:1rem;line-height:1.625;transition:all 1s ease}.redes.svelte-1jjmnpg{display:flex;justify-content:end;margin-top:30px}.footer__p--derechos.svelte-1jjmnpg{font-family:var(--fuente-regular);font-size:1rem;font-weight:normal;color:var(--color-secundario);font-weight:normal;font-stretch:normal;font-style:normal;line-height:1.625;text-align:center}@media screen and (max-width: 600px){.redes.svelte-1jjmnpg{display:flex;justify-content:center}}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Variables, "Variables").$$render($$result, {}, {}, {})} <section id="footer"><div class="footer svelte-1jjmnpg"><div class="row"><div class="col s12 m6 left" data-svelte-h="svelte-gnxdx6"><p class="footer__p svelte-1jjmnpg">Diseñado con <a href="https://www.sketch.com/" target="_blank" rel="noopener noreferrer"><span class="svelte-1jjmnpg">Sketch</span></a>
          y desarrollado con
          <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer"><span class="svelte-1jjmnpg">Visual Studio Code</span></a>
          a través de
          <a href="https://zeplin.io/" target="_blank" rel="noopener noreferrer"><span class="svelte-1jjmnpg">Zeplin</span></a>. Codificado con
          <a href="https://kit.svelte.dev/" target="_blank" rel="noopener noreferrer"><span class="svelte-1jjmnpg">Sveltekit</span></a>, despliegue en
          <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer"><span class="svelte-1jjmnpg">Netlify</span></a>. La tipografía usada es la
          <a href="https://fonts.google.com/specimen/Poppins" target="_blank" rel="noopener noreferrer"><span class="svelte-1jjmnpg">Poppins</span></a>.</p></div> <div class="col s12 m6"><div class="redes svelte-1jjmnpg">${validate_component(Redes, "Redes").$$render($$result, {}, {}, {})}</div></div></div></div> <div class="footer__logo svelte-1jjmnpg" data-svelte-h="svelte-1rg9st"><svg width="29px" height="28px" viewBox="0 0 29 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Logo Ruben Terre</title><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="logoRT" transform="translate(-1361, -839)" fill="#8E9DB2" class="svelte-1jjmnpg"><path d="M1386.96578,839.005692 L1375.41628,839.005692 L1375.40489,843.384902 L1375.40489,862.634072 L1375.01403,862.634072 C1374.20194,862.634072 1373.572,862.556278 1373.16596,861.727113 L1370.61774,856.321407 C1370.34825,855.723022 1369.89572,855.225295 1369.32561,854.900251 L1369.32561,854.822457 C1370.43369,854.585282 1373.68964,852.494342 1373.68964,847.443451 C1373.68964,842.157281 1370.32934,839 1365.5308,839 L1361.56522,839 L1361.56522,843.369723 L1364.92932,843.369723 C1367.29349,843.369723 1368.72413,844.948363 1368.72413,847.710985 C1368.72413,850.511554 1367.284,852.13004 1364.84584,852.13004 L1361.55953,852.150911 L1361.55953,856.549095 L1363.44365,856.549095 C1364.80979,856.549095 1365.36383,856.738836 1365.91028,857.850715 L1369.27058,864.912855 C1370.12062,866.688826 1370.97825,867 1372.92878,867 L1380.2262,867 L1380.2262,843.37921 L1384.25249,843.37921 C1384.77048,843.37921 1385.06458,843.696076 1385.06458,844.248221 L1385.06458,845.944501 L1389.31287,845.944501 L1389.31287,841.525446 C1389.31287,839.671681 1388.72278,839 1386.9487,839" id="Fill-1"></path></g></g></svg></div> <div class="footer__derechos svelte-1jjmnpg" data-svelte-h="svelte-1x4n0lo"><p class="footer__p--derechos svelte-1jjmnpg">Rubén Terré Lameiro <br> Hecho con 🤍 desde Santiago de Compostela <br> Todos los derechos reservados - 2024</p></div> </section>`;
});
export {
  Footer as F
};