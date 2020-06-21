<script>
	import About from './components/About.svelte';
	import Text from './components/Text.svelte';
	import Person from './components/Person.svelte';
	import Skills from './components/Skills.svelte';
	import Input from './components/Input.svelte';
	import Photos from './components/Photos.svelte';

	export let name;
	export let lastName;

	let svelteLogo = "https://arepa.s3.amazonaws.com/svelte-logo.png"

	const data = {
		name: 'Luis',
		lastName: 'Villegas',
		age: 20,
	}

</script>

<main>
	<h1>Hello {name} {lastName}!</h1>
	<About />
	<Text anotherText='Hola' />
	<Text />
	<Person {...data} />
	<Skills />
	<Input />
	<img src={svelteLogo} alt="Svelte" />
	<Photos />
</main>

<style>

	:global(body){
		background-color: #f2eee2;
		color: #0084f6;
	}

	:global(:root){
		--theme-color: purple;
		--theme-color-darkMode: bfc2c7;
	}

	:global(body.dark-mode){
		background-color: #1d3040;
	}

	:global(body.dark-mode p){
		color: #bfc2c7;
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	main img {
		width: 30%;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>