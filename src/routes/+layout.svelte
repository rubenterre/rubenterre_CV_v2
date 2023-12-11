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
  margin: auto;
  overflow: auto;
  background: radial-gradient(#122251, #10172a);
  /* animation: gradient 15s ease infinite; */
  /* background-size: 400% 400%;
  background-attachment: fixed; */
  color: var(--color-secundario);
    font-family: var(--fuente-regular);
    font-size: 14px;
    padding: 10px 5%;
}
/* 
@keyframes gradient {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
} */


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
