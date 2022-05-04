<script setup>
import { defineEmits, ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import API from '../utils/API.js';
import getCloudinaryUrl from '../utils/getCloudinaryUrl.js';
import ProductEditor from '../components/ProductEditor.vue';
import ProductCreator from '../components/ProductCreator.vue';
import DeleteProduct from '../components/DeleteProduct.vue';

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

};
loadData();

const updateData = (updatedStoreData) => {
    store.value = updatedStoreData.data;
    console.log('new store data in grandparent is = ', updatedStoreData)
};

</script>

<template>

    <h2>Products and Services</h2>

    <div class="row" v-for="ps in store.productsServices" :key="ps.id">
        <div class="col">
            {{ ps.name }}
        </div>

        <div class="col">
            <ProductEditor :product="ps" :storeID="store.id" @updatedStore="updateData" />
        </div>
        <div class="col">
            <DeleteProduct :product="ps" :storeID="store.id" @updatedStore="updateData" />
        </div>
    </div>
    <ProductCreator :storeID="store.id" @updatedStore="updateData" />
    <hr />

</template>

<style scoped>
</style>