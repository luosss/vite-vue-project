<template>
  <div id="my-three"></div>
</template>
​
<script lang='ts' setup>
  // import * as THREE from 'three'
  import {Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh,Color} from 'three'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
  import { onMounted  } from 'vue'

  //创建一个三维场景
  const scene = new Scene();
  scene.background = new Color('skyblue');




  //创建一个透视摄像机

  const camera = new PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 1000);

  //将相机移加Z轴

  camera.position.set(0,0,100);
  // camera.position.z = 100

  // camera.lookAt(0,0,0);

  
    //创建一个物体
    const geometry = new BoxGeometry(10,10,10);
  //创建材质
  const material = new MeshBasicMaterial({color: 0x00ff66});
  //创建一个网格模型对象
  const mesh = new Mesh(geometry,material);
  //把网格模型对象添加到三维场景
    scene.add(mesh);

  //创建一个WebGL渲染器
  const renderer = new WebGLRenderer();
  
  //设置渲染区的尺寸
  renderer.setSize(window.innerWidth, window.innerHeight);
  //执行渲染操作、指定场景、相机作为参数
 




  onMounted(()=>{
      document.getElementById('my-three')?.appendChild(renderer.domElement)
      renderer.render(scene, camera);
  })
</script>
​
<style lang='scss'>
  body{
      margin: 0;
      padding: 0;
  }
</style>

