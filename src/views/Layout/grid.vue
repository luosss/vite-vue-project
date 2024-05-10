<template>
  <div class="wrapper">
    <div class="one item">One</div>
    <div class="two item">Two</div>
    <div class="three item">Three</div>
    <div class="four item">Four</div>
    <div class="five item">Five</div>
    <div class="six item">Six</div>
    <div class="six item">seven</div>
    <div class="six item">eight</div>
    <div class="six item">nine</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.wrapper {
  border:1px solid #000;
  margin: 60px;
  /* 声明一个容器 */
  display: grid;
  /*  声明列的宽度  */
  grid-template-columns: 200px 100px;
  grid-template-rows: 200px 100px;
  /*  声明行间距和列间距  */
  grid-gap: 10px;
  /*  声明行的高度  */
  grid-auto-rows:100px;
  // justify-content: space-evenly;
  // align-content: center;
}
.one {
  background: #19caad;
}
.two {
  background: #8cc7b5;

}
.three {
  background: #d1ba74;

}
.four {
  background: #bee7e9;

}
.five {
  background: #e6ceac;

}
.six {
  background: #ecad9e;

}
.item {
  text-align: center;
  font-size: 200%;
  color: #fff;
  border:1px solid #d1ba74;
  justify-self: center;
  align-self: center;
}
</style>
