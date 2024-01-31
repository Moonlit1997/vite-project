<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>
  <div><img src="/vite.svg" class="logo" alt="Vite logo" /></div>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HM
    </p>
  </div>
  <el-button type="primary">aaa </el-button>
</template>

<style scoped></style>
