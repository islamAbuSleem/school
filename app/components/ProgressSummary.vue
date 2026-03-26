<script setup lang="ts">
import { TrendingUp, Calendar } from 'lucide-vue-next'

const stats = [
  { 
    label: 'CUMULATIVE GPA', 
    value: '3.8', 
    target: '/ 4.0',
    description: 'Benjamin ranks in the top 5% of his cohort this semester.', 
    icon: TrendingUp, 
    color: 'text-indigo-600', 
    bg: 'bg-indigo-50' 
  },
  { 
    label: 'ATTENDANCE', 
    value: '98.4%', 
    description: 'Total of 2 unexcused absences this term.', 
    icon: Calendar, 
    color: 'text-red-500', 
    bg: 'bg-red-50' 
  },
]
</script>

<template>
  <div class="grid grid-cols-2 gap-8 mb-10">
    <div 
      v-for="stat in stats" 
      :key="stat.label"
      class="bg-white p-10 rounded-[40px] shadow-sm ring-1 ring-slate-100 flex flex-col justify-between h-64 transition-all hover:scale-[1.02] cursor-pointer group"
    >
      <div class="flex items-start justify-between">
        <div :class="['px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase shadow-sm', stat.bg, stat.color]">
          {{ stat.label }}
        </div>
        <div class="p-3 bg-white rounded-2xl shadow-sm ring-1 ring-slate-100 group-hover:scale-110 transition-transform">
          <component :is="stat.icon" class="w-6 h-6" :class="stat.color" stroke-width="2.5" />
        </div>
      </div>
      <div>
        <div class="flex items-baseline space-x-3 mb-2">
          <p class="text-6xl font-black text-[#0F172A] tracking-tighter">{{ stat.value }}</p>
          <p v-if="stat.target" class="text-2xl font-black text-slate-300 tracking-tight">{{ stat.target }}</p>
        </div>
        <p class="text-[11px] font-bold text-slate-400 mt-2 max-w-[200px] leading-relaxed">{{ stat.description }}</p>
      </div>
    </div>
  </div>
</template>
