<template>
  <div class="q-pa-md teste">
    <div v-for="mensagem in chat.mensagens" :key="mensagem.id" style="width: 100%; height: 100%; ">
      <q-chat-message v-if="mensagem.usuarioId == ($store.state.itens || { usuario: {} }).usuario.id"
        name="me"
        :avatar="mensagem.usuario.foto"
        :text="[mensagem.conteudo]"
        :stamp="mensagem.dataHora"
        sent
        bg-color="amber-7"
      />
      <q-chat-message v-else
        :name="mensagem.usuario.nome"
        :avatar="mensagem.usuario.foto"
        :text="[mensagem.conteudo]"
        :stamp="mensagem.dataHora"
        text-color="white"
        bg-color="primary"
      />
    </div>
    <div class="q-pa-md">
      <q-input @keyup.enter="enviarMensagem" v-model="text" filled autogrow>
        <template v-slot:append>
          <q-icon name="send" />
        </template>
      </q-input>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    chat: {},
    interval: null,
    text: ''
  }),
  methods: {
    loadData: function () {
      this.$http
      .get(`https://uberhack-backend.herokuapp.com/api/WorkNet/ObterChat?codigoChat=${this.$route.query.codigo}`)
      .then(response => (this.chat = response.data))
    },
    enviarMensagem(ev){
      console.log({ ev})
      ev.preventDefault();
      this.$http
      .get(`https://uberhack-backend.herokuapp.com/api/WorkNet/EnviarMensagem?usuarioId=${(this.$store.state.itens || { usuario: {} }).usuario.id}&chatId=${this.$route.query.codigo}&conteudo=${this.text}`)
      .then(response => (this.text = ''))
      return false;
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
};
</script>

<style>
</style>