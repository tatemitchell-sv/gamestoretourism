<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue'
import data from '../../gamestores.js'
import getCloudinaryUrl from '../utils/getCloudinaryUrl.js'
import LightboxDialog from '../components/LightboxDialog.vue'
import MyCalendar from '../components/MyCalendar.vue';
import EventCard from '../components/EventCard.vue';
const route = useRoute()

let tab = ref('list');

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
            store.gallery[i + j].slideIndex = i + j + 1;
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
                <div class="col" v-html="store.googleMapsEmbed">

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
            <h3>Events</h3>

            <div class="q-pa-md">
                <div class="q-gutter-y-md">
                    <q-card class="panelContainer">
                        <q-tabs v-model="tab" dense class="text-grey" active-color="primary" indicator-color="primary"
                            align="justify" narrow-indicator>
                            <q-tab name="list" label="List" icon="fa-solid fa-list" />
                            <q-tab name="grid" label="Grid" icon="fa-solid fa-grip" />
                            <q-tab name="calendar" label="Calendar" icon="fa-solid fa-calendar-day" />
                        </q-tabs>

                        <q-separator />

                        <q-tab-panels v-model="tab" animated>
                            <q-tab-panel name="list">
                                <div class="text-h6">List</div>
                                <div class="listContainer">
                                    <EventCard v-for="item in store.events" :key="item.id" :event="item"></EventCard>
                                </div>
                            </q-tab-panel>

                            <q-tab-panel name="grid">
                                <div class="text-h6">Grid</div>
                                <div class="gridContainer">
                                    <EventCard v-for="item in store.events" :key="item.id" :event="item"></EventCard>
                                </div>
                            </q-tab-panel>

                            <q-tab-panel name="calendar">
                                <div class="text-h6">Calendar</div>
                                <div class="calendarContainer">
                                    <MyCalendar :events="store.events"></MyCalendar>
                                </div>
                            </q-tab-panel>
                        </q-tab-panels>

                    </q-card>
                </div>
            </div>

        </section>
        <hr />

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

.panelContainer {
    width: 100%;
    height: auto;
}

.listContainer {
    display: flex;
    flex-direction: column;
}

.gridContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.calendarContainer {
    width: 80%;
    margin: auto;
    height: 700px;
    background-color: rgba(162, 127, 127, 0.3);
}
</style>