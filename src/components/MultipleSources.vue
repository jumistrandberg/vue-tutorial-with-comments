<script setup>
import { ref, watch } from "vue";
const username = ref("Alex");
const counter = ref(0);

// If we want to pass multiple sources to a watcher, we can use an array.
watch([username, counter], (newValue, oldValue) => {
  console.log(`Old value: ${oldValue}, new value: ${newValue}`);
});
</script>

<template>
  <h3>{{ username }}</h3>
  <button @click="username = 'Jordan'">Change username</button>
  <h3>{{ counter }}</h3>
  <button @click="counter++">Increment counter</button>
</template>
