<script setup>
import StoreCard from 'src/components/StoreCard.vue';
import API from '../utils/API.js'
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

let featuredData = ref([{
  name: "",
  id: "",
  locations: {
    latitude: "",
    longitude: "",
    streetAddress1: "",
    streetAddress2: "",
    city: "",
    state: "",
    zip: "",
  },
  phonenumber: "",
  hours: [{ day: "", open: "", close: "" }],
  website: "",
  googleMapsLink: "",
  googleMapsEmbed: "",
  thumbnail: {
    name: "",
    cloudID: "",
  },
  productsServices: [
    {
      id: "",
      name: "",
      info: "",
      img: { name: "", cloudID: "", },
      link: "",
      iconWhite: "",
      iconBlack: "",
    },
  ],
  events: [
    {
      id: "",
      start: "",
      end: "",
      title: "",
      content: "",
      class: "",
      img: {
        name: "",
        cloudID: "",
      },
    },
  ],
  gallery: [
    {
      name: "",
      cloudID: "",
    },
  ],
}]);


const loadData = async () => {
  const response = await API.getFeaturedStores();
  featuredData.value = response.data;
};
loadData();

</script>

<template>
  <q-page>
    <q-banner class="home-banner">
      <q-img
        src="https://res.cloudinary.com/htatemitchell/image/upload/v1650909159/gamestoretour/dungeons-dragons-wallpaper-1_dtctd5.jpg">
        <div class="absolute-left">
          <h1>GameStore Finder</h1>
        </div>
      </q-img>
    </q-banner>
    <q-banner inline-actions class="text-white bg-accent">
      <div class="banner-text">Find a game store near you!</div>
      <template v-slot:action>
        <q-btn flat color="white" label="Let's Go!" to="/search" />
      </template>
    </q-banner>

    <section class="body-content">
      <h2>Featured Locations</h2>


      <div class="featured-stores">
        <div v-for="store in featuredData" :key="store.id">
          <StoreCard :store="store" />
        </div>
      </div>



    </section>

    <q-banner inline-actions class="text-white bg-secondary">
      Browse all stores
      <template v-slot:action>
        <q-btn flat color="white" label="Browse" to="/browse" />
      </template>
    </q-banner>

  </q-page>

</template>

<style scoped>
h1 {
  margin-left: 20px;
  height: fit-content;
  display: block;
}

.featured-stores {
  position: relative;
  margin-bottom: 60px;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 16px;
}

.banner-text {
  font-size: 13px;
}

.home-banner {
  padding: 0px;
  margin-left: -2px;
}

.q-img__content>div {
  background-color: unset;
}

.absolute-left {
  background-image: linear-gradient(to right, rgba(0, 0, 0, .9), rgba(0, 0, 0, 0));
  display: flex;
  text-align: center;
  font-size: 40px;
  align-items: center;
}

.body-content {
  max-width: 1200px;
  margin: auto;
}

.cardLink {
  text-decoration: none;
  color: white;
}

.cardLink :visited,
.cardLink :active {
  color: black
}

.absolute-left h1 {
  font-size: 32px;
}

.body-content h2 {
  font-size: 25px;
  text-align: center;
}

@media screen and (min-width: 970px) {

  .banner-text {
    font-size: 16px;
  }

  .featured-stores {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 16px;
    grid-row-gap: 0px;
  }

  .absolute-left h1 {
    font-size: 96px;
  }

  .body-content h2 {
    font-size: 60px;
    text-align: left;
  }
}
</style>