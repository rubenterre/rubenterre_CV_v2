<script>
  import Redes from "./Redes.svelte";

</script>
<div class="cabecera__titulo">
    <div class="cabecera__principal">
      <div class="cabecera__logo">
        <img
          src="./Logo_RubenTerre_blanco.svg"
          alt="Logo de Rubén Terré"
          width="78px"
        />
      </div>
      <div class="cabecera__titulares">
        <h1 class="cabecera__nombre">Rubén Terré</h1>
        <h2 class="cabecera__lema">Desarrollo web & docencia</h2>
      </div>
    </div>
    <div class="cabecera__descripcion">
      <p class="cabecera__p cabecera__p--descripcion">
        Inspirando conocimiento, creando diseño y desarrollando la web.
      </p>
    </div>

<Redes/>
  </div>

  <style>
    

  .cabecera__principal {
    display: flex;
    align-items: center;
  }

  .cabecera__titulo{
    margin: 40px 0px;
    } 

  .cabecera__logo {
    padding-right: 1rem;
    width: 98px;
    display: flex;
    align-items: center;
  }

  .cabecera__nombre {
    font-family: var(--fuente-semibold);
    font-size: 2rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: white;
    width: 294px;
    padding: 0px;
    margin: 0px;
  }

  .cabecera__lema {
    font-family: var(--fuente-regular);
    font-size: 1.2rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: white;
    padding-top: 0px;
    margin: 0px;
  }

  /* .cabecera__perfil {
        position: fixed;
        right: 10%;
		width: 498px;
	} */

  .cabecera__descripcion{
    margin-bottom: 20px;
  }

  .cabecera__p {
    font-family: var(--fuente-regular);
    font-size: 1rem;
    font-weight: normal;
    color: var(--color-secundario);
    margin: 0px;
    padding: 0px;
    line-height: 1.43;
  }

  .cabecera__p--descripcion {
    max-width: 390px;
    padding: 15px 0px;
    line-height: 1.43;
  }
 
  </style>