<script setup>
import { defineEmits, ref } from 'vue';
import API from '../utils/API.js';
import ProductForm from './ProductForm.vue';
const emits = defineEmits(['updatedStore'])
const props = defineProps({ storeID: String })

const btnLabel = '+ New Product';
const operationTitle = 'Create Product';

// new empty product
let product = ref({
    id: "",
    name: "",
    info: "",
    img: { imgName: "", imgId: "", },
});

// sumbit form functionality
const createProduct = async (formData) => {
    const updatedStoreData = await API.createProduct(formData, props.storeID);
    emits('updatedStore', updatedStoreData);
    console.log('new product created!  ', formData);
};

</script>

<template>
    <ProductForm :btnLabel="btnLabel" :operationTitle="operationTitle" :product="product" @submit="createProduct" />
</template>

<style scoped>
</style>