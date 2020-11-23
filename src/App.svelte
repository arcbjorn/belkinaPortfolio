<script lang="ts">
	export let name: string;
	export let greeting: string;
  export let hireme: string;
  import Button from '@smui/button';
</script>

<main>
	<h1>Hello {name}!</h1>
  <h3>{greeting}</h3>
  <Button color="primary" variant="raised">{hireme}</Button>
</main>

<style lang="scss">
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

  * :global(.mdc-button) {
    margin: 1em;
    color: #ffffff;
		font-size: 4em;
    font-weight: 600;
    height: 2em;
  }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>