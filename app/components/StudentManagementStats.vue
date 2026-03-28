<script setup lang="ts">
import { BarChart3, TrendingUp } from 'lucide-vue-next'
</script>

<template>
  <div class="glass-card group cursor-pointer p-4">
    <div class="flex items-start justify-between mb-4">
      <p class="text-xs font-medium text-slate-400 uppercase tracking-wider">Total Enrollment</p>
      <div class="p-2.5 bg-white rounded-xl shadow-md group-hover:scale-110 transition-transform">
        <BarChart3 class="w-4 h-4 text-accent" stroke-width="2" />
      </div>
    </div>
    <div class="flex items-baseline space-x-3">
      <p class="text-4xl font-bold text-slate-800" style="font-family: var(--font-display)">1,284</p>
      <p class="text-lg font-bold text-emerald-500 flex items-center">
        <TrendingUp class="w-4 h-4 mr-1" />
        +12%
      </p>
    </div>
    <p class="text-xs text-slate-400 mt-3 uppercase tracking-wide">Active academic session 2024–25</p>
  </div>
</template>
