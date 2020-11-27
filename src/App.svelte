<script lang="ts">
  export let company: string;
	export let dribbble: string;
	export let behance: string;
	export let email: string;
  export let telegram: string;

  import { initiateLocalisation } from './i18n/i18n.js'
  import Header from './components/Header.svelte';
  import Main from './components/Main.svelte';
  import Info from './components/Info.svelte';

  initiateLocalisation();

  const info = {
    dribbble,
    behance,
    email,
    telegram
  };

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