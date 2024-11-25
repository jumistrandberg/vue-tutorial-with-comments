<script setup>
// For dynamic props
import { ref } from "vue";
const firstName = ref("Bajs");
const lastName = ref("Korv");

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
import GettingDataWithFetch from "./components/GettingDataWithFetch.vue";
import GettingDataWithAxios from "./components/GettingDataWithAxios.vue";
import StaticPropsComponent from "./components/StaticPropsComponent.vue";
import DynamicPropComponent from "./components/DynamicPropComponent.vue";
import PropValidation from "./components/PropValidation.vue";
import ComplexProps from "./components/ComplexProps.vue";
import CustomValidator from "./components/CustomValidator.vue";
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
  <GettingDataWithFetch />
  <GettingDataWithAxios />
  <!-- Writing a prop  -->
  <static-props-component name="Jordan" />
  <!-- Use v-bind to pass a dynamic prop from the parent component -->
  <dynamic-prop-component :firstName="firstName" :lastName="lastName" />
  <prop-validation fullName="Jordan Korv" :age="25" />
  <complex-props
    :friends="['Alex', 'Bajs', 'Jane']"
    :userInfo="{ name: 'Jordan', age: 25, location: ['Earth', 'Mars'] }"
  />
  <custom-validator name="Britta" :age="8" password="123456" />
</template>

<style scoped></style>
