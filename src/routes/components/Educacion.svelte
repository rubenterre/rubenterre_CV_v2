<script>
    import Variables from "./Variables.svelte";
    let educacion = [
              {date: 'Mar-Jun 2023', titulo: 'Docencia para la F.P. para el empleo', tipo: 'Certificado de profesionalidad',institucion:'FORGA', descripcion:'Certificado que habilita para la docencia de los grupos A, B y C de la Formación Profesional.' , pills:['Docencia'],web:'https://sede.sepe.gob.es/especialidadesformativas/RXBuscadorEFRED/DetalleEspecialidad.do?codEspecialidad=SSCE0110'},
              {date: 'Mar-Dic 2020', titulo: 'Desarrollo de aplicaciones con tecnologías web', tipo: 'Certificado de profesionalidad',institucion:'CEC', descripcion:'Certificado de nivel 3 que habilita como técnico en desarrollo web.' , pills:['HTML', 'CSS', 'JavaScript', 'Firebase', 'API Rest', 'Express'],web:'https://sede.sepe.gob.es/especialidadesformativas/RXBuscadorEFRED/DetalleEspecialidad.do?codEspecialidad=IFCD0210'},
              {date: '2015-2017', titulo: 'FP GM Preimpresión digital', tipo: 'Formación Profesional',institucion:'Afundación Colegio Hogar', descripcion:'Preparación de 2 años para la elaboración de productos de diseño gráfico e impresión digital.' , pills:['Photoshop', 'Illustrator', 'InDesign', 'AfterEffects', 'Roland Versaworks', 'Trotec JobControl', 'HTML'],web:'https://www.todofp.es/que-estudiar/loe/artes-graficas/preimpresion-digital.html'},
              {date: '2014-2015', titulo: 'Gestión Cultural', tipo: 'Experto universitario',institucion:'Universidade de Santiago de Compostela', descripcion:'Formación para la planificación de actividades de gestión cultural como exposiciones o conciertos.' , pills:['Marketing', 'Gestión financiera', 'Legislación cultural', 'Administración'],web:'https://www.usc.gal/es/estudios/propios/posgrado/area-ciencias-juridicas-sociales/20222023/curso-experto-gestion-innovacion-cultural'},
              {date: '2012-2013', titulo: 'Estudios medievales europeos', tipo: 'Máster oficial universitario',institucion:'Universidade de Santiago de Compostela', descripcion:'Especialización en historia, historia del arte y filología medieval europea.' , pills:['Historia', 'Historia del arte', 'Filología'],web:'https://www.usc.gal/filrom/teaching/master/?lang=es'},
              {date: '2006-2012', titulo: 'Historia', tipo: 'Licenciatura',institucion:'Universidade de Santiago de Compostela', descripcion:'Orientación en historia medieval, historia antigua y arqueología.' , pills:['Historia', 'Historia antigua', 'Historia medieval', 'Arqueología', 'Biblioteconomía'],web:'https://www.usc.gal/es/estudios/grados/artes-humanidades/grado-historia'},
            ];
  
  </script>
  <Variables/>
  
  <div class="experiencia__titulo">
      <div>
          <h2 class="experiencia__h2">EDUCACIÓN</h2>
      </div>
      <div>
          <img src="combined-shape@2x.webp" alt="Flecha que indica que te puedes mover el scroll de forma horizontal" title="Flecha que indica que te puedes mover de forma horizontal">
      </div>
  </div>
  <section id="educacion">
  {#each educacion as item }
  <div class="educacion">
      <div class="educacion__date">
          <h4 class="educacion__h4">{item.date}</h4>
      </div>
      <div class="educacion__detalles">
          <h3 class="educacion__h3"><a class="educacion__h3" href="{item.web}">{item.titulo}<img src="./flecha.svg" alt="flecha de enlace"></a></h3>
          <p class="educacion__tipo">{item.tipo}</p>
          <p class="educacion__institucion"><em>{item.institucion}</em></p>
          <p class="educacion__descripcion">{item.descripcion}</p>
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
      #educacion{
      overflow-x: auto;
      /* white-space: nowrap; */
      display: flex;
      }
  
      .experiencia__titulo{
          display: flex;
          justify-content: space-between;
          margin-top: 50px;
      }
  
      .educacion{
          display: flex;
          justify-content: center;
          margin: 40px 20px;
      }
  
      .educacion__date{
          padding-right: 10px;
      }
  
      .educacion__h4{
    font-family: var(--fuente-regular);
    font-size: 0.8rem;
    font-weight: normal;
    color: var(--color-secundario);
    margin:0px;
    text-transform: uppercase;
    width: 80px;
  } 
  
  .educacion__detalles{
      margin-left: 0px;
      width: 367px;
  }
  
  .experiencia__h2{
      font-family: var(--fuente-semibold);
      font-size: 0.8rem;
    font-weight: normal;
    color: white;
    margin:0px;
  }
  
  .educacion__h3{
      font-family: var(--fuente-regular);
      font-size: 0.8rem;
    font-weight: normal;
    color: white;
    margin:0px;
  }
  
  .educacion__h3:hover{
      font-family: var(--fuente-semibold);
      font-size: 0.8rem;
    font-weight: normal;
    color: white;
    margin:0px;
  }
  
  .educacion__h3 img{
      padding-left: 20px;
  }
  
  .educacion__tipo{
      font-family: var(--fuente-regular);
      font-size: 0.8rem;
    font-weight: normal;
    color: var(--color-secundario);
    margin-top: 5px;
  }

  .educacion__institucion{
    font-family: var(--fuente-regular);
      font-size: 0.8rem;
    font-weight: normal;
    color: var(--color-secundario);
    margin-top: 5px;
    margin-bottom: 20px;
  }
  
  .educacion__descripcion{
      font-family: var(--fuente-regular);
      font-size: 0.8rem;
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
  }
  
  .pills__p{
      font-family: var(--fuente-regular);
      font-size: .7rem;
      color: var(--color-terciario);
      padding: 0.25rem 0.75rem;
      margin: 0px;
  }
  </style>