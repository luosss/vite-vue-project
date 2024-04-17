<template>
  <div class="header_wrapper">
    <div class="left_wrapper">
      <div class="collapse-btn">
      <el-icon v-if="sidebar.collapse"><Expand /></el-icon>
			<el-icon v-else><Fold /></el-icon>
    </div>
    </div>
    <div class="header_right">
      <div class="header_user_con">
        <!-- 消息中心 -->
        <div class="info_wrapper">
          <div class="btn_bell">
          <el-tooltip
						effect="dark"
						:content="message ? `有${message}条未读消息` : `消息中心`"
						placement="bottom"
					>
          <el-icon><Bell /></el-icon>
					</el-tooltip>
          <span class="btn-bell-badge" v-if="message"></span>
        </div>
        <!-- 用户头像 -->
        <el-avatar class="user-avator" :size="30" :src="imgUrl" />
        <!-- 用户名下拉菜单 -->
				<el-dropdown class="user-name" trigger="click" @command="handleCommand">
					<span class="el-dropdown-link">
						{{ username }}
						<el-icon class="el-icon--right">
							<arrow-down />
						</el-icon>
					</span>
					<template #dropdown>
						<el-dropdown-menu>
							<a href="https://github.com/lin-xin/vue-manage-system" target="_blank">
								<el-dropdown-item>项目仓库</el-dropdown-item>
							</a>
							<el-dropdown-item command="user">个人中心</el-dropdown-item>
							<el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
						</el-dropdown-menu>
					</template>
				</el-dropdown>
        </div>
      
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref,reactive,onMounted} from "vue";
import {useRouter,useRoute} from "vue-router";
import {useSidebarStore} from "../stores/sidebar";
import imgUrl from "../assets/images/img.jpg";

const username: string | null = localStorage.getItem('ms_username');
const message: number = 2;
const sidebar = useSidebarStore();
// 侧边栏折叠
const collapseChage = () => {
	sidebar.handleCollapse();
};

onMounted(() => {
	if (document.body.clientWidth < 1500) {
		collapseChage();
	}
})

// 用户名下拉菜单选择事件
const router = useRouter();
const handleCommand = (command: string) => {
	if (command == 'loginout') {
		localStorage.removeItem('ms_username');
		router.push('/login');
	} else if (command == 'user') {
		router.push('/user');
	}
};
</script>

<style lang="scss" scoped>
.header_wrapper {
  height:60px;
  padding: 0 10px;
  display: flex;
  justify-content:space-between;
  align-items: center;
  background: rgba(0,0,0,0.5);
  .info_wrapper {
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .left_wrapper{
    margin-left: 200px;
  }
}
</style>