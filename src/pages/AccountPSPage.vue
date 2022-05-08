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

    <section class="creator-section">
        <ProductCreator :storeID="store.id" @updatedStore="updateData" />
    </section>

    <div class="products-container">

        <div class="product-row" v-for="ps in store.productsServices" :key="ps.id">
            <div class="product-name">
                <ul>
                    <li>{{ ps.name }}</li>
                </ul>
            </div>

            <div class="button-container">
                <ProductEditor :product="ps" :storeID="store.id" @updatedStore="updateData" />
            </div>
            <div class="button-container">
                <DeleteProduct :product="ps" :storeID="store.id" @updatedStore="updateData" />
            </div>
        </div>
    </div>



    <hr />

</template>

<style scoped>
h2 {
    font-size: 40px;
    text-align: center;
}

.creator-section {
    width: fit-content;
    margin: auto;
    margin-bottom: 30px;
}

.products-container {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
}

.product-row {
    display: grid;
    grid-template-columns: 4fr 1fr 1fr;
    margin-bottom: 10px;
}

.product-name {
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

}
</style>