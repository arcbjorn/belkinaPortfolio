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
  .container.mx-auto
    .py-16
      Header
    .py-16  
      Main({company})
    .py-16
      Info({ ...info })
</template>
