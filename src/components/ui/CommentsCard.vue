<template>
  <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 w-[500px]">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-lg font-bold text-gray-800">{{ title }}</h2>
    </div>

    <div class="flex flex-col gap-4">
      <div v-for="(product, index) in products" :key="index" class="flex justify-between items-center p-3">
        <div class="flex items-center gap-3">
          <img :src="product.image" alt="Product image" class="w-12 h-12 rounded-xl object-cover" />
          <div class="flex flex-col">
            <div class="flex content-between items-center gap-1">
              <span class="text-sm font-semibold text-gray-800">{{ product.name }}</span>
              <span class="text-sm font-semibold text-gray-400">on</span>
              <span class="text-sm font-semibold text-gray-800">Bento pro 2.0</span>
            </div>
            <span class="text-xs text-gray-500">{{ product.brand }}</span>
            <span class="text-xs font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6 border border-[#E0E0E0] bg-[#F9F9F9] rounded-full overflow-hidden">
      <button class="w-full py-2 text-xs font-medium text-gray-500 hover:bg-gray-100 transition">All products</button>
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
    image: 'https://cdn-icons-png.flaticon.com/512/2543/2543193.png',
    name: 'Millei',
    brand: '8:00 am',
    price: '3.000',
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/512/2543/2543193.png',
    name: 'Millei',
    brand: '8:00 am',
    price: '3.000',
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/512/2543/2543193.png',
    name: 'Millei',
    brand: '8:00 am',
    price: '3.000',
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/512/2543/2543193.png',
    name: 'Millei',
    brand: '8:00 am',
    price: '3.000',
  },
  {
    image: 'https://cdn-icons-png.flaticon.com/512/2543/2543193.png',
    name: 'Millei',
    brand: '8:00 am',
    price: '3.000',
  },
];
</script>
<style scoped></style>
