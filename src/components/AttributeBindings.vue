<script setup>
const myChannel = "https://www.youtube.com/channel/UC9-y-6csu5WGm29I7JiwpnA";
const coolImage = "https://unsplash.com/photos/a-man-in-a-white-outfit-standing-in-a-forest-KG9Hp5DVBZw";
const altText = "A man in a white outfit standing in a forest"; 

const imgWidth = 300;
const imgHeight = 300;
</script>

<template>
  <!-- Bind an attribute dynamically -->
  <!-- old way: v-bind:href="myChannel" -->
  <!-- New way> :attribute="value" -->
  <a :href="myChannel">A Youtube Channel</a>
  <img :src="coolImage" :alt="altText" :width="imgWidth" :height="imgHeight" />
</template>
