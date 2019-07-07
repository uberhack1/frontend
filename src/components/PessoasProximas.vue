<template>
<div>
  <div class="text-h5" style="text-color=secondary;">Pessoas próximas a você</div>
  <div class="row big-gutter">
    <div>
      <q-avatar class="avatarPessoaProxima" size="100px" font-size="52px" color="teal" text-color="white">
          <img src="https://randomuser.me/api/portraits/men/93.jpg">
      </q-avatar>
      <div class="text-center text-bold">Jonas Melo</div>
      <div class="text-center">CI&T</div>
      <q-btn class="botao" outline style="color: secondary;" label="Enviar Mensagem" />
    </div>

      <div v-for="x in 4" :key="x">
      <q-avatar class="avatarPessoaProxima" size="100px" font-size="52px" color="teal" text-color="white">
          <img src="https://randomuser.me/api/portraits/men/24.jpg">
      </q-avatar>
      <div class="text-center text-bold">Eduardo Bonovolenta</div>
      <div class="text-center">Thoughtworks</div>
      <q-btn class="botao" color="secondary" label="Conectar" />
    </div>
  </div>
</div>
</template>

<style>
.avatarPessoaProxima {
  margin-left:35px
}
.botao {
  min-width:180px
}
</style>

<script>
export default {
  name: 'PessoasProximas'
}
</script>
