<script lang="ts">
  export let dribbble: string;
	export let behance: string;
	export let email: string;
  export let telegram: string;

  import { t } from 'svelte-i18n';

  const cvLink = "https://anastasiabelkina.com/CV_AB.pdf";
  const emailLink = `mailto:${email}`;
  const telegramLink= `https://tgrm.github.io/${telegram}`;
  const dribbbleLink = `https://dribbble.com/${dribbble}`;
  const behanceLink = `https://www.behance.net/${behance}`;

</script>

<svelte:head>
  <title>{$t('page_title')}</title>
</svelte:head>

<template lang="pug">
  info.text-xs.minitablet_text-base
    p.my-10.minitablet_my-4
      | {$t('portfolio')}
      |
      a.font-bold.line(target="_blank" rel="noopener noreferrer" href!="{dribbbleLink}") Dribbble
      |
      | &
      |
      a.font-bold.line(target="_blank" rel="noopener noreferrer" href!="{behanceLink}") Behance
    p.my-10.minitablet_my-4
      | {$t('about')}
      |
      a.font-bold.line(target="_blank" rel="noopener noreferrer" href!="{cvLink}") {$t('resume')}
    p.my-10.minitablet_my-4
      | {$t('contact')}
      |
      a.font-bold.line(target="_blank" rel="noopener noreferrer" href!="{emailLink}") {email}
      |
      | {$t('tele')}
      |
      a.font-bold.line(target="_blank" rel="noopener noreferrer" href!="{telegramLink}") @{telegram}
</template>
