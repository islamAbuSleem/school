<script setup lang="ts">
import { FileText, Download, Eye, Calendar, Settings } from 'lucide-vue-next'

const downloads = [
  { 
    title: 'Final Transcript 2023', 
    date: 'Dec 12, 2023', 
    size: '2.4 MB', 
    type: 'OFFICIAL', 
    icon: FileText, 
    color: 'text-indigo-600', 
    bg: 'bg-indigo-50', 
    badge: 'bg-orange-50 text-orange-600' 
  },
  { 
    title: 'Attendance Audit Q4', 
    date: 'Nov 30, 2023', 
    size: '1.1 MB', 
    type: 'DRAFT', 
    icon: Calendar, 
    color: 'text-indigo-600', 
    bg: 'bg-indigo-50', 
    badge: 'bg-slate-100 text-slate-400' 
  },
  { 
    title: 'Progress Assessment', 
    date: 'Oct 15, 2023', 
    size: '4.8 MB', 
    type: 'COUNSELOR', 
    icon: Settings, 
    color: 'text-indigo-600', 
    bg: 'bg-indigo-50', 
    badge: 'bg-orange-50 text-orange-600' 
  },
]
</script>

<template>
  <div class="mt-16">
    <div class="flex items-center justify-between mb-12">
      <h3 class="text-3xl font-black text-[#0F172A] tracking-tighter uppercase">Download Center</h3>
      <button class="text-[10px] font-black tracking-widest text-slate-400 hover:text-slate-600 uppercase border-b-2 border-transparent hover:border-slate-200 pb-1">View Archive</button>
    </div>

    <div class="grid grid-cols-3 gap-10">
      <div 
        v-for="file in downloads" 
        :key="file.title"
        class="bg-white p-10 rounded-[40px] shadow-sm ring-1 ring-slate-100 flex flex-col justify-between transition-all hover:scale-[1.02] cursor-pointer group"
      >
        <div class="flex items-start justify-between mb-10">
          <div :class="['p-4 rounded-2xl shadow-sm ring-1 ring-white transition-all group-hover:scale-110', file.bg]">
            <component :is="file.icon" class="w-6 h-6" :class="file.color" stroke-width="2.5" />
          </div>
          <span :class="['px-4 py-1.5 rounded-full text-[9px] font-black tracking-widest uppercase shadow-sm ring-1', file.badge]">
            {{ file.type }}
          </span>
        </div>

        <div class="mb-12">
          <h4 class="text-xl font-black text-[#0F172A] leading-tight mb-2">{{ file.title }}</h4>
          <p class="text-[11px] font-bold text-slate-400 tracking-widest uppercase">Generated on {{ file.date }} • {{ file.size }}</p>
        </div>

        <div class="flex items-center space-x-4">
          <button class="flex-1 py-4 bg-[#0F172A] text-white rounded-[20px] font-black text-[11px] tracking-widest uppercase shadow-xl hover:bg-slate-800 transition-all flex items-center justify-center">
            <Download class="w-4 h-4 mr-3" />
            Download
          </button>
          <button class="p-4 bg-slate-50 text-slate-400 hover:text-slate-600 rounded-[20px] transition-all">
            <Eye class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>

    <div class="mt-16 bg-[#0F172A] rounded-[40px] p-6 shadow-2xl flex items-center justify-between">
      <div class="flex items-center space-x-8 px-8">
        <div class="bg-red-700 px-6 py-2 rounded-xl text-[10px] font-black tracking-widest text-white uppercase shadow-lg">Academic Standing: Elite</div>
        <div class="flex items-baseline space-x-3">
          <span class="text-[10px] font-black text-slate-400 tracking-widest uppercase">GPA</span>
          <span class="text-2xl font-black text-white tracking-tighter">3.92</span>
        </div>
        <div class="flex items-baseline space-x-3">
          <span class="text-[10px] font-black text-slate-400 tracking-widest uppercase">RANK</span>
          <span class="text-2xl font-black text-white tracking-tighter">#12 / 450</span>
        </div>
        <div class="flex items-baseline space-x-3">
          <span class="text-[10px] font-black text-slate-400 tracking-widest uppercase">ATTENDANCE</span>
          <span class="text-2xl font-black text-white tracking-tighter">98.4%</span>
        </div>
      </div>
    </div>
  </div>
</template>
