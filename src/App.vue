
<template>
<button @click="handleChangeTheme">
  theme
</button>
</template>

<script setup>
import { ref, computed, onMounted } from "vue"
import { useThemeStore } from "@/stores/theme";
const themeStore = useThemeStore();
const theme = computed(() => themeStore.theme);
const handleChangeTheme = ()=>{
  const newTheme = theme.value === "dark" ? "light" : "dark";
  themeStore.setTheme(newTheme);
}
onMounted(()=>{
  themeStore.setTheme(themeStore.theme);
})
</script>

<style scoped>

</style>
