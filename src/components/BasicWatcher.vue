<!-- Watchers allow us to reactively watch for changes in a specific property or expression
and perform custom logic when that change occurs. -->

<!-- Watcher syntax: watch(source, callback, options) -->
<!-- Source: Ref(), Reactive object, Array, or getter function -->
<!-- Callback function is called when the source changes. -->
<!-- Options are optional and can be used to specify the initial value of the watcher. -->


<script setup>
import {ref, watch} from "vue";
const message = ref("Hello, Vue!");
const inputText = ref("apple");

// Watch for changes in the inputText variable and update the message variable.
watch(inputText, (newValue, oldValue) => {
    // Perform some logic here when inputText changes.
    message.value= `You typed: ${newValue}`;
    console.log(newValue, oldValue);
} )
</script>

<template>
    <div>
        <h2>{{ message }}</h2>
        <input v-model="inputText" placeholder="type something...">
    </div>
</template>