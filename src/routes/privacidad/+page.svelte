<script>
  import Footer from "../components/Footer.svelte";
import Variables from "../components/Variables.svelte";


</script>

<Variables/>

<section id="privacidad">
<h1>POLÍTICA DE PRIVACIDAD</h1>

<p><span>
Fecha de última actualización:
</span>
 11 de diciembre de 2023
</p>
<p>
    Bienvenido/a a Rubén Terré, operador del sitio web www.rubenterre.com (en adelante, el "Sitio"). La privacidad de nuestros usuarios es de suma importancia para nosotros, y nos comprometemos a protegerla. Esta Política de Privacidad describe cómo recopilamos, utilizamos y compartimos su información personal cuando utiliza nuestro Sitio.
</p>
<h2>1. Información que Recopilamos</h2>
<h3>1.1 Información que nos proporciona directamente</h3>
<p>Cuando utiliza nuestro formulario de contacto, podemos recopilar la siguiente información:</p>

<ul>
    <li>Nombre</li>
    <li>Apellidos</li>
    <li>Dirección de correo electrónico</li>
    <li>Mensaje o consulta</li>
    <li>Aceptación de la política de privacidad</li>
</ul>

<h2>2. Uso de la Información</h2>
<p>Utilizamos la información recopilada para los siguientes propósitos:</p>
<ul>
    <li>Responder a sus consultas y proporcionarle la información solicitada.</li>
    <li>Mejorar y personalizar su experiencia en nuestro Sitio.</li>
    <li>Enviarle comunicaciones relacionadas con nuestros servicios, ofertas especiales u otras noticias relevantes.</li>
</ul>

<h2>3. Compartir Información</h2>
<p>No compartimos su información personal con terceros, excepto en las siguientes situaciones:</p>
<ul>
    <li>Cuando sea necesario para responder a sus consultas.</li>
    <li>Cuando sea requerido por la ley o para proteger nuestros derechos legales.</li>
</ul>

<h2>4. Cookies y Tecnologías de Seguimiento</h2>
<p>Utilizamos cookies y otras tecnologías de seguimiento para mejorar la funcionalidad del Sitio y recopilar información sobre su visita. Puede configurar su navegador para rechazar cookies, pero esto podría afectar la funcionalidad del Sitio.
</p>

<h2>5. Seguridad</h2>
<p>Implementamos medidas de seguridad para proteger su información personal. Sin embargo, ninguna transmisión de datos por Internet o sistema de almacenamiento es completamente seguro.
</p>

<h2>
    6. Enlaces a otros Sitios
</h2>
<p>Nuestro Sitio puede contener enlaces a sitios web de terceros. No somos responsables de las prácticas de privacidad de dichos sitios y le recomendamos revisar sus políticas de privacidad.
</p>

<h2>7. Menores de Edad</h2>
<p>Nuestro Sitio no está destinado a menores de 16 años, y no recopilamos intencionalmente información personal de ellos.
</p>

<h2>8. Cambios en la Política de Privacidad</h2>
<p>Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Cualquier cambio se reflejará en la fecha de última actualización.
</p>

<h2>9. Contacto</h2>
<p>Si tiene preguntas o inquietudes sobre esta Política de Privacidad, puede contactarnos a través de <a href="mailto:info@rubenterre.com">info@rubenterre.com</a>.
</p>
<p>Al utilizar nuestro Sitio, usted acepta los términos de esta Política de Privacidad.
</p>
</section>

<Footer/>

<style>
    h1{
        font-family: var(--fuente-semibold);
    font-size: 1rem;
    color: white;
    margin: 0px;
    padding: 10px 0px;
    }

    h2{
        font-family: var(--fuente-semibold);
    font-size: 1rem;
    color: white;
    }

    h3{
        font-family: var(--fuente-semibold);
    font-size: 1rem;
    color: white;
    }

    p{
        font-family: var(--fuente-regular);
    color: var(--color-secundario);
    font-size: 1rem;
    line-height: 1.625;
    margin: 5px 0px;
    }

    span{
        font-family: var(--fuente-semibold);
    color: white;
    font-size: 1rem;
    }
</style>