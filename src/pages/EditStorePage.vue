<script setup>
import { defineEmits, ref } from 'vue';
import { useRouter } from 'vue-router';
import { RouterLink } from 'vue-router';
import API from '../utils/API.js';
import StoreEditor from '../components/StoreEditor.vue';
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
    id: "notSet",
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

// API request for store data
const loadData = async () => {

    const response = await API.getStoreById(localStorage.getItem('user'));
    store.value = response.data;
    console.log('store is: ', store.value.name)
};
loadData();

const updateData = (updatedStoreData) => {
    console.log('new store data in grandparent is = ', updatedStoreData)
    router.push('/account');
};

</script>

<template>
    <StoreEditor :key="store.id" :store="store" @updatedStore="updateData" />
</template>

<style scoped>
</style>