import { defineStore } from 'pinia';
const useSettingStore = defineStore('settingStore', {
  state: () => {
    return {
      hasCollapse: false,
    }
  },
  actions: {
    updateCollapse() {
      this.hasCollapse = !this.hasCollapse;
    }
  }
})

export default useSettingStore;