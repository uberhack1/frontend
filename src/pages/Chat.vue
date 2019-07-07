<template>
  <div class="q-pa-md teste">
    <div v-for="mensagem in chat.mensagens" :key="mensagem.chatId" style="width: 100%; height: 100%; ">
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
      <div class="q-pa-md">
        <q-input v-model="text" filled autogrow>
          <template v-slot:append>
            <q-icon name="send" />
          </template>
        </q-input>
      </div>
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
      .get(`https://localhost:5001/api/WorkNet/ObterChat?codigoChat=${this.$route.query.codigo}`)
      .then(response => (this.chat = response.data))
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
.teste{
    position: absolute;
    bottom: 0;
    width: 100%;
}
</style>