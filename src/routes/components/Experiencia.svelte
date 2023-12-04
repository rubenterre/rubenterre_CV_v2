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
{#each experiencia as item }
<section class="experiencia">
    <div class="experiencia__date">
        <h4 class="experiencia__h4">{item.date}</h4>
    </div>
    <div class="experiencia__detalles">
        <h2 class="experiencia__h2"><a href="{item.web}">{item.empresa}<img src="./flecha.svg" alt="flecha de enlace"></a></h2>
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
</section>
{/each}
<style>
    .experiencia{
        display: flex;
        justify-content: space-between;
        margin: 40px 0px;
    }

    .experiencia__date{
        padding-right: 10px;
    }

    .experiencia__h4{
  font-family: var(--fuente-regular);
  font-size: .8rem;
  font-weight: normal;
  color: var(--color-secundario);
  margin:0px;
  text-transform: uppercase;
  width: 124px;
} 

.experiencia__detalles{
    margin-left: 0px;
    width: 367px;
}

.experiencia__h2{
    font-family: var(--fuente-regular);
    font-size: 0.8rem;
  font-weight: normal;
  color: white;
  margin:0px;
}

.experiencia__h2 img{
    padding-left: 20px;
}

.experiencia__profesion{
    font-family: var(--fuente-regular);
    font-size: .8rem;
  font-weight: normal;
  color: var(--color-secundario);
  margin-top: 5px;
}

.experiencia__descripcion{
    font-family: var(--fuente-regular);
    font-size: .8rem;
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
  padding: 0px 20px;
  border-radius: 12px;
  background-color: var(--color-cuaternario);
}

.pills__p{
    font-family: var(--fuente-regular);
    font-size: .6rem;
    color: var(--color-terciario);
}
</style>