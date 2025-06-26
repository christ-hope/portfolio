<script setup lang="ts">
import Header from "@/components/Header.vue";
import PageTransition from "@/components/animation/PageTransition.vue";
import Banner from "@/components/Banner.vue";
import Services from "@/components/Services.vue";
import About from "@/components/About.vue";
</script>

<template>
  <PageTransition>
    <main class="px-4 mx-auto h-full">
      <Header />
      <Banner />
      <Services />
      <About />
    </main>
  </PageTransition>
</template>
