<script lang="ts">
  import { locale, locales } from 'svelte-i18n';

  let expanded = false;
</script>

<template>
  <span class="dropdown-el font-mono font-bold text-i18n" class:expanded={expanded}>
    {#each $locales as value}
      <input
        class:checked={$locale === value}
        name="sortType"
        type="radio"
        id={value}
        {value}
        bind:group={$locale}
        on:click={() => {
          expanded = !expanded;
        }}
      />
      <label for={value}>{value}</label>
    {/each}
  </span>
</template>

<style lang="scss">
  $color:#172237;
  $timing: .2s;

.dropdown-el {
  margin-top: 10vh;
    
  width: 5em;
  position: fixed;
  display: inline-block;
  min-height: 2em;
  max-height: 2em;
  overflow: hidden;
  top: .5em;  
  cursor: pointer;
  text-align: left;
  white-space: nowrap;
  
  outline: none;
  border: 2px solid rgba(23, 34, 55, 0.05);
  border-radius: 1em;
  
  transition: $timing all ease-in-out;

  input {
    width: 1px;
    height: 1px;
    display: inline-block;
    position: absolute;
    opacity: 0.01;
  }

  label {
    display: block;
    height: 2em;
    line-height: 2em;
    padding-left: 1em;
    padding-right: 2em;
    cursor: pointer;
    position: relative;
    transition: $timing color ease-in-out;

    &:nth-child(2) {
      margin-top: 2em;
    }
  }

  input:checked + label {
    display:block;
    position: absolute;
    top: 0;
    width: 100%;

    &:nth-child(2) {
      margin-top: 0;
      position: relative;
    }
  }
  
  &::after {
    content:"";
    position: absolute;
    right: 0.8em;
    top: 0.9em;
    border: .3em solid $color;
    border-color: $color transparent transparent transparent;
    transition: .4s all ease-in-out;
  }

  &.expanded {
    border: .06em solid $color;
    border-radius: 1em;
    padding: 0;
    box-shadow: rgba(0, 0, 0, 0.1) 3px 3px 5px 0px;
    max-height: 10em;
    min-height: 5em;
    
    label {
      &:hover {
        color: #EA975B;
      }
    }
    
    input:checked + label {
      color: $color;
    }
    
    &::after {
      transform: rotate(-180deg);
      top:.55em;
    }
  }
}
</style>
