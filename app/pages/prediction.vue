<template>
  <div class="max-w-[1600px] mx-auto pb-16 px-4 md:px-10">
    <div class="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-12 gap-4">
      <div>
        <h2 class="text-3xl md:text-5xl font-black text-[#0F172A] tracking-tighter">Grade Prediction Insight</h2>
        <p class="text-xs md:text-lg font-bold text-slate-400 mt-2 md:mt-4 leading-relaxed max-w-xl uppercase tracking-widest">Projected performance for Julian Edwards — Semester 2, 2024</p>
      </div>
      
      <div class="w-full md:w-auto flex items-center space-x-3 md:space-x-4 bg-white p-4 md:p-6 rounded-xl md:rounded-[32px] shadow-sm ring-1 ring-slate-100 group transition-all hover:scale-[1.02] cursor-pointer flex-shrink-0">
        <div class="text-right md:mr-6">
          <p class="text-[10px] font-black text-slate-300 tracking-[0.2em] uppercase mb-0.5 md:mb-1">CONFIDENCE LEVEL</p>
          <p class="text-xl md:text-3xl font-black text-[#0F172A] tracking-tighter">94% AI Accuracy</p>
        </div>
        <div class="p-2 md:p-4 bg-indigo-50 rounded-lg md:rounded-2xl shadow-sm ring-1 ring-indigo-100 group-hover:rotate-12 transition-transform flex-shrink-0">
          <Sparkles class="w-4 md:w-6 h-4 md:h-6 text-indigo-600" stroke-width="2.5" />
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-[1fr,450px] gap-8 md:gap-12">
      <div class="space-y-8 md:space-y-12">
        <PredictionInsights />
        <PredictionImprovementPath />
      </div>
      
      <div>
        <PredictionHistory />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Sparkles } from 'lucide-vue-next'
// Components are auto-imported by Nuxt
</script>
