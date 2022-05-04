<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue'
import API from '../utils/API.js'
import getCloudinaryUrl from '../utils/getCloudinaryUrl.js'
import LightboxDialog from '../components/LightboxDialog.vue'
import MyCalendar from '../components/MyCalendar.vue';
import EventCard from '../components/EventCard.vue';
import EventDisplay from 'src/components/EventDisplay.vue';
const route = useRoute()

// slide is for carousel index
let slide = ref(1);

// tab is for events qtabs
let tab = ref('list');

// galleryGridify variables
const colsPerRow = 3;
let rows = [];
let i = 0;

// pre load store objrct
let store = ref({
    name: "",
    id: "",
    locations: {
        latitude: "",
        longitude: "",
        streetAddress1: "",
        streetAddress2: "",
        city: "",
        state: "",
        zip: "",
    },
    phonenumber: "",
    hours: [{ day: "", open: "", close: "" }],
    website: "",
    googleMapsLink: "",
    googleMapsEmbed: "",
    thumbnail: {
        imgName: "",
        imgId: "",
    },
    productsServices: [
        {
            id: "",
            name: "",
            info: "",
            img: { imgName: "", imgId: "", },
            link: "",
            iconWhite: "",
            iconBlack: "",
        },
    ],
    events: [
        {
            id: "",
            start: "",
            end: "",
            title: "",
            content: "",
            class: "",
            img: {
                imgName: "",
                imgId: "",
            },
        },
    ],
    gallery: [
        {
            imgName: "",
            imgId: "",
        },
    ],
});

const loadData = async () => {

    const response = await API.getStoreById(route.params.id);
    store.value = response.data;

    // "gridify" images in gallery array (make multidimensional)
    const gridifyImageGallery = () => {

        while (i <= store.value.gallery.length) {
            let row = []
            for (let j = 0; j < colsPerRow; j++) {
                if (store.value.gallery.length > i + j) {
                    row.push(store.value.gallery[i + j]);
                    store.value.gallery[i + j].slideIndex = i + j + 1;
                }
            }
            rows.push(row);
            i += colsPerRow;
        }
    }
    gridifyImageGallery();
};
loadData();

</script>

<template>
    <q-page class="">
        <h2>{{ store.name }}</h2>
        <section>
            <div class="row">
                <div class="col-4">
                    <q-img :src="getCloudinaryUrl(store.thumbnail.imgName, store.thumbnail.imgId, null, 500)">
                        <div class="absolute-bottom-right text-subtitle2">
                            Caption
                        </div>
                    </q-img>
                </div>
                <div class="col-6">
                    <div class="row">
                        Address: <a :href="store.googleMapsLink" target="_blank">
                            {{ store.locations.streetAddress1 }}
                            {{ store.locations.streetAddress2 }}
                            {{ store.locations.city }}
                            {{ store.locations.state }}
                            {{ store.locations.zip }}
                        </a>
                    </div>

                    <div class="row"><a :href="`tel:${store.phonenumber}`">{{ store.phonenumber }}</a></div>
                    <div class="row"><a :href="store.website" target="_blank">{{ store.website }}</a></div>

                    <div class="row">Hours of Operation:</div>
                    <div v-for="(item, index) in store.hours" :key="item.day" class="row">
                        {{ store.hours[index].day }}: {{ store.hours[index].open }} - {{ store.hours[index].close }}
                    </div>
                </div>
                <div class="col" v-html="store.googleMapsEmbed">

                </div>
            </div>
        </section>

        <section>
            <h3>Popular Products and Services</h3>
            <div class="row">
                <div v-for="product in store.productsServices" :key="product.id" class="col">
                    <img class="productImg" :src="getCloudinaryUrl(product.img.imgName, product.img.imgId, 50, 150)">
                </div>
            </div>
            <hr />
        </section>

        <section>
            <h3>Events</h3>
            <EventDisplay :store="store" />
            <hr />
        </section>


        <section>
            <h3>Crazy Gallery!!!</h3>

            <div v-for="(row, index) in rows" :key="index" class="row">
                <div v-for="image in row" :key="image.imgId" class="col">
                    <LightboxDialog :image="image" :gallery="store.gallery" />
                </div>
            </div>
        </section>
    </q-page>
</template>

<style>
.productImg {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
</style>