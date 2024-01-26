import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","Logo_RubenTerre_azul.svg","Logo_RubenTerre_blanco.svg","behance.svg","behance.webp","combined-shape.webp","combined-shape@2x.webp","combined-shape@3x.webp","favicon.png","flecha.svg","fonts/Poppins-Italic.ttf","fonts/Poppins-Light.ttf","fonts/Poppins-Medium.ttf","fonts/Poppins-Regular.ttf","fonts/Poppins-SemiBold.ttf","github.svg","github.webp","img/.DS_Store","img/noticias/A_Vivir_Galicia_Ruben_Terre.png","img/noticias/Canal_7_Ruben_Terre.png","img/noticias/Diario_de_Arousa_Ruben_Terre.png","img/noticias/Entrevista_Faro_de_Vigo_Ruben_Terre.png","img/noticias/Faro_De_Vigo_1_Ruben_Terre.png","img/noticias/La_Voz_De_Galicia_Ruben_Terre.png","img/noticias/Presentacion_Faro_de_Vigo_Ruben_Terre.png","img/portfolio/ADM_Comunicaciones_iPhone12_Mockup.png","img/portfolio/GaliciaWeather_iPhone12_Mockup.png","img/portfolio/MieresBalsan_iPhone12_Mockup.png","img/portfolio/MuseoPoboGalego_iPhone12_Mockup.png","img/portfolio/Os_Viquingos_na_comarca_do_salnes_iPhone12_Mockup.png","img/portfolio/SoloHistoria_iPhone12_Mockup.png","instagram.svg","instagram.webp","linkedin.svg","linkedin.webp"]),
	mimeTypes: {".svg":"image/svg+xml",".webp":"image/webp",".png":"image/png",".ttf":"font/ttf"},
	_: {
		client: {"start":"_app/immutable/entry/start.d3e9975d.js","app":"_app/immutable/entry/app.78d3dfc7.js","imports":["_app/immutable/entry/start.d3e9975d.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.5554277b.js","_app/immutable/entry/app.78d3dfc7.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.deb28cb3.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/privacidad",
				pattern: /^\/privacidad\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
