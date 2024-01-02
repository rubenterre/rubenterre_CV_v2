<script>
  import Variables from "./Variables.svelte";

  //Formulario de contacto

  let formData = {};
  let formularioEnviado = false;
  let mostrarFormulario = true; // Nueva variable para controlar la visibilidad del formulario
  let resultadoValido = true;

  const handleSubmit = async () => {
    // Verifica si el resultado ingresado es correcto
    resultadoValido = formData.numero === 4;

    // Si el resultado no es válido, no se envía el formulario
    if (!resultadoValido) {
      console.error('El resultado de la suma no es correcto');
      return;
    }

    // Envía el formulario si el resultado es válido
    const response = await fetch('https://formspree.io/f/xzblnyqq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log('Formulario enviado con éxito');
      // Realiza acciones adicionales después de enviar el formulario

      // Muestra el mensaje de éxito
      formularioEnviado = true;

      // Oculta el formulario
      mostrarFormulario = false;

      // Oculta el mensaje después de 3 segundos y muestra nuevamente el formulario
      setTimeout(() => {
        formularioEnviado = false;
        mostrarFormulario = true;
      }, 3000);
    } else {
      console.error('Error al enviar el formulario');
      // Maneja el error y muestra un mensaje al usuario si es necesario
    }
  };
</script>

<Variables />

<div class="titulo">
  <h2 class="titulo__h2">CONTACTO</h2>
</div>

<section id="contacto">
  <div class="contacto__cabecera">
    <h3 class="contacto__h3">Déjame un mensaje</h3>
    <p class="contacto__p">Te contactaré lo antes posible</p>
  </div>
  {#if mostrarFormulario}
  <form on:submit|preventDefault={handleSubmit}>
    <div class="row">
      <div class="col s6 pt-2 pb-2 pr-2">
        <input
          class="contacto__input"
          type="text"
          name="nombre"
          id="nombre"
          placeholder="Nombre"
          bind:value={formData.nombre}
          required
        />
      </div>
      <div class="col s6 pt-2 pb-2 pr-2">
        <input
          class="contacto__input"
          type="text"
          name="apellidos"
          id="apellidos"
          placeholder="Apellidos"
          bind:value={formData.apellidos}
          required
        />
      </div>
      <div class="col s12 pt-2 pb-2 pr-2">
        <input
          class="contacto__input"
          type="email"
          name="email"
          id="email"
          bind:value={formData.email}
          placeholder="Correo electrónico"
          required
        />
      </div>
      <div class="col s12 pt-2 pb-2 pr-2">
        <textarea
          class="contacto__input--textarea"
          name="mensaje"
          id="mensaje"
          placeholder="Mensaje"
          bind:value={formData.mensaje}
          required
        ></textarea>
      </div>
      <div class="col s12 pt-2 pb-2 pr-2">
        <input
          class="contacto__input"
          type="number"
          name="numero"
          id="numero"
          placeholder="¿Cuánto son 3+1?"
          bind:value={formData.numero}
          required
        />
      </div>
      <div class="col s12 pt-2 pb-2 pr-2">
        <p>
          <label>
            <input
              class="contacto__input--checkbox"
              type="checkbox"
              bind:checked={formData.aceptarTerminos}
              required
            />
            <span
              >Soy mayor de 16 años. Acepto el tratamiento de mis datos en los
              términos abajo indicados, con la finalidad de gestionar mi
              suscripción, y confirmo haber leído y aceptado la <a href="/privacidad"
                >Política de Privacidad</a
              ></span
            >
          </label>
        </p>
      </div>
      <div class="col s12 pt-2 pb-2 pr-2 contacto__boton">
        <button on:click={handleSubmit} type="submit">Enviar</button>
      </div>
    </div>
  </form>
  {/if}

  {#if formularioEnviado}
  <p class="center-align">¡Formulario enviado con éxito!</p>
  {/if}
</section>

<style>
  .titulo {
    margin: 80px 0px 30px 0px;
  }

  .titulo__h2 {
    font-family: var(--fuente-semibold);
    font-size: 1rem;
    font-weight: normal;
    color: white;
    margin: 0px;
  }

  .contacto__h3 {
    font-family: var(--fuente-regular);
    font-size: 1rem;
    font-weight: normal;
    color: white;
  }

  .contacto__input {
    background: var(--color-principal);
    border: 1px solid var(--color-secundario);
    border-radius: 8px;
    font-family: var(--fuente-regular);
    font-size: 1rem;
    color: var(--color-secundario) !important;
    letter-spacing: 0;
    padding-left: 10px;
  }

  .contacto__input::placeholder {
    color: var(--color-secundario);
  }

  .contacto__input--textarea {
    background: var(--color-principal);
    border: 1px solid var(--color-secundario);
    border-radius: 8px;
    font-family: var(--fuente-regular);
    font-size: 1.2rem;
    color: var(--color-secundario);
    letter-spacing: 0;
    padding-left: 10px;
    padding-top: 15px;
    height: 200px;
  }

  .contacto__input--textarea::placeholder {
    font-family: var(--fuente-regular);
    font-size: 1.2rem;
    color: var(--color-secundario);
    padding-top: 5px;
  }

  .contacto__input--checkbox {
    border: 1px solid var(--color-secundario);
  }

  span {
    font-family: var(--fuente-regular);
    font-size: 1rem;
    color: var(--color-secundario);
  }

  a{
    font-family: var(--fuente-regular);
    font-size: 1rem;
    color: white;
  }

  a:hover {
    font-family: var(--fuente-regular);
    font-size: 1rem;
    color: var(--color-terciario);
  }

  .contacto__boton {
    display: flex;
    justify-content: center;
    align-content: center;
  }

  button {
    width: 214px;
    height: 35px;
    padding: 9px 34px 9px 33px;
    border-radius: 8px;
    border: solid 1px var(--color-terciario);
    background-color: var(--color-cuaternario);
    color: var(--color-terciario);
    margin: 20px 0px;
  }
</style>
