<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'

const viewOptions = [
  { label: 'Week View', active: true },
  { label: 'Day View', active: false },
]
</script>

<template>
  <div class="flex items-center justify-between mb-8">
    <div class="flex items-center space-x-6">
      <span class="text-[11px] font-black text-slate-400 tracking-[0.25em] uppercase">FILTERS :</span>
      <div class="flex items-center space-x-4">
        <button class="flex items-center px-5 py-2.5 bg-white text-[#0F172A] text-xs font-bold rounded-xl shadow-sm ring-1 ring-slate-100 hover:ring-slate-200 transition-all">
          Filter by Grade
          <ChevronDown class="w-4 h-4 ml-3 text-slate-400" />
        </button>
        <button class="flex items-center px-5 py-2.5 bg-white text-[#0F172A] text-xs font-bold rounded-xl shadow-sm ring-1 ring-slate-100 hover:ring-slate-200 transition-all">
          Filter by Teacher
          <ChevronDown class="w-4 h-4 ml-3 text-slate-400" />
        </button>
      </div>
    </div>

    <div class="bg-slate-100 p-1.5 rounded-2xl flex items-center space-x-1">
      <button 
        v-for="option in viewOptions" 
        :key="option.label"
        class="px-6 py-2 text-xs font-bold rounded-xl transition-all"
        :class="option.active ? 'bg-white text-[#0F172A] shadow-sm ring-1 ring-slate-200' : 'text-slate-400 hover:text-slate-600'"
      >
        {{ option.label }}
      </button>
    </div>
  </div>
</template>
