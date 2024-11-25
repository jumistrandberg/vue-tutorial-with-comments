<!-- CSS modules generate unique class names for each component. This is useful for scoping styles to a component. -->
<template>
  <!-- Kebab case -->
   <!-- Have to use single quotes for the class name  -->
  <h1 v-bind:class="$style['module-style']">Using module CSS with $ syntax</h1>

  <!-- Camel case  -->
  <h1 :class="$style.anotherModuleStyle">Using module CSS with camelCase syntax</h1>
</template>

<!-- Module Style  -->
<style module>
/* Kebab case */
.module-style {
  background: palegreen;
  color: white;
}

/* Camel case */
.anotherModuleStyle {
  background: palevioletred;
  color: white;
}
</style>
