<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-secondary">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
         <q-btn flat><img style="max-height:30px " src="https://files.slack.com/files-pri/TL8BFAX55-FL6AYUVCL/logo_weconnect_color.png" alt=""></q-btn> 
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :width="350"
      content-class="menu-bg"
    >
      <sidebar></sidebar>
    </q-drawer>

    <q-page-container>
      <router-view class="q-pa-lg" />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import Sidebar from '../components/Sidebar'

export default {
  name: 'MyLayout',
  components: {
    Sidebar
  },
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
.menu-bg {
  background-image: linear-gradient(to right bottom, #8CE4EB, #467276);
}
</style>
