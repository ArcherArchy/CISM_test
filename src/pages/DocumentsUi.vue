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

  import BaseCard from '../entities/BaseCardUi.vue'
  import InputField from '../entities/SearchedValueUi.vue'
  import DocumentsList from '../widgets/DocumentsListUi.vue'
  import DocumentPreview from '../widgets/DocumentPreviewUi.vue'
  import { useCurrentDocumentModel } from '../widgets/currentDocumentModel'

  const { currentDocument } = storeToRefs(useCurrentDocumentModel())
</script>

<style>
  .card-centered-item {
    text-align: center;
    top: 35vh;
    position: relative;
  }
</style>
