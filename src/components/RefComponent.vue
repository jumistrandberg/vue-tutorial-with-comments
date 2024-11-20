<!-- ref is used to create a reactive reference to a value -->

<script setup>
import { ref } from "vue";
let count = ref(0);
let username = ref("");
let users = ref(['Michael', 'HuXun', 'Sophia']);
let userInfo = ref({ name: 'Alex', age: 3000, location: ['USA', 'My head'], isMarried: false });
</script>

<template>
  <h1>Ref count: {{ count }}</h1>
  <button @click="count++">+</button>
  <button @click="count--">-</button>

  <h1>username: {{ username }}</h1>
  <button @click="username = 'Bajsan'">Set username</button>

  <h4>Users: {{ users }}</h4>
  <button @click="users.push('Steve')">Add Steve</button>

  <h3>User info: {{ userInfo }}</h3>
  <button @click="userInfo.isMarried = true">Marry</button>
</template>
