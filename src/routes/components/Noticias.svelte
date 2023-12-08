<script>
  import Variables from "./Variables.svelte";
  let noticias = [
    {
      date: "2017",
      img: "img/noticias/A_Vivir_Galicia_Ruben_Terre.png",
      alt: "Imagen de Radio Galega",
      titular: "Entrevista en el programa “A Vivir Galicia” de Radio galega",
      web: "http://www.crtvg.es/rg/a-carta/conecer-galicia-conecer-galicia-do-dia-21-01-2017-2650682",
    },
    {
      date: "2016",
      img: "img/noticias/Faro_De_Vigo_1_Ruben_Terre.png",
      alt: "Imagen del Faro de Vigo",
      titular: "Curso de verano en la Universidad de Santiago de Compostela",
      web: "https://www.farodevigo.es/arousa/2016/07/10/vista-real-profundiza-historia-comarca-16562686.html",
    },
  ];
</script>

<Variables />

<section id="noticias">
  <div class="titulo">
    <h2 class="titulo__h2">NOTICIAS</h2>
  </div>
  <div class="noticias columns is-mobile">
    {#each noticias as item}
      <div class="column">
        <div class="noticias__tarjeta">
          <div class="noticias__img">
            <img src={item.img} alt={item.alt} />
          </div>
        </div>
        <div class="column">
          <div class="noticias__detalle">
            <p class="noticias__p">
              {item.date}
            </p>
            <a href={item.web}>
              <h3 class="noticias__h3">
                {item.titular}<img src="./flecha.svg" alt="flecha de enlace" />
              </h3>
            </a>
          </div>
        </div>
      </div>
    {/each}
  </div>
  <div class="noticias__enlace">
    <a class="noticias__a" href="#"
      >Ver más trabajos <img src="./flecha.svg" alt="flecha de enlace" /></a
    >
  </div>
</section>

<style>

.titulo{
        margin: 30px 0px;
    }

    .titulo__h2{
        font-family: var(--fuente-semibold);
    font-size: 1rem;
    font-weight: normal;
    color: white;
    margin: 0px;
    }

  .noticias {
    display: flex;
    flex-wrap: wrap;
  }

  .noticias__tarjeta {
    margin: 10px 0px;
  }

  .noticias__img {
    width: 134px;
  }

  .noticias__h3 img {
    padding-left: 20px;
  }

  /* .noticias__detalle {
      width: 303px;
    } */

  .noticias__h3 {
    font-family: var(--fuente-regular);
    font-size: 0.8rem;
    color: white;
    margin: 0px;
  }

  .noticias__p {
    font-family: var(--fuente-regular);
    color: var(--color-secundario);
    font-size: 0.8rem;
    line-height: 1.625;
  }

  .noticias__a {
    font-family: var(--fuente-regular);
    font-size: 0.8rem;
    color: white;
  }
</style>
