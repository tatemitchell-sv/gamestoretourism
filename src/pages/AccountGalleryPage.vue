<script setup>
import { defineEmits, ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import API from '../utils/API.js';
import getCloudinaryUrl from '../utils/getCloudinaryUrl.js';
import LightboxDialog from '../components/LightboxDialog.vue';
import GImageCreator from '../components/GImageCreator.vue';
import DeleteGImage from '../components/DeleteGImage.vue';
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
// slide is for carousel index
let slide = ref(1);

// API request for store data
const loadData = async () => {

    const response = await API.getStoreById(localStorage.getItem('user'));
    store.value = response.data;


};
loadData();

const updateGallery = (updatedStoreData) => {
    store.value = updatedStoreData;
};

</script>

<template>
    <h2>Gallery Manager</h2>

    <section>
        <GImageCreator :storeID="store.id" @updatedStore="updateGallery" />
    </section>

    <section>
        {{ store.gallery.length }}
        <div v-for="image in store.gallery" :key="image.id">
            <img :src="getCloudinaryUrl(image.name, image.cloudID, 400, 600)" />
            <DeleteGImage :image="image" :storeID="store.id" @updatedStore="updateGallery" />
        </div>
    </section>

</template>

<style scoped>
</style>