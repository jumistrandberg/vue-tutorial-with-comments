<script setup>
import { reactive } from "vue";

// Primitive types are not allowed in reactive. Use objects or reference data types.
let initialState = reactive({ count: 0 });
let anotherInitialState = reactive({
  value: { count: 0 },
  user: ["John", "Jane"],
});

const changeUser = () => {
  anotherInitialState.user[0] = "Chris";
  anotherInitialState.user[1] = "Bloo";
}
</script>

<template>
  <h1>Count: {{ initialState.count }}</h1>
  <button @click="initialState.count++">+</button>
  <button @click="initialState.count--">-</button>

  <h1>Another count: {{ anotherInitialState.value.count }}</h1>
  <h3>Users: {{ anotherInitialState.user }}</h3>
  <button @click="anotherInitialState.value.count +=10">Add 10</button>
  <button @click="changeUser">Change user</button>
  <button @click="anotherInitialState.user.push('Bajs')">Add one more user</button>

</template>
