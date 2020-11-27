<script lang="ts">
  import { locale, locales } from 'svelte-i18n'
</script>

<template lang="pug">
  select(bind:value!="{$locale}")
    +each('$locales as locale')
      option(value!="{locale}") {locale}
</template>