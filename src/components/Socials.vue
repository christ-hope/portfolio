<template>
  <div class="flex gap-4">
    <a
      v-for="(social, index) in socials"
      :key="index"
      :href="social.url"
      target="_blank"
      rel="noopener noreferrer"
      class="border hover:border-pink-700 rounded-full text-white hover:text-pink-700 transition-all duration-300 ease-in-out"
    >
      <font-awesome-icon :icon="['fab', social.icon]" class="w-20 h-8" />
    </a>
  </div>
</template>

<script lang="ts" setup>
const socials = [
  { icon: "github", url: "https://github.com/" },
  { icon: "linkedin-in", url: "https://linkedin.com/" },
  { icon: "facebook-f", url: "https://facebook.com/" },
  { icon: "x-twitter", url: "https://twitter.com/" },
];
</script>
