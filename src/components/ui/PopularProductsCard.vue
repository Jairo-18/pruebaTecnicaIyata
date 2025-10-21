<template>
  <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 w-[245px] md:w-[500px]">
    <div class="flex content-between mb-4">
      <h2 class="text-lg font-bold text-gray-800">{{ title }}</h2>
    </div>

    <div class="flex flex-col gap-3">
      <div v-for="(product, index) in products" :key="index" class="flex items-center justify-between rounded-xl px-4 py-2">
        <div class="flex items-center gap-3">
          <img :src="product.image" alt="product" class="w-5 h-5 md:w-12 md:h-12 rounded-xl object-cover" />
          <div class="flex flex-col">
            <span class="text-sm font-semibold text-gray-800">{{ product.name }}</span>
            <span class="text-xs text-gray-500">{{ product.brand }}</span>
          </div>
        </div>

        <div class="flex flex-col items-center gap-3">
          <span class="text-sm font-semibold text-gray-900">${{ product.price }}</span>
          <span :class="['text-xs font-medium px-2 py-0.5 rounded-md', product.status === 'Active' ? 'text-green-600 bg-green-100' : 'text-gray-500 bg-gray-100']">
            {{ product.status }}
          </span>
        </div>
      </div>
    </div>

    <div class="flex justify-center mt-4">
      <button class="w-full bg-[#F4F4F4] text-gray-400 text-sm py-2 rounded-xl hover:bg-gray-200 transition">All products</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Popular products',
  },
});

const products = [
  {
    name: 'Shirt - Man',
    brand: 'Gucci',
    price: '3.000',
    status: 'Active',
    image: 'https://cdn-icons-png.flaticon.com/512/2974/2974807.png',
  },
  {
    name: 'Shirt - Man',
    brand: 'Gucci',
    price: '3.000',
    status: 'Active',
    image: 'https://cdn-icons-png.flaticon.com/512/2974/2974807.png',
  },
  {
    name: 'Shirt - Man',
    brand: 'Gucci',
    price: '3.000',
    status: 'Active',
    image: 'https://cdn-icons-png.flaticon.com/512/2974/2974807.png',
  },
  {
    name: 'Shirt - Man',
    brand: 'Gucci',
    price: '3.000',
    status: 'Active',
    image: 'https://cdn-icons-png.flaticon.com/512/2974/2974807.png',
  },
];
</script>
