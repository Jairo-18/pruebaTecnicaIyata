<template>
  <article class="bg-[#F0F0F1]">
    <section class="flex flex-col md:flex-row gap-4 mb-4">
      <OverviewCard title="Overview" />
      <PopularProductsCard title="Popular products" />
    </section>
    <section class="flex flex-col md:flex-row gap-4">
      <ProductsViewCard title="Products view" class="hidden md:flex" />
      <CommentsCard title="Comments" class="hidden md:flex" />
    </section>
  </article>
</template>

<script setup>
import PopularProductsCard from '@/components/ui/PopularProductsCard.vue';
import OverviewCard from '../components/ui/OverviewCard.vue';
import ProductsViewCard from '@/components/ui/ProductsViewCard.vue';
import CommentsCard from '@/components/ui/CommentsCard.vue';
</script>
