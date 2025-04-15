<script setup lang="ts">
</script>

<template>
  <div class="h-screen text-white flex justify-center font-mono">
    <div class="border h-max lg:w-[60rem]">
      <div class="flex border-b lg:w-[60rem]">
        <span class="font-love-light text-9xl grow before:content-['Andreas']"></span>
        <div class="flex flex-col">
          <div class="grow flex justify-end px-2">
            <!-- put latest git SHA here -->andreas.diff.my.id@latest
          </div>
          <div class="flex gap-1 px-5">
            <RouterLink to="/"
              class="border-x border-t p-2 hover:bg-white hover:text-black transition-colors duration-100">Home
            </RouterLink>
            <RouterLink to="/portfolio"
              class="border-x border-t p-2 hover:bg-white hover:text-black transition-colors duration-100">Portfolio
            </RouterLink>
            <RouterLink to="/blog"
              class="border-x border-t p-2 hover:bg-white hover:text-black transition-colors duration-100">Blog
            </RouterLink>
          </div>
        </div>
      </div>
      <div class="p-3">
        <!-- content here -->
        <router-view v-slot="{ Component }">
          <component :is="Component"></component>
        </router-view>
      </div>
    </div>
  </div>
</template>