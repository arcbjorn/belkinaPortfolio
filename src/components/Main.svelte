<script lang="ts">
  export let company: string;

  import { t } from 'svelte-i18n';

</script>

<template lang="pug">
  p {$t('greeting')}
  p {$t('introduction')}
  p {$t('description')}
  p {$t('position')} {company}
</template>