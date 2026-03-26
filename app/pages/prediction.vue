<template>
  <div class="max-w-[1600px] mx-auto pb-16">
    <div class="flex items-center justify-between mb-12">
      <div>
        <h2 class="text-5xl font-black text-[#0F172A] tracking-tighter">Grade Prediction Insight</h2>
        <p class="text-lg font-bold text-slate-400 mt-4 leading-relaxed max-w-xl uppercase tracking-widest">Projected performance for Julian Edwards — Semester 2, 2024</p>
      </div>
      
      <div class="flex items-center space-x-4 bg-white p-6 rounded-[32px] shadow-sm ring-1 ring-slate-100 group transition-all hover:scale-[1.02] cursor-pointer">
        <div class="text-right mr-6">
          <p class="text-[10px] font-black text-slate-300 tracking-[0.2em] uppercase mb-1">CONFIDENCE LEVEL</p>
          <p class="text-3xl font-black text-[#0F172A] tracking-tighter">94% AI Accuracy</p>
        </div>
        <div class="p-4 bg-indigo-50 rounded-2xl shadow-sm ring-1 ring-indigo-100 group-hover:rotate-12 transition-transform">
          <Sparkles class="w-6 h-6 text-indigo-600" stroke-width="2.5" />
        </div>
      </div>
    </div>

    <div class="grid grid-cols-[1fr,450px] gap-12">
      <div class="space-y-12">
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
