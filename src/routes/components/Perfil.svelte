<script>
  import Variables from "./Variables.svelte";
</script>

<Variables />
<section class="perfil">
  <div class="columns is-desktop">
    <div class="column">
        <p class="perfil__p">
    Hoy día existe una gran cantidad de medios y soportes en los que vemos a
    diario trabajos de <span class="perfil__span">diseño gráfico</span>. De
    hecho, estos son tan abundantes que muchas veces apenas nos damos cuenta de
    que están ahí. No tienen por qué ser grandes rotulaciones, simplemente las
    letras de una bolsa o la estructura de una factura son prueba de esa
    presencia omnipresente del diseño.
  </p>
    </div>
    <div class="column">
        <p class="perfil__p">
    En el ámbito digital cobra especial importancia el desarrollo web. En esta
    área la <span class="perfil__span">docencia</span> no se limita a la transmisión
    de habilidades técnicas; va más allá, formando a individuos capaces de plasmar
    valores y aspiraciones a través de la creación digital.
    Así como una buena poesía comunica lo inefable con pocas palabras, un diseño
    bien ejecutado, guiado por un educador experto en <span class="perfil__span"
      >desarrollo web</span
    >, tiene el poder de inspirar y cautivar.
  </p>
    </div>
  </div>


</section>

<style>
  .perfil {
    margin-bottom: 20px;
  }

  .perfil__p {
    font-family: var(--fuente-regular);
    font-size: 0.8rem;
    font-weight: normal;
    color: var(--color-secundario);
    padding-top: 16px;
    margin: 20px 0px 0px 0px;
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
    font-size: 0.8rem;
    font-weight: normal;
    color: white;
    line-height: 1.625;
  }
</style>
