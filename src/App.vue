<script setup lang="ts">
import Header from "@/components/Header.vue";
import PageTransition from "@/components/animation/PageTransition.vue";
import Banner from "@/components/Banner.vue";
import Services from "@/components/Services.vue";
import About from "@/components/About.vue";
import Skills from "@/components/Skills.vue";
import Contacts from "@/components/Contacts.vue";
</script>

<template>
  <PageTransition>
    <main class="px-4 mx-auto h-full">
      <Header />
      <Banner />
      <Services />
      <About />
      <Skills />
      <Contacts />
      <footer class="w-full mt-16" aria-label="Pied de page">
        <div
          class="bg-white/5 backdrop-blur-md px-6 py-4 border-t border-white/10"
        >
          <div
            class="container mx-auto flex flex-col md:flex-row items-center justify-between text-center text-sm text-white/80 gap-2"
          >
            <!-- Logo / Nom -->
            <a
              href="/"
              class="flex items-center gap-2 font-semibold text-white hover:text-fuchsia-400 transition-colors duration-200"
            >
              <h1 class="text-base font-primary">
                &lt; Bill /
                <span
                  class="bg-gradient-to-r from-pink-600 via-fuchsia-600 to-violet-600 bg-clip-text text-transparent"
                >
                  Hope.
                </span>
                &gt;
              </h1>
            </a>

            <!-- Copyright -->
            <span
              >&copy; {{ new Date().getFullYear() }} – Tous droits
              réservés</span
            >
          </div>
        </div>
      </footer>
    </main>
  </PageTransition>
</template>
