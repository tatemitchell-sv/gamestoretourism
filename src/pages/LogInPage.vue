<script setup>
import { defineEmits, ref } from 'vue';
const emits = defineEmits(['loggingIn']);

// form data
let formData = ref({
    fieldUserName: '',
    fieldPassword: '',
});


const onSubmit = () => {
    emits('loggingIn', formData.value)
};

</script>

<template>
    <h2 class="page-header">Log In</h2>

    <div class="form-container">

        <form class="log-in-form" @submit.prevent="onSubmit">
            <q-input class="form-input" outlined v-model="formData.fieldUserName" label="username" />
            <q-input class="form-input" outlined v-model="formData.fieldPassword" label="password" />
            <q-btn class="form-button" glossy color="accent" type="submit" value="Log In" label="Log In" />
        </form>

    </div>

</template>

<style scoped>
.page-header {
    text-align: center;
}

.form-container {
    width: 300px;
    margin: auto;
}

.log-in-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.form-input {
    width: 100%;
    margin: 5px 0px;
}

.form-button {
    margin-top: 55px;
}

@media screen and (min-width: 970px) {
    .form-container {
        width: 600px;
    }
}
</style>