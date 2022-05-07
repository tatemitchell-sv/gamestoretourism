<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue'
import API from '../utils/API.js'
import getCloudinaryUrl from '../utils/getCloudinaryUrl.js'
import LightboxDialog from '../components/CarouselDialog.vue'
import MyCalendar from '../components/MyCalendar.vue';
import EventCard from '../components/EventCard.vue';
import EventDisplay from 'src/components/EventDisplay.vue';
const route = useRoute()

// tab is for events qtabs
let tab = ref('list');

// slide is for carousel index
let slide = ref(1);

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
        name: "",
        cloudID: "",
    },
    productsServices: [
        {
            id: "",
            name: "",
            info: "",
            img: { name: "", cloudID: "", },
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
                name: "",
                cloudID: "",
            },
        },
    ],
    gallery: [
        {
            id: "",
            name: "",
            cloudID: "",
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
    <q-page class="page">

        <div class="row info-block">
            <div class="col photo-block">
                <q-img :src="getCloudinaryUrl(store.thumbnail.name, store.thumbnail.cloudID, 202, 500)">
                    <div class="absolute-bottom-right text-subtitle2">
                        Caption
                    </div>
                </q-img>


            </div>
            <div class="col text-block bg-positive">

                <h2>{{ store.name }}</h2>

                <div style="width: fit-content;">
                    Hours of Operation:
                    <div v-for="(item, index) in store.hours" :key="item.day">
                        {{ store.hours[index].day }}:
                        {{ store.hours[index].open }} - {{ store.hours[index].close }}
                    </div>
                </div>
            </div>
        </div>
        <div class="row info-block">
            <div class="col text-block bg-accent">
                <a :href="store.googleMapsLink" target="_blank">
                    {{ store.locations.streetAddress1 }}
                    {{ store.locations.streetAddress2 }}
                    {{ store.locations.city }}
                    {{ store.locations.state }}
                    {{ store.locations.zip }}
                </a>

                <div class="row"><a :href="`tel:${store.phonenumber}`">{{ store.phonenumber }}</a></div>
                <div class="row"><a :href="store.website" target="_blank">{{ store.website }}</a></div>
            </div>
            <div class="col photo-block">
                <div v-html="store.googleMapsEmbed" style="height: 300px; overflow: hidden;"></div>


            </div>
        </div>

        <section>
            <h4>Popular Products and Services</h4>
            <div class="row">
                <div v-for="product in store.productsServices" :key="product.id" class="col">
                    <img class="productImg" :src="getCloudinaryUrl(product.img.name, product.img.cloudID, 50, 150)">
                </div>
            </div>
            <hr />
        </section>

        <section>
            <h4>Events</h4>
            <EventDisplay :store="store" />
            <hr />
        </section>


        <section>
            <h4>Gallery</h4>

            <div v-for="(row, index) in rows" :key="index" class="row">
                <div v-for="image in row" :key="image.id" class="col">
                    <LightboxDialog :image="image" :gallery="store.gallery" />
                </div>
            </div>
        </section>
    </q-page>
</template>

<style scoped>
.page {
    max-width: 1200px;
    margin: auto;
}

.text-block {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    flex-direction: column;
}

.text-block a {
    color: white;
    text-decoration: none;
}


.colCentered {
    text-align: center;
}

.colRight {
    text-align: right;
}

.infoContainer {
    background-color: rgb(104, 18, 157);
    width: 80%;
    margin: auto;
}

.googleEmbed {
    width: fit-content;
    height: fit-content;
    margin: auto;
}

.productImg {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
</style>