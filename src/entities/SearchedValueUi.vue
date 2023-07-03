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

<script lang="ts" setup>
import { useSearchedValueModel } from './searchedValueModel';
import { storeToRefs } from "pinia";

const { searchedValue } = storeToRefs(useSearchedValueModel());

</script>
