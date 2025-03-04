import { defineStore } from 'pinia'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useUserStore = defineStore('userStore', {
  // 推荐使用 完整类型推断的箭头函数
  state: () => {
    return {
      token: 'xxxxxxxxxxxxxxxxxxabcd'
    }
  },
  actions: {},
  getters: {},
  persist: {
    // 开启持久化
    enabled: true,
    // 选择存储方式和内容
    strategies: [
      {
        storage: localStorage, //默认走session
        paths: ['token']
      }
    ]
  }
})
