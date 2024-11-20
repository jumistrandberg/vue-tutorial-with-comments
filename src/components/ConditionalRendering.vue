<!-- Refers to the ability to conditionally display or hide elements in the UI based on certain conditions or expressions  -->
<!-- v-if(condition) Removes the element from the DOM if the condition is false -->
<!-- v-else-if(condition) -->
<!-- v-else  -->
<!-- v-show  Controls visibility while keeping the element in the DOM -->

<script setup>
import { ref } from "vue";
let isVisible = ref(true);
let isUserLoggedIn = ref(true);
let showUserDetails = ref(isUserLoggedIn);
const userName = "Bajskorv";

const isTrue = true;
const isFalse = false;
</script>

<template>
  <div>
    <p v-if="isTrue">This will show if isTrue is true</p>
    <!-- if the first condition is true, the v-else-if will be ignored -->
    <p v-else-if="isTrue">This will show if isTrue is true</p>
    <p v-else>This will show if neither isTrue nor isFalse is true</p>
    <!-- Doesn't delete the element from the DOM, just hides it -->
    <p v-show="isVisible">
      This paragraph will be shown or hidden based on the value of isVisible
    </p>
    <button @click="isVisible = !isVisible">Toggle Visibility</button>
    <h4 v-if="isUserLoggedIn">Welcome user {{ userName }}</h4>
    <p v-else>Pliz login to see user details</p>
    <div v-show="showUserDetails">
        <h4>You're now able to bajsa på dig</h4>
    </div>
    <button @click="isUserLoggedIn = !isUserLoggedIn">Toggle User Details</button>
  </div>
</template>
