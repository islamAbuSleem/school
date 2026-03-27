<script setup lang="ts">
import { AlertTriangle, Bus } from 'lucide-vue-next'

const alerts = [
  { 
    title: '5 students at high risk of academic failure.', 
    description: 'Immediate counselor review required.', 
    icon: AlertTriangle, 
    color: 'text-orange-500',
    bg: 'bg-orange-100'
  },
  { 
    title: 'Bus 03 delay reported (Route 12).', 
    description: 'ETA: 20 mins late due to roadworks.', 
    icon: Bus, 
    color: 'text-indigo-500',
    bg: 'bg-indigo-100'
  },
]
</script>

<template>
  <div class="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-6 shadow-xl relative overflow-hidden group">
    <div class="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <div class="flex items-center justify-between mb-6 relative">
      <h3 class="text-sm font-bold text-white uppercase tracking-wider flex items-center">
        <AlertTriangle class="w-5 h-5 mr-2 text-orange-400" />
        Administrative Alerts
      </h3>
    </div>

    <div class="space-y-4 relative">
      <div 
        v-for="alert in alerts" 
        :key="alert.title"
        class="flex items-start space-x-4 transition-all hover:translate-x-1 cursor-pointer p-3 rounded-xl hover:bg-white/5"
      >
        <div :class="['p-3 rounded-xl', alert.bg]">
          <component :is="alert.icon" class="w-5 h-5" :class="alert.color" stroke-width="2" />
        </div>
        <div>
          <h4 class="text-sm font-bold text-white leading-snug">{{ alert.title }}</h4>
          <p class="text-xs text-slate-400 mt-1">{{ alert.description }}</p>
        </div>
      </div>
    </div>

    <button class="w-full mt-6 py-3 text-xs font-medium text-slate-400 hover:text-white transition-colors border-t border-white/10 pt-4">
      DISMISS ALL
    </button>
  </div>
</template>
