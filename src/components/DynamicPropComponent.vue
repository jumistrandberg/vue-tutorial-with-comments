<!-- Props values are immutable, so you cannot change them from the parent component. However, you can pass a prop to a child component and then change it from the child component. -->

<script setup>
const props = defineProps(["firstName", "lastName"]);
</script>

<template>
  // Dynamically accessed from parent component
  <h1>{{ props.firstName }} {{ props.lastName }}</h1>
</template>
