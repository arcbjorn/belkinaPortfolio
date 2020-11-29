<script lang="ts">
  import { locale, locales } from 'svelte-i18n';
</script>

<template lang="pug">
  .flex.flex-row
    select.cursor-pointer.font-mono.font-bold.text-i18n(bind:value!="{$locale}")
      +each('$locales as locale')
        option(value!="{locale}") {locale}
    svg.mt-2(width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg")
      path(d="M5 8L9.33013 0.5H0.669873L5 8Z" fill="#172237")
</template>

<style lang="scss">
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
  }
</style>
