<template>
  <section class="min-h-[50vh] flex flex-col justify-center py-8">
    <div class="container mx-auto">
      <motion.div
        class="grid md:grid-cols-2 gap-4"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ delay: 3, duration: 0.4, ease: 'easeInOut' }"
      >
        <div v-for="(service, index) in services" :key="index">
          <div>
            <div class="text-2xl xl:text-5xl text-transparent font-extrabold text-outline">0{{ index + 1 }}</div>
            <div class="py-4 text-xl xl:text-4xl bg-gradient-to-r from-pink-600 via-fuchsia-600 to-violet-600 bg-clip-text text-transparent">{{ service.title }}</div>
            <div>{{ service.description }}</div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { motion } from "motion-v";

export interface Service {
  title: string;
  description: string;
  icon?: string; // optionnel si tu veux utiliser FontAwesome ou autre
}

const services: Service[] = [
  {
    title: "Développement Web",
    description:
      "Conception de sites web modernes, performants et sécurisés adaptés aux besoins : site vitrine, portail institutionnel, interface d’administration ou application métier.",
  },
  {
    title: "Applications Mobile",
    description:
      "Conception d’applications mobiles multiplateformes (iOS & Android) avec React Native. NOus vous proposons une expérience fluide, moderne et cohérente, depuis un seul codebase optimisé.",
  },
  {
    title: "Logo & Design graphique",
    description:
      "Conception de logos professionnels et d’identités visuelles cohérentes pour renforcer votre image de marque. Supports digitaux, visuels réseaux sociaux, flyers et plus encore.",
  },
  {
    title: "Design UI/UX",
    description:
      "Création d’interfaces utilisateurs intuitives, esthétiques et centrées sur l’expérience. De la maquette à l’intégration, chaque détail est pensé pour l’ergonomie et la fluidité.",
  },
  {
    title: "Formations",
    description:
      "Formations personnalisées en développement web et mobile, adaptées à tous niveaux. Technologies couvertes : HTML, CSS, JavaScript, React, Laravel, etc.",
  },
  {
    title: "Conseil & Accompagnement",
    description:
      "Accompagnement stratégique à chaque étape de votre projet. Grâce à ma double compétence en développement et en psychologie, je prends en compte les enjeux humains, relationnels et professionnels.",
  },
];
</script>

