<template>
    <h2 class="global-1">Another Global Style</h2>
    <h2 class="local-1">Another local style</h2>
</template>

<!-- Global style here  -->
<style> 
    .global-1 {
        color: fuchsia;
    }

</style>

<!-- Local style here in same component -->
<style scoped>
    .local-1 {
        color: forestgreen;
    }
    </style>