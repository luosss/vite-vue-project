<template>
  <div class="cms_wrapper">
    <div class="left_wrapper">
      <SideBar />
    </div>
    <div class="right_wrapper">
      <Header></Header>
      <div class="right_content">
        <div class="content">
          <router-view>
          </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import Header from "./Header.vue";
import SideBar from "./SideBar.vue";

const route = useRoute();
const router = useRouter();
</script>

<style lang="scss" scoped>
.cms_wrapper {
  position: relative;
}
.left_wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 100vh;
  background: rgb(50, 65, 87);
}
.right_wrapper {
  .right_content{
    position: absolute;
    top: 60px;
    left: 200px;
    background: #f5f6f8;
    height: calc(100vh - 60px);
    width: calc(100vw - 200px);
    transition: all .5s;
    overflow: auto;
    .content{
      padding: 10px;
    }
  }
}
</style>
