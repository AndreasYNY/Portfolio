<script setup lang="ts">
defineProps({
    href: {
        required: true,
        type: String
    },
    src: {
        required: true,
        type: String
    },
    alt: {
        required: false,
        type: String
    },
})
</script>

<template>
<a :href="href" class="grayscale hover:grayscale-0 duration-200"><img :src="src" :alt="alt"></a>
</template>