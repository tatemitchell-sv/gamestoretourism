<script setup>
import { defineEmits, ref } from 'vue';
const props = defineProps({ btnLabel: String, operationTitle: String, product: Object })
const emits = defineEmits(['cancel', 'submit']);

let prompt = ref(false);

const cancelForm = () => {
    emits('cancel');
}
const submitForm = () => {
    emits('submit', formData.value);
};

let formData = ref({ ...props.product });
</script>


<template>
    <q-btn :label="props.btnLabel" glossy text-color="white" color="accent" @click="prompt = true" />

    <q-dialog v-model="prompt" persistent>
        <q-card style="min-width: 1000px">
            <q-card-section>
                <div class="text-h6">{{ props.operationTitle }}</div>
            </q-card-section>

            <q-card-section class="q-pt-none">

                <div class="row">
                    <div class="col-2">Product Name: </div>
                    <div class="col">
                        <q-input dense v-model="formData.name" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-2">Info: </div>
                    <div class="col">
                        <q-input dense v-model="formData.info" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-2">Image Name: </div>
                    <div class="col">
                        <q-input dense v-model="formData.img.name" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-2">Image ID: </div>
                    <div class="col">
                        <q-input dense v-model="formData.img.cloudID" />
                    </div>
                </div>

            </q-card-section>

            <q-card-actions align="right" class="text-primary">
                <q-btn flat label="Cancel" v-close-popup @click="cancelForm" />
                <q-btn flat label="Save Product" v-close-popup @click="submitForm" />
            </q-card-actions>

        </q-card>
    </q-dialog>
</template>


<style scoped>
</style>