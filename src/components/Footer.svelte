<script lang="ts">
  const year = new Date().getFullYear();
  const link = "https://arcbjorn.github.io";
</script>

<template lang="pug">
  .flex.flex-row.justify-between.text-smbase.font-light
    .text Anastasia Belkina © {year}
    .text code by
      | 
      a.line(target="_blank" href="{link}") Arc
</template>