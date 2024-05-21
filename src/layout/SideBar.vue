<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <template v-for="item in menuList">
        <template v-if="item.subs">
          <el-sub-menu :index="item.index" :key="item.index">
            <template #title>
              <el-icon>
                <component :is="item.icon"></component>
              </el-icon>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-sub-menu
                v-if="subItem.subs"
                :index="subItem.index"
                :key="subItem.index"
              >
                <template #title>{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem, i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >
                  {{ threeItem.title }}
                </el-menu-item>
              </el-sub-menu>
              <el-menu-item v-else :index="subItem.index">
                {{ subItem.title }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

const menuList: any = [
  {
    icon: "Calendar",
    index: "1",
    title: "表格部分",
    permiss: "2",
    subs: [
      {
        icon: "Odometer",
        index: "/simplyTable",
        title: "表格导出方式1",
        permiss: "1",
      },
      {
        icon: "Odometer",
        index: "/simplyTable2",
        title: "表格导出方式2",
        permiss: "1",
      },
      {
        icon: "Odometer",
        index: "/simplyTable3",
        title: "复杂表格导出",
        permiss: "1",
      },
      {
        icon: "Odometer",
        index: "/complexTable",
        title: "复杂表格",
        permiss: "1",
      },
    ],
  },
  {
    icon: "Calendar",
    index: "2",
    title: "表单相关",
    permiss: "2",
    subs: [
      {
        index: "/table",
        title: "常用表单",
        permiss: "2",
      },
      {
        index: "/import",
        title: "导入Excel",
        permiss: "2",
      },
      {
        index: "/export",
        title: "导出Excel",
        permiss: "2",
      },
    ],
  },
  {
    icon: "Calendar",
    index: "3",
    title: "布局相关",
    permiss: "2",
    subs: [
      {
        index: "/gridLayout",
        title: "grid布局",
        permiss: "2",
      },
      {
        index: "/flexLayout",
        title: "flex筛子布局",
        permiss: "2",
      },
      {
        index: "/flexLayout2",
        title: "flex常见布局",
        permiss: "2",
      },
    ],
  },{
    icon: "Calendar",
    index: "4",
    title: "Three相关",
    permiss: "2",
    subs: [
      {
        index: "/three",
        title: "three",
        permiss: "2",
      },
      {
        index: "/three2",
        title: "three2",
        permiss: "2",
      },
      {
        index: "/three3",
        title: "three3",
        permiss: "2",
      },
    ],
  },
];
</script>

<style lang="scss" scoped>
.sidebar-el-menu {
  overflow-y: auto;
}
</style>
