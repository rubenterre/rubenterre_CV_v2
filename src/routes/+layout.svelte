<script>
  import Cabecera from "./components/Cabecera.svelte";
  import Variables from "./components/Variables.svelte";
  import "@materializecss/materialize/dist/css/materialize.css";

</script>

<Variables />

<section class="cabecera" id="cebecera">
    <Cabecera />
    <slot />
</section>

<style>
  :global(body) {
    background-color: var(--color-principal);
    color: var(--color-secundario);
    font-family: var(--fuente-regular);
    font-size: 14px;
    padding: 10px 5%;
  }

  :global(a) {
    color: white;
    text-decoration: none;
    font-family: var(--fuente-medium);
  }

  .cabecera {
    display: flex;
    flex-direction: column;
  }

</style>
