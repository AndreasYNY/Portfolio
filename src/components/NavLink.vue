<script setup  lang="ts">
defineProps({
    path: {
        type: String,
        required: true
    },
    display: {
        type: String,
        required: true
    }
})
</script>

<template>
<RouterLink :to="path"
    class="border-x border-t p-2 hover:bg-white hover:text-black transition-colors duration-100" :class="[$route.path === path ? 'bg-white text-black': '']">{{ display }}
</RouterLink>
</template>