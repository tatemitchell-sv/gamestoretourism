<script setup>
import StoreCard from 'src/components/StoreCard.vue';
import data from "../../gamestores.js"
import { RouterLink } from 'vue-router';
</script>

<template>
  <q-page class="">
    <h1>Home</h1>
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
        <RouterLink class="cardLink" to="/store/2">
          <StoreCard :store="data[2]" />
        </RouterLink>
      </div>

    </div>

    <h2>Upcoming Events</h2>
  </q-page>
</template>

<style scoped>
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