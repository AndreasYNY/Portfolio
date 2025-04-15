<script setup lang="ts">
// these are words i came up with and lyrics from:
// Michael Cera Palin songs
// Abus-ken songs
const words: string[] = [
    "Whats bro searching for?",
    "What your searching for is not here.",
    "Not now, Mom",
    "Maybe if we have more time together...",
    "I'm sorry.",
    "Regret",
    "ごめん. . .",
    "If only...",
    "Needs fixing",
    "Try turning it on and off",
    "Leave",
    "Is it justified?",
    "Will they missed you if ur gone?",
    "Really?",
    "That's nice",
    "You know, Other people have told me that before...",
    "Meaningless",
    "I still can't fall asleep",
    "Living under the rock",
    "if your not living, your dying.",
    "watch me waste away",
    "DON'T KILL",
    "I can kill that monster",
    "Look how ugly you are",
    '"I know this!"',
    "I fell asleep in the same place",
    "That's all i wished for.",
    "It's impossible for me, why can't you understand?",
    "Please stay...",
    "So stupid",
    "Kill me",
    "I'll soak up the sorrow",
    "You will love this",
    "I want you to burn the sight of me into your eyes",
    "I feel sick",
    "I know",
    "A tragedy",
    "I'll be gone",
    "I'll run after you",
    "nothing in right hand",
    "See you again",
    "I think I get it now",
    "YoU AnD mE aRE moNsTers",
    "I love you"
]

</script>

<template>

    <div class="flex flex-col justify-center items-center h-[20rem]">
        {{ words[Math.floor(Math.random() * words.length)] }}
        <RouterLink to="/" class="underline text-neutral-400 hover:text-white">
            < go back home?</RouterLink>
    </div>

</template>