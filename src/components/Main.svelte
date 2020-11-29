<script lang="ts">
  export let company: string;

  import { t } from 'svelte-i18n';

  const softlexLink = "https://softlex.pro";

</script>

<template lang="pug">
  .font-mono.font-extrabold.text-xl.mb-5 {$t('greeting')}
  .font-mono.text-lg.phone_h-screen.smartphone_h-full.font-light
    .mb-10
      p {$t('introduction')}
      p
        | {$t('description')}
        |
        span.font-bold {$t('interfaces')}
    p
      | {$t('position')}
      |
      a.font-bold.line-bold(target="_blank" href="{softlexLink}") {company}
</template>