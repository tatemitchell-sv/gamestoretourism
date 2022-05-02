<script setup>
import EventEditor from '../components/EventEditor.vue'
import { defineEmits, ref } from 'vue';
import { useRouter } from 'vue-router';
import { RouterLink } from 'vue-router';
import API from '../utils/API.js';
import getCloudinaryUrl from '../utils/getCloudinaryUrl.js';
import EventCreator from 'src/components/EventCreator.vue';
import DeleteEvent from 'src/components/DeleteEvent.vue';
import EventCard from 'src/components/EventCard.vue';
import MyCalendar from 'src/components/MyCalendar.vue';
const router = useRouter();

// log out capacity
const emit = defineEmits(['loggingInOut']);

// if not logged in, reroute
const authenticate = () => {
    if (localStorage.getItem("user") === null) {
        router.push("/notauthorized");
    }
};
authenticate();

// temporary store object
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
        imgType: "",
    },
    productsServices: [
        {
            name: "",
            info: "",
            img: { imgName: "", imgId: "", imgType: "" },
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
                imgType: "",
            },
        },
    ],
    gallery: [
        {
            imgName: "",
            imgId: "",
            imgType: "",
        },
    ],
});

// API request for store data
const loadData = async () => {

    const response = await API.getStoreById(localStorage.getItem('user'));
    store.value = response.data;

};
loadData();

// cancel form functionality
let version = ref(0);
const incVersion = () => {
    version.value++;
};

// sumbit form functionality
const submitEvent = () => {
    console.log('event submitted!')
};

// tab is for events qtabs
let tab = ref('list');
</script>

<template>
    <h1>Events</h1>


    <div class="row" v-for="event in store.events" :key="event.id">
        <div class="col">
            {{ event.title }}
        </div>
        <div class="col">
            <EventEditor :key="version" :event="event" @cancel="incVersion" @submit="submitEvent" />
        </div>
        <div class="col">
            <DeleteEvent :event="event" />
        </div>
    </div>

    <EventCreator @submit="submitEvent" />

    <section>
        <h3>Preview Events</h3>

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
                                <EventCard v-for="item in store.events" :key="item.id" :event="item">
                                </EventCard>
                            </div>
                        </q-tab-panel>

                        <q-tab-panel name="grid">
                            <div class="text-h6">Grid</div>
                            <div class="gridContainer">
                                <EventCard v-for="item in store.events" :key="item.id" :event="item">
                                </EventCard>
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
</template>

<style scoped>
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