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
    background: var(--color-principal);
    background: linear-gradient(90deg, rgba(16,23,42,1) 0%, rgba(16,23,42,1) 80%, rgb(25, 35, 64) 100%);
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
