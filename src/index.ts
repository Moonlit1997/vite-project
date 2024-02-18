// src/main.js
import * as THREE from "three";

// 获取 div 元素的引用
document.addEventListener("DOMContentLoaded", () => {
  // 获取 div 元素的引用
  const container = document.getElementById("three-container");

  // 检查是否找到了元素
  if (!container) {
    console.error("Unable to find the container element.");
    return;
  }

  // 创建场景
  const scene = new THREE.Scene();

  // 创建相机
  const camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  // 创建渲染器并设置输出为 div 元素
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  // 创建几何体和材质
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);

  // 将对象添加到场景
  scene.add(cube);

  // 循环函数
  function animate() {
    requestAnimationFrame(animate);

    // 旋转立方体
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // 渲染场景
    renderer.render(scene, camera);
  }

  // 调用循环函数
  animate();

  // 窗口大小变化事件
  window.addEventListener("resize", () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth, container.clientHeight);
  });
});
