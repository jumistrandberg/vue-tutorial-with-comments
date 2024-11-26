<script setup></script>

<template>
    <slot> 
        <!-- Will show up if we don't have any content in the slot.  -->
        <h1>This is a fallback/default content</h1>
    </slot>
</template>