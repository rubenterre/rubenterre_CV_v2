<script>
  import Variables from "../styles/Variables.svelte";
</script>
<Variables/>

<section class="experiencia">
    <div class="experiencia__date">
        <h4 class="experiencia__">ACTUALIDAD</h4>
    </div>
    <div class="experiencia__detalles">
        <h2 class="experiencia__h2"><a href="#">Grupo Academia Postal <img src="./flecha.svg" alt="flecha de enlace"></a></h2>
        <p class="experiencia__profesion">Profesor titular</p>
        <p class="experiencia__descripcion">Profesor titular de certificados de profesionalidad de la familia de tecnologías de la información.</p>
        <div class="pills">
            <div class="pills__contenedor">
                <p class="pills__p">HTML</p>
            </div>
        </div>
    </div>
</section>

<style>
    .experiencia{
        display: flex;
        justify-content: space-between;
    }

    .experiencia__date{
        padding-right: 10px;
    }

    /* .experiencia__h4{
  font-family: var(--fuente-regular);
  font-size: .8rem;
  font-weight: normal;
  color:
} */
    
</style>