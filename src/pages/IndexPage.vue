<script setup>
import StoreCard from 'src/components/StoreCard.vue';
import data from "../../gamestores.js"
</script>

<template>
  <q-page class="">
    <h1>Home</h1>
    <h2>Featured Locations</h2>
    <div class="row">
      <div class="column">
        <StoreCard :store="data[0]" />
      </div>
      <div class="column">
        <StoreCard :store="data[1]" />
      </div>
      <div class="column">
        <StoreCard :store="data[2]" />
      </div>
    </div>

    <h2>Upcoming Events</h2>
  </q-page>
</template>

<style scoped>
</style>