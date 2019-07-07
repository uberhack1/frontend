<template>
  <q-page class="flex">
    <pessoas-proximas :pessoas="$store.state.itens.possiveisConexoes"></pessoas-proximas>
    <grupos-sugeridos> </grupos-sugeridos>
  </q-page>
</template>

<style>
</style>

<script>
import PessoasProximas from '../components/PessoasProximas.vue';
import GruposSugeridos from '../components/GruposSugeridos.vue';

export default {
  name: 'PageIndex',
  components: {PessoasProximas,
  GruposSugeridos},
  data: () => ({
    items: {},
    interval: null,
  }),
  methods: {
  },
  beforeDestroy: function(){
    clearInterval(this.interval);
  }
}
</script>
