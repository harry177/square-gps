import { createApp } from "vue";
import App from "./App.vue";
import NewApp from "./NewApp.vue";
import router from "./router";
import store from "./store";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/images/marker-icon-2x.png";
import "leaflet/dist/images/marker-shadow.png";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(NewApp).use(router).use(store).use(vuetify).mount("#app");
