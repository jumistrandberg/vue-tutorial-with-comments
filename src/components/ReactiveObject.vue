<script setup>
import { provide, reactive, watch } from "vue";
const state = reactive({ username: "Alex" });

// Here we can't provide a specific property of object, 
// we need to provide the whole object.
// If we want to separate values, we can use a getter function.
watch(() => state.username, (oldValue, newValue) => {
    console.log(`Old value: ${oldValue}, new value: ${newValue}`);
})
</script>

<template>
  <h3>{{ state.username }}</h3>
  <button @click="state.username = 'Jordan'">Change username</button>
</template>
