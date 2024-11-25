<script setup>
// Basic prop validation
// Commented out because we get error for duplicate defineProps 
// const props = defineProps({
//     // Only accepts string and number
//     fullName: String,
//     age: Number
// });

// Complex prop validation
const complexValidationProps = defineProps({
fullName: {
    type: String,
    required: true,
}, 
age: {
    type: Number,
    required: true,
    min: 0,
    max: 99
}
});
</script>

<template>
  <h1>Prop Validation</h1>
  <!-- <h1>{{ props.fullName }} {{ props.age }}</h1> -->
   <h1>{{ complexValidationProps.fullName }} {{ complexValidationProps.age }}</h1>
</template>
