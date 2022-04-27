<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue'
import data from '../../gamestores.js'
import getCloudinaryUrl from '../utils/getCloudinaryUrl.js'
import LightboxDialog from '../components/LightboxDialog.vue'
const route = useRoute()

const store = data.find(store => store.id === route.params.id);

// slide is for carousel index
let slide = ref(1);


// "gridify" images in gallery array (make multidimensional)
const colsPerRow = 3;
let rows = [];
let i = 0;
while (i <= store.gallery.length) {
    let row = []
    for (let j = 0; j < colsPerRow; j++) {
        if (store.gallery.length > i + j) {
            row.push(store.gallery[i + j]);
            // store.gallery.slideIndex = i + j + 1;
        }
    }
    rows.push(row);
    i += colsPerRow;
    console.log('i =' + i)
}

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
            <h3>Popular Products and Services</h3>
            <div class="row">
                <div v-for="product in store.productsServices" :key="product.name" class="col">
                    <img class="productImg"
                        :src="getCloudinaryUrl(product.img.imgName, product.img.imgId, product.img.imgType, 50, 150)">
                </div>
            </div>
        </section>
        <section>
            <h3>Event Calendar</h3>
            <p>calendar goes here</p>
        </section>
        <hr />
        <section>
            <h3>Gallery</h3>
            <div class="q-pa-md">
                <q-carousel swipeable animated v-model="slide" thumbnails infinite>
                    <q-carousel-slide v-for="(image, index) in store.gallery" :key="image.imgId" :name="index + 1"
                        :img-src="getCloudinaryUrl(image.imgName, image.imgId, image.imgType, null, null)" />
                </q-carousel>
            </div>
            <hr />
        </section>
        <section>
            <h3>Crazy Gallery!!!</h3>

            <div v-for="(row, index) in rows" :key="index" class="row">
                <div v-for="image in row" :key="image.imgId" class="col">
                    <!-- <LightboxDialog :image="image" :gallery="store.gallery" /> -->
                </div>
            </div>
        </section>
    </q-page>
</template>

<style scoped>
.productImg {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
</style>