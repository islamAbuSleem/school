<script setup lang="ts">
import { FileText, AlertTriangle, Users2, Calendar } from 'lucide-vue-next'

const activities = [
  { action: 'Grade Published', details: 'Physics Quiz #4: 92/100', time: '2 HOURS AGO', icon: FileText, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { action: 'Attendance Warning', details: 'Unexcused late arrival: History', time: 'YESTERDAY', icon: AlertTriangle, color: 'text-red-500', bg: 'bg-red-50' },
  { action: 'PTC Scheduled', details: 'Meeting with Dr. Aris (Math)', time: '3 DAYS AGO', icon: Users2, color: 'text-indigo-500', bg: 'bg-indigo-50' },
]

const deadlines = [
  { title: 'History Essay', details: 'Modern European Revolutions', due: 'Due Tomorrow', color: 'text-red-500', bg: 'bg-red-50' },
  { title: 'Science Lab Report', details: 'Fluid Dynamics Analysis', due: 'Friday, Oct 20', color: 'text-indigo-500', bg: 'bg-indigo-50' },
]
</script>

<template>
  <div class="space-y-10">
    <!-- Recent Activity -->
    <div class="bg-white rounded-[40px] p-10 shadow-sm ring-1 ring-slate-100 flex-1 relative group">
      <div class="flex items-center justify-between mb-12">
        <h3 class="text-xl font-black text-[#0F172A] tracking-tight flex items-center">
          <Calendar class="w-6 h-6 mr-3 text-indigo-600" />
          Recent Activity
        </h3>
      </div>

      <div class="space-y-10">
        <div 
          v-for="activity in activities" 
          :key="activity.action"
          class="flex items-start space-x-6 relative transition-all hover:translate-x-1 cursor-pointer group/item"
        >
          <div :class="['p-4 rounded-2xl shadow-sm ring-1 ring-white transition-all group-hover/item:scale-110', activity.bg]">
            <component :is="activity.icon" class="w-6 h-6" :class="activity.color" stroke-width="2.5" />
          </div>
          <div>
            <h4 class="text-sm font-black text-[#0F172A] leading-snug">{{ activity.action }}</h4>
            <p class="text-[11px] font-bold text-slate-400 mt-1">{{ activity.details }}</p>
            <p class="text-[9px] font-black text-slate-300 tracking-widest uppercase mt-2">{{ activity.time }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Upcoming Deadlines -->
    <div class="bg-white rounded-[40px] p-10 shadow-sm ring-1 ring-slate-100 flex-1 relative group overflow-hidden">
      <div class="flex items-center justify-between mb-12">
        <h3 class="text-xl font-black text-[#0F172A] tracking-tight flex items-center">
          <Calendar class="w-6 h-6 mr-3 text-red-500" />
          Upcoming Deadlines
        </h3>
      </div>

      <div class="space-y-6">
        <div 
          v-for="deadline in deadlines" 
          :key="deadline.title"
          class="p-6 rounded-3xl border border-slate-50 transition-all hover:scale-[1.01] cursor-pointer group/item"
        >
          <div class="flex items-center justify-between mb-3">
            <span :class="['text-[9px] font-black tracking-widest uppercase', deadline.color]">{{ deadline.due }}</span>
          </div>
          <h4 class="text-base font-black text-[#0F172A] leading-tight group-hover/item:text-indigo-600 transition-colors">{{ deadline.title }}</h4>
          <p class="text-[11px] font-bold text-slate-400 mt-2">{{ deadline.details }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
