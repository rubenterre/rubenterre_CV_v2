<script>
  import Variables from "./Variables.svelte";
  let noticias = [
    {
      date: "2017",
      img: "img/noticias/A_Vivir_Galicia_Ruben_Terre.png",
      alt: "Imagen de Radio Galega",
      titular: "Entrevista en Radio galega",
      web: "http://www.crtvg.es/rg/a-carta/conecer-galicia-conecer-galicia-do-dia-21-01-2017-2650682",
    },
    {
      date: "2016",
      img: "img/noticias/Faro_De_Vigo_1_Ruben_Terre.png",
      alt: "Imagen del Faro de Vigo",
      titular: "Curso de verano en la USC",
      web: "https://www.farodevigo.es/arousa/2016/07/10/vista-real-profundiza-historia-comarca-16562686.html",
    },
    {
      date: "2016",
      img: "img/noticias/Entrevista_Faro_de_Vigo_Ruben_Terre.png",
      alt: "Imagen de entrevista en el Faro de Vigo",
      titular: "Entrevista en el Faro de Vigo",
      web: "http://www.farodevigo.es/portada-arousa/2016/07/11/ruben-terre-ria-arousa-puerta/1496290.html",
    },
    {
      date: "2016",
      img: "img/noticias/Canal_7_Ruben_Terre.png",
      alt: "Imagen de presentación del libro 'Os viquingos na comarca do Salnés' en Cambados",
      titular: "Presentación del libro",
      web: "http://www.canalriasbaixas.com/index.php/cultura/item/19894-a-mancomunidade-aposta-polo-pasado-vikingo-do-salnes-como-atractivo-cultural-e-turistico",
    },
    {
      date: "2016",
      img: "img/noticias/Presentacion_Faro_de_Vigo_Ruben_Terre.png",
      alt: "Imagen de presentación del libro 'Os viquingos na comarca do Salnés' y entrevista en Faro de Vigo",
      titular: "Entrevista en Faro de Vigo",
      web: "https://www.farodevigo.es/arousa/2016/07/11/ruben-terre-ria-arousa-puerta-16562154.html",
    },
    {
      date: "2016",
      img: "img/noticias/La_Voz_De_Galicia_Ruben_Terre.png",
      alt: "Imagen de entrevista en La Voz de Galicia",
      titular: "Entrevista en La Voz de Galicia",
      web: "https://www.lavozdegalicia.es/noticia/arousa/vilagarcia-de-arousa/2015/11/06/salnes-saca-partido-vikingos/0003_201511A6C5999.html",
    },
  ];
</script>

<Variables />

<section id="noticias">
  <div class="titulo">
    <h2 class="titulo__h2">NOTICIAS</h2>
  </div>
  <div class="noticias">
    <div class="row">
      {#each noticias as item}
        <div class="col s12 m6">
          <div class="noticias__card">
            <div class="noticias__img">
              <img src={item.img} alt={item.alt} />
            </div>
            <div class="noticias__detalle">
              <p class="noticias__p">{item.date}</p>
              <a href="{item.web}">
              <h3 class="noticias__h3">
                {item.titular} <img src="./flecha.svg" alt="flecha de enlace" />
              </h3>
            </a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
  <!-- <div class="noticias__enlace">
    <a class="noticias__a" href="#"
      >Ver más trabajos <img src="./flecha.svg" alt="flecha de enlace" /></a
    >
  </div> -->
</section>

<style>
  .titulo {
    margin: 30px 0px;
  }

  .titulo__h2 {
    font-family: var(--fuente-semibold);
    font-size: 1rem;
    font-weight: normal;
    color: white;
    margin: 0px;
  }

  /* .noticias {
    display: flex;
    flex-wrap: wrap;
  } */

  .noticias__img {
    width: 134px;
  }

  .noticias__detalle{
    padding-left: 10px;
    padding-right: 10px;
  }

  .noticias__card{
    display: flex;
    margin-bottom: 30px;
  }

  .noticias__h3 img {
    padding-left: 20px;
  }

  /* .noticias__detalle {
      width: 303px;
    } */

  .noticias__h3 {
    font-family: var(--fuente-regular);
    font-size: 1rem;
    color: white;
    margin: 0px;
  }

  .noticias__h3:hover {
    font-family: var(--fuente-regular);
    font-size: 1rem;
    color: var(--color-terciario);
    margin: 0px;
  }

  .noticias__p {
    font-family: var(--fuente-regular);
    color: var(--color-secundario);
    font-size: 1rem;
    line-height: 1.625;
    margin: 5px 0px;
  }

  .noticias__a {
    font-family: var(--fuente-regular);
    font-size: 1rem;
    color: white;
  }
</style>
