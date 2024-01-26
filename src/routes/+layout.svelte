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
    margin: 10px 0px;
    overflow: auto;
    background: radial-gradient(#122251, #10172a);
    /* animation: gradient 15s ease infinite; */
    /* background-size: 400% 400%;
  background-attachment: fixed; */
    color: var(--color-secundario);
    font-family: var(--fuente-regular);
    font-size: 14px;
    padding: 10px 20px;
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

@font-face {
    font-family: Poppins-Semi;
    src: url('/static/fonts/Poppins-SemiBold.ttf');
}

@font-face {
    font-family: Poppins-Medium;
    src: url('/static/fonts/Poppins-Medium.ttf');
}

@font-face {
    font-family: Poppins-Regular;
    src: url('/static/fonts/Poppins-Regular.ttf');
}

@font-face {
    font-family: Poppins-Light;
    src: url('/static/fonts/Poppins-Light.ttf');
}

@font-face {
    font-family: Poppins-Italic;
    src: url('/static/fonts/Poppins-Italic.ttf');
}

    :root{
        font-size: 14px;
        
        --color-principal: #10172a;
        --color-secundario: #8e9db2;
        --color-terciario: #5eead3;
        --color-cuaternario: #152a39;
        --fuente-regular: Poppins-Regular;
        --fuente-light: Poppins-Light;
        --fuente-italic: Poppins-italic;
        --fuente-medium: Poppins-Medium;
        --fuente-semibold: Poppins-Semi;   
    }

</style>
