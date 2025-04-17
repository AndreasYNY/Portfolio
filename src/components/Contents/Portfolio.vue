<script setup lang="ts">
import Card from '../Card.vue';
const linkStyle = "text-slate-400 underline hover:text-white"
</script>

<template>
    <div class="">

        <Card title="Intro">
            <span>Since I have yet to make a public project that I'm really proud of, I will instead show you some of
                what
                i can do trough this website. </span>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
                <Card title="Frontend Stuff">
                    This website! This is built using VueJS with Typescript. checkout the code on my <a
                        :class="linkStyle" href="https://github.com/AndreasYNY/Portfolio">github repository!</a>
                </Card>
                <Card class="md:col-span-2" title="Rest api">
                    <span>Do you see the andreas.diff.my.id@[hash] on the top right corner? The last 6 digit of it are
                        the current hash commit on github!</span>
                    <br>
                    <span>To achieve this I used Github's API to get the hashes. <a :class="linkStyle"
                            href="https://github.com/AndreasYNY/Portfolio/blob/master/src/App.vue#L22">Checkout the
                            code!</a></span>
                </Card>
                <Card class="md:col-span-2" title="Docker">
                    <span>I like to use containers! This web app leverages docker to simplify the building and deployment process!
                        Currently it's deployed on my <a :class="linkStyle"
                            href="https://github.com/coollabsio/coolify">Coolify Instance.</a></span>
                    <br>
                    <span>There is 2 parts to the image, the <a :class="linkStyle"
                            href="https://github.com/AndreasYNY/Portfolio/blob/master/Dockerfile">Dockerfile</a> and the
                        <a :class="linkStyle"
                            href="https://github.com/AndreasYNY/Portfolio/blob/master/docker-compose.yml">Compose</a>!
                        it might seemd basic, but we don't need rocket science to deploy a static website...</span>
                </Card>
                <Card title="More">
                    Since this website are still work in progress, not much i could showcase for now. There are few more
                    features planned, Hopefully I got around to finishing them...
                </Card>
            </div>
        </Card>
    </div>
</template>