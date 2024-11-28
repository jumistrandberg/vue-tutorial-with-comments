<script setup>
import { ref } from "vue";

// When using the script setup it's private by default
// so a parent referencing a child won't be able to access anything
// First we need to expose all the properties and methods
// then we'll be able to use them inside the parent component
// use (defineExpose) to expose the properties and methods
const count = ref(10);
const increment = () => count.value++;
const decrement = () => count.value--;

// now we can use the exposed properties and methods inside the parent component
defineExpose({count, increment, decrement});
</script>

<template>
  <h3>{{ count }}</h3>
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
</template>
