<script>
  import Variables from "./Variables.svelte";
</script>

<Variables />
<div class="titulo">
  <h2 class="titulo__h2">PERFIL</h2>
</div>
<section class="perfil row">
        <p class="perfil__p col s12 m6">
    Hoy día existe una gran cantidad de medios y soportes en los que vemos a
    diario trabajos de <span class="perfil__span">diseño gráfico</span>. De
    hecho, estos son tan abundantes que muchas veces apenas nos damos cuenta de
    que están ahí. No tienen por qué ser grandes rotulaciones, simplemente las
    letras de una bolsa o la estructura de una factura son prueba de esa
    presencia omnipresente del diseño.
  </p>
        <p class="perfil__p col s12 m6">
    En el ámbito digital cobra especial importancia el desarrollo web. En esta
    área la <span class="perfil__span">docencia</span> no se limita a la transmisión
    de habilidades técnicas; va más allá, formando a individuos capaces de plasmar
    valores y aspiraciones a través de la creación digital.
    Así como una buena poesía comunica lo inefable con pocas palabras, un diseño
    bien ejecutado, guiado por un educador experto en <span class="perfil__span"
      >desarrollo web</span
    >, tiene el poder de inspirar y cautivar.
  </p>


</section>

<style>

.titulo{
        margin: 20px 0px;
    }

    .titulo__h2{
        font-family: var(--fuente-semibold);
    font-size: 1rem;
    font-weight: normal;
    color: white;
    margin: 0px;
    }

  .perfil {
    margin-bottom: 20px;
  }

  .perfil__p {
    font-family: var(--fuente-regular);
    font-size: 1rem;
    font-weight: normal;
    color: var(--color-secundario);
    margin-right: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.625;
    letter-spacing: normal;
    flex-grow: 1;
    text-align: justify;
  }

  .perfil__span {
    font-family: var(--fuente-semi);
    font-size: 1rem;
    font-weight: normal;
    color: white;
    line-height: 1.625;
  }
</style>
