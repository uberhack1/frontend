<template>
  <div>
   <div class="text-h5 title">Grupos sugeridos</div>
    <div class="row q-pa-md q-gutter-md groups">
      <q-card flat class="my-card col meu-card card_group">
        <q-card-section>
          <div class="text-h6 title_group_place">Faculdade Pitágoras</div>
        </q-card-section>

        <q-card-section class="color-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </q-card-section>

        <q-card-section>
          <div class="q-pa-md q-gutter-sm">
            <q-avatar>
              <img src="https://i.ibb.co/vZrvbxn/pp.jpg" />
            </q-avatar>
            <q-avatar>
              <img src="https://i.ibb.co/vZrvbxn/pp.jpg" />
            </q-avatar>
            <q-avatar>
              <img src="https://i.ibb.co/vZrvbxn/pp.jpg" />
            </q-avatar>
            <q-avatar>
              <img src="https://i.ibb.co/vZrvbxn/pp.jpg" />
            </q-avatar>
            <q-avatar color="grey-13" size="40px" font-size="12px" text-color="white">+22</q-avatar>
          </div>
        </q-card-section>
        <q-card-section class="color-teal">ENTRAR NO GRUPO →</q-card-section>
      </q-card>

      <q-card flat class="my-card col card_group">
        <q-card-section>
          <div class="text-h6 title_group_place">Faculdade Pitágoras</div>
        </q-card-section>

        <q-card-section class="color-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </q-card-section>

        <q-card-section>
          <div class="q-pa-md q-gutter-sm">
            <q-avatar>
              <img src="https://i.ibb.co/vZrvbxn/pp.jpg" />
            </q-avatar>
            <q-avatar>
              <img src="https://i.ibb.co/vZrvbxn/pp.jpg" />
            </q-avatar>
            <q-avatar>
              <img src="https://i.ibb.co/vZrvbxn/pp.jpg" />
            </q-avatar>
            <q-avatar>
              <img src="https://i.ibb.co/vZrvbxn/pp.jpg" />
            </q-avatar>
            <q-avatar color="grey-13" size="40px" font-size="12px" text-color="white">+22</q-avatar>
          </div>
        </q-card-section>
        <q-card-section class="color-teal">ENTRAR NO GRUPO →</q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus">
.groups {
  padding: 0!important;
}

.card_group {
  border: none;
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.1)!important;
}

.title_group_place {
  font-weight: 700;
  font-size: 1.5rem
}

.color-grey {
  color: $grey-7;
}

.text-h6 {
  color: $teal-9;
}

.color-teal {
  color: $teal-10;
  font-weight: 700;
}

.meu-card {
  min-width: 300px;
}

.titulo-componente
  color: $teal-10
  margin-bottom: 0px !important;
  margin-top: 0px !important;
</style>


