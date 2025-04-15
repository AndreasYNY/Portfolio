<script setup lang="ts">
import NavLink from './components/NavLink.vue';
</script>

<template>
  <div class="h-screen text-white flex justify-center font-mono">
    <div class="border h-max lg:w-[60rem]">
      <div class="flex border-b lg:w-[60rem]">
        <span class="font-love-light text-9xl grow before:content-['Andreas']"></span>
        <div class="flex flex-col">
          <div class="grow flex justify-end px-2">
            andreas.diff.my.id@latest
          </div>
          <div class="flex gap-1 px-5">
            <NavLink display="Home" path="/" />
            <NavLink display="Portfolio" path="/portfolio" />
            <NavLink display="Blog" path="/blog" />
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