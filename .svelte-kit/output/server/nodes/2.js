

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.fc5e0260.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.deb28cb3.js","_app/immutable/chunks/Variables.e4716a08.js","_app/immutable/chunks/Footer.11e7f08e.js"];
export const stylesheets = ["_app/immutable/assets/2.779d544a.css","_app/immutable/assets/Variables.5c6925be.css","_app/immutable/assets/Footer.ce7cc9fa.css"];
export const fonts = [];
