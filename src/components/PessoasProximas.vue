<template>
<div>
  <div class="peoples">
    <div class="text-h5 title">Pessoas próximas a você</div>
    <div class="row big-gutter mb_row">
        <div v-for="x in 4" :key="x" class="people_conect">
        <q-avatar size="100px" color="teal" text-color="white">
            <img src="https://randomuser.me/api/portraits/men/24.jpg">
        </q-avatar>
        <div class="text-center text-bold name_people_conect">Eduardo Bonovolenta</div>
        <div class="text-center place_job">Thoughtworks</div>
        <q-btn class="btn_conect" color="secondary" label="Conectar" />
      </div>
    </div>
  </div>
  </div>
</div>
</template>

<style>
@font-face {
    font-family: 'Circular', sans-serif;
    font-style: normal;
    font-weight: 100;
    src: url(https://sites.google.com/site/uberhackbh1/font/circular-medium.woff);
}

@font-face {
    font-family: 'Circular', sans-serif;
    font-style: normal;
    font-weight: 200;
    src: url(https://sites.google.com/site/uberhackbh1/font/circular-book.woff);
}

@font-face {
    font-family: 'Circular', sans-serif;
    font-style: normal;
    font-weight: 300;
    src: url(https://sites.google.com/site/uberhackbh1/font/circular-bold.woff);
}

@font-face {
    font-family: 'Circular', sans-serif;
    font-style: normal;
    font-weight: 400;
    src: url(https://sites.google.com/site/uberhackbh1/font/circular-black.woff);
}

* {
  /* font-family: 'Circular', sans-serif; */
}

main {
    align-items: flex-start!important;
    justify-content: flex-start!important;
    padding: 2rem;
}

.mb_row {
  margin-bottom: 2rem;
}

.title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  color: #22685F;
}

header {
  display: none;
}

.place_job {
  color: rgba(0,0,0,0.5);
  font-weight: 400!important;
}

.people_conect {
  margin: 0 1rem 0 0!important;
  text-align: center;
  max-width: 150px;
}

.btn_conect {
  background: #22685F!important;
  box-shadow: none;
  border-radius: .25rem;
  padding: 0rem 1rem!important;
  width: 100%;
  margin-top: 0.5rem;
}

.btn_conect:hover {
  background: #fff!important;
  color: #22685F!important;
  box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.2);
}

.name_people_conect {
  color: #22685F!important;
  font-size: 1rem;
  font-weight: 400;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  margin: 0.5rem 0 0 0;
}

</style>

<script>
export default {
  name: 'PessoasProximas'
}
</script>
