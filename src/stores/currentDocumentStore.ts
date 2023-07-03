import { defineStore } from 'pinia'
import {type TDocumentsModel} from "../types"

type TCurrentDocumentState = {
  currentDocument: TDocumentsModel | null
}

export const useCurrentDocumentStore = defineStore('currentDocument', {
  state: (): TCurrentDocumentState => ({ currentDocument: null }),
  getters: {
    get:(state)=> state.currentDocument,
  },
  actions: {
    update(value) {
      this.currentDocument = value
    },
  },
})
