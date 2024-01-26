

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.d4d31fb0.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.deb28cb3.js","_app/immutable/chunks/Variables.e4716a08.js"];
export const stylesheets = ["_app/immutable/assets/0.f0564ba0.css","_app/immutable/assets/Variables.5c6925be.css"];
export const fonts = ["_app/immutable/assets/Poppins-SemiBold.248c0244.ttf","_app/immutable/assets/Poppins-Medium.8d909883.ttf","_app/immutable/assets/Poppins-Regular.707fdc5c.ttf","_app/immutable/assets/Poppins-Light.647f014d.ttf","_app/immutable/assets/Poppins-Italic.3225cec6.ttf"];
