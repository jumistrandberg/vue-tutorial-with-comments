<script setup>
defineProps({
  friends: Array,
  userInfo: Object,
});
</script>

<template>
  <h1>Complex Props</h1>
  <h3>Friends: {{ friends }}</h3>
  <h3>Info: {{ userInfo }}</h3>

  <hr />
  <!-- Iterating over an array of friends: -->
  <ul v-for="(friend, index) in friends" :key="index">
    <li>{{ friend }}</li>
  </ul>

  <hr />
  
  <ul v-for="(info, index) in userInfo" :key="index">
    <li>{{ info }}</li>
  </ul>
</template>
