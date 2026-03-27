<script setup lang="ts">
import { AlertTriangle, Users2, DoorOpen } from 'lucide-vue-next'

const stats = [
  { 
    label: 'Conflicts Detected', 
    value: '02 Issues', 
    icon: AlertTriangle, 
    color: 'bg-red-50 text-red-600',
    iconBg: 'bg-white'
  },
  { 
    label: 'Teacher Utilization', 
    value: '88% Capacity', 
    icon: Users2, 
    color: 'bg-indigo-50 text-indigo-600',
    iconBg: 'bg-white'
  },
  { 
    label: 'Rooms Occupied', 
    value: '14 / 18', 
    icon: DoorOpen, 
    color: 'bg-slate-50 text-slate-600',
    iconBg: 'bg-white'
  },
]
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
    <div 
      v-for="stat in stats" 
      :key="stat.label"
      class="glass-card flex items-center gap-4"
    >
      <div :class="['p-3 rounded-xl shadow-sm', stat.iconBg]">
        <component :is="stat.icon" class="w-5 h-5" :class="stat.color.replace('bg-', 'text-')" stroke-width="2" />
      </div>
      <div>
        <p class="text-[10px] font-medium text-slate-400 uppercase tracking-wider mb-0.5">{{ stat.label }}</p>
        <p class="text-lg font-bold" :class="stat.color">{{ stat.value }}</p>
      </div>
    </div>
  </div>
</template>
