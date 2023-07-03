import { defineStore } from 'pinia'


type TSearchedValueState = {
  searchedValue: string
}

export const useSearchedValueModel = defineStore('searchedValue', {
  state: (): TSearchedValueState => ({ searchedValue: '' }),
  getters: {
    get:(state)=> state.searchedValue,
  },
  actions: {
    update(value: string) {
      this.searchedValue = value
    },
  },
})
