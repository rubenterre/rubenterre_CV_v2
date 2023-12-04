<script>

</script>

<section class="cabecera">
	<div class="cabecera__titulo">
		<div class="cabecera__principal">
			<div class="cabecera__logo">
				<img src="./Logo_RT_blanco.svg" alt="Logo de Rubén Terré" width="78px" />
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
		<nav class="cabecera__menu">
			<ul class="cabecera__ul">
				<li class="cabecera__li">
					<a class="cabecera__a cabecera__a--nav" href="#">¿QUIÉN SOY?</a>
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
			</ul>
		</nav>

        <div class="redes">
            <a href="https://github.com/rubenterre"><img src="github.svg" alt="Github de Rubén Terré"></a>
            <a href="https://www.behance.net/rubenterre"><img src="behance.svg" alt="Behance de Rubén Terré"></a>
            <a href="https://www.linkedin.com/in/rubenterrelameiro"><img src="linkedin.svg" alt="Linkedin de Rubén Terré"></a>
            <a href="https://www.instagram.com/rubenterre.studiodesign/"><img src="instagram.svg" alt="Instagram de Rubén Terré"></a>
        </div>
	</div>
	<div class="cabecera__perfil">
        <slot />
	</div>
</section>



<style lang="scss">

@import './styles/variables.scss';

@font-face {
    font-family: Poppins-Semi;
    src: url('../fonts/Poppins-SemiBold.ttf');
}

@font-face {
    font-family: Poppins-Medium;
    src: url('../fonts/Poppins-Medium.ttf');
}

@font-face {
    font-family: Poppins-Regular;
    src: url('../fonts/Poppins-Regular.ttf');
}

@font-face {
    font-family: Poppins-Light;
    src: url('../fonts/Poppins-Light.ttf');
}

@font-face {
    font-family: Poppins-Italic;
    src: url('../fonts/Poppins-Italic.ttf');
}

    :global(body) {
		background-color: colorPrincipal;
		color: color-secundario;
		font-family: fuente-regular;
		font-size: 16px;
	}

	:global(a) {
		color: white;
		text-decoration: none;
		font-family: fuente-medium;
	}

	.cabecera {
		display: flex;
		justify-content: space-evenly;
		padding-top: 10%;
	}

	.cabecera__principal {
		display: flex;
		align-items: center;
	}

    .cabecera__titulo{
        position: fixed;
        left: 10%;
    }

	.cabecera__logo {
		padding-right: 1rem;
		width: 98px;
		display: flex;
		align-items: center;
	}

	.cabecera__nombre {
		font-family: var(--fuente-semibold);
		font-size: 3rem;
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

	.cabecera__perfil {
        position: fixed;
        right: 10%;
		width: 498px;
	}

	.cabecera__p {
		font-family: var(--fuente-regular);
		font-size: 0.9rem;
		font-weight: normal;
		color: var(--color-secundario);
		padding-top: 16px;
		margin: 0px;
		padding: 0px;
	}

	.cabecera__p--descripcion {
		max-width: 390px;
        padding: 15px 0px;
	}

	.cabecera__menu {
		margin-top: 89px;
	}

    .cabecera__ul{
        list-style-type:none;
    }

	.cabecera__a {
		font-family: var(--fuente-regular);
		font-size: 0.8rem;
		font-weight: 600;
		color: var(--color-secundario);
	}

    .cabecera__a:hover {
		font-family: var(--fuente-semibold);
		font-size: 0.8rem;
		font-weight: 600;
		color: white;
	}

    .cabecera__a:active {
		font-family: var(--fuente-semibold);
		font-size: 0.8rem;
		font-weight: 600;
		color: white;
	}

.cabecera__a--nav {
    transition-property: color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;
    transition-property: color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;
    transition-property: color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s;
}

.redes{
    position: fixed;
    bottom: 10px;
    display: flex;
}

.redes a{
    padding-right: 19px;
}

</style>
