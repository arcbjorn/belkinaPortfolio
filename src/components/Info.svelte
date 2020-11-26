<script lang="ts">
  export let dribble: string;
	export let behance: string;
	export let email: string;
  export let telegram: string;
</script>

<template lang="pug">
  h1 This is Info Section
  p.hover {dribble} {behance} {email} {telegram}
</template>