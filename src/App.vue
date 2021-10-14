<template>
  <div id="app">
    <e-header></e-header>
    <router-view/>
    <e-menu></e-menu>
  </div>
</template>

<script>
import EHeader from '@/components/EHeader'
import EMenu from '@/components/EMenu'

export default {
  components:{
    EHeader,
    EMenu
  }
}
</script>

<style>
</style>
