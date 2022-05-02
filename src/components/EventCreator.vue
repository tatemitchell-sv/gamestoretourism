<script setup>
import { ref } from 'vue';
import EventForm from './EventForm.vue';

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
const createEvent = () => {
    console.log('new event created!')
};

</script>

<template>
    <EventForm :btnLabel="btnLabel" :operationTitle="operationTitle" :event="event" @submit="createEvent" />
</template>

<style scoped>
</style>