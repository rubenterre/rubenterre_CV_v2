

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/privacidad/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.2855efac.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.deb28cb3.js","_app/immutable/chunks/Footer.11e7f08e.js","_app/immutable/chunks/Variables.e4716a08.js"];
export const stylesheets = ["_app/immutable/assets/3.8a269b81.css","_app/immutable/assets/Footer.ce7cc9fa.css","_app/immutable/assets/Variables.5c6925be.css"];
export const fonts = [];
