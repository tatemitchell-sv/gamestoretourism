<script setup>
import { defineEmits, ref } from 'vue';
const props = defineProps({ image: Object })
const emits = defineEmits(['submit']);

let prompt = ref(false);

const submitForm = () => {
    emits('submit', formData.value);
};

let formData = ref({ ...props.image });
console.log('formdata after assigning props is: ', formData.value)
</script>

<template>
    <q-btn label="+ New Image" glossy text-color="white" color="accent" @click="prompt = true" />

    <q-dialog v-model="prompt" persistent>
        <q-card style="min-width: 1000px">
            <q-card-section>
                <div class="text-h6">Add New Cloudinary Image to Gallery</div>
            </q-card-section>

            <q-card-section class="q-pt-none">

                <div class="row">
                    <div class="col-2">Image Name: </div>
                    <div class="col">
                        <q-input dense v-model="formData.name" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-2">Cloudinary ID: (v...)</div>
                    <div class="col">
                        <q-input dense v-model="formData.cloudID" />
                    </div>
                </div>

            </q-card-section>

            <q-card-actions align="right" class="text-primary">
                <q-btn flat label="Cancel" v-close-popup />
                <q-btn flat label="Add Image" @click="submitForm" v-close-popup />
            </q-card-actions>

        </q-card>
    </q-dialog>
</template>

<style scoped>
</style>