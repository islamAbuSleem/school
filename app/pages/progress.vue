<template>
  <div class="max-w-[1600px] mx-auto pb-16">
    <div class="flex items-end justify-between mb-12">
      <div>
        <h2 class="text-5xl font-black text-[#0F172A] tracking-tighter">Student Progress</h2>
        <p class="text-lg font-bold text-slate-400 mt-4 leading-relaxed max-w-xl uppercase tracking-widest">Academic Year 2023/24 • Term 2</p>
      </div>
      
      <button class="bg-[#0F172A] text-white px-10 py-5 rounded-[24px] font-black text-[11px] tracking-widest flex items-center shadow-2xl shadow-slate-200 hover:bg-slate-800 transition-all uppercase">
        <Download class="w-5 h-5 mr-4" />
        Export Full Report
      </button>
    </div>

    <div class="grid grid-cols-[1fr,350px] gap-12">
      <div>
        <ProgressSummary />
        <ProgressSubjectBreakdown />
        <ProgressCalendar />
      </div>
      
      <div>
        <ProgressActivityTimeline />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Download } from 'lucide-vue-next'
// Components are auto-imported by Nuxt
</script>
