<script>
  import Redes from "./Redes.svelte";
import Variables from "./Variables.svelte";
</script>

<Variables />

<section id="footer">
  <div class="footer">
    <div class="row">
        <div class="col s12 m6 left">
      <p class="footer__p">
      Diseñado con <a href="https://www.sketch.com/" target="_blank" rel="noopener noreferrer"><span>Sketch</span></a> y desarrollado con <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer"><span>Visual Studio Code</span></a> a través de
      <a href="https://zeplin.io/" target="_blank" rel="noopener noreferrer"><span>Zeplin</span></a>. Codificado con <a href="https://kit.svelte.dev/" target="_blank" rel="noopener noreferrer"><span>Sveltekit</span></a>, despliegue en <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer"><span>Netlify</span></a>. La tipografía
      usada es la <a href="https://fonts.google.com/specimen/Poppins" target="_blank" rel="noopener noreferrer"><span>Poppins</span></a>.
    </p>
        </div>
        <div class="col s12 m6">
            <div class="redes">
                 <Redes/>
            </div>
        </div>
    </div>

  </div>
  <div class="footer__logo">
    <img src="../Logo_RubenTerre_azul.svg" alt="Logo de la página de Ruben Terré">
  </div>
</section>

<style>

.footer{
    margin: 80px 0px;
}

.footer__p{
    font-family: var(--fuente-regular);
    font-size: 1rem;
    font-weight: normal;
    color: var(--color-secundario);
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.625;
}

.footer__logo{
    display: flex;
    place-content: center;
    margin-bottom: 100px;
}

span{
    font-family: var(--fuente-semibold);
    color: var(--color-secundario);
    font-size: 1rem;
    line-height: 1.625;
}

.redes{
    display: flex;
    justify-content: end;
    margin-top: 30px;
}

@media screen and (max-width:600px){
    .redes{
        display: flex;
        justify-content: center;
    }
}

</style>