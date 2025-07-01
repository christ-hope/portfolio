import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import { library, type IconDefinition } from "@fortawesome/fontawesome-svg-core";
import * as BrandIcons from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Type guard pour s'assurer que c'est une icône
const isIconDefinition = (icon: unknown): icon is IconDefinition => {
  return (
    typeof icon === "object" &&
    icon !== null &&
    "iconName" in icon &&
    "prefix" in icon
  );
};

// On filtre les vraies icônes
const brandIconsArray = Object.values(BrandIcons).filter(isIconDefinition);

library.add(...brandIconsArray);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
