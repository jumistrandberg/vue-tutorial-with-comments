<script setup>
// Don't need the logic, we take it from Counter Composable
// import { ref } from "vue";
// let counter = ref(0);

// const Increment = () => counter.value++;
// const Decrement = () => counter.value--;

import { useCounter } from "../../shared/useCounter.js";
// Create an instance of the composable
const counter = useCounter();
</script>

<template>
  <h4>Counter</h4>
  <!-- Extract count method from the instance of the Count Composable -->
  <p>Count: {{ counter.count }}</p>
  <!-- Reference the methods from the instance of the Count Composable -->
  <button @click="counter.increment">Increment</button>
  <button @click="counter.decrement">Decrement</button>
</template>
