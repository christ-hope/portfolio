import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as BrandIcons from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const brandIconsArray = Object.values(BrandIcons).filter(
  (icon) => icon.prefix && icon.iconName
);

library.add(...brandIconsArray);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
