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
            <q-avatar color="grey-13" size="40px" font-size="12px" text-color="white">+22</q-avatar>
          </div>
        </q-card-section>
        <button class="btn_group">ENTRAR NO GRUPO <svg version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 1000 1000" style="enable-background:new 0 0 1000 1000;" xml:space="preserve">
<polygon points="864,-58.9 833.5,-28.3 1320.2,458.3 -838.3,458.3 -838.3,501.5 1316.6,501.5 786.7,1031.3 817.2,1061.9 1401,478.1 
	"/>
</svg></button>
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
            <q-avatar color="grey-13" size="40px" font-size="12px" text-color="white">+22</q-avatar>
          </div>
        </q-card-section>
        <button class="btn_group">ENTRAR NO GRUPO <svg version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 1000 1000" style="enable-background:new 0 0 1000 1000;" xml:space="preserve">
<polygon points="864,-58.9 833.5,-28.3 1320.2,458.3 -838.3,458.3 -838.3,501.5 1316.6,501.5 786.7,1031.3 817.2,1061.9 1401,478.1 
	"/>
</svg></button>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="stylus">
.groups {
  padding: 0!important;
}

.card_group {
  padding: 1rem;
  border: none;
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.2)!important;
}

.btn_group {
    color: #22685F!important;
    background: transparent;
    font-size: .9rem;
    border: none;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bolder;
    outline: none!important;
    float: right;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    border-radius: 100px;
}

.btn_group svg {
  height 20px;
  width: 50px;
  margin-left 1rem;
  position: relative;
  right: 0;
  fill: #22685F;
  transition: all 0.25s ease-in-out;
}

.btn_group:hover {
  background: #eee;
}

.btn_group:hover svg {
  right: -1rem;
}

.q-card__section {
  padding: 0!important;
}

.title_group_place {
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom 0.5rem;
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


