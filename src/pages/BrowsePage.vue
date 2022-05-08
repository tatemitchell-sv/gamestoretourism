<script setup>
import API from '../utils/API.js'
import StoreCard from 'src/components/StoreCard.vue';
import SearchResult from 'src/components/SearchResult.vue';
import { ref } from 'vue';

let data = ref({});

const loadData = async () => {
    const response = await API.getAllStores();
    data.value = response.data;
};
loadData();
</script>

<template>
    <q-page>
        <h2>Stores</h2>
        <div class="store-list-container">


            <div v-for="store in data" :key="store.name">
                <SearchResult :store="store" />
            </div>

        </div>






    </q-page>
</template>

<style scoped>
h2 {
    font-size: 40px;
    text-align: center;
}

.store-list-container {
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
}

@media screen and (min-width: 970px) {

    h2 {
        font-size: 60px;
    }
}
</style>