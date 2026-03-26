<script setup lang="ts">
import { AlertTriangle } from 'lucide-vue-next'

const predictions = [
  { 
    subject: 'Calculus II', 
    category: 'MATHEMATICS', 
    current: '78%', 
    predicted: '84%', 
    change: '+6%', 
    probability: '62%', 
    risk: 'MEDIUM (Consistency)', 
    riskLevel: 'text-orange-500 bg-orange-50 ring-orange-100',
    description: "Julian's performance dips during late-week quizzes. Stabilizing quiz scores could yield a 90% final grade." 
  },
  { 
    subject: 'Modern History', 
    category: 'HUMANITIES', 
    current: '91%', 
    predicted: '94%', 
    change: '+3%', 
    probability: '88%', 
    risk: 'LOW', 
    riskLevel: 'text-green-600 bg-green-50 ring-green-100',
    description: "Excellent participation and essay scores. Predicted to maintain top-tier performance through finals." 
  },
]
</script>

<template>
  <div class="grid grid-cols-2 gap-8 mb-12">
    <div 
      v-for="pred in predictions" 
      :key="pred.subject"
      class="bg-white p-10 rounded-[40px] shadow-sm ring-1 ring-slate-100 flex flex-col justify-between transition-all hover:scale-[1.01] cursor-pointer group"
    >
      <div class="flex items-start justify-between mb-10">
        <div>
          <span class="px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100 shadow-sm">
            {{ pred.category }}
          </span>
          <h3 class="text-3xl font-black text-[#0F172A] tracking-tighter mt-6">{{ pred.subject }}</h3>
        </div>
        <div class="text-right">
          <p class="text-[10px] font-black text-slate-300 tracking-widest uppercase mb-1">CURRENT</p>
          <p class="text-3xl font-black text-[#0F172A] tracking-tighter">{{ pred.current }}</p>
        </div>
      </div>

      <div class="mb-10">
        <p class="text-[10px] font-black text-slate-400 tracking-widest uppercase mb-4">PREDICTED FINAL GRADE</p>
        <div class="flex items-baseline space-x-4">
          <p class="text-7xl font-black text-[#0F172A] tracking-tighter">{{ pred.predicted }}</p>
          <p class="text-xl font-black text-green-500 tracking-tight italic">{{ pred.change }}</p>
        </div>
      </div>

      <div class="space-y-4 mb-10">
        <div class="flex items-center justify-between">
          <p class="text-[10px] font-black text-slate-400 tracking-widest uppercase">Probability of Grade A+</p>
          <p class="text-[10px] font-black text-[#0F172A] tracking-widest uppercase">{{ pred.probability }}</p>
        </div>
        <div class="w-full h-2 bg-slate-50 rounded-full overflow-hidden">
          <div class="h-full bg-[#0F172A] rounded-full transition-all duration-1000" :style="{ width: pred.probability }"></div>
        </div>
      </div>

      <div :class="['p-6 rounded-[24px] ring-1 shadow-sm', pred.riskLevel]">
        <h4 class="text-[10px] font-black tracking-widest uppercase mb-3 flex items-center">
          <AlertTriangle class="w-4 h-4 mr-2" />
          RISK: {{ pred.risk }}
        </h4>
        <p class="text-[11px] font-bold leading-relaxed opacity-70">{{ pred.description }}</p>
      </div>
    </div>
  </div>
</template>
