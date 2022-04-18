<script setup>
defineProps({ store: Object })
</script>

<template>
    <q-page class="storeCard">
        <img class="banner" :src="store.thumbnail" />
        <h3>{{ store.name }}</h3>
        <p>{{ store.locations.city }}, {{ store.locations.state }}</p>
        For fans of:
        <ul>
            <li v-for="product in store.productsServices" :key="product.name">
                {{ product.name }}
            </li>
        </ul>
    </q-page>
</template>

<style scoped>
.storeCard {
    background-color: gray;
    padding: 10px 10px 10px 10px;
    margin: 10px 10px 10px 10px;
    border-radius: 2%;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
</style>