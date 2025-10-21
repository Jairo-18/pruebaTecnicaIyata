<template>
  <nav class="h-16 bg-[#F0F0F1] flex items-center justify-between px-4 md:px-6">
    <h1 class="font-extrabold text-xl md:text-2xl text-gray-800">Dashboard</h1>

    <div class="flex-1 flex justify-center md:justify-center">
      <div class="relative w-full max-w-xs md:w-[50%]">
        <v-icon name="bi-search" class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
        <input type="text" placeholder="Search anything..." class="w-full bg-white rounded-full py-2 pl-9 pr-4 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400" />
      </div>
    </div>

    <div class="hidden md:flex items-center gap-3">
      <button class="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition">Create</button>

      <button class="p-2 bg-white rounded-full hover:bg-gray-200 transition">
        <v-icon name="bi-chat" class="w-5 h-5 text-gray-700" />
      </button>

      <button class="p-2 bg-white rounded-full hover:bg-gray-200 transition">
        <v-icon name="bi-bell" class="w-5 h-5 text-gray-700" />
      </button>

      <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="User avatar" class="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm" />
    </div>

    <button class="md:hidden p-2 rounded-md bg-gray-200 hover:bg-gray-300" @click="mobileMenu = !mobileMenu">
      <v-icon :name="mobileMenu ? 'bi-x' : 'bi-list'" class="w-6 h-6" />
    </button>

    <div v-if="mobileMenu" class="absolute top-16 right-0 w-48 bg-white shadow-lg rounded-md flex flex-col p-2 gap-2 md:hidden z-50">
      <button class="w-full text-left px-4 py-2 rounded-md hover:bg-gray-100">Create</button>
      <button class="w-full text-left px-4 py-2 rounded-md hover:bg-gray-100">Chat</button>
      <button class="w-full text-left px-4 py-2 rounded-md hover:bg-gray-100">Notifications</button>
      <button class="w-full text-left px-4 py-2 rounded-md hover:bg-gray-100">Profile</button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
const mobileMenu = ref(false);
</script>
