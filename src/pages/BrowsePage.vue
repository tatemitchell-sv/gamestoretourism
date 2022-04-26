<script setup>
import data from '../../gamestores.js'
import StoreCard from 'src/components/StoreCard.vue';
</script>

<template>
    <q-page class="">
        <h2>All Stores</h2>
        <div class="row">
            <div v-for="store in data" :key="store.name" class="col">
                <RouterLink class="cardLink" to="/store/3">
                    <StoreCard :store="store" />
                </RouterLink>
            </div>
        </div>
    </q-page>
</template>

<style scoped>
</style>