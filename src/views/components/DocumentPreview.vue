<template>
  <el-row :gutter="20">
    <el-col :span="12">
      <el-image :src="currentDocumentRef.loadedImage?.imageUrl" fit="fill"/>
    </el-col>
    <el-col :span="12">
      <el-row>
        <h3>{{ currentDocumentRef?.name }}</h3>
      </el-row>
      <el-row :gutter="20">
        <p>
          <el-button class="download-button" size="small">
            <a v-on:click="downloadDocument()" :href="fileUrl" :download="fileName">
              Скачать
            </a>
          </el-button>
          <el-button
            class="delete-button"
            size="small"
            v-on:click="deleteDocument()"
            :disabled="currentDocumentRef.loadedImage?.failure"
          >
            Удалить
          </el-button>
        </p>
      </el-row>
      <el-row>
        <h3>Описание</h3>
      </el-row>
      <el-row>
        <p>{{ currentDocumentRef?.description }}</p>
      </el-row>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import axios from 'axios'
import {ElMessage} from 'element-plus'
import _ from 'lodash'

import { useCurrentDocumentStore } from '@/stores/currentDocumentStore'

const currentDocumentStore = useCurrentDocumentStore()
const { currentDocument } = storeToRefs(currentDocumentStore)

const currentDocumentRef = currentDocument
const fileUrl = ref('')
const fileName = ref('')

function downloadDocument(): void {
  const jsonData = encodeURIComponent(currentDocumentRef.value.description)
  fileUrl.value = `data:text/plain;charset=utf-8,${jsonData}`
  fileName.value = `${currentDocumentRef.value.name}.txt`
}

function deleteDocument(): void {
  try {
    axios.delete(currentDocumentRef.value?.image)
    const currentDocumentWithDeletedImg = currentDocumentRef.value
    delete currentDocumentWithDeletedImg['loadedImage']
    currentDocumentStore.update(currentDocumentWithDeletedImg)
  } catch (err) {
    ElMessage.error(`Image removal error: ${err}`)
  }
}
</script>

<style>
.download-button {
  border-color: #0d6efd !important;
  color: #0d6efd !important;
  margin-left: 1em;
}

.delete-button {
  border-color: #dc3545 !important;
  color: #dc3545 !important;
}

.el-button {
  bg-color: #ffffff;
  border-radius: 8px !important;
  min-width: 6vw;
}

a {
  color: inherit;
  text-decoration: inherit;
}
</style>
