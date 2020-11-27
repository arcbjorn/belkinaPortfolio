import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
    company: 'Softlex',
    dribbble: 'anastasia_belkina',
    behance: 'anastasiabelkina',
    email: 'anast.belckina@gmail.com',
    telegram: 'belkinadsgn',
	}
});

export default app;