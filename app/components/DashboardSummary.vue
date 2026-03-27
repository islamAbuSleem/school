<script setup lang="ts">
import { Users2, GraduationCap, TrendingUp, Wallet } from 'lucide-vue-next'

const stats = [
  { label: 'Total Students', value: '1,240', change: '+12%', icon: Users2, color: 'from-indigo-500 to-indigo-600', badge: 'bg-emerald-100 text-emerald-600' },
  { label: 'Total Teachers', value: '84', status: 'Stable', icon: GraduationCap, color: 'from-red-500 to-red-600', badge: 'bg-slate-100 text-slate-500' },
  { label: 'Attendance Today', value: '94%', status: 'Excellent', icon: TrendingUp, color: 'from-orange-500 to-orange-600', badge: 'bg-emerald-100 text-emerald-600' },
  { label: 'Fees Collected', value: '$450k', status: 'On Track', icon: Wallet, color: 'from-blue-500 to-blue-600', badge: 'bg-emerald-100 text-emerald-600' },
]
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
    <div 
      v-for="(stat, index) in stats" 
      :key="stat.label"
      class="stat-card group opacity-0 animate-slide-up"
      :style="{ animationDelay: `${index * 0.1}s` }"
    >
      <div class="flex items-start justify-between mb-4">
        <div :class="['p-3 rounded-xl bg-gradient-to-br shadow-lg', stat.color]">
          <component :is="stat.icon" class="w-5 h-5 text-white" stroke-width="2.5" />
        </div>
        <div v-if="stat.change || stat.status" :class="['px-2.5 py-1 rounded-full text-[10px] font-bold', stat.badge]">
          {{ stat.change || stat.status }}
        </div>
      </div>
      <div>
        <p class="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">{{ stat.label }}</p>
        <p class="text-2xl font-bold text-slate-800" style="font-family: var(--font-display)">{{ stat.value }}</p>
      </div>
    </div>
  </div>
</template>
