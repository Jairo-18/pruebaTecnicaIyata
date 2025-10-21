<template>
  <div class="flex min-h-screen !w-full">
    <Sidebar />
    <div class="flex-1 flex flex-col">
      <Navbar />
      <main class="flex-1 p-1 md:p-6 bg-[#F0F0F1]">
        <DashboardView />
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from './components/Sidebar.vue';
import Navbar from './components/Navbar.vue';
import DashboardView from './views/DashboardView.vue';
</script>
