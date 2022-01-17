import { createApp } from "vue";
import App from "./App";
import components from "./components/UI/index";

const app = createApp(App);
console.log("components:", components);

components.forEach((component) => app.component(component.name, component));

createApp(App).mount("#app");
