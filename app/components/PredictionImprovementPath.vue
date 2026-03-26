<script setup lang="ts">
import { Sparkles, ClipboardList, Lightbulb, Calendar, ArrowRight } from 'lucide-vue-next'

const paths = [
  { 
    title: 'IMMEDIATE FOCUS', 
    icon: Sparkles, 
    color: 'text-indigo-400', 
    description: 'Calculus Quiz 5 Preparation: Data shows a gap in Integral Calculus mastery.', 
    bg: 'bg-white/10' 
  },
  { 
    title: 'BEHAVIORAL ALERT', 
    icon: ClipboardList, 
    color: 'text-orange-400', 
    description: 'Attendance in History: 15% drop in late-session attendance correlated with quiz dips.', 
    bg: 'bg-white/10' 
  },
  { 
    title: 'OPTIMIZATION', 
    icon: Lightbulb, 
    color: 'text-indigo-400', 
    description: 'Physics Lab: Submit the optional extra credit for a predicted 2% total grade lift.', 
    bg: 'bg-white/10' 
  },
]
</script>

<template>
  <div class="bg-[#051139] rounded-[48px] p-16 shadow-2xl ring-1 ring-white/5 relative overflow-hidden group">
    <div class="absolute -top-12 -right-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
    
    <div class="flex items-center space-x-6 mb-16">
      <Sparkles class="w-8 h-8 text-indigo-400" />
      <h3 class="text-4xl font-black text-white tracking-tighter uppercase">Strategic Improvement Path</h3>
    </div>

    <div class="grid grid-cols-3 gap-10">
      <div 
        v-for="path in paths" 
        :key="path.title"
        class="flex flex-col h-full rounded-[32px] p-8 transition-all hover:bg-white/5 cursor-pointer border border-white/5 group/item"
      >
        <div :class="['p-4 rounded-2xl w-fit mb-8 shadow-xl', path.bg]">
          <component :is="path.icon" class="w-6 h-6" :class="path.color" stroke-width="2.5" />
        </div>
        <h4 class="text-[11px] font-black tracking-[0.2em] text-white/40 uppercase mb-4">{{ path.title }}</h4>
        <p class="text-sm font-bold text-white leading-relaxed mb-8 flex-1 opacity-80 group-hover/item:opacity-100 transition-opacity">{{ path.description }}</p>
      </div>
    </div>
  </div>

  <div class="mt-12 bg-red-50/50 rounded-[48px] p-12 shadow-sm ring-1 ring-red-100 flex items-center justify-between group overflow-hidden relative">
    <div class="absolute -top-12 -right-12 w-64 h-64 bg-red-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
    
    <div class="flex items-center space-x-10 relative">
      <div class="p-5 bg-white rounded-3xl shadow-xl ring-1 ring-red-50 group-hover:rotate-12 transition-transform">
        <Calendar class="w-8 h-8 text-red-600" stroke-width="2.5" />
      </div>
      <div>
        <h4 class="text-2xl font-black text-[#0F172A] tracking-tight mb-2 uppercase">Schedule Consultation</h4>
        <p class="text-[11px] font-bold text-red-600/60 uppercase tracking-widest">Discuss these predictions with Julian's Advisor.</p>
      </div>
    </div>
    
    <button class="px-10 py-5 bg-white text-red-600 rounded-[20px] font-black text-[11px] tracking-widest uppercase shadow-xl hover:bg-red-50 transition-all transform hover:translate-y-[-2px] relative">
      Book Now
    </button>
  </div>
</template>
