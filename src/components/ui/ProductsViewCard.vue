<template>
  <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 w-[900px]">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-sm font-semibold text-gray-700">{{ title }}</h2>

      <button class="flex items-center gap-1 bg-[#F9F9F9] border border-gray-200 px-3 py-1.5 rounded-xl text-xs text-gray-600">
        Last 7 days
        <v-icon name="md-arrow-drop-down-outlined" class="w-4 h-4 text-gray-500" />
      </button>
    </div>

    <div class="flex flex-col items-center gap-6">
      <div class="text-4xl font-bold text-gray-900">$ 10.2m</div>

      <div class="flex-1">
        <BarChart />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Bar } from 'vue3-chart-v2';
import { defineComponent } from 'vue';

defineProps({
  title: {
    type: String,
    default: 'Product view',
  },
});

const BarChart = defineComponent({
  extends: Bar,
  mounted() {
    this.renderChart(
      {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Sales',
            data: [1.1, 0.8, 2.2, 1.0, 1.8, 0.6, 1.3],
            backgroundColor: ['#D1D5DB', '#D1D5DB', '#4CAF50', '#D1D5DB', '#D1D5DB', '#D1D5DB', '#D1D5DB'],
            borderRadius: 6,
          },
        ],
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#4B5563',
            titleFont: { size: 12 },
            bodyFont: { size: 12 },
            padding: 6,
            displayColors: false,
          },
        },
        scales: {
          x: { display: false },
          y: { display: false },
        },
      },
    );
  },
});
</script>
