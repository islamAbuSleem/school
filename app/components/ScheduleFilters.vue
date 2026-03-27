<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'

const viewOptions = [
  { label: 'Week View', active: true },
  { label: 'Day View', active: false },
]
</script>

<template>
  <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
    <div class="flex flex-wrap items-center gap-3">
      <span class="text-xs font-medium text-slate-400 uppercase tracking-wider">Filters:</span>
      <div class="flex flex-wrap items-center gap-2">
        <button class="flex items-center px-4 py-2 bg-white text-slate-600 text-sm font-medium rounded-xl shadow-sm border border-slate-100 hover:border-slate-200 transition-all">
          Filter by Grade
          <ChevronDown class="w-4 h-4 ml-2 text-slate-400" />
        </button>
        <button class="flex items-center px-4 py-2 bg-white text-slate-600 text-sm font-medium rounded-xl shadow-sm border border-slate-100 hover:border-slate-200 transition-all">
          Filter by Teacher
          <ChevronDown class="w-4 h-4 ml-2 text-slate-400" />
        </button>
      </div>
    </div>

    <div class="bg-slate-100 p-1 rounded-xl flex items-center">
      <button 
        v-for="option in viewOptions" 
        :key="option.label"
        class="px-4 py-2 text-sm font-medium rounded-lg transition-all"
        :class="option.active ? 'bg-white text-accent shadow-sm' : 'text-slate-400 hover:text-slate-600'"
      >
        {{ option.label }}
      </button>
    </div>
  </div>
</template>
