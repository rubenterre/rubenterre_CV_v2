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
      Diseñado con <span>Sketch</span> y desarrollado con <span>Visual Studio Code</span> a través de
      <span>Zeplin</span>. Codificado con <span>Sveltekit</span>, despliegue en <span>Netlify</span>. La tipografía
      usada es la <span>Poppins</span>.
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

@media screen and (max-width:568px){
    .redes{
        display: flex;
        justify-content: center;
    }
}

</style>