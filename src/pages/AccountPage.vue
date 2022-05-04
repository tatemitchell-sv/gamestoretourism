<script setup>
import { defineEmits, ref } from 'vue';
import { useRouter } from 'vue-router';
import { RouterLink } from 'vue-router';
import API from '../utils/API.js';
import getCloudinaryUrl from '../utils/getCloudinaryUrl.js';
import DeleteStore from '../components/DeleteStore.vue';
const router = useRouter();
const emits = defineEmits(['loggingIn', 'loggingOut']);

// if not logged in, reroute
const authenticate = () => {
    if (localStorage.getItem("user") === null) {
        router.push("/notauthorized");
    }
};
authenticate();

// log out request on delete
const logOutRequest = (newStoresArray) => {
    console.log('Post-Delete Stores = ', newStoresArray)
    emits('loggingOut');

};

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

</script>

<template>
    <h2>Account Settings</h2>
    <div class="row">
        <div class="col">
            <img
                :src="getCloudinaryUrl(store.thumbnail.imgName, store.thumbnail.imgId, store.thumbnail.imgType, 200, 300)">
            {{ store.name }}
        </div>
        <q-separator vertical inset class="q-mx-lg" />
        <div class="col">
            <div class="row">
                <RouterLink to="/account/events">Manage Events</RouterLink>
            </div>
            <div class="row">
                <RouterLink to="/account/ps">Manage Products and Services</RouterLink>
            </div>
            <div class="row">
                <RouterLink to="/account/gallery">Manage Gallery</RouterLink>
            </div>
            <q-separator inset class="q-mx-lg" />
            <div class="row">
                <RouterLink to="/account/edit">Edit Store Info</RouterLink>
            </div>
            <div class="row">
                <RouterLink to="/account">Edit Account Info</RouterLink>
            </div>
            <q-separator inset class="q-mx-lg" />
            <DeleteStore :storeID="store.id" @deleteConfirmed="logOutRequest" />
        </div>
    </div>

    <RouterLink :to="`/store/${store.id}`">See your store!</RouterLink>
</template>

<style scoped>
</style>