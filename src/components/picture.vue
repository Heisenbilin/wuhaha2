<template>
  <div class="picture-container" v-if="pictrues[current - 1]">
    <img
      alt="xiong"
      class="header-pictrue"
      :src="require('../assets/21-10-23' + pictrues[current - 1]?.slice(1))"
    />
  </div>
  <a-pagination
    v-model:current="current"
    v-model:pageSize="pageSize"
    :total="pictrues.length"
  />
  <!-- <a-carousel arrows>
    <template #prevArrow>
      <div class="custom-slick-arrow" style="zindex: 1">
        <left-circle-outlined />
      </div>
    </template>
    <template #nextArrow>
      <div class="custom-slick-arrow" style="right: 10px">
        <right-circle-outlined />
      </div>
    </template>
    <template v-for="(pictrue, index) in pictrues" :key="index">
      <div></div>
    </template>
  </a-carousel> -->
</template>

<script>
// import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons-vue";
import { ref, onMounted } from "vue";
export default {
  name: "Pictrue",
  components: {
    // LeftCircleOutlined,
    // RightCircleOutlined,
  },
  props: {
    msg: String,
  },
  setup() {
    const pictrues = ref([]);
    const current = ref(1);
    const pageSize = ref(1);
    onMounted(() => {
      const files = require
        .context("../assets/21-10-23/", false, /.jpg$/)
        .keys();
      pictrues.value = files;
      console.log(pictrues.value);
    });
    return {
      pictrues,
      current,
      pageSize,
    };
  },
};
</script>

<style scoped>
.picture-container {
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-pictrue {
  height: 100%;
}
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 50vh;
  line-height: 50vh;
  background: #ffffff;
  overflow: hidden;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: rgb(0, 0, 0);
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>
