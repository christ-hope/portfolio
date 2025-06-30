<template>
  <section class="min-h-[50vh] flex flex-col p-4">
    <div class="container mx-auto">
      <!-- Section Title -->
      <div class="mb-8 flex flex-col items-center justify-center">
        <a
          id="skills"
          class="py-4 text-xl xl:text-4xl bg-gradient-to-r from-pink-600 via-fuchsia-600 to-violet-600 bg-clip-text text-transparent"
        >
          Skills 
        </a>
        <div
          class="w-2 h-2 bg-gradient-to-r from-pink-600 via-fuchsia-600 to-violet-600 rounded-full"
        />
      </div>

      <Tabs
        default-value="Frontend"
        class="w-full flex flex-col justify-center items-center"
      >
        <!-- Onglets à gauche -->
        <TabsList
          class="xl:max-w-[600px] px-2 mx-auto mb-5 flex gap-2"
        >
          <TabsTrigger
            v-for="(group, index) in skillCategories"
            :key="index"
            :value="group.category"
          >
            {{ group.category }}
          </TabsTrigger>
        </TabsList>

        <!-- Contenu à droite -->
        <div class="w-full">
          <TabsContent
            v-for="(group, index) in skillCategories"
            :key="index"
            :value="group.category"
            class="w-full"
          >
            <motion.div
              :initial="{ opacity: 0, y: 20 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.6, ease: 'easeOut' }"
              class="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              <div
                v-for="skill in group.skills"
                :key="skill.name"
                class="relative group flex items-center gap-2 px-4 py-2 rounded-xl backdrop-blur-md bg-white/5 text-white border border-transparent transition-all duration-300 ease-in-out hover:before:opacity-80 hover:scale-[1.02]"
              >
                <font-awesome-icon
                  :icon="skill.icon"
                  class="w-20 h-20 text-white"
                />
                <span class="text-sm">{{ skill.name }}</span>
              </div>
            </motion.div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "motion-v";

interface SkillCategory {
  category: string;
  skills: {
    name: string;
    icon: [string, string];
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: ["fab", "html5"] },
      { name: "CSS3", icon: ["fab", "css3"] },
      { name: "JavaScript", icon: ["fab", "square-js"] },
      { name: "TypeScript", icon: ["fab", "js"] },
      { name: "Vue.js", icon: ["fab", "vuejs"] },
      { name: "React", icon: ["fab", "react"] },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "PHP", icon: ["fab", "php"] },
      { name: "Laravel", icon: ["fab", "laravel"] },
      { name: "Node.js", icon: ["fab", "node-js"] },
      { name: "MySQL", icon: ["fab", "php"] },
      { name: "MongoDB", icon: ["fab", "envira"] },
      { name: "Firebase", icon: ["fab", "google"] },
    ],
  },
  {
    category: "Mobile",
    skills: [{ name: "React Native", icon: ["fab", "react"] }],
  },
  {
    category: "UI / UX & Outils",
    skills: [
      { name: "Figma", icon: ["fab", "figma"] },
      { name: "Wordpress", icon: ["fab", "wordpress"] },
      { name: "Photoshop", icon: ["fab", "pixiv"] },
      { name: "Git", icon: ["fab", "git-alt"] },
      { name: "GitHub", icon: ["fab", "github"] },
    ],
  },
];
</script>
