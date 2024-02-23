<script setup lang="ts">
import sideMenu from "./components/sideMenu/index.vue";
</script>

<template>
  <div class="h-full w-full">
    <div class="h-1/4 w-full">
      <h1 class="text-3xl font-bold underline">Three.js</h1>
      <router-link to="/">about</router-link>
    </div>
    <div class="h-1/2 w-full flex">
      <div class="h-full w-1/4"><sideMenu /></div>
      <div class="h-full w-1/2" id="three-container"></div>
      <div class="h-full w-1/4"><router-view></router-view></div>
    </div>
    <div class="h-1/4 w-full">
      <h1 class="text-3xl font-bold underline">Three.js Foot</h1>
    </div>
  </div>
</template>

<style scoped></style>
