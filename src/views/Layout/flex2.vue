<template>
<div class="container">
    <header class="bg">header</header>
    <div class="body">
      <main class="content bg">content</main>
      <nav class="nav bg">nav</nav>
      <aside class="ads bg">aside</aside>
    </div>
    <footer class="bg">footer</footer>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  header{
    flex:1;
    background-color: darkcyan;
  }
  main{
    display: flex;
    flex:1;
    // background-color: darkgoldenrod;
  }
  aside {
    background-color: fuchsia;
  }
  .content{
    background-color: darkturquoise;
  }
  .right{
    background-color: darkviolet;
  }
  footer{
    flex:1;
    background-color: salmon;
  }

}
</style>