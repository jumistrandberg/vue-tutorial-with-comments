<script setup>
import ToUseInsideTemplateRef from "./ToUseInsideTemplateRef.vue";
import { onMounted, ref } from "vue";

const myRef = ref(null);
onMounted(() => {
    console.log(myRef.value);
})
</script>

<template>
  <ToUseInsideTemplateRef ref="myRef" />
</template>
