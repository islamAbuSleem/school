<script setup lang="ts">
const trends = [
  { label: 'Q1 2023', avg: 60, median: 40 },
  { label: 'Q2 2023', avg: 85, median: 60 },
  { label: 'Q3 2023', avg: 75, median: 55 },
  { label: 'Q4 2023', avg: 95, median: 80 },
]
</script>

<template>
  <div class="bg-white rounded-[40px] p-12 shadow-sm ring-1 ring-slate-100 flex-1 relative group overflow-hidden h-full">
    <div class="absolute -top-12 -right-12 w-64 h-64 bg-indigo-50/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
    
    <div class="flex items-center justify-between mb-12">
      <h3 class="text-2xl font-black text-[#0F172A] tracking-tighter uppercase">Historical Trends</h3>
      <div class="flex items-center space-x-6">
        <div class="flex items-center space-x-2">
          <div class="w-3 h-3 bg-[#0F172A] rounded-full"></div>
          <span class="text-[9px] font-black text-slate-400 tracking-widest uppercase">STUDENT AVG</span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="w-3 h-3 bg-red-600 rounded-full"></div>
          <span class="text-[9px] font-black text-slate-400 tracking-widest uppercase">CLASS MEDIAN</span>
        </div>
      </div>
    </div>

    <!-- Chart Placeholder -->
    <div class="h-80 flex items-end justify-between px-8 border-b border-slate-50 relative">
      <div v-for="trend in trends" :key="trend.label" class="flex flex-col items-center space-y-8 w-full relative">
        <div class="relative w-12 h-64 flex items-end justify-center group/bar">
          <!-- Student Avg Bar -->
          <div 
            class="w-full bg-indigo-100 rounded-t-lg transition-all duration-1000 group-hover/bar:bg-indigo-200"
            :style="{ height: trend.avg + '%' }"
          ></div>
          <!-- Class Median Bar -->
          <div 
            class="absolute bottom-0 w-6 bg-red-900 rounded-t-md transition-all duration-1000 group-hover/bar:bg-red-800 opacity-80"
            :style="{ height: trend.median + '%' }"
          ></div>
        </div>
        <span class="text-[10px] font-black text-slate-300 tracking-[0.2em] uppercase">{{ trend.label }}</span>
      </div>
    </div>
  </div>
</template>
