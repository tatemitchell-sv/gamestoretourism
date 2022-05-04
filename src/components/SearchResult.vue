<script setup>
import chipMap from '../utils/chipMap.js'
import getCloudinaryUrl from '../utils/getCloudinaryUrl.js'
import { RouterLink } from "vue-router";
defineProps({ store: Object })


</script>

<template>

    <div class="row">
        <div class="col-3">
            <RouterLink :to="`/store/${store.id}`">
                <img :src="getCloudinaryUrl(store.thumbnail.imgName, store.thumbnail.imgId, 200, 300)">
            </RouterLink>
        </div>
        <div class="col">
            <div class="row">
                <RouterLink :to="`/store/${store.id}`">
                    <h3>{{ store.name }}</h3>
                </RouterLink>
            </div>
            <div class="row">
                {{ store.locations.city }}, {{ store.locations.state }}
            </div>

        </div>
    </div>
</template>

<style scoped>
</style>