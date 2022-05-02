<script setup>
import { ref } from 'vue';
import EventForm from './EventForm.vue';
const props = defineProps({ event: Object });

const btnLabel = 'edit';
const operationTitle = 'Edit Event';

// cancel form functionality
let version = ref(0);
const incVersion = () => {
    version.value++;
};

// sumbit form functionality
const editEvent = () => {
    console.log('event was editted!')
};

</script>

<template>
    <EventForm :key="version" :btnLabel="btnLabel" :operationTitle="operationTitle" :event="props.event"
        @cancel="incVersion" @submit="editEvent" />
</template>

<style scoped>
</style>