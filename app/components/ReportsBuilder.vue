<script setup lang="ts">
import { ChevronDown, Download } from 'lucide-vue-next'

const quarters = ['Academic', 'Attendance']
</script>

<template>
  <div class="bg-white rounded-[40px] p-12 shadow-sm ring-1 ring-slate-100 flex-1 relative group overflow-hidden h-full">
    <div class="absolute -top-12 -right-12 w-64 h-64 bg-indigo-50/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
    
    <div class="flex items-center space-x-4 mb-12">
      <div class="p-3 bg-slate-50 rounded-2xl">
        <Download class="w-6 h-6 text-[#0F172A]" stroke-width="2.5" />
      </div>
      <h3 class="text-2xl font-black text-[#0F172A] tracking-tighter uppercase">Report Builder</h3>
    </div>

    <div class="space-y-10">
      <div>
        <p class="text-[10px] font-black text-slate-300 tracking-[0.2em] uppercase mb-4">ACADEMIC TERM</p>
        <button class="w-full flex items-center justify-between px-8 py-4 bg-[#F1F5F9] text-[#0F172A] text-[11px] font-black rounded-[24px] shadow-inner ring-1 ring-slate-100 transition-all hover:ring-slate-200 uppercase tracking-widest group">
          Fall Semester 2023
          <ChevronDown class="w-4 h-4 ml-3 text-slate-300 group-hover:text-slate-500 transition-colors" />
        </button>
      </div>

      <div>
        <p class="text-[10px] font-black text-slate-300 tracking-[0.2em] uppercase mb-4">SUBJECT AREA</p>
        <button class="w-full flex items-center justify-between px-8 py-4 bg-[#F1F5F9] text-[#0F172A] text-[11px] font-black rounded-[24px] shadow-inner ring-1 ring-slate-100 transition-all hover:ring-slate-200 uppercase tracking-widest group">
          All Subjects
          <ChevronDown class="w-4 h-4 ml-3 text-slate-300 group-hover:text-slate-500 transition-colors" />
        </button>
      </div>

      <div>
        <p class="text-[10px] font-black text-slate-300 tracking-[0.2em] uppercase mb-4">REPORT CATEGORY</p>
        <div class="flex items-center space-x-3 bg-slate-50 p-2 rounded-[24px]">
          <button v-for="cat in quarters" :key="cat" class="flex-1 px-8 py-3 text-[10px] font-black tracking-widest rounded-xl transition-all uppercase" :class="cat === 'Academic' ? 'bg-[#0F172A] text-white shadow-xl shadow-slate-200' : 'text-slate-400 hover:text-slate-600'">
            {{ cat }}
          </button>
        </div>
      </div>

      <button class="w-full mt-12 py-5 bg-[#0F172A] text-white rounded-[24px] font-black text-[11px] tracking-widest uppercase shadow-2xl shadow-slate-200 hover:bg-slate-800 transition-all transform hover:translate-y-[-2px]">
        Generate Deep-Dive
      </button>
    </div>
  </div>
</template>
