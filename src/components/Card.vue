<script setup lang="ts">

defineProps({
    title: String,
})

</script>

<template>
    <div class="border text-sm">
        <span class="text-6xl font-love-light">{{ title }}</span>
        <div class="p-1">
            <slot></slot>
        </div>
    </div>
</template>