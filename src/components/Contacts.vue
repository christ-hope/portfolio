<template>
  <section class="min-h-[50vh] flex flex-col justify-center py-4">
    <div class="container mx-auto">
      <!-- Section Title -->
      <div class="mb-8 flex flex-col items-center justify-center">
        <a
          id="contacts"
          class="py-4 text-xl xl:text-4xl bg-gradient-to-r from-pink-600 via-fuchsia-600 to-violet-600 bg-clip-text text-transparent"
        >
          Contacts
        </a>
        <div
          class="w-2 h-2 bg-gradient-to-r from-pink-600 via-fuchsia-600 to-violet-600 rounded-full"
        />
      </div>
      <div>
        Envie de construire une solution particulière, besoin d'un conseil ou
        d'un a ccompagnement pour réaliser votre projet Ecrivez-nous, nous nous
        ferons un plaisir de vous accompagner
      </div>
      <motion.div
        class="grid xl:grid-cols-2 gap-4 py-6"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ duration: 0.4, ease: 'easeInOut' }"
      >
        <div class="xl:order-none order-2">
          <form action="" class="p-4 flex flex-col gap-4 bg-white/5 rounded-xl">
            <h3
              class="bg-gradient-to-r from-pink-600 via-fuchsia-600 to-violet-600 bg-clip-text text-transparent"
            >
              Quels projet vous fait envie ?
            </h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label for="lastname">Votre Nom</label>
                <Input
                  type="text"
                  name="lastname"
                  placeholder="ex: Bill"
                  :model-value="data.lastname"
                  class="p-5 capitalize"
                />
              </div>
              <div>
                <label for="firstname">Votre Prenom</label>
                <Input
                  type="text"
                  name="firstname"
                  placeholder="ex: Hope"
                  :model-value="data.firstname"
                  class="p-5 capitalize"
                />
              </div>
            </div>
            <div>
              <label for="firstname">Adresse Email</label>
              <Input
                type="email"
                name="email"
                class="p-5"
                :model-value="data.email"
                placeholder="example@company.com"
              />
            </div>
            <div>
              <label for="firstname">Contact</label>
              <Input
                type="phone"
                name="phone"
                class="p-5"
                :model-value="data.phone"
                placeholder="ex: +229 01XXXXXXXX"
              />
            </div>
            <div>
              <label for="firstname">Quel service vous interesse ?</label>
              <Select name="services" class="p-5" placeholder="">
                <SelectTrigger class="w-full">
                  <SelectValue placeholder="Choisir un service"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Choisir un service</SelectLabel>
                    <div v-for="service in services">
                      <SelectItem :value="service.value">
                        <font-awesome-icon
                          :icon="['fab', service.icon]"
                          class="w-20 h-20 text-white"
                        />
                        {{ service.title }}
                      </SelectItem>
                    </div>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <Button
              type="button"
              class="border hover:border-transparent hover:bg-gradient-to-r hover:from-pink-600/70 hover:via-fuchsia-700/70 hover:to-violet-600/25 transition-all ease-in-out duration-500"
            >
              Envoyer
            </Button>
          </form>
        </div>
        <div>
          <motion.div
            class="p-4 flex flex-col gap-4 rounded-xl"
            :initial="{ opacity: 0 }"
            :animate="{ opacity: 1 }"
            :transition="{ duration: 0.4, ease: 'easeInOut' }"
          >
            <ul v-for="(contact, index) in contacts">
              <li :key="index" class="flex gap-4">
                <div v-if="contact.icon == 'phone'">
                  <div class="p-4 rounded-xl bg-white/5">
                    <Phone class="text-white/70" size="24" />
                  </div>
                </div>
                <div v-if="contact.icon == 'mail'">
                  <div class="p-4 rounded-xl bg-white/5">
                    <Mail class="text-white/70" size="24" />
                  </div>
                </div>
                <div v-if="contact.icon == 'linkedin'">
                  <div class="p-4 rounded-xl bg-white/5">
                    <Linkedin class="text-white/70" size="24" />
                  </div>
                </div>
                <div class="col-span-4">
                  <div
                    class="bg-gradient-to-r from-pink-600 via-fuchsia-600 to-violet-600 bg-clip-text text-transparent"
                  >
                    {{ contact.type }}
                  </div>
                  <div class="font-extralight">
                    {{ contact.info }}
                  </div>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { motion } from "motion-v";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from "@/components/ui/select";
import { Linkedin, Mail, Phone } from "lucide-vue-next";

interface Service {
  title: string;
  value: string;
  icon?: string;
}

interface formData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  service: string;
}

interface adresse {
  type: string;
  icon: string;
  info: string;
}

const data: formData = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  service: "",
};

const services: Service[] = [
  {
    title: "Site Internet - Application web",
    value: "web app",
    icon: "site",
  },
  {
    title: "Application mobile",
    value: "mobile app",
    icon: "mobile",
  },
  {
    title: "Design Graphique - UI/UX Design",
    value: "design",
    icon: "paint",
  },
  {
    title: "Formation",
    value: "school",
    icon: "course",
  },
];

const contacts: adresse[] = [
  {
    type: "Contact",
    icon: "phone",
    info: "+229 01 61 685 835",
  },
  {
    type: "Email",
    icon: "mail",
    info: "christhope.dev@gmail.com",
  },
  {
    type: "Linkedin",
    icon: "linkedin",
    info: "linkedin/bill-hope",
  },
];
</script>
