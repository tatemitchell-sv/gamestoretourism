<script setup>
import EssentialLink from 'components/EssentialLink.vue'
import { ref } from 'vue'

const linksList = [
  {
    title: 'Magic: The Gathering Official Website',
    caption: 'magic.wizards.com',
    icon: 'img:https://res.cloudinary.com/htatemitchell/image/upload/v1650917900/gamestoretour/mtgIconBlack_nratyl.png',
    link: 'https://magic.wizards.com/en'
  },
  {
    title: 'Dungeons & Dragons Official Website',
    caption: 'dnd.wizards.com',
    icon: 'img:https://res.cloudinary.com/htatemitchell/image/upload/v1650918524/gamestoretour/DnDIconBlack_wnlnlz.png',
    link: 'https://dnd.wizards.com/'
  },
  {
    title: 'Pokemon Official Website',
    caption: 'portal-pokemon.com',
    icon: 'img:https://res.cloudinary.com/htatemitchell/image/upload/v1650920002/gamestoretour/pokeballIconBlack_bi0frk.png',
    link: 'https://www.portal-pokemon.com/'
  },
  {
    title: 'Yu-Gi-Oh! Official Website',
    caption: 'yugioh-card.com',
    icon: 'img:https://res.cloudinary.com/htatemitchell/image/upload/v1650920230/gamestoretour/yugiohIconBlack_chclh5.png',
    link: 'https://www.yugioh-card.com/en/'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  }
]

let essentialLinks = linksList

let leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-btn to="/">Gamestore Finder</q-btn>
        </q-toolbar-title>

        <q-btn to="/search">Search</q-btn>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          External Links
        </q-item-label>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scoped>
.navlink {
  padding: 0px 20px;
  font-size: 24px;
}
</style>
