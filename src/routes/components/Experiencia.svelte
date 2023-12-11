<script>
  import Variables from "./Variables.svelte";
  let experiencia = [
            {date: 'actualidad', empresa: 'Grupo Academia Postal', profesion: 'Profesor titular',descripcion:'Profesor titular de certificados de profesionalidad de la familia de tecnologías de la información.' , pills:['HTML','CSS','JavaScript','UX/UI','Hardware'], web:'https://www.academiapostal.es/'},
            {date: '2021-2022', empresa: 'Freelancer', profesion: 'Diseñador & Desarrollador web', descripcion:'Desarrollador web y diseñador gráfico de recursos para web y redes sociales.', pills:['Photoshop','Illustrator','InDesign','HTML','WordPress'], web:'https://www.rubenterre.com/'},
            {date: '2018-2019', empresa: 'ADM Comunicaciones', profesion: 'Diseñador & Desarrollador web', descripcion:'Diseñador gráfico y maquetador web. Creación de web de empresa y papelería publicitaria y corporativa.', pills:['Photoshop','Illustrator','InDesign','WordPress','Prestashop','AfterEffects'],web:'https://www.admcomunicaciones.com/'},
            {date: '2017-2018', empresa: 'INVBIT - Diseño y desarrollo web', profesion: 'Diseñador & Desarrollador web', descripcion:'Diseñador gráfico y maquetador web. Creación de páginas web y e-commerce (Wordpress...).', pills:['Photoshop','Illustrator','InDesign','HTML','WordPress'], web:'https://www.invbit.com/'}
        ];

</script>
<Variables/>

<div class="experiencia__titulo">
    <div>
        <h2 class="titulo__h2">EXPERIENCIA</h2>
    </div>
    <div>
        <img src="combined-shape@2x.webp" alt="Flecha que indica que te puedes mover el scroll de forma horizontal" title="Flecha que indica que te puedes mover de forma horizontal">
    </div>
</div>
<section id="experiencia">
{#each experiencia as item }
<div class="experiencia">
    <div class="experiencia__date">
        <h4 class="experiencia__h4">{item.date}</h4>
    </div>
    <div class="experiencia__detalles">
        <h3 class="experiencia__h3"><a class="experiencia__h3" href="{item.web}">{item.empresa}<img src="./flecha.svg" alt="flecha de enlace"></a></h3>
        <p class="experiencia__profesion">{item.profesion}</p>
        <p class="experiencia__descripcion">{item.descripcion}</p>
        <div class="pills">
            {#each item.pills as pill }
            <div class="pills__contenedor">
                <p class="pills__p">{pill}</p>
            </div>
            {/each}
        </div>
    </div>
</div>
{/each}
</section>
<style>
    .titulo{
        margin: 30px 0px;
    }

    .titulo__h2{
        font-family: var(--fuente-semibold);
    font-size: 1rem;
    font-weight: normal;
    color: white;
    margin: 0px;
    }

    #experiencia{
    overflow-x: auto;
    /* white-space: nowrap; */
    display: flex;
    }

    .experiencia__titulo{
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
    }

    .experiencia{
        display: flex;
        justify-content: center;
        margin: 40px 0px;
        padding: 10px 0px;
    }

    .experiencia:hover{
        display: flex;
        justify-content: center;
        margin: 40px 0px;
        padding: 10px 0px;
        background: rgba(128, 128, 128, 0.084);
        border-radius: 5px;
    }

    .experiencia__date{
        padding-right: 10px;
        margin-left: 30px;
    }

    .experiencia__h4{
  font-family: var(--fuente-regular);
  font-size: 0.8rem;
  font-weight: normal;
  color: var(--color-secundario);
  margin:0px;
  text-transform: uppercase;
  width: 80px;
} 

.experiencia__detalles{
    margin-left: 10px;
    width: 367px;
}

.experiencia__h3{
    font-family: var(--fuente-regular);
    font-size: 1rem;
  font-weight: normal;
  color: white;
  margin:0px;
}

.experiencia__h3:hover{
    font-family: var(--fuente-semibold);
    font-size: 1rem;
  font-weight: normal;
  color: var(--color-terciario);
  margin:0px;
}

.experiencia__h3 img{
    padding-left: 20px;
}

.experiencia__profesion{
    font-family: var(--fuente-semibold);
    font-size: 0.9rem;
  font-weight: normal;
  color: var(--color-secundario);
  margin-top: 5px;
}

.experiencia__descripcion{
    font-family: var(--fuente-regular);
    font-size: 0.9rem;
  color: var(--color-secundario);
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.625;
  letter-spacing: normal;
}

.pills{
    display: flex;
    flex-wrap: wrap;
}

.pills__contenedor{
  margin: 5px 5px 5px 0px;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  background-color: var(--color-cuaternario);
  border: 0.5px solid var(--color-terciario);
}

.pills__p{
    font-family: var(--fuente-regular);
    font-size: .8rem;
    color: var(--color-terciario);
    padding: 0.2rem 0.25rem;
    margin: 0px;
}
</style>