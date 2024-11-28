<script setup>
//This ref is the component ref, used for reactivity.
import { onMounted, ref } from "vue";

const myRef = ref("");

onMounted(() => {
  console.log(myRef.value);
//   This line accesses the input field through the ref and puts the focus on it.
  myRef.value.focus();
  myRef.value.value = "something else"
});
</script>

<template>
  <div>
    // This ref is the template ref
    <input type="text" placeholder="Your name..." ref="myRef" />
  </div>
</template>
