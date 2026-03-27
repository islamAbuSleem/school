<script setup lang="ts">
import { TrendingUp, Calendar } from 'lucide-vue-next'

const stats = [
  { 
    label: 'Cumulative GPA', 
    value: '3.8', 
    target: '/ 4.0',
    description: 'Benjamin ranks in the top 5% of his cohort this semester.', 
    icon: TrendingUp, 
    color: 'text-accent', 
    bg: 'bg-indigo-50' 
  },
  { 
    label: 'Attendance', 
    value: '98.4%', 
    description: 'Total of 2 unexcused absences this term.', 
    icon: Calendar, 
    color: 'text-red-500', 
    bg: 'bg-red-50' 
  },
]
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div 
      v-for="stat in stats" 
      :key="stat.label"
      class="glass-card"
    >
      <div class="flex items-start justify-between mb-4">
        <span :class="['px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm', stat.bg, stat.color]">
          {{ stat.label }}
        </span>
        <div class="p-2 bg-white rounded-xl shadow-md">
          <component :is="stat.icon" class="w-5 h-5" :class="stat.color" stroke-width="2" />
        </div>
      </div>
      <div>
        <div class="flex items-baseline gap-2 mb-1">
          <p class="text-4xl font-bold text-slate-800" style="font-family: var(--font-display)">{{ stat.value }}</p>
          <p v-if="stat.target" class="text-lg font-medium text-slate-300">{{ stat.target }}</p>
        </div>
        <p class="text-xs text-slate-400 mt-2 leading-relaxed">{{ stat.description }}</p>
      </div>
    </div>
  </div>
</template>
