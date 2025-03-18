<template>
  <div class="layout">
    <Header />
    <div class="menu-container">
        <SlideBar />
        <Main />
    </div>
  </div>
</template>
<script setup>
import Main from "@/components/layouts/main.vue";
import SlideBar from "@/components/layouts/slidebar.vue";
import Header from "@/components/layouts/header.vue";
</script>
