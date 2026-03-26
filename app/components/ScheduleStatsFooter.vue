<script setup lang="ts">
import { AlertTriangle, Users2, DoorOpen } from 'lucide-vue-next'

const stats = [
  { 
    label: 'CONFLICTS DETECTED', 
    value: '02 Issues', 
    icon: AlertTriangle, 
    color: 'bg-red-50 text-red-600 ring-red-100',
    iconColor: 'text-red-600',
    iconBg: 'bg-white'
  },
  { 
    label: 'TEACHER UTILIZATION', 
    value: '88% Capacity', 
    icon: Users2, 
    color: 'bg-indigo-50 text-indigo-700 ring-indigo-100',
    iconColor: 'text-indigo-600',
    iconBg: 'bg-white'
  },
  { 
    label: 'ROOMS OCCUPIED', 
    value: '14 / 18', 
    icon: DoorOpen, 
    color: 'bg-slate-50 text-[#0F172A] ring-slate-100',
    iconColor: 'text-[#0F172A]',
    iconBg: 'bg-white'
  },
]
</script>

<template>
  <div class="grid grid-cols-3 gap-8 mt-12">
    <div 
      v-for="stat in stats" 
      :key="stat.label"
      class="p-8 rounded-3xl flex items-center space-x-6 shadow-sm ring-1 transition-all hover:scale-[1.01]"
      :class="stat.color"
    >
      <div :class="['p-4 rounded-2xl shadow-sm', stat.iconBg]">
        <component :is="stat.icon" class="w-7 h-7" :class="stat.iconColor" stroke-width="2" />
      </div>
      <div>
        <p class="text-[10px] font-black tracking-[0.2em] opacity-60 uppercase mb-1">{{ stat.label }}</p>
        <p class="text-2xl font-black">{{ stat.value }}</p>
      </div>
    </div>
  </div>
</template>
