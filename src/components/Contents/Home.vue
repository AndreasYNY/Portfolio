<script setup lang="ts">
import Card from '../Card.vue';
import Button from '../Button.vue';
import ExtButton from '../ExtButton.vue';
</script>

<template>
    <div class="md:grid flex flex-col md:grid-cols-3 gap-2">

        <Card class="col-span-3" title="About">
            <div class="flex flex-col md:flex-row justify-center gap-1">
                <div class="w-full md:border-r p-1">
                    <p>
                        I'm a Fullstack developer, a collage student, and unempoloyed (for now, i hope, I REALY HOPE
                        SO). Sometimes indecisive about stuff, likes to procrastinate like there is tomorrow, and sleeps
                        like a log.
                    </p>
                    <br>
                    <p>
                        I will try to install linux on every device i own and proceed to dockerize every app i
                        encounter. Might remove your proprietary apps and install the open source alternative without
                        you watching.
                    </p>
                    <br>
                    <p>
                        I won't read that TOS but I have read the GPL license multiple times over. If you are looking
                        for me, I will be in the garden.
                    </p>
                </div>

                <div class="w-full">
                    <div>
                        <span>Tags:</span>
                        <div class="flex flex-wrap gap-1">
                            <!-- put popcorn here -->
                            <span class="border p-1 whitespace-nowrap">Unemployed</span>
                            <span class="border p-1 whitespace-nowrap">IT Guy</span>
                            <span class="border p-1 whitespace-nowrap">Typescript</span>
                            <span class="border p-1 whitespace-nowrap">Docker</span>
                            <span class="border p-1 whitespace-nowrap">Git</span>
                            <span class="border p-1 whitespace-nowrap">#ReadyForWork</span>
                            <span class="border p-1 whitespace-nowrap">INFP</span>
                            <span class="border p-1 whitespace-nowrap">Python</span>
                            <span class="border p-1 whitespace-nowrap">Linux</span>
                            <!-- <span class="border p-1 whitespace-nowrap">S.KOM</span> -->
                            <span class="border p-1 whitespace-nowrap">Self Host</span>
                            <span class="border p-1 whitespace-nowrap">Slice of Life</span>
                            <span class="border p-1 whitespace-nowrap">Open Source</span>
                            <span class="border p-1 whitespace-nowrap">run.sh</span>
                            <span class="border p-1 whitespace-nowrap">Fullstack</span>
                        </div>
                    </div>
                    <br>
                    <div>
                        <span>Main Rig:</span>
                        <div class="border">
                            <pre>
    ___      andreas@archie
   (.. |     os     CachyOS
   (<> |     host   x86_64
  / __  \    kernel 6.14.2-2-cachyos
 ( /  \ /|   uptime 12h 2m
_/\ __)/_)   pkgs   1126
\/-____\/    memory 5697M / 15407M
          </pre>
                        </div>
                    </div>

                </div>
            </div>
        </Card>

        <Card title="Music">
            <span class="px-2">Latest Music</span>
            <a href="https://github.com/kittinan/spotify-github-profile">
                <img class="grayscale"
                    src="https://spotify-github-profile.kittinanx.com/api/view?uid=31hbcf4pyupuupx4s3pnf5rpyeqq&cover_image=true&theme=natemoo-re&show_offline=false&background_color=121212&interchange=false&bar_color=000000&bar_color_cover=false"
                    alt="music">
            </a>
        </Card>

        <Card class="col-span-2" title="Site Info">
            <ul class="flex flex-col gap-1">
                <li>This is my little palace and a portfolio site all at once! (Please head over to Portfolio section for
                    my portfolio)</li>
                <li>AI was used to generate the ribbon.</li>
                <li>This site is inspired by the nekoweb & neocities websites. (check them out!)</li>
                <li>The contents of Project and Blog are managed from github discussion.</li>
            </ul>
        </Card>

        <Card class="col-span-3" title="Links">
            <div class="grid grid-cols-3 my-1 justify-center">
                <div class="col-span-2 pr-1">
                    Places where i might be:
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-1">
                        <Button href="https://github.com/andreasyny">Github</Button>
                        <Button href="https://linkedin.com/in/andreasyozef">Linkedin</Button>
                        <Button href="https://stackoverflow.com/users/10832570/andreasyny">Stackoverflow</Button>
                        <Button href="https://mas.to/@xilla">Mastodon</Button>
                    </div>
                </div>
                <div>
                    Services I host:
                    <div class="grid md:grid-cols-2 gap-1">
                        <Button href="https://sear.diff.my.id">SearXNG</Button>
                        <Button href="https://redlib.diff.my.id/">Redlib</Button>
                    </div>
                </div>
            </div>
            <br>
            <div class="grid grid-cols-3">
                <div class="">
                    Add my button plz
                    <img src="https://raw.githubusercontent.com/AndreasYNY/Portfolio/refs/heads/master/src/assets/button.png" alt="Andreas's Page Button">
                    hotlinking is allowed
                </div>
                <div class="col-span-2">
                    Cool websites:
                    <div class="flex flex-wrap gap-1">
                        <ExtButton href="https://july.lol" src="https://july.lol/img/julybutton.gif"/>
                        <ExtButton href="https://bechnokid.neocities.org/home/" src="https://raw.githubusercontent.com/bechnokid/neocities/refs/heads/master/public/assets/images/button.png" alt="Page button for Bechno Kid's Hideout"/>
                        <ExtButton href="https://xylathemoth.neocities.org/" src="https://xylathemoth.neocities.org/images/button.png" alt="Page button for xylathemoth"/>
                        <ExtButton href="https://rayncoat.nekoweb.org/" src="https://rayncoat.nekoweb.org/Art/RaynButton.gif" alt="Page button for RaynCoat"/>
                        <ExtButton href="https://amfmradio.nekoweb.org/" src="https://amfmradio.nekoweb.org/stamp_B.png" alt="Page button for amfmradio"/>
                        <ExtButton href="https://rice.place/" src="https://rice.nekoweb.org/button/ricedotplace.png"/>
                    </div>
                </div>
            </div>
        </Card>

    </div>
</template>