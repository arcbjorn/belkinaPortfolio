<script lang="ts">
  export let company: string;

  import { t } from 'svelte-i18n';

  const softlexLink = "https://softlex.pro";

</script>

<template lang="pug">
  .mb-5.font-mono.font-extrabold.laptop_text-xxl.minitablet_text-xl.phone_text-lg {$t('greeting')}
  .font-mono.font-light.laptop_text-md.minitablet_text-sm.phone_text-xs
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