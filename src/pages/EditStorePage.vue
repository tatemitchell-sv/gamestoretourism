<script setup>
import { defineEmits, ref } from 'vue';
import { useRouter } from 'vue-router';
import { RouterLink } from 'vue-router';
import API from '../utils/API.js';
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

let discard = ref(false);
let confirm = ref(false);

let address = ref('');

const discardBack = () => {
    // loadData();'
    router.push('/account');
}

const onSubmit = () => {
    confirm = true;
    console.log('form submitted!')
    router.push('/account');
};

</script>

<template>
    <h2>Edit Store Info</h2>
    <div class="formContainer">

        <form>

            <h3>Store Name</h3>
            <q-input outlined v-model="store.name" label="Store Name" />

            <h3>Address</h3>
            <q-input outlined v-model="store.locations.streetAddress1" label="Address Line 1" />
            <q-input outlined v-model="store.locations.streetAddress2" label="Address Line 2" />
            <q-input outlined v-model="store.locations.city" label="City" />
            <q-input outlined v-model="store.locations.state" label="State" />
            <q-input outlined v-model="store.locations.zip" label="Zip Code" />

            <h3>Phone Number and Website</h3>
            <q-input outlined v-model="store.website" label="Website URL" />
            <q-input outlined v-model="store.phonenumber" label="Phone Number" />

            <h3>Operating Hours</h3>
            <p>*LEAVE DAY BLANK IF CLOSED*</p>
            <div class="row" v-for="day in store.hours" :key="day.day">
                <div class="col">{{ day.day }}: </div>
                <div class="col">
                    <q-input outlined v-model="day.open" label="Open" />
                </div>
                <div class="col">
                    <q-input outlined v-model="day.close" label="Close" />
                </div>
            </div>

            <h3>Store Thumbnail</h3>
            <q-input outlined v-model="store.thumbnail.imgName" label="Image Name" />
            <q-input outlined v-model="store.thumbnail.imgId" label="Image ID" />
            <q-input outlined v-model="store.thumbnail.imgType" label="Image Type" />

            <div class="row">
                <div class="col">
                    <q-btn label="Back" color="primary" @click="discard = true" />
                </div>
                <div class="col">
                    <q-btn label="Submit" color="primary" @click="confirm = true" />
                </div>
            </div>


        </form>

        <q-dialog v-model="discard" persistent>
            <q-card>
                <q-card-section class="row items-center">
                    <span class="q-ml-sm">Discard changes?</span>
                </q-card-section>

                <q-card-actions align="right">

                    <q-btn flat label="Cancel" color="primary" v-close-popup />
                    <q-btn flat label="Discard" color="primary" v-close-popup @click="discardBack" />
                </q-card-actions>
            </q-card>
        </q-dialog>

        <q-dialog v-model="confirm" persistent>
            <q-card>
                <q-card-section class="row items-center">
                    <span class="q-ml-sm">Confirm update?</span>
                </q-card-section>

                <q-card-actions align="right">

                    <q-btn flat label="Cancel" color="primary" v-close-popup />
                    <q-btn flat label="Confirm" color="primary" v-close-popup @click="onSubmit" />
                </q-card-actions>
            </q-card>
        </q-dialog>

    </div>

</template>

<style scoped>
.formContainer {
    width: 70%;
    height: auto;
    margin: auto;
}
</style>