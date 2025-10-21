<template>
  <div>
    <button class="md:hidden p-2 m-2 rounded-md bg-gray-200 hover:bg-gray-300" @click="open = !open">
      <v-icon :name="open ? 'bi-x' : 'bi-list'" class="w-6 h-6" />
    </button>

    <aside :class="['bg-[#F0F0F1] text-black flex flex-col p-5 transition-transform duration-300', 'w-[300px] md:translate-x-0 fixed md:static h-full z-50', open ? 'translate-x-0' : '-translate-x-full']">
      <div class="flex items-center gap-3 mb-6">
        <img :src="logoSrc" alt="Logo" class="w-[50px] h-[50px] rounded-full object-cover" />
      </div>

      <nav class="flex flex-col gap-2 h-full">
        <button v-for="(item, index) in menuItems" :key="index" class="flex items-center gap-3 w-full text-left px-4 py-2 rounded-md hover:bg-white hover:shadow-lg transition" @click="$emit('navigate', item.route)">
          <v-icon :name="item.icon" class="w-5 h-5 text-gray-700" />
          {{ item.label }}
        </button>

        <section class="h-full items-start justify-end flex flex-col gap-2 mt-auto">
          <button class="flex items-center justify-center gap-3 text-left px-4 py-2 rounded-full w-12 h-12 bg-white hover:bg-[#F0F0F1] hover:shadow-lg transition">
            <v-icon name="bi-chat-fill" class="w-5 h-5 text-gray-700" />
          </button>
          <div class="flex flex-col bg-white w-14 rounded-full p-1 gap-1">
            <button class="flex items-center justify-center gap-3 text-left px-4 py-2 rounded-full w-12 h-12 hover:bg-white hover:shadow-lg transition">
              <v-icon name="co-moon" class="w-5 h-5 text-gray-700" />
            </button>
            <button class="flex items-center justify-center gap-3 text-left px-4 py-2 rounded-full w-12 h-12 bg-[#F0F0F1] hover:bg-white hover:shadow-lg transition">
              <v-icon name="co-sun" class="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </section>
      </nav>
    </aside>

    <div v-if="open" class="fixed inset-0 bg-black bg-opacity-30 md:hidden" @click="open = false"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const open = ref(false);

defineProps({
  logoSrc: {
    type: String,
    default: '/src/assets/images/logo.jpeg',
  },
  menuItems: {
    type: Array,
    default: () => [
      { label: 'Dashboard', icon: 'md-dashboard-twotone', route: '/dashboard' },
      { label: 'Customers', icon: 'co-user', route: '/customers' },
      { label: 'Shop', icon: 'bi-shop-window', route: '/shop' },
      { label: 'Income', icon: 'co-send', route: '/income' },
      { label: 'Promote', icon: 'gi-boomerang-sun', route: '/promote' },
    ],
  },
});
</script>
