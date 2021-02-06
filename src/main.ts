import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
    companyName: 'Medrating',
    companyWebsite: 'https://medrating.org',
    dribbble: 'anastasia_belkina',
    behance: 'anastasiabelkina',
    email: 'anast.belckina@gmail.com',
    telegram: 'belkinadsgn',
	}
});

export default app;