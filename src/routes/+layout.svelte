<script>
  import Cabecera from "./components/Cabecera.svelte";
  import Variables from "./components/Variables.svelte";
</script>

<Variables />

<section class="cabecera">
  <div class="cabecera__logo">
    <Cabecera />
  </div>
  <div class="cabecera__detalle">
      <slot />
  </div>
</section>

<style>
  :global(body) {
    background-color: var(--color-principal);
    color: var(--color-secundario);
    font-family: var(--fuente-regular);
    font-size: 16px;
    padding: 5% 10%;
  }

  :global(a) {
    color: white;
    text-decoration: none;
    font-family: var(--fuente-medium);
  }

  .cabecera {
    display: flex;
    justify-content: space-evenly;
    padding-top: 10%;
  }

  .cabecera__detalle{
    max-width: 437px;
  }
</style>
