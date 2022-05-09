<script setup>
import chipMap from '../utils/chipMap.js'
import getCloudinaryUrl from '../utils/getCloudinaryUrl.js'
import { RouterLink } from "vue-router";
defineProps({ store: Object })


</script>

<template>

    <q-card class="result-container">
        <div class="thumbnail-block">
            <RouterLink :to="`/store/${store.id}`">
                <img :src="getCloudinaryUrl(store.thumbnail.name, store.thumbnail.cloudID, 200, 300)">
            </RouterLink>
        </div>

        <div class="text-block">
            <RouterLink :to="`/store/${store.id}`">
                <h3>{{ store.name }}</h3>
            </RouterLink>
            <p>
                {{ store.locations.city }}, {{ store.locations.state }}
            </p>

        </div>

    </q-card>

</template>

<style scoped>
.result-container {
    display: flex;
    flex-direction: column;
    width: 320px;
    align-items: center;
    padding: 10px;
    margin: auto;
    margin-bottom: 20px;
}

.text-block {
    padding: 20px;
}

h3 {
    font-size: 30px;
    text-align: center;
}

a {
    text-decoration: none;
    color: black;
}

p {
    text-align: center;
}

@media screen and (min-width: 970px) {
    .result-container {
        flex-direction: row;
        width: 700px;
        margin-left: 20px;
    }

    h3 {
        text-align: left;
        font-size: 35px;
    }

    p {
        text-align: left;
    }
}
</style>