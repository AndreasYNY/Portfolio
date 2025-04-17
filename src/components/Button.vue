<script setup lang="ts">
defineProps({
    href: {
        required: true,
        type: String
    },
})
</script>

<template>
<a :href="href" class="text-[16px] border whitespace-nowrap text-center py-1 hover:bg-white hover:text-black transition-colors duration-100"><slot></slot></a>
</template>