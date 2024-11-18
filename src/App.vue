<script setup>
// Import inside script setup
import HelloWorld from "./components/HelloWorld.vue";
import MyComponent from "./components/MyComponent.vue";
import AttributeBindings from "./components/AttributeBindings.vue";
</script>

<template>
  <!-- The App component is the parent component of all other components. -->
  <HelloWorld />
  <MyComponent />
  <AttributeBindings />
</template>

<style scoped></style>
