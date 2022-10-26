import { createApp } from "vue";
import { createPinia } from "pinia";
import { Splide } from "@splidejs/vue-splide";

import App from "./App.vue";
import router from "./router";
// import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// or
// import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

import "./style.css";


const app = createApp(App);

app.use(Splide);
app.use(createPinia());
app.use(router);

app.mount("#app");
