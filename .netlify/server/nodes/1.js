

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.b98ebe47.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.deb28cb3.js","_app/immutable/chunks/singletons.5554277b.js"];
export const stylesheets = [];
export const fonts = [];
