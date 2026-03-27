<script setup lang="ts">
const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN']
</script>

<template>
  <div class="glass-card-static p-8">
    <div class="flex items-center justify-between mb-8">
      <h3 class="section-title">Monthly Financial Overview</h3>
      <div class="flex items-center space-x-1 bg-slate-100 p-1 rounded-xl">
        <button class="px-4 py-2 text-xs font-medium bg-white text-accent rounded-lg shadow-sm">Revenue</button>
        <button class="px-4 py-2 text-xs font-medium text-slate-400 hover:text-slate-600 transition-colors">Expenses</button>
      </div>
    </div>

    <div class="h-56 flex items-end justify-between px-2">
      <div v-for="month in months" :key="month" class="flex flex-col items-center w-full group">
        <div class="relative w-3 h-40 bg-slate-100 rounded-full flex items-end overflow-hidden">
          <div 
            class="w-full bg-gradient-to-t from-accent to-purple-400 rounded-full transition-all duration-700 group-hover:opacity-80"
            :style="{ height: month === 'APR' ? '70%' : month === 'MAR' ? '55%' : '35%' }"
          ></div>
          <div v-if="month === 'APR'" class="absolute -top-8 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-lg">
            $24k
          </div>
        </div>
        <span class="text-[10px] font-medium text-slate-400 mt-3 uppercase">{{ month }}</span>
      </div>
    </div>
  </div>
</template>
