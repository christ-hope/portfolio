<script setup lang="ts">
import { motion } from "motion-v";

// Fade in effect
const initial = { opacity: 0 };
</script>

<template>
  <motion.div
    :initial="initial"
    :animate="{ opacity: 1 }"
    :transition="{
      delay: 1,
      duration: 0.5,
      ease: 'easeInOut',
    }"
    class="min-h-screen w-full"
  >
    <slot />
  </motion.div>
</template>
