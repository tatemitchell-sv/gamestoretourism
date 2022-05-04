<script setup>
import { defineEmits, ref } from 'vue';
const props = defineProps({ btnLabel: String, operationTitle: String, event: Object })
const emits = defineEmits(['cancel', 'submit']);

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
        <q-card style="min-width: 1000px">
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
                        <div class="q-pa-md">
                            <div class="q-gutter-sm">
                                <q-badge color="teal">
                                    Model: {{ formData.start }}
                                </q-badge>
                                <q-badge color="purple" text-color="white" class="q-ma-md">
                                    Mask: YYYY-MM-DD HH:mm
                                </q-badge>
                            </div>

                            <div class="q-gutter-md row items-start">
                                <q-date v-model="formData.start" mask="YYYY-MM-DD HH:mm" color="purple" />
                                <q-time v-model="formData.start" mask="YYYY-MM-DD HH:mm" color="purple" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-2">End: </div>
                    <div class="col">
                        <div class="q-pa-md">
                            <div class="q-gutter-sm">
                                <q-badge color="teal">
                                    Model: {{ formData.end }}
                                </q-badge>
                                <q-badge color="purple" text-color="white" class="q-ma-md">
                                    Mask: YYYY-MM-DD HH:mm
                                </q-badge>
                            </div>
                            <div class="q-gutter-md row items-start">
                                <q-date v-model="formData.end" mask="YYYY-MM-DD HH:mm" color="purple" />
                                <q-time v-model="formData.end" mask="YYYY-MM-DD HH:mm" color="purple" />
                            </div>
                        </div>
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
                <q-btn flat label="Save Event" v-close-popup @click="submitForm" />
            </q-card-actions>

        </q-card>
    </q-dialog>
</template>


<style scoped>
</style>