import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Luis',
		lastName: 'Villegas'
	}
});

export default app;