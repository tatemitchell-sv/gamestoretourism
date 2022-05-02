<script setup>
import { ref } from 'vue';
const props = defineProps({ event: Object })

let prompt = ref(false);

let data = ref({ ...props.event });

const deleteEvent = () => {
    console.log('event deleted!');
};
</script>


<template>
    <q-btn label="delete" color="primary" @click="prompt = true" />

    <q-dialog v-model="prompt" persistent>
        <q-card style="min-width: 350px">
            <q-card-section>
                <div class="text-h6">Delete event?</div>
            </q-card-section>

            <q-card-section>
                <div>{{ data.title }}</div>
            </q-card-section>

            <q-card-actions align="right" class="text-primary">
                <q-btn flat label="Cancel" v-close-popup />
                <q-btn flat label="Delete" v-close-popup @click="deleteEvent" />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>


<style scoped>
</style>