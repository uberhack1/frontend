<template>
  <q-page class="flex">
    <pessoas-proximas v-if="items.possiveisConexoes" :pessoas="items.possiveisConexoes"></pessoas-proximas>
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
    loadData: function () {
      this.$http
      .get(`http://localhost:5000/api/WorkNet/ObterUsuario?codigoUsuario=${localStorage.getItem('usuarioLogado') || 2}`)
      .then(response => {
        this.items = response.data
      })
    }
  },
  mounted: function () {
    this.loadData();

     /*this.interval = setInterval(function () {
         this.loadData();
       }.bind(this), 1000); */
  },

    beforeDestroy: function(){
    clearInterval(this.interval);
  }
}
</script>
