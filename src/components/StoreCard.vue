<script setup>
import chipMap from '../utils/chipMap.js'
defineProps({ store: Object })


</script>

<template>
    <q-card class="my-card">
        <q-img :src="store.thumbnail">
            <div class="absolute-bottom text-h6">
                {{ store.name }}
            </div>
            <div class="text-subtitle2">{{ store.locations.city }}, {{ store.locations.state }}</div>
        </q-img>

        <q-card-section>
            For fans of:
            <q-chip v-for="product in chipMap(store.productsServices)" :key="product.name" class="glossy"
                :color="product.chipColor" text-color="white" :icon-right="product.chipIcon">
                {{ product.name }}
            </q-chip>
        </q-card-section>
    </q-card>
</template>

<style scoped>
.q-img__image {
    width: 100%;
    height: auto;
}

.q-card__section {
    text-decoration: none;
}
</style>