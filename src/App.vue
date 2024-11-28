<script setup>
// For dynamic props
import { ref } from "vue";
const firstName = ref("Bajs");
const lastName = ref("Korv");

// For component event
let count = ref(0);

// Handler function for the form
const formHandler = (username, email, password) => {
  console.log("username: ", username);
  console.log("email: ", email);
  console.log("password: ", password);
};

// For unmounting a component
const showHide = ref(true);

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
import ComponentEvent from "./components/ComponentEvent.vue";
import FromComponentEvent from "./components/FromComponentEvent.vue";
import SlotComponent from "./components/SlotComponent.vue";
import FallbackContent from "./components/FallbackContent.vue";
import NamedSlot from "./components/NamedSlot.vue";
import DefaultSlot from "./components/DefaultSlot.vue";
import LifecycleComponent from "./components/LifecycleComponent.vue";
import BasicWatcher from "./components/BasicWatcher.vue";
import ReactiveObject from "./components/ReactiveObject.vue";
import MultipleSources from "./components/MultipleSources.vue";
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
  <!-- For component event -->
  <!-- Run the incrementCounter when the child component emits the event. -->
  <component-event @incrementCounter="count++" />
  <!-- The parent component is app.vue-->
  <h1>Count: {{ count }}</h1>
  <from-component-event @submitForm="formHandler" />
  <!-- How to call a slot component- needs opening and closing tag -->
  <SlotComponent>
    <!-- Here we can put content that will be displayed in the slot. -->
    <h1>Slot content</h1>
  </SlotComponent>
  <FallbackContent>
    <p>Fallback will not work because I am providing content in the slot.</p>
  </FallbackContent>
  <NamedSlot>
    <!-- Either v-slot:name or #name can be used to call a slot component. -->
    <template v-slot:one>
      <h3>This content will go to slot 1</h3>
    </template>
    <template #two>
      <h3>This content will go to slot 2</h3>
    </template>
  </NamedSlot>
  <DefaultSlot #default>
    <h3>This content will go to the default slot</h3>
  </DefaultSlot>
  <LifecycleComponent v-if="showHide" />
  <button @click="showHide = !showHide">Show / Hide</button>
  <BasicWatcher />
  <ReactiveObject />
  <MultipleSources />
</template>

<style scoped></style>
