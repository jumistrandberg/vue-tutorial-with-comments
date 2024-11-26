<!-- A way for a child component to communicate with a parent component. -->
<!-- Child component can emit an events (custom events) that can be listened to and hanthe parent component. -->
<script setup></script>

<template>
    <!-- $emit sends a signal to the parent component to use the function defined in the parent component. -->
    <button @click="$emit('incrementCounter')">+</button>
</template>