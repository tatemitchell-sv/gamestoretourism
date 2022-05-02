<script setup>
import { ref } from 'vue';
import EventForm from './EventForm.vue';
const props = defineProps({ event: Object });


const btnLabel = 'edit';

const cancelForm = () => {
    emit('cancel');
}
const submitForm = () => {
    emit('submit');
};

</script>

<template>
    <EventForm :btnLabel="btnLabel" :event="props.event" />
</template>

<style scoped>
</style>