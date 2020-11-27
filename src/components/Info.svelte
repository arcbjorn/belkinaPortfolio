<script lang="ts">
  export let dribbble: string;
	export let behance: string;
	export let email: string;
  export let telegram: string;

  import { t } from 'svelte-i18n';

  const hhLink = "https://krasnodar.hh.ru/resume/86351e32ff07ff36510039ed1f56764d4d5a4a";
  const resumeLink = `mailto:${email}`;
  const telegramLink= `https://tgrm.github.io/${telegram}`;
  const dribbbleLink = `https://dribbble.com/${dribbble}`;
  const behanceLink = `https://www.behance.net/${behance}`;

</script>

<svelte:head>
  <title>{$t('page_title')}</title>
</svelte:head>

<template lang="pug">
  p
    | {$t('portfolio')}
    |
    a.font-bold.hover(target="_blank" href="{dribbbleLink}") Dribble
    |
    | &
    |
    a.font-bold.hover(target="_blank" href="{behanceLink}") Behance
  p 
    | {$t('about')}
    |
    a.font-bold.hover(target="_blank" href="{hhLink}") {$t('resume')}
  p
    | {$t('contact')}
    |
    a.font-bold.hover(target="_blank" href="{resumeLink}") {email}
    |
    | {$t('tele')}
    |
    a.font-bold.hover(target="_blank" href="{telegramLink}") @{telegram}
</template>