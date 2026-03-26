<script setup lang="ts">
import { AlertTriangle, Bus } from 'lucide-vue-next'

const alerts = [
  { 
    title: '5 students at high risk of academic failure.', 
    description: 'Immediate counselor review required.', 
    icon: AlertTriangle, 
    color: 'text-orange-500',
    bg: 'bg-orange-50'
  },
  { 
    title: 'Bus 03 delay reported (Route 12).', 
    description: 'ETA: 20 mins late due to roadworks.', 
    icon: Bus, 
    color: 'text-indigo-500',
    bg: 'bg-indigo-50'
  },
]
</script>

<template>
  <div class="bg-[#2D0A01] rounded-[40px] p-10 shadow-xl ring-1 ring-white/10 relative overflow-hidden group">
    <div class="flex items-center justify-between mb-12">
      <h3 class="text-xl font-black text-white tracking-tight flex items-center">
        <AlertTriangle class="w-6 h-6 mr-3 text-orange-500" />
        ADMINISTRATIVE ALERTS
      </h3>
    </div>

    <div class="space-y-10">
      <div 
        v-for="alert in alerts" 
        :key="alert.title"
        class="flex items-start space-x-6 relative transition-all hover:translate-x-1 cursor-pointer"
      >
        <div :class="['p-4 rounded-2xl shadow-lg', alert.bg]">
          <component :is="alert.icon" class="w-6 h-6" :class="alert.color" stroke-width="2.5" />
        </div>
        <div>
          <h4 class="text-sm font-black text-white leading-snug pr-4">{{ alert.title }}</h4>
          <p class="text-[11px] font-bold text-white/40 mt-1 leading-relaxed">{{ alert.description }}</p>
        </div>
      </div>
    </div>

    <button class="w-full mt-16 py-4 text-[10px] font-black tracking-widest text-white/40 hover:text-white uppercase transition-colors">
      DISMISS ALL
    </button>
  </div>
</template>
