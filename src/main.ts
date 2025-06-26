import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faFacebookF, faGithub, faLinkedinIn, faXTwitter);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
