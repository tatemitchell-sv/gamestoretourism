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

</script>

<template>
    <h2>Account Settings</h2>

    <div class="page-grid">

        <div class="info-block">
            <p>Username (Store ID): {{ store.id }}</p>
            <p>Name: {{ store.name }}</p>
            <RouterLink :to="`/store/${store.id}`">Go to Store Page</RouterLink>
        </div>

        <div class="links-block">
            <RouterLink to="/account/events">Manage Events</RouterLink>
            <RouterLink to="/account/ps">Manage Products and Services</RouterLink>
            <RouterLink to="/account/gallery">Manage Gallery</RouterLink>
            <RouterLink to="/account/edit">Edit Store Info</RouterLink>
            <DeleteStore :storeID="store.id" @deleteConfirmed="logOutRequest" />
        </div>

    </div>
</template>

<style scoped>
h2 {
    font-size: 36px;
    text-align: center;
}

.page-grid {
    display: grid;
    grid-template-columns: 1fr;
}

.info-block {
    display: flex;
    flex-direction: column;
    padding: 50px;
}

.links-block {
    display: flex;
    flex-direction: column;
    padding: 50px;
}


@media screen and (min-width: 970px) {
    h2 {
        font-size: 60px;
    }

    .page-grid {
        grid-template-columns: 1fr 1fr;
    }

}
</style>