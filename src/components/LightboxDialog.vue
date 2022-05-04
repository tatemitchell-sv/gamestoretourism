<script setup>
import { ref } from 'vue'
import getCloudinaryUrl from '../utils/getCloudinaryUrl.js'
import CarouselWrapper from './CarouselWrapper.vue';

defineProps({ image: Object, gallery: Object })

let icon = ref(false);
let bar = ref(false);
let bar2 = ref(false);
let toolbar = ref(false);

</script>

<template>
    <div class="q-pa-md q-gutter-sm">
        <img :src="getCloudinaryUrl(image.imgName, image.imgId, 200, 300)" @click="icon = true" />

        <q-dialog v-model="icon">
            <q-card>
                <q-card-section class="row items-center q-pb-none">
                    <div class="text-h6">Close icon</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup />
                </q-card-section>

                <q-card-section>
                    <CarouselWrapper :img="image" :gallery="gallery" />
                </q-card-section>

            </q-card>
        </q-dialog>
    </div>
</template>

<style scoped>
</style>