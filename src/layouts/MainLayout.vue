<script setup>
import EssentialLink from 'components/EssentialLink.vue'
import ExternalLink from 'components/ExternalLink.vue'
import API from '../utils/API.js'
import { RouterLink } from 'vue-router'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter();

// show account or login
let loggedIn = ref(localStorage.getItem('user') !== null);
let username = ref(localStorage.getItem('user'))

const logIn = (formData) => {
  localStorage.setItem('user', formData.fieldUserName);
  loggedIn.value = localStorage.getItem('user') !== null;
  username.value = localStorage.getItem('user');
  router.push('/account')
  console.log('logged in! status: ', loggedIn.value);
  console.log('logged in! username: ', username.value);
}

const logOut = () => {
  localStorage.removeItem('user');
  loggedIn.value = localStorage.getItem('user') !== null;
  username.value = localStorage.getItem('user');
  router.push('/')
  console.log('logged out! status: ', loggedIn.value);
  console.log('logged out! username: ', username.value);
}

// sidebar links
const essentialLinksList = [
  {
    title: 'Home',
    caption: 'Game Store Finder',
    icon: 'fa-solid fa-house',
    link: '/'
  },
  {
    title: 'Search',
    caption: 'Game Store Finder',
    icon: 'fa-solid fa-magnifying-glass',
    link: '/search'
  },
  {
    title: 'Browse Stores',
    caption: 'Game Store Finder',
    icon: 'fa-solid fa-list',
    link: '/browse'
  },
];
const externalLinksList = [
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
];
let essentialLinks = essentialLinksList;
let externalLinks = externalLinksList;

// drawer menu toggle
let leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
};

// search button submit
let searchString = ref('');
const onSubmit = (e) => {
  router.push(`/searchresults?searchString=${searchString.value}`)
};

</script>

<template>
  <q-layout view="lHh Lpr lff">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-btn to="/">GameStore Finder</q-btn>
        </q-toolbar-title>

        <q-form id="searchBarForm" @submit="onSubmit">
          <q-input id="searchBar" dark dense standout v-model="searchString" placeholder="search"
            input-class="text-left" class="q-ml-md">
            <q-btn type="submit" round color="purple" glossy icon="search" />
          </q-input>
        </q-form>


        <div v-if="!loggedIn">
          <RouterLink class="navLink" to="/login">
            <div>Log In</div>
          </RouterLink>
          <div>
            <q-btn to="/signup">Sign Up</q-btn>
          </div>
        </div>

        <div v-else>

          <q-btn-dropdown class="glossy" color="accent" label="Account">
            <div class="row no-wrap q-pa-md">
              <div class="column">
                <div class="row text-h6 q-mb-md">Links</div>
                <div class="row">
                  <RouterLink to="/account">Settings</RouterLink>
                </div>
                <div class="row">
                  <RouterLink :to="`/store/${username}`">See Store</RouterLink>
                </div>
              </div>

              <q-separator vertical inset class="q-mx-lg" />

              <div class="column items-center">
                <q-avatar size="72px">
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs">{{ username }}</div>

                <q-btn color="accent" label="Logout" push size="sm" v-close-popup @click="logOut" />
              </div>
            </div>
          </q-btn-dropdown>
        </div>

      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>

        <q-toolbar>
          <q-toolbar-title>
            <q-item-label header>
              Essential Links
            </q-item-label>

          </q-toolbar-title>

          <q-btn flat round dense icon="close" @click="toggleLeftDrawer" />

        </q-toolbar>

        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />

        <q-toolbar>
          <q-toolbar-title>
            <q-item-label header>
              External Links
            </q-item-label>
          </q-toolbar-title>
        </q-toolbar>

        <ExternalLink v-for="link in externalLinks" :key="link.title" v-bind="link" />

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view @loggingIn="logIn" @loggingOut="logOut" />
    </q-page-container>

    <q-footer>
      <div>
        <h2>footer</h2>
        <p>© 2022 H. T. Mitchell Development. All rights reserved.</p>
      </div>
    </q-footer>
  </q-layout>
</template>

<style scoped>
.navlink {
  padding: 0px 20px;
  font-size: 24px;
}

#searchBarForm {
  margin: 0px 10px 0px 10px;
}

.navLink {
  color: white;
  text-decoration: none;
}

.navLink:visited {
  color: white;
  text-decoration: none;
}

.navLink:hover {
  color: white;
  text-decoration: none;
}

.navLink:active {
  color: rgb(164, 164, 164);
  text-decoration: none;
}
</style>
