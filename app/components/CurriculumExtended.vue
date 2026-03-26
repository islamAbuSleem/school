<script setup lang="ts">
import { BookOpen, BarChart3, Palette, Monitor } from 'lucide-vue-next'

const extended = [
  { title: 'English Lit', icon: BookOpen, progress: 40, color: 'bg-[#0F172A]' },
  { title: 'Economics', icon: BarChart3, progress: 65, color: 'bg-indigo-600' },
  { title: 'Art History', icon: Palette, progress: 20, color: 'bg-[#0F172A]' },
  { title: 'Computer Science', icon: Monitor, progress: 85, color: 'bg-red-600' },
]
</script>

<template>
  <div class="mt-16">
    <div class="flex items-center justify-between mb-12">
      <h3 class="text-[10px] font-black text-slate-300 tracking-[0.4em] uppercase">EXTENDED CURRICULUM</h3>
    </div>

    <div class="grid grid-cols-4 gap-10">
      <div 
        v-for="sub in extended" 
        :key="sub.title"
        class="bg-white p-10 rounded-[40px] shadow-sm ring-1 ring-slate-100 flex items-center space-x-8 transition-all hover:scale-[1.02] cursor-pointer group"
      >
        <div class="p-4 bg-slate-50 rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
          <component :is="sub.icon" class="w-6 h-6 text-[#0F172A]" stroke-width="2.5" />
        </div>
        <div class="flex-1">
          <h4 class="text-sm font-black text-[#0F172A] mb-3 uppercase tracking-widest">{{ sub.title }}</h4>
          <div class="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
            <div 
              class="h-full rounded-full transition-all duration-1000"
              :class="sub.color"
              :style="{ width: sub.progress + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Assessment Cycle -->
    <div class="mt-16 bg-white rounded-[48px] p-16 shadow-sm ring-1 ring-slate-100 relative group overflow-hidden">
      <div class="absolute -top-12 -right-12 w-64 h-64 bg-indigo-50/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div class="grid grid-cols-[1.5fr,1fr] gap-20">
        <div>
          <h3 class="text-4xl font-black text-[#0F172A] tracking-tighter mb-4">Curriculum Assessment Cycle</h3>
          <p class="text-lg font-bold text-slate-400 mb-16 leading-relaxed max-w-lg">Upcoming summative assessments and syllabus milestones for the next 30 days.</p>
          
          <div class="flex items-center space-x-8">
            <div class="flex-1 p-8 rounded-[32px] bg-slate-50/50 ring-1 ring-slate-100 group/item transition-all hover:bg-white hover:shadow-xl hover:ring-slate-200">
              <p class="text-[9px] font-black text-slate-300 tracking-widest uppercase mb-2">OCT 14</p>
              <h4 class="text-sm font-black text-[#0F172A] mb-1">Math Quiz</h4>
              <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Calculus Pt 1</p>
            </div>
            <div class="flex-1 p-8 rounded-[32px] bg-slate-50/50 ring-1 ring-slate-100 border-l-4 border-red-600 group/item transition-all hover:bg-white hover:shadow-xl hover:ring-slate-200">
              <p class="text-[9px] font-black text-slate-300 tracking-widest uppercase mb-2">OCT 21</p>
              <h4 class="text-sm font-black text-[#0F172A] mb-1">Physics Lab</h4>
              <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Optics Report</p>
            </div>
            <div class="flex-1 p-8 rounded-[32px] bg-slate-50/50 ring-1 ring-slate-100 group/item transition-all hover:bg-white hover:shadow-xl hover:ring-slate-200">
              <p class="text-[9px] font-black text-slate-300 tracking-widest uppercase mb-2">NOV 02</p>
              <h4 class="text-sm font-black text-[#0F172A] mb-1">English Essay</h4>
              <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Gothic Lit</p>
            </div>
          </div>
        </div>

        <div class="flex flex-col items-center justify-center border-l border-slate-50 pl-20">
          <div class="w-48 h-48 bg-[#0F172A] rounded-3xl p-4 shadow-2xl transform rotate-[-3deg] hover:rotate-0 transition-transform cursor-pointer relative overflow-hidden group/card">
            <div class="absolute inset-0 bg-indigo-500/20 opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=calendar" class="w-full h-full object-cover rounded-2xl invert" />
          </div>
          <h4 class="text-sm font-black text-[#0F172A] mt-10 uppercase tracking-widest">Sync to Calendar</h4>
          <p class="text-[10px] font-bold text-slate-300 mt-3 text-center leading-relaxed uppercase tracking-widest max-w-[180px]">Scan to add all curriculum dates to your personal device.</p>
        </div>
      </div>
    </div>
  </div>
</template>
