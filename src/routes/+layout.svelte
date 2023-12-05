<script>
  import Cabecera from "./components/Cabecera.svelte";
  import Menu from "./components/Menu.svelte";
  import Variables from "./components/Variables.svelte";
</script>

<Variables />
<Menu/>

<section class="cabecera" id="cebecera">
    <Cabecera />
    <slot />
</section>

<style>
  :global(body) {
    background-color: var(--color-principal);
    color: var(--color-secundario);
    font-family: var(--fuente-regular);
    font-size: 16px;
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
