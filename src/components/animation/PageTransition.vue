<script setup lang="ts">
import { motion } from "motion-v";

// Fade in effect
const initial = { opacity: 0 };
const animate = {
  opacity: 1,
  transition: {
    delay: 1,
    duration: 0.5,
    ease: "easeInOut",
  },
};
</script>

<template>
  <motion.div
    :initial="initial"
    :animate="animate"
    class="min-h-screen w-full"
  >
    <slot />
  </motion.div>
</template>
