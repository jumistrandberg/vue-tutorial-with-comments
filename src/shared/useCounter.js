// useName is convention for naming composables 
// "shared" is a common name for folders for composable 

import { ref } from "vue";

export function useCounter(intialValue = 0) {
    const count = ref(intialValue);
    const increment = () => count.value++;
    const decrement = () => count.value--;

    return {count, increment, decrement}
}

