<script lang="ts">
	export let name: string;
	export let greeting: string;
	export let link1: string;
	export let link2: string;
	export let link3: string;
</script>

<template lang="pug">
  .main
    h1 {name}!
    h3 {greeting}
    span
      .link.hover {link1}
      .link.hover {link2}
      .link.hover {link3}
</template>

<style lang="scss">
	.main {
		text-align: center;
		max-width: 600px;
  }

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 8em;
    font-weight: 800;
    padding-top: 10%;
	}

  h3 {
		color: #2c1d17;
		font-size: 4em;
		font-weight: 600;
  }

  .link {
    color: #2c1d17;
    font-size: 2em;
    font-weight: 600;
    margin: 10% 10%;
  }

  .hover {
    display: inline-block;
    position: relative;
  }

  .hover::before {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 4px;
    bottom: -3px;
    left: 0;
    background-color: #2c1d17;
    transform-origin: bottom right;
    transition:  transform 0.75s ease-out;
  }

  .hover:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

	@media (min-width: 640px) {
		.main {
			max-width: none;
		}
	}
</style>