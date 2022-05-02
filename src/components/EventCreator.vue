<script setup>
import { defineEmits, ref } from 'vue';
import API from '../utils/API.js';
import EventForm from './EventForm.vue';
const emits = defineEmits(['newStore'])
const props = defineProps({ storeID: String })

const btnLabel = '+ New Event';
const operationTitle = 'Create Event';

// new empty event
let event = ref({
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
});

// sumbit form functionality
const createEvent = async (formData) => {
    event.value = formData;
    const newStoreData = await API.createEvent(event.value, props.storeID);
    emits('newStore', newStoreData);
    console.log('new event created!  ', event.value);
};

</script>

<template>
    <EventForm :btnLabel="btnLabel" :operationTitle="operationTitle" :event="event" @submit="createEvent" />
</template>

<style scoped>
</style>