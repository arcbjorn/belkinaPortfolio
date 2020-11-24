import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
    name: 'Hello',
    greeting: 'I create great interfaces',
    link1: 'Dribble',
    link2: 'Behance',
    link3: 'Telegram',
	}
});

export default app;