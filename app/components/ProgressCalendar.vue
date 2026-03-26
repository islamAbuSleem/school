<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
const calendar = [
  { day: 25, active: false }, { day: 26, active: false }, { day: 27, active: false }, { day: 28, active: false }, { day: 29, active: false }, { day: 30, active: false }, { day: 1, active: true, bold: true },
  { day: 2, active: true }, { day: 3, active: true }, { day: 4, active: true }, { day: 5, active: true, event: 'Physics Lab', color: 'bg-indigo-50 text-indigo-600 ring-indigo-100' }, { day: 6, active: true }, { day: 7, active: true }, { day: 8, active: true },
  { day: 9, active: true }, { day: 10, active: true }, { day: 11, active: true }, { day: 12, active: true, selected: true }, { day: 13, active: true }, { day: 14, active: true }, { day: 15, active: true },
  { day: 16, active: true, event: 'MID-TERM EXAM', color: 'bg-red-50 text-red-600 ring-red-100' }, { day: 17, active: true }, { day: 18, active: true }, { day: 19, active: true }, { day: 20, active: true }, { day: 21, active: true }, { day: 22, active: true },
]
</script>

<template>
  <div class="bg-white rounded-[40px] p-12 shadow-sm ring-1 ring-slate-100 mt-12 overflow-hidden relative group">
    <div class="flex items-center justify-between mb-12">
      <h3 class="text-xl font-black text-[#0F172A] tracking-tight">Academic Calendar</h3>
      <div class="flex items-center space-x-6">
        <span class="text-sm font-black text-[#0F172A] uppercase tracking-widest">October 2023</span>
        <div class="flex items-center space-x-2">
          <button class="p-3 bg-slate-50 text-slate-400 hover:text-slate-600 rounded-xl shadow-sm transition-all"><ChevronLeft class="w-4 h-4" /></button>
          <button class="p-3 bg-slate-50 text-slate-400 hover:text-slate-600 rounded-xl shadow-sm transition-all"><ChevronRight class="w-4 h-4" /></button>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-7 border-t border-l border-slate-50">
      <div v-for="day in weekDays" :key="day" class="h-14 flex items-center justify-center border-b border-r border-slate-50 bg-slate-50/30">
        <span class="text-[10px] font-black text-slate-300 tracking-[0.2em] uppercase">{{ day }}</span>
      </div>

      <div 
        v-for="(date, i) in calendar" 
        :key="i"
        class="h-32 p-4 border-b border-r border-slate-50 transition-all hover:bg-slate-50/50 cursor-pointer relative"
        :class="[date.selected ? 'bg-[#F8FAFC] ring-2 ring-inset ring-[#0F172A] z-10' : '']"
      >
        <span :class="['text-xs font-black', date.active ? 'text-[#0F172A]' : 'text-slate-200', date.bold ? 'text-lg' : '']">
          {{ date.day }}
        </span>
        
        <div v-if="date.event" :class="['mt-3 p-2 rounded-lg text-[8px] font-black tracking-widest ring-1 shadow-sm uppercase', date.color]">
          {{ date.event }}
        </div>
      </div>
    </div>
  </div>
</template>
