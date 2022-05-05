<script setup>
import { ref } from 'vue';
import API from '../utils/API.js'
const emits = defineEmits(['updatedStore'])
const props = defineProps({ product: Object, storeID: String })

let prompt = ref(false);

let data = ref({ ...props.product });

const deleteProduct = async () => {
    const updatedStoreData = await API.deleteProduct(props.product.id, props.storeID);
    emits('updatedStore', updatedStoreData);
};
</script>


<template>
    <q-btn label="delete" color="primary" @click="prompt = true" />

    <q-dialog v-model="prompt" persistent>
        <q-card style="min-width: 350px">
            <q-card-section>
                <div class="text-h6">Delete Product?</div>
            </q-card-section>

            <q-card-section>
                <div>{{ data.name }}</div>
            </q-card-section>

            <q-card-actions align="right" class="text-primary">
                <q-btn flat label="Cancel" v-close-popup />
                <q-btn flat label="Delete" v-close-popup @click="deleteProduct" />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>


<style scoped>
</style>
