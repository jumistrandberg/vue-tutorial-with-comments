<script setup>
// Import inside script setup
import HelloWorld from "./components/HelloWorld.vue";
import MyComponent from "./components/MyComponent.vue";
import AttributeBindings from "./components/AttributeBindings.vue";
import GlobalStyle from "./components/GlobalStyle.vue";
import LocalStyle from "./components/LocalStyle.vue";
import CombinedStyle from "./components/CombinedStyle.vue";
import ModuleStyle from "./components/ModuleStyle.vue";
import ReactiveComponent from "./components/ReactiveComponent.vue";
import RefComponent from "./components/RefComponent.vue";
import ComputedProperties from "./components/ComputedProperties.vue";
import ConditionalRendering from "./components/ConditionalRendering.vue";
import IterationComponent from "./components/IterationComponent.vue";
import CounterComponent from "./components/CounterComponent.vue";

</script>

<template>
  <!-- The App component is the parent component of all other components. -->
  <HelloWorld />
  <MyComponent />
  <AttributeBindings />
  <GlobalStyle />
  <LocalStyle />
  <CombinedStyle />
  <ModuleStyle />
  <ReactiveComponent /> 
  <RefComponent />
  <ComputedProperties />
  <ConditionalRendering />
  <IterationComponent />
  <CounterComponent />  
  
</template>

<style scoped></style>
