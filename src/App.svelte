<script lang="ts">
  export let company: string;
	export let dribble: string;
	export let behance: string;
	export let email: string;
  export let telegram: string;

  import Header from './components/Header.svelte';
  import Main from './components/Main.svelte';
  import Info from './components/Info.svelte';

  const info = {
    dribble,
    behance,
    email,
    telegram
  }

</script>

<template lang="pug">
  Header
  Main({company})
  Info({ ...info })
</template>

<style lang="scss">
	// @media (min-width: 640px) {
	// 	.main {
	// 		max-width: none;
	// 	}
	// }
</style>