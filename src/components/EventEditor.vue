<script setup>
import { ref } from 'vue';
import API from '../utils/API.js'
import EventForm from './EventForm.vue';
const emits = defineEmits(['updatedStore'])
const props = defineProps({ event: Object, storeID: String });

const btnLabel = 'edit';
const operationTitle = 'Edit Event';

// cancel form functionality
let version = ref(0);
const incVersion = () => {
    version.value++;
};

// sumbit form functionality
const editEvent = async (formData) => {
    const updatedStoreData = await API.editEvent(formData, props.storeID);
    emits('updatedStore', updatedStoreData);
    console.log('event was editted!', updatedStoreData);
};

</script>

<template>
    <EventForm :key="version" :btnLabel="btnLabel" :operationTitle="operationTitle" :event="props.event"
        @cancel="incVersion" @submit="editEvent" />
</template>

<style scoped>
</style>