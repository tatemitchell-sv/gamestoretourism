<script setup>
import StoreCard from 'src/components/StoreCard.vue';
import data from "../../gamestores.js"
import { RouterLink } from 'vue-router';
</script>

<template>
  <q-page class="">
    <q-banner style="padding: 0px">
      <q-img
        src="https://res.cloudinary.com/htatemitchell/image/upload/v1650909159/gamestoretour/dungeons-dragons-wallpaper-1_dtctd5.jpg">
        <div class="absolute-left">
          <h1>Gamestore Finder</h1>
        </div>
      </q-img>
    </q-banner>
    <q-banner inline-actions class="text-white bg-accent">
      Find a game store near you!
      <template v-slot:action>
        <q-btn flat color="white" label="Let's Go!" />
      </template>
    </q-banner>

    <section>
      <h2>Featured Locations</h2>

      <div class="row q-gutter-md">

        <div class="col">
          <RouterLink class="cardLink" to="/store/0">
            <StoreCard :store="data[0]" />
          </RouterLink>
        </div>

        <div class="col">
          <RouterLink class="cardLink" to="/store/1">
            <StoreCard :store="data[1]" />
          </RouterLink>
        </div>

        <div class="col">
          <RouterLink class="cardLink" to="/store/3">
            <StoreCard :store="data[3]" />
          </RouterLink>
        </div>

      </div>
      <div>
        <q-btn color="secondary" label="Browse All Stores" to="/browse" />
      </div>
    </section>

    <section>
      <h2>Upcoming Events</h2>
    </section>


  </q-page>

</template>

<style scoped>
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

h1 {
  height: fit-content;
  display: block;
}

.cardLink {
  text-decoration: none;
  color: black;
}

.cardLink :visited,
.cardLink :active {
  color: black
}

.row {
  padding: 30px;
}
</style>