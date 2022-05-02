<script setup>
import { ref } from 'vue';
import EventForm from './EventForm.vue';

const btnLabel = '+ New Event';

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

</script>

<template>
    <EventForm :btnLabel="btnLabel" :event="event" />
</template>

<style scoped>
</style>