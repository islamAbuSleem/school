<template>
  <div class="max-w-[1600px] mx-auto pb-16 px-4 md:px-10">
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4">
      <div>
        <h2 class="text-3xl md:text-5xl font-black text-[#0F172A] tracking-tighter">Student Progress</h2>
        <p class="text-xs md:text-lg font-bold text-slate-400 mt-2 md:mt-4 leading-relaxed max-w-xl uppercase tracking-widest">Academic Year 2023/24 • Term 2</p>
      </div>
      
      <button class="w-full md:w-auto bg-[#0F172A] text-white px-6 md:px-10 py-3 md:py-5 rounded-lg md:rounded-[24px] font-black text-[10px] md:text-[11px] tracking-widest flex items-center justify-center md:justify-start shadow-2xl shadow-slate-200 hover:bg-slate-800 transition-all uppercase flex-shrink-0">
        <Download class="w-4 md:w-5 h-4 md:h-5 mr-2 md:mr-4" />
        Export Full Report
      </button>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-[1fr,350px] gap-8 md:gap-12">
      <div class="space-y-8 md:space-y-12">
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
