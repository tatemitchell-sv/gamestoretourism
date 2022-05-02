<script setup>
import { defineEmits, ref } from 'vue';
const props = defineProps({ btnLabel: String, operationTitle: String, event: Object })
const emits = defineEmits(['cancel, submit']);

let prompt = ref(false);

const cancelForm = () => {
    emits('cancel');
}
const submitForm = () => {
    emits('submit', formData.value);
};

let formData = ref({ ...props.event });
</script>


<template>
    <q-btn :label="props.btnLabel" color="primary" @click="prompt = true" />

    <q-dialog v-model="prompt" persistent>
        <q-card style="min-width: 350px">
            <q-card-section>
                <div class="text-h6">{{ props.operationTitle }}</div>
            </q-card-section>

            <q-card-section class="q-pt-none">

                <div class="row">
                    <div class="col-2">Title: </div>
                    <div class="col">
                        <q-input dense v-model="formData.title" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-2">Start: </div>
                    <div class="col">
                        <q-input dense v-model="formData.start" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-2">End: </div>
                    <div class="col">
                        <q-input dense v-model="formData.end" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-2">Content (html): </div>
                    <div class="col">
                        <q-input dense v-model="formData.content" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-2">Class: </div>
                    <div class="col">
                        <q-input dense v-model="formData.class" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-2">Image Name: </div>
                    <div class="col">
                        <q-input dense v-model="formData.img.imgName" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-2">Image ID: </div>
                    <div class="col">
                        <q-input dense v-model="formData.img.imgId" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-2">Image Type: </div>
                    <div class="col">
                        <q-input dense v-model="formData.img.imgType" />
                    </div>
                </div>

            </q-card-section>

            <q-card-actions align="right" class="text-primary">
                <q-btn flat label="Cancel" v-close-popup @click="cancelForm" />
                <q-btn flat label="Save Event" v-close-popup @click="submitForm" />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>


<style scoped>
</style>