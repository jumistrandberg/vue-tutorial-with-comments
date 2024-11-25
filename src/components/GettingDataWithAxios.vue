<script setup>
import { ref } from "vue";
import axios from "axios";

const data = ref(null);

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/2"
    );

    // Handle successful response
    data.value = response.data;
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <h1>Getting data with Axios</h1>
  <button @click="fetchData">Fetch Data</button>

  <div>
    <h2>Data from API fetch:</h2>
    <pre>{{ data }}</pre>
  </div>
</template>
