<template>
  <BaseCard borderRadius="10px" height="80vh">
    <template #left>
      <InputField />
      <Suspense>
        <template #default>
          <DocumentsList />
        </template>
        <template #fallback>
          <el-skeleton :rows="5" animated />
        </template>
      </Suspense>
    </template>
    <template #right>
      <template v-if="currentDocument">
        <DocumentPreview />
      </template>
      <template v-else>
        <div class="card-centered-item">Выберите документ, чтобы посмотреть его содержиое</div>
      </template>
    </template>
  </BaseCard>
</template>

<script lang="ts" setup>
  import { storeToRefs } from 'pinia'

  import BaseCard from './components/BaseCard.vue'
  import InputField from './components/InputField.vue'
  import DocumentsList from './components/DocumentsList.vue'
  import DocumentPreview from './components/DocumentPreview.vue'
  import { useCurrentDocumentStore } from '@/stores/currentDocumentStore'

  const { currentDocument } = storeToRefs(useCurrentDocumentStore())
</script>

<style>
  .card-centered-item {
    text-align: center;
    top: 35vh;
    position: relative;
  }
</style>
