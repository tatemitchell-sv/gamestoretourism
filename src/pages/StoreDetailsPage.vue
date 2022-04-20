<script setup>
import { useRoute } from 'vue-router';
import data from '../../gamestores.js'
import MasonryGallery from 'src/components/MasonryGallery.vue';
const route = useRoute()
const storeID = route.params.id;
const store = data[storeID];
</script>

<template>
    <q-page class="">
        <h1>Store Details</h1>
        <h2>{{ store.name }}</h2>
        <MasonryGallery />

    </q-page>
</template>

<style scoped>
</style>