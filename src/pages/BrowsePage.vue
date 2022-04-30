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
    <q-page class="">

        <div class="row">
            <div class="col filterBar">
                <form>
                    <p>this is gonna be the filter</p>
                </form>
            </div>
            <div class="col resultsList">
                <h2>Stores</h2>
                <div v-for="store in data" :key="store.name">
                    <SearchResult :store="store" />
                    <hr />
                </div>
            </div>
        </div>

    </q-page>
</template>

<style scoped>
.filterBar {
    background-color: gray;
    position: fixed;
    height: 100%;
    width: 16%;
}

.resultsList {
    margin-left: 17%;
    width: 80%;
}
</style>