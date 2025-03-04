import { defineStore } from 'pinia'

import { useUserStore } from './modules/useUserStore'

export const useStore = defineStore('storeId', {
  // 推荐使用 完整类型推断的箭头函数
  state: () => {
    return {
      user: useUserStore() //用户
    }
  },
  actions: {},
  getters: {}
})
