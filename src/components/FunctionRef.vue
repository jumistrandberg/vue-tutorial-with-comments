<script setup>
const myRefFunction = (element) => {
    // Logs the text content where we are using our template ref 
    console.log(element.textContent);
    element.textContent = "Text content changed";
    element.style.color = "hotpink";
}
</script>

<template>
    <h2 :ref="myRefFunction">This is the initial value</h2>
</template>