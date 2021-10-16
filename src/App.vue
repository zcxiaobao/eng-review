<template>
  <div id="app">
    <e-header></e-header>
    <router-view />
    <e-menu></e-menu>
    <word-recite v-show="showWordRecite"></word-recite>
  </div>
</template>

<script>
import EHeader from '@/components/EHeader';
import EMenu from '@/components/EMenu';
import WordRecite from '@/views/WordRecite';
import { mapGetters } from 'vuex';

export default {
    components: {
        EHeader,
        EMenu,
        WordRecite,
    },
    computed: {
        ...mapGetters(['showWordRecite']),
    },
};
</script>

<style>
</style>
