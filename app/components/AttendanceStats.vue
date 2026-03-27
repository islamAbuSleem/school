<script setup lang="ts">
import { TrendingUp, Clock, ShieldCheck, RefreshCw } from 'lucide-vue-next'

const stats = [
  { label: 'Historical Avg', value: '96.4%', icon: TrendingUp },
  { label: 'Avg Late Entry', value: '4.2 min', icon: Clock },
  { label: 'Validation', value: 'Biometric', icon: ShieldCheck },
  { label: 'Cloud Sync', value: 'Live', icon: RefreshCw, italic: true },
]
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
    <div 
      v-for="stat in stats" 
      :key="stat.label"
      class="glass-card flex items-center gap-4"
    >
      <div class="bg-slate-100 p-3 rounded-xl">
        <component :is="stat.icon" class="w-5 h-5 text-slate-600" stroke-width="1.5" />
      </div>
      <div>
        <p class="text-[10px] font-medium text-slate-400 uppercase tracking-wider mb-0.5">{{ stat.label }}</p>
        <p :class="['text-lg font-bold text-slate-700', stat.italic ? 'italic' : '']">{{ stat.value }}</p>
      </div>
    </div>
  </div>
</template>
