<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import Header from "../widgets/HeaderUi.vue"
</script>

<template>
  <div>
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </div>
</template>
