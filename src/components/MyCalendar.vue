<script setup>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import getCloudinaryUrl from '../utils/getCloudinaryUrl.js';
const props = defineProps({ events: Object });

</script>

<template>
    <vue-cal :time-from="9 * 60" :time-to="23 * 60" active-view="month" today-button :events="props.events"
        :disable-views="['years', 'year', 'week']" />
</template>

<style scoped>
</style>