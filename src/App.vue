<template>
  <div id="app">
    <e-header></e-header>
    <router-view />
    <e-menu></e-menu>
    <word-recite></word-recite>
  </div>
</template>

<script>
import EHeader from '@/components/EHeader';
import EMenu from '@/components/EMenu';
import WordRecite from '@/views/WordRecite';

export default {
    components: {
        EHeader,
        EMenu,
        WordRecite,
    },
};
</script>

<style>
</style>
