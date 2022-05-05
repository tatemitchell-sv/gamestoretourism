<script setup>
import getCloudinaryUrl from '../utils/getCloudinaryUrl.js';
defineProps({ event: Object });

</script>

<template>
    <q-card class="my-card">
        <img :src="getCloudinaryUrl(event.img.name, event.img.cloudID, null, null)" />

        <q-card-section>
            <div class="text-h6">{{ event.title }}</div>
            <div class="eventContent" v-html="event.content"></div>
        </q-card-section>

    </q-card>
</template>

<style scoped>
.my-card {
    display: flex;
    flex-direction: column;
}

.listContainer .my-card {
    flex-direction: row;
}

.listContainer .my-card img {
    height: 200px;
    width: auto;
}

.eventContent {
    align-items: center;
}
</style>