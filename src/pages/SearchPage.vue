<script setup>
import API from '../utils/API.js'
import StoreCard from 'src/components/StoreCard.vue';
import SearchResult from 'src/components/SearchResult.vue';
import { useRoute } from 'vue-router';
import { ref } from 'vue';
const route = useRoute();

let ifResults = ref(false);

// pre loaded data
let data = ref([{
    name: "",
    id: "",
    locations: {
        latitude: "",
        longitude: "",
        streetAddress1: "",
        streetAddress2: "",
        city: "",
        state: "",
        zip: "",
    },
    phonenumber: "",
    hours: [{ day: "", open: "", close: "" }],
    website: "",
    googleMapsLink: "",
    googleMapsEmbed: "",
    thumbnail: {
        name: "",
        cloudID: "",
    },
    productsServices: [
        {
            id: "",
            name: "",
            info: "",
            img: { name: "", cloudID: "", },
            link: "",
            iconWhite: "",
            iconBlack: "",
        },
    ],
    events: [
        {
            id: "",
            start: "",
            end: "",
            title: "",
            content: "",
            class: "",
            img: {
                name: "",
                cloudID: "",
            },
        },
    ],
    gallery: [
        {
            name: "",
            cloudID: "",
        },
    ],
}]);

const loadData = async () => {
    const response = await API.searchStore(route.query.searchString);
    data.value = response.data;
    ifResults.value = true;

};
loadData();

// adv search form slider styles
const thumbStyle = {
    right: '4px',
    borderRadius: '5px',
    backgroundColor: '#027be3',
    width: '5px',
    opacity: 0.75
};

const barStyle = {
    right: '2px',
    borderRadius: '9px',
    backgroundColor: '#027be3',
    width: '9px',
    opacity: 0.2
};

// adv search form data variables
let searchCriteria = ref({
    storeName: '',
    city: '',
    state: '',
    zip: '',
    mtg: false,
    dnd: false,
    ygo: false,
    pok: false,
    soc: false,
})

let customProduct = ref('');

const onSubmitAdv = async (e) => {

    console.log('adv search submitted')
    const response = await API.advSearch(searchCriteria.value);
    data.value = response.data;


};
</script>

<template>
    <q-page class="search-page">

        <section class="advanced-search">
            <form @submit.prevent="onSubmitAdv">
                <h4>Advanced Search</h4>
                <q-input class="adv-input" filled v-model="searchCriteria.storeName" label="Store Name" />
                <q-input class="adv-input" filled v-model="searchCriteria.city" label="City" />
                <q-input class="adv-input" filled v-model="searchCriteria.state" label="State" />
                <q-input class="adv-input" filled v-model="searchCriteria.zip" label="Zip" />

                <div>
                    <p>Popular products</p>
                    <q-checkbox v-model="searchCriteria.mtg" label="Magic: The Gathering" />
                    <q-checkbox v-model="searchCriteria.dnd" label="Dungeons & Dragons" />
                    <q-checkbox v-model="searchCriteria.ygo" label="Yu-Gi-Oh!" />
                    <q-checkbox v-model="searchCriteria.pok" label="Pokemon" />
                    <q-checkbox v-model="searchCriteria.soc" label="Settlers of Catan" />
                </div>
                <p>Add custom search products</p>
                <q-input filled v-model="customProduct" label="Products" />
                <q-btn class="submit-button" type="submit" color="accent" text-color="white" glossy label="Search" />
            </form>
        </section>
        <section class="search-results">
            <h2>Search</h2>
            <template v-if="ifResults">
                <h3 v-if="!data.length">no results found for '{{ route.query.searchString }}'</h3>
                <h3 v-else>{{ data.length }} results found for '{{ route.query.searchString }}'</h3>
                <div v-for="store in data" :key="store.name">
                    <SearchResult :store="store" />
                </div>
            </template>
        </section>

    </q-page>
</template>

<style scoped>
h2 {
    font-size: 40px;
    text-align: center;
}

h3 {
    font-size: 30px;
    text-align: center;
}

h4 {
    font-size: 30px;
    text-align: center;
}

.search-page {
    display: flex;
    flex-direction: column-reverse;
}

.advanced-search {
    width: 100%;
    padding: 20px;

}

.search-results {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

}

.submit-button {
    margin: 35px 38%;
}


@media screen and (min-width: 970px) {

    h2 {
        font-size: 60px;
    }

    .search-page {
        flex-direction: row;
    }

    .advanced-search {
        width: 33%;
        background-color: rgb(232, 232, 232);
    }

    .search-results {
        width: 66%;
    }

    .adv-input {
        margin-bottom: 10px;
    }

}
</style>