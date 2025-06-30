<template>
  <section class="min-h-[50vh] flex flex-col p-4">
    <div class="container mx-auto">
      <!-- Section Title -->
      <div class="mb-8 flex flex-col items-center justify-center">
        <a
          id="about"
          class="py-4 text-xl xl:text-4xl bg-gradient-to-r from-pink-600 via-fuchsia-600 to-violet-600 bg-clip-text text-transparent"
        >
          A Propos
        </a>
        <div
          class="w-2 h-2 bg-gradient-to-r from-pink-600 via-fuchsia-600 to-violet-600 rounded-full"
        ></div>
      </div>
      <Tabs
        default-value="about"
        class="w-full flex flex-col xl:flex-row items-start"
      >
        <TabsList
          class="xl:max-w-[600px] px-2 mx-auto xl:mr-4 flex flex-col gap-2"
        >
          <TabsTrigger value="about">A Propos</TabsTrigger>
          <!-- <TabsTrigger value="education">Education</TabsTrigger> -->
          <TabsTrigger value="experience">Expérience</TabsTrigger>
        </TabsList>
        <div class="w-full">
          <TabsContent value="about" class="w-full">
            <motion.div
              :initial="{ opacity: 0 }"
              :animate="{ opacity: 1 }"
              :transition="{ duration: 1.5, ease: 'easeInOut' }"
            >
              <div class="space-y-4 mb-4">
                <p class="h3 text-2xl">A propos de moi</p>
                <span class="font-extralight text-sm"
                  >Un Passionné de code, mais avant tout un humain attentif à
                  vos besoins et à vos objectifs
                </span>
              </div>
              <motion.div
                :initial="{ opacity: 0, y: 20 }"
                :animate="{ opacity: 1, y: 0 }"
                :transition="{ duration: 0.5, delay: index * 0.2 }"
                class="group hover:scale-[1.02] transition-transform"
              >
                Je m'appelle Bill Hope, développeur web & mobile passionné, basé
                en Afrique francophone. Mon parcours mêle technique et réflexion
                humaine, avec une approche Fullstack moderne et orientée
                solution. Je conçois des applications performantes et
                intuitives, en m'appuyant sur des technologies solides comme
                JavaScript, React, Laravel, TypeScript ou React Native. Mais
                pour moi, développer va au-delà du code : c’est comprendre les
                besoins réels, traduire des intentions, et créer des expériences
                utiles, fluides et cohérentes. Ma formation en psychologie
                m’offre une vision plus fine de l’utilisateur, de
                l’accompagnement client, et de la communication dans les
                projets. J’accorde une grande importance à l’écoute, à
                l’adaptation, et à la clarté du processus technique. Créer du
                digital utile, accessible, et porteur de sens, voilà ce qui
                m’anime.
              </motion.div>
            </motion.div>
          </TabsContent>
          <TabsContent value="experience" class="w-full">
            <div class="relative border-l border-muted pl-6 space-y-4">
              <div class="space-y-4">
                <p class="h3 text-2xl capitalize">Parcours & experiences</p>
                <span class="font-extralight text-sm"
                  >Une projection breve de mon évolution, mes apprentissages et
                  les projets sur lesquels j'ai eu le plaisirs de travailler
                </span>
              </div>
              <motion.div
                v-for="(exp, index) in experiences"
                :key="index"
                :initial="{ opacity: 0, y: 20 }"
                :whileInView="{ opacity: 1, y: 0 }"
                :viewport="{ once: true, amount: 0.3 }"
                :transition="{
                  delay: index * 0.2,
                  duration: 0.6,
                  ease: 'easeOut',
                }"
                class="relative group"
              >
                <!-- Point / Node -->
                <div
                  class="absolute -left-7 top-1 w-2 h-3 rounded-full bg-violet-700"
                ></div>

                <!-- Période -->
                <div class="text-sm text-muted-foreground mb-1 capitalize">
                  {{ exp.period }}
                </div>

                <!-- Titre + entreprise -->
                <h4 class="text-lg font-semibold text-pink-600">
                  {{ exp.title }}
                  <span
                    class="block text-sm font-normal text-muted-foreground"
                    >{{ exp.company }}</span
                  >
                </h4>

                <!-- Description -->
                <p class="text-sm pt-2 text-muted-foreground">
                  {{ exp.description }}
                </p>

                <!-- Stack -->
                <div class="flex flex-wrap mt-2 gap-2">
                  <span
                    v-for="tech in exp.stack"
                    :key="tech"
                    class="text-xs px-2 py-1 bg-fuchsia-100 text-primary rounded-full"
                  >
                    {{ tech }}
                  </span>
                </div>
              </motion.div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "motion-v";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  stack: string[];
}

const experiences: Experience[] = [
  {
    title: "Consultant informatique",
    company: "Mont.Sozo Prod",
    period: "2017 – 2020",
    description:
      "Conception et de diffusion de contenus visuel : Affiche, Flyer, montage audiovisuel.",
    stack: [
      "Premiere Pro",
      "Photoshop",
      "Wondershare Filmora",
      "Socials media",
    ],
  },
  {
    title: "Développeur Web",
    company: "Projets personnels / Projets clients",
    period: "2022 – aujourd’hui",
    description:
      "Création de solutions web sur mesure pour PME et indépendants : plateformes web, landing pages, APIs, etc. Travail complet du cahier des charges au déploiement.",
    stack: [
      "Laravel",
      "React",
      "VueJs",
      "TailwindCSS",
      "MySQL",
      "MongoDB",
      "Firebase",
    ],
  },
  {
    title: "Développeur Web Fullstack",
    company: "Conceptic.io Sarl",
    period: "2023 – aujourd’hui",
    description:
      "Conception et maintenance de solutions web sur mesure pour entreprises et des indépendants : plateformes web, site vitrine, APIs, etc. Conception et integration de design Figma, Photoshop, etc...",
    stack: [
      "Laravel",
      "VueJs",
      "Expo",
      "React Native",
      "TailwindCSS",
      "Boostrap",
      "Wordpress",
      "MySQL",
      "Figma",
      "Photoshop",
    ],
  },
  {
    title: "Développeur Mobile",
    company: "Freeelance / Projets clients",
    period: "2023 – aujourd’hui",
    description:
      "Développement d'applications mobiles sous React Native pour Android et iOS : interface responsive, logique métier, navigation fluide, APIs, etc.",
    stack: [
      "React Native",
      "Javascript",
      "TypeScript",
      "Expo",
      "Redux",
      "Firebase",
      "Postgresql",
    ],
  },
  {
    title: "Animateur de Formation",
    company: "Conceptic.IO Sarl",
    period: "2024",
    description:
      "Animation de sessions de formation sur l'initiation à l'outils informatique, introduction à la programmation web, bonnes pratiques, et introduction à l'intelligence artificielle",
    stack: ["HTML5", "CSS3", "Python", "Canvas", "IA"],
  },
];
</script>
