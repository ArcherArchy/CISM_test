import { defineStore } from 'pinia'
import {type TDocumentsModel} from "../types"


type TDocumentsState = {
  documents: TDocumentsModel[]
}

export const useDocumentsStore = defineStore('documents', {
  state: (): TDocumentsState => ({ documents: [] }),
  getters: {
    get:(state)=> state.documents,
  },
  actions: {
    update(value) {
      this.documents = value
    },
  },
})
