<template>
  <div class="h-full">
    <section class="container mx-auto h-full">
      <div
        class="flex flex-col justify-between items-center xl:flex-row pt-24 xl:pb-10"
      >
        <div
          class="w-full flex flex-col xl:items-start items-center xl:gap-2 order-2 xl:order-1"
        >
          <span class="font-extralight text-sm"
            >Développeur web & mobile | Développeur fullstack
          </span>
          <span class="text-center xl:text-left h1">
            Hello, je suis <br />
            <span
              class="bg-gradient-to-r from-pink-600 via-fuchsia-600 to-violet-600 bg-clip-text text-4xl xl:text-8xl text-transparent"
              >Bill Hope
            </span>
          </span>
          <span
            class="text-center xl:text-left max-w-[600px] mb-9 font-extralight text-white/60"
          >
            J’accompagne les entreprises et porteurs de projets dans la création
            de solutions digitales modernes, performantes et sur mesure. Du
            développement web au mobile, je transforme les idées en expériences
            fluides, utiles et durables.
          </span>
          <Socials />
          <div class="mt-4">
            <Button
              as="a"
              href="/cv_hope.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="min-w-60 h-12 cursor-pointer bg-gradient-to-r from-violet-600 via-pink-600 to-fuchsia-600 hover:border-none border border-fuchsia-700 rounded-full"
            >
              <DownloadCloud />
              Consulter mon CV
            </Button>
          </div>
        </div>
        <div class="h-full relative order-1">
          <motion.div :initial="initial" :animate="animate">
            <div
              class="mask-b-from-20% mask-b-to-90% w-[400px] h-[400px] xl:w-[600px] xl:h-[600px] mix-blend-lighten relative overflow-hidden"
            >
              <h2
                class="absolute top-25 left-0 xl:top-30 z-0 text-[80px] xl:text-[120px] font-bold tracking-tight text-white/50 fill-transparent stroke-2 stroke-white/50"
              >
                Breality.
              </h2>
              <motion.div
                :initial="{ opacity: 0 }"
                :animate="{ opacity: 1 }"
                :transition="{ delay: 3, duration: 0.4, ease: 'easeInOut' }"
              >
                <!-- Triangle SVG violet vif -->
                <svg
                  class="absolute top-8 left-8 w-20 h-20 text-pink-600 z-10 rotate-12"
                  viewBox="0 0 100 100"
                  fill="currentColor"
                >
                  <polygon points="50,0 100,100 0,100" />
                </svg>

                <!-- Rectangle violet semi-transparent -->
                <div
                  class="absolute top-20 right-10 w-32 h-32 border border-purple-500/40 z-20 rounded-md blur-sm"
                ></div>

                <div
                  class="absolute bottom-20 left-10 w-32 h-32 bg-blue-500/50 z-0 rounded-md blur-sm"
                ></div>

                <!-- Cercle SVG au centre -->
                <svg
                  class="absolute inset-0 m-auto w-[350px] h-[350px] xl:w-[600px] xl:h-[600px] text-fuchsia-500 z-0 drop-shadow-[0_0_10px_rgba(255,0,255,0.8)] saturate-150"
                  viewBox="0 0 590 600"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <circle cx="280" cy="290" r="280" />
                </svg>
              </motion.div>
              <motion.div
                :initial="{ opacity: 0 }"
                :animate="{ opacity: 1 }"
                :transition="{ delay: 3, duration: 0.4, ease: 'easeInOut' }"
              >
                <img
                  src="../assets/avatar.png"
                  class="w-full h-full object-contain z-10 relative"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { Button } from "@/components/ui/button";
import { DownloadCloud } from "lucide-vue-next";
import { motion } from "motion-v";
import Socials from "@/components/Socials.vue";

const facebook = import.meta.env.VITE_FACEBOOK_URL;
const twitter = import.meta.env.VITE_TWITTER_URL;
const linkedin = import.meta.env.VITE_LINKEDIN_URL;
const github = import.meta.env.VITE_GITHUB_URL;

const initial = { opacity: 0 };
const animate = {
  opacity: 1,
  transition: {
    delay: 2,
    duration: 0.5,
    ease: "easeIn",
  },
};
</script>
