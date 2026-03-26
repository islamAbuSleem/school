<script setup lang="ts">
import { ChevronDown, Filter } from 'lucide-vue-next'

const filters = [
  { label: 'GRADE LEVEL', value: 'All Grades' },
  { label: 'SECTION', value: 'All Sections' },
  { label: 'STATUS', value: 'Active Only' },
]
</script>

<template>
  <div class="bg-white rounded-[40px] p-10 shadow-sm ring-1 ring-slate-100 flex items-center justify-between h-56 group">
    <div class="flex items-center space-x-8 flex-1">
      <div v-for="filter in filters" :key="filter.label" class="flex-1">
        <p class="text-[10px] font-black text-slate-300 tracking-[0.2em] uppercase mb-4">{{ filter.label }}</p>
        <button class="w-full flex items-center justify-between px-6 py-4 bg-[#F1F5F9] text-[#0F172A] text-[11px] font-black rounded-[20px] shadow-inner ring-1 ring-slate-100 transition-all hover:ring-slate-200 uppercase tracking-widest group">
          {{ filter.value }}
          <ChevronDown class="w-4 h-4 ml-3 text-slate-300 group-hover:text-slate-500 transition-colors" />
        </button>
      </div>
    </div>
    
    <button class="ml-10 p-5 bg-[#0F172A] text-white rounded-[20px] shadow-xl shadow-slate-200 hover:bg-slate-800 transition-all group">
      <Filter class="w-6 h-6 group-hover:rotate-12 transition-transform" stroke-width="2.5" />
    </button>
  </div>
</template>
