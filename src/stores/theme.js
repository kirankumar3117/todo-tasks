import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    theme: localStorage.getItem("theme") || "light"
  }),
  getters: {
    curTheme: (state) => state.theme
  },
  actions: {
    setTheme(payload) {
    this.theme = payload;
    localStorage.setItem("theme", payload)
    document.documentElement.setAttribute("data-theme", payload); 
    },
  }
})