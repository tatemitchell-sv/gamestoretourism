<script setup>
import { defineEmits, ref } from 'vue';
const props = defineProps({ logInOut: Function })
const emit = defineEmits(['loggingInOut']);

// form data
let formData = ref({
    fieldUserName: '',
    fieldPassword: '',
});


const onSubmit = () => {
    emit('loggingInOut', formData.value)
};

</script>

<template>
    <h2>Log In</h2>
    <form @submit.prevent="onSubmit">
        <q-input outlined v-model="formData.fieldUserName" label="username" />
        <q-input outlined v-model="formData.fieldPassword" label="password" />
        <q-btn type="submit" value="Log In" label="Log In" />
    </form>
</template>

<style scoped>
</style>