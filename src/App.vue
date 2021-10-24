<template>
  <a-row class="header">
    <a-col :md="24" :lg="10">
      <img alt="Vue logo" class="header-pictrue" src="./assets/header/wu.jpg" />
    </a-col>
    <a-col :md="24" :lg="4">
      <h1>We've met for</h1>
      <div>
        <span class="time">{{ day }}</span>
        <span class="text">days</span>
      </div>
      <div>
        <span class="time">{{ hour }}</span>
        <span class="text">hours</span>
      </div>
      <div>
        <span class="time">{{ minute }}</span>
        <span class="text">minutes</span>
      </div>
      <div>
        <span class="time">{{ second }}</span>
        <span class="text">second{{ second === 1 ? "" : "s" }}</span>
      </div>
    </a-col>
    <a-col :md="24" :lg="10">
      <img alt="xiong" class="header-pictrue" src="./assets/header/xiong.jpg" />
    </a-col>
  </a-row>
  <a-row class="content">
    <a-col :sm="24" :md="6">
      <h3>
        <FileImageOutlined />
        <a-button type="link">21-10-23 in 延庆大庄科</a-button>
      </h3>
      <h3>...to be continued</h3>
    </a-col>
    <a-col :sm="24" :md="18"><Picture msg="Welcome to Your Vue.js App"/></a-col>
  </a-row>
  <div class="footer"></div>
</template>

<script>
import { FileImageOutlined } from "@ant-design/icons-vue";

import { onMounted, ref } from "vue";
import Picture from "./components/picture.vue";
import moment from "moment";

export default {
  name: "App",
  components: {
    Picture,
    FileImageOutlined,
  },
  setup() {
    const day = ref("");
    const hour = ref("");
    const minute = ref("");
    const second = ref("");
    const start_date = moment("2021-10-18 11:39:00");

    onMounted(() => {
      share_data_time();
    });

    const share_data_time = () => {
      const end_date = moment();
      // end_date.diff(start_date); // 返回毫秒数

      const days = end_date.diff(start_date, "days");
      const hours = end_date.diff(start_date, "hours");
      const minutes = end_date.diff(start_date, "minutes");
      const seconds = end_date.diff(start_date, "seconds");
      day.value = days;
      hour.value = hours - days * 24;
      minute.value = minutes - hours * 60;
      second.value = seconds - minutes * 60;

      window.setTimeout(share_data_time, 1000);
      // end_date.diff(start_date, "months"); // 0
      // end_date.diff(start_date, "weeks"); // 1
      // start_date.diff(end_date, "days"); // -7
    };
    return {
      day,
      hour,
      minute,
      second,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 2rem;
}
</style>

<style scoped>
.header {
  margin-bottom: 4rem;
}

.header-pictrue {
  width: 100%;
}
:deep(.ant-btn-link) {
  margin: 0px;
  padding: 0px;
  color: rgba(0, 0, 0, 0.85);
}

.time {
  font-size: 2rem;
}
.text {
  margin-left: 1rem;
  font-size: 1rem;
  color: #707070;
}
.content {
  margin-bottom: 3rem;
}
.footer {
  height: 2rem;
}
</style>
