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
  info.minitablet_text-base.phone_text-xs
    p.phone_my-10.minitablet_my-4
      | {$t('portfolio')}
      |
      a.font-bold.line(target="_blank" href="{dribbbleLink}") Dribbble
      |
      | &
      |
      a.font-bold.line(target="_blank" href="{behanceLink}") Behance
    p.phone_my-10.minitablet_my-4
      | {$t('about')}
      |
      a.font-bold.line(target="_blank" href="{hhLink}") {$t('resume')}
    p.phone_my-10.minitablet_my-4
      | {$t('contact')}
      |
      a.font-bold.line(target="_blank" href="{resumeLink}") {email}
      |
      | {$t('tele')}
      |
      a.font-bold.line(target="_blank" href="{telegramLink}") @{telegram}
</template>
