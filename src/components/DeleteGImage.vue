<script setup>
import { ref } from 'vue';
import API from '../utils/API.js'
const emits = defineEmits(['updatedStore'])
const props = defineProps({ image: Object, storeID: String })

let prompt = ref(false);

let data = ref({ ...props.image });

const deleteImage = async () => {
    const updatedStoreData = await API.deleteImage(props.image, props.storeID);
    emits('updatedStore', updatedStoreData.data);
};
</script>

<template>
    <q-btn label="delete" color="primary" @click="prompt = true" />

    <q-dialog v-model="prompt" persistent>
        <q-card style="min-width: 350px">
            <q-card-section>
                <div class="text-h6">Delete Image?</div>
            </q-card-section>

            <q-card-section>
                <div>{{ data.name }}</div>
            </q-card-section>

            <q-card-actions align="right" class="text-primary">
                <q-btn flat label="Cancel" v-close-popup />
                <q-btn flat label="Delete" v-close-popup @click="deleteImage" />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<style>
</style>