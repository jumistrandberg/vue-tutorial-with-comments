<script setup>
import { ref } from "vue";

// Getting a prop 
const props = defineProps(["name"]);
console.log(props);
</script>

<template>
    <!-- Using a prop -->
    <h1>{{ props.name }}</h1>
</template>