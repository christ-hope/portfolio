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

const facebook: string = import.meta.env.VITE_FACEBOOK_URL;
const twitter: string = import.meta.env.VITE_TWITTER_URL;
const linkedin: string = import.meta.env.VITE_LINKEDIN_URL;
const github: string = import.meta.env.VITE_GITHUB_URL;

interface SocialLink {
  icon: string;
  url: string;
}

const socials: SocialLink[] = [
  { icon: "github", url: github },
  { icon: "linkedin-in", url: linkedin },
  { icon: "facebook-f", url: facebook },
  { icon: "x-twitter", url: twitter },
];
</script>
