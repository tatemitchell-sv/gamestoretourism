<script setup>
import { ref } from 'vue';
import EventCard from './EventCard.vue';
import MyCalendar from './MyCalendar.vue';
const props = defineProps({ store: Object })

// tab is for events qtabs
let tab = ref('list');
</script>

<template>

    <div class="q-pa-md">
        <div class="q-gutter-y-md">
            <q-card class="panelContainer">
                <q-tabs v-model="tab" dense class="text-grey" active-color="primary" indicator-color="primary"
                    align="justify" narrow-indicator>
                    <q-tab name="list" label="List" icon="fa-solid fa-list" />
                    <q-tab name="grid" label="Grid" icon="fa-solid fa-grip" />
                    <q-tab name="calendar" label="Calendar" icon="fa-solid fa-calendar-day" />
                </q-tabs>

                <q-separator />

                <q-tab-panels v-model="tab" animated>
                    <q-tab-panel name="list">
                        <div class="text-h6">List</div>
                        <div class="listContainer">
                            <EventCard v-for="item in props.store.events" :key="item.id" :event="item">
                            </EventCard>
                        </div>
                    </q-tab-panel>

                    <q-tab-panel name="grid">
                        <div class="text-h6">Grid</div>
                        <div class="gridContainer">
                            <EventCard v-for="item in props.store.events" :key="item.id" :event="item">
                            </EventCard>
                        </div>
                    </q-tab-panel>

                    <q-tab-panel name="calendar">
                        <div class="text-h6">Calendar</div>
                        <div class="calendarContainer">
                            <MyCalendar :events="props.store.events"></MyCalendar>
                        </div>
                    </q-tab-panel>
                </q-tab-panels>

            </q-card>
        </div>
    </div>

</template>

<style scoped>
.panelContainer {
    width: 100%;
    height: auto;
}

.listContainer {
    display: flex;
    flex-direction: column;
}

.gridContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.calendarContainer {
    width: 80%;
    margin: auto;
    height: 700px;
    background-color: rgba(162, 127, 127, 0.3);
}
</style>