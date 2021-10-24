import { createApp } from "vue";
import App from "./App.vue";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

function bootstrap() {
  const app = createApp(App);

  app.use(Antd);

  app.mount("#app");
}

void bootstrap();

// createApp(App).mount("#app");
