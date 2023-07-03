<template>
  <el-scrollbar height="400px">
    <div class="cards-list-item content-sides-margin" v-for="document in documnentsRef">
      <BaseCard borderRadius="10px" height="10vh" hoverColor="#0D6EFD" color="#ffffff">
        <template #left> 
          <el-image :src="document.loadedImage?.imageUrl" fit="cover"  />
        </template>
        <template #right >
          <div v-on:click="()=>currentDocumentModel.update(document)" >
            <el-row :gutter="0"  v-on:click=""> 
              <h5 class="grid-text-margin">{{document.name}}</h5>
            </el-row> 
            <el-row :gutter="0" class="demo-radius">
              <p class="grid-text-margin">{{ document.loadedImage?.size }}</p> 
            </el-row> 
          </div> 
        </template>
      </BaseCard> 
    </div>
  </el-scrollbar>
</template>

<style>
.cards-list-item {
  margin-bottom: 15px;
}
.grid-text-margin{
  margin: 0px 0px 5px 0px
}
</style>

<script lang="ts" setup>
import { watch, onMounted } from 'vue';
import axios from 'axios'
import { storeToRefs } from 'pinia'
import { ElMessage } from 'element-plus'

import notFoundImg from "../assets/img/notfound.jpg"
import BaseCard from '../entities/BaseCardUi.vue'
import { useSearchedValueModel } from '../entities/searchedValueModel';
import { useDocumentsModel } from './documentsModel';
import {useCurrentDocumentModel} from './currentDocumentModel'
import type { TDocumentsModel } from '@/types';

const {searchedValue}  = storeToRefs(useSearchedValueModel());
const documentsModel = useDocumentsModel()
const {documents} = storeToRefs(documentsModel)
const documnentsRef = documents
const currentDocumentModel = useCurrentDocumentModel()
const {currentDocument} = storeToRefs(currentDocumentModel) 
const currentDocumentRef = currentDocument 


async function getDocuments(searchedValue: string): TDocumentsModel[] {
  try{
    const baseUrl = import.meta.env.VITE_API_HOST
    const url = searchedValue ? `${baseUrl}user/docs?search=${searchedValue}` : `${baseUrl}user/docs`
    const documentsResponse = await axios.get<TDocumentsModel[]>(url)
    return documentsResponse.data
  }
  catch(err){
    ElMessage.error(`Documents upload error: ${err}`)
  }
}
async function getImage(pictureUrl: string){
  try {
    const pictureResponse = await axios.get(pictureUrl)
    const imgUrl = URL.createObjectURL(pictureResponse.data) 
    return {imageUrl: imgUrl, size: (pictureResponse.data?.size / (1024*1024)).toFixed(2), failure: false}
  } catch (err) { 
    ElMessage.error(`Image upload error: ${err}`)
    return {imageUrl: notFoundImg, size: "0 MB", failure: true}
  }
  
}  

async function useDocuments(searchedValue:string): Promise<void> {
  const documentsResponse  = await getDocuments(searchedValue)
  for (let document_index = 0; document_index < documentsResponse.length; document_index++){
    if (documentsResponse[document_index].image){
      documentsResponse[document_index].loadedImage = await getImage(documentsResponse[0].image)
    }
  } 
  documentsModel.update(documentsResponse) 
}


onMounted(() => {
  useDocuments(searchedValue.value)
})
watch(()=>searchedValue, ()=>useDocuments(searchedValue.value), {immediate:true, deep: true}) 
</script> 
