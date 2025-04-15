<script setup lang="ts">
import { onMounted } from 'vue';
import { getCurrentInstance } from 'vue';
import NavLink from './components/NavLink.vue';

const instance = getCurrentInstance()

let hash: String = ""

// I don't feel like putting everything in the response object here
// I will just add them later when i need them
interface githubResponse {
  after: String
}

onMounted(async() => {
  console.log("Main component mounted")
  // hardcoded api for showcase sake
  // on real a real app, please have atleast the endpoint (in this case, api.github.com) on .env to be dynamic
  // I'm not making a URLSearchParam for just few params, to make it simpler
  // I'm too lazy to implement proper caching
  const res = await fetch("https://api.github.com/repos/andreasyny/Portfolio/activity?per_page=1&ref=master&activity_type=push")
  const data: githubResponse[] = await res.json()
  if (data && res.ok) {
    hash = data[0].after.slice(0,7)
    instance?.proxy?.$forceUpdate()
  }
})
</script>

<template>
  <div class="h-screen text-white flex justify-center font-mono">
    <div class="border h-max lg:w-[60rem]">
      <div class="flex border-b lg:w-[60rem]">
        <span class="font-love-light text-9xl grow before:content-['Andreas']"></span>
        <div class="flex flex-col">
          <div class="grow flex justify-end px-2">
            andreas.diff.my.id@{{ hash }}
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