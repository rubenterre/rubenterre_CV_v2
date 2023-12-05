<script>
  import Variables from "./Variables.svelte";

  import { onMount } from 'svelte';

  onMount(() => {
    const handleClick = (event) => {
      const target = event.target.dataset.target;
      const _target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      event.target.classList.toggle('is-active');
      _target.classList.toggle('is-active');
    };

    // Add a click event on each "navbar-burger" element
    const $navbarBurgers = document.querySelectorAll('.navbar-burger');
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', handleClick);
    });

    return () => {
      // Cleanup event listeners on component destruction
      $navbarBurgers.forEach(el => {
        el.removeEventListener('click', handleClick);
      });
    };
  });

</script>
<Variables/>

<!-- <div class="cabecera__menu">
    <ul class="cabecera__ul">
      <li class="cabecera__li">
        <a class="cabecera__a cabecera__a--nav" href="#cabecera">¿QUIÉN SOY?</a>
      </li>
      <li class="cabecera__li">
        <a class="cabecera__a cabecera__a--nav" href="#">EXPERIENCIA</a>
      </li>
      <li class="cabecera__li">
        <a class="cabecera__a cabecera__a--nav" href="#">PORTFOLIO</a>
      </li>
      <li class="cabecera__li">
        <a class="cabecera__a cabecera__a--nav" href="#">EDUCACIÓN</a>
      </li>
      <li class="cabecera__li">
        <a class="cabecera__a cabecera__a--nav" href="#">CONTACTO</a>
      </li>
      <li class="cabecera__li">
        <a class="cabecera__a cabecera__a--cv" href="#">Descarga CV</a>
      </li>
    </ul>
  </div> -->

  <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div id="navbarBasicExample" class="navbar-menu is-transparent">
      <div class="navbar-start">
        <a class="navbar-item is-transparent" href="#cabecera">
          <hr class="menu__hr"> ¿QUIÉN SOY?
        </a>
        <a class="navbar-item is-transparent" href="#experiencia">
          <hr class="menu__hr">EXPERIENCIA
        </a>
        <a class="navbar-item is-transparent" href="#portfolio">
          <hr class="menu__hr">PORTFOLIO
        </a>
        <a class="navbar-item is-transparent" href="#educacion">
            <hr class="menu__hr">EDUCACIÓN
        </a>
        <a class="navbar-item is-transparent" href="#contacto">
            <hr class="menu__hr">CONTACTO
        </a>
      </div>
  
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button">
              <strong>Descargar CV</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <style>

  .navbar{
    margin-bottom: 30px;
  }  

  .is-transparent{
    background-color: transparent;
  }

  .menu__hr:hover{
    width: 80px;
    border: 1px solid white;
    margin-right: 10px;
  }

  .menu__hr:active{
    width: 80px;
    border: 1px solid white;
    margin-right: 10px;
  }

  .navbar-item{
    font-family: var(--fuente-regular);
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--color-secundario);
  }

  .navbar-item:hover {
    font-family: var(--fuente-semibold);
    font-size: 0.8rem;
    font-weight: 600;
    color: white;
    background-color: transparent;
    transition: all 1s ease-in-out;
  }

  .navbar-item:active {
    font-family: var(--fuente-semibold);
    font-size: 0.8rem;
    font-weight: 600;
    color: white;
    background-color: transparent;
  }

  .button{
    width: 151px;
  height: 35px;
  padding: 9px 34px 9px 33px;
  border-radius: 8px;
  border: solid 1px var(--color-terciario);
  background-color: var(--color-cuaternario);
  color: var(--color-terciario);

  }

  .navbar-burger{
    color: white;
  }
  </style>