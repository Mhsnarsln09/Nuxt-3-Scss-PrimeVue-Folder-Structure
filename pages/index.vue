<template>
    <div class="home-page" style="min-height: 100vh;">
        <div>
            <Dropdown v-model="selectedCity" :options="cities" :filter="isFilter" optionLabel="name" placeholder="Select a City" style="width: 14rem;" />
        </div>
        <div>
            <MultiSelect v-model="selectedCities" :options="cities" :filter="isFilter" optionLabel="name" placeholder="Select Cities"
             style="width:14rem"/>
        </div>
        <div style="width: 100px; height: 100px;">
            <Button label="Submit" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const selectedCity = ref();
const selectedCities = ref([]);
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
const isFilter = ref(false);
</script>