<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
const calendar = [
  { day: 25, active: false }, { day: 26, active: false }, { day: 27, active: false }, { day: 28, active: false }, { day: 29, active: false }, { day: 30, active: false }, { day: 1, active: true, bold: true },
  { day: 2, active: true }, { day: 3, active: true }, { day: 4, active: true }, { day: 5, active: true, event: 'Physics Lab', color: 'bg-indigo-100 text-indigo-600' }, { day: 6, active: true }, { day: 7, active: true }, { day: 8, active: true },
  { day: 9, active: true }, { day: 10, active: true }, { day: 11, active: true }, { day: 12, active: true, selected: true }, { day: 13, active: true }, { day: 14, active: true }, { day: 15, active: true },
  { day: 16, active: true, event: 'MID-TERM EXAM', color: 'bg-red-100 text-red-600' }, { day: 17, active: true }, { day: 18, active: true }, { day: 19, active: true }, { day: 20, active: true }, { day: 21, active: true }, { day: 22, active: true },
]
</script>

<template>
  <div class="glass-card-static p-6 overflow-hidden">
    <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
      <h3 class="section-title">Academic Calendar</h3>
      <div class="flex items-center gap-3">
        <span class="text-sm font-semibold text-slate-600">October 2023</span>
        <div class="flex items-center gap-1">
          <button class="p-2 bg-slate-50 text-slate-400 hover:text-slate-600 rounded-lg transition-colors">
            <ChevronLeft class="w-4 h-4" />
          </button>
          <button class="p-2 bg-slate-50 text-slate-400 hover:text-slate-600 rounded-lg transition-colors">
            <ChevronRight class="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-7 border border-slate-100 rounded-xl overflow-hidden">
      <div v-for="day in weekDays" :key="day" class="h-10 flex items-center justify-center bg-slate-50 border-b border-slate-100">
        <span class="text-[10px] font-medium text-slate-400 uppercase tracking-wider">{{ day }}</span>
      </div>

      <div 
        v-for="(date, i) in calendar" 
        :key="i"
        class="h-24 p-2 border-b border-r border-slate-100 transition-all hover:bg-slate-50 cursor-pointer relative"
        :class="[date.selected ? 'bg-accent/5 ring-2 ring-accent/30' : '']"
      >
        <span :class="['text-xs font-semibold', date.active ? 'text-slate-700' : 'text-slate-200', date.bold ? 'text-base' : '']">
          {{ date.day }}
        </span>
        
        <div v-if="date.event" :class="['mt-1 p-1.5 rounded-lg text-[8px] font-semibold uppercase', date.color]">
          {{ date.event }}
        </div>
      </div>
    </div>
  </div>
</template>
