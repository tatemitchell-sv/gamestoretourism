<script setup>
import { defineEmits, ref } from 'vue';
import { useRouter } from 'vue-router';
import { RouterLink } from 'vue-router';
import API from '../utils/API.js';
const router = useRouter();

const props = defineProps({ store: Object, operationTitle: String })
const emits = defineEmits(['submit', 'cancel']);

let discard = ref(false);
let confirm = ref(false);

const discardBack = () => {
    console.log('store form discarded! discarded back!');
};

const onSubmit = () => {
    emits('submit', formData.value);
    console.log('new store form submitted! Store emitted: ', formData.value);
};

console.log('props.store is: ', props.store)
let formData = ref({ ...props.store });
console.log('formData is: ', formData.value)
</script>

<template>
    <h2>{{ operationTitle }} Store</h2>
    <div class="formContainer">

        <form>

            <h3>Store Name</h3>
            <q-input outlined v-model="formData.name" label="Store Name" />

            <h3>Address</h3>
            <q-input outlined v-model="formData.locations.streetAddress1" label="Address Line 1" />
            <q-input outlined v-model="formData.locations.streetAddress2" label="Address Line 2" />
            <q-input outlined v-model="formData.locations.city" label="City" />
            <q-input outlined v-model="formData.locations.state" label="State" />
            <q-input outlined v-model="formData.locations.zip" label="Zip Code" />

            <h3>Phone Number and Website</h3>
            <q-input outlined v-model="formData.website" label="Website URL" />
            <q-input outlined v-model="formData.phonenumber" label="Phone Number (xxx) xxx-xxxx" />

            <h3>Operating Hours</h3>
            <p>*LEAVE DAY BLANK IF CLOSED*</p>
            <div class="row" v-for="day in formData.hours" :key="day.day">
                <div class="col">{{ day.day }}: </div>
                <div class="col">
                    <q-input outlined v-model="day.open" label="Open" />
                </div>
                <div class="col">
                    <q-input outlined v-model="day.close" label="Close" />
                </div>
            </div>

            <h3>Store Thumbnail</h3>
            <q-input outlined v-model="formData.thumbnail.imgName" label="Image Name" />
            <q-input outlined v-model="formData.thumbnail.imgId" label="Image ID" />
            <q-input outlined v-model="formData.thumbnail.imgType" label="Image Type" />

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
                    <span class="q-ml-sm">Confirm?</span>
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