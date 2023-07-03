<template>
  <div class="content-sides-margin">
    <h3>Поиск документа</h3>
    <el-input
      v-model="searchedValue"
      placeholder="Введите ID документа"
    />
    <h3>Результаты</h3>
  </div>
</template>
<!-- :input="(value: string | number)=>searchedValueStore.update(String(value))" -->
<script lang="ts" setup>
import { useSearchedValueStore } from '@/stores/searchedValueStore';
import { storeToRefs } from "pinia";

const { searchedValue } = storeToRefs(useSearchedValueStore());

</script>
