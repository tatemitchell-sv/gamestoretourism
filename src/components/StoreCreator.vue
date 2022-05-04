<script setup>
import { ref } from 'vue';
import API from '../utils/API.js'
import StoreInfoForm from './StoreInfoForm.vue';
const emits = defineEmits(['updatedStore', 'loggingIn'])

const operationTitle = 'Create a';

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
    hours: [{ day: "Monday", open: "", close: "" },
    { day: "Tuesday", open: "", close: "" },
    { day: "Wednesday", open: "", close: "" },
    { day: "Thursday", open: "", close: "" },
    { day: "Friday", open: "", close: "" },
    { day: "Saturday", open: "", close: "" },
    { day: "Sunday", open: "", close: "" }],
    website: "https://",
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

// cancel form functionality
let version = ref(0);
const incVersion = () => {
    version.value++;
};

// sumbit form functionality
const createStore = async (formData) => {
    const updatedStoreData = await API.createStore(formData);
    emits('updatedStore', updatedStoreData.data);
    console.log('store was editted!', updatedStoreData.data);
};

</script>

<template>
    <StoreInfoForm :key="version" :operationTitle="operationTitle" :store="store" @cancel="incVersion"
        @submit="createStore" />
</template>

<style scoped>
</style>