<script setup lang="ts">
const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN']
</script>

<template>
  <div class="bg-white rounded-[40px] p-10 shadow-sm ring-1 ring-slate-100 flex-1 relative overflow-hidden">
    <div class="flex items-center justify-between mb-12">
      <h3 class="text-xl font-black text-[#0F172A] tracking-tight">Monthly Financial Overview</h3>
      <div class="flex items-center space-x-3 bg-slate-50 p-1.5 rounded-2xl">
        <button class="px-6 py-2 text-[10px] font-black tracking-widest bg-white text-[#0F172A] rounded-xl shadow-sm ring-1 ring-slate-100 uppercase">Revenue</button>
        <button class="px-6 py-2 text-[10px] font-black tracking-widest text-slate-400 hover:text-slate-600 uppercase">Expenses</button>
      </div>
    </div>

    <!-- Chart Placeholder -->
    <div class="h-64 flex items-end justify-between px-4">
      <div v-for="month in months" :key="month" class="flex flex-col items-center space-y-6 w-full">
        <div class="relative w-2 h-48 bg-slate-50 rounded-full flex items-end overflow-hidden group">
          <div 
            class="w-full bg-[#0F172A] rounded-full transition-all duration-1000 group-hover:bg-indigo-600"
            :style="{ height: month === 'APR' ? '60%' : '30%' }"
          ></div>
          <!-- Label for APR -->
          <div v-if="month === 'APR'" class="absolute top-[35%] -left-6 bg-[#0F172A] text-white text-[9px] font-black px-2 py-1 rounded shadow-lg transform rotate-[-5deg]">
            $24k
          </div>
        </div>
        <span class="text-[10px] font-black text-slate-300 tracking-[0.2em] uppercase">{{ month }}</span>
      </div>
    </div>
  </div>
</template>
