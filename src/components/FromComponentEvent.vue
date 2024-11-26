<script setup>
import { ref } from "vue";

const userName = ref("");
const email = ref("");
const password = ref("");
</script>

<template>
  <!-- the submitForm is the function followed by the params -->
  <form @submit.prevent="$emit('submitForm', userName, email, password)">
    <input type="text" placeholder="Username" v-model="userName" />
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <button type="submit">Submit</button>
  </form>
</template>
