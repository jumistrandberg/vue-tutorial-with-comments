<script setup>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

const message = ref("hello");
const updateMessage = () => {
  message.value = "hello korv";
};

// All lifecycle hooks take a callback function
onBeforeMount(() => {
  console.log("component is about to be mounted");
});

onMounted(() => {
  console.log("component has been mounted");
});

onBeforeUpdate(() => {
  console.log("component is about to be updated");
});

onUpdated(() => {
  console.log("component has been updated");
});

onBeforeUnmount(() => {
  console.log("component is about to be unmounted");
});

onUnmounted(() => {
  console.log("component has been unmounted");
});
</script>

<template>
  <p>{{ message }}</p>
  <button @click="updateMessage">Update message</button>
</template>
