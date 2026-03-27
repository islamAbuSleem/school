<script setup lang="ts">
import { ChevronDown, Filter } from 'lucide-vue-next'

const filters = [
  { label: 'Grade Level', value: 'All Grades' },
  { label: 'Section', value: 'All Sections' },
  { label: 'Status', value: 'Active Only' },
]
</script>

<template>
  <div class="glass-card-static flex items-center gap-4 p-4">
    <div class="flex items-center gap-4 flex-1">
      <div v-for="filter in filters" :key="filter.label" class="flex-1 min-w-0">
        <p class="text-[10px] font-medium text-slate-400 uppercase tracking-wider mb-2">{{ filter.label }}</p>
        <button class="w-full flex items-center justify-between px-4 py-2.5 bg-slate-50 text-slate-700 text-sm font-medium rounded-xl transition-all hover:bg-slate-100 border border-transparent hover:border-slate-200">
          {{ filter.value }}
          <ChevronDown class="w-4 h-4 text-slate-400" />
        </button>
      </div>
    </div>
    
    <button class="p-3.5 bg-accent text-white rounded-xl shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all hover:scale-105">
      <Filter class="w-5 h-5" stroke-width="2" />
    </button>
  </div>
</template>
