<template>
  <q-page class="flex">
    <pessoas-proximas></pessoas-proximas>
  </q-page>
</template>

<style>
</style>

<script>
import PessoasProximas from '../components/PessoasProximas.vue';

export default {
  name: 'PageIndex',
  components: {PessoasProximas}
}
</script>
