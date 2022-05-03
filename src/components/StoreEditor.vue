<script setup>
import { ref } from 'vue';
import API from '../utils/API.js'
import StoreInfoForm from './StoreInfoForm.vue';
const emits = defineEmits(['updatedStore'])
const props = defineProps({ store: Object, storeID: String });

const btnLabel = 'edit';
const operationTitle = 'Edit';

// cancel form functionality
let version = ref(0);
const incVersion = () => {
    version.value++;
};

// sumbit form functionality
const editStore = async (formData) => {
    const updatedStoreData = await API.editStore(formData, props.store.id);
    emits('updatedStore', updatedStoreData);
    console.log('store was editted!', updatedStoreData);
};

</script>

<template>
    <StoreInfoForm :key="version" :operationTitle="operationTitle" :store="props.store" @cancel="incVersion"
        @submit="editStore" />
</template>

<style scoped>
</style>