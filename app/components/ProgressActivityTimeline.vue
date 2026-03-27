<script setup lang="ts">
import { FileText, AlertTriangle, Users2, Calendar } from 'lucide-vue-next'

const activities = [
  { action: 'Grade Published', details: 'Physics Quiz #4: 92/100', time: '2 hours ago', icon: FileText, color: 'text-accent', bg: 'bg-indigo-50' },
  { action: 'Attendance Warning', details: 'Unexcused late arrival: History', time: 'Yesterday', icon: AlertTriangle, color: 'text-red-500', bg: 'bg-red-50' },
  { action: 'PTC Scheduled', details: 'Meeting with Dr. Aris (Math)', time: '3 days ago', icon: Users2, color: 'text-accent', bg: 'bg-indigo-50' },
]

const deadlines = [
  { title: 'History Essay', details: 'Modern European Revolutions', due: 'Due Tomorrow', color: 'text-red-500', bg: 'bg-red-50' },
  { title: 'Science Lab Report', details: 'Fluid Dynamics Analysis', due: 'Friday, Oct 20', color: 'text-accent', bg: 'bg-indigo-50' },
]
</script>

<template>
  <div class="space-y-6">
    <div class="glass-card-static p-6">
      <div class="flex items-center justify-between mb-4">
        <h3 class="section-title text-lg flex items-center">
          <Calendar class="w-5 h-5 mr-2 text-accent" />
          Recent Activity
        </h3>
      </div>

      <div class="space-y-3">
        <div 
          v-for="activity in activities" 
          :key="activity.action"
          class="flex items-start gap-3 p-3 -mx-3 rounded-xl hover:bg-slate-50 transition-all cursor-pointer"
        >
          <div :class="['p-2.5 rounded-xl shadow-sm', activity.bg]">
            <component :is="activity.icon" class="w-4 h-4" :class="activity.color" stroke-width="2" />
          </div>
          <div class="flex-1 min-w-0">
            <h4 class="text-sm font-semibold text-slate-700">{{ activity.action }}</h4>
            <p class="text-xs text-slate-400 mt-0.5">{{ activity.details }}</p>
            <p class="text-[10px] text-slate-300 mt-1 uppercase tracking-wide">{{ activity.time }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="glass-card-static p-6 overflow-hidden">
      <div class="flex items-center justify-between mb-4">
        <h3 class="section-title text-lg flex items-center">
          <Calendar class="w-5 h-5 mr-2 text-red-500" />
          Upcoming Deadlines
        </h3>
      </div>

      <div class="space-y-3">
        <div 
          v-for="deadline in deadlines" 
          :key="deadline.title"
          class="p-4 rounded-xl border border-slate-100 hover:border-accent/30 transition-all cursor-pointer"
        >
          <div class="flex items-center justify-between mb-2">
            <span :class="['text-[10px] font-semibold uppercase', deadline.color]">{{ deadline.due }}</span>
          </div>
          <h4 class="text-sm font-semibold text-slate-700">{{ deadline.title }}</h4>
          <p class="text-xs text-slate-400 mt-1">{{ deadline.details }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
