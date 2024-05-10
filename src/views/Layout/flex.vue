<template>
  <div class="wrapper">
    <div class="item">
      <div class="box">1</div>
      <div class="box">2</div>
      <div class="box">1</div>
    </div>
    <div class="item">
      <div class="box">1</div>
      <div class="box">2</div>
      <div class="box">1</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.wrapper {
  width: 100px;
  height: 100px;
  border: 1px solid #000;
  display: flex;
  justify-content: space-between;
  // justify-content: space-between;
  // flex-direction: column;;

}
.item{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.box {
  width: 20px;
  height: 20px;
  border: 1px solid #000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>
