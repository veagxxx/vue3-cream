import { defineStore } from 'pinia';
const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      user: {
        roles: ['admin', 'editor']
      },
    }
  },
  actions: {
    
  }
})

export default useUserStore;