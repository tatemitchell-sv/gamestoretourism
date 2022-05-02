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

const updateData = (newStoreData) => {
    store.value = newStoreData.data;
    console.log('new store data in grandparent is = ', newStoreData)
};

</script>

<template>

    <h2>Events</h2>

    <div class="row" v-for="event in store.events" :key="event.id">
        <div class="col">
            {{ event.title }}
        </div>
        <div class="col">
            <EventEditor :event="event" />
        </div>
        <div class="col">
            <DeleteEvent :event="event" />
        </div>
    </div>
    <EventCreator :storeID="store.id" @newStore="updateData" />
    <hr />

    <h3>Preview Events</h3>
    <EventDisplay :store="store" />

</template>

<style scoped>
</style>