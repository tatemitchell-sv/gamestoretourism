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
    <h2 class="page-header">{{ operationTitle }} Store</h2>

    <div class="form-container">

        <form>

            <h3 class="input-header">Store Name</h3>
            <q-input class="form-input" outlined v-model="formData.name" label="Store Name" />

            <h3 class="input-header">Address</h3>
            <q-input class="form-input" outlined v-model="formData.locations.streetAddress1" label="Address Line 1" />
            <q-input class="form-input" outlined v-model="formData.locations.streetAddress2" label="Address Line 2" />
            <q-input class="form-input" outlined v-model="formData.locations.city" label="City" />
            <q-input class="form-input" outlined v-model="formData.locations.state" label="State" />
            <q-input class="form-input" outlined v-model="formData.locations.zip" label="Zip Code" />

            <h3 class="input-header">Phone and Website</h3>
            <q-input class="form-input" outlined v-model="formData.website" label="Website URL" />
            <q-input class="form-input" outlined v-model="formData.phonenumber" label="Phone Number (xxx) xxx-xxxx" />

            <h3 class="input-header">Operating Hours</h3>
            <p class="form-instructions">*LEAVE DAY BLANK IF CLOSED*</p>
            <div class="row" v-for="day in formData.hours" :key="day.day">
                <div class="col-4 form-day">{{ day.day }}: </div>
                <div class="col-4">
                    <q-input class="form-input" outlined v-model="day.open" label="Open" />
                </div>
                <div class="col-4">
                    <q-input class="form-input" outlined v-model="day.close" label="Close" />
                </div>
            </div>

            <h3 class="input-header">Thumbnail</h3>
            <q-input class="form-input" outlined v-model="formData.thumbnail.name" label="Image Name" />
            <q-input class="form-input" outlined v-model="formData.thumbnail.cloudID" label="Image ID" />

            <div class="form-end-buttons">

                <q-btn class="form-button" glossy label="Back" color="accent" @click="discard = true" />

                <q-btn class="form-button" glossy label="Submit" color="accent" @click="confirm = true" />

            </div>


        </form>

        <q-dialog v-model="discard" persistent>
            <q-card>
                <q-card-section class="row items-center">
                    <span class="q-ml-sm">
                        <h4 class="dialog-header">Discard Changes?</h4>
                    </span>
                </q-card-section>

                <q-card-actions align="right" class="text-primary">
                    <q-btn flat label="Cancel" v-close-popup />
                    <q-btn flat label="Discard" @click="submitForm" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>

        <q-dialog v-model="confirm" persistent>
            <q-card>
                <q-card-section class="row items-center">
                    <span class="q-ml-sm">
                        <h4 class="dialog-header">Confirm store information?</h4>
                    </span>
                </q-card-section>

                <q-card-actions align="right" class="text-primary">
                    <q-btn flat label="Cancel" v-close-popup />
                    <q-btn flat label="Confirm" @click="submitForm" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>

    </div>

</template>

<style scoped>
.page-header {
    text-align: center;
    font-size: 40px;
}

.form-container {
    width: 90%;
    margin: auto;
}

.input-header {
    font-size: 30px;
    text-align: center;
}

.log-in-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.form-input {
    width: 100%;
    margin: 5px 0px;
}

.form-end-buttons {
    width: 100%;
    display: flex;
    justify-content: center;
}

.form-button {
    margin: 40px 20px;
}

.dialog-header {
    text-align: center;
    margin: 20px;
}

.dialog-button {
    margin: 20px 20px;
}


.form-day {
    display: flex;
    align-items: center;
}

.form-instructions {
    margin-bottom: 40px;
    text-align: center;
}

@media screen and (min-width: 970px) {
    .page-header {
        font-size: 60px;
    }

    .form-container {
        width: 600px;
    }

    .input-header {
        font-size: 48px;
    }
}
</style>