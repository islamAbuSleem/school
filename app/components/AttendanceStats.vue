<script setup lang="ts">
import { TrendingUp, Clock, ShieldCheck, RefreshCw } from 'lucide-vue-next'

const stats = [
  { label: 'HISTORICAL AVG', value: '96.4%', icon: TrendingUp },
  { label: 'AVG LATE ENTRY', value: '4.2 min', icon: Clock },
  { label: 'VALIDATION', value: 'Biometric', icon: ShieldCheck },
  { label: 'CLOUD SYNC', value: 'Live', icon: RefreshCw, italic: true },
]
</script>

<template>
  <div class="grid grid-cols-4 gap-6 mt-8">
    <div 
      v-for="stat in stats" 
      :key="stat.label"
      class="bg-white p-6 rounded-3xl shadow-sm ring-1 ring-slate-100 flex items-center space-x-5"
    >
      <div class="bg-slate-50 p-3 rounded-2xl">
        <component :is="stat.icon" class="w-6 h-6 text-[#0F172A]" stroke-width="1.5" />
      </div>
      <div>
        <p class="text-[10px] font-bold text-slate-400 tracking-widest uppercase mb-1">{{ stat.label }}</p>
        <p :class="['text-xl font-bold text-[#0F172A]', stat.italic ? 'italic font-extrabold' : '']">{{ stat.value }}</p>
      </div>
    </div>
  </div>
</template>
