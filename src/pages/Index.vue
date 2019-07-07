<template>
  <q-page class="flex">
    <pessoas-proximas></pessoas-proximas>
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
  data: {
    items: [],
    interval: null,
  },
  methods: {
    loadData: function () {
      this.$http
      .get(`https://localhost:5001/WorkNet/ObterUsuario?codigoUsuario=${localStorage.getItem('usuarioLogado') || 2}`)
      .then(response => (this.items = response))
    }
  },
  mounted: function () {
    this.loadData();

     this.interval = setInterval(function () {
         this.loadData();
       }.bind(this), 1000); 
    },

    beforeDestroy: function(){
    clearInterval(this.interval);
  }
}
</script>
