<script setup>
import { defineEmits, ref } from 'vue';
import API from '../utils/API.js';
import EventForm from './EventForm.vue';
const emits = defineEmits(['updatedStore'])
const props = defineProps({ storeID: String })

const btnLabel = '+ New Event';
const operationTitle = 'Create Event';

// new empty event
let event = ref({
    id: "",
    start: "2022-01-01 00:00",
    end: "2022-01-01 00:00",
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
    const updatedStoreData = await API.createEvent(formData, props.storeID);
    emits('updatedStore', updatedStoreData);
    console.log('new event created!  ', formData);
};

</script>

<template>
    <EventForm :btnLabel="btnLabel" :operationTitle="operationTitle" :event="event" @submit="createEvent" />
</template>

<style scoped>
</style>