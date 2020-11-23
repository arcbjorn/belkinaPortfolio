<script lang="ts">
	export let name: string;
	export let greeting: string;
	export let hireme: string;
</script>

<main>
	<h1>Hello {name}!</h1>
  <h3>{greeting}</h3>
	<h3>{hireme}</h3>
</main>

<style>
	main {
		text-align: center;
		padding: 4em;
		max-width: 600px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 8em;
		font-weight: 800;
	}

  h3 {
		color: #ff3e00;
		font-size: 4em;
		font-weight: 600;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>