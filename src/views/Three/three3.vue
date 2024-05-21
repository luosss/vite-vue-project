<template>
  <div id="my-three"></div>
</template>
​
<script lang='ts' setup>
  // import * as THREE from 'three'
  import {Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshBasicMaterial, Mesh,Color,MeshStandardMaterial,DirectionalLight,AmbientLight,HemisphereLight,SphereGeometry } from 'three'
  import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
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
    // const geometry = new BoxGeometry(10,10,10);
  //创建材质
  const material = new MeshStandardMaterial({color: 'purple'});
  //创建一个网格模型对象
  // const cube = new Mesh(geometry,material);

  // cube.rotation.set(-0.5, -0.1, 0.8);

  //把网格模型对象添加到三维场景
    // scene.add(cube);

    const radius = 0.25;
    const widthSegments = 16;
    const heightSegments = 16;
    const sphereGeometry = new SphereGeometry(
    radius,
    widthSegments,
    heightSegments
  );

  for (let i = 0; i < 21; i++) {
    const sphere = new Mesh(sphereGeometry, material);
    scene.add(sphere);
  }




  //创建一个WebGL渲染器
  const renderer:any = new WebGLRenderer();
  
  renderer.physicallyCorrectLights = true;
  
  //设置渲染区的尺寸
  renderer.setSize(window.innerWidth, window.innerHeight);
  //执行渲染操作、指定场景、相机作为参数
 
  //创建轨道控制器
  const controls = new OrbitControls(camera, renderer.domElement);

  //设置控制器阻尼效果、自动旋转
  controls.enableDamping = true;

  camera.position.set( 0, 20, 100 );

  camera.rotation.set(0.5, 0, 0);
  
  controls.update();

  //创建光源-阳光
// const light = new DirectionalLight('white',8);
// light.position.set(10,10,10);

//环境光
const ambientLight = new AmbientLight('white', 2);

//平行光
const mainLight = new DirectionalLight('white', 5);
mainLight.position.set(10, 10, 10);

//环境光
const hemisphereLight = new HemisphereLight(
  'white', // bright sky color
  'darkslategrey', // dim ground color
  5, // intensity
);

//光源位置

//将光源添加到场景
scene.add(ambientLight,mainLight,hemisphereLight);

//控制器监听鼠标、键盘事件
controls.addEventListener('change', () => {
renderer.render(scene, camera);
});

//控制器方法,.autoRotate将使相机自动围绕.target旋转，然后 .autoRotateSpeed控制速度：
//与.enableDamping一样，您必须在每一帧都调用controls.update才能使其正常工作。请注意，如果控件被禁用，.autoRotate仍然可以工作。
controls.autoRotate = true;
controls.autoRotateSpeed = 10;

//限制控件放大或缩小的距离：
// controls.minDistance = 5;
// controls.maxDistance = 100;
//控制器方法
function animate() {

  requestAnimationFrame( animate );
  // required if controls.enableDamping or controls.autoRotate are set to true
  controls.update();

  renderer.render( scene, camera );

}





  onMounted(()=>{
      document.getElementById('my-three')?.appendChild(renderer.domElement)
      renderer.render(scene, camera);
      animate();
      
  })
</script>
​
<style lang='scss'>
  body{
      margin: 0;
      padding: 0;
  }
</style>

