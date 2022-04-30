<script setup>
import { ref } from 'vue';

// form data
let fieldEmail = ref('');
let fieldUserName = ref('');
let fieldPassword = ref('');
let fieldCPassword = ref('');

</script>

<template>
    <h2>Sign Up</h2>
    <q-input outlined v-model="fieldEmail" label="email" />
    <q-input outlined v-model="fieldUserName" label="username" />
    <q-input outlined v-model="fieldPassword" label="password" />
    <q-input outlined v-model="fieldCPassword" label=" confirm password" />
    <q-btn type="submit" value="Sign Up" label="Sign Up" />
</template>

<style scoped>
</style>