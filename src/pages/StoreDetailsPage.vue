<script setup>
import { useRoute } from 'vue-router';
import data from '../../gamestores.js'
import MasonryGallery from 'src/components/MasonryGallery.vue';
import getCloudinaryUrl from '../utils/getCloudinaryUrl.js'
const route = useRoute()
const storeID = route.params.id;
const store = data[storeID];

console.log("storeThumbnail is:", store.thumbnail)
</script>

<template>
    <q-page class="">
        <h2>{{ store.name }}</h2>
        <section>
            <div class="row">
                <div class="col-4">
                    <q-img
                        :src="getCloudinaryUrl(store.thumbnail.imgName, store.thumbnail.imgId, store.thumbnail.imgType, null, 500)">
                        <div class="absolute-bottom-right text-subtitle2">
                            Caption
                        </div>
                    </q-img>
                </div>
                <div class="col-6">
                    <div class="row">
                        Address:
                        {{ store.locations.streetAddress1 }}
                        {{ store.locations.streetAddress2 }}
                        {{ store.locations.city }}
                        {{ store.locations.state }}
                        {{ store.locations.zip }}
                    </div>

                    <div class="row">Hours of Operation:</div>
                    <div class="row">
                        {{ store.hours[0].day }}: {{ store.hours[0].open }} - {{ store.hours[0].close }}
                    </div>
                    <div class="row">
                        {{ store.hours[1].day }}: {{ store.hours[1].open }} - {{ store.hours[1].close }}
                    </div>
                    <div class="row">
                        {{ store.hours[2].day }}: {{ store.hours[2].open }} - {{ store.hours[2].close }}
                    </div>
                    <div class="row">
                        {{ store.hours[3].day }}: {{ store.hours[3].open }} - {{ store.hours[3].close }}
                    </div>
                    <div class="row">
                        {{ store.hours[4].day }}: {{ store.hours[4].open }} - {{ store.hours[4].close }}
                    </div>
                    <div class="row">
                        {{ store.hours[5].day }}: {{ store.hours[5].open }} - {{ store.hours[5].close }}
                    </div>
                    <div class="row">
                        {{ store.hours[6].day }}: {{ store.hours[6].open }} - {{ store.hours[6].close }}
                    </div>
                </div>
            </div>
        </section>

        <section>
            <h3>Products and Services</h3>
            <div class="row">
                <div v-for="product in store.productsServices" :key="product.name" class="col">
                    <img :src="getCloudinaryUrl(product.img.imgName, product.img.imgId, product.img.imgType, 100, 300)">
                </div>
            </div>
        </section>
        <hr />
        <section>
            <h3>Gallery</h3>
            <MasonryGallery :pic="store.thumbnail" />
        </section>
    </q-page>
</template>

<style scoped>
</style>