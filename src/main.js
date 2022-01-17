import { createApp } from "vue";
import App from "./App";
import components from "./components/UI/index";

const app = createApp(App);

components.forEach((el) => app.component(el.name, el));

+app.mount("#app");
