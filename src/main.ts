import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
    company: 'Softlex',
    dribble: 'Dribble',
    behance: 'Behance',
    email: 'anast.belckina@gmail.com',
    telegram: '@belkinadsgn',
	}
});

export default app;