<script lang="ts">
  export let company: string;

  import { t } from 'svelte-i18n';

  const softlexLink = "https://softlex.pro";

</script>

<template lang="pug">
  .mb-5.font-mono.font-extrabold.text-lg.minitablet_text-xl.laptop_text-xxl {$t('greeting')}
  .font-mono.font-light.text-xs.minitablet_text-sm.laptop_text-md
    .mb-10
      p {$t('introduction')}
      p
        | {$t('description')}
        |
        span.font-bold {$t('interfaces')}
    p
      | {$t('position')}
      |
      a.font-bold.line-bold(target="_blank" rel="noopener noreferrer" href!="{softlexLink}") {company}
</template>