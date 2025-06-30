<script lang="ts" setup>
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { AlignRight } from "lucide-vue-next";

const navLinks = [
  { name: "acceuil", path: "/" },
  { name: "services", path: "#services" },
  { name: "a propos", path: "#about" },
  { name: "skills", path: "#skills" },
  // { name: "projets", path: "/projects" },
  { name: "contact", path: "#contacts" },
];

const pathname = window.location.pathname;
</script>

<template>
  <header class="fixed w-full py-8 xl:py-8 text-white bg-primary">
    <div class="container mx-auto flex items-center justify-between">
      <a href="/">
        <h1 class="text-lg xl:text-2xl font-medium font-primary">
          &lt; Bill /
          <span
            class="bg-gradient-to-r from-pink-600 via-fuchsia-600 to-violet-600 bg-clip-text text-transparent"
          >
            Hope.
          </span>
          &gt;
        </h1>
      </a>

      <!-- Navbar -->
      <div class="hidden xl:flex items-center gap-4">
        <!-- Desktop Navbar -->
        <nav class="space-x-6">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.path"
            class="group relative inline-block text-lg xl:text-xl font-medium px-2 py-1"
          >
            <!-- Texte avec effet de dégradé -->
            <span
              :class="[
                'transition-all duration-300 capitalize',
                link.path === pathname
                  ? 'bg-gradient-to-r from-pink-600 via-fuchsia-600 to-violet-600 bg-clip-text text-transparent'
                  : 'text-white hover:bg-gradient-to-r hover:from-pink-600 hover:via-fuchsia-600 hover:to-violet-600 hover:bg-clip-text hover:text-transparent',
              ]"
            >
              {{ link.name }}
            </span>

            <!-- Underline animé -->
            <span
              class="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-pink-600 via-fuchsia-600 to-violet-600 transition-all duration-500 group-hover:w-3/4"
            ></span>
          </a>
        </nav>
      </div>
      <div class="xl:hidden">
        <!-- Mobile Nav bar -->
        <nav>
          <Sheet class="bg-transparent">
            <SheetTrigger as-child>
              <AlignRight
                class="h-6 w-6 text-accent hover:text-pink-600 transition-all duration-500 ease-in-out"
              />
            </SheetTrigger>
            <SheetContent class="bg-slate-950 px-2">
              <SheetHeader>
                <SheetTitle>
                  <h1
                    class="text-white text-lg xl:text-2xl font-medium font-primary"
                  >
                    <a href="/" class="hover:cursor-pointer">
                      &lt; Bill
                      <span
                        class="bg-gradient-to-r from-pink-600 via-fuchsia-600 to-violet-600 bg-clip-text text-transparent"
                      >
                        Hope.
                      </span>
                      &gt;
                    </a>
                  </h1>
                </SheetTitle>
              </SheetHeader>
              <div class="px-6 flex flex-col items-start space-y-4">
                <a
                  v-for="link in navLinks"
                  :key="link.name"
                  :href="link.path"
                  class="group relative inline-block text-lg xl:text-xl px-2 py-1"
                >
                  <SheetClose as-child>
                    <span
                      :class="[
                        'transition-all duration-300 capitalize',
                        link.path === pathname
                          ? 'bg-gradient-to-r from-pink-600 via-fuchsia-600 to-violet-600 bg-clip-text text-transparent'
                          : 'text-white hover:bg-gradient-to-r hover:from-pink-600 hover:via-fuchsia-600 hover:to-violet-600 hover:bg-clip-text hover:text-transparent',
                      ]"
                    >
                      {{ link.name }}
                    </span>
                  </SheetClose>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
