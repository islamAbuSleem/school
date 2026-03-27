<template>
  <div class="max-w-[1600px] mx-auto pb-16">
    <div class="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
      <div>
        <h2 class="page-title">Grade Prediction Insight</h2>
        <p class="text-sm text-slate-500 mt-2 leading-relaxed max-w-xl uppercase tracking-wide">
          Projected performance for Julian Edwards — Semester 2, 2024
        </p>
      </div>
      
      <div class="glass-card flex items-center gap-4 p-4 hover:scale-[1.01] transition-transform cursor-pointer">
        <div class="text-right">
          <p class="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Confidence Level</p>
          <p class="text-2xl font-bold text-slate-800" style="font-family: var(--font-display)">94% AI Accuracy</p>
        </div>
        <div class="p-3 bg-indigo-50 rounded-xl">
          <Sparkles class="w-5 h-5 text-accent" stroke-width="2" />
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-6">
      <div class="space-y-6">
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
</script>
