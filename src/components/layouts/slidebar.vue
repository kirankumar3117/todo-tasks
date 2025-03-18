<template>
  <div class="sidebar">
    Slide Bar
    <button @click="handleChangeTheme">theme</button>
    <i class="ri-side-bar-fill"></i>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useThemeStore } from "@/stores/theme";
const themeStore = useThemeStore();
const theme = computed(() => themeStore.theme);
const handleChangeTheme = () => {
  const newTheme = theme.value === "dark" ? "light" : "dark";
  themeStore.setTheme(newTheme);
};
onMounted(() => {
  themeStore.setTheme(themeStore.theme);
});
</script>
