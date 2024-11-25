<script setup>
defineProps({
  name: {
    type: String,
    // Custom validation function
    validator: (propValue) => {
      return ["Britta", "Jane", "Alex"].includes(propValue);
    },
  },
  age: {
    type: Number,
    // Ternary operator to check if the age is between 1 and 100
    validator: (propValue) =>
      propValue >= 1 && propValue <= 100 ? true : false,
  },
  password: {
    type: String,
    validator: (propValue) => propValue.length >= 8 && true,
  },
});
</script>

<template>
  <h1>Custom Validator</h1>
  <h3>Name: {{ name }}</h3>
  <h3>Age: {{ age }}</h3>
  <h3>Password: {{ password }}</h3>
</template>
