<script setup>
import { defineEmits, ref } from 'vue';
import { useRouter } from 'vue-router';
import API from '../utils/API.js';

const router = useRouter();
const props = defineProps({ storeID: String })
const emits = defineEmits(['deleteConfirmed'])
let prompt = ref(false);

const deleteEvent = async () => {
    console.log('store deleted!', props.event);
    const newStoresArray = await API.deleteStore(props.storeID);
    emits('deleteConfirmed', newStoresArray.data);
};

</script>


<template>
    <q-btn label="delete" color="primary" @click="prompt = true" />

    <q-dialog v-model="prompt" persistent>
        <q-card style="min-width: 350px">
            <q-card-section>
                <div class="text-h6">You will be logged out and routed to the home page.</div>
                <div class="text-h6">Change cannot be undone!</div>
                <div class="text-h6">Delete store forever?</div>
            </q-card-section>

            <q-card-actions align="right" class="text-primary">
                <q-btn flat label="Cancel" v-close-popup />
                <q-btn flat label="Delete" v-close-popup @click="deleteEvent" />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>


<style scoped>
</style>