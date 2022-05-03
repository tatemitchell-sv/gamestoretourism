<script setup>
import { defineEmits, ref } from 'vue';
import { useRouter } from 'vue-router';
import { RouterLink } from 'vue-router';
import API from '../utils/API.js';
import StoreCreator from '../components/StoreCreator.vue';
const router = useRouter();

// log in capacity
const emits = defineEmits(['loggingIn']);
let formData = ref({
    fieldUserName: '',
    fieldPassword: '',
});

const onCreateStore = (updatedStoreData) => {
    console.log('updatedStoreData in SU Page = ', updatedStoreData.id);
    formData.value.fieldUserName = updatedStoreData.id;
    emits('loggingIn', formData.value);
};
</script>

<template>
    <StoreCreator @updatedStore="onCreateStore" />
</template>

<style scoped>
</style>