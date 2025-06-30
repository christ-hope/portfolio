<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import { motion } from "motion-v";

const props = defineProps({
  threshold: { type: Number, default: 0.1 }, // % visibilité pour déclencher
});

const visible = ref(false);
const el = ref<HTMLElement | null>(null);

function onIntersect(entries: IntersectionObserverEntry[]) {
  if (entries[0].isIntersecting) {
    visible.value = true;
    observer.disconnect();
  }
}

let observer: IntersectionObserver;

onMounted(() => {
  observer = new IntersectionObserver(onIntersect, {
    threshold: props.threshold,
  });
  if (el.value) observer.observe(el.value);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<template>
  <motion.div
    ref="el"
    :initial="{ opacity: 0, y: 20 }"
    :animate="visible ? { opacity: 1, y: 0 } : {}"
    :transition="{ duration: 0.6, ease: 'easeOut' }"
  >
    <slot />
  </motion.div>
</template>
