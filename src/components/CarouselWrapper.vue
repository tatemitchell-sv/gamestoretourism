<script setup>
import { ref } from 'vue'
import getCloudinaryUrl from '../utils/getCloudinaryUrl.js'
defineProps({ gallery: Object })

let slide = ref(pos)

</script>

<template>
    <div class="q-pa-md">
        <q-carousel v-model="slide" transition-prev="slide-right" transition-next="slide-left" swipeable animated
            control-color="primary" navigation padding arrows height="300px" class="bg-grey-1 shadow-2 rounded-borders">
            <q-carousel-slide v-for="(image, index) in gallery" :key="image.imgId" :name="index + 1"
                :img-src="getCloudinaryUrl(image.imgName, image.imgId, image.imgType, null, null)" />
        </q-carousel>
    </div>
</template>

<style>
</style>
