<script setup>
import { ref } from 'vue';
defineProps({ img: String });
let alert = ref(false);
let address = ref('');
</script>

<template>

    <div class="q-pa-md q-gutter-sm">
        <q-btn @click="alert = true"><img :src="img" /></q-btn>

        <q-dialog v-model="alert">
            <q-card>
                <q-card-section>
                    <div class="text-h6">Alert</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    <img :src="img" />
                </q-card-section>

                <q-card-actions align="right">
                    <q-btn flat label="OK" color="primary" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </div>

</template>

<style scoped>
</style>