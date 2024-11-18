<script setup>
const myMessage = "Hej I am come from a js const hehe";
const myNumber = 3;
function add(x, y) {
    return x + y;
}
</script>

<template>
    <!-- Syntax for text interpolation, how to extract data from js to html dynamically -->
    <h2>{{ myMessage }}</h2>   
    <p> {{ myNumber }} </p>
    <!-- Can also write js code inside the {{  }}  -->
    <h3>{{ 2 + 2 }}</h3>
    <!-- Without them it's html  -->
    <h3>2 + 2</h3>
    <!-- Call the function and pass in 2 and 2 as arguments -->
    <h3>Add two numbers: {{ add(2, 2) }}</h3>
</template>