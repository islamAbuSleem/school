<script setup lang="ts">
import { Target, TrendingUp, AlertTriangle } from 'lucide-vue-next'

const risks = [
  { label: 'Academic Stability', value: 'High', icon: TrendingUp, color: 'text-green-500' },
  { label: 'Engagement Variance', value: 'Medium', icon: Target, color: 'text-orange-500' },
  { label: 'Failure Risk', value: 'Low (2%)', icon: AlertTriangle, color: 'text-red-500' },
]

const history = [
  { week: 'WEEK 12', action: 'Prediction Adjusted +2%', details: 'Following English midterm results.', icon: TrendingUp, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { week: 'WEEK 8', action: 'Risk Flag: Calculus', details: 'Attendance dropped below 80% threshold.', icon: AlertTriangle, color: 'text-red-500', bg: 'bg-red-50' },
]
</script>

<template>
  <div class="space-y-12">
    <!-- Risk Profile Matrix -->
    <div class="bg-white rounded-[40px] p-12 shadow-sm ring-1 ring-slate-100 flex-1 relative group">
      <div class="flex items-center justify-between mb-12">
        <h3 class="text-xl font-black text-[#0F172A] tracking-tight">Risk Profile Matrix</h3>
      </div>

      <div class="space-y-10">
        <div 
          v-for="risk in risks" 
          :key="risk.label"
          class="flex items-center justify-between p-6 rounded-3xl bg-[#F8FAFC] transition-all hover:scale-[1.01] cursor-pointer group/item"
        >
          <div class="flex items-center space-x-6">
            <div :class="['w-2 h-2 rounded-full bg-current', risk.color]"></div>
            <h4 class="text-sm font-black text-[#0F172A] leading-snug">{{ risk.label }}</h4>
          </div>
          <p class="text-xs font-black text-[#0F172A] opacity-60 uppercase tracking-widest">{{ risk.value }}</p>
        </div>
      </div>

      <div class="mt-16 pt-10 border-t border-slate-50">
        <div class="flex items-center justify-between mb-6">
          <p class="text-[10px] font-black text-slate-400 tracking-widest uppercase">TARGET GPA: 3.8</p>
          <p class="text-3xl font-black text-[#0F172A] tracking-tighter">3.65</p>
        </div>
        <div class="w-full h-3 bg-slate-100 rounded-full overflow-hidden mb-4">
          <div class="h-full bg-[#0F172A] rounded-full transition-all duration-1000" style="width: 85%"></div>
        </div>
        <p class="text-[10px] font-bold text-slate-300 tracking-widest uppercase">92% of the way to the Dean's List goal.</p>
      </div>
    </div>

    <!-- Prediction History -->
    <div class="bg-white rounded-[40px] p-12 shadow-sm ring-1 ring-slate-100 flex-1 relative group">
      <div class="flex items-center justify-between mb-12">
        <h3 class="text-xl font-black text-[#0F172A] tracking-tight">Prediction History</h3>
      </div>

      <div class="space-y-12 pl-4 border-l-2 border-slate-50">
        <div 
          v-for="log in history" 
          :key="log.week"
          class="relative pl-10"
        >
          <div class="absolute -left-[11px] top-0 w-5 h-5 bg-[#0F172A] rounded-full ring-4 ring-white shadow-sm"></div>
          <p class="text-[9px] font-black text-slate-300 tracking-widest uppercase mb-2">{{ log.week }}</p>
          <h4 class="text-sm font-black text-[#0F172A] leading-snug">{{ log.action }}</h4>
          <p class="text-[11px] font-bold text-slate-400 mt-2 leading-relaxed">{{ log.details }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
