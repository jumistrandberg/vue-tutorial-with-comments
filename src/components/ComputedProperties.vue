<!-- Computed properties are special kinds of variables that automatically updates itself whenever the data is depends on changes  -->

<script setup>
import { ref, computed } from "vue";

const number = ref(3);
const squared = computed(() => {
  return number.value ** 2;
});
</script>

<template>
  <h4>
    Computed values are like little workers that wait for data to change and
    then updates itself
  </h4>
  <h3>Original number: {{ number }}</h3>
  <h3>Squared number: {{ squared }}</h3>
</template>
