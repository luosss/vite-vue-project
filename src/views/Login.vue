<template>
  <el-button @click="login">登录</el-button>
</template>

<script setup lang="ts">
import {ref,reactive} from 'vue';
import {useRoute,useRouter} from 'vue-router';

const router = useRouter();
function login () {
  
  router.push('/home')
}


</script>