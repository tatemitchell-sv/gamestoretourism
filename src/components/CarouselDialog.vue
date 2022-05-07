<script setup>
import { ref } from 'vue'
import getCloudinaryUrl from '../utils/getCloudinaryUrl.js'

const props = defineProps({ image: Object, gallery: Object })

let carousel = ref(false);

let isFullscreen = ref(true);

let slide = ref(props.image.id);

</script>

<template>

    <img :src="getCloudinaryUrl(image.name, image.cloudID, 200, 300)" @click="carousel = true" />

    <q-dialog v-model="carousel">

        <q-carousel transition-prev="slide-right" transition-next="slide-left" swipeable animated v-model="slide"
            control-color="white" :fullscreen="isFullscreen" navigation arrows padding height="200px"
            class="image-carousel bg-black shadow-1 rounded-borders">

            <q-carousel-slide v-for="image in gallery" :key="image.id" :name="image.id">
                <img class="slide-image" :src="getCloudinaryUrl(image.name, image.cloudID, 400, 1000)">
            </q-carousel-slide>

            <template v-slot:control>
                <q-carousel-control position="top-right" :offset="[18, 18]">
                    <q-btn round push icon="fa-solid fa-xmark" @click="carousel = false" />
                </q-carousel-control>
            </template>

        </q-carousel>
    </q-dialog>
</template>

<style scoped>
.image-carousel {
    overflow: hidden;
}

.slide-image {
    width: 100%;
    height: auto;
}
</style>