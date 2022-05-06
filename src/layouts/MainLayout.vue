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
        <q-btn flat dense round icon="home" class="home-button-icon" to="/" />

        <q-toolbar-title style="display: flex;">
          <q-btn class="home-button-text" to=" /">
            <q-icon class="home-icon" name="home" />
            <div>GameStore Finder</div>
          </q-btn>
        </q-toolbar-title>

        <q-form class="search-nav-form" @submit="onSubmit">
          <q-input class="search-nav-input" dark dense standout v-model="searchString" placeholder="search"
            input-class="text-left">
          </q-input>
          <q-btn icon="search" type="submit" />
        </q-form>

        <q-btn-dropdown class="search-dropdown" dropdown-icon="search">
          <q-form class="search-dropdown-form" @submit="onSubmit">
            <q-input class="search-dropdown-input" autofocus dark dense standout v-model="searchString"
              placeholder="search" input-class="text-left" input-style="width: 100%;">

            </q-input>
            <q-btn icon="search" type="submit" />
          </q-form>
        </q-btn-dropdown>

        <div v-if="!loggedIn" class="login-nav">

          <div class="account-links-text">

            <RouterLink class="login-link" to="/login">
              Log In
            </RouterLink>

            <div>
              <q-btn to="/signup">Sign Up</q-btn>
            </div>
          </div>

          <div class="account-links-dropdown">
            <q-btn-dropdown dropdown-icon="account_circle">
              <q-list>

                <q-item clickable v-close-popup to="/signup">
                  <q-item-section>
                    <q-item-label>Sign Up</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup to="/login">
                  <q-item-section>
                    <q-item-label>Log In</q-item-label>
                  </q-item-section>
                </q-item>

              </q-list>
            </q-btn-dropdown>
          </div>

        </div>

        <div v-else>

          <q-btn-dropdown dropdown-icon="account_circle">
            <div class="row no-wrap q-pa-md">
              <div class="column">
                <div class="row text-h6 q-mb-md">Links</div>

                <RouterLink class="acc-settings-link" to="/account">Account Settings</RouterLink>

                <RouterLink class="acc-settings-link" :to="`/store/${username}`">See Store</RouterLink>


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

        <div class="side-bar-label">

          <q-item-label header>
            Essential Links
          </q-item-label>

          <q-btn flat round dense icon="close" @click="toggleLeftDrawer" />
        </div>


        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />

        <q-item-label header>
          External Links
        </q-item-label>

        <ExternalLink v-for="link in externalLinks" :key="link.title" v-bind="link" />

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view @loggingIn="logIn" @loggingOut="logOut" />
    </q-page-container>

    <q-footer>
      <div class="copyright-container">
        © 2022 H. T. Mitchell Development. All rights reserved.
      </div>
    </q-footer>
  </q-layout>
</template>

<style scoped>
.search-nav-form {
  display: none;
}

.search-dropdown {
  display: flex;
  align-items: center;
}

.search-dropdown-form {
  display: flex;
  align-items: center;
}

.home-button-text {
  display: none;
}

button.without-icon {
  max-width: 20px;
  padding-left: 25px;
}

.login-nav {
  display: flex;
  align-items: center;

}

.login-link {
  color: white;
  text-decoration: none;
}

.acc-settings-link {
  color: black;
  text-decoration: none;
  margin: 8px;
}

.side-bar-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.side-bar-label button {
  margin-right: 10px;
}

.account-links-text {
  display: none;
}

.account-links-dropdown {
  display: block;
}

.copyright-container {
  margin: 16px;
  font-size: 11px;
}

@media screen and (min-width: 970px) {

  .home-button-icon {
    display: none;
  }

  .home-button-text {
    display: flex;
  }

  .home-button-text .home-icon {
    margin-right: 5px;
  }

  .search-nav-form {
    display: flex;
    align-items: center;
  }

  .search-dropdown {
    display: none;
  }

  .account-links-text {
    display: flex;
    align-items: center;
  }

  .account-links-dropdown {
    display: none;
  }

  .copyright-container {
    margin: 16px;
    font-size: 14px;
  }

}
</style>
