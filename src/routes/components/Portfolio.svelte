<script>
  import Variables from "./Variables.svelte";
  let portfolio = [
    {
      img: "img/portfolio/GaliciaWeather_iPhone12_Mockup.png",
      alt: "Imagen de GaliciaWeather",
      proyecto: "GaliciaWeather App",
      descripcion:
        "Desarrollo de app del tiempo especializada en poblaciones de Galicia. Ha sido diseñada con Sketch y está desarrollada con Svelte, Materialize CSS y la API de OpenWeatherMaps.",
      web: "https://www.behance.net/gallery/155847275/Galicia-Weather-App",
    },
    {
      img: "img/portfolio/Os_Viquingos_na_comarca_do_salnes_iPhone12_Mockup.png",
      alt: "Imagen del libro de Os viquingos na comarca do Salnés",
      proyecto: "Os Viquingos na comarca do Salnés - Libro",
      descripcion:
        "Edición editorial de esta publicación sobre los vikingos en la comarca del Salnés. Editado por Urco Editora y con la colaboración de la Mancomunidade do Salnés.",
      web: "https://urcoeditora.com/titulos/os-viquingos-na-comarca-do-salnes/",
    },
    {
      img: "img/portfolio/SoloHistoria_iPhone12_Mockup.png",
      alt: "Imagen de la app SoloHistoria",
      proyecto: "SoloHistoria App",
      descripcion:
        "Desarrollo de app de aprendizaje de historia medieval con audios y quizes. Diseñada con Sketch y desarrollada con HTML, CSS y JavaScript.",
      web: "https://www.behance.net/gallery/97500747/SoloHistoria-App-Learning-history",
    },
    {
      img: "img/portfolio/MuseoPoboGalego_iPhone12_Mockup.png",
      alt: "Imagen del prototipo de la web del Museo do Pobo Galego",
      proyecto: "Museo do pobo galego",
      descripcion:
        "Diseño de UX y UI de un prototipo de web pensado en el Museo do pobo galego. Diseñado con Sketch y Zeplin.",
      web: "https://www.behance.net/gallery/92767455/Museo-do-Pobo-Galego-Web-Design-Concept",
    },
    {
      img: "img/portfolio/ADM_Comunicaciones_iPhone12_Mockup.png",
      alt: "Imagen de la web de ADM Comunicaciones",
      proyecto: "ADM Comunicaciones",
      descripcion:
        "Diseño y desarrollo de la web corporativa de  ADM Comunicaciones. Diseñada con Photoshop y desarrollada con WordPress utilizando el builder Divi y WooCommerce.",
      web: "https://www.admcomunicaciones.com/",
    },
  ];
</script>

<Variables />

<section id="portfolio">
  <div class="portfolio__titulo">
    <h2 class="portfolio__h2">PORTFOLIO</h2>
  </div>
  <div class="portfolio columns">
      {#each portfolio as item}
      <div class="column is-half">
        <div class="portfolio__tarjeta">
          <div class="portfolio__img">
            <img src={item.img} alt={item.alt} />
          </div>
          <div class="portfolio__detalle">
            <a href={item.web}>
              <h3 class="portfolio__h3">
                {item.proyecto}<img src="./flecha.svg" alt="flecha de enlace" />
              </h3>
            </a>
            <p class="portfolio__p">
              {item.descripcion}
            </p>
          </div>
        </div>
    </div>
      {/each}
  </div>
  <div class="portfolio__enlace">
    <a class="portfolio__a" href="#"
      >Ver más trabajos <img src="./flecha.svg" alt="flecha de enlace" /></a
    >
  </div>
</section>

<style>

    .portfolio{
        display: flex;
        flex-wrap: wrap;
    }

    .portfolio__titulo{
        margin: 50px 0px;
    }

  .portfolio__h2 {
    font-family: var(--fuente-semibold);
    font-size: .8rem;
    font-weight: normal;
    color: white;
    margin: 0px;
  }

  .portfolio__tarjeta {
    margin: 10px 0px;
  }

  .portfolio__img {
    width: 134px;
  }

  .portfolio__h3 img {
    padding-left: 20px;
  }

  /* .portfolio__detalle {
    width: 303px;
  } */

  .portfolio__h3 {
    font-family: var(--fuente-regular);
    font-size: .8rem;
    color: white;
    margin: 0px;
  }

  .portfolio__p {
    font-family: var(--fuente-regular);
    color: var(--color-secundario);
    font-size: .8rem;
    line-height: 1.625;
  }

  .portfolio__a {
    font-family: var(--fuente-regular);
    font-size: .8rem;
    color: white;
  }
</style>
