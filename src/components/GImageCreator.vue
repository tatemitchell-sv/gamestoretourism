<script setup>
import { defineEmits, ref } from 'vue';
import API from '../utils/API.js';
import GImageForm from './GImageForm.vue';
const emits = defineEmits(['updatedStore'])
const props = defineProps({ storeID: String })

// new empty product
let image = ref({
    name: "",
    cloudID: "",
});

// sumbit form functionality
const createImage = async (formData) => {
    const updatedStoreData = await API.createImage(formData, props.storeID);
    emits('updatedStore', updatedStoreData.data);
};

</script>

<template>
    <GImageForm :image="image" @submit="createImage" />
</template>

<style scoped>
</style>