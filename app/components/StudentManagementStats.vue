<script setup lang="ts">
import { BarChart3 } from 'lucide-vue-next'
</script>

<template>
  <div class="bg-indigo-50/50 rounded-[40px] p-10 shadow-sm ring-1 ring-indigo-100/50 flex flex-col justify-between h-56 transition-all hover:scale-[1.02] cursor-pointer group">
    <div class="flex items-start justify-between">
      <p class="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase">TOTAL ENROLLMENT</p>
      <div class="p-3 bg-white rounded-2xl shadow-sm ring-1 ring-slate-100 group-hover:scale-110 transition-transform">
        <BarChart3 class="w-5 h-5 text-indigo-600" stroke-width="2.5" />
      </div>
    </div>
    <div>
      <div class="flex items-baseline space-x-4">
        <p class="text-6xl font-black text-[#0F172A] tracking-tighter">1,284</p>
        <p class="text-xl font-black text-red-500 tracking-tight">+12%</p>
      </div>
      <p class="text-[11px] font-bold text-slate-400 mt-4 uppercase tracking-widest">Active academic session 2024–25</p>
    </div>
  </div>
</template>
