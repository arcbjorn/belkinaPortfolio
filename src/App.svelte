<script lang="ts">
  export let companyName: string;
  export let companyWebsite: string;
	export let dribbble: string;
	export let behance: string;
	export let email: string;
  export let telegram: string;

  import { initiateLocalisation } from './i18n/i18n.js'
  import Header from './components/Header.svelte';
  import Main from './components/Main.svelte';
  import Info from './components/Info.svelte';
  import Circles from './components/Circles.svelte';
  import Footer from './components/Footer.svelte';

  initiateLocalisation();

  const info = {
    dribbble,
    behance,
    email,
    telegram
  };

  const companyInfo = {
    companyName,
    companyWebsite,
  }

</script>

<template lang="pug">
  Circles
  .container.mx-auto.h-full.smartphone_pt-44
    .h-screen.smartphone_mainheight
      .header
        Header
      .main 
        Main({ ...companyInfo })
    .mobile_arrow
    .pt-20
      Info({ ...info })
    .pt-12.pb-4
      Footer
</template>

<style>
  /* for mobile */
  .header {
    height: 25%;
  }
</style>
