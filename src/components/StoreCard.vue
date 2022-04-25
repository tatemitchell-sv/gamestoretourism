<script setup>
import chipMap from '../utils/chipMap.js'
import getCloudinaryUrl from '../utils/getCloudinaryUrl.js'
defineProps({ store: Object })


</script>

<template>
    <q-card class="my-card">
        <q-img
            :src="getCloudinaryUrl(store.thumbnail.imgName, store.thumbnail.imgId, store.thumbnail.imgType, 350, 500)">
            <div class="absolute-bottom text-h6">
                {{ store.name }}
            </div>
            <div class="text-subtitle2">{{ store.locations.city }}, {{ store.locations.state }}</div>
        </q-img>

        <q-card-section>
            For fans of:
            <q-chip v-for="product in chipMap(store.productsServices)" :key="product.name" class="glossy"
                :color="product.chipColor" text-color="white" :icon-right="product.iconWhite">
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
    color: white;
    background-color: black;
}
</style>