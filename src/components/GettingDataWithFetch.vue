<script setup>
import { ref } from "vue";
const data = ref(null);

const fetchData = async () => {
  // Make a get request using fetch
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      // Check if the response is ok
      if (!response.ok) {
        throw new Error("Error: ${response.status}");
      }
      // Parse the response as JSON
      return response.json();
    })
    // Handle the response data
    .then((responseData) => {
      data.value = responseData;
    })
    // Handle any errors
    .catch((error) => {
      console.error(error);
    });
};
</script>

<template>
  <h1>Getting data with fetch</h1>
  <div>
    <h2>Using Fetch</h2>
    <button @click="fetchData">Fetch Data</button>
  </div>

  <div>
    <h2>Data from API fetch:</h2>
    <pre>{{  data }}</pre>
  </div>
</template>
