<template>
  <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 w-[245px] md:w-[900px]">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-sm font-semibold text-gray-700">{{ title }}</h2>

      <button class="flex items-center gap-1 bg-[#F9F9F9] border border-gray-200 px-3 py-1.5 rounded-xl text-xs text-gray-600">
        Last month
        <v-icon name="md-arrow-drop-down-outlined" class="w-4 h-4 text-gray-500" />
      </button>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#F9F9F9] border border-[#E0E0E0] p-2 rounded-lg">
      <div class="border bg-white border-gray-200 rounded-xl px-6 py-12 flex flex-col md:flex-row justify-between gap-2 md:gap-0">
        <div class="flex flex-col justify-center">
          <div class="flex justify-between items-center mb-2">
            <div class="flex items-center gap-2">
              <v-icon name="co-user" class="w-5 h-5 text-gray-700" />
              <span class="text-sm font-medium text-gray-600">Customers</span>
            </div>
          </div>
          <p class="text-4xl font-bold text-gray-900">1,293</p>
        </div>
        <div class="flex flex-col h-full justify-center max-w-min">
          <span class="text-xs text-red-600 bg-red-100 px-3 py-1.5 rounded-md">36.8%</span>
          <p class="text-xs text-gray-400 mt-1">vs. last month</p>
        </div>
      </div>

      <div class="px-6 py-12 flex flex-col md:flex-row justify-between gap-2 md:gap-0">
        <div class="flex flex-col justify-center">
          <div class="flex justify-between items-center mb-2">
            <div class="flex items-center gap-2">
              <v-icon name="co-wallet" class="w-5 h-5 text-gray-700" />
              <span class="text-sm font-medium text-gray-600">Balance</span>
            </div>
          </div>
          <p class="text-4xl font-bold text-gray-900">256k</p>
        </div>
        <div class="flex flex-col h-full justify-center max-w-min">
          <span class="text-xs text-green-600 bg-green-100 px-3 py-1.5 rounded-md">36.8%</span>
          <p class="text-xs text-gray-400 mt-1">vs. last month</p>
        </div>
      </div>
    </div>

    <div class="flex flex-col mt-4">
      <span class="text-lg font-bold">867 new customers today!</span>
      <span class="text-[#949494] text-xs">Send a welcome message to all new customers.</span>
    </div>

    <div class="flex items-center gap-12 mt-6">
      <div v-for="(user, index) in users" :key="index" class="flex flex-col items-center">
        <img :src="user.image" alt="User avatar" class="w-5 h-5 md:w-14 md:h-14 rounded-full object-cover" />
        <span class="text-xs mt-1 text-gray-600">{{ user.name }}</span>
      </div>

      <div class="flex flex-col items-center justify-center cursor-pointer hover:opacity-80 transition">
        <div class="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center">
          <v-icon name="bi-arrow-right" class="text-gray-700" />
        </div>
        <span class="text-xs mt-1 text-gray-600">View all</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Overview',
  },
});

const users = [
  { name: 'Kevin', image: 'https://i.pravatar.cc/150?img=1' },
  { name: 'Laura', image: 'https://i.pravatar.cc/150?img=2' },
  { name: 'John', image: 'https://i.pravatar.cc/150?img=3' },
  { name: 'Sofia', image: 'https://i.pravatar.cc/150?img=4' },
  { name: 'Mark', image: 'https://i.pravatar.cc/150?img=5' },
  { name: 'Ana', image: 'https://i.pravatar.cc/150?img=6' },
  { name: 'Millei', image: 'https://i.pravatar.cc/150?img=8' },
];
</script>
