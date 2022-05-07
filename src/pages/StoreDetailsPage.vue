<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue'
import API from '../utils/API.js'
import getCloudinaryUrl from '../utils/getCloudinaryUrl.js'
import CarouselDialog from '../components/CarouselDialog.vue'
import MyCalendar from '../components/MyCalendar.vue';
import EventCard from '../components/EventCard.vue';
import EventDisplay from 'src/components/EventDisplay.vue';
const route = useRoute()

// tab is for events qtabs
let tab = ref('list');

// slide is for carousel index
let slide = ref(1);

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

};
loadData();

</script>

<template>
    <q-page class="page">

        <section class="store-information">

            <div class="photo-block">
                <q-img :src="getCloudinaryUrl(store.thumbnail.name, store.thumbnail.cloudID, 202, 500)" />
            </div>


            <div class="text-block bg-positive">
                <h2>
                    <a :href="store.website" target="_blank">
                        {{ store.name }}
                    </a>
                </h2>

                <div class="store-info-text">
                    <a :href="store.googleMapsLink" target="_blank">
                        {{ store.locations.streetAddress1 }}
                        {{ store.locations.streetAddress2 }}
                        {{ store.locations.city }}
                        {{ store.locations.state }}
                        {{ store.locations.zip }}
                    </a>
                </div>

                <div class="store-info-text"><a :href="`tel:${store.phonenumber}`">{{ store.phonenumber }}</a></div>

                <div class="visit-link"><a :href="store.website" target="_blank">visit website</a></div>
            </div>



            <div class="text-block bg-accent">

                <h4>Hours of Operation</h4>
                <div class="store-info-text">

                    <div class="hours-grid" v-for="(item, index) in store.hours" :key="item.day">
                        <div class="hours-grid-days">{{ store.hours[index].day }}:</div>
                        <div>
                            {{ store.hours[index].open }}
                        </div>
                        <div>-</div>
                        <div>
                            {{ store.hours[index].close }}
                        </div>

                    </div>
                </div>



            </div>

            <div class="photo-block">
                <div class="google-embed" v-html="store.googleMapsEmbed" style="height: 300px; overflow: hidden;"></div>
            </div>

        </section>


        <section>
            <h3 class="section-header">Popular Products</h3>
            <div class="product-container">
                <div v-for="product in store.productsServices" :key="product.id">
                    <img class="product-thumbnail"
                        :src="getCloudinaryUrl(product.img.name, product.img.cloudID, 50, 150)">
                </div>
            </div>
            <hr />
        </section>

        <section>
            <h3 class="section-header">Events</h3>
            <EventDisplay :store="store" />
            <hr />
        </section>

        <section>
            <h3 class="section-header">Gallery</h3>

            <div class="gallery-container">
                <div v-for="image in store.gallery" :key="image.id">
                    <CarouselDialog :image="image" :gallery="store.gallery" />
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

.store-information {
    width: 100%;
    max-width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0px;
}

.text-block {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    flex-direction: column;
    padding: 20px;
    height: 375px;
    max-width: 100%;
    position: relative;
}

.text-block h2 {
    font-size: 30px;
}

.text-block h4 {
    margin: 0px 0px 20px 0px;
    font-size: 28px;
}

.text-block a {
    color: white;
    text-decoration: none;
}

.store-info-text {
    width: fit-content;
    font-size: 14px;
}

.visit-link {
    width: fit-content;
    font-size: 14px;
    position: absolute;
    bottom: 25px;
    left: 25px;
}

.photo-block {
    display: flex;
    width: 100%;
    justify-content: center;
    background-color: rgb(108, 102, 102);
    overflow: hidden;
    max-width: 100%;
}

.hours-grid {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    grid-column-gap: 15px;
    text-align: center;
}

.hours-grid-days {
    text-align: left;
    font-weight: 700;
}

.product-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
}

.gallery-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
}

.section-header {
    text-align: center;
}

.product-thumbnail {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    max-width: 100%;
}

@media screen and (min-width: 970px) {


    .text-block h2 {
        font-size: 40px;
    }

    .text-block h4 {
        font-size: 34px;
    }

    .google-embed {
        transform: scale(1.25) translate(60px, 30px);
    }

    .store-information {
        grid-template-columns: 1fr 1fr;
    }

    .product-container {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }

    .gallery-container {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .section-header {
        text-align: left;
    }

    .store-info-text {
        width: fit-content;
        font-size: 18px;
    }
}
</style>