<script setup>
import { ref } from 'vue';
import API from '../utils/API.js'
import ProductForm from './ProductForm.vue';
const emits = defineEmits(['updatedStore'])
const props = defineProps({ product: Object, storeID: String });

const btnLabel = 'edit';
const operationTitle = 'Edit Product';

// cancel form functionality
let version = ref(0);
const incVersion = () => {
    version.value++;
};

// sumbit form functionality
const editProduct = async (formData) => {
    const updatedStoreData = await API.editProduct(formData, props.storeID);
    emits('updatedStore', updatedStoreData);
    console.log('product was editted!', updatedStoreData);
};

</script>

<template>
    <ProductForm :key="version" :btnLabel="btnLabel" :operationTitle="operationTitle" :product="props.product"
        @cancel="incVersion" @submit="editProduct" />
</template>

<style scoped>
</style>