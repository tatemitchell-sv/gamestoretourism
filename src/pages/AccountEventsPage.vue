<script setup>
import { defineEmits, ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import API from '../utils/API.js';
import getCloudinaryUrl from '../utils/getCloudinaryUrl.js';
import EventEditor from '../components/EventEditor.vue'
import EventCreator from 'src/components/EventCreator.vue';
import DeleteEvent from 'src/components/DeleteEvent.vue';
import EventDisplay from '../components/EventDisplay.vue';

const router = useRouter();

// log out capacity
const emits = defineEmits(['loggingIn']);

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
            name: "",
            cloudID: "",
        },
    ],
});

// API request for store data
const loadData = async () => {

    const response = await API.getStoreById(localStorage.getItem('user'));
    store.value = response.data;

    // for (let i = 0; i < store.value.events.length; i++) {
    //     if ((i + 2) % 2 == 0) {
    //         store.value.events[i].backgroundColor = "gray";
    //     }
    // }

};
loadData();

const updateData = (updatedStoreData) => {
    store.value = updatedStoreData.data;
    console.log('new store data in grandparent is = ', updatedStoreData)

    // for (let i = 0; i < store.value.events.length; i++) {
    //     if (store.value.events[i].id % 2 == 0) {
    //         store.value.events[i].backgroundColor = "gray";
    //     }
    // }
    // :style="`background-color: ${event.backgroundColor};`"
};

</script>

<template>

    <h2>Events</h2>

    <section class="creator-section">
        <EventCreator :storeID="store.id" @updatedStore="updateData" />
    </section>


    <div class="events-container">
        <div class="event-row" v-for="event in store.events" :key="event.id">
            <div class="event-title">
                <ul>
                    <li>{{ event.title }}</li>
                </ul>
            </div>
            <div class="button-container">
                <EventEditor :event="event" :storeID="store.id" @updatedStore="updateData" />
            </div>
            <div class="button-container">
                <DeleteEvent :event="event" :storeID="store.id" @updatedStore="updateData" />
            </div>
        </div>

    </div>



    <hr />

    <h3>Preview Events</h3>
    <EventDisplay :store="store" />

</template>

<style scoped>
h2 {
    font-size: 40px;
    text-align: center;
}

h3 {
    font-size: 30px;
    text-align: center;
}

.creator-section {
    width: fit-content;
    margin: auto;
    margin-bottom: 30px;
}

.events-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.event-row {
    display: grid;
    grid-template-columns: 4fr 1fr 1fr;
    margin-bottom: 10px;
}

.event-title {
    margin: 0px 10px 0px 0px;
}

.button-container {
    display: flex;
    align-items: center;
    width: fit-content;
    margin: auto;
}

@media screen and (min-width: 970px) {

    h2 {
        font-size: 60px;
    }

    h3 {
        font-size: 48px;
    }

    .event-row {
        grid-template-columns: 400px 100px 100px;
    }
}
</style>