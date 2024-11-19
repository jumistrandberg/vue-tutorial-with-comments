<template>  
    <!-- Class styling is applied from style defined in GlobalStyle.vue  -->
    <h2 class="text-red">This is a child component</h2>
    <p class="text-blue">Bajsa</p>
</template>

<!-- Scoped makes it local to the component. -->
<style scoped>
    .text-blue {
        color: blue;
    }
</style>