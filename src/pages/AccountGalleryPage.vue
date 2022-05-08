<script setup>
import { defineEmits, ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import API from '../utils/API.js';
import getCloudinaryUrl from '../utils/getCloudinaryUrl.js';
import LightboxDialog from '../components/CarouselDialog.vue';
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

    <section class="creator-section">
        <GImageCreator :storeID="store.id" @updatedStore="updateGallery" />
    </section>

    <section class="gallery">
        <div class="image-container" v-for="image in store.gallery" :key="image.id">
            <img class="image" :src="getCloudinaryUrl(image.name, image.cloudID, 200, 300)" />
            <div class="delete-button">
                <DeleteGImage :image="image" :storeID="store.id" @updatedStore="updateGallery" />
            </div>

        </div>
    </section>

</template>

<style scoped>
h2 {
    font-size: 40px;
    text-align: center;
}

.creator-section {
    margin: auto;
    margin-bottom: 30px;
    width: fit-content;
}

.gallery {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 30px;
}

.image-container {
    width: 300px;
    overflow: hidden;
    position: relative;
    margin: auto;
}

.image {
    position: relative;
}

.delete-button {

    position: absolute;
    z-index: 6000;
    bottom: 5px;
    left: 0px;
}

@media screen and (min-width: 970px) {
    h2 {
        font-size: 60px;
    }

    .gallery {
        display: grid;
        grid-template-columns: 300px 300px 300px;
        grid-gap: 40px;
        width: 980px;
        margin: auto;
    }
}
</style>