<script setup lang="ts">
import { Users2, GraduationCap, TrendingUp, Wallet } from 'lucide-vue-next'

const stats = [
  { label: 'TOTAL STUDENTS', value: '1,240', change: '+12%', icon: Users2, color: 'text-indigo-600', bg: 'bg-indigo-50', badge: 'bg-green-50 text-green-600' },
  { label: 'TOTAL TEACHERS', value: '84', status: 'Stable', icon: GraduationCap, color: 'text-red-500', bg: 'bg-red-50', badge: 'bg-slate-50 text-slate-400' },
  { label: 'ATTENDANCE TODAY', value: '94%', status: 'Excellent', icon: TrendingUp, color: 'text-orange-500', bg: 'bg-orange-50', badge: 'bg-green-50 text-green-600' },
  { label: 'FEES COLLECTED', value: '$450k', status: 'On Track', icon: Wallet, color: 'text-blue-500', bg: 'bg-blue-50', badge: 'bg-green-50 text-green-600' },
]
</script>

<template>
  <div class="grid grid-cols-4 gap-6 mb-10">
    <div 
      v-for="stat in stats" 
      :key="stat.label"
      class="bg-white p-6 rounded-[32px] shadow-sm ring-1 ring-slate-100 flex flex-col justify-between h-44 transition-all hover:scale-[1.02] cursor-pointer"
    >
      <div class="flex items-start justify-between">
        <div :class="['p-3 rounded-2xl', stat.bg]">
          <component :is="stat.icon" class="w-6 h-6" :class="stat.color" stroke-width="2.5" />
        </div>
        <div v-if="stat.change || stat.status" :class="['px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase', stat.badge]">
          {{ stat.change || stat.status }}
        </div>
      </div>
      <div>
        <p class="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase mb-1">{{ stat.label }}</p>
        <p class="text-3xl font-black text-[#0F172A] tracking-tight">{{ stat.value }}</p>
      </div>
    </div>
  </div>
</template>
